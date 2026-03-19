import { useState } from "react";
import { Languages, Globe, GraduationCap, ChevronDown, ChevronUp, CheckCircle, ExternalLink, FileSearch, Shirt, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap = {
  iapply: FileSearch,
  communicaring: GraduationCap,
  rosetta: Languages,
  xportmatch: Globe,
  itsafitt: Shirt,
  voiceprotector: Mic,
};

const portfolioMeta = [
  { id: "iapply", patents: 7, claims: 89, color: "primary", featured: true, externalLink: "https://iapply.se", title: "iApply™" },
  { id: "communicaring", patents: 9, claims: 116, color: "primary", featured: true, externalLink: "https://communicaringschool.com", title: "CommunicaringSchool™" },
  { id: "rosetta", patents: 4, claims: 52, color: "accent", externalLink: "https://rosettalivingstone.com", title: "Rosetta Livingstone™" },
  { id: "xportmatch", patents: 2, claims: 28, color: "primary", externalLink: "https://xportmatch.com", title: "xPortMatch™" },
  { id: "itsafitt", patents: 1, claims: 25, color: "accent", externalLink: "https://itsafitt.com", title: "It's a Fitt™" },
  { id: "voiceprotector", patents: 3, claims: 38, color: "gold", externalLink: "https://voiceprotector.com", title: "VoiceProtector™" },
];

const PatentPortfolios = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="patents" className="section-padding pt-6 md:pt-8 text-white" style={{ background: 'linear-gradient(135deg, hsl(210, 62%, 16%) 0%, hsl(210, 62%, 9%) 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">{t("patents.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient-gold">{t("patents.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("patents.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioMeta.map((portfolio) => {
            const IconComponent = iconMap[portfolio.id as keyof typeof iconMap];
            const isExpanded = expanded === portfolio.id;
            const itemT = t(`patentItems.${portfolio.id}`) as any;
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
                          {t("patents.flagship")}
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
                  <p className="text-sm text-muted-foreground mb-2">{itemT?.subtitle}</p>
                  
                  <div className="inline-flex items-center gap-2 bg-muted rounded-full px-3 py-1 mb-4">
                    <span className="text-xs font-semibold text-foreground">{portfolio.patents} {t("patents.patents")}</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-xs font-semibold text-foreground">{portfolio.claims} {t("patents.claims")}</span>
                  </div>

                  <p className="text-foreground font-medium mb-4">{itemT?.valueProposition}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[100px]">{t("patents.market")}</span>
                      <span className="text-foreground">{itemT?.marketPotential}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[100px]">{t("patents.revenue")}</span>
                      <span className="text-foreground">{itemT?.revenueModel}</span>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{t("patents.keyFeatures")}</h4>
                        <ul className="space-y-2">
                          {itemT?.features?.map((feature: string) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">{t("patents.targetMarkets")}</h4>
                        <ul className="space-y-2">
                          {itemT?.markets?.map((market: string) => (
                            <li key={market} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                              {market}
                            </li>
                          ))}
                        </ul>
                        {itemT?.ownership && (
                          <div className="mt-4">
                            <span className="font-bold text-foreground">{t("patents.ownership")} </span>
                            <span className="text-muted-foreground">{itemT.ownership}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                        <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                          {t("patents.inquireLicensing")}
                        </a>
                      </Button>
                      {portfolio.externalLink && (
                        <Button variant="outline" asChild>
                          <a href={portfolio.externalLink} target="_blank" rel="noopener noreferrer">
                            {t("patents.visitWebsite")} <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      )}
                      {!portfolio.externalLink && (
                        <Button variant="outline">
                          {t("patents.downloadSummary")}
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">
            {t("patents.additionalNote")}{" "}
            <a href="#concepts" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">
              {t("patents.emergingOpportunities")}
            </a>{" "}
            {t("patents.additionalNoteEnd")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatentPortfolios;
