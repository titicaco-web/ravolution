import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";
import { journalArticles } from "@/content/journal";

const JournalPage = () => {
  const lp = useLangPath();

  return (
    <>
      <Helmet>
        <title>Journal — Ravolution AB | Notes on platforms, IP and ventures</title>
        <meta
          name="description"
          content="The Ravolution AB journal: field notes on platform building, patent strategy and the ventures we operate — starting with BizMeet and the end of random networking."
        />
        <link rel="canonical" href="https://ravolution.se/en/journal" />
        <meta property="og:title" content="Journal — Ravolution AB" />
        <meta property="og:description" content="Field notes on platform building, patent strategy and the ventures we operate." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Ravolution Journal",
            url: "https://ravolution.se/en/journal",
            publisher: { "@id": "https://ravolution.se/#organization" },
            blogPost: journalArticles.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              description: a.excerpt,
              datePublished: a.date,
              inLanguage: a.lang,
              url: `https://ravolution.se/en/journal/${a.slug}`,
            })),
          })}
        </script>
      </Helmet>

      <EditorialShell>
        <section className="px-6 md:px-12 pt-32 pb-20 bg-[hsl(var(--bg))] text-white">
          <div className="max-w-[1280px] mx-auto">
            <SectionLabel number="01" title="Journal" />
            <Reveal>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-3xl mt-6">
                Notes from inside the studio.
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mt-6">
                Long-form thinking on the platforms we build, the patents behind them and how
                networks, markets and communities actually create value.
              </p>
            </Reveal>

            <div className="mt-16 border-t border-white/10">
              {journalArticles.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.05}>
                  <Link
                    to={lp(`/journal/${a.slug}`)}
                    className="group block border-b border-white/10 py-10 md:py-12"
                  >
                    <div className="grid md:grid-cols-[7rem_1fr_auto] gap-4 md:gap-10 items-start">
                      <span className="edit-label text-gold">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <div className="edit-label text-white/40 mb-3">
                          {a.kicker} · {a.date} · {a.readingTime}
                        </div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight group-hover:text-gold transition-colors">
                          {a.title}
                        </h2>
                        <p className="text-white/60 leading-relaxed max-w-2xl mt-4">{a.excerpt}</p>
                      </div>
                      <span className="edit-label text-white/50 group-hover:text-gold transition-colors whitespace-nowrap">
                        Read →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default JournalPage;
