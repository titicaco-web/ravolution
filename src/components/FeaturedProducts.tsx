import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Globe, Shield, Zap, BarChart3 } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding pt-6 md:pt-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Revenue Drivers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Revenue Drivers
          </h2>
          <p className="text-lg text-muted-foreground">
            Market-validated SaaS platforms with established revenue models
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* xPortMatch */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-accent-foreground mb-4">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">xPortMatch.com</h3>
                <p className="text-sm text-muted-foreground">AI-Powered B2B Export-Import Matching</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-medium">Market TAM</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">€194B</div>
                  <div className="text-xs text-muted-foreground">Swedish annual export</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">ARR Potential</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">€15.5–31M</div>
                  <div className="text-xs text-muted-foreground">At 2.5–5% penetration</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">Target SMEs</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">180,500</div>
                  <div className="text-xs text-muted-foreground">Verified Swedish suppliers</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-medium">Geographic Reach</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">150+</div>
                  <div className="text-xs text-muted-foreground">Countries covered</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground text-sm mb-2">Revenue Streams</h4>
              <ul className="space-y-1.5 mb-5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  SaaS subscription: €2,490–8,990/year per SME
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  Premium matching events & data licensing
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  API access & compliance certifications
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" className="bg-accent hover:bg-accent-light" asChild>
                  <a href="https://xportmatch.com" target="_blank" rel="noopener noreferrer">
                    Visit xPortMatch.com
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                    Request Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* VoiceProtector */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold text-gold-foreground mb-4">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">VoiceProtector.com</h3>
                <p className="text-sm text-muted-foreground">Enterprise Voice Security Against AI-Generated Fraud</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-medium">Market TAM</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">€12.9B</div>
                  <div className="text-xs text-muted-foreground">Global voice security</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">ARR Projection</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">€323M+</div>
                  <div className="text-xs text-muted-foreground">5-year projection</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-medium">Detection Speed</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">&lt;100ms</div>
                  <div className="text-xs text-muted-foreground">Real-time latency</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-medium">Compliance</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">SOC 2</div>
                  <div className="text-xs text-muted-foreground">GDPR, 3GPP ready</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground text-sm mb-2">Core Capabilities</h4>
              <ul className="space-y-1.5 mb-5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  Real-time AI deepfake detection
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  Voice watermarking & biometric verification
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  Enterprise integration (VoIP, cloud PBX)
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                  <a href="https://voiceprotector.com" target="_blank" rel="noopener noreferrer">
                    Visit VoiceProtector.com
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                    Security Audit
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
