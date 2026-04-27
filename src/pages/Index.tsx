import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import {
  EditorialShell,
  Reveal,
  CountUp,
  SectionLabel,
  MarqueeStrip,
} from "@/components/editorial/EditorialLayout";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import InvestorPortfolioMarquee from "@/components/InvestorPortfolioMarquee";

const Index = () => {
  const { t } = useLanguage();
  const lp = useLangPath();
  const [time, setTime] = useState("");
  const [openCard, setOpenCard] = useState<string | null>(null);

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit", minute: "2-digit", timeZone: "Europe/Stockholm",
        }) + " CET"
      );
    };
    upd();
    const id = setInterval(upd, 60000);
    return () => clearInterval(id);
  }, []);

  /* Pillars: Build-for-Equity, Angel, Venture Studio Operations */
  const pillars = [
    {
      n: "01",
      title: "Build-for-Equity",
      desc: "We build defensible platforms for select founders in exchange for meaningful equity. No invoices, no markup — partnership.",
      href: lp("/build-for-equity"),
    },
    {
      n: "02",
      title: "Angel Investment",
      desc: "Direct early-stage capital paired with patent strategy, technical co-founder support, and operator-level execution.",
      href: lp("/angel-investor"),
    },
    {
      n: "03",
      title: "Venture Studio Operations",
      desc: "Rosetta Livingstone, CommunicaringSchool, xPortMatch, VoiceProtector, iApply — operated, scaled, licensed.",
      href: lp("/services"),
    },
  ];

  /* Stats */
  const stats = [
    { value: 27, label: "Patents granted" },
    { value: 343, label: "Patent claims" },
    { value: 10, label: "Active platforms", suffix: "+" },
    { value: 150, label: "Countries reached", suffix: "+" },
  ];

  /* Operated platforms — full briefs */
  const portfolio = [
    {
      name: "iApply™",
      tagline: "Candidate-Centric Transparent Recruitment Platform",
      flagship: true,
      patents: "7 Patents · 89 Claims",
      summary: "Category-creating innovation: real-time recruiter transparency, AI-powered autonomous references, blockchain credentials & pre-screening with candidate coaching.",
      market: "$924B Global Recruiting Market by 2030",
      revenue: "Freemium SaaS, enterprise licensing, data insights partnerships",
      href: "https://iapply.se",
      cta: "Visit iApply.se",
    },
    {
      name: "CommunicaringSchool™",
      tagline: "UN-Compliant Global Education Platform",
      flagship: true,
      patents: "9 Patents · 116 Claims",
      summary: "9 patented technologies enabling cross-national student benchmarking, curriculum equivalency, and rights-based learning.",
      market: "$850B Global EdTech Market",
      revenue: "Government licensing, UN agency partnerships, international school subscriptions",
      href: "https://communicaringschool.com",
      cta: "Visit Website",
    },
    {
      name: "Rosetta Livingstone™",
      tagline: "Language Learning Revolution",
      patents: "4 Patents · 52 Claims",
      summary: "Multimodal language acquisition, 34 languages, real-time vocational calibration. Three verticals: government integration, broadcast media transformation, vocational workforce acceleration.",
      market: "$82B Global Language Learning Market — Nordic governments, international enterprise, corporate training",
      revenue: "Licensing, co-development, acquisition",
      href: "https://rosettalivingstone.com",
      cta: "Visit Rosetta Livingstone",
    },
    {
      name: "Partysta™",
      tagline: "Global Private Party Planning Platform",
      patents: "2 Patents · 28 Claims",
      summary: "Unified Canva-style party planner, vendor marketplace, social memories & payments — the consumer platform for the 1.8B+ private events held every year.",
      market: "$6.4B Party Planning Market 2026 → $22.6B by 2035 (15.1% CAGR)",
      revenue: "Freemium subscriptions (PRO/HOST), 5% ticketing fee, 15% vendor commission",
      href: "https://partysta.com",
      cta: "Visit Website",
    },
    {
      name: "It's a Fitt™",
      tagline: "AI Video Virtual Try-On Technology",
      patents: "1 Patent · 25 Claims",
      summary: "Temporal fabric physics simulation, multi-body-type AI personalization, predictive sizing & return prediction — reducing returns by 15–50%.",
      market: "$48.1B Virtual Try-On Market by 2030 · 25.95% CAGR",
      revenue: "SaaS subscription, API licensing, enterprise white-label",
      href: "https://itsafitt.com",
      cta: "Visit Website",
    },
    {
      name: "NewsToast™",
      tagline: "Mobile-First Language Learning Through Daily News",
      patents: "3 Patents · 38 Claims",
      summary: "Language acquisition for immigrants and global learners through localized daily news content — turning everyday reading into immersive language practice.",
      market: "$54.8B Global Language Learning Market (16.6% CAGR) · 28M+ European immigrants",
      revenue: "Freemium subscriptions, premium tiers, B2B integration partnerships",
      href: "https://newstoast.com",
      cta: "Visit NewsToast.com",
    },
    {
      name: "xPortMatch™",
      tagline: "AI-Powered B2B Export-Import Matching",
      patents: "Trade infrastructure platform",
      summary: "Verified Swedish suppliers connected to 150+ countries with premium matching events, data licensing, API access & compliance certifications.",
      market: "€194B Swedish annual export · 180,500 verified SMEs · 150+ countries",
      revenue: "SaaS €2,490–8,990/year per SME, premium events, API & compliance certifications",
      href: "https://xportmatch.com",
      cta: "Visit xPortMatch.com",
    },
    {
      name: "BizMeet™",
      tagline: "B2B Meeting & Networking Platform",
      patents: "Trade infrastructure platform",
      summary: "Curated B2B meeting platform connecting Swedish and international businesses for high-intent commercial conversations, networking events, and partnership formation.",
      market: "European B2B networking & event tech market — millions of SMEs seeking partners",
      revenue: "Subscription, event ticketing, premium matchmaking",
      href: "https://bizmeetbyc.se/",
      cta: "Visit Website",
    },
    {
      name: "CarbonX™",
      tagline: "Verified Carbon Credit Trading Platform",
      patents: "Compliance-first marketplace architecture",
      summary: "Digital marketplace for verified carbon credits with Gold Standard and Verra compliance baked into every transaction — built for transparent, auditable corporate decarbonization.",
      market: "$2.4T projected voluntary & compliance carbon markets by 2030",
      revenue: "Transaction fees, enterprise compliance subscriptions, data licensing",
      href: "https://carbonx.se/",
      cta: "Visit Website",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ravolution AB | Swedish Venture Studio & Angel Investor | Build‑for‑Equity for Startups</title>
        <meta name="description" content="27 patents, 343 claims. Swedish venture studio building deep tech unicorns in language learning (24x faster), voice security, AI trade infrastructure & K1-K9 education. Founded by Ivan Daza." />
        <link rel="canonical" href="https://ravolution.se/" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en" />
        <meta name="google-site-verification" content="fZ5wqD3QL629AjpMRpzKfj4z6mrxJXjraVGIHx1HjwU" />
        <meta property="og:title" content="Ravolution AB | Swedish Venture Studio & Angel Investor" />
        <meta property="og:description" content="27 patents, 343 claims. Building deep tech unicorns in language learning, voice security, AI trade & education." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <EditorialShell>
        {/* ───────── HERO ───────── */}
        <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 overflow-hidden">
          <HeroVideoBackground overlayClassName="bg-black/70" />
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          {/* noise */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />

          {/* top bar */}
          <div className="relative z-10 flex flex-wrap justify-between items-start gap-4 edit-label text-white/45 mt-6">
            <span>Ravolution AB — Venture Studio</span>
            <span className="hidden md:inline">59.6099° N · 16.5448° E</span>
            <span>{time}</span>
          </div>

          {/* headline block */}
          <div className="relative z-10 max-w-[1400px] w-full mx-auto">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">
                {t("hero.badge") || "Swedish venture studio"}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white mt-8">
                {t("hero.headline") || "Solving civilization-scale challenges with"}
                <br />
                <span className="text-[hsl(var(--accent-edit))]">
                  {t("hero.headlineHighlight") || "patented deep tech."}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="edit-body text-white/65 mt-10 max-w-3xl">
                We protect and scale the seven platforms transforming global opportunity:{" "}
                <a href="https://iapply.se" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[hsl(var(--accent-edit))] underline-offset-4 hover:underline transition-colors">iApply™</a>,{" "}
                <a href="https://communicaringschool.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[hsl(var(--accent-edit))] underline-offset-4 hover:underline transition-colors">CommunicaringSchool™</a>,{" "}
                <a href="https://rosettalivingstone.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[hsl(var(--accent-edit))] underline-offset-4 hover:underline transition-colors">Rosetta Livingstone™</a>,{" "}
                <a href="https://xportmatch.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[hsl(var(--accent-edit))] underline-offset-4 hover:underline transition-colors">xPortMatch™</a>,{" "}
                <a href="https://newstoast.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[hsl(var(--accent-edit))] underline-offset-4 hover:underline transition-colors">NewsToast™</a>,{" "}
                <a href="https://bizmeetbyc.se/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[hsl(var(--accent-edit))] underline-offset-4 hover:underline transition-colors">BizMeet™</a>,{" "}
                <a href="https://carbonx.se/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[hsl(var(--accent-edit))] underline-offset-4 hover:underline transition-colors">CarbonX™</a>.
              </p>
            </Reveal>
          </div>

          {/* bottom indicator */}
          <div className="relative z-10 flex justify-between items-end edit-label text-white/40">
            <span>Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich</span>
            <span className="flex items-center gap-3" aria-hidden>
              <span className="rotate-90 origin-center inline-block translate-y-[-6px]">Scroll</span>
              <span className="block w-px h-12 bg-white/40 animate-pulse" />
            </span>
          </div>
        </section>

        {/* ───────── MARQUEE ───────── */}
        <MarqueeStrip
          items={[
            "Build for Equity",
            "Venture Studio",
            "Angel Investor",
            "27 Patents · 343 Claims",
            "Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich",
            "Ravolution",
            "Defensible Innovation",
          ]}
        />

        {/* ───────── 01 — WHO WE ARE ───────── */}
        <section className="edit-section">
          <div className="edit-container">
            <SectionLabel number="01 — Who We Are" title="A Swedish venture studio built around defensible IP." />
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <Reveal className="md:col-span-7">
                <p className="text-2xl md:text-4xl font-display font-bold text-white leading-[1.1] tracking-[-0.02em]">
                  Ravolution AB protects, builds, and scales platforms that solve civilization-scale problems —
                  from language acquisition to voice security to global trade infrastructure.
                </p>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.15}>
                <p className="edit-body text-white/65 max-w-md">
                  Founded by Ivan Daza, recognized as one of 200 entrepreneurs who shaped Sweden's modern
                  business landscape. We operate as a studio, invest as an angel, and build as partners —
                  always backed by patented, defensible technology.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── 02 — WHAT WE DO ───────── */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — What We Do" title="Three ways we partner." />
            <ul>
              {pillars.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.08}>
                  <li>
                    <Link
                      to={p.href}
                      className="group block border-t border-white/10 last:border-b py-10 md:py-14 grid md:grid-cols-12 gap-6 md:gap-10 items-baseline transition-colors hover:bg-white/[0.02]"
                    >
                      <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">{p.n}</span>
                      <h3 className="md:col-span-6 text-3xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-[0.95] group-hover:translate-x-2 transition-transform">
                        {p.title}
                      </h3>
                      <p className="md:col-span-4 edit-body text-white/60">{p.desc}</p>
                      <span className="md:col-span-1 edit-label text-white/40 group-hover:text-[hsl(var(--accent-edit))] md:text-right transition-colors">
                        →
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── STATS ───────── */}
        <section className="edit-section bg-[hsl(var(--surface))] border-y border-white/10">
          <div className="edit-container">
            <Reveal>
              <span className="edit-label text-white/45">By the numbers</span>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mt-10">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="border-t border-white/15 pt-6">
                    <CountUp
                      end={s.value}
                      suffix={s.suffix || ""}
                      className="block edit-stat text-white"
                    />
                    <span className="edit-label text-white/55 mt-4 block">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 03 — PORTFOLIO ───────── */}
        <section className="edit-section">
          <div className="edit-container">
            <SectionLabel number="03 — Portfolio" title="Platforms we operate." />
            <div className="border-t border-white/10">
              {portfolio.map((c, i) => {
                const isOpen = openCard === c.name;
                return (
                  <Reveal key={c.name} delay={i * 0.04}>
                    <div className="border-b border-white/10">
                      <button
                        type="button"
                        onClick={() => setOpenCard(isOpen ? null : c.name)}
                        className="w-full text-left py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-10 items-baseline group transition-colors hover:bg-white/[0.02]"
                        aria-expanded={isOpen}
                      >
                        <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="md:col-span-5">
                          {c.flagship && (
                            <span className="edit-label text-[hsl(var(--accent-edit))] block mb-2">★ Flagship</span>
                          )}
                          <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-[-0.02em] group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                            {c.name}
                          </h3>
                          <p className="edit-label text-white/55 mt-3">{c.tagline}</p>
                        </div>
                        <p className="md:col-span-5 edit-body text-white/65">{c.summary}</p>
                        <span className="md:col-span-1 edit-label text-white/40 md:text-right group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                          {isOpen ? "− Close" : "+ Details"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-10 md:pb-12 grid md:grid-cols-12 gap-4 md:gap-10 animate-fade-in">
                          <div className="md:col-start-2 md:col-span-11 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                            <div className="bg-[hsl(var(--surface))] p-6">
                              <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Patents</span>
                              <p className="text-white text-base">{c.patents}</p>
                            </div>
                            <div className="bg-[hsl(var(--surface))] p-6">
                              <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Market</span>
                              <p className="text-white/85 text-sm leading-relaxed">{c.market}</p>
                            </div>
                            <div className="bg-[hsl(var(--surface))] p-6">
                              <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Revenue</span>
                              <p className="text-white/85 text-sm leading-relaxed">{c.revenue}</p>
                            </div>
                          </div>
                          <div className="md:col-start-2 md:col-span-11 mt-6">
                            <a
                              href={c.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                            >
                              {c.cta} ↗
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="flex justify-between items-center mt-10">
              <span className="edit-label text-white/40">
                3 additional strategic patent verticals under Emerging Market Opportunities — plus one secret unlocked after investment.
              </span>
              <Link to={lp("/portfolio")} className="edit-label text-white edit-link">
                View full portfolio →
              </Link>
            </div>
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container text-center">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">Build with us</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="edit-display text-white mt-6">
                Ready to <br className="md:hidden" />
                <span className="text-[hsl(var(--accent-edit))]">build?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link to={lp("/angel-investor")} className="edit-btn">
                  <span>For Founders</span>
                </Link>
                <Link to={lp("/invest")} className="edit-btn" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
                  <span>For Investors</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default Index;
