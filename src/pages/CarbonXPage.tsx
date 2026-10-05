import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import carbonxHeroVideo from "@/assets/carbonx-hero.mp4.asset.json";

const sections = [
  {
    n: "01",
    t: "The philosophical perspective",
    p: "Carbon is the element of life — the backbone of every living thing, the currency of the biosphere long before it became the currency of markets. The crisis was never carbon itself, but its displacement: too much of it moved, too fast, from where it was held to where it does harm. Seen this way, the work is not to wage war on an element, but to help return it to balance — stewardship rather than conquest. Markets are one of the instruments available to us for that work. They are a means, never the meaning.",
  },
  {
    n: "02",
    t: "The long-term health perspective",
    p: "The health of the planet and the health of those who will inherit it are the same question asked across time. The air a child breathes a century from now is being shaped by the choices made in this one. To take carbon seriously is to take seriously the generations who have no seat at the table — to act as ancestors worth remembering. This is not a matter of quarterly targets but of long horizons: the patient work of leaving the world in better balance than we found it.",
  },
  {
    n: "03",
    t: "Why CarbonX",
    p: "It is in this light that CarbonX exists. A marketplace is only as good as the trust it carries, and in carbon that trust has too often been the missing element. CarbonX is built on the conviction that quality, verifiability and integrity are not features but foundations — that the right trade, honestly made, turns conviction into consequence. It does not ask the market to believe in good intentions. It asks the market to be able to prove them.",
  },
];

const CarbonXPage = () => (
  <EditorialShell>
    <main>
      <section className="relative min-h-[85vh] flex items-end px-6 md:px-12 pt-32 pb-20 overflow-hidden">
        <video
          src={carbonxHeroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081426]/55 via-[#081426]/25 to-[#081426]/85 pointer-events-none" />
        <div className="edit-container relative w-full">
          <Reveal>
            <span className="edit-label text-[hsl(var(--accent-edit))]">CarbonX · A reflection</span>
            <h1 className="font-display font-bold text-white tracking-tight text-5xl md:text-8xl leading-[0.95] mt-8 max-w-5xl">
              Carbon is not the enemy.
              <br />
              <span className="text-white/55">Imbalance is.</span>
            </h1>
            <p className="edit-body text-white/65 text-lg max-w-2xl mt-10">
              The element of life, returned to balance — a project we believe in and contribute to.
            </p>
          </Reveal>
        </div>
      </section>

      {sections.map((s) => (
        <section key={s.n} className="edit-section px-6 md:px-12 bg-[#f7f5f0] text-[#081426] even:bg-[#eeece6]">
          <div className="edit-container">
            <SectionLabel light number={s.n} title={s.t} />
            <Reveal>
              <p className="font-display text-xl md:text-3xl leading-snug tracking-tight max-w-4xl text-[#081426]">
                {s.p}
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="edit-section px-6 md:px-12">
        <div className="edit-container">
          <Reveal>
            <span className="edit-label text-white/45">04 — An invitation</span>
            <p className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight leading-tight max-w-4xl mt-8">
              If you move carbon for a living — as an emitter, a trader, a developer, a steward of standards — the invitation is the same: to help move it well.
            </p>
            <a
              href="https://carbonx.se"
              target="_blank"
              rel="noopener noreferrer"
              className="edit-label inline-block mt-12 border border-[hsl(var(--accent-edit))] text-[hsl(var(--accent-edit))] px-6 py-4 hover:bg-[hsl(var(--accent-edit))] hover:text-[#081426] transition-colors"
            >
              See the project — carbonx.se ↗
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  </EditorialShell>
);

export default CarbonXPage;
