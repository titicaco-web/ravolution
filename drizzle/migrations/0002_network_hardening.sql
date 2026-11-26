REVOKE EXECUTE ON FUNCTION public.is_network_admin(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_network_admin(uuid) TO authenticated, service_role;
CREATE INDEX IF NOT EXISTS network_capabilities_source_idx ON public.network_capabilities(source_project_id);
CREATE INDEX IF NOT EXISTS network_invitations_project_idx ON public.network_invitations(project_id);
CREATE INDEX IF NOT EXISTS network_invitations_email_idx ON public.network_invitations(lower(email));
CREATE INDEX IF NOT EXISTS network_recommendations_cap_idx ON public.network_recommendations(capability_id);
CREATE INDEX IF NOT EXISTS network_recommendations_target_idx ON public.network_recommendations(target_project_id);