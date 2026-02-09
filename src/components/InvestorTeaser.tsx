import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const InvestorTeaser = () => {
  const { t } = useLanguage();

  return (
    <section id="investors" className="section-padding gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">{t("investors.badge")}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {t("investors.title")}
            </h2>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {t("investors.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent-light text-white group" asChild>
                <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                  {t("investors.ctaCall")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:ivan.daza@ravolution.se?subject=Financial Model Request">
                  {t("investors.ctaModel")}
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-glass p-6">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{t("investors.statARR")}</div>
              <div className="text-white/70 text-sm">{t("investors.statARRLabel")}</div>
            </div>
            <div className="card-glass p-6">
              <Shield className="w-8 h-8 text-gold mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{t("investors.statPortfolios")}</div>
              <div className="text-white/70 text-sm">{t("investors.statPortfoliosLabel")}</div>
            </div>
            <div className="card-glass p-6">
              <Target className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{t("investors.statTAM")}</div>
              <div className="text-white/70 text-sm">{t("investors.statTAMLabel")}</div>
            </div>
            <div className="card-glass p-6">
              <TrendingUp className="w-8 h-8 text-gold mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{t("investors.statExits")}</div>
              <div className="text-white/70 text-sm">{t("investors.statExitsLabel")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorTeaser;
