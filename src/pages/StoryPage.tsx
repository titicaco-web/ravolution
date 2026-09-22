import { useEffect, useRef, useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import { EditorialShell, Reveal } from "@/components/editorial/EditorialLayout";
import { Button } from "@/components/ui/button";
import { useLangPath } from "@/hooks/use-lang-path";
import { Maximize2, X } from "lucide-react";
import museumAsset from "@/assets/ivan-daza-ekonomiska-museet-2014.png.asset.json";
import gasellAsset from "@/assets/blatteformedlingen-di-gasell-2012.png.asset.json";
import sagerskaAsset from "@/assets/ivan-daza-sagerska-palatset.png.asset.json";
import littorinAsset from "@/assets/ivan-daza-sven-otto-littorin.png.asset.json";

type EntryImage = {
  src: string;
  alt: string;
  caption?: string;
  hoverText?: string;
  fit?: "cover" | "contain";
  thumbnail?: "small" | "medium";
  expandable?: boolean;
};

type Entry = {
  year: string;
  sortYear: number;
  kicker: string;
  title: string;
  body: string;
  highlight?: boolean;
  images?: EntryImage[];
  video?: { src: string; title: string; caption?: string };
  articles?: { label: string; href: string }[];
};

const entries: Entry[] = [
  {
    year: "1998",
    sortYear: 1998,
    kicker: "The first invention",
    title: "The Gyrocraft",
    body: "A novel aircraft concept, designed and published in the Chronicles of Titicaco — the first of a lifetime of inventions.",
  },
  {
    year: "1998",
    sortYear: 1998,
    kicker: "The enterprise, made social",
    title: "A social network for the enterprise",
    body: "A social intranet built for Ericsson — profiles, feeds and internal networking — six years before Facebook launched, won in competition with Capgemini.",
  },
  {
    year: "1999",
    sortYear: 1999,
    kicker: "Targeted email at scale",
    title: "Ad2You",
    body: "An email-marketing platform. Within two months, CNN proposed a revenue-share to run targeted campaigns across its verticals — tech, business and more — and Ad2You consistently outperformed competitors on open and conversion rates, drawing a partnership offer from the portal Passagen.",
  },
  {
    year: "1999",
    sortYear: 1999,
    kicker: "Calling it early",
    title: "Talking over broadband",
    body: "An article in the magazine Vision predicts that people will soon talk to one another over broadband and that the telcos will lose their long-distance revenue — describing, in effect, Skype four years before it launched, and six months before Telia's own Östen Mäkitalo made the same forecast.",
  },
  {
    year: "2002",
    sortYear: 2002,
    kicker: "Democracy, digitised",
    title: "Votia & the rådslag",
    body: "An e-democracy platform letting Swedish municipalities run rådslag — citizen consultations — and lowering the barrier to reach the participation threshold needed to put a question to the public.",
  },
  {
    year: "2003",
    sortYear: 2003,
    kicker: "Education for the world",
    title: "Titicaco Communicaring School™",
    body: "Nominated best Swedish initiative in the United Nations World Summit Awards in 2003. Titicaco Communicaring School™ shall be part of shaping the future through education and: (1) shall deliver education for basic knowledge, problem solving, sustainable development, entrepreneurship and leadership. (2) Promote understanding, tolerance and friendship among all nations. (3) Use an educational environment consisting of eLearning, eTwinning, eCommunity, eDemocracy and eAdministration tools.",
    articles: [
      {
        label: "Visit communicaringschool.com",
        href: "https://communicaringschool.com/",
      },
    ],
  },
  {
    year: "2005",
    sortYear: 2005,
    kicker: "After the wave",
    title: "Phi Phi Island Foundation",
    body: "Head of Operations after the tsunami. Built Titicaco Communicaring School™ — the internet school from 2003 — for children in a survival camp in Krabi, and stood up microloan operations — interviewing around 100 families under Johan Staël von Holstein's foundation.",
    video: {
      src: "https://www.youtube.com/embed/W8zL0IV1K3k?si=5lUHyYLDBZYfEWcL",
      title: "Titicaco Communicaring School i Krabi 2005",
      caption: "Titicaco Communicaring School™ · Krabi, Thailand · 2005",
    },
  },
  {
    year: "2005–10",
    sortYear: 2005,
    kicker: "A fairer labour market",
    title: "Blatteförmedlingen",
    body: "Founded to widen diversity in the Swedish labour market — showing large employers and municipalities why a workforce that mirrors the population is one that can reach and serve it. Ivan also authored Handbok för invandrade entreprenörer, a handbook for immigrant entrepreneurs.",
    images: [
      {
        src: sagerskaAsset.url,
        alt: "Ivan Daza and fellow entrepreneurs with Prime Minister Fredrik Reinfeldt at Sagerska Palace",
        caption: "Statsministerbesök på Sagerska Palatset",
        hoverText:
          "Som VD och grundare av Blatteförmedlingen blev jag med kollega inbjuden av dåvarande statsminister Fredrik Reinfeldt till Sagerska palatset under Första Advent, tillsammans med en rad andra entreprenörer. Sagerska palatset är Sveriges statsministers officiella residens, beläget i centrala Stockholm.",
      },
      {
        src: littorinAsset.url,
        alt: "Ivan Daza with former labour-market minister Sven Otto Littorin at Blatteförmedlingen",
        caption: "Uppmärksammad i Uppdrag arbete",
        hoverText:
          "Även uppmärksammad i dåvarande arbetsmarknadsminister Sven Otto Littorins bok: Uppdrag arbete.",
      },
    ],
  },
  {
    year: "2008–2015",
    sortYear: 2008,
    kicker: "Back to work",
    title: "Jobbfabriken",
    body: "Built to return the long-term unemployed to employment. In year one it placed roughly 10% back into work against an industry average near 2%; by year three, close to 20%.",
  },
  {
    year: "2009",
    sortYear: 2009,
    kicker: "Ahead of the curve",
    title: "Creddly",
    body: "A shopping app launched in 2009 that competed with Silicon Valley's Wish in its early days — before Wish rode the same model to global scale.",
  },
  {
    year: "2012",
    sortYear: 2012,
    kicker: "Recognised",
    title: "DI Gasell",
    body: "Blatteförmedlingen is named a Gasell company by Dagens Industri — the second fastest-growing company in the Stockholm region, built on 450% revenue growth over three years and partnerships with 12 public agencies and 200+ employers. Former labour-market minister Sven Otto Littorin credited it with showing \u201Cthe power of diversity in Swedish business.\u201D",
    highlight: true,
    images: [
      {
        src: gasellAsset.url,
        alt: "Dagens Industri clipping listing Blatteförmedlingen among Stockholm's 2012 Gasell companies",
        caption: "Dagens Industri · Gasellföretag 2012",
        fit: "contain",
        thumbnail: "small",
        expandable: true,
        hoverText:
          "Gasellföretag 2012: Blatteförmedlingen\n\nSom VD för Blatteförmedlingen ledde Ivan Daza bolaget till att bli utsett till Gasellföretag av Dagens Industri 2012 – en utmärkelse för exceptionell tillväxt och hållbarhet.",
      },
    ],
  },
  {
    year: "2014",
    sortYear: 2014,
    kicker: "Into the museum",
    title: "A place in entrepreneurial history",
    body: "Blatteförmedlingen and Ivan's work for inclusion are featured in the Economy Museum's (Kungliga Myntkabinettet) exhibition Entreprenörskapande, shown 2014–2017 — the museum's profile of the entrepreneurs who shaped Swedish society, alongside Ingvar Kamprad and Jan Stenbeck.",
    highlight: true,
    images: [
      {
        src: museumAsset.url,
        alt: "Ivan Daza featured in the Economy Museum exhibition about entrepreneurship",
        caption: "Ekonomiska museet · Utställning om entreprenörskap · 2014–2017",
        thumbnail: "medium",
        expandable: true,
      },
    ],
    articles: [
      {
        label: "View the Economy Museum exhibition",
        href: "https://ekonomiskamuseet.se/utstallningar/tidigare-utstallningar/utstallning-om-entreprenorskap/",
      },
    ],
  },
  {
    year: "2015",
    sortYear: 2015,
    kicker: "The reversal",
    title: "A retroactive tax reassessment",
    body: "A backdated tax reassessment forces Jobbfabriken into bankruptcy — a setback that would sharpen, not stop, the next decade of building.",
  },
  {
    year: "2016",
    sortYear: 2016,
    kicker: "Built, then sold",
    title: "Give",
    body: "A gifting app, founded and acquired by Retain24 in 2017 — later rolled into Awardit. The first clean exit.",
  },
  {
    year: "2017",
    sortYear: 2017,
    kicker: "Field sales, systematised",
    title: "PikpCash",
    body: "A complete door-to-door sales platform — the full logic and architecture of a field-sales operating system, presented in 2017, bearing strong similarities to Gritch, launched nearly a decade later.",
  },
  {
    year: "2017–22",
    sortYear: 2018,
    kicker: "The sales years",
    title: "Records across industries",
    body: "Sales leadership across gaming, retail, media, DOOH and native advertising — repeatedly breaking company sales records, and learning what actually moves markets.",
  },
  {
    year: "2022",
    sortYear: 2022,
    kicker: "Placing the builders",
    title: "TakeReference",
    body: "A recruitment firm placing sales leaders, sales managers and top management into Swedish tech and sales companies.",
  },
  {
    year: "2025",
    sortYear: 2025,
    kicker: "The turn",
    title: "Ravolution becomes an invention company",
    body: "The holding company is rebuilt with one job: invent platforms, file the patents, build the brands and strategy — and invest, taking payment in cash and equity rather than fees.",
    highlight: true,
  },
];

const recognition = [
  {
    source: "Ekonomiska museet",
    title: "Immortalised in the museum",
    body: "Featured in the Economy Museum's exhibition Entreprenörskapande (2014–2017), among the entrepreneurs who shaped Swedish society — alongside Ingvar Kamprad and Jan Stenbeck.",
  },
  {
    source: "Dagens Industri",
    title: "DI Gasell 2012",
    body: "Blatteförmedlingen ranked the second fastest-growing company in the Stockholm region, on 450% revenue growth over three years.",
  },
  {
    source: "Regeringen",
    title: "The Prime Minister's residence",
    body: "Invited by Prime Minister Fredrik Reinfeldt to Sagerska Palatset, the PM's official residence, among a select group of entrepreneurs.",
  },
  {
    source: "Sven Otto Littorin",
    title: "In the minister's book",
    body: "Ivan's work is featured in former labour-market minister Sven Otto Littorin's book Uppdrag arbete.",
  },
];

const studioProjects = [
  { name: "Singuistic", sector: "Language", body: "Spotify-synced language learning that turns any song into a live lesson, one line at a time." },
  { name: "iApply", sector: "Work", body: "Candidate-first recruitment platform with AI matching between people and roles." },
  { name: "VoiceProtector", sector: "Trust & security", body: "Voice authentication and anti-deepfake architecture for a world of synthetic speech." },
  { name: "XportMatch", sector: "Global trade", body: "AI-native export infrastructure for market prioritisation and buyer discovery." },
  { name: "CarbonX", sector: "Climate", body: "Climate-technology venture building infrastructure for a lower-carbon economy." },
  { name: "TOXINSIDE", sector: "Health", body: "Consumer ingredient-transparency app that reveals what's really inside products." },
  { name: "BizMeet", sector: "Community OS", body: "White-label community operating system for verified member networks and events." },
  { name: "AI Magnifica", sector: "Governance", body: "Compliance instrument helping organisations meet the EU AI Act." },
  { name: "UCK", sector: "Consumer", body: "Global consumer complaint and resolution platform." },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivan Daza",
  alternateName: "Ivan Davor Luksic Daza",
  jobTitle: "Tech inventor, Founder",
  description:
    "Swedish tech inventor and founder of Ravolution AB. Twenty-seven years of inventions and platforms, from a 1998 aircraft concept to a patented platform portfolio.",
  nationality: "Swedish",
  worksFor: {
    "@type": "Organization",
    name: "Ravolution AB",
    url: "https://ravolution.se",
    identifier: "556709-7547",
  },
  url: "https://ravolution.se/en/story",
  sameAs: ["https://www.linkedin.com/company/ravolution"],
  award: [
    "Nominated best Swedish initiative — United Nations World Summit Awards 2003 (Titicaco Communicaring School™)",
    "DI Gasell 2012 — second fastest-growing company in the Stockholm region (Blatteförmedlingen)",
    "Featured in the Economy Museum exhibition Entreprenörskapande (2014–2017)",
  ],
};

const timelineJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ivan Daza — timeline of inventions and ventures, 1998–2026",
  itemListElement: entries.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: `${e.year} — ${e.title}`,
      description: e.body,
      ...(e.images?.[0] ? { image: `https://ravolution.se${e.images[0].src}` } : {}),
      ...(e.articles?.[0] ? { url: e.articles[0].href } : {}),
    },
  })),
};

