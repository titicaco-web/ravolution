import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Globe, Shield, Zap, BarChart3, FileSearch, Brain, Eye, Star, Languages, Radio, BookOpen, Newspaper, Smartphone, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FeaturedProducts = () => {
  const { t } = useLanguage();
  const p = (key: string) => t(`productItems.${key}`) as string;

  return (
    <section id="products" className="section-padding pt-10 md:pt-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">{t("products.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.subtitle")}
          </p>
        </div>

        {/* Flagship Products Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* iApply - Flagship */}
          <div className="bg-card rounded-2xl border-2 border-primary/40 shadow-elevated overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,51,102,0.25)] hover:-translate-y-1 ring-2 ring-primary/20">
            <div className="bg-gradient-to-br from-primary/15 to-primary/5 p-6 relative overflow-hidden">
              <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold">
                <Star className="w-3 h-3" />
                {t("products.flagship")}
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-4">
                  <FileSearch className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">iApply.se</h3>
                <p className="text-sm text-muted-foreground">{p("iapplySubtitle")}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-accent">{t("products.marketTAM")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">$924B</div>
                  <div className="text-xs text-white/70">{p("iapplyGlobalRecruiting")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-accent">{t("products.valuation")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">$800M–1.5B</div>
                  <div className="text-xs text-white/70">{p("iapplyPreLaunch")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.targetUsers")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">2B+</div>
                  <div className="text-xs text-white/70">{p("iapplyJobSeekers")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.patentPortfolio")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">7 {t("patents.patents")}</div>
                  <div className="text-xs text-white/70">{p("iapplyPatentValue")}</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground text-sm mb-2">{t("products.categoryCreating")}</h4>
              <ul className="space-y-1.5 mb-5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-primary" />
                  {p("iapplyFeature1")}
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-3.5 h-3.5 text-primary" />
                  {p("iapplyFeature2")}
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  {p("iapplyFeature3")}
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="https://iapply.se" target="_blank" rel="noopener noreferrer">
                    {t("products.visitiApply")}
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                    {t("products.investorInquiry")}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Rosetta Livingstone - Flagship */}
          <div className="bg-card rounded-2xl border-2 border-accent/40 shadow-elevated overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,102,102,0.25)] hover:-translate-y-1 ring-2 ring-accent/20">
            <div className="bg-gradient-to-br from-accent/15 to-accent/5 p-6 relative overflow-hidden">
              <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold">
                <Star className="w-3 h-3" />
                {t("products.flagship")}
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-accent-foreground mb-4">
                  <Languages className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">Rosetta Livingstone™</h3>
                <p className="text-sm text-muted-foreground">{p("rosettaSubtitle")}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.marketTAM")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">€585B</div>
                  <div className="text-xs text-white/70">{p("rosettaLanguageLearning")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.year5Revenue")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">€730M+</div>
                  <div className="text-xs text-white/70">{p("rosettaConsolidated")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.cagr")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">17.67%</div>
                  <div className="text-xs text-white/70">{p("rosettaMarketGrowth")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.patentClaims")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">23 {t("patents.claims")}</div>
                  <div className="text-xs text-white/70">{p("rosettaNoPriorArt")}</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground text-sm mb-2">{t("products.threeMarketVerticals")}</h4>
              <ul className="space-y-1.5 mb-5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  {p("rosettaFeature1")}
                </li>
                <li className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-accent" />
                  {p("rosettaFeature2")}
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  {p("rosettaFeature3")}
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" className="bg-accent hover:bg-accent-light" asChild>
                  <a href="https://rosettalivingstone.com" target="_blank" rel="noopener noreferrer">
                    {t("products.visitRosetta")}
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                    {t("products.investorInquiry")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* xPortMatch */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-accent/40">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-accent-foreground mb-4">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">xPortMatch.com</h3>
                <p className="text-sm text-muted-foreground">{p("xportmatchSubtitle")}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.marketTAM")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">€194B</div>
                  <div className="text-xs text-white/70">{p("xportmatchSwedishExport")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.arrPotential")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">€15.5–31M</div>
                  <div className="text-xs text-white/70">{p("xportmatchPenetration")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.targetSMEs")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">180,500</div>
                  <div className="text-xs text-white/70">{p("xportmatchVerifiedSuppliers")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.geographicReach")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">150+</div>
                  <div className="text-xs text-white/70">{p("xportmatchCountries")}</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground text-sm mb-2">{t("products.revenueStreams")}</h4>
              <ul className="space-y-1.5 mb-5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  {p("xportmatchStream1")}
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  {p("xportmatchStream2")}
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  {p("xportmatchStream3")}
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" className="bg-accent hover:bg-accent-light" asChild>
                  <a href="https://xportmatch.com" target="_blank" rel="noopener noreferrer">
                    {t("products.visitxPortMatch")}
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                    {t("products.requestDemo")}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* NewsToast */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-gold/40">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold text-gold-foreground mb-4">
                  <Newspaper className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">NewsToast.com</h3>
                <p className="text-sm text-muted-foreground">{p("newstoastSubtitle")}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.marketTAM")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">$54.8B</div>
                  <div className="text-xs text-white/70">{p("newstoastMarket")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.cagr")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">16.6%</div>
                  <div className="text-xs text-white/70">{p("newstoastGrowth")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.targetUsers")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">28M+</div>
                  <div className="text-xs text-white/70">{p("newstoastImmigrants")}</div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accent mb-1">
                    <Smartphone className="w-4 h-4" />
                    <span className="text-xs font-medium">{t("products.platform")}</span>
                  </div>
                  <div className="text-lg font-bold text-white">{p("newstoastMobileFirst")}</div>
                  <div className="text-xs text-white/70">{p("newstoastConsumer")}</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground text-sm mb-2">{t("products.coreCapabilities")}</h4>
              <ul className="space-y-1.5 mb-5 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Newspaper className="w-3.5 h-3.5 text-gold" />
                  {p("newstoastFeature1")}
                </li>
                <li className="flex items-center gap-2">
                  <Languages className="w-3.5 h-3.5 text-gold" />
                  {p("newstoastFeature2")}
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-gold" />
                  {p("newstoastFeature3")}
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                  <a href="https://newstoast.com" target="_blank" rel="noopener noreferrer">
                    {t("products.visitNewsToast")}
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                    {t("products.investorInquiry")}
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
