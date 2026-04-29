import { useEffect, useRef } from "react";

/**
 * Animated particle mesh background.
 * Absolutely positioned canvas with z-index 0, pointer-events: none.
 * Respects prefers-reduced-motion.
 */
const ParticleMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    // Skip on small screens for perf
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const NODE_COUNT = 115;
    const MAX_DIST = 170;
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.42,
          vy: (Math.random() - 0.5) * 0.42,
        });
      }
    };

    resize();
    init();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    let raf = 0;
    let running = true;

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        // mouse attraction
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < 100) {
            n.x += dx * 0.02;
            n.y += dy * 0.02;
          }
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "36 38% 40%";
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.shadowColor = `hsl(${accent} / 0.5)`;
      ctx.shadowBlur = 5;

      // lines
      ctx.lineWidth = 1.15;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            const alpha = 0.92 * (1 - d / MAX_DIST);
            ctx.strokeStyle = `hsl(${accent} / ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.fillStyle = `hsl(${accent} / 1)`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="absolute inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 1 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 72% 58%, hsl(var(--accent) / 0.22), transparent 34%), radial-gradient(circle at 18% 28%, hsl(var(--accent) / 0.12), transparent 26%)`,
        }}
      />
      <svg
        className="particle-mesh-fallback absolute inset-0 h-full w-full"
        viewBox="0 0 1460 853"
        preserveAspectRatio="none"
        focusable="false"
      >
        <g className="particle-mesh-drift" fill="none" stroke="hsl(var(--accent) / 0.5)" strokeWidth="1.1">
          <path d="M0 438L40 294L128 365L210 496L360 498L460 425L555 653L665 542L855 692L1005 433L1198 340L1344 552L1460 458" />
          <path d="M40 214L147 277L350 81L503 73L657 36L762 40L907 77L1002 133L1102 98L1227 19" />
          <path d="M504 425L629 498L675 572L862 502L1054 394L1173 557L1278 639L1345 773L1460 803" />
          <path d="M446 57L567 188L656 36L719 82L824 49L900 171L1030 219L1126 345L1308 293L1382 377L1514 351" />
          <path d="M31 687L107 685L210 640L379 823L553 654L665 542L904 502L980 434L1216 774L1427 685" />
        </g>
        <g fill="hsl(var(--accent-light) / 0.95)">
          {[40, 128, 210, 360, 460, 555, 665, 855, 1005, 1198, 1344, 350, 446, 503, 657, 762, 907, 1002, 1102, 1227, 1382].map((x, i) => (
            <circle key={`${x}-${i}`} cx={x} cy={[294, 365, 496, 498, 425, 653, 542, 692, 433, 340, 552, 81, 57, 73, 36, 40, 77, 133, 98, 19, 377][i]} r="3.2" />
          ))}
        </g>
      </svg>
      <canvas ref={canvasRef} className="relative block w-full h-full" />
    </div>
  );
};

export default ParticleMesh;
