import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Languages, Shield, Globe, Mic } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Multi-layer Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,8%)] via-[hsl(210,100%,15%)] to-[hsl(210,80%,20%)]" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210,100%,25%)_0%,_transparent_70%)] opacity-30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-light/8 rounded-full blur-[150px]" />
        
        {/* Additional accent glow */}
        <div className="absolute top-[10%] right-[10%] w-48 h-48 bg-accent/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-[15%] left-[5%] w-56 h-56 bg-gold/15 rounded-full blur-[90px]" />
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 right-[15%] text-white/10 animate-float" style={{ animationDelay: '1s' }}>
          <Languages className="w-16 h-16" />
        </div>
        <div className="absolute bottom-1/3 left-[10%] text-white/10 animate-float" style={{ animationDelay: '3s' }}>
          <Shield className="w-20 h-20" />
        </div>
        <div className="absolute top-1/3 left-[20%] text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Globe className="w-12 h-12" />
        </div>
        <div className="absolute bottom-1/4 right-[20%] text-white/10 animate-float" style={{ animationDelay: '2.5s' }}>
          <Mic className="w-14 h-14" />
        </div>
      </div>
      
      {/* Top Edge Highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

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
            Innovation Protected.
            <span className="block text-gradient-gold">Revenue Generated.</span>
            <span className="block text-white/90">Scale Proven.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Strategic IP Development Across Language, Voice, Trade & Education.
            <span className="block mt-2">Four patent portfolios. Two funded products. Five marketplace concepts.</span>
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
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">25 Patents | 308 Claims</div>
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
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">5</div>
                <div className="text-white/70 text-sm">Marketplace Concepts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
