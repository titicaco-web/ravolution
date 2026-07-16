
CREATE TABLE public.startup_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  founder_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  website TEXT,
  country TEXT NOT NULL,
  stage TEXT NOT NULL,
  building TEXT NOT NULL,
  why_partner TEXT NOT NULL,
  traction TEXT,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.startup_applications TO anon, authenticated;
GRANT ALL ON public.startup_applications TO service_role;
ALTER TABLE public.startup_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an application"
  ON public.startup_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(founder_name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND length(company_name) BETWEEN 1 AND 200
    AND length(building) BETWEEN 1 AND 1000
    AND length(why_partner) BETWEEN 1 AND 1000
  );
