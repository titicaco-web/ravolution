import { Button } from "@/components/ui/button";
import { Rocket, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";

const AngelInvestorTeaser = () => {
  const { t } = useLanguage();
  const lp = useLangPath();

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="card-elevated p-8 md:p-12 bg-gradient-to-br from-card to-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              {t("angel.teaserBadge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t("angel.teaserTitle")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
              {t("angel.teaserDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground" asChild>
                <a href={lp("/angel-investor")}>
                  <ArrowRight className="mr-2 w-5 h-5" />
                  {t("angel.teaserCta")}
                </a>
              </Button>
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground border-0" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-5 h-5" />
                  {t("angel.ctaMeeting")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngelInvestorTeaser;
