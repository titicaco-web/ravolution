import { useState } from "react";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { Link } from "@/lib/router-compat";
import { useLangPath } from "@/hooks/use-lang-path";

const light = "edit-section px-6 md:px-12 bg-[#f7f5f0] text-[#081426]";
const paper = "edit-section px-6 md:px-12 bg-[#eeece6] text-[#081426]";
const h2Light = "font-display font-bold uppercase text-3xl md:text-6xl tracking-[-0.03em] leading-[0.95]";

const curves = [
  ["Camera capability", "Macro photography, autofocus and computational imaging continue improving."],
  ["AI infrastructure", "Visual models can increasingly work with structured imaging inputs — but input quality remains fundamental."],
  ["Telehealth", "Healthcare increasingly happens outside specialist facilities."],
  ["Consumer health records", "Users increasingly expect health information to persist over time."],
  ["Regulatory maturity", "Medical AI is moving toward explicit governance, provenance, monitoring and lifecycle control."],
];

const markets = [
  ["Consumer", "Personal longitudinal Eye Record"],
  ["Telehealth", "Guided patient capture"],
  ["Opticians", "Structured remote / follow-up imaging"],
  ["Health systems", "Workflow and longitudinal infrastructure"],
  ["Research", "Consented structured datasets"],
  ["API / SDK", "Embedded capture and quality infrastructure"],
  ["OEM", "Camera / device integration"],
];

const regions = [
  ["Europe", "GDPR + MDR + EU AI Act-aware architecture"],
  ["United States", "FDA pathway + QMSR + partner-specific privacy assessment"],
  ["Nordics", "Digitally mature healthcare and telehealth ecosystems"],
  ["India", "Scale, smartphone distribution and uneven specialist access"],
  ["Latin America", "Mobile-first healthcare opportunity and fragmented specialist access"],
  ["Africa", "Potential reach where traditional specialist infrastructure is limited"],
  ["Asia", "Massive mobile population + rapidly evolving digital-health systems"],
];

const economics = [
  ["Consumer", "Premium longitudinal records, reporting and family services"],
  ["Healthcare SaaS", "Platform + accepted workflow economics"],
  ["SDK / API", "Usage and enterprise licensing"],
  ["Research", "Consented infrastructure and study collaborations"],
  ["OEM / White label", "Embedded imaging infrastructure"],
];

const assets = [
  ["Device intelligence", "Which cameras can reliably capture what?"],
  ["Quality intelligence", "Under which conditions is an image usable?"],
  ["Population validation", "How does performance differ across populations?"],
  ["Longitudinal intelligence", "What does change look like over time?"],
];

const thesis = [
  ["Find the friction", "Eye information is episodic, fragmented and difficult to compare."],
  ["Invent the mechanism", "Device-adaptive capture + quality gates + longitudinal records."],
  ["Protect the core", "Patent-pending imaging and normalization architecture."],
  ["Build and prove", "Consumer system + governed clinical infrastructure."],
  ["Scale the system", "Consumers · healthcare · API · research · OEM."],
];

const formatUsers = (n: number) =>
  n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1_000 ? `${Math.round(n / 1_000)}K` : `${Math.round(n)}`;

const Calculator = () => {
  const [pop, setPop] = useState(100_000_000);
  const [use, setUse] = useState(20);
  const [adopt, setAdopt] = useState(5);
  const result = pop * (use / 100) * (adopt / 100);
  const row = (
    label: string,
    value: string,
    input: { min: number; max: number; step: number; v: number; set: (n: number) => void },
  ) => (
    <label className="block py-5 border-b border-white/10">
      <span className="flex justify-between edit-label text-white/55">
        <span>{label}</span>
        <span className="text-white">{value}</span>
      </span>
      <input
        type="range"
        min={input.min}
        max={input.max}
        step={input.step}
        value={input.v}
        onChange={(e) => input.set(Number(e.target.value))}
        className="w-full mt-4 accent-[hsl(var(--accent-edit))]"
      />
    </label>
  );
  return (
    <div className="grid md:grid-cols-2 gap-12 mt-14">
      <div className="border-t border-white/10">
        {row("Potential population", pop.toLocaleString("en-US"), { min: 10_000_000, max: 2_000_000_000, step: 10_000_000, v: pop, set: setPop })}
        {row("Addressable use case", `${use}%`, { min: 1, max: 100, step: 1, v: use, set: setUse })}
        {row("Potential adoption", `${adopt}%`, { min: 1, max: 50, step: 1, v: adopt, set: setAdopt })}
      </div>
      <div className="flex flex-col justify-center">
        <span className="edit-label text-white/45">Result</span>
        <p className="font-display font-bold text-white text-6xl md:text-8xl tracking-[-0.04em] mt-4" aria-live="polite">
          {formatUsers(result)}
        </p>
        <p className="edit-label text-white/70 mt-2">longitudinal users</p>
        <p className="edit-label text-[hsl(var(--accent-edit))] mt-8 text-[10px]">Illustrative scenario · not a forecast</p>
        <a
          href="mailto:ivan.daza@ravolution.se?subject=EyeHealthIntel%20%E2%80%94%20detailed%20market%20model"
          className="edit-label inline-block self-start mt-8 border border-[hsl(var(--accent-edit))] text-[hsl(var(--accent-edit))] px-6 py-4 hover:bg-[hsl(var(--accent-edit))] hover:text-[#081426] transition-colors"
        >
          Request detailed market model →
        </a>
      </div>
    </div>
  );
};

