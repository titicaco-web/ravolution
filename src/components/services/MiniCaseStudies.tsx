import { Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const MiniCaseStudies = () => {
  const { t } = useLanguage();

  const cases = [
    { clientType: t("caseStudies.client1Type"), challenge: t("caseStudies.client1Challenge"), built: t("caseStudies.client1Built"), result: t("caseStudies.client1Result"), time: t("caseStudies.client1Time") },
    { clientType: t("caseStudies.client2Type"), challenge: t("caseStudies.client2Challenge"), built: t("caseStudies.client2Built"), result: t("caseStudies.client2Result"), time: t("caseStudies.client2Time") },
    { clientType: t("caseStudies.client3Type"), challenge: t("caseStudies.client3Challenge"), built: t("caseStudies.client3Built"), result: t("caseStudies.client3Result"), time: t("caseStudies.client3Time") },
  ];

  return (
    <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
      <div className="edit-container">
        <SectionLabel number="·" title={t("caseStudies.heading") as string} />
        <Reveal>
          <p className="edit-body text-white/55 mb-12 max-w-2xl">{t("caseStudies.subheading")}</p>
        </Reveal>
        <ul>
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <li className="border-t border-white/10 last:border-b py-10 grid md:grid-cols-12 gap-6 md:gap-10">
                <span className="md:col-span-2 edit-label text-[hsl(var(--accent-edit))]">{c.clientType}</span>
                <div className="md:col-span-10 space-y-5">
                  <div>
                    <span className="edit-label text-white/45 mb-1 block">{t("caseStudies.challengeLabel")}</span>
                    <p className="edit-body text-white/75">{c.challenge}</p>
                  </div>
                  <div>
                    <span className="edit-label text-white/45 mb-1 block">{t("caseStudies.builtLabel")}</span>
                    <p className="edit-body text-white/75">{c.built}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <span className="edit-label text-[hsl(var(--accent-edit))]">{c.result}</span>
                    <span className="edit-label text-white/45 inline-flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" /> {c.time}
                    </span>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MiniCaseStudies;
