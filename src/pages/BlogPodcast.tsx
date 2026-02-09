import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { Headphones, BookOpen, ExternalLink, Mic, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      color: "from-primary to-primary-light",
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
      color: "from-accent to-accent-light",
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
      color: "from-gold to-gold-light",
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
      color: "from-primary-light to-accent",
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
            "publisher": {
              "@type": "Organization",
              "name": "Ravolution AB",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="gradient-hero text-primary-foreground pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Mic className="w-4 h-4" />
              {t("blogPod.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up">
              {t("blogPod.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              {t("blogPod.heroSubtitle")}
            </p>
          </div>
        </section>

        <div className="bg-dot-pattern">
          {/* Podcast Section */}
          <section className="section-padding">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {t("blogPod.podcastsHeading")}
                  </h2>
                </div>
              </ScrollAnimateWrapper>

              {podcasts.map((pod, i) => (
                <ScrollAnimateWrapper key={i} delay={0.1}>
                  <article className="card-elevated p-0 overflow-hidden mb-8">
                    {pod.featured && (
                      <div className="gradient-accent px-6 py-2 flex items-center gap-2">
                        <span className="text-sm font-semibold text-accent-foreground uppercase tracking-wider">
                          🚀 {t("blogPod.featured")}
                        </span>
                      </div>
                    )}
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" /> {pod.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" /> {pod.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-snug">
                        {pod.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-none">
                        {pod.description}
                      </p>
                      <div className="mt-6">
                        <audio
                          controls
                          className="w-full"
                          preload="metadata"
                        >
                          <source
                            src="https://vldyfbfjsyomjsckvftg.supabase.co/storage/v1/object/public/podcast/Turn_Custom_Software_Into_Defensible_Assets.m4a"
                            type="audio/mp4"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    </div>
                  </article>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </section>

          {/* Blog Articles from Ravolution Sites */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {t("blogPod.articlesHeading")}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-10 text-lg max-w-2xl">
                  {t("blogPod.articlesSubtitle")}
                </p>
              </ScrollAnimateWrapper>

              <div className="grid md:grid-cols-2 gap-6">
                {externalArticles.map((article, i) => (
                  <ScrollAnimateWrapper key={i} delay={i * 0.1}>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group card-interactive flex flex-col h-full p-0 overflow-hidden"
                    >
                      <div className={`bg-gradient-to-r ${article.color} px-6 py-4`}>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl">{article.icon}</span>
                          <ExternalLink className="w-4 h-4 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-primary-foreground mt-2">
                          {article.source}
                        </h3>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {article.description}
                        </p>
                        <ul className="space-y-2 mb-4 flex-1">
                          {article.articles.map((title: string, j: number) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                              <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                              <span>{title}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:text-accent-light transition-colors">
                          {t("blogPod.readArticles")}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  </ScrollAnimateWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <ScrollAnimateWrapper>
            <section className="section-padding pt-0">
              <div className="max-w-3xl mx-auto text-center">
                <div className="card-elevated p-10 md:p-14 bg-gradient-to-br from-card to-secondary">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {t("blogPod.ctaTitle")}
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {t("blogPod.ctaDesc")}
                  </p>
                  <Button className="bg-accent hover:bg-accent-light text-accent-foreground" asChild>
                    <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                      {t("blogPod.ctaButton")}
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </ScrollAnimateWrapper>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogPodcast;
