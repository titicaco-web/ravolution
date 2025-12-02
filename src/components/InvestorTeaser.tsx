import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";

const InvestorTeaser = () => {
  return (
    <section id="investors" className="section-padding gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Investment Opportunity</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Join the Strategic IP Revolution
            </h2>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Ravolution offers a unique investment thesis: diversified revenue streams across IP licensing, 
              market-proven SaaS products, and emerging marketplace concepts with clear paths to exit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent-light text-white group" asChild>
                <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                  Schedule Investor Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:ivan.daza@ravolution.se?subject=Financial Model Request">
                  Request Financial Model
                </a>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card-glass p-6">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">€338M+</div>
              <div className="text-white/70 text-sm">Combined ARR Potential</div>
            </div>
            <div className="card-glass p-6">
              <Shield className="w-8 h-8 text-gold mb-3" />
              <div className="text-3xl font-bold text-white mb-1">4</div>
              <div className="text-white/70 text-sm">Patent Portfolios</div>
            </div>
            <div className="card-glass p-6">
              <Target className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">€200B+</div>
              <div className="text-white/70 text-sm">Total Addressable Market</div>
            </div>
            <div className="card-glass p-6">
              <TrendingUp className="w-8 h-8 text-gold mb-3" />
              <div className="text-3xl font-bold text-white mb-1">3</div>
              <div className="text-white/70 text-sm">Exit Routes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorTeaser;
