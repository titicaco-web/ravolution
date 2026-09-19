import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const NAVY = "#0F2747";
const INK = "#081426";
const BONE = "#F7F5F0";
const GOLD = "#B08D57";
const GOLD_DARK = "#7C633D";

const mono = "font-mono text-[11px] uppercase tracking-[0.18em]";
const display = "font-['IBM_Plex_Sans',_sans-serif] font-[600] tracking-[-0.01em]";
const body = "font-['Inter',_sans-serif]";

const PILLARS = [
  { n: "01", t: "Tech build", d: "We engineer and ship the product — architecture, code, release. Not advice about it." },
  { n: "02", t: "Brand & identity", d: "Positioning, naming and a design system the product can grow inside." },
  { n: "03", t: "Sales & go-to-market", d: "Pricing, channels and the first paying customers." },
  { n: "04", t: "Concept evolution", d: "Refining the idea to meet where the market is going, not only where it is." },
  { n: "05", t: "Capital & IP", d: "Angel investment plus patent strategy — 27 patents and 369 claims of our own." },
];

const GAPS = [
  { t: "Usability", d: "The technology works, but nobody outside the team can use it." },
  { t: "Brand", d: "No name, no story, no reason for anyone to trust it." },
  { t: "Go-to-market", d: "No pricing, no channel, no first ten customers." },
  { t: "Capital", d: "No runway to fix the three above before the idea goes cold." },
];

const PORTFOLIO = [
  "Singuistic", "iApply", "VoiceProtector", "XportMatch", "CarbonX",
  "TOXINSIDE", "BizMeet", "AIMagnifica", "CommunicaringSchool",
];

const LOOK_FOR = [
  "Early stage — idea, prototype or first users.",
  "Real or defensible technology, not a wrapper.",
  "A founder who wants a building partner, not only money.",
  "A problem worth a decade of work.",
];

const FAQS = [
  {
    q: "What does Ravolution offer startups?",
    a: "Ravolution partners with early-stage founders by building the product, brand and go-to-market strategy, refining the original concept for future demand, and investing capital. It is paid in cash and equity rather than fees.",
  },
  {
    q: "Does Ravolution invest cash or only services?",
    a: "Both. Ravolution invests capital as an angel investor and also contributes engineering, brand and sales strategy, taking equity alongside cash.",
  },
  {
    q: "What stage of startup does Ravolution partner with?",
    a: "Primarily early-stage deep-tech companies with real or defensible technology that need help turning it into a usable, branded, market-ready product.",
  },
  {
    q: "What does Ravolution take in return?",
    a: "A combination of cash and equity, agreed case by case and documented under Swedish law. Founders keep clear majority control.",
  },
  {
    q: "Which sectors does Ravolution focus on?",
    a: "Language and education, voice and security, trade and export, climate and materials, and health and prevention — the sectors where our own systems and patents already run.",
  },
  {
    q: "How do I apply to partner with Ravolution?",
    a: "Submit your company and pitch deck at https://ravolution.se/en/apply. Ivan Daza reviews every application personally and replies with honest feedback.",
  },
];

