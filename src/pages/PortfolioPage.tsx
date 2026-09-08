import { Helmet } from "react-helmet-async";
import { EditorialShell, Reveal } from "@/components/editorial/EditorialLayout";
import { SectionHead, TechGrid } from "@/components/lab/LabPrimitives";

type Company = {
  name: string;
  sector: string;
  status: string;
  desc: string;
  href: string;
};

const missionSystems: Company[] = [
  { name: "CommunicaringSchool", sector: "Mission 01 · Education", status: "ACTIVE", desc: "Global K1–K9 learning infrastructure aligned with the UN Convention on the Rights of the Child — curriculum equivalency, assessment and rights-aligned access.", href: "#" },
  { name: "Rosetta Livingstone", sector: "Mission 02 · Language", status: "ACTIVE", desc: "Adaptive AI language acquisition built around immersion, context and personalised pathways.", href: "https://rosettalivingstone.com" },
  { name: "SINGUISTIC", sector: "Mission 02 · Language", status: "ACTIVE", desc: "Music-native language learning — synced dual-language lyrics, tap-to-save vocabulary, spaced repetition and CEFR-anchored reporting in 26 languages.", href: "https://singuistic.com" },
  { name: "VoiceProtector", sector: "Mission 03 · Trust", status: "ACTIVE", desc: "Voice biometrics and deepfake authentication for a world where voice itself can be generated.", href: "https://voiceprotector.com" },
  { name: "TOXINSIDE", sector: "Mission 05 · Prevention", status: "LAUNCHING 2026", desc: "Regulator-cited product safety scoring at the moment of purchase, with a public methodology and a native halal ingredient vertical.", href: "https://toxinside.com" },
  { name: "AlarmSole", sector: "Mission 03 · Human safety", status: "PATENT PENDING", desc: "Discreet connected safety sole activated through the foot — SOS, live location and emergency workflows, as a product and as an embedded platform.", href: "/en/alarmsole" },
];

const activeVentures: Company[] = [
  { name: "BizMeet", sector: "Community OS · SaaS", status: "ACTIVE", desc: "White-label community operating system for organisations running 2,000–20,000 members.", href: "/en/bizmeet" },
  { name: "iApply", sector: "Recruitment AI", status: "ACTIVE", desc: "AI-driven recruitment and qualification on patented matching infrastructure.", href: "https://iapply.se" },
  { name: "NewsToast", sector: "Media", status: "ACTIVE", desc: "Editorial-grade curated news platform.", href: "https://newstoast.com" },
  { name: "CarbonX", sector: "Climate · Marketplace", status: "ACTIVE", desc: "Carbon and climate infrastructure connected to the prevention-economy mission.", href: "#" },
  { name: "Pratis", sector: "AI Companion · HealthTech", status: "SEEKING INVESTORS", desc: "A calm, Swedish-speaking AI companion for lonely older adults. Companionship, not care. Co-owned with Susanne Örtegren.", href: "/en/pratis" },
  { name: "PikpCash", sector: "Direct Sales · Gamification", status: "CONCEPT · 2017 · RESTRICTED", desc: "Field-sales gamification with 26 filed patent claims covering proof of presence, geo allocation and verified transactions.", href: "/en/pikpcash" },
];

const studioAssets: Company[] = [
  { name: "AIMagnifica", sector: "AI Governance", status: "FOR SALE", desc: "AI governance and compliance layer screening prompts and documents before they reach any connected LLM, with audit-ready logging.", href: "https://aimagnifica.com/" },
  { name: "XportMatch.com", sector: "Export Tech · B2B SaaS", status: "AVAILABLE FOR ACQUISITION", desc: "AI-native export matchmaking — market intelligence, buyer discovery and export opportunity management.", href: "/en/xportmatch" },
  { name: "Partysta.com", sector: "Event Tech", status: "AVAILABLE FOR ACQUISITION", desc: "Party planning and memory-sharing platform — invitations, guests, budgets and shared responsibilities.", href: "/en/partysta" },
  { name: "Beredskapad.se", sector: "Preparedness · EdTech", status: "AVAILABLE FOR ACQUISITION", desc: "Swedish digital crisis preparedness platform for households and organisations.", href: "/en/beredskapad" },
  { name: "Hundelser.se", sector: "Pet Tech · Community", status: "AVAILABLE FOR ACQUISITION", desc: "Swedish social platform for dog owners — profiles, community, activities and marketplace.", href: "/en/hundelser" },
];

