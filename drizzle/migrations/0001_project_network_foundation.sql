CREATE TYPE public.network_project_role AS ENUM ('viewer','editor','admin');
CREATE TYPE public.network_project_status AS ENUM ('active','archived');

CREATE TABLE public.network_owner_bootstrap (email text PRIMARY KEY);
GRANT ALL ON public.network_owner_bootstrap TO service_role;
ALTER TABLE public.network_owner_bootstrap ENABLE ROW LEVEL SECURITY;
INSERT INTO public.network_owner_bootstrap(email) VALUES ('ivan.daza@ravolution.se');

CREATE TABLE public.network_admins (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  granted_at timestamptz NOT NULL DEFAULT now(),
  granted_reason text NOT NULL DEFAULT 'bootstrap'
);
GRANT SELECT ON public.network_admins TO authenticated;
GRANT ALL ON public.network_admins TO service_role;
ALTER TABLE public.network_admins ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_network_admin(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.network_admins WHERE user_id = _user_id)
$$;

CREATE POLICY "self or admin read admins" ON public.network_admins FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_network_admin(auth.uid()));

CREATE TABLE public.network_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9][a-z0-9-]{1,40}$'),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 80),
  description text NOT NULL DEFAULT '' CHECK (char_length(description) <= 300),
  url text NOT NULL CHECK (url ~ '^https://[a-z0-9]([a-z0-9-]*[a-z0-9])?\.ravolution\.se(/[A-Za-z0-9._~/-]*)?$'),
  status public.network_project_status NOT NULL DEFAULT 'active',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.network_projects TO authenticated;
