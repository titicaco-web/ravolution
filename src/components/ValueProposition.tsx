import { Shield, Rocket, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Shield,
    title: "IP Licensing",
    headline: "Defensible Competitive Advantage",
    description: "Proprietary patent portfolios across 4 strategic verticals generating recurring licensing revenue.",
    cta: "Explore Patents",
    href: "#patents",
    color: "gold",
  },
  {
    icon: Rocket,
    title: "SaaS Products",
    headline: "Market-Proven Revenue Model",
    description: "xPortMatch (€15.5–31M ARR potential), VoiceProtector (€323M ARR projection) with established customer acquisition.",
    cta: "Product Details",
    href: "#products",
    color: "accent",
  },
  {
    icon: Lightbulb,
    title: "Marketplace Concepts",
    headline: "Portfolio of Growth Assets",
    description: "5 early-stage concepts with validated problems, clear monetization paths, ready for partnership or acquisition.",
    cta: "View Concepts",
    href: "#concepts",
    color: "primary",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Three Revenue Streams, One Strategic Vision
          </h2>
          <p className="text-lg text-muted-foreground">
            Diversified monetization through IP licensing, SaaS platforms, and emerging marketplace concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const colorClasses = {
              gold: "bg-gold/10 text-gold border-gold/20 hover:border-gold/40",
              accent: "bg-accent/10 text-accent border-accent/20 hover:border-accent/40",
              primary: "bg-primary/10 text-primary border-primary/20 hover:border-primary/40",
            };
            const iconBgClasses = {
              gold: "bg-gold/20",
              accent: "bg-accent/20",
              primary: "bg-primary/20",
            };

            return (
              <div
                key={pillar.title}
                className={`card-interactive p-8 ${colorClasses[pillar.color as keyof typeof colorClasses]}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${iconBgClasses[pillar.color as keyof typeof iconBgClasses]} mb-6`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {pillar.title}
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {pillar.headline}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                
                <Button variant="ghost" className="group p-0 h-auto font-semibold" asChild>
                  <a href={pillar.href}>
                    {pillar.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
