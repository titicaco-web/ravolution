import { Link } from "@/lib/router-compat";
import MetadataMachine from "@/components/MetadataMachine";
import { useLangPath } from "@/hooks/use-lang-path";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { NUMEROLOGY_TOPICS, type NumerologyTopic } from "@/content/numerology-topics";

const NumerologyTopicPage = ({ topic }: { topic: NumerologyTopic }) => {
  const lp = useLangPath();
  const others = NUMEROLOGY_TOPICS.filter((t) => t.slug !== topic.slug);
  return (
    <EditorialShell>
      <section className="relative pt-40 pb-16 px-6 md:px-12 min-h-[45vh] flex flex-col justify-end">
        <div className="edit-container">
          <Reveal><span className="edit-label text-[hsl(var(--accent-edit))]">Free Tool · Metadata Machine</span></Reveal>
          <Reveal delay={0.1}><h1 className="edit-display text-white mt-6">{topic.h1}</h1></Reveal>
          <Reveal delay={0.2}><p className="edit-body text-white/70 mt-8 max-w-2xl">{topic.intro}</p></Reveal>
        </div>
      </section>

      <section className="edit-section border-t border-white/10">
        <div className="edit-container">
          <SectionLabel number="01 — Calculator" title={topic.toolTitle} />
          <MetadataMachine />
        </div>
      </section>

      <section className="edit-section border-t border-white/10">
        <div className="edit-container max-w-3xl">
          <SectionLabel number="02 — Guide" title={topic.guideTitle} />
          <div className="space-y-8">
            {topic.sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl md:text-2xl font-display text-white mb-3">{s.h}</h2>
                <p className="edit-body text-white/70">{s.p}</p>
              </div>
            ))}
          </div>
          <h2 className="text-xl md:text-2xl font-display text-white mt-14 mb-6">Frequently asked questions</h2>
          <dl className="space-y-6">
            {topic.faq.map((f) => (
              <div key={f.q} className="border-t border-white/10 pt-4">
                <dt className="text-white font-medium">{f.q}</dt>
                <dd className="text-white/65 mt-2 text-sm leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="edit-section border-t border-white/10">
        <div className="edit-container">
          <SectionLabel number="03 — More" title="Related readings" />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ slug: "metadatamachine", h1: "The Metadata Machine" }, ...others].map((t) => (
              <li key={t.slug}>
                <Link to={lp(`/${t.slug}`)} className="block border border-white/10 hover:border-[hsl(var(--accent-edit))] p-6 h-full edit-label text-[hsl(var(--accent-edit))]">
                  {t.h1} →
                </Link>
              </li>
            ))}
          </ul>
          <p className="edit-mono text-xs text-white/50 mt-12">
            Built by Ravolution AB, the Swedish invention company behind 28 patents —{" "}
            <Link to={lp("/story")} className="underline hover:text-white">read the story</Link> ·{" "}
            <Link to={lp("/portfolio")} className="underline hover:text-white">see the portfolio</Link>
          </p>
        </div>
      </section>
    </EditorialShell>
  );
};

export default NumerologyTopicPage;
