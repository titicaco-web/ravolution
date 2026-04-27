import { Linkedin, Mail } from "lucide-react";
import ivanPhoto from "@/assets/ivan-daza.jpg";
import { Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const FounderBlock = () => {
  return (
    <section className="edit-section border-t border-white/10">
      <div className="edit-container">
        <SectionLabel number="·" title="Who You'll Work With" />
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5" zoom>
            <div className="aspect-[3/4] max-w-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={ivanPhoto}
                alt="Ivan Daza — Founder & CEO, Ravolution AB"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="md:col-span-7 space-y-6">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">Founder · Inventor</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-tight">Ivan Daza</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="edit-label text-white/55">Founder & CEO, Ravolution AB</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="edit-body text-white/65">
                Serial entrepreneur and inventor with 27 patents across education, recruitment, AI, and trade.
                Builds complex platforms end-to-end — from architecture to patent protection. Based in Stockholm,
                operating globally in English, Swedish, and Spanish.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                {["27 Patents", "343 Claims", "10+ Platforms", "6 Industries"].map((s) => (
                  <span key={s} className="edit-label text-white/70 px-4 py-2 border border-white/15">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex gap-6 pt-2">
                <a
                  href="https://www.linkedin.com/in/ivandaza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-[hsl(var(--accent-edit))] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ivan.daza@ravolution.se"
                  className="text-white/55 hover:text-[hsl(var(--accent-edit))] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBlock;
