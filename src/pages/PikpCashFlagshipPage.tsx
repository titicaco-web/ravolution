import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { EditorialShell, Reveal } from "@/components/editorial/EditorialLayout";
import { SectionHead, TechGrid } from "@/components/lab/LabPrimitives";
import { useLangPath } from "@/hooks/use-lang-path";

const CONTACT_EMAIL = "ivan.daza@ravolution.se";

const strip = [
  { v: "0", l: "CV required to begin the pathway" },
  { v: "1st job", l: "Designed as an entry point to working life" },
  { v: "Live", l: "Coaching and learning inside the workday" },
  { v: "9 levels", l: "From simple to higher-value sales" },
];

const loops = [
  {
    n: "The old loop",
    h: "No job without experience. No experience without a job.",
    p: "Entry-level recruitment still filters on CVs, references, confidence and previous employment — precisely the assets many young applicants have not yet had a chance to build.",
  },
  {
    n: "The PikpCash loop",
    h: "Learn → sell → reflect → improve → unlock.",
    p: "Training and work happen in the same system. Instead of waiting until somebody is “job-ready”, PikpCash is designed to make readiness a measurable outcome of doing the job.",
  },
];

const context = [
  {
    tag: "EU · Jul 2026",
    v: "15.1%",
    l: "Youth unemployment rate",
    p: "Eurostat reported roughly 2.93 million unemployed people under 25 across the EU in July 2026.",
  },
  {
    tag: "Sweden · Jul 2026",
    v: "24.4%",
    l: "Youth unemployment rate",
    p: "The Swedish rate illustrates why a scalable first-job pathway matters even in a wealthy, highly digitised economy.",
  },
  {
    tag: "Global · 2024",
    v: "12.6%",
    l: "Youth unemployment",
    p: "ILO data show the youth employment problem remains global and highly uneven across regions and income levels.",
  },
];

const system = [
  {
    n: "Check in",
    h: "Every address can become a sales opportunity.",
    p: "Sellers work from a map, enter approved territories, see relevant offers and open an opportunity from the location itself rather than from static lead lists.",
  },
  {
    n: "Sell",
    h: "Real products. Real customers. Real feedback.",
    p: "The fastest route to sales competence is repeated real-world interaction. Every attempt creates behavioural and commercial evidence that feeds coaching.",
  },
  {
    n: "Learn",
    h: "The curriculum lives inside the job.",
    p: "Micro-lessons appear before a shift, before a product unlock, after a failed attempt or when performance data reveals a skill gap.",
  },
  {
    n: "Progress",
    h: "Better skills unlock better economics.",
    p: "A level system moves sellers from simple, lower-risk products toward complex, higher-value offers as knowledge, ratings and verified performance improve.",
  },
];

const curriculum = [
  { n: "01", t: "Prepare", d: "Product knowledge, ethics, safety and short scenario drills." },
  { n: "02", t: "Approach", d: "Opening, permission, body language and relevance." },
  { n: "03", t: "Discover", d: "Questions, listening and customer-needs identification." },
  { n: "04", t: "Present", d: "Value proposition, explanation and objection handling." },
  { n: "05", t: "Close", d: "Commitment, payment, documentation and expectations." },
  { n: "06", t: "Reflect", d: "Customer rating, self-review, coach feedback and next lesson." },
];

const rungs = [
  { lvl: "Level 01", t: "Foundation", p: "Onboarding, conduct, safety, product basics and supervised first conversations." },
  { lvl: "Level 02–03", t: "Conversation", p: "Opening, questioning, listening, product explanation and basic objection handling." },
  { lvl: "Level 04–05", t: "Conversion", p: "Consistent selling, customer satisfaction, documentation quality and target discipline." },
  { lvl: "Level 06–07", t: "Advanced selling", p: "Higher-value products, more complex needs, higher commissions and greater autonomy." },
  { lvl: "Level 08", t: "Coach", p: "Help new sellers improve, lead field sessions and turn experience into peer learning." },
  { lvl: "Level 09", t: "Team leader", p: "Verified track record, leadership responsibility and access to the strongest partner opportunities." },
];

const workgraph = [
  { k: "Communication", v: "83/100" },
  { k: "Customer satisfaction", v: "4.7/5" },
  { k: "Reliability", v: "96%" },
  { k: "Product knowledge", v: "91%" },
  { k: "Sales conversion", v: "14.2%" },
  { k: "Courses completed", v: "27" },
  { k: "Field experience", v: "186 h" },
  { k: "Verified interactions", v: "643" },
];

