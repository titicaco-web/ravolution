import { EditorialShell } from "@/components/editorial/EditorialLayout";
import TheCreatorApplySection from "@/components/apply/TheCreatorApplySection";
import type { ApplyLanguage } from "@/components/apply/apply-copy";
import { THECREATOR_LOGIN_URL, theCreatorPageCopy } from "@/components/thecreator/thecreator-page-copy";

const INK = "#081426";
const NAVY = "#0F2747";
const IVORY = "#F7F5F0";
const GOLD = "#B08D57";
const GOLD_DARK = "#7C633D";
const GREY = "#9AA6B4";

const mono = "font-mono text-[11px] uppercase tracking-[0.18em]";
const display = "font-['Inter_Tight',_sans-serif] font-[600] tracking-[-0.02em]";

export default function TheCreatorPage({ lang }: { lang: ApplyLanguage }) {
  const c = theCreatorPageCopy[lang];
  const applyHref = `/${lang}/apply#thecreator`;

  return (
    <EditorialShell>
      <main>
        {/* Hero — H1 + answer-first summary */}
        <section className="pt-32 pb-20 px-6 md:px-12" style={{ background: NAVY, color: IVORY }}>
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Breadcrumb" className={`${mono} mb-8`} style={{ color: GOLD }}>
              <a href={`/${lang}`} className="border-b" style={{ borderColor: GOLD }}>{c.breadcrumbHome}</a>
              <span className="mx-2" aria-hidden>/</span>
              <span>TheCreator</span>
            </nav>
            <p className={`${mono} flex items-center gap-3`} style={{ color: GOLD }}>
              <span className="inline-block h-px w-7 shrink-0" style={{ background: GOLD }} />
              {c.eyebrow}
            </p>
            <h1 className={`${display} text-4xl md:text-6xl lg:text-7xl leading-[1.05] mt-6 max-w-4xl`} style={{ color: IVORY }}>
              {c.h1}
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: `${IVORY}E6` }}>
              {c.answer}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={applyHref} className="inline-block px-8 py-4 text-sm md:text-base" style={{ background: GOLD, color: INK }}>
                {c.applyCta}
              </a>
              <a href={THECREATOR_LOGIN_URL} className={`${mono} border-b`} style={{ color: GOLD, borderColor: GOLD }}>
                {c.loginCta}
              </a>
            </div>
          </div>
        </section>

        {/* Lifecycle, AI advisory board, engagement models (shared with /apply) */}
        <TheCreatorApplySection lang={lang} applyHref={applyHref} />

        {/* Evidence + onboarding */}
        <section className="py-20 px-6 md:px-12" style={{ background: NAVY, color: IVORY }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="min-w-0">
              <p className={mono} style={{ color: GOLD }}>{c.evidenceLabel}</p>
              <h2 className={`${display} text-3xl md:text-4xl mt-4`}>{c.evidenceTitle}</h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: `${IVORY}D9` }}>{c.evidenceBody}</p>
            </div>
            <div className="min-w-0">
              <p className={mono} style={{ color: GOLD }}>{c.onboardingLabel}</p>
              <h2 className={`${display} text-3xl md:text-4xl mt-4`}>{c.onboardingTitle}</h2>
              <ul className="mt-5 space-y-4">
                {c.onboardingOptions.map((o) => (
                  <li key={o.t} className="border-l-2 pl-4" style={{ borderColor: GOLD }}>
                    <h3 className={`${display} text-lg`}>{o.t}</h3>
                    <p className="text-sm mt-1 leading-relaxed" style={{ color: GREY }}>{o.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 px-6 md:px-12" style={{ background: IVORY, color: INK }}>
          <div className="max-w-6xl mx-auto">
            <p className={mono} style={{ color: GOLD_DARK }}>{c.whoLabel}</p>
            <h2 className={`${display} text-3xl md:text-5xl mt-4 max-w-3xl`} style={{ color: NAVY }}>{c.whoTitle}</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 border-t" style={{ borderColor: `${INK}26` }}>
              {c.who.map((w, i) => (
                <div key={w.t} className="pt-6 pr-6 pb-6 min-w-0">
                  <span className="font-mono text-xs" style={{ color: GOLD_DARK }}>0{i + 1}</span>
                  <h3 className={`${display} text-xl mt-2`} style={{ color: NAVY }}>{w.t}</h3>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: `${INK}CC` }}>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — mirrors the FAQPage JSON-LD */}
        <section className="py-20 px-6 md:px-12 border-t" style={{ background: IVORY, color: INK, borderColor: `${INK}1A` }}>
          <div className="max-w-4xl mx-auto">
            <p className={mono} style={{ color: GOLD_DARK }}>{c.faqLabel}</p>
            <h2 className={`${display} text-3xl md:text-5xl mt-4`} style={{ color: NAVY }}>{c.faqTitle}</h2>
            <div className="mt-10 divide-y" style={{ borderColor: `${INK}1A` }}>
              {c.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className={`${display} text-lg md:text-xl`} style={{ color: NAVY }}>{f.q}</h3>
                  <p className="mt-3 text-base leading-relaxed" style={{ color: `${INK}D9` }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 px-6 md:px-12" style={{ background: INK, color: IVORY }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`${display} text-3xl md:text-5xl`}>{c.closingTitle}</h2>
            <p className="mt-4 text-base" style={{ color: GREY }}>{c.closingBody}</p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
              <a href={applyHref} className="inline-block px-8 py-4 text-sm md:text-base" style={{ background: GOLD, color: INK }}>
                {c.applyCta}
              </a>
              <a href={THECREATOR_LOGIN_URL} className={`${mono} border-b`} style={{ color: GOLD, borderColor: GOLD }}>
                {c.loginCta}
              </a>
            </div>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
