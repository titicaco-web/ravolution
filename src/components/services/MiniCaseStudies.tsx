import { Clock } from "lucide-react";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const MiniCaseStudies = () => {
  const { t } = useLanguage();

  const cases = [
    {
      clientType: t("caseStudies.client1Type"),
      challenge: t("caseStudies.client1Challenge"),
      built: t("caseStudies.client1Built"),
      result: t("caseStudies.client1Result"),
      time: t("caseStudies.client1Time"),
    },
    {
      clientType: t("caseStudies.client2Type"),
      challenge: t("caseStudies.client2Challenge"),
      built: t("caseStudies.client2Built"),
      result: t("caseStudies.client2Result"),
      time: t("caseStudies.client2Time"),
    },
    {
      clientType: t("caseStudies.client3Type"),
      challenge: t("caseStudies.client3Challenge"),
      built: t("caseStudies.client3Built"),
      result: t("caseStudies.client3Result"),
      time: t("caseStudies.client3Time"),
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t("caseStudies.heading")}</h2>
          <p className="text-white/70 text-lg">{t("caseStudies.subheading")}</p>
        </div>
        <div className="space-y-6">
          {cases.map((c, i) => (
            <ScrollAnimateWrapper key={i} delay={i * 0.15}>
              <div className="rounded-2xl bg-card border border-border p-6 md:p-8 border-l-4 border-l-primary">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">{c.clientType}</span>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{t("caseStudies.challengeLabel")}</h4>
                    <p className="text-sm text-muted-foreground">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{t("caseStudies.builtLabel")}</h4>
                    <p className="text-sm text-muted-foreground">{c.built}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="inline-block text-sm font-semibold bg-primary/10 text-primary px-4 py-2 rounded-full">
                      {c.result}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" /> {c.time}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCaseStudies;
