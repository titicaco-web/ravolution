import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.storage
        .from("hero-videos")
        .list("", { limit: 100, sortBy: { column: "name", order: "asc" } });

      if (error) {
        console.error("Error fetching videos:", error);
        return;
      }

      if (data && data.length > 0) {
        const videoUrls = data
          .filter((file) => file.name.match(/\.(mp4|webm|mov)$/i))
          .map((file) => {
            const { data: urlData } = supabase.storage
              .from("hero-videos")
              .getPublicUrl(file.name);
            return urlData.publicUrl;
          });
        setVideos(videoUrls);
      }
    };

    fetchVideos();
  }, []);

  // Cycle through videos with smooth transition
  useEffect(() => {
    if (videos.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000); // Transition duration
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      {videos.length > 0 && (
        <div className="absolute inset-0 z-0">
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
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Fallback Animated Shifting Blue Background (when no videos) */}
      {videos.length === 0 && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,100%,8%)] via-[hsl(200,100%,12%)] to-[hsl(210,100%,18%)] animate-[shiftBlue_12s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(195,100%,15%)] via-transparent to-[hsl(230,100%,20%)] opacity-60 animate-[shiftBlue_8s_ease-in-out_infinite_reverse]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(210,100%,20%)] via-transparent to-[hsl(195,100%,18%)] opacity-40 animate-[shiftBlue_15s_ease-in-out_infinite]" />
        </>
      )}

      {/* White Grid Pattern - Small Squares (See-through) */}
      <div
        className="absolute inset-0 opacity-[0.05] z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Top Edge Highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Swedish IP Innovation Company</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            Solving Civilization-Scale Challenges with
            <span className="block text-gradient-gold">Patented Deep Tech.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            From accelerating language learning by 24x to democratizing K1-K9 education.
            <span className="block mt-2">We build and protect the technologies that level the playing field for the global economy.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="btn-accent group text-lg px-8 py-6" asChild>
              <a href="#patents">
                Explore Patent Portfolios
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button className="btn-outline-light group text-lg px-8 py-6" asChild>
              <a href="#contact">
                <FileText className="mr-2 h-5 w-5" />
                Licensing Inquiry
              </a>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="card-glass p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gold mb-1">26 Patents | 323 Claims</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">€354M+</div>
                <div className="text-white/70 text-sm">Combined ARR Potential</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">150+</div>
                <div className="text-white/70 text-sm">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">7</div>
                <div className="text-white/70 text-sm">Marketplace Concepts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
