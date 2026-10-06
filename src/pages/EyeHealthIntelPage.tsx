import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { Link } from "@/lib/router-compat";
import { useLangPath } from "@/hooks/use-lang-path";
import irisImage from "@/assets/eyehealthintel-iris.jpg";

const boundary = [
  "Bad images can be rejected rather than guessed from",
  "Unsupported analyses return NOT_ASSESSABLE",
  "Scientific evidence is separated from emerging research",
  "Traditional interpretations never enter Clinical",
  "Models and evidence remain versioned",
  "Clinical functions remain locked until separately validated and released",
];

const chain = [
  ["Device", "Device capability profile"],
  ["Capture", "Guided eye imaging"],
  ["Quality", "Focus · exposure · glare · visibility · framing"],
  ["Record", "Immutable original + metadata"],
  ["Time", "Longitudinal normalization"],
  ["Evidence", "Scientific · Research · Traditional separated"],
  ["Intelligence", "Only permitted outputs"],
  ["Connection", "Consumer · telehealth · API · FHIR · research"],
];

const pillars = [
  ["Access", "Start with hardware people already own."],
  ["Continuity", "Turn isolated captures into a record over time."],
  ["Trust", "Keep evidence, model versions, consent and provenance attached to every permitted output."],
];

const light = "edit-section px-6 md:px-12 bg-[#f7f5f0] text-[#081426]";
const paper = "edit-section px-6 md:px-12 bg-[#eeece6] text-[#081426]";

