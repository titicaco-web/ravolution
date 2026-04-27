import { BarChart3, FileText, Hammer, Search, Sparkles, Rocket, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { useLangPath } from "@/hooks/use-lang-path";
import { Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

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
      <section className="edit-section border-t border-white/10">
        <div className="edit-container">
          <SectionLabel number="·" title={t("delivery.teaserTitle") as string} />
          <Reveal>
            <p className="edit-body text-white/65 max-w-2xl mb-10">{t("delivery.teaserDesc")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-12">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-[hsl(var(--surface))] border border-white/10 px-4 py-2">
                  <s.icon className="w-4 h-4 text-[hsl(var(--accent-edit))]" />
                  <span className="edit-label text-white/75">{t(`delivery.${s.key}.title`)}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to={lp("/brief")}
              className="edit-label inline-flex items-center gap-3 bg-white text-black px-6 py-4 hover:bg-[hsl(var(--accent-edit))] hover:text-white transition-colors"
            >
              {t("delivery.teaserCta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
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
    <section className="edit-section border-t border-white/10">
      <div className="edit-container">
        <Reveal>
          <span className="edit-label text-[hsl(var(--accent-edit))]">{t("delivery.badge")}</span>
        </Reveal>
        <SectionLabel number="·" title={t("delivery.title") as string} className="mt-6" />
        <Reveal>
          <p className="edit-body text-white/65 max-w-2xl mb-16">{t("delivery.subtitle")}</p>
        </Reveal>

        {/* Steps */}
        <ol className="mb-20">
          {steps.map((s, i) => {
            const deliverables = t(`delivery.${s.key}.deliverables`).split("·").map(d => d.trim()).filter(Boolean);
            const highlight = t(`delivery.${s.key}.highlight`);
            const note = t(`delivery.${s.key}.note`);

            return (
              <Reveal key={i} delay={i * 0.06}>
                <li className="border-t border-white/10 last:border-b py-10 grid md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-2 space-y-3">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block">0{i + 1}</span>
                    <span className="edit-label text-white/45 block">{t(`delivery.${s.key}.timeline`)}</span>
                    <s.icon className="w-5 h-5 text-white/55" />
                  </div>
                  <div className="md:col-span-10 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                      {t(`delivery.${s.key}.title`)}
                    </h3>
                    <p className="edit-body text-white/65">{t(`delivery.${s.key}.desc`)}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {deliverables.map((d, di) => (
                        <span key={di} className="edit-label text-white/70 px-3 py-1.5 border border-white/15">
                          {d}
                        </span>
                      ))}
                    </div>
                    {highlight && highlight !== `delivery.${s.key}.highlight` && (
                      <span className="edit-label inline-block text-black bg-[hsl(var(--accent-edit))] px-3 py-1.5 mt-2">
                        {highlight}
                      </span>
                    )}
                    {note && note !== `delivery.${s.key}.note` && (
                      <p className="edit-label text-white/40 italic mt-2">{note}</p>
                    )}
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>

        {/* Summary Table */}
        <Reveal>
          <div className="border border-white/10 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-[hsl(var(--surface))]">
                    <th className="text-left p-4 edit-label text-white/45">{t("delivery.table.colPhase")}</th>
                    <th className="text-left p-4 edit-label text-white/45">{t("delivery.table.colHappens")}</th>
                    <th className="text-left p-4 edit-label text-white/45">{t("delivery.table.colPay")}</th>
                    <th className="text-left p-4 edit-label text-white/45">{t("delivery.table.colGet")}</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryRows.map((row, i) => (
                    <tr key={i} className="border-b border-white/10 last:border-0">
                      <td className="p-4 text-white font-display uppercase tracking-tight text-sm">{row.phase}</td>
                      <td className="p-4 text-white/70">{row.happens}</td>
                      <td className="p-4 text-white/70">{row.pay}</td>
                      <td className="p-4 text-white/70">{row.get}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Transparency Note */}
        <Reveal>
          <p className="edit-body text-white/40 max-w-2xl mb-4">{t("delivery.transparencyNote")}</p>
          <a href="#" className="edit-label text-[hsl(var(--accent-edit))] hover:text-white transition-colors inline-flex items-center gap-2">
            {t("delivery.downloadContract")} <ArrowRight className="w-3 h-3" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default DeliveryProcess;
