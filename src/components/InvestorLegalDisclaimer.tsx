import { useLanguage } from "@/i18n/LanguageContext";

const InvestorLegalDisclaimer = () => {
  const { t } = useLanguage();
  const paragraphs = ["p1", "p2", "p3", "p4"];

  return (
    <div className="max-w-5xl mx-auto px-6 pb-10">
      <div className="rounded-lg border border-border bg-secondary/40 p-5 md:p-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
          {t("invest.legal.title")}
        </h4>
        <div className="space-y-3">
          {paragraphs.map((p) => (
            <p key={p} className="text-[11px] leading-relaxed text-muted-foreground/80">
              {t(`invest.legal.${p}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorLegalDisclaimer;
