import { useLanguage } from "@/i18n/LanguageContext";

const InvestorLegalDisclaimer = () => {
  const { t } = useLanguage();
  const paragraphs = ["p1", "p2", "p3", "p4"];

  return (
    <div className="px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-3">
          <span className="block text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-mono">
            {t("invest.legal.title")}
          </span>
        </div>
        <div className="md:col-span-9 space-y-4 border-l border-white/10 pl-6 md:pl-10">
          {paragraphs.map((p) => (
            <p key={p} className="text-[11px] md:text-xs leading-relaxed text-white/40 font-mono uppercase tracking-wide">
              {t(`invest.legal.${p}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorLegalDisclaimer;
