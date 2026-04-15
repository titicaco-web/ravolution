
INSERT INTO storage.buckets (id, name, public) VALUES ('project-briefs', 'project-briefs', true);

CREATE POLICY "Anyone can upload project brief files"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'project-briefs');

CREATE POLICY "Anyone can read project brief files"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'project-briefs');
