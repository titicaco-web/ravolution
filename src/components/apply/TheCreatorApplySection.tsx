/**
 * TheCreatorApplySection — introduces TheCreator, the Founder Operating System,
 * on the /apply page. Mirrors the thecreator.ravolution.se sign-in showcase
 * (Brand Bible 3.0: Ink #081426, Navy #0F2747, Ivory #F7F5F0, Gold #B08D57,
 * Grey #9AA6B4). Approved pricing of 26 Nov 2026 only; no usage figures or
 * performance claims.
 */

const INK = "#081426";
const NAVY = "#0F2747";
const IVORY = "#F7F5F0";
const GOLD = "#B08D57";
const GREY = "#9AA6B4";

const mono = "font-mono text-[11px] uppercase tracking-[0.18em]";
const display = "font-['IBM_Plex_Sans',_sans-serif] font-[600] tracking-[-0.01em]";

const stages = [
  { n: "01", t: "Imagine", d: "Problem, market, hypotheses" },
  { n: "02", t: "Validate", d: "Interviews, demand, willingness to pay" },
  { n: "03", t: "Build", d: "Specification, UX, architecture, code" },
  { n: "04", t: "Launch", d: "Pricing, payments, sales, support" },
  { n: "05", t: "Grow", d: "Acquisition, retention, expansion" },
  { n: "06", t: "Scale", d: "Governance, compliance, profitability" },
];

const models = [
  {
    name: "Flex",
    price: "0 SEK",
    unit: "monthly minimum",
    lines: ["Managed Claude & ChatGPT, cost + 20%", "Full Founder Operating System", "Advisory 2,300 SEK/h, prepaid"],
  },
  {
    name: "Pro",
    price: "9,800 SEK",
    unit: "per month",
    lines: ["Managed AI at cost, own AI connections", "2 advisory hours included monthly", "Additional advisory 1,500 SEK/h"],
    featured: true,
  },
  {
    name: "Venture partnership",
    price: "Cash + equity",
    unit: "by agreement",
    lines: ["Ravolution co-builds the venture", "Individual approval by Ravolution", "Signed partnership agreement"],
  },
];

export default function TheCreatorApplySection() {
  return (
    <section
      id="thecreator"
      className="relative overflow-hidden py-24 px-6 md:px-12"
      style={{ background: INK, color: IVORY }}
      aria-labelledby="thecreator-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(247,245,240,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,245,240,0.035) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <p className={`${mono} flex items-center gap-3`} style={{ color: GOLD }}>
              <span className="inline-block h-px w-7" style={{ background: GOLD }} />
              TheCreator · The Founder Operating System
            </p>
            <h2 id="thecreator-heading" className={`${display} text-3xl md:text-5xl mt-6 leading-[1.05]`}>
              From idea to unicorn.
              <span className="block" style={{ color: GREY }}>One system for the whole venture.</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
            Every founder who applies can run the venture on TheCreator: strategy, product development,
            decisions, growth and fundraising in one evidence-based workspace. Operate it yourself, or build
            together with Ravolution — for cash, or cash plus equity.
          </p>
        </div>

        {/* Lifecycle */}
        <div className="mt-16 border-t pt-6" style={{ borderColor: `${IVORY}1F` }}>
          <p className={mono} style={{ color: GOLD }}>
            Exhibit 1 <span className="ml-3 normal-case tracking-normal text-[15px] font-semibold" style={{ color: IVORY }}>The venture lifecycle, gated by evidence</span>
          </p>
          <ol className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-y-8">
            {stages.map((s, i) => (
              <li key={s.n} className="pr-4">
                <div className="flex items-center">
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center border font-mono text-[11px]"
                    style={{ borderColor: GOLD, color: GOLD, background: INK }}
                  >
                    {s.n}
                  </span>
                  {i < stages.length - 1 && (
                    <span className="hidden md:block h-px flex-1" style={{ background: `${GOLD}73` }} />
                  )}
                </div>
                <h3 className={`${display} text-base mt-3`}>{s.t}</h3>
                <p className="text-sm mt-1 leading-snug" style={{ color: GREY }}>{s.d}</p>
              </li>
            ))}
          </ol>
          <div
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 border border-dashed px-4 py-3"
            style={{ borderColor: `${GOLD}80` }}
          >
            <span className={mono} style={{ color: GOLD }}>Parallel</span>
            <span className={`${display} text-base`}>Raise</span>
            <span className="text-sm" style={{ color: GREY }}>
              Financial model, investor memorandum, pitch deck, data room and due diligence, maintained continuously.
            </span>
          </div>
        </div>

        {/* Engagement models */}
        <div className="mt-16 border-t pt-6" style={{ borderColor: `${IVORY}1F` }}>
          <p className={mono} style={{ color: GOLD }}>
            Exhibit 2 <span className="ml-3 normal-case tracking-normal text-[15px] font-semibold" style={{ color: IVORY }}>Engagement models</span>
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {models.map((m) => (
              <div
                key={m.name}
                className="flex flex-col border p-6"
                style={{
                  borderColor: m.featured ? GOLD : `${IVORY}26`,
                  background: m.featured ? NAVY : "transparent",
                }}
              >
                <p className={mono} style={{ color: m.featured ? GOLD : GREY }}>{m.name}</p>
                <p className={`${display} text-2xl mt-3 leading-none`}>{m.price}</p>
                <p className="text-sm mt-1" style={{ color: GREY }}>{m.unit}</p>
                <ul className="mt-5 space-y-2 border-t pt-4" style={{ borderColor: `${IVORY}1F` }}>
                  {m.lines.map((l) => (
                    <li key={l} className="text-sm leading-snug" style={{ color: `${IVORY}BF` }}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed" style={{ color: GREY }}>
            Prices exclude VAT. Unused included advisory hours expire each billing period. Equity terms require
            individual approval and a signed agreement. AI advisory supports, and does not replace, qualified
            legal, financial or security professionals.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#form"
            className="inline-block px-8 py-4 text-sm md:text-base transition-colors"
            style={{ background: GOLD, color: INK }}
            onMouseEnter={(e) => { e.currentTarget.style.background = IVORY; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = GOLD; }}
          >
            Apply for TheCreator
          </a>
          <a
            href="https://thecreator.ravolution.se/auth"
            className={`${mono} border-b`}
            style={{ color: GOLD, borderColor: GOLD }}
          >
            Partner sign-in →
          </a>
        </div>
      </div>
    </section>
  );
}
