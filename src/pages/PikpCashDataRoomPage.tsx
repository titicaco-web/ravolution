import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const DATAROOM_HASH = "7646640253b1b5a09dcce42dbdd03bc0f8583648f8542afefb01b78ea2418e26";
const STORAGE_KEY = "rav-gate-pikpcash-dataroom";
const SHARED_GATE_KEY = "rav-gate-pikpcash";
const CONTACT_EMAIL = "invest@ravolution.se";

const readUnlocked = () => {
  try {
    return (
      sessionStorage.getItem(STORAGE_KEY) === "1" ||
      sessionStorage.getItem(SHARED_GATE_KEY) === "1"
    );
  } catch {
    return false;
  }
};

const sha256 = async (value: string) => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

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
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(code.trim().toUpperCase());
    if (hash === DATAROOM_HASH) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
        sessionStorage.setItem(SHARED_GATE_KEY, "1");
      } catch {
        /* ignore */
      }
      setError("");
      setUnlocked(true);
    } else {
      setError("Invalid data-room code.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setCode("");
    }
  };

  return (
    <>
      <Helmet>
        <title>PikpCash® Data Room — Ravolution AB</title>
        <meta name="description" content="Restricted PikpCash data room. Access by invitation only." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <EditorialShell>
        {!unlocked ? (
          <section className="pt-40 pb-32 px-6 md:px-12 min-h-[80vh]">
            <div className="edit-container max-w-xl">
              <Link to={lp("/pikpcash")} className="edit-label text-white/50 edit-link">
                ← PikpCash®
              </Link>
              <div
                className={`mt-10 border border-[hsl(var(--accent-edit))]/40 bg-[hsl(var(--surface))] p-8 md:p-10 ${
                  shake ? "motion-safe:animate-[shake_0.4s_ease-in-out]" : ""
                }`}
              >
                <span className="edit-label text-[hsl(var(--accent-edit))] uppercase block mb-4">
                  Restricted · Data room
                </span>
                <h1 className="edit-h2 text-white">PikpCash® — Data room</h1>
                <p className="text-white/65 text-sm leading-relaxed mt-4">
                  A separate data-room code is required — the presentation code does not open this page.
                  Request access at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-white edit-link">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3">
                  <input
                    type="password"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setError("");
                    }}
                    placeholder="Data-room code"
                    aria-label="Data-room code"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-[hsl(var(--accent-edit))]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 border border-[hsl(var(--accent-edit))] text-[hsl(var(--accent-edit))] edit-label whitespace-nowrap hover:bg-[hsl(var(--accent-edit))] hover:text-[hsl(var(--bg))] transition-colors"
                  >
                    Unlock
                  </button>
                </form>
                {error && <p className="text-[#C05A5A] text-sm mt-4">{error}</p>}
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="pt-40 pb-16 px-6 md:px-12">
              <div className="edit-container">
                <Link to={lp("/pikpcash")} className="edit-label text-white/50 edit-link">
                  ← PikpCash®
                </Link>
                <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-8">Data room</h1>
                <p className="edit-label text-white/70 mt-4">PikpCash® · Confidential — do not distribute</p>
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
                  PikpCash® · Everyone is a customer · Confidential — do not distribute
                </p>
              </div>
            </section>
          </>
        )}
      </EditorialShell>
    </>
  );
};

export default PikpCashDataRoomPage;
