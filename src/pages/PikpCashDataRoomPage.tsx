import { Helmet } from "@/lib/helmet-compat";
import { Link } from "@/lib/router-compat";
import { EditorialShell, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const CONTACT_EMAIL = "invest@ravolution.se";

const documents = [
  { id: "PC-01", name: "Pitch deck (2017)", note: "Original investor deck, unedited." },
  { id: "PC-02", name: "Revenue model (2017)", note: "Player, team and platform economics." },
  { id: "PC-03", name: "Provenance record", note: "Working drawing, dating and concept history." },
  { id: "PC-04", name: "White-label outline", note: "Branded direct-sales engine for retail chains." },
];

const playerRows = [
  ["Order value", "150 kr average order"],
  ["Released margin", "40 % of order value"],
  ["Volume", "1 order per door-knock hour"],
  ["Player commission", "30 % of released margin at entry level"],
  ["Top tier player month", "88 000 kr"],
  ["Team of 15 (month)", "198 000 kr"],
  ["Recruiter bonus", "5 % of a recruit's first month"],
];

const scenarioRows = [
  ["Sweden — 3 600 active players", "50 952 000 kr / month"],
  ["Nordics — theoretical ceiling", "Scaled from the Sweden model"],
  ["Global — theoretical ceiling", "Scaled from the Sweden model"],
];

const roundRows = [
  ["Angel (2017)", "1 MSEK for 10 %"],
  ["A-round (2017 plan)", "12 MSEK at 120 MSEK valuation"],
  ["Global round (2017 plan)", "70 MSEK at 700 MSEK valuation"],
];

const PikpCashDataRoomPage = () => {
  const lp = useLangPath();

  return (
    <>
      <Helmet>
        <title>PikpCash® Data Room — Ravolution AB</title>
        <meta name="description" content="PikpCash data room — the 2017 model: investor materials, player economics, scenarios and round structure, reproduced unchanged for provenance." />
      </Helmet>

      <EditorialShell>
        <section className="pt-40 pb-16 px-6 md:px-12">
          <div className="edit-container">
            <Link to={lp("/pikpcash")} className="edit-label text-white/50 edit-link">
              ← PikpCash®
            </Link>
            <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-8">Data room</h1>
            <p className="edit-label text-white/70 mt-4">PikpCash® · The 2017 model, on the record</p>
            <div className="mt-10 border border-white/15 bg-[hsl(var(--surface))] p-6 md:p-8">
              <p className="text-white/75 text-sm leading-relaxed">
                All figures are 2017 model assumptions, reproduced unchanged for provenance and evaluation.
                Illustrative scenarios — not forecasts, not audited, not an offer of securities.
              </p>
            </div>
          </div>
        </section>

        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Index" title="Documents on request." />
            <div className="border border-white/10">
              {documents.map((d) => (
                <div
                  key={d.id}
                  className="grid md:grid-cols-[110px_1fr_200px] border-b border-white/10 last:border-b-0 bg-[hsl(var(--bg))]"
                >
                  <div className="p-5 font-mono text-xs text-[hsl(var(--accent-edit))] md:border-r border-white/10">
                    {d.id}
                  </div>
                  <div className="px-5 pb-5 md:p-5">
                    <p className="text-white text-sm">{d.name}</p>
                    <p className="text-white/50 text-xs mt-1">{d.note}</p>
                  </div>
                  <div className="px-5 pb-5 md:p-5 md:text-right md:border-l border-white/10">
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                        `PikpCash data room — request ${d.id}`
                      )}`}
                      className="edit-label text-[hsl(var(--accent-edit))] edit-link"
                    >
                      Request →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — Player economics" title="The 2017 earning model." />
            <div className="border border-white/10">
              {playerRows.map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-2 border-b border-white/10 last:border-b-0 bg-[hsl(var(--bg))]">
                  <div className="p-5 text-white/60 text-sm sm:border-r border-white/10">{k}</div>
                  <div className="px-5 pb-5 sm:p-5 text-white text-sm font-mono">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Scenarios" title="Theoretical ceiling calculations (2017 model)." />
            <div className="border border-white/10">
              {scenarioRows.map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-2 border-b border-white/10 last:border-b-0 bg-[hsl(var(--bg))]">
                  <div className="p-5 text-white/60 text-sm sm:border-r border-white/10">{k}</div>
                  <div className="px-5 pb-5 sm:p-5 text-white text-sm font-mono">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="04 — Round structure" title="Historical record, 2017." />
            <div className="border border-white/10">
              {roundRows.map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-2 border-b border-white/10 last:border-b-0 bg-[hsl(var(--bg))]">
                  <div className="p-5 text-white/60 text-sm sm:border-r border-white/10">{k}</div>
                  <div className="px-5 pb-5 sm:p-5 text-white text-sm font-mono">{v}</div>
                </div>
              ))}
            </div>
            <p className="edit-label text-white/40 mt-8">
              PikpCash® · Everyone is a customer
            </p>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default PikpCashDataRoomPage;
