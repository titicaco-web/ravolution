import { Helmet } from "react-helmet-async";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Headphones, BookOpen, ExternalLink, Mic, Calendar, Clock, ArrowRight, Mail, Phone, User, FileDown, Shield } from "lucide-react";

const BlogPodcast = () => {
  const { t } = useLanguage();

  const podcasts = [
    {
      title: t("blogPod.podcast1Title"),
      description: t("blogPod.podcast1Desc"),
      date: "2025",
      duration: t("blogPod.podcast1Duration"),
      featured: true,
    },
  ];

  const externalArticles = [
    {
      source: "xPortMatch",
      url: "https://xportmatch.com/forum",
      icon: "🌍",
      description: t("blogPod.xportmatchDesc"),
      articles: [
        t("blogPod.xportmatchArticle1"),
        t("blogPod.xportmatchArticle2"),
        t("blogPod.xportmatchArticle3"),
      ],
    },
    {
      source: "iApply",
      url: "https://iapply.se/forum",
      icon: "👤",
      description: t("blogPod.iapplyDesc"),
      articles: [
        t("blogPod.iapplyArticle1"),
        t("blogPod.iapplyArticle2"),
        t("blogPod.iapplyArticle3"),
      ],
    },
    {
      source: "itsaFitt",
      url: "https://itsafitt.com/blog",
      icon: "👗",
      description: t("blogPod.itsafittDesc"),
      articles: [
        t("blogPod.itsafittArticle1"),
        t("blogPod.itsafittArticle2"),
        t("blogPod.itsafittArticle3"),
      ],
    },
    {
      source: "Rosetta Livingstone",
      url: "https://rosettalivingstone.com/blog",
      icon: "🗣️",
      description: t("blogPod.rosettaDesc"),
      articles: [
        t("blogPod.rosettaArticle1"),
        t("blogPod.rosettaArticle2"),
        t("blogPod.rosettaArticle3"),
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("blogPod.metaTitle")}</title>
        <meta name="description" content={t("blogPod.metaDesc")} />
        <link rel="canonical" href="https://ravolution.se/blog" />
        <meta property="og:title" content={t("blogPod.metaTitle")} />
        <meta property="og:description" content={t("blogPod.metaDesc")} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Ravolution Blog & Podcast",
            "description": t("blogPod.metaDesc"),
            "publisher": { "@type": "Organization", "name": "Ravolution AB" },
          })}
        </script>
      </Helmet>

      <EditorialShell>
        {/* Hero */}
        <section className="edit-section relative border-b border-white/10 bg-[hsl(var(--bg))]">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
            aria-hidden
          />
          <div className="edit-container relative">
            <Reveal>
              <div className="edit-label text-[hsl(var(--accent-edit))] mb-8 flex items-center gap-3">
                <Mic className="w-4 h-4" /> {t("blogPod.badge")}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white max-w-[14ch] mb-10">
                {t("blogPod.heroTitle")}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/70 max-w-3xl">
                {t("blogPod.heroSubtitle")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Podcast */}
        <section className="edit-section bg-[hsl(var(--bg))]">
          <div className="edit-container">
            <SectionLabel number="01" title={t("blogPod.podcastsHeading")} />
            {podcasts.map((pod, i) => (
              <Reveal key={i} delay={0.05}>
                <article className="border border-white/10 bg-[hsl(var(--surface))]">
                  {pod.featured && (
                    <div className="px-8 py-3 border-b border-white/10 bg-[hsl(var(--accent-edit))]/10">
                      <span className="edit-label text-[hsl(var(--accent-edit))]">
                        ★ {t("blogPod.featured")}
                      </span>
                    </div>
                  )}
                  <div className="p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-6 edit-label text-white/55 mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {pod.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {pod.duration}
                      </span>
                    </div>
                    <h3 className="edit-h3 text-white mb-6">{pod.title}</h3>
                    <p className="edit-body text-white/70 mb-8">{pod.description}</p>
                    <audio controls className="w-full" preload="metadata">
                      <source
                        src="https://vldyfbfjsyomjsckvftg.supabase.co/storage/v1/object/public/podcast/Turn_Custom_Software_Into_Defensible_Assets.m4a"
                        type="audio/mp4"
                      />
                    </audio>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Whitepaper */}
        <section className="edit-section bg-[hsl(var(--surface))] border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02" title={t("blogPod.whitepaperHeading")} />
            <Reveal>
              <div className="border border-white/10 bg-[hsl(var(--bg))] p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-[hsl(var(--accent-edit))]" />
                    <h3 className="edit-h3 text-white">{t("blogPod.whitepaperTitle")}</h3>
                  </div>
                  <p className="edit-body text-white/70 mb-6">{t("blogPod.whitepaperDesc")}</p>
                  <p className="edit-label text-white/55 border-l-2 border-[hsl(var(--accent-edit))] pl-4">
                    {t("blogPod.whitepaperNote")}
                  </p>
                </div>
                <a
                  href="/downloads/Defensible_Platform_Engineering_by_RAVOLUTION.pdf"
                  download
                  className="edit-btn inline-flex items-center gap-3 px-6 py-4 border border-white/30 text-white hover:bg-white hover:text-[hsl(var(--bg))] transition-colors edit-label whitespace-nowrap"
                >
                  <FileDown className="w-4 h-4" />
                  {t("blogPod.whitepaperDownload")}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Articles */}
        <section className="edit-section bg-[hsl(var(--bg))] border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03" title={t("blogPod.articlesHeading")} />
            <Reveal>
              <p className="edit-body text-white/70 max-w-2xl mb-12">
                {t("blogPod.articlesSubtitle")}
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {externalArticles.map((article, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full bg-[hsl(var(--surface))] p-8 md:p-10 hover:bg-[hsl(var(--bg))] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-3xl">{article.icon}</span>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[hsl(var(--accent-edit))] transition-colors" />
                    </div>
                    <h3 className="edit-h3 text-white mb-4">{article.source}</h3>
                    <p className="edit-body text-white/70 mb-6">{article.description}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {article.articles.map((title: string, j: number) => (
                        <li key={j} className="flex items-start gap-3 text-white/75 text-sm">
                          <ArrowRight className="w-3.5 h-3.5 mt-1 text-[hsl(var(--accent-edit))] shrink-0" />
                          <span>{title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 edit-label text-[hsl(var(--accent-edit))] group-hover:gap-4 transition-all">
                      {t("blogPod.readArticles")}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="edit-section bg-[hsl(var(--surface))] border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04" title={t("blogPod.pressContactHeading")} />
            <Reveal>
              <div className="border border-white/10 bg-[hsl(var(--bg))] p-8 md:p-12">
                <p className="edit-body text-white/70 mb-8">{t("blogPod.pressContactDesc")}</p>
                <div className="grid sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <User className="w-5 h-5 text-[hsl(var(--accent-edit))]" />
                    <div>
                      <p className="text-white font-medium">{t("blogPod.pressName")}</p>
                      <p className="edit-label text-white/55">{t("blogPod.pressRole")}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href={`mailto:${t("blogPod.pressEmail")}`} className="flex items-center gap-3 text-white hover:text-[hsl(var(--accent-edit))] transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>{t("blogPod.pressEmail")}</span>
                    </a>
                    <a href={`tel:${t("blogPod.pressPhone")}`} className="flex items-center gap-3 text-white hover:text-[hsl(var(--accent-edit))] transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>{t("blogPod.pressPhone")}</span>
                    </a>
                  </div>
                </div>
                <p className="edit-label text-white/55 border-l-2 border-[hsl(var(--accent-edit))] pl-4">
                  {t("blogPod.pressNote")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="edit-section bg-[hsl(var(--bg))] border-t border-white/10">
          <div className="edit-container">
            <Reveal>
              <div className="border border-white/10 bg-[hsl(var(--surface))] p-12 md:p-20 text-center max-w-4xl mx-auto">
                <BookOpen className="w-8 h-8 text-[hsl(var(--accent-edit))] mx-auto mb-6" />
                <h2 className="edit-h2 text-white mb-6">{t("blogPod.ctaTitle")}</h2>
                <p className="edit-body text-white/70 mb-10 max-w-2xl mx-auto">{t("blogPod.ctaDesc")}</p>
                <a
                  href="mailto:ivan.daza@ravolution.se"
                  className="edit-btn inline-flex items-center gap-3 px-8 py-4 bg-white text-[hsl(var(--bg))] hover:bg-[hsl(var(--accent-edit))] transition-colors edit-label"
                >
                  {t("blogPod.ctaButton")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default BlogPodcast;
