import { useLanguage } from "@/i18n/LanguageContext";

const techs = [
  "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL",
  "Stripe", "OpenAI", "Figma", "Tailwind CSS", "GitHub", "Vercel", "Python",
];

const TechStackStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="py-14 px-6 bg-secondary border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("techStack.heading")}</h2>
          <p className="text-white/70">{t("techStack.subheading")}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg border border-white/20 hover:border-white/40 bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-center text-xs text-white/50">
          {t("techStack.note")}
        </p>
      </div>
    </section>
  );
};

export default TechStackStrip;