GRANT ALL ON public.network_projects TO service_role;
ALTER TABLE public.network_projects ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.network_project_members (
  project_id uuid NOT NULL REFERENCES public.network_projects(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  role public.network_project_role NOT NULL DEFAULT 'viewer',
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (project_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.network_project_members TO authenticated;
GRANT ALL ON public.network_project_members TO service_role;
ALTER TABLE public.network_project_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "members see own projects" ON public.network_projects FOR SELECT TO authenticated
  USING (public.is_network_admin(auth.uid()) OR (status = 'active' AND EXISTS (
    SELECT 1 FROM public.network_project_members m WHERE m.project_id = id AND m.user_id = auth.uid())));
CREATE POLICY "admins insert projects" ON public.network_projects FOR INSERT TO authenticated
  WITH CHECK (public.is_network_admin(auth.uid()));
CREATE POLICY "admins update projects" ON public.network_projects FOR UPDATE TO authenticated
  USING (public.is_network_admin(auth.uid())) WITH CHECK (public.is_network_admin(auth.uid()));

CREATE POLICY "read own or admin memberships" ON public.network_project_members FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_network_admin(auth.uid()));
CREATE POLICY "admins manage memberships" ON public.network_project_members FOR ALL TO authenticated
  USING (public.is_network_admin(auth.uid())) WITH CHECK (public.is_network_admin(auth.uid()));

CREATE TABLE public.network_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  project_id uuid REFERENCES public.network_projects(id) ON DELETE CASCADE,
  role public.network_project_role NOT NULL DEFAULT 'viewer',
  invited_by uuid NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','accepted','revoked')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.network_invitations TO authenticated;
GRANT ALL ON public.network_invitations TO service_role;
ALTER TABLE public.network_invitations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins manage invitations" ON public.network_invitations FOR ALL TO authenticated
  USING (public.is_network_admin(auth.uid())) WITH CHECK (public.is_network_admin(auth.uid()));

CREATE TABLE public.network_audit_log (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  actor uuid,
  action text NOT NULL,
  entity text NOT NULL,
  entity_id text,
  details jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.network_audit_log TO authenticated;
GRANT ALL ON public.network_audit_log TO service_role;
ALTER TABLE public.network_audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins read audit" ON public.network_audit_log FOR SELECT TO authenticated
  USING (public.is_network_admin(auth.uid()));

CREATE TABLE public.network_capabilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('method','artifact','agent')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  summary text NOT NULL CHECK (char_length(summary) <= 600),
  source_project_id uuid REFERENCES public.network_projects(id) ON DELETE SET NULL,
  version text NOT NULL DEFAULT '1.0',
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.network_capabilities TO authenticated;
GRANT ALL ON public.network_capabilities TO service_role;
ALTER TABLE public.network_capabilities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins manage capabilities" ON public.network_capabilities FOR ALL TO authenticated
  USING (public.is_network_admin(auth.uid())) WITH CHECK (public.is_network_admin(auth.uid()));

CREATE TABLE public.network_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  capability_id uuid NOT NULL REFERENCES public.network_capabilities(id) ON DELETE CASCADE,
  target_project_id uuid NOT NULL REFERENCES public.network_projects(id) ON DELETE CASCADE,
  reason text NOT NULL,
  expected_benefit text NOT NULL DEFAULT '',
  risks text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'proposed' CHECK (status IN ('proposed','accepted','dismissed')),
  decided_by uuid,
  decided_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.network_recommendations TO authenticated;
GRANT ALL ON public.network_recommendations TO service_role;
ALTER TABLE public.network_recommendations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins manage recommendations" ON public.network_recommendations FOR ALL TO authenticated
  USING (public.is_network_admin(auth.uid())) WITH CHECK (public.is_network_admin(auth.uid()));

-- Audit trigger
CREATE OR REPLACE FUNCTION public.network_audit() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE rec jsonb;
BEGIN
  rec := CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE to_jsonb(NEW) END;
  INSERT INTO public.network_audit_log(actor, action, entity, entity_id, details)
  VALUES (auth.uid(), lower(TG_OP), TG_TABLE_NAME,
    COALESCE(rec->>'id', rec->>'project_id', rec->>'user_id'), rec);
  RETURN NULL;
END $$;
CREATE TRIGGER audit_projects AFTER INSERT OR UPDATE OR DELETE ON public.network_projects FOR EACH ROW EXECUTE FUNCTION public.network_audit();
CREATE TRIGGER audit_members AFTER INSERT OR UPDATE OR DELETE ON public.network_project_members FOR EACH ROW EXECUTE FUNCTION public.network_audit();
CREATE TRIGGER audit_invites AFTER INSERT OR UPDATE OR DELETE ON public.network_invitations FOR EACH ROW EXECUTE FUNCTION public.network_audit();
CREATE TRIGGER audit_admins AFTER INSERT OR UPDATE OR DELETE ON public.network_admins FOR EACH ROW EXECUTE FUNCTION public.network_audit();
CREATE TRIGGER audit_caps AFTER INSERT OR UPDATE OR DELETE ON public.network_capabilities FOR EACH ROW EXECUTE FUNCTION public.network_audit();
CREATE TRIGGER audit_recs AFTER INSERT OR UPDATE OR DELETE ON public.network_recommendations FOR EACH ROW EXECUTE FUNCTION public.network_audit();

-- Owner bootstrap + invitation acceptance on verified email
CREATE OR REPLACE FUNCTION public.network_on_user_verified() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.email_confirmed_at IS NULL THEN RETURN NEW; END IF;
  IF TG_OP = 'UPDATE' AND OLD.email_confirmed_at IS NOT NULL THEN RETURN NEW; END IF;
  IF EXISTS (SELECT 1 FROM public.network_owner_bootstrap WHERE lower(email) = lower(NEW.email)) THEN
    INSERT INTO public.network_admins(user_id, granted_reason) VALUES (NEW.id, 'owner bootstrap (verified email)')
    ON CONFLICT DO NOTHING;
  END IF;
  INSERT INTO public.network_project_members(project_id, user_id, role)
    SELECT i.project_id, NEW.id, i.role FROM public.network_invitations i
    WHERE lower(i.email) = lower(NEW.email) AND i.status = 'pending' AND i.project_id IS NOT NULL
  ON CONFLICT (project_id, user_id) DO UPDATE SET role = EXCLUDED.role;
  UPDATE public.network_invitations SET status = 'accepted'
    WHERE lower(email) = lower(NEW.email) AND status = 'pending';
  RETURN NEW;
END $$;
CREATE TRIGGER network_user_verified AFTER INSERT OR UPDATE OF email_confirmed_at ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.network_on_user_verified();

-- Retroactive bootstrap if owner already exists and is verified
INSERT INTO public.network_admins(user_id, granted_reason)
  SELECT u.id, 'owner bootstrap (verified email)' FROM auth.users u
  JOIN public.network_owner_bootstrap b ON lower(b.email) = lower(u.email)
  WHERE u.email_confirmed_at IS NOT NULL ON CONFLICT DO NOTHING;

INSERT INTO public.network_projects(slug, name, description, url) VALUES
  ('yotau','Yotaú','Hospitality project portal','https://yotau.ravolution.se/inicio'),
  ('drivally','Drivally','Drive-through payment portal','https://drivally.ravolution.se/overview'),
  ('thecreator','TheCreator / WorldVisum','Creator and WorldVisum portal','https://thecreator.ravolution.se/overview');

REVOKE EXECUTE ON FUNCTION public.network_on_user_verified() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.network_audit() FROM PUBLIC, anon, authenticated;