import { BarChart3, FileText, Hammer, Search, Sparkles, Rocket, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import { useLangPath } from "@/hooks/use-lang-path";

const steps = [
  { icon: BarChart3, key: "step1" },
  { icon: FileText, key: "step2" },
  { icon: Hammer, key: "step3" },
  { icon: Search, key: "step4" },
  { icon: Sparkles, key: "step5" },
  { icon: Rocket, key: "step6" },
  { icon: Wrench, key: "step7" },
];

interface DeliveryProcessProps {
  variant?: "full" | "teaser";
}

const DeliveryProcess = ({ variant = "full" }: DeliveryProcessProps) => {
  const { t } = useLanguage();
  const lp = useLangPath();

  if (variant === "teaser") {
    return (
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimateWrapper>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("delivery.teaserTitle")}
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {t("delivery.teaserDesc")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <s.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm text-white/80">{t(`delivery.${s.key}.title`)}</span>
                </div>
              ))}
            </div>
            <Link
              to={lp("/brief")}
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-xl font-semibold hover:bg-gold-light transition-all"
            >
              {t("delivery.teaserCta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimateWrapper>
        </div>
      </section>
    );
  }

  const summaryRows = [
    { phase: t("delivery.table.brief"), happens: t("delivery.table.briefHappens"), pay: t("delivery.table.briefPay"), get: t("delivery.table.briefGet") },
    { phase: t("delivery.table.agreement"), happens: t("delivery.table.agreementHappens"), pay: t("delivery.table.agreementPay"), get: t("delivery.table.agreementGet") },
    { phase: t("delivery.table.production"), happens: t("delivery.table.productionHappens"), pay: "—", get: t("delivery.table.productionGet") },
    { phase: t("delivery.table.review1"), happens: t("delivery.table.review1Happens"), pay: "—", get: t("delivery.table.review1Get") },
    { phase: t("delivery.table.review2"), happens: t("delivery.table.review2Happens"), pay: "—", get: t("delivery.table.review2Get") },
    { phase: t("delivery.table.launch"), happens: t("delivery.table.launchHappens"), pay: t("delivery.table.launchPay"), get: t("delivery.table.launchGet") },
    { phase: t("delivery.table.maintenance"), happens: t("delivery.table.maintenanceHappens"), pay: t("delivery.table.maintenancePay"), get: t("delivery.table.maintenanceGet") },
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-[900px] mx-auto">
        <ScrollAnimateWrapper>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              {t("delivery.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("delivery.title")}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t("delivery.subtitle")}
            </p>
          </div>
        </ScrollAnimateWrapper>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((s, i) => {
            const deliverables = t(`delivery.${s.key}.deliverables`).split("·").map(d => d.trim()).filter(Boolean);
            const highlight = t(`delivery.${s.key}.highlight`);
            const note = t(`delivery.${s.key}.note`);

            return (
              <ScrollAnimateWrapper key={i} delay={i * 0.1}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>

                  {/* Timeline tag */}
                  <div className="mb-3">
                    <span className="text-xs font-medium text-white/50 bg-white/5 px-3 py-1 rounded-full">
                      {t(`delivery.${s.key}.timeline`)}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {t(`delivery.${s.key}.title`)}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-4">
                        {t(`delivery.${s.key}.desc`)}
                      </p>

                      {/* Deliverables pills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {deliverables.map((d, di) => (
                          <span key={di} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full">
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Highlight badge */}
                      {highlight && highlight !== `delivery.${s.key}.highlight` && (
                        <span className="inline-block text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      )}

                      {/* Note */}
                      {note && note !== `delivery.${s.key}.note` && (
                        <p className="text-xs text-white/40 mt-2 italic">{note}</p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            );
          })}
        </div>

        {/* Summary Table */}
        <ScrollAnimateWrapper>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white/50 font-medium">{t("delivery.table.colPhase")}</th>
                    <th className="text-left p-4 text-white/50 font-medium">{t("delivery.table.colHappens")}</th>
                    <th className="text-left p-4 text-white/50 font-medium">{t("delivery.table.colPay")}</th>
                    <th className="text-left p-4 text-white/50 font-medium">{t("delivery.table.colGet")}</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryRows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="p-4 text-white font-medium">{row.phase}</td>
                      <td className="p-4 text-white/70">{row.happens}</td>
                      <td className="p-4 text-white/70">{row.pay}</td>
                      <td className="p-4 text-white/70">{row.get}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollAnimateWrapper>

        {/* Transparency Note */}
        <ScrollAnimateWrapper>
          <div className="text-center">
            <p className="text-white/40 text-sm leading-relaxed max-w-2xl mx-auto mb-4">
              {t("delivery.transparencyNote")}
            </p>
            <a href="#" className="text-sm text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1">
              {t("delivery.downloadContract")} <ArrowRight className="w-3 h-3" />
              {/* TODO: add contract PDF link */}
            </a>
          </div>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};

export default DeliveryProcess;
