import { useLanguage } from "@/i18n/LanguageContext";
import { Flag, FileText, Lock, BarChart3, Handshake, Globe2 } from "lucide-react";

const InvestorTrustSection = () => {
  const { t } = useLanguage();

  const credentials = [
    { icon: Flag, key: "swedishAB" },
    { icon: FileText, key: "ipPortfolio" },
    { icon: Lock, key: "gdpr" },
    { icon: BarChart3, key: "financials" },
    { icon: Handshake, key: "nda" },
    { icon: Globe2, key: "multiJurisdiction" },
  ];

  const bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5", "bullet6"];

  return (
    <>
      {/* Section A — Credential Grid */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <span className="block text-[11px] md:text-xs uppercase tracking-[0.25em] text-accent font-mono mb-6">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-[-0.02em] leading-[0.95] mb-6">
            {t("invest.trust.sectionTitle")}
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
            {t("invest.trust.sectionSubtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {credentials.map((c, i) => (
              <div
                key={c.key}
                className="bg-[#0a0e14] p-8 md:p-10 hover:bg-[#0d1219] transition-colors"
              >
                <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono mb-6">
                  0{i + 1} / 0{credentials.length}
                </span>
                <c.icon className="w-6 h-6 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-tight mb-3 leading-tight">
                  {t(`invest.trust.cards.${c.key}.title`)}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t(`invest.trust.cards.${c.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section B — Family Office Trust Copy */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <span className="block text-[11px] md:text-xs uppercase tracking-[0.25em] text-accent font-mono mb-6">
              Family offices
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.02em] leading-[0.95]">
              {t("invest.family.sectionTitle")}
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-white/70 leading-relaxed text-base md:text-lg">
            <p className="text-white/80 text-lg md:text-xl font-display leading-snug">
              {t("invest.family.sectionSubtitle")}
            </p>
            <p>{t("invest.family.p1")}</p>
            <p>{t("invest.family.p2")}</p>
            <div className="border-t border-white/10 pt-6">
              <p className="mb-5 text-white/80">{t("invest.family.p3Intro")}</p>
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <li key={b} className="grid grid-cols-[auto_1fr] gap-5 items-baseline">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-mono">
                      0{i + 1}
                    </span>
                    <span className="text-white/70">{t(`invest.family.${b}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="border-l-2 border-accent pl-5 text-white/80 mt-8">
              {t("invest.family.p4")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorTrustSection;
