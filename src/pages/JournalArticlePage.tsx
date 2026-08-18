import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { EditorialShell, Reveal } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";
import { getJournalArticle } from "@/content/journal";

const JournalArticlePage = () => {
  const { slug } = useParams();
  const lp = useLangPath();
  const article = getJournalArticle(slug);

  if (!article) {
    return (
      <EditorialShell>
        <section className="px-6 md:px-12 pt-32 pb-32 bg-[hsl(var(--bg))] text-white">
          <div className="max-w-[720px] mx-auto">
            <h1 className="font-display font-bold text-3xl md:text-4xl">Article not found</h1>
            <Link to={lp("/journal")} className="edit-label text-gold mt-6 inline-block">
              ← Back to journal
            </Link>
          </div>
        </section>
      </EditorialShell>
    );
  }

  const url = `https://ravolution.se/en/journal/${article.slug}`;

  return (
    <>
      <Helmet>
        <html lang={article.lang} />
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.metaDescription,
            datePublished: article.date,
            dateModified: article.date,
            inLanguage: article.lang,
            mainEntityOfPage: url,
            author: { "@type": "Person", name: "Ivan Daza" },
            publisher: { "@id": "https://ravolution.se/#organization" },
            about: { "@type": "SoftwareApplication", name: "BizMeet" },
          })}
        </script>
      </Helmet>

      <EditorialShell>
        <article className="px-6 md:px-12 pt-32 pb-24 bg-[hsl(var(--bg))] text-white">
          <div className="max-w-[720px] mx-auto">
            <Link to={lp("/journal")} className="edit-label text-white/50 hover:text-gold transition-colors">
              ← Journal
            </Link>

            <Reveal>
              <div className="edit-label text-gold mt-10 mb-5">
                {article.kicker} · {article.date} · {article.readingTime}
              </div>
              <h1 className="font-display font-bold text-3xl md:text-5xl leading-[1.08]">
                {article.title}
              </h1>
            </Reveal>

            <div className="mt-12 border-t border-white/10 pt-12 space-y-7">
              {article.body.map((b, i) => {
                if (b.type === "h2")
                  return (
                    <h2
                      key={i}
                      className="font-display font-bold text-xl md:text-2xl pt-6 text-white"
                    >
                      {b.text}
                    </h2>
                  );
                if (b.type === "lead")
                  return (
                    <p key={i} className="text-xl md:text-2xl leading-relaxed text-white/90">
                      {b.text}
                    </p>
                  );
                if (b.type === "quote")
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-gold pl-6 font-display text-xl md:text-2xl leading-snug text-white"
                    >
                      {b.text}
                    </blockquote>
                  );
                return (
                  <p key={i} className="text-white/70 text-lg leading-relaxed">
                    {b.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-16 border-t border-white/10 pt-10 flex flex-wrap gap-4">
              <a
                href="mailto:ivan.daza@ravolution.se"
                className="edit-label bg-gold text-[#0F2747] px-6 py-3 hover:opacity-90 transition-opacity"
              >
                Kontakta oss
              </a>
              <Link
                to={lp("/bizmeet")}
                className="edit-label border border-white/25 text-white px-6 py-3 hover:border-gold hover:text-gold transition-colors"
              >
                Läs mer om BizMeet
              </Link>
            </div>
          </div>
        </article>
      </EditorialShell>
    </>
  );
};

export default JournalArticlePage;
