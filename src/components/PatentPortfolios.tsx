import { useState } from "react";
import { Languages, Globe, GraduationCap, ChevronDown, ChevronUp, CheckCircle, ExternalLink, FileSearch, Shirt, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolios = [
  {
    id: "iapply",
    icon: FileSearch,
    title: "iApply™",
    subtitle: "Candidate-Centric Transparent Recruitment Platform",
    patents: 7,
    claims: 89,
    valueProposition: "Category-creating innovation: Real-time recruiter transparency, AI-powered autonomous references, blockchain credentials & pre-screening with candidate coaching",
    marketPotential: "$924B Global Recruiting Market by 2030",
    patentCoverage: "Recruiter action transparency, AI reference interviews, credential verification, pre-screening systems",
    revenueModel: "Freemium SaaS, enterprise licensing, data insights partnerships",
    details: {
      features: ["Real-time recruiter action visibility", "AI-powered autonomous reference interviews", "Blockchain credential verification", "Company transparency ratings", "AI pre-screening with feedback loops", "Candidate coaching & development"],
      markets: ["Global job seekers (2B+ annually)", "Enterprise HR departments", "Recruitment agencies", "Background verification providers"],
    },
    color: "primary",
    featured: true,
    externalLink: "https://iapply.se",
    valuationRange: "$800M–1.5B pre-launch",
  },
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
  {
    id: "itsafitt",
    icon: Shirt,
    title: "It's a Fitt™",
    subtitle: "AI Video Virtual Try-On Technology",
    patents: 1,
    claims: 25,
    valueProposition: "Temporal fabric physics simulation, multi-body-type AI personalization, predictive sizing & return prediction—reducing returns by 15-50%",
    marketPotential: "$48.1B Virtual Try-On Market by 2030 | 25.95% CAGR",
    patentCoverage: "Fabric physics simulation, body-type AI models, social sharing optimization, predictive sizing, return prediction",
    revenueModel: "SaaS subscription, API licensing, enterprise white-label",
    details: {
      features: ["15-45 second realistic try-on videos", "15+ diverse body-type AI models", "Real-time fabric physics simulation", "Platform-optimized social sharing", "ML-powered size prediction", "Return risk forecasting"],
      markets: ["Fashion e-commerce retailers", "Luxury brand platforms", "Social commerce integrations", "Marketplace aggregators"],
      ownership: "Co-owned with Egyptian developer team.",
    },
    color: "accent",
    externalLink: "https://itsafitt.com",
  },
  {
    id: "voiceprotector",
    icon: Mic,
    title: "VoiceProtector™",
    subtitle: "Enterprise Deepfake Protection",
    patents: 3,
    claims: 38,
    valueProposition: "Anti-deepfake detection for enterprise & telecom compliance—protecting organizations from voice fraud and synthetic media threats",
    marketPotential: "€12.9B Global Voice Security Market",
    patentCoverage: "Voice authentication, deepfake detection, synthetic media analysis, real-time verification",
    revenueModel: "SaaS licensing, per-gateway pricing, volume-based enterprise",
    details: {
      features: ["Real-time deepfake detection", "Voice authentication verification", "Telecom compliance integration", "Enterprise security dashboards", "Synthetic media analysis", "Multi-channel protection"],
      markets: ["Enterprise security departments", "Telecom operators", "Financial institutions", "Government agencies"],
    },
    color: "gold",
  },
];

const PatentPortfolios = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="patents" className="section-padding pt-6 md:pt-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Defensible IP Assets</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Six Strategic Patent Verticals
          </h2>
          <p className="text-lg text-muted-foreground">
            Protecting innovation across education, recruitment, language, fashion, voice security & global commerce
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
              gyro: "border-primary/30 hover:border-primary/50",
            };
            const iconBgClasses = {
              accent: "bg-accent text-accent-foreground",
              gold: "bg-gold text-gold-foreground",
              primary: "bg-primary text-primary-foreground",
              gyro: "bg-primary text-primary-foreground",
            };

            return (
              <div
                key={portfolio.id}
                className={`bg-card rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${colorClasses[portfolio.color as keyof typeof colorClasses]} ${isExpanded ? 'shadow-elevated' : 'shadow-card hover:shadow-elevated'} ${portfolio.featured ? 'ring-2 ring-gold/30' : ''}`}
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
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold text-gold-foreground">
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
                        {portfolio.details.ownership && (
                          <div className="mt-4">
                            <span className="font-bold text-foreground">Ownership: </span>
                            <span className="text-muted-foreground">{portfolio.details.ownership}</span>
                          </div>
                        )}
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

        {/* Additional Patent Note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">
            3 more Strategic Patent Verticals presented under{" "}
            <a href="#concepts" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">
              Emerging Marketplace Opportunities
            </a>{" "}
            and one secret presented only after investment made in current projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatentPortfolios;