const economics = [
  { tag: "The seller", h: "Earn while learning", p: "Commission grows with skill level, product complexity, quality metrics and verified performance." },
  { tag: "The partner", h: "Variable-cost distribution", p: "Brands and retailers release part of their retail margin only when an order is generated, while gaining trained local sales capacity." },
  { tag: "PikpCash", h: "Platform economics", p: "PikpCash retains an agreed share of the available margin and can also be offered as white-label direct-sales infrastructure." },
];

const responsible = [
  { n: "01", t: "Fair economics", p: "Transparent commission rules, payment timing, returns and chargebacks — and no hidden costs to the seller." },
  { n: "02", t: "Safety by design", p: "Territory controls, check-in and check-out, age-appropriate rules, incident workflows and clear boundaries for home visits." },
  { n: "03", t: "Ethical selling", p: "No deceptive urgency, no exploitation of vulnerable customers and no product categories inappropriate for young sellers." },
  { n: "04", t: "Portable achievement", p: "Skills and verified results become a shareable employment credential rather than disappearing when someone leaves the platform." },
];

const deployment = [
  { n: "Municipalities / job programmes", h: "A paid route into working life.", p: "Recruit cohorts, combine work with structured competence development, follow progress and measure movement into sustained employment." },
  { n: "Schools / vocational programmes", h: "Real-world sales practicum.", p: "Connect entrepreneurship and commercial education to actual customer interactions, reflection and measurable progression." },
  { n: "Brands / retailers", h: "Distributed last-mile sales.", p: "Launch approved product campaigns into specific territories without building a fixed national field-sales organisation." },
  { n: "Young people", h: "A place to prove yourself.", p: "Start with willingness rather than a perfect CV; leave with income, customer experience, training history, references and demonstrable skills." },
];

const successMetrics = [
  { tag: "Access", h: "Time to first paid work", p: "How quickly can an approved new seller move from signup to a legitimate earning opportunity?" },
  { tag: "Learning", h: "Verified skill growth", p: "Which sales, communication, service and work-readiness competencies improve — and by how much?" },
  { tag: "Mobility", h: "What happens next?", p: "Progression into sustained work, further education, team leadership, partner employment or entrepreneurship." },
];

