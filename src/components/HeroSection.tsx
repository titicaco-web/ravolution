import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background - Teal to Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#208091] via-[#1a6b7a] to-[#134252]" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Subtle Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#208091]/30 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#134252]/40 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            {/* Headline - Bold, Investor-Focused */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Patent-Protected Solutions
              <span className="block mt-2">for Global Trade</span>
            </h1>

            {/* Subheading - Clear Value Prop */}
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Strategic IP development across language technology, voice innovation, 
              international trade, and education. Revenue-generating assets with proven global reach.
            </p>

            {/* CTA Button - Teal with White Text */}
            <div className="flex justify-center mb-8">
              <Button 
                className="bg-[#208091] hover:bg-[#1a6b7a] text-white text-lg px-10 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20"
                asChild
              >
                <a href="#patents">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip - Bottom of Hero */}
      <div className="relative z-10 bg-[#134252]/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-white/60 text-sm font-medium">Patents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">5</div>
              <div className="text-white/60 text-sm font-medium">Ventures</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-white/60 text-sm font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/60 text-sm font-medium">Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
