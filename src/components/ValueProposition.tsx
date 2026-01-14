import { useState } from "react";
import { Shield, Rocket, Lightbulb, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Shield,
    title: "IP Licensing",
    headline: "Patented Solutions for Measurable Global Impact",
    description: "Comprehensive patent portfolios across 4 strategic verticals available for acquisition or licensing: education (K-9 curriculum rights alignment), language learning (34x learning advantage), voice authentication (fraud prevention), and global trade connectivity (€1.1B+ market). Each patent generates recurring licensing revenue while solving systemic problems affecting billions of people. Full acquisition available.",
    cta: "Explore Patent Portfolios",
    href: "#patents",
    color: "gold",
  },
  {
    icon: Rocket,
    title: "SaaS Products",
    headline: "Proven Platforms at Global Scale",
    description: "Category-defining products available for acquisition with institutional traction and expansion roadmap: xPortMatch (€15.5–31M ARR potential, 50-country partner network, 180K+ addressable Nordic SMEs), RosettaLivingstone (€585B TAM, 34x faster language acquisition, government immigration partnerships), and VoiceProtector (€323M ARR projection, multi-billion fraud prevention market). Each platform ready for strategic acquisition.",
    cta: "Product Details",
    href: "#products",
    color: "accent",
  },
  {
    icon: Lightbulb,
    title: "Marketplace Concepts",
    headline: "De-Risked Innovation Portfolio for Acquisition",
    description: "5 validated market opportunities with identified problems, tested solution approaches, and defined revenue models—ready for strategic acquisition, institutional partnership, or co-investment. Portfolio includes education innovation marketplace, global skills exchange platform, and community-driven social impact concepts. Each concept structured for acquisition or franchise expansion into new geographies.",
    cta: "View Concepts",
    href: "#concepts",
    color: "primary",
  },
];

const ValueProposition = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  return (
    <section className="section-padding py-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isExpanded = expandedCard === pillar.title;
            const colorClasses = {
              gold: "border-gold/20 hover:border-gold/40",
              accent: "border-accent/20 hover:border-accent/40",
              primary: "border-primary/20 hover:border-primary/40",
            };
            const iconBgClasses = {
              gold: "bg-gold/10 text-gold",
              accent: "bg-accent/10 text-accent",
              primary: "bg-primary/10 text-primary",
            };

            return (
              <div
                key={pillar.title}
                className={`bg-card rounded-xl border transition-all duration-300 ${colorClasses[pillar.color as keyof typeof colorClasses]} ${isExpanded ? 'shadow-elevated' : 'shadow-sm hover:shadow-card'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Compact Header - Always Visible */}
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => toggleCard(pillar.title)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${iconBgClasses[pillar.color as keyof typeof iconBgClasses]}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {pillar.title}
                        </div>
                        <h3 className="text-sm font-display font-bold text-foreground leading-tight">
                          {pillar.headline}
                        </h3>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground transition-colors ml-2 flex-shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-border pt-3 animate-fade-in">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    <Button variant="ghost" className="group p-0 h-auto font-semibold text-sm" asChild>
                      <a href={pillar.href}>
                        {pillar.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
