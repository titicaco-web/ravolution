/**
 * TheCreatorApplySection — introduces TheCreator, the Founder Operating System,
 * on the /apply page. Mirrors the thecreator.ravolution.se sign-in showcase
 * (Brand Bible 3.0: Ink #081426, Navy #0F2747, Ivory #F7F5F0, Gold #B08D57,
 * Grey #9AA6B4). Approved pricing of 26 Nov 2026 only; no usage figures or
 * performance claims.
 */

import type { ApplyLanguage } from "./apply-copy";
import { formatApproxUsd, theCreatorApplyCopy } from "./thecreator-apply-copy";

const INK = "#081426";
const NAVY = "#0F2747";
const IVORY = "#F7F5F0";
const GOLD = "#B08D57";
const GREY = "#9AA6B4";

const mono = "font-mono text-[11px] uppercase tracking-[0.18em]";
const display = "font-['IBM_Plex_Sans',_sans-serif] font-[600] tracking-[-0.01em]";

export default function TheCreatorApplySection({ lang }: { lang: ApplyLanguage }) {
  const c = theCreatorApplyCopy[lang];

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
              <span className="inline-block h-px w-7 shrink-0" style={{ background: GOLD }} />
              {c.eyebrow}
            </p>
            <h2 id="thecreator-heading" className={`${display} text-3xl md:text-5xl mt-6 leading-[1.05]`}>
              {c.heading}
              <span className="block" style={{ color: GREY }}>{c.headingMuted}</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed" style={{ color: `${IVORY}CC` }}>
            {c.intro}
          </p>
        </div>

        {/* Lifecycle */}
        <div className="mt-16 border-t pt-6" style={{ borderColor: `${IVORY}1F` }}>
          <p className={mono} style={{ color: GOLD }}>
            {c.lifecycleExhibit} <span className="ml-3 normal-case tracking-normal text-[15px] font-semibold" style={{ color: IVORY }}>{c.lifecycleTitle}</span>
          </p>
          <ol className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-y-8">
            {c.stages.map((s, i) => (
              <li key={s.n} className="pr-4 min-w-0">
                <div className="flex items-center">
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center border font-mono text-[11px]"
                    style={{ borderColor: GOLD, color: GOLD, background: INK }}
                  >
                    {s.n}
                  </span>
                  {i < c.stages.length - 1 && (
                    <span className="hidden md:block h-px flex-1" style={{ background: `${GOLD}73` }} />
                  )}
                </div>
                <h3 className={`${display} text-base mt-3`}>{s.t}</h3>
                <p className="text-sm mt-1 leading-snug" style={{ color: GREY }}>{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 space-y-3">
            {c.parallelRows.map((row) => (
              <div
                key={row.title}
                className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border border-dashed px-4 py-3"
                style={{ borderColor: `${GOLD}80` }}
              >
                <span className={mono} style={{ color: GOLD }}>{c.parallelLabel}</span>
                <span className={`${display} text-base`}>{row.title}</span>
                <span className="text-sm min-w-0 flex-1 basis-64 leading-relaxed" style={{ color: GREY }}>
                  {row.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI advisory board */}
        <div className="mt-16 border-t pt-6" style={{ borderColor: `${IVORY}1F` }}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className={mono} style={{ color: GOLD }}>
              {c.advisoryExhibit} <span className="ml-3 normal-case tracking-normal text-[15px] font-semibold" style={{ color: IVORY }}>{c.advisoryTitle}</span>
            </p>
            <span className="border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ borderColor: `${GOLD}80`, color: GOLD }}>
              {c.advisoryTag}
            </span>
          </div>
          <div className="mt-6 grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-12 items-start">
            <p className={`${mono} leading-relaxed`} style={{ color: GREY }}>{c.advisoryRoles}</p>
            <div>
              <p className="text-base leading-relaxed" style={{ color: `${IVORY}CC` }}>{c.advisoryDescription}</p>
              <p className={`${display} text-xl md:text-2xl mt-4 leading-snug`} style={{ color: GOLD }}>{c.advisoryLine}</p>
            </div>
          </div>
        </div>

        {/* Engagement models */}
        <div className="mt-16 border-t pt-6" style={{ borderColor: `${IVORY}1F` }}>
          <p className={mono} style={{ color: GOLD }}>
            {c.engagementExhibit} <span className="ml-3 normal-case tracking-normal text-[15px] font-semibold" style={{ color: IVORY }}>{c.engagementTitle}</span>
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {c.models.map((m) => (
              <div
                key={m.name}
                className="flex min-w-0 flex-col border p-6"
                style={{
                  borderColor: m.featured ? GOLD : `${IVORY}26`,
                  background: m.featured ? NAVY : "transparent",
                }}
              >
                <p className={mono} style={{ color: m.featured ? GOLD : GREY }}>{m.name}</p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <p className={`${display} text-2xl leading-tight break-words`}>{m.price}</p>
                  {m.usdSek !== undefined && (
                    <span className="text-xs whitespace-nowrap" style={{ color: GREY }}>({formatApproxUsd(m.usdSek)})</span>
                  )}
                </div>
                {m.unit && <p className="text-sm mt-1" style={{ color: GREY }}>{m.unit}</p>}
                <ul className="mt-5 space-y-2 border-t pt-4" style={{ borderColor: `${IVORY}1F` }}>
                  {m.lines.map((line) => (
                    <li key={line} className="text-sm leading-relaxed break-words" style={{ color: `${IVORY}BF` }}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs leading-relaxed" style={{ color: GREY }}>
            <p>{c.footnote}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {c.legalLinks.map((link) => (
                <a key={link.href} href={link.href} className="underline underline-offset-4 transition-colors" style={{ color: GOLD }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
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
            {c.applyCta}
          </a>
          <a
            href="https://thecreator.ravolution.se/auth"
            className={`${mono} border-b`}
            style={{ color: GOLD, borderColor: GOLD }}
          >
            {c.loginCta}
          </a>
        </div>
      </div>
    </section>
  );
}
