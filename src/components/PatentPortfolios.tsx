import { useState } from "react";
import { Languages, Mic, Users, Globe, GraduationCap, ChevronDown, ChevronUp, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolios = [
  {
    id: "communicaring",
    icon: GraduationCap,
    title: "CommunicaringSchool™",
    subtitle: "UN-Compliant Global Education Platform",
    patents: 9,
    claims: 116,
    valueProposition: "9 patented technologies enabling cross-national student benchmarking, curriculum equivalency, and rights-based learning",
    marketPotential: "$850B Global EdTech Market",
    patentCoverage: "GEPI, curriculum mapping, child rights verification",
    revenueModel: "Government licensing, UN agency partnerships, international school subscriptions",
    details: {
      features: ["54 UNCRC Articles Compliance", "Global Position Index (GEPI)", "20+ Curricula Support", "Real-time Global Comparison", "Child Rights Verification System", "Cross-national Credential Recognition"],
      markets: ["Government education ministries", "UN agencies (UNICEF, UNESCO)", "International school networks", "NGOs focused on child rights"],
    },
    color: "primary",
    featured: true,
    externalLink: "https://communicaringschool.com/patents",
  },
  {
    id: "rosetta",
    icon: Languages,
    title: "Rosetta Livingstone™",
    subtitle: "Language Learning Revolution",
    patents: 4,
    claims: 52,
    valueProposition: "Multimodal language acquisition, 34 languages, real-time vocational calibration",
    marketPotential: "$82B Global Language Learning Market | Nordic governments, international enterprise, corporate training",
    patentCoverage: "System architecture, real-time analysis, deployment frameworks",
    revenueModel: "Licensing, co-development, acquisition",
    details: {
      features: ["34 languages supported", "Ambient learning technology", "Spectrographic feedback", "Vocational calibration"],
      markets: ["Government education contracts", "Corporate L&D", "International schools", "Immigration integration programs"],
    },
    color: "accent",
  },
  {
    id: "voice",
    icon: Mic,
    title: "VoiceProtector™",
    subtitle: "Enterprise Deepfake Protection",
    patents: 3,
    claims: 38,
    valueProposition: "Anti-deepfake detection, enterprise integration, telecom compliance",
    marketPotential: "€12.9B global voice security market",
    patentCoverage: "Real-time analysis methods, biometric verification",
    revenueModel: "SaaS licensing, per-gateway pricing, volume-based",
    details: {
      features: ["Real-time deepfake detection (<100ms)", "Voice watermarking", "SOC 2 & GDPR compliant", "Zero false-positive design"],
      markets: ["Tier-1 telecom operators", "Investment banks", "Government agencies", "Identity verification platforms"],
    },
    color: "gold",
  },
  {
    id: "linkedin",
    icon: Users,
    title: "Givin™",
    subtitle: "LinkedIn Professional Gifting",
    patents: 2,
    claims: 24,
    valueProposition: "Digital professional recognition, frictionless value exchange",
    marketPotential: "$175B Corporate Gifting Market, 1B+ LinkedIn users",
    patentCoverage: "Gift integration architecture, professional recognition systems",
    revenueModel: "Transaction fees, enterprise licensing",
    details: {
      features: ["Seamless LinkedIn integration", "Corporate gift programs", "Recognition badges", "Professional appreciation flows"],
      markets: ["HR tech platforms", "Corporate recognition", "Professional services", "Recruitment agencies"],
    },
    color: "accent",
  },
  {
    id: "xportmatch",
    icon: Globe,
    title: "xPortMatch™",
    subtitle: "B2B Export-Import Intelligence",
    patents: 2,
    claims: 28,
    valueProposition: "AI matching, 150+ countries, 180,500 SME targets",
    marketPotential: "€194B Swedish export market",
    patentCoverage: "Algorithmic matching, verification systems, trade intelligence",
    revenueModel: "SaaS subscription, data licensing, API access",
    details: {
      features: ["AI-powered matching algorithms", "Verified buyer/supplier database", "Real-time market intelligence", "Trade compliance automation"],
      markets: ["Swedish SMEs (180,500 targets)", "International trade agencies", "Government export programs", "Trade finance providers"],
    },
    color: "primary",
  },
];

const PatentPortfolios = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="patents" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Defensible IP Assets</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Five Strategic Patent Verticals
          </h2>
          <p className="text-lg text-muted-foreground">
            Protecting innovation across education, language, voice, security & global commerce
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolios.map((portfolio) => {
            const IconComponent = portfolio.icon;
            const isExpanded = expanded === portfolio.id;
            const colorClasses = {
              accent: "border-accent/30 hover:border-accent/50",
              gold: "border-gold/30 hover:border-gold/50",
              primary: "border-primary/30 hover:border-primary/50",
            };
            const iconBgClasses = {
              accent: "bg-accent text-accent-foreground",
              gold: "bg-gold text-gold-foreground",
              primary: "bg-primary text-primary-foreground",
            };

            return (
              <div
                key={portfolio.id}
                className={`bg-card rounded-2xl border-2 transition-all duration-300 ${colorClasses[portfolio.color as keyof typeof colorClasses]} ${isExpanded ? 'shadow-elevated' : 'shadow-card'} ${portfolio.featured ? 'md:col-span-2 ring-2 ring-gold/30' : ''}`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(portfolio.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBgClasses[portfolio.color as keyof typeof iconBgClasses]}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {portfolio.featured && (
                        <span className="bg-gold text-gold-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          FLAGSHIP
                        </span>
                      )}
                    </div>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </button>
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {portfolio.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{portfolio.subtitle}</p>
                  
                  <div className="inline-flex items-center gap-2 bg-muted rounded-full px-3 py-1 mb-4">
                    <span className="text-xs font-semibold text-foreground">{portfolio.patents} Patents</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-xs font-semibold text-foreground">{portfolio.claims} Claims</span>
                  </div>

                  <p className="text-foreground font-medium mb-4">{portfolio.valueProposition}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[100px]">Market:</span>
                      <span className="text-foreground">{portfolio.marketPotential}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[100px]">Revenue:</span>
                      <span className="text-foreground">{portfolio.revenueModel}</span>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {portfolio.details.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Target Markets</h4>
                        <ul className="space-y-2">
                          {portfolio.details.markets.map((market) => (
                            <li key={market} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                              {market}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-primary hover:bg-primary-light" asChild>
                        <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                          Inquire About Licensing
                        </a>
                      </Button>
                      {portfolio.externalLink && (
                        <Button variant="outline" asChild>
                          <a href={portfolio.externalLink} target="_blank" rel="noopener noreferrer">
                            View Patent Portfolio <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      )}
                      {!portfolio.externalLink && (
                        <Button variant="outline">
                          Download Patent Summary
                        </Button>
                      )}
                    </div>
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

export default PatentPortfolios;
