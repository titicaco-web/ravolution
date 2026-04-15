import { Link } from "react-router-dom";
import { useLangPath } from "@/hooks/use-lang-path";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t("expandedFaq.heading")}
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-foreground text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
                {faq.hasLink && (
                  <>
                    {" "}
                    <Link to={lp("/angel-investor")} className="text-primary hover:text-accent font-medium underline underline-offset-2">
                      {t("expandedFaq.equityLink")} →
                    </Link>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ExpandedFAQ;
