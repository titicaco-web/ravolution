import { Link } from "react-router-dom";
import { useLangPath } from "@/hooks/use-lang-path";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const ExpandedFAQ = () => {
  const lp = useLangPath();
  const { t } = useLanguage();

  const faqs = [
    { q: t("expandedFaq.q1"), a: t("expandedFaq.a1") },
    { q: t("expandedFaq.q2"), a: t("expandedFaq.a2") },
    { q: t("expandedFaq.q3"), a: t("expandedFaq.a3") },
    { q: t("expandedFaq.q4"), a: t("expandedFaq.a4") },
    { q: t("expandedFaq.q5"), a: t("expandedFaq.a5"), hasLink: true },
    { q: t("expandedFaq.q6"), a: t("expandedFaq.a6") },
    { q: t("expandedFaq.q7"), a: t("expandedFaq.a7") },
    { q: t("expandedFaq.q8"), a: t("expandedFaq.a8") },
    { q: t("expandedFaq.q9"), a: t("expandedFaq.a9") },
    { q: t("expandedFaq.q10"), a: t("expandedFaq.a10") },
  ];

  return (
    <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
      <div className="edit-container">
        <SectionLabel number="·" title={t("expandedFaq.heading") as string} />
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <details className="group border-t border-white/10 last:border-b py-6">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">
                    {faq.q}
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90 text-[hsl(var(--accent-edit))]" />
                </summary>
                <p className="mt-4 edit-body text-white/65">
                  {faq.a}
                  {faq.hasLink && (
                    <>
                      {" "}
                      <Link to={lp("/angel-investor")} className="text-[hsl(var(--accent-edit))] hover:text-white transition-colors edit-link">
                        {t("expandedFaq.equityLink")} →
                      </Link>
                    </>
                  )}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpandedFAQ;
