import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MetadataMachine from "@/components/MetadataMachine";
import MetadataLeadForm from "@/components/MetadataLeadForm";
import { useLangPath } from "@/hooks/use-lang-path";
import {
  EditorialShell,
  Reveal,
  SectionLabel,
} from "@/components/editorial/EditorialLayout";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to discover your metadata from your name and date of birth",
  description:
    "Use ChatGPT or Grok to reveal the symbolic metadata encoded in your full name and date of birth using Pythagorean letter values.",
  totalTime: "PT3M",
  tool: [
    { "@type": "HowToTool", name: "ChatGPT" },
    { "@type": "HowToTool", name: "Grok" },
  ],
  step: [
    { "@type": "HowToStep", position: 1, name: "Open ChatGPT or Grok", text: "Open chat.openai.com or grok.com in your browser." },
    { "@type": "HowToStep", position: 2, name: "Paste the universal prompt", text: "Based on my name and date of birth, what is my metadata (from letter values). What was I put here to do. Go as deep as you can. Do not search the web." },
    { "@type": "HowToStep", position: 3, name: "Add your full name and date of birth", text: "Provide your full birth-certificate name and date of birth in YYYY-MM-DD format." },
    { "@type": "HowToStep", position: 4, name: "Compare across models", text: "Run the same prompt in a second AI model. Convergence between two independent models indicates a real signal." },
  ],
};

const MetadataMachinePage = () => {
  const lp = useLangPath();

  const links: Array<{ to: string; title: string; desc: string }> = [
    { to: lp("/"), title: "Home", desc: "Ravolution AB — Swedish venture studio & IP innovation company building deep tech unicorns." },
    { to: lp("/about"), title: "About Ivan Daza", desc: "Founder, tech inventor. 27 patents · 343 claims across language, voice security, AI trade & education." },
    { to: lp("/services"), title: "Services", desc: "Build-for-equity, patent strategy and technical co-founder alternatives for ambitious startups." },
    { to: lp("/portfolio"), title: "Portfolio", desc: "Rosetta Livingstone™, VoiceProtector™, xPortMatch™, CommunicaringSchool™ and more." },
    { to: lp("/invest"), title: "Invest", desc: "Qualified investors — access to our patent-backed venture pipeline." },
    { to: lp("/angel-investor"), title: "Angel / Build-for-Equity", desc: "We build MVPs for equity in high-potential tech startups." },
    { to: lp("/blog"), title: "Blog & Podcast", desc: "Essays, interviews and long-form conversations on invention, IP and venture building." },
    { to: lp("/contact"), title: "Contact", desc: "Reach Ivan directly to explore a partnership or licensing conversation." },
  ];

  return (
    <>
      <Helmet>
        <title>Metadata Machine | Name & Date of Birth Reading | Ravolution AB</title>
        <meta
          name="description"
          content="Free metadata machine — enter your full name and date of birth to reveal your Pythagorean numerology profile (Life Path, Expression, Soul Urge) and open a deeper reading in ChatGPT or Grok."
        />
        <link rel="canonical" href="https://ravolution.se/metadatamachine" />
        <meta property="og:title" content="Metadata Machine — Name & Date of Birth Reading" />
        <meta
          property="og:description"
          content="Discover the symbolic metadata encoded in your name and birth date. Free tool, plus a one-click prompt for ChatGPT and Grok."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/metadatamachine" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <EditorialShell>
        {/* HERO */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 min-h-[50vh] flex flex-col justify-end overflow-hidden">
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
              <span className="edit-label text-[hsl(var(--accent-edit))]">Free Tool</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white mt-6">The Metadata Machine</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/65 mt-8 max-w-2xl">
                Enter your full name and date of birth. Get your Pythagorean metadata — Life Path, Expression,
                Soul Urge, Personality — then open ChatGPT or Grok pre-filled with the universal prompt for
                a much deeper reading.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MACHINE */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Machine" title="Generate Your Metadata" />
            <MetadataMachine />
          </div>
        </section>

        {/* FOOTER: explore Ravolution */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — Ravolution" title="Explore the Rest of Ravolution" />
            <p className="edit-body text-white/65 max-w-3xl mb-12">
              Ravolution AB is a Swedish venture studio and IP innovation company. We hold 27 patents with 343
              claims and build deep tech platforms across language learning, voice security, AI-driven trade and
              K1–K9 education. The Metadata Machine is a small public gift from our founder, Ivan Daza.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block border border-white/10 hover:border-[hsl(var(--accent-edit))] transition-colors p-6 h-full group"
                  >
                    <div className="edit-label text-[hsl(var(--accent-edit))] mb-2 group-hover:text-white transition-colors">
                      {l.title} →
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{l.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-16 pt-8 border-t border-white/10 text-center">
              <p className="edit-mono text-xs text-white/40">
                © {new Date().getFullYear()} Ravolution AB · Stockholm ·{" "}
                <a href="mailto:ivan.daza@ravolution.se" className="underline hover:text-white">
                  ivan.daza@ravolution.se
                </a>
              </p>
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default MetadataMachinePage;