const StoryPage = () => {
  const lp = useLangPath();
  const railRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  const [eraYear, setEraYear] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<EntryImage | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const rail = railRef.current;
      if (!rail) return;
      const rect = rail.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const progress = (mid - rect.top) / rect.height;
      const clamped = Math.max(0, Math.min(1, progress));
      setFill(clamped);

      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-year]"));
      let current: string | null = null;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top < mid) current = node.dataset["year"] ?? null;
      }
      setEraYear(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!expandedImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedImage(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expandedImage]);

  return (
    <>
      <Helmet>
        <title>Ivan Daza — Twenty-Seven Years of Inventions | Ravolution AB</title>
        <meta
          name="description"
          content="The timeline of Swedish tech inventor Ivan Daza: from a 1998 aircraft patent and a pre-Facebook enterprise social network to Ravolution AB's patented platform portfolio."
        />
        <link rel="canonical" href="https://ravolution.se/en/story" />
        <meta property="og:title" content="Ivan Daza — Twenty-Seven Years of Inventions | Ravolution AB" />
        <meta
          property="og:description"
          content="From a 1998 aircraft patent to an invention company shipping patented platforms today — the story of Ivan Daza and Ravolution AB."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ravolution.se/en/story" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://ravolution.se/og-image.jpg" />
        <meta name="twitter:image" content="https://ravolution.se/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(timelineJsonLd)}</script>
      </Helmet>

      {/* scroll progress */}
      <div
        aria-hidden
        className="fixed top-0 left-0 h-[2px] z-[60] bg-gold"
        style={{ width: `${fill * 100}%` }}
      />
      {eraYear && (
        <div
          aria-hidden
          className="hidden md:block fixed top-24 right-6 z-40 font-mono text-xs tracking-[0.2em] text-gold/80 border border-white/10 px-3 py-1.5 bg-primary/70 backdrop-blur"
        >
          {eraYear}
        </div>
      )}

      <EditorialShell>
        {/* Hero */}
        <header className="relative pt-40 pb-24 px-6 md:px-12">
          <div className="edit-container">
            <Reveal>
              <span className="edit-label text-gold">Ravolution / Story</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="edit-display text-white mt-6 max-w-4xl">
                TWENTY-SEVEN YEARS OF BUILDING WHAT DIDN'T EXIST YET.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="edit-body text-white/60 mt-8 max-w-2xl">
                From an aircraft patent in 1998 to an invention company shipping patented platforms
                today — the working life of inventor Ivan Daza, and the story behind Ravolution AB.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="font-mono text-xs tracking-[0.2em] text-white/45 mt-10 uppercase">
                1998 first invention → 2026 the studio era
              </p>
            </Reveal>
          </div>
        </header>

        {/* Timeline */}
        <section className="px-6 md:px-12 pb-24">
          <div className="edit-container relative" ref={railRef}>
            <div aria-hidden className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-white/10">
              <div className="w-px bg-gold" style={{ height: `${fill * 100}%` }} />
            </div>

            <ol className="space-y-20 md:space-y-28">
              {entries.map((e) => (
                <li key={`${e.year}-${e.title}`} data-year={e.year} className="relative pl-12 md:pl-20">
                  <span
                    aria-hidden
                    className="absolute left-0 md:left-1 top-3 w-[10px] h-[10px] rounded-full border border-gold/60 bg-primary"
                  />
                  <Reveal>
                    <div>
                      <time className="block font-display font-bold text-4xl md:text-6xl text-gold leading-none">
                        {e.year}
                      </time>
                      <span className="edit-label text-white/45 mt-3 block">{e.kicker}</span>
                      <h2
                        className={`mt-4 text-2xl md:text-4xl font-display font-bold uppercase tracking-tight leading-tight ${
                          e.highlight ? "text-gold" : "text-white"
                        }`}
                      >
                        {e.title}
                      </h2>
                      <p className="edit-body text-white/60 mt-4 max-w-2xl">{e.body}</p>

                      {e.images && e.images.length > 0 && (
                        <div className={`mt-7 grid max-w-4xl items-start gap-5 ${e.images.length > 1 ? "md:grid-cols-2" : ""}`}>
                          {e.images.map((image) => (
                            <figure
                              key={image.src}
                              className={`group w-full ${
                                image.thumbnail === "small"
                                  ? "max-w-[230px]"
                                  : image.thumbnail === "medium"
                                    ? "max-w-md"
                                    : ""
                              }`}
                            >
                              <Button
                                type="button"
                                variant="ghost"
                                disabled={!image.expandable}
                                aria-label={image.expandable ? `Enlarge ${image.alt}` : undefined}
                                onClick={() => image.expandable && setExpandedImage(image)}
                                className="relative h-auto w-full overflow-hidden rounded-none border border-white/10 bg-transparent p-0 disabled:pointer-events-none disabled:opacity-100"
                              >
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  title={image.hoverText}
                                  loading="lazy"
                                  className={`w-full transition duration-500 group-hover:scale-[1.015] ${
                                    image.fit === "contain"
                                      ? "h-auto object-contain"
                                      : "aspect-[16/10] object-cover"
                                  }`}
                                />
                                {image.hoverText && (
                                  <div className="pointer-events-none absolute inset-0 flex items-end bg-primary/0 p-5 opacity-0 transition duration-300 group-hover:bg-primary/90 group-hover:opacity-100 group-focus-within:bg-primary/90 group-focus-within:opacity-100">
                                    <p className="whitespace-pre-line text-sm leading-relaxed text-white">
                                      {image.hoverText}
                                    </p>
                                  </div>
                                )}
                                {image.expandable && (
                                  <span className="pointer-events-none absolute right-2 top-2 grid size-8 place-items-center bg-primary/85 text-white opacity-80 transition group-hover:opacity-100">
                                    <Maximize2 aria-hidden className="size-4" />
                                  </span>
                                )}
                              </Button>
                              {image.caption && (
                                <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
                                  {image.caption}
                                </figcaption>
                              )}
                            </figure>
                          ))}
                        </div>
                      )}

                      {e.video && (
                        <figure className="mt-7 max-w-3xl">
                          <div className="relative w-full overflow-hidden border border-white/10" style={{ aspectRatio: "16 / 9" }}>
                            <iframe
                              src={e.video.src}
                              title={e.video.title}
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="absolute inset-0 size-full"
                            />
                          </div>
                          {e.video.caption && (
                            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
                              {e.video.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}

                      {e.articles && e.articles.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                          {e.articles.map((a) => (
                            <li key={a.href}>
                              <a
                                href={a.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold hover:text-gold/70 border-b border-gold/30"
                              >
                                {a.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {expandedImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={expandedImage.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4 md:p-10"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative flex max-h-full max-w-5xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
              <img
                src={expandedImage.src}
                alt={expandedImage.alt}
                className="max-h-[82vh] max-w-full object-contain"
              />
              {expandedImage.caption && (
                <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.12em] text-white/60">
                  {expandedImage.caption}
                </p>
              )}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close enlarged image"
                onClick={() => setExpandedImage(null)}
                className="absolute right-0 top-0 rounded-none bg-primary/85 text-white hover:bg-primary hover:text-white"
              >
                <X aria-hidden />
              </Button>
            </div>
          </div>
        )}

        {/* Recognition */}
        <section className="px-6 md:px-12 py-24 border-t border-white/10">
          <div className="edit-container">
            <Reveal>
              <h2 className="edit-heading text-white">RECOGNITION</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="edit-body text-white/60 mt-5 max-w-2xl">
                Two decades of building, seen from the outside — by the press, the state, and a
                national museum.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {recognition.map((r, i) => (
                <Reveal key={r.source} delay={i * 0.06}>
                  <article className="h-full border border-white/10 border-t-2 border-t-gold p-6 bg-white/[0.02]">
                    <span className="edit-label text-gold">{r.source}</span>
                    <h3 className="text-lg font-display font-bold text-white mt-4 leading-snug">
                      {r.title}
                    </h3>
                    <p className="edit-body text-white/60 mt-3 text-sm">{r.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Studio era */}
        <section className="px-6 md:px-12 py-24 border-t border-white/10">
          <div className="edit-container">
            <Reveal>
              <h2 className="edit-display text-white">2025–2026</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="edit-body text-white/60 mt-6 max-w-2xl">
                The invention company era: platforms invented in-house, protected by patents, and
                built with founders and operators who take them to market.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold mt-8 border border-gold/30 inline-block px-4 py-2">
                27 patents · 369 claims
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 mt-12">
              {studioProjects.map((p) => (
                <article key={p.name} className="bg-primary p-6">
                  <h3 className="flex items-center gap-3 text-lg font-display font-bold uppercase tracking-tight text-white">
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {p.name}
                  </h3>
                  <p className="edit-body text-white/60 text-sm mt-3">{p.body}</p>
                  <span className="edit-label text-white/40 mt-4 block">{p.sector}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-24 border-t border-white/10">
          <div className="edit-container">
            <h2 className="edit-heading text-white">THE STUDIO IS OPEN.</h2>
            <p className="edit-body text-white/60 mt-5 max-w-xl">
              If you are building something that should exist, bring it to the people who have been
              doing this for twenty-seven years.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={lp("/partner")}
                className="bg-gold text-[#081426] font-medium px-7 py-3.5 hover:bg-gold/85 transition-colors"
              >
                Partner with Ravolution
              </a>
              <a
                href={lp("/apply")}
                className="border border-white/20 text-white font-medium px-7 py-3.5 hover:border-gold hover:text-gold transition-colors"
              >
                Send your deck
              </a>
            </div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/35 mt-14">
              Ravolution AB · org. nr 556709-7547 · Stockholm, Sweden
            </p>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default StoryPage;
