import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const PlatformShowcase = () => {
  const { t } = useLanguage();

  const platforms = [
    { tag: t("platformShowcase.tag1"), title: t("platformShowcase.title1"), description: t("platformShowcase.desc1"), stat: t("platformShowcase.stat1"), link: "https://iapply.se" },
    { tag: t("platformShowcase.tag2"), title: t("platformShowcase.title2"), description: t("platformShowcase.desc2"), stat: t("platformShowcase.stat2"), link: "#" },
    { tag: t("platformShowcase.tag3"), title: t("platformShowcase.title3"), description: t("platformShowcase.desc3"), stat: t("platformShowcase.stat3"), link: "https://xportmatch.com" },
    { tag: t("platformShowcase.tag4"), title: t("platformShowcase.title4"), description: t("platformShowcase.desc4"), stat: t("platformShowcase.stat4"), link: "https://communicaringschool.com" },
    { tag: t("platformShowcase.tag5"), title: t("platformShowcase.title5"), description: t("platformShowcase.desc5"), stat: t("platformShowcase.stat5"), link: "https://carbonx.se" },
    { tag: t("platformShowcase.tag6"), title: t("platformShowcase.title6"), description: t("platformShowcase.desc6"), stat: t("platformShowcase.stat6"), link: "#" },
  ];

  return (
    <section className="edit-section border-t border-white/10">
      <div className="edit-container">
        <SectionLabel number="·" title={t("platformShowcase.heading") as string} />
        <Reveal>
          <p className="edit-body text-white/55 mb-12 max-w-2xl">{t("platformShowcase.subheading")}</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {platforms.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div className="bg-[hsl(var(--bg))] p-8 h-full flex flex-col">
                <span className="edit-label text-[hsl(var(--accent-edit))] mb-5">{p.tag}</span>
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white mb-3">{p.title}</h3>
                <p className="edit-body text-white/60 mb-6 flex-1">{p.description}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="edit-label text-white/55">{p.stat}</span>
                  {p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="edit-label text-white hover:text-[hsl(var(--accent-edit))] inline-flex items-center gap-2 transition-colors"
                    >
                      {t("platformShowcase.viewPlatform")} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
