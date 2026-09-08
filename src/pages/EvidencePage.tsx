import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { EditorialShell, Reveal } from "@/components/editorial/EditorialLayout";
import { SectionHead, TechGrid } from "@/components/lab/LabPrimitives";
import { useLangPath } from "@/hooks/use-lang-path";

type Record = {
  id: string;
  invention: string;
  mission: string;
  owner: string;
  status: string;
  jurisdiction: string;
};

const register: Record[] = [
  { id: "IP-001", invention: "Rosetta Livingstone", mission: "02 Language", owner: "Ravolution AB", status: "Granted", jurisdiction: "SE / EP" },
  { id: "IP-002", invention: "iApply", mission: "04 Opportunity", owner: "Ravolution AB", status: "Granted", jurisdiction: "SE / EP" },
  { id: "IP-003", invention: "CommunicaringSchool", mission: "01 Learn", owner: "Ravolution AB", status: "Granted", jurisdiction: "SE" },
  { id: "IP-004", invention: "XportMatch", mission: "04 Opportunity", owner: "Ravolution AB", status: "Granted", jurisdiction: "SE" },
  { id: "IP-005", invention: "VoiceProtector", mission: "03 Trust", owner: "Ravolution AB", status: "Granted", jurisdiction: "SE" },
  { id: "IP-006", invention: "It's a Fitt", mission: "05 Healthier choices", owner: "Ravolution AB (co-owned)", status: "Granted", jurisdiction: "SE" },
  { id: "IP-007", invention: "Eventor", mission: "04 Opportunity", owner: "Ravolution AB", status: "Application filed", jurisdiction: "SE" },
  { id: "IP-008", invention: "Givin", mission: "04 Opportunity", owner: "Ravolution AB", status: "Application filed", jurisdiction: "SE" },
  { id: "IP-009", invention: "AlarmSole", mission: "03 Trust & safety", owner: "Ravolution AB", status: "Patent pending", jurisdiction: "SE / PCT route" },
  { id: "IP-010", invention: "PikpCash (26 claims)", mission: "04 Opportunity", owner: "Ravolution AB", status: "Patent pending", jurisdiction: "SE" },
  { id: "IP-011", invention: "Gyrocraft", mission: "06 Human capability", owner: "Ravolution AB", status: "Application filed · restricted", jurisdiction: "Disclosed under NDA" },
  { id: "IP-012", invention: "Frontier vertical", mission: "06 Human capability", owner: "Ravolution AB", status: "Stealth", jurisdiction: "Disclosed post-qualification" },
];

const claims = [
  {
    claim: "27 patent assets · 369 claims",
    basis: "Portfolio count across granted, filed and pending assets in nine strategic verticals. Exact status, filing numbers and priority dates are supplied per asset in a qualified review.",
  },
  {
    claim: "Language acquisition acceleration",
    basis: "Internal method comparison against conventional classroom hours. Model and assumptions supplied on request; not an independently audited result.",
  },
  {
    claim: "Consumer risk scoring (TOXINSIDE)",
    basis: "Scores derive from published regulatory sources and cited ingredient databases. Methodology is public; no health claim is made for individual users.",
  },
  {
    claim: "Return / conversion improvements",
    basis: "Model-based projections from pilot data. Treated as hypothesis until independently measured in a customer deployment.",
  },
];

const EvidencePage = () => {
  const lp = useLangPath();
  return (
    <>
      <Helmet>
        <title>IP &amp; Evidence Register | Ravolution AB</title>
        <meta
          name="description"
          content="Ravolution AB's IP and evidence register: patent assets by invention and mission, owner, status and jurisdiction, plus the basis behind every performance claim."
        />
        <link rel="canonical" href="https://ravolution.se/en/evidence" />
        <meta property="og:title" content="IP &amp; Evidence Register | Ravolution AB" />
        <meta
          property="og:description"
          content="Patent assets by invention and mission, owner, status, jurisdiction — and the methodology behind every claim."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/evidence" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <EditorialShell>
        <section className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
          <TechGrid />
          <div className="edit-container relative z-10">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">Ravolution / Evidence</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white mt-6">
                AMBITION EARNS ATTENTION.
                <br />
                PRECISION EARNS TRUST.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/65 mt-8 max-w-2xl">
                Every large claim on this site should resolve into evidence. This register shows what
                is protected, what is pending, what is stealth — and what is still hypothesis.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="edit-section px-6 md:px-12 border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="01 / IP register"
              title="WHAT IS PROTECTED."
              intro="Filing numbers, priority dates and claim schedules per asset are shared with qualified investors, institutions and acquirers under NDA."
            />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse">
                <thead>
                  <tr className="border-y border-white/15">
                    {["ID", "Invention", "Mission", "Owner", "Status", "Jurisdiction"].map((h) => (
                      <th key={h} className="edit-label text-white/45 text-left py-4 pr-6 font-normal">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {register.map((r) => (
                    <tr key={r.id} className="border-b border-white/10">
                      <td className="edit-label text-[hsl(var(--accent-edit))] py-5 pr-6">{r.id}</td>
                      <td className="text-white font-display py-5 pr-6">{r.invention}</td>
                      <td className="edit-label text-white/50 py-5 pr-6">{r.mission}</td>
                      <td className="text-sm text-white/60 py-5 pr-6">{r.owner}</td>
                      <td className="text-sm text-white/60 py-5 pr-6">{r.status}</td>
                      <td className="text-sm text-white/60 py-5 pr-6">{r.jurisdiction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="edit-section px-6 md:px-12 border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="02 / Claim basis"
              title="WHERE EVERY NUMBER COMES FROM."
              intro="Large claims are not softened. They are backed up — or clearly marked as model, pilot or hypothesis."
            />
            <div className="grid md:grid-cols-2 border-t border-l border-white/10">
              {claims.map((c) => (
                <div key={c.claim} className="border-r border-b border-white/10 p-8">
                  <h3 className="font-display text-white text-xl">{c.claim}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mt-4">{c.basis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edit-section px-6 md:px-12 border-t border-white/10">
          <div className="edit-container flex flex-wrap gap-4">
            <a
              href="mailto:ivan.daza@ravolution.se"
              className="edit-label px-6 py-4 bg-[hsl(var(--accent-edit))] text-black hover:opacity-90 transition-opacity"
            >
              Request the full patent schedule →
            </a>
            <Link
              to={lp("/invest")}
              className="edit-label px-6 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
            >
              Investor access ↗
            </Link>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default EvidencePage;
