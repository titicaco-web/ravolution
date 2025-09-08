import { Button } from "@/components/ui/button";
import { Handshake, Building2, Globe, TrendingUp, CheckCircle2, Users } from "lucide-react";

const StrategicPartnerships = () => {
  const currentPartners = [
    {
      name: "Hultafors Group",
      brands: "Snickers, Fristads",
      status: "LOI Signed",
      value: "€7B+ Group Revenue",
      description: "Strategic partnership for European distribution and co-development",
      statusColor: "bg-accent text-accent-foreground"
    },
    {
      name: "Ejendals AB",
      brands: "TEGERA, JALAS",
      status: "Active Discussions",
      value: "€300M+ Revenue",
      description: "Collaboration on professional safety equipment integration",
      statusColor: "bg-primary text-primary-foreground"
    },
    {
      name: "BURTLE",
      brands: "Japanese Leader",
      status: "Distribution Partner",
      value: "Asian Market Entry",
      description: "Established partnership for technology exchange and market expansion",
      statusColor: "bg-accent text-accent-foreground"
    },
    {
      name: "Cresto Group",
      brands: "Development Partner",
      status: "R&D Collaboration",
      value: "Technology Enhancement",
      description: "Joint development of next-generation cooling systems",
      statusColor: "bg-primary text-primary-foreground"
    }
  ];

  const partnershipOpportunities = [
    {
      type: "Manufacturing Partners",
      description: "Scale production capacity across Europe",
      potential: "50+ Companies",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      type: "Distribution Networks",
      description: "Expand market reach through established channels",
      potential: "200+ Distributors",
      icon: <Globe className="h-6 w-6" />
    },
    {
      type: "Technology Partners",
      description: "Enhance product capabilities through R&D collaboration",
      potential: "25+ Tech Companies",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="h-12 w-12 text-accent mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Strategic Partnerships
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building alliances with industry leaders to accelerate market penetration 
            and establish Ravolution as the European standard for cooling PPE.
          </p>
        </div>

        {/* Current Partnerships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Current Strategic Alliances
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="card-feature">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{partner.name}</h4>
                    <p className="text-muted-foreground font-medium">{partner.brands}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${partner.statusColor}`}>
                    {partner.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{partner.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">{partner.value}</span>
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Value Proposition */}
        <div className="card-elevated bg-primary text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Partnership Value Proposition</h3>
            <p className="text-xl opacity-90">
              Why industry leaders choose to partner with Ravolution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">First-Mover Advantage</h4>
              <p className="opacity-90">
                Partner with the pioneer in active cooling PPE technology
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Market Leadership</h4>
              <p className="opacity-90">
                Establish dominance in the €24B+ European market
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Proven Technology</h4>
              <p className="opacity-90">
                ISO-certified solutions with validated market demand
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Partnership Opportunities
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partnershipOpportunities.map((opportunity, index) => (
              <div key={index} className="card-feature text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">
                    {opportunity.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{opportunity.type}</h4>
                <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                <div className="text-accent font-semibold">{opportunity.potential}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="btn-hero mr-4">
              Explore Partnership Opportunities
            </Button>
            <Button className="btn-outline">
              Download Partnership Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerships;