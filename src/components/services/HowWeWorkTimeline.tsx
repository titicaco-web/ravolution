import { Mail, Search, ClipboardList, Handshake, Hammer, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const HowWeWorkTimeline = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Mail, title: t("timeline.step1Title"), subtitle: t("timeline.step1Sub"), body: t("timeline.step1Body") },
    { icon: Search, title: t("timeline.step2Title"), subtitle: t("timeline.step2Sub"), body: t("timeline.step2Body") },
    { icon: ClipboardList, title: t("timeline.step3Title"), subtitle: t("timeline.step3Sub"), body: t("timeline.step3Body") },
    { icon: Handshake, title: t("timeline.step4Title"), subtitle: t("timeline.step4Sub"), body: t("timeline.step4Body") },
    { icon: Hammer, title: t("timeline.step5Title"), subtitle: t("timeline.step5Sub"), body: t("timeline.step5Body") },
    { icon: Rocket, title: t("timeline.step6Title"), subtitle: "", body: t("timeline.step6Body") },
  ];

  return (
    <section className="edit-section border-t border-white/10">
      <div className="edit-container">
        <SectionLabel number="·" title={t("timeline.heading") as string} />
        <Reveal>
          <p className="edit-body text-white/55 mb-12 max-w-2xl">{t("timeline.subheading")}</p>
        </Reveal>
        <ol>
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="border-t border-white/10 last:border-b py-10 grid md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">0{i + 1}</span>
                <div className="md:col-span-5 flex items-center gap-4">
                  <step.icon className="w-5 h-5 text-[hsl(var(--accent-edit))] shrink-0" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white leading-tight">{step.title}</h3>
                    {step.subtitle && <span className="edit-label text-white/45 mt-2 block">{step.subtitle}</span>}
                  </div>
                </div>
                <p className="md:col-span-6 edit-body text-white/60">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeWorkTimeline;
