import { Button } from "@/components/ui/button";
import { Dog, Heart, ShieldAlert, Droplets, Home, ArrowRight, TrendingUp, Users, Briefcase, ExternalLink, Calendar, Mic, Gift, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const conceptMeta = [
  { id: "eventor", icon: Calendar, color: "accent", link: null, patents: 1, claims: 15, status: "concept", name: "Eventor™" },
  { id: "givin", icon: Gift, color: "accent", link: null, patents: 2, claims: 24, status: "concept", name: "Givin™" },
  { id: "hundelser", icon: Dog, color: "accent", link: "https://hundelser.se/", status: "concept", name: "Hundelser.se" },
  { id: "naravan", icon: Heart, color: "gold", link: "https://xn--nravn-grad.se/", status: "earlyValidation", name: "NäraVän.se" },
  { id: "beredskapad", icon: ShieldAlert, color: "primary", link: "https://beredskapad.se/", status: "mvpReady", name: "Beredskapad.se" },
  { id: "endofthirst", icon: Droplets, color: "accent", link: "https://endofthirst.com/", status: "concept", name: "EndOfThirst.com" },
  { id: "villaspar", icon: Home, color: "gold", link: "https://villaspar.se/", status: "earlyValidation", name: "VillaSpar.se" },
  { id: "nordicFreelance", icon: Briefcase, color: "primary", link: "https://nordicfreelance.se/", status: "livePlatform", name: "NordicFreelance.se" },
];

const MarketplaceConcepts = () => {
  const { t } = useLanguage();

  const statusMap: Record<string, { label: string; classes: string }> = {
    concept: { label: t("concepts.concept") as string, classes: "bg-muted text-muted-foreground" },
    earlyValidation: { label: t("concepts.earlyValidation") as string, classes: "bg-gold/10 text-gold" },
    mvpReady: { label: t("concepts.mvpReady") as string, classes: "bg-accent/10 text-accent" },
    livePlatform: { label: t("concepts.livePlatform") as string, classes: "bg-primary/10 text-primary" },
  };

  return (
    <section id="concepts" className="section-padding pt-10 md:pt-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-accent-light">{t("concepts.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-destructive-foreground">
            {t("concepts.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("concepts.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {conceptMeta.map((concept) => {
            const IconComponent = concept.icon;
            const itemT = t(`conceptItems.${concept.id}`) as any;
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
            const status = statusMap[concept.status];

            return (
              <div
                key={concept.id}
                className={`bg-card rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${colorClasses[concept.color as keyof typeof colorClasses]}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBgClasses[concept.color as keyof typeof iconBgClasses]}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status.classes}`}>
                    {status.label}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  {concept.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{itemT?.tagline}</p>
                
                {concept.patents && concept.claims && (
                  <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-3 py-1 mb-4">
                    <FileText className="w-3 h-3 text-gold" />
                    <span className="text-xs font-semibold text-gold">{concept.patents} {t("patents.patents")}</span>
                    <span className="text-gold/50">|</span>
                    <span className="text-xs font-semibold text-gold">{concept.claims} {t("patents.claims")}</span>
                  </div>
                )}
                {!concept.patents && <div className="mb-4" />}

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">{itemT?.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{itemT?.market}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="font-semibold">{t("concepts.revenue")}</span> {itemT?.revenue}
                  </p>
                  {concept.link ? (
                    <Button className="w-full group bg-accent hover:bg-accent-light text-white" size="sm" asChild>
                      <a href={concept.link} target="_blank" rel="noopener noreferrer">
                        {t("concepts.visitPlatform")}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full group bg-accent hover:bg-accent-light text-white" size="sm">
                      {t("concepts.learnMore")}
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
            {t("concepts.summaryTitle")}
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t("concepts.summaryDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent-light text-white">
              {t("concepts.exploreAcquisition")}
            </Button>
            <Button variant="outline" className="border-white/30 hover:bg-white/10 text-primary">
              {t("concepts.downloadPortfolio")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceConcepts;
