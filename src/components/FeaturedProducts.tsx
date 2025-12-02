import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Globe, Shield, Zap, BarChart3 } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Revenue Drivers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Proven Revenue Drivers
          </h2>
          <p className="text-lg text-muted-foreground">
            Market-validated SaaS platforms with established revenue models
          </p>
        </div>

        {/* xPortMatch */}
        <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Visual Side */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent text-accent-foreground mb-6">
                  <Globe className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">xPortMatch.com</h3>
                <p className="text-muted-foreground">AI-Powered B2B Export-Import Matching</p>
                
                {/* Mock Dashboard Preview */}
                <div className="mt-8 bg-card rounded-xl shadow-elevated p-4 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-gold" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                    <div className="h-8 bg-accent/20 rounded mt-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-sm font-medium">Market TAM</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">€194B</div>
                  <div className="text-xs text-muted-foreground">Swedish annual export</div>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">ARR Potential</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">€15.5–31M</div>
                  <div className="text-xs text-muted-foreground">At 2.5–5% penetration</div>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">Target SMEs</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">180,500</div>
                  <div className="text-xs text-muted-foreground">Verified Swedish suppliers</div>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <Globe className="w-5 h-5" />
                    <span className="text-sm font-medium">Geographic Reach</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-xs text-muted-foreground">Countries covered</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-3">Revenue Streams</h4>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  SaaS subscription: €2,490–8,990/year per SME
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  Premium matching events & data licensing
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  API access & compliance certifications
                </li>
              </ul>

              <div className="flex gap-3">
                <Button className="bg-accent hover:bg-accent-light" asChild>
                  <a href="https://xportmatch.com" target="_blank" rel="noopener noreferrer">
                    Visit xPortMatch.com
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                    Request B2B Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* VoiceProtector */}
        <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-sm font-medium">Market TAM</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">€12.9B</div>
                  <div className="text-xs text-muted-foreground">Global voice security</div>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">ARR Projection</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">€323M+</div>
                  <div className="text-xs text-muted-foreground">5-year projection</div>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm font-medium">Detection Speed</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">&lt;100ms</div>
                  <div className="text-xs text-muted-foreground">Real-time latency</div>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">Compliance</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">SOC 2</div>
                  <div className="text-xs text-muted-foreground">GDPR, 3GPP ready</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-3">Core Capabilities</h4>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold" />
                  Real-time AI deepfake detection
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold" />
                  Voice watermarking & biometric verification
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold" />
                  Enterprise integration (VoIP, cloud PBX)
                </li>
              </ul>

              <div className="flex gap-3">
                <Button className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                  <a href="https://voiceprotector.com" target="_blank" rel="noopener noreferrer">
                    Visit VoiceProtector.com
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                    Schedule Security Audit
                  </a>
                </Button>
              </div>
            </div>

            {/* Visual Side */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gold text-gold-foreground mb-6">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">VoiceProtector.com</h3>
                <p className="text-muted-foreground">Enterprise Voice Security Against AI-Generated Fraud</p>
                
                {/* Mock Waveform */}
                <div className="mt-8 bg-card rounded-xl shadow-elevated p-6">
                  <div className="flex items-end justify-center gap-1 h-16">
                    {[3, 5, 8, 12, 16, 12, 8, 14, 10, 6, 9, 13, 7, 4, 6].map((height, i) => (
                      <div
                        key={i}
                        className="w-2 bg-gold rounded-full transition-all duration-300"
                        style={{ height: `${height * 4}px` }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-accent font-medium">Voice Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
