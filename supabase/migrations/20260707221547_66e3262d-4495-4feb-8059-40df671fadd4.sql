-- project-briefs: drop open anon policies and lock all writes/reads to service_role
DROP POLICY IF EXISTS "Anyone can upload project brief files" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can read project brief files" ON storage.objects;

CREATE POLICY "Service role manages project brief files"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'project-briefs')
WITH CHECK (bucket_id = 'project-briefs');

-- hero-videos: keep public SELECT, restrict write ops to service_role only
DROP POLICY IF EXISTS "Authenticated users can upload hero videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update hero videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete hero videos" ON storage.objects;

CREATE POLICY "Service role uploads hero videos"
ON storage.objects FOR INSERT
TO service_role
WITH CHECK (bucket_id = 'hero-videos');

CREATE POLICY "Service role updates hero videos"
ON storage.objects FOR UPDATE
TO service_role
USING (bucket_id = 'hero-videos')
WITH CHECK (bucket_id = 'hero-videos');

CREATE POLICY "Service role deletes hero videos"
ON storage.objects FOR DELETE
TO service_role
USING (bucket_id = 'hero-videos');
