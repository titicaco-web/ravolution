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

    const NODE_COUNT = 55;
    const MAX_DIST = 90;
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
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
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

      // lines
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            const alpha = 0.55 * (1 - d / MAX_DIST);
            ctx.strokeStyle = `rgba(176, 141, 87, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.fillStyle = "rgba(176, 141, 87, 0.85)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

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
      style={{ zIndex: 0 }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default ParticleMesh;