const Grid = ({ items, cols = "md:grid-cols-3", dark = false }: { items: string[][]; cols?: string; dark?: boolean }) => (
  <div className={`grid grid-cols-1 ${cols} mt-14 border-t border-l ${dark ? "border-white/10" : "border-[#081426]/15"}`}>
    {items.map(([h, p], i) => (
      <div key={h} className={`p-6 md:p-8 border-r border-b ${dark ? "border-white/10" : "border-[#081426]/15"}`}>
        <span className={`edit-label ${dark ? "text-[hsl(var(--accent-edit))]" : "text-[#7C633D]"}`}>{String(i + 1).padStart(2, "0")}</span>
        <h3 className={`font-display font-bold uppercase text-xl md:text-2xl tracking-tight mt-6 ${dark ? "text-white" : ""}`}>{h}</h3>
        <p className={`text-sm leading-relaxed mt-3 ${dark ? "text-white/60" : "text-[#536078]"}`}>{p}</p>
      </div>
    ))}
  </div>
);

const EyeHealthMarketPage = () => {
  const lp = useLangPath();
  return (
    <EditorialShell>
      <main>
        <section className="relative min-h-[80vh] flex items-end px-6 md:px-12 pt-32 pb-20">
          <div className="edit-container w-full">
            <Reveal>
              <span className="edit-label edit-eyebrow">EyeHealthIntel / Market opportunity</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white mt-6">
                The market is not
                <br />
                “people who need
                <br />
                an eye <span className="edit-outline">app.</span>”
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-display font-bold uppercase text-white/80 text-xl md:text-3xl tracking-tight leading-tight max-w-4xl mt-10">
                It is the infrastructure between billions of eyes and the systems that care for them.
              </p>
              <p className="edit-lede text-white/65 mt-6 max-w-2xl">
                EyeHealthIntel sits at the intersection of global eye health, consumer health records, telehealth,
                smartphone imaging, medical AI, clinical workflow and research infrastructure.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 01 */}
        <section className={light}>
          <div className="edit-container">
            <SectionLabel light number="01" title="Human need" />
            <Reveal>
              <h2 className={h2Light}>Start with the people,<br />not the TAM.</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 mt-14 border-t border-[#081426]/15 pt-10">
              <div>
                <p className="font-display font-bold text-7xl md:text-9xl tracking-[-0.05em]">2.2B+</p>
                <p className="text-[#536078] mt-3">people live with near or distance vision impairment.</p>
              </div>
              <div>
                <p className="font-display font-bold text-7xl md:text-9xl tracking-[-0.05em]">1B+</p>
                <p className="text-[#536078] mt-3">cases are estimated to be preventable or still unaddressed.</p>
              </div>
            </div>
            <p className="edit-label text-[#536078] mt-6 text-[10px]">Source: World Health Organization, World report on vision.</p>
            <Reveal>
              <blockquote className="font-display font-bold text-2xl md:text-4xl tracking-tight leading-tight max-w-4xl mt-16 border-l-2 border-[#7C633D] pl-6">
                2.2 billion people are not EyeHealthIntel's TAM. They describe the scale of the underlying human problem.
              </blockquote>
            </Reveal>
            <Grid
              items={[
                ["Human need", "People who could benefit from better access, continuity or eye-health information."],
                ["Addressable workflows", "Consumer health, telehealth, optometry, ophthalmology, pharmacies, primary care, research and health systems."],
                ["Commercial market", "Subscriptions, SDK/API usage, enterprise licensing, partner deployments and research infrastructure."],
              ]}
            />
          </div>
        </section>

        {/* 02 */}
        <section className="edit-section px-6 md:px-12">
          <div className="edit-container">
            <SectionLabel number="02" title="Why now" />
            <Reveal>
              <h2 className="edit-display text-white">Five curves are<br /><span className="edit-outline">converging.</span></h2>
            </Reveal>
            <Grid items={curves} cols="md:grid-cols-5" dark />
            <p className="font-display text-white text-2xl md:text-3xl tracking-tight mt-14 max-w-3xl">
              EyeHealthIntel is designed at the intersection of these five curves.
            </p>
          </div>
        </section>

        {/* 03 */}
        <section className={paper}>
          <div className="edit-container">
            <SectionLabel light number="03" title="One infrastructure, several markets" />
            <div className="mt-6 flex flex-wrap md:flex-nowrap border-t border-[#081426]/15">
              {markets.map(([h, p]) => (
                <div key={h} className="w-1/2 md:w-auto md:flex-1 py-6 pr-4 border-b md:border-b-0 md:border-r border-[#081426]/15 md:px-4 first:md:pl-0">
                  <span className="edit-label text-[#7C633D]">{h}</span>
                  <p className="text-sm text-[#536078] mt-3 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 */}
        <section className={light}>
          <div className="edit-container">
            <SectionLabel light number="04" title="Major-market opportunity" />
            <Reveal>
              <h2 className={h2Light}>The product can be global.<br />The release cannot be generic.</h2>
            </Reveal>
            <Grid items={regions} cols="md:grid-cols-4" />
            <p className="font-display font-bold text-xl md:text-2xl tracking-tight mt-12">
              Each jurisdiction receives its own validation, regulatory and release gate.
            </p>
            <p className="text-[#536078] mt-2">No global “switch” can activate clinical functionality everywhere.</p>
          </div>
        </section>

        {/* 05 */}
        <section className="edit-section px-6 md:px-12">
          <div className="edit-container">
            <SectionLabel number="05" title="The economic architecture" />
            <Reveal>
              <h2 className="edit-display text-white">Value can be created<br />at more than one <span className="edit-outline">layer.</span></h2>
            </Reveal>
            <Grid items={economics} cols="md:grid-cols-5" dark />
            <div className="font-display text-white/80 text-xl md:text-2xl tracking-tight leading-snug mt-14 max-w-3xl space-y-2 border-l-2 border-[hsl(var(--accent-edit))] pl-6">
              <p>Consumer distribution can create reach and device intelligence.</p>
              <p>Healthcare integrations can create workflow value.</p>
              <p>Longitudinal records can create a differentiated data architecture.</p>
            </div>
          </div>
        </section>

        {/* 06 */}
        <section className={paper}>
          <div className="edit-container">
            <SectionLabel light number="06" title="The network effect" />
            <Reveal>
              <div className={`${h2Light} space-y-6`}>
                <p>Every new device<br />teaches the system about devices.</p>
                <p className="text-[#536078]">Every new population<br />improves the validation question.</p>
                <p>Every new longitudinal record<br />adds time.</p>
              </div>
            </Reveal>
            <p className="edit-body text-[#536078] mt-10 max-w-2xl">
              These effects only compound under explicit consent, governance and jurisdiction-specific validation.
              Without them, no data enters the learning loop.
            </p>
            <Grid items={assets} cols="md:grid-cols-4" />
          </div>
        </section>

        {/* 07 */}
        <section className="edit-section px-6 md:px-12">
          <div className="edit-container">
            <SectionLabel number="07" title="Market scenarios" />
            <Reveal>
              <h2 className="edit-display text-white">Explore <span className="edit-outline">scale.</span></h2>
            </Reveal>
            <Calculator />
          </div>
        </section>

        {/* 08 */}
        <section className={light}>
          <div className="edit-container">
            <SectionLabel light number="08" title="The Ravolution thesis" />
            <Reveal>
              <h2 className={h2Light}>Why this belongs<br />at Ravolution.</h2>
            </Reveal>
            <Grid items={thesis} cols="md:grid-cols-5" />
            <Reveal>
              <blockquote className="font-display font-bold text-2xl md:text-4xl tracking-tight leading-tight max-w-5xl mt-16 border-l-2 border-[#7C633D] pl-6">
                EyeHealthIntel represents the Ravolution thesis in its purest form: identify infrastructure that
                should exist, build it before the category is obvious, and create several paths through which it
                can reach global scale.
              </blockquote>
            </Reveal>
            <div className="flex flex-wrap gap-4 mt-16">
              <Link to={lp("/eyehealthintel")} className="edit-label bg-[#081426] text-[#f7f5f0] px-6 py-4 border border-[#081426] hover:bg-transparent hover:text-[#081426] transition-colors">
                Explore EyeHealthIntel →
              </Link>
              <Link to={lp("/partner")} className="edit-label border border-[#081426] text-[#081426] px-6 py-4 hover:bg-[#081426] hover:text-[#f7f5f0] transition-colors">
                Partner with Ravolution →
              </Link>
              <a href="mailto:ivan.daza@ravolution.se?subject=EyeHealthIntel%20%E2%80%94%20investor%20briefing" className="edit-label border border-[#081426] text-[#081426] px-6 py-4 hover:bg-[#081426] hover:text-[#f7f5f0] transition-colors">
                Request investor briefing →
              </a>
            </div>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
};

export default EyeHealthMarketPage;