const frontier: Company[] = [
  { name: "Gyrocraft", sector: "Mission 06 · Frontier", status: "RESEARCH · RESTRICTED", desc: "Stealth-stage deep tech initiative. Details disclosed under controlled access only.", href: "#" },
  { name: "SYSTEM_07", sector: "Mission 06 · Stealth", status: "UNDISCLOSED", desc: "Unreleased invention under controlled disclosure. Qualified partners can request a private briefing.", href: "mailto:ivan.daza@ravolution.se" },
];

const Layer = ({
  number,
  title,
  intro,
  items,
}: {
  number: string;
  title: string;
  intro: string;
  items: Company[];
}) => (
  <section className="edit-section px-6 md:px-12 border-t border-white/10">
    <div className="edit-container">
      <SectionHead kicker={number} title={title} intro={intro} />
      <ul>
        {items.map((c, i) => (
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
                <span className="md:col-span-1 edit-label text-white/40 md:text-right group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                  →
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

const all = [...missionSystems, ...activeVentures, ...studioAssets];

const PortfolioPage = () => (
  <>
    <Helmet>
      <title>Inventions &amp; Portfolio | Ravolution AB</title>
      <meta
        name="description"
        content="Ravolution AB's portfolio in four layers: mission systems, active ventures, studio and acquisition assets, and frontier work held in stealth."
      />
      <link rel="canonical" href="https://ravolution.se/en/portfolio" />
      <meta property="og:title" content="Inventions &amp; Portfolio | Ravolution AB" />
      <meta
        property="og:description"
        content="Mission systems, active ventures, acquisition assets and frontier work from the Swedish invention company Ravolution AB."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ravolution.se/en/portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Ravolution AB Portfolio",
          itemListElement: all.map((c, i) => ({
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
        })}
      </script>
    </Helmet>

    <EditorialShell>
      <section className="relative pt-40 pb-24 px-6 md:px-12 min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <TechGrid />
        <div className="edit-container relative z-10">
          <Reveal>
            <span className="edit-label text-[hsl(var(--accent-edit))]">Index — 00</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="edit-display text-white mt-6">
              INVENTIONS
              <br />
              IN FOUR LAYERS.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="edit-body text-white/65 mt-8 max-w-2xl">
              Not an incubator with many websites. One invention company: potentially
              system-changing inventions first, then commercial ventures, then studio and
              acquisition assets, then the frontier layer held in stealth.
            </p>
          </Reveal>
        </div>
      </section>

      <Layer
        number="01 / Mission systems"
        title="THE POTENTIALLY WORLD-CHANGING INVENTIONS."
        intro="Systems designed to change the underlying condition of a problem, protected by patent assets and mapped to one of the six missions."
        items={missionSystems}
      />
      <Layer
        number="02 / Active ventures"
        title="COMMERCIAL COMPANIES BUILT FROM RAVOLUTION CONCEPTS."
        intro="Operating platforms with customers, revenue models or live pilots."
        items={activeVentures}
      />
      <Layer
        number="03 / Studio & acquisition assets"
        title="BUILT, PROVEN, AVAILABLE."
        intro="Complete platforms offered for acquisition or partnership — valuable businesses that are not mission systems."
        items={studioAssets}
      />
      <Layer
        number="04 / Frontier & stealth"
        title="THE PORTFOLIO YOU CAN SEE IS NOT THE LIMIT."
        intro="Unreleased inventions under controlled disclosure. Access is granted to qualified investors, institutions and strategic partners."
        items={frontier}
      />
    </EditorialShell>
  </>
);

export default PortfolioPage;
