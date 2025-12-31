import { Shield, Rocket, Lightbulb, ArrowRight } from "lucide-react";
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
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Solving Global Challenges Through Strategic IP.
          </h2>
          <p className="text-xl md:text-2xl font-display font-semibold text-gradient-gold mb-4">
            Three Revenue Streams for Acquisition. One Transformational Vision.
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
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
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