const PikpCashFlagshipPage = () => {
  const lp = useLangPath();

  return (
    <>
      <Helmet>
        <title>PikpCash® — First-Job Infrastructure | Ravolution AB</title>
        <meta
          name="description"
          content="PikpCash® turns direct sales into first-job infrastructure: paid work, live coaching, an embedded curriculum, verified skills and level-based progression for young people with no experience."
        />
        <link rel="canonical" href="https://ravolution.se/en/pikpcash" />
        <meta property="og:title" content="PikpCash® — First-Job Infrastructure | Ravolution AB" />
        <meta
          property="og:description"
          content="Make “no experience” a temporary condition — not a barrier to work. PikpCash® combines paid work, live education, verified experience and career progression."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/pikpcash" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PikpCash",
            applicationCategory: "BusinessApplication",
            description:
              "First-job infrastructure combining paid direct-sales work, a live curriculum, verified skills and nine-level employment progression.",
            url: "https://ravolution.se/en/pikpcash",
            author: { "@type": "Organization", name: "Ravolution AB", url: "https://ravolution.se" },
          })}
        </script>
      </Helmet>

      <EditorialShell>
        {/* HERO */}
        <section className="relative pt-40 pb-20 px-6 md:px-12 min-h-[78vh] flex flex-col justify-end overflow-hidden">
          <TechGrid />
          <div className="edit-container relative z-10">
            <Reveal>
              <span className="edit-label inline-flex items-center gap-3 border border-[hsl(var(--accent-edit))]/40 text-[hsl(var(--accent-edit))] px-3 py-2">
                <i className="w-[7px] h-[7px] rounded-full bg-[hsl(var(--accent-edit))]" />
                Flagship · Opportunity / youth employment
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="edit-label text-white/45 mt-8">
                PikpCash® · direct sales · live learning · first-job infrastructure
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h1 className="edit-display text-white mt-5">
                NO EXPERIENCE?
                <br />
                <span className="text-[hsl(var(--accent-edit))]">START HERE.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="edit-body text-white/65 mt-8 max-w-3xl">
                PikpCash turns selling into an accessible first job: real customers, real products,
                real income, live coaching and a curriculum that develops while you work. The
                moonshot is simple — make “no experience” stop being a barrier to employment.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#mission"
                  className="edit-label inline-flex items-center gap-3 bg-[hsl(var(--accent-edit))] text-white px-6 py-4 hover:bg-white hover:text-black transition-colors"
                >
                  The mission ↓
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=PikpCash%20pilot`}
                  className="edit-label inline-flex items-center gap-3 border border-white/25 text-white px-6 py-4 hover:border-[hsl(var(--accent-edit))] transition-colors"
                >
                  Deploy PikpCash ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STRIP */}
        <div className="border-y border-white/10 grid grid-cols-2 md:grid-cols-4">
          {strip.map((s) => (
            <div key={s.l} className="p-8 border-r last:border-r-0 border-white/10">
              <div className="font-display font-bold text-3xl md:text-4xl text-white">{s.v}</div>
              <div className="edit-label text-white/45 mt-3">{s.l}</div>
            </div>
          ))}
        </div>

        {/* 01 MISSION */}
        <section id="mission" className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="01 / The mission"
              title="TURN THE FIRST JOB INTO INFRASTRUCTURE."
              intro="Young people are asked for experience before anyone has given them a place to acquire it. PikpCash collapses that contradiction: the work creates the experience, the curriculum explains the work, and progress unlocks better opportunities."
            />
            <div className="grid md:grid-cols-2 gap-10">
              {loops.map((b, i) => (
                <Reveal key={b.n} delay={i * 0.08}>
                  <div className="border-t border-white/10 pt-8">
                    <div className="edit-label text-[hsl(var(--accent-edit))]">{b.n}</div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mt-4 leading-tight">{b.h}</h3>
                    <p className="text-white/60 leading-relaxed mt-4">{b.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 02 WHY NOW */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="02 / Why now"
              title="A LARGE LABOUR-MARKET PROBLEM HIDING IN PLAIN SIGHT."
              intro="Youth unemployment remains materially above overall unemployment in Europe, and Sweden is one of the countries where the gap is especially visible."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {context.map((c, i) => (
                <Reveal key={c.tag} delay={i * 0.08}>
                  <div className="border border-white/10 p-8 h-full">
                    <div className="edit-label text-[hsl(var(--accent-edit))]">{c.tag}</div>
                    <div className="font-display font-bold text-5xl md:text-6xl text-white mt-6 tracking-[-0.04em]">
                      {c.v}
                    </div>
                    <div className="edit-label text-white/45 mt-3">{c.l}</div>
                    <p className="text-sm text-white/55 leading-relaxed mt-5">{c.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="edit-label text-white/40 mt-8 max-w-3xl leading-relaxed">
              Sources for context: Eurostat unemployment release, July 2026; ILO World Employment and
              Social Outlook: Trends 2025. These statistics describe the problem space, not a
              demonstrated PikpCash outcome.
            </p>
          </div>
        </section>

        {/* 03 SYSTEM */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="03 / The system"
              title="THE MAP BECOMES THE MARKET."
              intro="Location-based selling, structured progression, partner inventory, live learning and verified performance in one operating system for first-job sales."
            />
            <div className="grid md:grid-cols-2 gap-10">
              {system.map((b, i) => (
                <Reveal key={b.n} delay={i * 0.06}>
                  <div className="border-t border-white/10 pt-8">
                    <div className="edit-label text-[hsl(var(--accent-edit))]">{b.n}</div>
                    <h3 className="font-display font-bold text-2xl text-white mt-4 leading-tight">{b.h}</h3>
                    <p className="text-white/60 leading-relaxed mt-4">{b.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 LIVE CURRICULUM */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="04 / The live curriculum"
              title="DON'T TRAIN FOR THE JOB. TRAIN INSIDE THE JOB."
              intro="The differentiator is far bigger than gamification: a continuous competency engine where every customer interaction changes what the seller learns next."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t border-white/10">
              {curriculum.map((c) => (
                <div key={c.n} className="p-6 border-b lg:border-b-0 border-r last:border-r-0 border-white/10 min-h-[180px]">
                  <span className="edit-label text-[hsl(var(--accent-edit))]">{c.n}</span>
                  <div className="font-display font-bold text-xl text-white mt-8">{c.t}</div>
                  <p className="text-sm text-white/55 leading-relaxed mt-2">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 PROGRESSION */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="05 / Progression"
              title="A CV BUILT BY DOING THE WORK."
              intro="The nine-level ladder is a portable employment record: not points, but evidence of skills, reliability, learning and commercial results."
            />
            <div>
              {rungs.map((r, i) => (
                <Reveal key={r.lvl} delay={i * 0.04}>
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-7 border-t border-white/10 last:border-b items-baseline">
                    <span className="md:col-span-2 edit-label text-[hsl(var(--accent-edit))]">{r.lvl}</span>
                    <h3 className="md:col-span-4 font-display font-bold text-2xl text-white">{r.t}</h3>
                    <p className="md:col-span-6 text-white/55 leading-relaxed">{r.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 06 WORKGRAPH */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="06 / The credential"
              title="PIKPCASH WORKGRAPH™ — PROOF INSTEAD OF ADJECTIVES."
              intro="Instead of a CV claiming “good communication skills”, the WorkGraph records what actually happened. Figures below are an illustrative example of the record structure, not reported results."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10">
              {workgraph.map((w) => (
                <div key={w.k} className="p-6 border-b border-r border-white/10">
                  <div className="edit-label text-white/45">{w.k}</div>
                  <div className="font-display font-bold text-3xl text-white mt-3">{w.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 ECONOMICS */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="07 / Economics"
              title="ONE SALE. THREE WINNERS."
              intro="The model works only if the seller, the commercial partner and PikpCash all have a clear reason to participate."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {economics.map((c, i) => (
                <Reveal key={c.tag} delay={i * 0.08}>
                  <div className="border border-white/10 p-8 h-full">
                    <div className="edit-label text-[hsl(var(--accent-edit))]">{c.tag}</div>
                    <h3 className="font-display font-bold text-2xl text-white mt-6">{c.h}</h3>
                    <p className="text-white/55 leading-relaxed mt-4">{c.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 08 RESPONSIBLE DESIGN */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="08 / Responsible design"
              title="IF IT IS FIRST-JOB INFRASTRUCTURE, TRUST MUST BE BUILT IN."
              intro="PikpCash is not designed to create more aggressive salespeople. It is designed to create better first employees."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
              {responsible.map((r) => (
                <div key={r.n} className="p-7 border-b border-r border-white/10">
                  <div className="edit-label text-[hsl(var(--accent-edit))]">{r.n}</div>
                  <h3 className="font-display font-bold text-xl text-white mt-8">{r.t}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mt-3">{r.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09 DEPLOYMENT */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="09 / Deployment"
              title="FROM SALES APP TO YOUTH-EMPLOYMENT PROGRAMME."
              intro="The most interesting buyer may not only be the retailer. PikpCash can be deployed as infrastructure connecting employers, schools, municipalities, youth programmes and consumer brands."
            />
            <div className="grid md:grid-cols-2 gap-10">
              {deployment.map((b, i) => (
                <Reveal key={b.n} delay={i * 0.06}>
                  <div className="border-t border-white/10 pt-8">
                    <div className="edit-label text-[hsl(var(--accent-edit))]">{b.n}</div>
                    <h3 className="font-display font-bold text-2xl text-white mt-4">{b.h}</h3>
                    <p className="text-white/60 leading-relaxed mt-4">{b.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10 SUCCESS */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="10 / What success means"
              title="MEASURE JOBS, NOT DOWNLOADS."
              intro="If PikpCash claims a social mission, its primary evidence should be labour-market outcomes — not app engagement."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {successMetrics.map((c, i) => (
                <Reveal key={c.tag} delay={i * 0.08}>
                  <div className="border border-white/10 p-8 h-full">
                    <div className="edit-label text-[hsl(var(--accent-edit))]">{c.tag}</div>
                    <h3 className="font-display font-bold text-2xl text-white mt-6">{c.h}</h3>
                    <p className="text-white/55 leading-relaxed mt-4">{c.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MOONSHOT */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <Reveal>
              <div className="border border-white/10 p-10 md:p-16">
                <div className="edit-label text-[hsl(var(--accent-edit))]">The PikpCash moonshot</div>
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-[-0.03em] mt-6 leading-[1.05]">
                  Make “no experience” a temporary condition — not a barrier to work.
                </h2>
                <p className="text-white/60 leading-relaxed mt-6 max-w-3xl">
                  PikpCash does not promise that one platform can single-handedly end youth
                  unemployment. Its ambition is to create scalable first-job infrastructure that
                  governments, schools and companies can use to give young people paid experience,
                  live education and a verifiable path forward.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=PikpCash%20pilot`}
                    className="edit-label inline-flex items-center gap-3 bg-[hsl(var(--accent-edit))] text-white px-6 py-4 hover:bg-white hover:text-black transition-colors"
                  >
                    Explore a PikpCash pilot ↗
                  </a>
                  <Link
                    to={lp("/invest")}
                    className="edit-label inline-flex items-center gap-3 border border-white/25 text-white px-6 py-4 hover:border-[hsl(var(--accent-edit))] transition-colors"
                  >
                    Investor / strategic briefing ↗
                  </Link>
                  <Link
                    to={lp("/pikpcash/system")}
                    className="edit-label inline-flex items-center gap-3 border border-white/25 text-white px-6 py-4 hover:border-[hsl(var(--accent-edit))] transition-colors"
                  >
                    Restricted system detail ↗
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default PikpCashFlagshipPage;
