import { ReactNode, useEffect, useRef } from "react";
import { Reveal } from "@/components/editorial/EditorialLayout";

/* ───────── Animated network canvas (hero backdrop) ───────── */
export const NetworkCanvas = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const labels = ["LEARN", "LANGUAGE", "TRUST", "TRADE", "HEALTH", "SAFETY", "WORK", "FRONTIER"];
    let W = 0;
    let H = 0;
    let raf = 0;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number; label: string | null }[] = [];

    const resize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(28, Math.floor(W / 45));
      nodes = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.7 + 0.7,
        label: i < labels.length ? labels[i] : null,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 170) {
            ctx.strokeStyle = `rgba(176,141,87,${(1 - d / 170) * 0.16})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.label ? "rgba(176,141,87,.9)" : "rgba(247,245,240,.34)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + (n.label ? 1.4 : 0), 0, Math.PI * 2);
        ctx.fill();
        if (n.label) {
          ctx.font = "9px monospace";
          ctx.fillStyle = "rgba(247,245,240,.5)";
          ctx.fillText(n.label, n.x + 9, n.y + 3);
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`absolute inset-0 w-full h-full ${className}`} />;
};

/* ───────── Fine technical grid overlay ───────── */
export const TechGrid = ({ opacity = 0.05 }: { opacity?: number }) => (
  <div
    aria-hidden
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity,
      backgroundImage: `linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)`,
      backgroundSize: "56px 56px",
    }}
  />
);

/* ───────── Section head: kicker + h2 + intro ───────── */
export const SectionHead = ({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: ReactNode;
  intro?: string;
}) => (
  <Reveal className="mb-12 md:mb-20 grid md:grid-cols-12 gap-6 border-t border-white/10 pt-6">
    <span className="edit-label text-[hsl(var(--accent-edit))] md:col-span-3">{kicker}</span>
    <div className="md:col-span-9">
      <h2 className="edit-h2 text-white">{title}</h2>
      {intro && <p className="edit-body text-white/60 mt-6 max-w-3xl">{intro}</p>}
    </div>
  </Reveal>
);

/* ───────── Mission panel ───────── */
export type Mission = {
  num: string;
  name: string;
  question: string;
  body: string;
  systems: string[];
};

export const MissionPanel = ({ mission, delay = 0 }: { mission: Mission; delay?: number }) => (
  <Reveal delay={delay}>
    <article className="group relative h-full border border-white/10 p-7 md:p-9 flex flex-col min-h-[360px] transition-colors hover:border-[hsl(var(--accent-edit))]">
      <span className="edit-label text-white/40">
        MISSION {mission.num} · {mission.name}
      </span>
      <h3 className="text-xl md:text-2xl font-display text-white mt-6 leading-snug">
        {mission.question}
      </h3>
      <p className="text-sm text-white/55 leading-relaxed mt-5">{mission.body}</p>
      <div className="mt-auto pt-8 flex flex-wrap gap-2">
        {mission.systems.map((s) => (
          <span key={s} className="edit-label text-white/70 border border-white/15 px-3 py-1 text-[10px]">
            {s}
          </span>
        ))}
      </div>
    </article>
  </Reveal>
);

/* ───────── System map ───────── */
export const SystemMap = ({
  nodes,
}: {
  nodes: { title: string; systems: string; pos: string }[];
}) => (
  <Reveal className="relative border border-white/10 min-h-[620px] md:min-h-[560px] overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 760"
      preserveAspectRatio="none"
      aria-hidden
    >
      <g stroke="rgba(176,141,87,.32)" strokeWidth="1" fill="none">
        <path d="M600 380 L200 130" />
        <path d="M600 380 L1000 130" />
        <path d="M600 380 L160 640" />
        <path d="M600 380 L1040 640" />
        <path d="M600 380 L600 90" />
        <path d="M600 380 L600 690" />
      </g>
    </svg>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[190px] md:h-[190px] rounded-full border border-[hsl(var(--accent-edit))]/50 flex items-center justify-center text-center bg-[hsl(var(--bg))]">
      <div>
        <span className="edit-label text-[hsl(var(--accent-edit))] block text-[10px]">RAV / CORE</span>
        <b className="font-display text-white text-lg md:text-xl block mt-2 leading-tight">
          HUMAN
          <br />
          PROGRESS
        </b>
      </div>
    </div>
    {nodes.map((n) => (
      <div
        key={n.title}
        className={`absolute w-[36%] md:w-[210px] border border-white/12 bg-[hsl(var(--bg))]/85 backdrop-blur-sm p-3 md:p-4 ${n.pos}`}
      >
        <b className="text-white font-display text-sm md:text-base block">{n.title}</b>
        <small className="edit-label text-white/50 text-[9px] block mt-1 leading-relaxed">{n.systems}</small>
      </div>
    ))}
  </Reveal>
);

/* ───────── Stealth panel ───────── */
export const StealthPanel = ({
  title,
  body,
  ctaLabel,
  ctaHref,
  redacted,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  redacted: string[];
}) => (
  <Reveal className="relative border border-white/10 overflow-hidden">
    <TechGrid opacity={0.06} />
    <div className="relative grid md:grid-cols-2">
      <div className="p-8 md:p-12 space-y-4 border-b md:border-b-0 md:border-r border-white/10">
        {redacted.map((r) => (
          <div key={r} className="edit-label text-white/35 text-[11px]">
            {r}
          </div>
        ))}
      </div>
      <div className="p-8 md:p-12">
        <span className="edit-label text-[hsl(var(--accent-edit))]">R / S</span>
        <h3 className="edit-h3 text-white mt-4 text-2xl md:text-3xl font-display">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-md">{body}</p>
        <a
          href={ctaHref}
          className="inline-block mt-8 edit-label border border-white/30 px-5 py-3 text-white hover:bg-white hover:text-black transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  </Reveal>
);
