import { Helmet } from "react-helmet-async";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const companies = [
  { name: "Rosetta Livingstone", sector: "EdTech · AI", status: "ACTIVE", desc: "AI language acquisition — 24× faster than conventional methods.", href: "https://rosettalivingstone.com" },
  { name: "CommunicaringSchool", sector: "Education", status: "ACTIVE", desc: "Global K1–K9 platform aligned with the UN Convention on the Rights of the Child.", href: "#" },
  { name: "AIMagnifica", sector: "AI Governance", status: "FOR SALE", desc: "AI governance & compliance layer — screens prompts and documents before they reach any connected LLM, with Allow, Review or Stop decisions and audit-ready logging.", href: "https://aimagnifica.com/" },

  { name: "TOXINSIDE", sector: "Consumer · HealthTech", status: "LAUNCHING 2026", desc: "Scan any product — regulator-cited safety score and a better alternative. Prevention-economy play, EU-first, methodology-public.", href: "https://toxinside.com" },
  { name: "XportMatch.com", sector: "Export Tech · B2B SaaS", status: "AVAILABLE FOR ACQUISITION", desc: "AI-native export matchmaking — market intelligence, international buyer discovery and export opportunity management for export-ready companies.", href: "/en/xportmatch" },
  { name: "VoiceProtector", sector: "Cybersecurity", status: "ACTIVE", desc: "Voice biometrics & deepfake authentication — billion-dollar fraud market.", href: "https://voiceprotector.com" },
  { name: "iApply", sector: "Recruitment AI", status: "ACTIVE", desc: "AI-driven recruitment & qualification — patented matching infrastructure.", href: "https://iapply.se" },
  { name: "NewsToast", sector: "Media", status: "ACTIVE", desc: "Editorial-grade curated news platform.", href: "https://newstoast.com" },
  { name: "Partysta.com", sector: "Event Tech · Social Platform", status: "AVAILABLE FOR ACQUISITION", desc: "Party planning and memory-sharing platform — invitations, guest coordination, budgets, shared responsibilities and event memories in one space.", href: "/en/partysta" },
  { name: "Gyrocraft", sector: "Deep Tech", status: "RESEARCH", desc: "Stealth-stage deep tech initiative.", href: "#" },
  { name: "Beredskapad.se", sector: "Preparedness · EdTech", status: "AVAILABLE FOR ACQUISITION", desc: "Swedish digital crisis preparedness platform — education, checklists, readiness assessments and practical guidance for households and organisations.", href: "/en/beredskapad" },
  { name: "Hundelser.se", sector: "Pet Tech · Community", status: "AVAILABLE FOR ACQUISITION", desc: "Swedish social platform for dog owners — dog profiles, community content, friendships, activities, challenges and dog-related marketplace opportunities.", href: "/en/hundelser" },
];


const PortfolioPage = () => (
  <>
    <Helmet>
      <title>Portfolio | Patented AI &amp; Deep Tech Platforms — Ravolution</title>
      <meta name="description" content="The platforms Ravolution invents, builds and operates — AI governance, K–9 education, language learning, voice security, export matchmaking, health and preparedness ventures." />
      <link rel="canonical" href="https://ravolution.se/en/portfolio" />
      <meta property="og:title" content="Portfolio | Patented AI &amp; Deep Tech Platforms — Ravolution" />
      <meta property="og:description" content="AI governance, K–9 education, language learning, voice security, export matchmaking, health and preparedness platforms built by Ravolution." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ravolution.se/en/portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content="AIMagnifica, AI governance, AI compliance, EU AI Act, ISO 42001, AI gateway, prompt screening, AI audit logs, sovereign AI, enterprise AI security" />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Ravolution AB Portfolio",
        itemListElement: companies.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "SoftwareApplication",
            name: c.name,
            applicationCategory: c.sector,
            description: c.desc,
            ...(c.href.startsWith("http") ? { url: c.href } : {}),
          },
        })),
      })}</script>
    </Helmet>

    <EditorialShell>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="edit-container relative z-10">
          <Reveal><span className="edit-label text-[hsl(var(--accent-edit))]">Index — 00</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="edit-display text-white mt-6">Portfolio</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="edit-body text-white/65 mt-8 max-w-2xl">
              Ten-plus platforms across deep tech, education, security and trade — all anchored
              by 27 patents and 343 claims.
            </p>
          </Reveal>
        </div>
      </section>

      {/* List */}
      <section className="edit-section border-t border-white/10">
        <div className="edit-container">
          <SectionLabel number="01 — Active" title="Platforms in operation." />
          <ul>
            {companies.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.04}>
                <li>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group block border-t border-white/10 last:border-b py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-6 items-baseline transition-colors hover:border-[hsl(var(--accent-edit))]"
                  >
                    <span className="md:col-span-1 edit-label text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="md:col-span-4 text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-[-0.02em] group-hover:translate-x-2 group-hover:text-[hsl(var(--accent-edit))] transition-all">
                      {c.name}
                    </h3>
                    <span className="md:col-span-2 edit-label text-white/55">{c.sector}</span>
                    <p className="md:col-span-3 text-sm text-white/55 leading-relaxed">{c.desc}</p>
                    <span className="md:col-span-1 edit-label text-white/40">{c.status}</span>
                    <span className="md:col-span-1 edit-label text-white/40 md:text-right group-hover:text-[hsl(var(--accent-edit))] transition-colors">→</span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </EditorialShell>
  </>
);

export default PortfolioPage;
