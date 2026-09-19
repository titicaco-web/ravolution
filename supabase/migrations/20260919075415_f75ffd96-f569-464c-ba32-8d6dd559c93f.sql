ALTER TABLE public.startup_applications
  ADD COLUMN IF NOT EXISTS sector text,
  ADD COLUMN IF NOT EXISTS looking_for text,
  ADD COLUMN IF NOT EXISTS blocker text;