const EyeHealthIntelPage = () => {
  const lp = useLangPath();
  return (
    <EditorialShell>
      <main>
        {/* HERO */}
        <section className="relative min-h-[88vh] flex items-end px-6 md:px-12 pt-32 pb-20 overflow-hidden">
          <img
            src={irisImage}
            alt=""
            aria-hidden
            className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[85vh] max-w-none opacity-40 md:opacity-55 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081426] via-[#081426]/80 to-[#081426]/20 pointer-events-none" />
          <div className="edit-container relative w-full">
            <Reveal>
              <span className="edit-label edit-eyebrow">Ravolution / Eye health infrastructure</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white mt-6">
                Your eyes change
                <br />
                over time. The record
                <br />
                should <span className="edit-outline">too.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="edit-lede text-white/70 mt-10 max-w-2xl space-y-4">
                <p>
                  Most eye information is still captured as isolated moments: an examination, a photograph, a
                  message to a clinician, a test result.
                </p>
                <p>
                  EyeHealthIntel begins with a different premise:{" "}
                  <strong className="text-white">the eye should have a longitudinal record.</strong> A record
                  that can grow over years, across devices and — where consent, validation and regulation allow —
                  across healthcare contexts.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://eyehealthintel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edit-label border border-[hsl(var(--accent-edit))] bg-[hsl(var(--accent-edit))] text-[#081426] px-6 py-4 hover:bg-transparent hover:text-[hsl(var(--accent-edit))] transition-colors"
                >
                  Explore EyeHealthIntel ↗
                </a>
                <Link
                  to={lp("/eyehealthintel/market-opportunity")}
                  className="edit-label border border-white/40 text-white px-6 py-4 hover:border-white transition-colors"
                >
                  See the market opportunity ↓
                </Link>
              </div>
              <p className="edit-label text-white/45 mt-8 text-[10px]">Patent pending · Ravolution AB · Sweden</p>
            </Reveal>
          </div>
        </section>

        {/* 01 QUESTION */}
        <section className={light}>
          <div className="edit-container">
            <SectionLabel light number="01" title="The question" />
            <Reveal>
              <h2 className="font-display font-bold uppercase text-3xl md:text-6xl tracking-[-0.03em] leading-[0.95] max-w-5xl">
                What if the most important change is not what the eye looks like today?
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 mt-14 font-display text-xl md:text-2xl leading-snug tracking-tight">
              <Reveal>
                <p>
                  A photograph answers: <strong>What did this eye look like at this moment?</strong>
                </p>
                <p className="mt-6">
                  A longitudinal record asks a much more interesting question: <strong>What changed?</strong>
                </p>
                <p className="mt-6 text-[#536078]">That distinction sits at the centre of EyeHealthIntel.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#536078]">
                  Medicine has learned the value of longitudinal information almost everywhere else — heart
                  rhythm, blood pressure, glucose, sleep, weight, activity, laboratory values.
                </p>
                <p className="mt-6">Yet for most people, there is no persistent visual record of their eyes.</p>
                <p className="mt-6">The camera capable of beginning that record is already in billions of pockets.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 02 PHILOSOPHY */}
        <section className={paper}>
          <div className="edit-container">
            <SectionLabel light number="02" title="Philosophy" />
            <Reveal>
              <h2 className="font-display font-bold uppercase text-3xl md:text-6xl tracking-[-0.03em] leading-[0.95]">
                From the examination
                <br />
                to the continuum.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-12 gap-10 mt-14">
              <Reveal className="md:col-span-5">
                <div className="font-display text-xl md:text-2xl leading-snug space-y-2 text-[#536078]">
                  <p className="text-[#081426]">Healthcare is often episodic.</p>
                  <p>We seek help when something feels wrong.</p>
                  <p>A professional observes us for a moment.</p>
                  <p>The moment is documented.</p>
                  <p>Then life continues.</p>
                  <p className="pt-6 text-[#081426]">But biology does not operate in appointments. It changes continuously.</p>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-7">
                <p className="edit-body text-[#536078] text-lg">
                  The deeper idea behind EyeHealthIntel is therefore not simply “AI can analyse an eye
                  photograph.” It is:
                </p>
                <blockquote className="font-display font-bold text-2xl md:text-4xl tracking-tight leading-tight mt-6 border-l-2 border-[#7C633D] pl-6">
                  What becomes possible when a person can build a structured visual history of their eyes over years?
                </blockquote>
                <div className="mt-10 grid grid-cols-3 border-t border-[#081426]/15">
                  {[
                    ["1", "A single image may be ambiguous."],
                    ["10", "Comparable images may establish context."],
                    ["100s", "Observations across populations may generate research questions one snapshot never could."],
                  ].map(([n, t]) => (
                    <div key={n} className="pt-5 pr-4">
                      <span className="font-display font-bold text-3xl md:text-5xl tracking-tight">{n}</span>
                      <p className="text-sm text-[#536078] mt-3 leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="edit-body text-lg mt-10">
                  The invention is therefore as much about <strong>time, comparability, quality and provenance</strong>{" "}
                  as it is about artificial intelligence.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 BOUNDARY */}
        <section className="edit-section px-6 md:px-12">
          <div className="edit-container">
            <SectionLabel number="03" title="A deliberate boundary" />
            <Reveal>
              <h2 className="edit-display text-white">
                The phone is
                <br />
                not the <span className="edit-outline">doctor.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-12 mt-14">
              <Reveal>
                <p className="edit-body text-white/65 text-lg">
                  EyeHealthIntel is not based on the premise that a smartphone should replace ophthalmologists,
                  optometrists, retinal cameras, OCT, slit-lamp examination or clinical judgement.
                </p>
                <p className="font-display text-white text-2xl md:text-3xl tracking-tight leading-snug mt-8">
                  Can the device people already carry create better structured information before, between and
                  around professional encounters?
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="edit-label text-white/45 mb-4">That distinction shapes the architecture</p>
                <ul className="border-t border-white/10">
                  {boundary.map((b, i) => (
                    <li key={b} className="flex gap-5 py-4 border-b border-white/10 text-white/80">
                      <span className="edit-label text-[hsl(var(--accent-edit))]">{String(i + 1).padStart(2, "0")}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal>
              <blockquote className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight max-w-4xl mt-20">
                “Responsible intelligence must be allowed to say: <span className="text-[hsl(var(--accent-edit))]">I do not know.</span>”
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* 04 SYSTEM */}
        <section className={light}>
          <div className="edit-container">
            <SectionLabel light number="04" title="The system" />
            <Reveal>
              <h2 className="font-display font-bold uppercase text-3xl md:text-6xl tracking-[-0.03em] leading-[0.95]">
                Not an eye-scanning app.
                <br />
                An eye intelligence infrastructure.
              </h2>
            </Reveal>
            <ol className="mt-14 border-t border-[#081426]/15">
              {chain.map(([h, p], i) => (
                <Reveal key={h} delay={i * 0.04}>
                  <li className="grid grid-cols-12 gap-4 py-5 border-b border-[#081426]/15 items-baseline">
                    <span className="col-span-2 md:col-span-1 edit-label text-[#7C633D]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="col-span-10 md:col-span-4 font-display font-bold uppercase text-xl md:text-3xl tracking-tight">{h}</span>
                    <span className="col-span-12 md:col-span-7 edit-mono text-xs md:text-sm uppercase tracking-[0.12em] text-[#536078]">↓ {p}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="font-display font-bold text-2xl md:text-4xl tracking-tight mt-14 max-w-3xl">
                The defensible system is the chain, not a single AI prediction.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 05 MISSION */}
        <section className="edit-section px-6 md:px-12">
          <div className="edit-container">
            <SectionLabel number="05" title="Mission" />
            <Reveal>
              <h2 className="font-display font-bold uppercase text-white text-3xl md:text-6xl tracking-[-0.03em] leading-[0.95]">
                An eye record for anyone
                <br />
                who can reach a compatible camera.
              </h2>
            </Reveal>
            <Reveal>
              <blockquote className="font-display text-white/80 text-xl md:text-3xl tracking-tight leading-snug max-w-4xl mt-12 border-l-2 border-[hsl(var(--accent-edit))] pl-6">
                Our mission is to make longitudinal eye intelligence accessible, structured and useful — without
                lowering the standards of evidence required for healthcare.
              </blockquote>
            </Reveal>
            <div className="grid md:grid-cols-3 border-t border-white/10 mt-16">
              {pillars.map(([h, p]) => (
                <div key={h} className="py-8 md:pr-8 border-b md:border-b-0 border-white/10">
                  <span className="edit-label text-[hsl(var(--accent-edit))]">{h}</span>
                  <p className="text-white/70 mt-4 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
            <Reveal className="mt-20">
              <Link
                to={lp("/eyehealthintel/market-opportunity")}
                className="edit-label inline-block border border-[hsl(var(--accent-edit))] text-[hsl(var(--accent-edit))] px-6 py-4 hover:bg-[hsl(var(--accent-edit))] hover:text-[#081426] transition-colors"
              >
                Understand the global opportunity →
              </Link>
              <p className="edit-label text-white/40 mt-8 text-[10px] max-w-2xl leading-relaxed">
                Patent pending · Swedish application 2630671-2. EyeHealthIntel is consumer and pre-clinical
                infrastructure. It does not diagnose disease, and clinical functions are not released.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
};

export default EyeHealthIntelPage;
