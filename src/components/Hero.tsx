import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-cooling-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
        <h2 className="text-lg md:text-xl font-bold text-white tracking-wide font-serif">
          CoolAir<span className="text-accent font-sans">Jacket</span>
        </h2>
      </div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="PPE Cooling Technology in Action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pt-16 md:pt-0">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionizing European
            <span className="block text-accent"> Worker Safety</span>
            <span className="block text-3xl md:text-4xl font-medium mt-4">
              Through Active Cooling Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Protecting 77.5M workers from Europe's heat crisis with ISO-certified cooling jackets, 
            vests, and complete cooling ecosystems
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="btn-hero group">
              <a href="mailto:ivan.daza@ravolution.se?subject=Partnership Meeting Request">
                Request Partnership Meeting
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button className="btn-accent group">
              <Download className="mr-2 h-5 w-5" />
              Download Market Analysis
            </Button>
            <Button className="btn-outline group">
              <Play className="mr-2 h-5 w-5" />
              View Technology Demo
            </Button>
          </div>
          
          {/* Statistics Ticker */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-5xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-accent mr-2" />
                  <span className="text-3xl font-bold text-accent">47,690</span>
                </div>
                <p className="text-sm opacity-80">European Heat Deaths (2023)</p>
              </div>
              <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-accent mr-2" />
                  <span className="text-3xl font-bold text-accent">€24.3B</span>
                </div>
                <p className="text-sm opacity-80">European PPE Market</p>
              </div>
              <div className="animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-accent mr-2" />
                  <span className="text-3xl font-bold text-accent">160M</span>
                </div>
                <p className="text-sm opacity-80">People in High-Heat Regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full relative">
          <div className="absolute top-0 w-1 h-8 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;