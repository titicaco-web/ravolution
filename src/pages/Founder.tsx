import { Helmet } from "react-helmet-async";
import ivanAnimation from "@/assets/ivan-animation.mp4.asset.json";
import ivanBlueprint from "@/assets/ivan-numerology-blueprint.png.asset.json";
import MetadataMachine from "@/components/MetadataMachine";
import ivanPodcast from "@/assets/ivan-numerology-podcast.m4a.asset.json";
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
        <meta name="description" content="Ivan Daza — Swedish tech inventor & founder of Ravolution AB. 27 patents across language learning, voice security, AI trade & K1–K9 education." />
        <link rel="canonical" href="https://ravolution.se/en/about" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/about" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/about" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/about" />
        <meta property="og:title" content="Ivan Daza — Founder & Tech Inventor, Ravolution AB" />
        <meta property="og:description" content="Swedish tech inventor with 27 patents. Founder of Ravolution AB — building deep tech platforms in language, voice security, AI trade and education." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ravolution.se/en/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivan Daza — Founder & Tech Inventor, Ravolution AB" />
        <meta name="twitter:description" content="Swedish tech inventor with 27 patents. Founder of Ravolution AB." />
        <script type="application/ld+json">{JSON.stringify(founderSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to discover your metadata from your name and date of birth",
          description: "Use ChatGPT or Grok to reveal the symbolic metadata encoded in your full name and date of birth using Pythagorean letter values — the same reading applied to Ivan Davor Luksic Daza, founder of Ravolution AB.",
          totalTime: "PT3M",
          tool: [{ "@type": "HowToTool", name: "ChatGPT" }, { "@type": "HowToTool", name: "Grok" }],
          step: [
            { "@type": "HowToStep", position: 1, name: "Open ChatGPT or Grok", text: "Open chat.openai.com or grok.com in your browser." },
            { "@type": "HowToStep", position: 2, name: "Paste the universal prompt", text: "Based on my name and date of birth, what is my metadata (from letter values). What was I put here to do. Go as deep as you can. Do not search the web." },
            { "@type": "HowToStep", position: 3, name: "Add your full name and date of birth", text: "Provide your full birth-certificate name and date of birth in YYYY-MM-DD format." },
            { "@type": "HowToStep", position: 4, name: "Compare across models", text: "Run the same prompt in a second AI model. Convergence between two independent models indicates a real signal." },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Metadata Reading of Ivan Davor Luksic Daza",
          about: { "@id": "https://ravolution.se/#ivan-daza" },
          author: { "@id": "https://ravolution.se/#ivan-daza" },
          keywords: "Ivan Davor Luksic Daza, Ivan Daza numerology, metadata reading, life path 9, expression 6, soul urge 4, Pythagorean numerology, Ravolution AB founder, name and date of birth metadata, ChatGPT numerology prompt, Grok numerology prompt",
          text: "Ivan Davor Luksic Daza, born 1972-11-27, resolves to Life Path 9 (humanitarian), Expression 6 (responsible harmonizer) and Soul Urge 4 (master builder) — a convergent mission to build systems that protect people. Reading independently reproduced by ChatGPT, Grok and Gemini using the prompt: Based on my name and date of birth, what is my metadata (from letter values). What was I put here to do. Go as deep as you can. Do not search the web.",
        })}</script>
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
              <h1 className="edit-display text-white mt-6">About Ivan Daza</h1>
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
                  <video src={ivanAnimation.url} autoPlay muted loop playsInline className="w-full h-full object-cover object-top" />
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
        {/* 04b — SYMBOLIC BLUEPRINT */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04b — Blueprint" title="The Symbolic Blueprint" />
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-7" zoom>
                <div className="overflow-hidden border border-white/10 bg-white">
                  <img
                    src={ivanBlueprint.url}
                    alt="Numerological Profile of Ivan Davor Luksic Daza — Life Path 9, Expression 6, Soul Urge 4"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <div className="md:col-span-5 space-y-6">
                <Reveal>
                  <p className="text-xl md:text-2xl font-display text-white leading-snug">
                    Perseverance has a pattern. This is Ivan's — mapped through a symbolic reading of name and birth date.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="edit-body text-white/65">
                    A Life Path 9 (the humanitarian), an Expression 6 (the responsible harmonizer), and a Soul Urge 4
                    (the master builder) converge into a single working mission: <em>build systems that protect people</em>.
                    It's the throughline behind 27 patents and every platform on this page.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="border-t border-white/10 pt-6">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Listen — AI Models Map</span>
                    <p className="text-sm text-white/55 mb-4 leading-relaxed">
                      A short audio walkthrough exploring how three AI models independently arrived at the same profile.
                    </p>
                    <audio controls preload="none" src={ivanPodcast.url} className="w-full">
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 04c — METADATA MACHINE */}
        <section id="metadata-machine" className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04c — Metadata Machine" title="Discover Your Own Metadata" />
            <MetadataMachine />

            {/* SEO-rich worked example: Ivan Davor Luksic Daza */}
            <article className="mt-20 border-t border-white/10 pt-12 grid md:grid-cols-12 gap-10">
              <header className="md:col-span-4">
                <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Worked Example</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                  Ivan Davor Luksic Daza — Metadata Reading
                </h3>
                <p className="text-sm text-white/55 mt-4 font-mono">Born 1972-11-27 · Stockholm, Sweden</p>
              </header>
              <div className="md:col-span-8 space-y-5 text-white/70 leading-relaxed">
                <p>
                  Ivan Davor Luksic Daza is the founder of Ravolution AB and the reference example for this
                  metadata machine. Running his full name and date of birth through letter-value numerology
                  (Pythagorean system) produces a stable symbolic fingerprint that three independent AI models —
                  ChatGPT, Grok and Gemini — arrived at with the same prompt: <em>"Based on my name and date of
                  birth, what is my metadata (from letter values). What was I put here to do. Go as deep as you
                  can. Do not search the web."</em>
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 not-italic">
                  <li className="border border-white/10 p-4">
                    <div className="edit-label text-white/50">Life Path</div>
                    <div className="text-3xl font-display text-[hsl(var(--accent-edit))]">9</div>
                    <p className="text-xs text-white/55 mt-1">The humanitarian — build systems that serve many.</p>
                  </li>
                  <li className="border border-white/10 p-4">
                    <div className="edit-label text-white/50">Expression</div>
                    <div className="text-3xl font-display text-[hsl(var(--accent-edit))]">6</div>
                    <p className="text-xs text-white/55 mt-1">The responsible harmonizer — protector, teacher, builder.</p>
                  </li>
                  <li className="border border-white/10 p-4">
                    <div className="edit-label text-white/50">Soul Urge</div>
                    <div className="text-3xl font-display text-[hsl(var(--accent-edit))]">4</div>
                    <p className="text-xs text-white/55 mt-1">The master builder — patient, methodical, foundational.</p>
                  </li>
                  <li className="border border-white/10 p-4">
                    <div className="edit-label text-white/50">Mission</div>
                    <div className="text-3xl font-display text-[hsl(var(--accent-edit))]">IP</div>
                    <p className="text-xs text-white/55 mt-1">27 patents · 343 claims protecting people through technology.</p>
                  </li>
                </ul>
                <p>
                  The convergence — Life Path 9, Expression 6, Soul Urge 4 — reads as a single working mission:
                  <strong className="text-white"> build systems that protect people</strong>. It is the throughline
                  behind Rosetta Livingstone™ (language equity), VoiceProtector™ (anti-deepfake voice biometrics),
                  xPortMatch™ (borderless trade) and CommunicaringSchool™ (K1–K9 education equity).
                </p>
              </div>
            </article>

            {/* How to run this on yourself — searchable HowTo */}
            <div className="mt-16 border-t border-white/10 pt-10 grid md:grid-cols-12 gap-10">
              <header className="md:col-span-4">
                <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">How To</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                  Run the Same Reading on Yourself
                </h3>
              </header>
              <ol className="md:col-span-8 space-y-6 text-white/70 leading-relaxed list-none">
                {[
                  ["Open ChatGPT or Grok.", "Any current model works. No plugin, no browsing, no login trick."],
                  ["Paste the universal prompt.", "\"Based on my name and date of birth, what is my metadata (from letter values). What was I put here to do. Go as deep as you can. Do not search the web.\""],
                  ["Add your full name and date of birth.", "Use the name on your birth certificate for the deepest reading."],
                  ["Compare across models.", "Run the same prompt in a second AI. When two models converge, the signal is real."],
                ].map(([title, body], i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="edit-label text-[hsl(var(--accent-edit))] pt-1">0{i + 1}</span>
                    <div>
                      <div className="text-lg font-display font-bold uppercase text-white tracking-tight">{title}</div>
                      <p className="text-sm text-white/60 mt-2">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
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
                <a href="https://www.linkedin.com/in/ivandaza/" target="_blank" rel="noopener noreferrer" className="edit-btn" style={{ borderColor: "rgba(255,255,255,0.4)" }}><span>LinkedIn ↗</span></a>
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