const PartnerPage = () => {
  const lp = useLangPath();

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ravolution AB",
    legalName: "Ravolution AB",
    identifier: "556709-7547",
    url: "https://ravolution.se/en",
    email: "ivan.daza@ravolution.se",
    founder: { "@type": "Person", name: "Ivan Daza" },
    description:
      "Swedish invention company and angel investor that partners with early-stage deep-tech startups by building product, brand and go-to-market, and investing capital, in exchange for cash and equity.",
    areaServed: "Worldwide",
    address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
    sameAs: [
      "https://www.linkedin.com/company/ravolution",
      "https://www.allabolag.se/5567097547",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Venture partnership for early-stage startups",
        serviceType:
          "Tech build, branding, go-to-market, concept refinement and capital in exchange for cash and equity",
        provider: { "@type": "Organization", name: "Ravolution AB" },
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Partner with Ravolution AB — We Build, Brand &amp; Fund Early-Stage Startups</title>
        <meta
          name="description"
          content="Ravolution partners with early-stage founders — building product, brand and go-to-market, and investing cash + equity. Apply or send your deck."
        />
        <link rel="canonical" href="https://ravolution.se/en/partner" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/partner" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/partner" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/partner" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en/partner" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/partner" />
        <meta property="og:title" content="Partner with Ravolution AB — We Build, Brand & Fund Early-Stage Startups" />
        <meta
          property="og:description"
          content="We don't just back startups. We build them — product, brand, go-to-market and capital, paid in cash and equity."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partner with Ravolution AB" />
        <meta
          name="twitter:description"
          content="Product, brand, go-to-market and capital for early-stage deep tech. Apply or send your deck."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <EditorialShell>
        <main className={body} style={{ background: BONE, color: INK }}>
          {/* HERO */}
          <section className="pt-32 pb-20 px-6 md:px-12" style={{ background: INK, color: BONE }}>
            <div className="max-w-6xl mx-auto">
              <p className={`${mono} mb-8`} style={{ color: GOLD }}>
                <span className="inline-block w-10 h-px align-middle mr-3" style={{ background: GOLD }} />
                Partnership — for founders
              </p>
              <h1 className={`${display} text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl`}>
                Great tech isn't enough. We build the rest.
              </h1>
              <p className="mt-8 text-lg md:text-xl max-w-[640px] leading-relaxed" style={{ color: `${BONE}CC` }}>
                Ravolution partners with early-stage founders — investing capital and building the
                product, brand, go-to-market and next-generation concept alongside you. We are paid
                in cash and equity, so our risk is your risk.
              </p>
              <div className="mt-10 flex flex-wrap gap-6 items-center">
                <Link
                  to={lp("/apply")}
                  className="inline-block px-8 py-4 text-sm md:text-base transition-colors"
                  style={{ background: GOLD, color: INK }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = BONE)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
                >
                  Apply for partnership
                </Link>
                <Link to={lp("/apply")} className={`${mono} border-b`} style={{ color: GOLD, borderColor: GOLD }}>
                  Send us your deck →
                </Link>
              </div>
            </div>
          </section>

          {/* THE GAP */}
          <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className={`${display} text-3xl md:text-5xl max-w-3xl`} style={{ color: INK }}>
                Most deep tech dies with brilliant code and no market.
              </h2>
              <p className="mt-6 max-w-[680px] text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
                The pattern repeats: an excellent engine with no car around it. Four gaps kill good
                technology before anyone gets to use it. Ravolution exists to close all four in the
                same engagement.
              </p>
              <div className="grid md:grid-cols-4 gap-8 mt-14">
                {GAPS.map((g) => (
                  <div key={g.t} className="border-t pt-6" style={{ borderColor: `${INK}22` }}>
                    <h3 className={`${display} text-xl mb-3`} style={{ color: INK }}>{g.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: `${INK}B3` }}>{g.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PILLARS */}
          <section className="py-24 px-6 md:px-12" style={{ background: NAVY, color: BONE }}>
            <div className="max-w-6xl mx-auto">
              <p className={`${mono} mb-6`} style={{ color: GOLD }}>What we bring</p>
              <h2 className={`${display} text-3xl md:text-5xl mb-16 max-w-3xl`}>
                Five things a founder cannot buy separately.
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PILLARS.map((p) => (
                  <div key={p.n} className="border-t pt-6" style={{ borderColor: GOLD }}>
                    <p className={mono} style={{ color: GOLD }}>{p.n}</p>
                    <h3 className={`${display} text-2xl mt-4 mb-3`}>{p.t}</h3>
                    <p className="text-base leading-relaxed" style={{ color: `${BONE}CC` }}>{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
              <h2 className={`${display} text-3xl md:text-5xl`} style={{ color: INK }}>
                We invest with brainpower, build, and cash.
              </h2>
              <div>
                <p className="text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
                  We contribute engineering, brand and strategy — and we invest capital. In return we
                  take cash and equity. We partner deeply with a few companies rather than lightly
                  with many, because building is hands-on.
                </p>
                <p className={`${display} text-2xl md:text-3xl mt-10 leading-snug`} style={{ color: GOLD_DARK }}>
                  27 patents · 369 claims.
                </p>
                <p className={`${mono} mt-3`} style={{ color: `${INK}88` }}>
                  How seriously we treat defensibility
                </p>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  {PORTFOLIO.map((n) => (
                    <span key={n} className={mono} style={{ color: `${INK}99` }}>{n}</span>
                  ))}
                </div>
                <p className="text-sm mt-4" style={{ color: `${INK}88` }}>
                  Platforms we've built or backed.{" "}
                  <Link to={lp("/portfolio")} className="border-b" style={{ borderColor: GOLD_DARK, color: GOLD_DARK }}>
                    See the full Ravolution portfolio
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* WHO WE LOOK FOR */}
          <section className="py-24 px-6 md:px-12" style={{ background: "#EEECE6" }}>
            <div className="max-w-6xl mx-auto">
              <h2 className={`${display} text-3xl md:text-5xl mb-12`} style={{ color: INK }}>
                Who we look for
              </h2>
              <ul className="grid md:grid-cols-2 gap-6 text-lg">
                {LOOK_FOR.map((l) => (
                  <li key={l} className="flex gap-4">
                    <span className="inline-block w-3 h-3 mt-2 flex-shrink-0" style={{ background: GOLD_DARK }} />
                    <span style={{ color: `${INK}DD` }}>{l}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-[680px] leading-relaxed" style={{ color: `${INK}B3` }}>
                We are selective, and we say no often. Even when the answer is no, you get a
                specific, honest read on your company.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className={`${display} text-3xl md:text-5xl mb-12`} style={{ color: INK }}>
                Frequently asked questions
              </h2>
              <div className="divide-y" style={{ borderColor: `${INK}22` }}>
                {FAQS.map((f) => (
                  <article key={f.q} className="py-4" style={{ borderColor: `${INK}22` }}>
                    <details className="group">
                      <summary className="cursor-pointer list-none flex justify-between items-center py-3">
                        <h3 className={`${display} text-lg md:text-xl pr-6`} style={{ color: INK }}>{f.q}</h3>
                        <span className="text-2xl transition-transform group-open:rotate-45" style={{ color: GOLD_DARK }}>
                          +
                        </span>
                      </summary>
                      <p className="pb-4 pr-10 leading-relaxed" style={{ color: `${INK}DD` }}>{f.a}</p>
                    </details>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CLOSING CTA */}
          <section className="py-24 px-6 md:px-12" style={{ background: INK, color: BONE }}>
            <div className="max-w-6xl mx-auto">
              <h2 className={`${display} text-3xl md:text-5xl max-w-3xl`}>
                Think we're a fit? Apply in 5 minutes — or just send your deck.
              </h2>
              <div className="mt-10 flex flex-wrap gap-6 items-center">
                <Link
                  to={lp("/apply")}
                  className="inline-block px-8 py-4"
                  style={{ background: GOLD, color: INK }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = BONE)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
                >
                  Apply for partnership
                </Link>
                <a href="mailto:ivan.daza@ravolution.se" className={`${mono} border-b`} style={{ color: GOLD, borderColor: GOLD }}>
                  ivan.daza@ravolution.se
                </a>
              </div>
              <p className={`${mono} mt-14`} style={{ color: `${BONE}77` }}>
                Ravolution AB · org. nr 556709-7547 · Stockholm, Sweden
              </p>
            </div>
          </section>
        </main>
      </EditorialShell>
    </>
  );
};

export default PartnerPage;
