import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
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
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimateWrapper>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              {t("invest.trust.sectionTitle")}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
              {t("invest.trust.sectionSubtitle")}
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((c, i) => (
              <ScrollAnimateWrapper key={c.key} delay={i * 0.08}>
                <div className="card-elevated p-6 h-full hover:border-accent/40 hover:-translate-y-0.5 transition-all">
                  <c.icon className="w-7 h-7 text-accent mb-3" />
                  <h3 className="text-base font-display font-bold text-foreground mb-2">
                    {t(`invest.trust.cards.${c.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`invest.trust.cards.${c.key}.desc`)}
                  </p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Section B — Family Office Trust Copy */}
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimateWrapper>
            <div className="border-t border-border pt-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                {t("invest.family.sectionTitle")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("invest.family.sectionSubtitle")}
              </p>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] text-justify">
                <p>{t("invest.family.p1")}</p>
                <p>{t("invest.family.p2")}</p>
                <div>
                  <p className="mb-3">{t("invest.family.p3Intro")}</p>
                  <ul className="space-y-2 pl-1">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{t(`invest.family.${b}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p>{t("invest.family.p4")}</p>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>
    </>
  );
};

export default InvestorTrustSection;
