import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface HeroVideoBackgroundProps {
  /** Tailwind classes for the dark overlay (default black/55) */
  overlayClassName?: string;
}

/**
 * Rotating fullscreen video background sourced from the public
 * Supabase `hero-videos` storage bucket. Mirrors the homepage hero behavior.
 * Falls back to a transparent layer (parent gradient remains visible).
 */
const HeroVideoBackground = ({
  overlayClassName = "bg-black/55",
}: HeroVideoBackgroundProps) => {
  const [videos, setVideos] = useState<string[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.storage
        .from("hero-videos")
        .list("", { limit: 100, sortBy: { column: "name", order: "asc" } });

      if (error || !data) return;

      const videoUrls = data
        .filter((file) => file.name.match(/\.(mp4|webm|mov)$/i))
        .map((file) => {
          const { data: urlData } = supabase.storage
            .from("hero-videos")
            .getPublicUrl(file.name);
          return urlData.publicUrl;
        });
      setVideos(videoUrls);
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length <= 1) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000);
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length]);

  if (videos.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <video
        key={videos[currentVideoIndex]}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
};

export default HeroVideoBackground;
