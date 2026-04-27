import { Helmet } from "react-helmet-async";
import ivanPhoto from "@/assets/ivan-daza.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import LeadershipSection from "@/components/LeadershipSection";
import {
  EditorialShell,
  Reveal,
  SectionLabel,
} from "@/components/editorial/EditorialLayout";

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ravolution.se/#ivan-daza",
  name: "Ivan Daza",
  jobTitle: "Tech Inventor, Founder & CEO",
  url: "https://ravolution.se/en/about",
  image: "https://ravolution.se/ivan-daza.jpg",
  sameAs: [
    "https://www.linkedin.com/in/ivandaza/",
    "https://patents.google.com/?inventor=Ivan+Daza",
  ],
  worksFor: { "@id": "https://ravolution.se/#organization" },
};

const Founder = () => {
  const { t } = useLanguage();

  const expertise = [
    { title: t("founder.expertise1"), desc: t("founder.expertise1Desc") },
    { title: t("founder.expertise2"), desc: t("founder.expertise2Desc") },
    { title: t("founder.expertise3"), desc: t("founder.expertise3Desc") },
    { title: t("founder.expertise4"), desc: t("founder.expertise4Desc") },
  ];

  const achievements = [
    { y: t("founder.achievement1Year"), title: t("founder.achievement1Title"), desc: t("founder.achievement1Desc") },
    { y: t("founder.achievement2Year"), title: t("founder.achievement2Title"), desc: t("founder.achievement2Desc") },
    { y: t("founder.achievement3Year"), title: t("founder.achievement3Title"), desc: t("founder.achievement3Desc") },
    { y: t("founder.achievement4Year"), title: t("founder.achievement4Title"), desc: t("founder.achievement4Desc") },
    { y: t("founder.achievement5Year"), title: t("founder.achievement5Title"), desc: t("founder.achievement5Desc") },
    { y: t("founder.achievement6Year"), title: t("founder.achievement6Title"), desc: t("founder.achievement6Desc") },
  ];

  const portfolio = [
    { name: "Rosetta Livingstone™", desc: t("founder.portfolio1Desc"), status: t("founder.patentPortfolio") },
    { name: "VoiceProtector", desc: t("founder.portfolio2Desc"), status: t("founder.activeProduct") },
    { name: "xPortMatch", desc: t("founder.portfolio3Desc"), status: t("founder.activeProduct") },
    { name: "CommunicaringSchool", desc: t("founder.portfolio4Desc"), status: t("founder.inDevelopment") },
  ];

  const faqs = [
    { q: t("founder.faq1Q"), a: t("founder.faq1A") },
    { q: t("founder.faq2Q"), a: t("founder.faq2A") },
    { q: t("founder.faq3Q"), a: t("founder.faq3A") },
    { q: t("founder.faq4Q"), a: t("founder.faq4A") },
  ];

  return (
    <>
      <Helmet>
        <title>Ivan Daza | Founder & Inventor | Ravolution AB</title>
        <meta name="description" content="Ivan Daza — Swedish tech inventor & founder of Ravolution AB. 27 patents, 343 claims. Pioneer in language acquisition, voice security, AI trade and K1–K9 education." />
        <link rel="canonical" href="https://ravolution.se/en/about" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/about" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/about" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/about" />
        <meta property="og:title" content="Ivan Daza | Founder & Inventor | Ravolution AB" />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">{JSON.stringify(founderSchema)}</script>
      </Helmet>

      <EditorialShell>
        {/* HERO — 60vh */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 min-h-[60vh] flex flex-col justify-end overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          <div className="edit-container relative z-10">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">{t("founder.badge") || "Founder & CEO"}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white mt-6">About</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/65 mt-8 max-w-2xl">
                {t("founder.subtitle")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 01 — THE STORY */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — The Story" title={t("founder.aboutTitle") as string} />
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-7 space-y-8">
                <Reveal>
                  <p className="text-xl md:text-2xl font-display text-white leading-snug" dangerouslySetInnerHTML={{ __html: t("founder.aboutP1") as string }} />
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="edit-body text-white/65" dangerouslySetInnerHTML={{ __html: t("founder.aboutP2") as string }} />
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="edit-body text-white/65" dangerouslySetInnerHTML={{ __html: t("founder.aboutP3") as string }} />
                </Reveal>
              </div>
              <Reveal className="md:col-span-5" zoom>
                <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={ivanPhoto} alt="Ivan Daza, Founder & CEO of Ravolution AB" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="mt-6 space-y-2">
                  <span className="edit-label text-white/45 block">Founder · Inventor</span>
                  <span className="edit-mono text-sm text-white/55 block">{t("founder.name")}</span>
                  <span className="edit-mono text-sm text-white/55 block">Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 02 — EXPERTISE — numbered list */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — Expertise" title={t("founder.expertiseTitle") as string} />
            <ul>
              {expertise.map((e, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <li className="border-t border-white/10 last:border-b py-10 md:py-12 grid md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">0{i + 1}</span>
                    <h3 className="md:col-span-6 text-2xl md:text-4xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-tight">
                      {e.title as string}
                    </h3>
                    <p className="md:col-span-5 edit-body text-white/60">{e.desc as string}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 — TRACK RECORD */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="03 — Track Record" title={t("founder.trackRecordTitle") as string} />
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              {achievements.map((a, i) => (
                <Reveal key={i} delay={(i % 2) * 0.08}>
                  <div className="border-t border-white/10 py-8 grid grid-cols-[auto_1fr] gap-6">
                    <span className="edit-label text-white/45 pt-1">{a.y as string}</span>
                    <div>
                      <h4 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2">{a.title as string}</h4>
                      <p className="text-sm text-white/55 leading-relaxed">{a.desc as string}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — VISION */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04 — Vision" title={t("founder.visionTitle") as string} />
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-8 md:col-start-5 space-y-8">
                <Reveal>
                  <p className="text-xl md:text-2xl font-display text-white/85 leading-snug">
                    {t("founder.visionDescription")}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <blockquote className="border-l-2 border-[hsl(var(--accent-edit))] pl-6 italic text-lg text-white/70 leading-relaxed">
                    {t("founder.visionQuote")}
                  </blockquote>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — PORTFOLIO */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — Portfolio" title={t("founder.portfolioTitle") as string} />
            <ul>
              {portfolio.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.05}>
                  <li className="border-t border-white/10 last:border-b py-8 grid md:grid-cols-12 gap-4 md:gap-10 items-baseline">
                    <span className="md:col-span-1 edit-label text-white/40">0{i + 1}</span>
                    <h4 className="md:col-span-5 text-xl md:text-3xl font-display font-bold uppercase tracking-[-0.02em] text-white">{p.name}</h4>
                    <p className="md:col-span-4 text-sm text-white/55 leading-relaxed">{p.desc as string}</p>
                    <span className="md:col-span-2 edit-label text-white/45 md:text-right">{p.status as string}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="06 — FAQ" title={t("founder.faqTitle") as string} />
            <div>
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="border-t border-white/10 last:border-b py-8 grid md:grid-cols-12 gap-4 md:gap-10">
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">0{i + 1}</span>
                    <h4 className="md:col-span-5 text-lg md:text-2xl font-display font-bold uppercase tracking-tight text-white leading-snug">{f.q as string}</h4>
                    <p className="md:col-span-6 text-white/65 leading-relaxed">{f.a as string}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container text-center">
            <Reveal>
              <h2 className="edit-h2 text-white">{t("founder.ctaTitle")}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="edit-body text-white/60 max-w-xl mx-auto mt-6">{t("founder.ctaDescription")}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <a href="mailto:ivan.daza@ravolution.se" className="edit-btn"><span>{t("founder.ctaContactIvan") || "Contact Ivan"}</span></a>
                <a href="https://linkedin.com/in/ivandaza" target="_blank" rel="noopener noreferrer" className="edit-btn" style={{ borderColor: "rgba(255,255,255,0.4)" }}><span>LinkedIn ↗</span></a>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="border-t border-white/10">
          <LeadershipSection />
        </div>
      </EditorialShell>
    </>
  );
};

export default Founder;
