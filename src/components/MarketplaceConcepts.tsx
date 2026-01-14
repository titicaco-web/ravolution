import { Button } from "@/components/ui/button";
import { Dog, Heart, ShieldAlert, Droplets, Home, ArrowRight, TrendingUp, Users, Briefcase, ExternalLink, Calendar, Mic, Gift, FileText } from "lucide-react";

const concepts = [
  // Patent-backed opportunities first
  {
    id: "eventor",
    icon: Calendar,
    name: "Eventor™",
    tagline: "World Event Hub & Discovery Platform",
    problem: "AI-powered event discovery using financial transaction data with calendar booking",
    market: "$60-90B Online Event Ticketing | $1.2T Live Events by 2032",
    revenue: "2.5-5% transaction fees, API licensing, partner integrations",
    status: "Concept",
    color: "accent",
    link: null,
    patents: 1,
    claims: 15,
  },
  {
    id: "voiceprotector",
    icon: Mic,
    name: "VoiceProtector™",
    tagline: "Enterprise Deepfake Protection",
    problem: "Anti-deepfake detection for enterprise & telecom compliance",
    market: "€12.9B global voice security market",
    revenue: "SaaS licensing, per-gateway pricing, volume-based",
    status: "Concept",
    color: "gold",
    link: null,
    patents: 3,
    claims: 38,
  },
  {
    id: "givin",
    icon: Gift,
    name: "Givin™",
    tagline: "LinkedIn Professional Gifting",
    problem: "Digital professional recognition & frictionless value exchange",
    market: "$175B Corporate Gifting Market, 1B+ LinkedIn users",
    revenue: "Transaction fees, enterprise licensing",
    status: "Concept",
    color: "accent",
    link: null,
    patents: 2,
    claims: 24,
  },
  // Other marketplace concepts
  {
    id: "hundelser",
    icon: Dog,
    name: "Hundelser.se",
    tagline: "Instagram for dog owners with AI vet advice",
    problem: "Dog owners lack integrated platform for advice & community",
    market: "800K Swedish households, 150M+ global",
    revenue: "Freemium €4.99–9.99/mo, vet commissions 10–15%",
    status: "Concept",
    color: "accent",
    link: "https://hundelser.se/",
  },
  {
    id: "naravan",
    icon: Heart,
    name: "NäraVän.se",
    tagline: "Friendship-dating to combat loneliness",
    problem: "1M lonely people in Sweden need connection",
    market: "1M Swedish adults, 50M+ European",
    revenue: "Premium €7.99/mo, event commissions, B2B municipal",
    status: "Early Validation",
    color: "gold",
    link: "https://xn--nravn-grad.se/",
  },
  {
    id: "beredskapad",
    icon: ShieldAlert,
    name: "Beredskapad.se",
    tagline: "Crisis preparedness training & certification",
    problem: "Rising geopolitical instability, limited accessible training",
    market: "300K+ Swedish SMEs, 2M individuals",
    revenue: "B2B €50–150/employee, B2C €19.99–49.99/course",
    status: "MVP Ready",
    color: "primary",
    link: "https://beredskapad.se/",
  },
  {
    id: "endofthirst",
    icon: Droplets,
    name: "EndOfThirst.com",
    tagline: "LinkedIn water security education",
    problem: "700M people lack clean water, awareness gaps",
    market: "1B+ LinkedIn users, €55B funding need",
    revenue: "Diploma €55/person, B2B team training €500–2K",
    status: "Concept",
    color: "accent",
    link: "https://endofthirst.com/",
  },
  {
    id: "villaspar",
    icon: Home,
    name: "VillaSpar.se",
    tagline: "Interactive villa advisory & marketplace",
    problem: "Homeowners need centralized advice & partner discovery",
    market: "1.5M+ Swedish villas, €3–7.5B annual spend",
    revenue: "Partner commissions 5–15%",
    status: "Early Validation",
    color: "gold",
    link: "https://villaspar.se/",
  },
  {
    id: "nordic-freelance",
    icon: Briefcase,
    name: "NordicFreelance.se",
    tagline: "Leading Nordic freelance marketplace",
    problem: "Nordic freelancers pay 20% fees to global platforms lacking local integration",
    market: "€1.18B → €1.60B by 2028 | 368K tech freelancers",
    revenue: "10% commission, enterprise €99-599/mo, premium listings",
    status: "Live Platform",
    color: "primary",
    link: "https://nordicfreelance.se/",
  },
];

const MarketplaceConcepts = () => {
  return (
    <section id="concepts" className="section-padding pt-10 md:pt-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Growth Assets</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Emerging Marketplace Opportunities
          </h2>
          <p className="text-lg text-muted-foreground">
            Early-stage concepts ready for partnership, investment, or acquisition
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {concepts.map((concept) => {
            const IconComponent = concept.icon;
            const colorClasses = {
              accent: "border-accent/20 hover:border-accent/40",
              gold: "border-gold/20 hover:border-gold/40",
              primary: "border-primary/20 hover:border-primary/40",
            };
            const iconBgClasses = {
              accent: "bg-accent/10 text-accent",
              gold: "bg-gold/10 text-gold",
              primary: "bg-primary/10 text-primary",
            };
            const statusClasses = {
              "Concept": "bg-muted text-muted-foreground",
              "Early Validation": "bg-gold/10 text-gold",
              "MVP Ready": "bg-accent/10 text-accent",
              "Live Platform": "bg-primary/10 text-primary",
            };

            return (
              <div
                key={concept.id}
                className={`bg-card rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${colorClasses[concept.color as keyof typeof colorClasses]}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBgClasses[concept.color as keyof typeof iconBgClasses]}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusClasses[concept.status as keyof typeof statusClasses]}`}>
                    {concept.status}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  {concept.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{concept.tagline}</p>
                
                {concept.patents && concept.claims && (
                  <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-3 py-1 mb-4">
                    <FileText className="w-3 h-3 text-gold" />
                    <span className="text-xs font-semibold text-gold">{concept.patents} Patents</span>
                    <span className="text-gold/50">|</span>
                    <span className="text-xs font-semibold text-gold">{concept.claims} Claims</span>
                  </div>
                )}
                {!concept.patents && <div className="mb-4" />}

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">{concept.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{concept.market}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="font-semibold">Revenue:</span> {concept.revenue}
                  </p>
                  {concept.link ? (
                    <Button variant="ghost" className="w-full group" size="sm" asChild>
                      <a href={concept.link} target="_blank" rel="noopener noreferrer">
                        Visit Platform
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" className="w-full group" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Card */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Portfolio of Growth Assets
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Combined addressable market of €15–30B across 5 validated concepts.
            Each ready for partnership, co-development, or acquisition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent-light text-white">
              Explore Acquisition Opportunities
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Download Concept Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceConcepts;
