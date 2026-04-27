import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const techs = [
  "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL",
  "Stripe", "OpenAI", "Figma", "Tailwind CSS", "GitHub", "Vercel", "Python",
];

const TechStackStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
      <div className="edit-container">
        <SectionLabel number="·" title={t("techStack.heading") as string} />
        <Reveal>
          <p className="edit-body text-white/55 mb-10 max-w-2xl">{t("techStack.subheading")}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-8">
            {techs.map((tech) => (
              <span
                key={tech}
                className="edit-label text-white/70 hover:text-white transition-colors px-4 py-2 border border-white/15 hover:border-[hsl(var(--accent-edit))] bg-[hsl(var(--bg))]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="edit-label text-white/40">{t("techStack.note")}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default TechStackStrip;
