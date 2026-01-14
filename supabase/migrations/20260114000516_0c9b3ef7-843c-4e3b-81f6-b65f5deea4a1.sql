-- Create a public storage bucket for hero videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('hero-videos', 'hero-videos', true);

-- Allow public read access to hero videos
CREATE POLICY "Hero videos are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'hero-videos');

-- Allow authenticated users to upload hero videos (admin access)
CREATE POLICY "Authenticated users can upload hero videos"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'hero-videos' AND auth.role() = 'authenticated');

-- Allow authenticated users to update their hero videos
CREATE POLICY "Authenticated users can update hero videos"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'hero-videos' AND auth.role() = 'authenticated');

-- Allow authenticated users to delete hero videos
CREATE POLICY "Authenticated users can delete hero videos"
ON storage.objects
FOR DELETE
USING (bucket_id = 'hero-videos' AND auth.role() = 'authenticated');