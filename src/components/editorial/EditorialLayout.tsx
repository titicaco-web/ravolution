import { useEffect, useRef, useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/* ───────── Preloader ───────── */
export const EditorialPreloader = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);
  if (hidden) return null;
  return (
    <div className="edit-preloader" aria-hidden>
      <span>RAVOLUTION</span>
    </div>
  );
};

/* ───────── Custom cursor (desktop only, fallback safe) ───────── */
export const EditorialCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduced || !fine) return;

    document.body.classList.add("edit-cursor-active");

    let rafId = 0;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button], input, textarea, select, label")) {
        document.body.classList.add("edit-cursor-hover");
      } else {
        document.body.classList.remove("edit-cursor-hover");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("edit-cursor-active", "edit-cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="edit-cursor-dot" aria-hidden />
      <div ref={ringRef} className="edit-cursor-ring" aria-hidden />
    </>
  );
};

/* ───────── Reveal wrapper ───────── */
export const Reveal = ({
  children, className = "", delay = 0, zoom = false, as: Tag = "div",
}: { children: ReactNode; className?: string; delay?: number; zoom?: boolean; as?: any }) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as any}
      className={`${zoom ? "edit-reveal-zoom" : "edit-reveal"} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
};

/* ───────── Count-up stat ───────── */
export const CountUp = ({
  end, prefix = "", suffix = "", duration = 1400, className = "",
}: { end: number; prefix?: string; suffix?: string; duration?: number; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setVal(end); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);
  return <span ref={ref} className={className}>{prefix}{val}{suffix}</span>;
};

/* ───────── Section label "01 — TITLE" ───────── */
export const SectionLabel = ({
  number, title, className = "",
}: { number: string; title: string; className?: string }) => (
  <Reveal className={`mb-12 md:mb-20 flex items-baseline gap-6 border-t border-white/10 pt-6 ${className}`}>
    <span className="edit-label text-white/45 shrink-0">{number}</span>
    <h2 className="edit-h2 text-white">{title}</h2>
  </Reveal>
);

/* ───────── Marquee strip ───────── */
export const MarqueeStrip = ({ items }: { items: string[] }) => {
  const content = [...items, ...items];
  return (
    <div className="border-y border-white/10 overflow-hidden bg-[hsl(var(--bg))]">
      <div className="edit-marquee py-6">
        {content.map((it, i) => (
          <span key={i} className="edit-label text-white/55 px-8 whitespace-nowrap">
            {it} <span className="text-[hsl(var(--accent-edit))] mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ───────── Full-screen MENU overlay nav ───────── */
export const EditorialNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();
  const lp = useLangPath();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const salesPartnerHref = language === "sv" ? "/sv/saljpartner" : language === "es" ? "/es/socio-comercial" : "/en/sales-partner";
  const salesPartnerLabel = language === "sv" ? "Säljpartner" : language === "es" ? "Socio Comercial" : "Sales Partner";
  const applyHref = language === "sv" ? "/sv/ansok" : lp("/apply");
  const applyLabel = language === "sv" ? "Ansök" : language === "es" ? "Aplicar" : "Apply";

  const links = [
    { label: t("nav.founder") || "About", href: lp("/about") },
    { label: t("nav.angel") || "Angel", href: lp("/angel-investor") },
    { label: t("nav.services") || "Develop", href: lp("/services") },
    { label: "Portfolio", href: lp("/portfolio") },
    { label: t("nav.investors") || "Invest", href: lp("/invest") },
    { label: salesPartnerLabel, href: salesPartnerHref },
    { label: t("nav.blog") || "Press", href: lp("/blog") },
    { label: applyLabel, href: applyHref, accent: true },
    { label: "Contact", href: lp("/contact") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          scrolled ? "bg-[hsl(var(--bg))]/70 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
          <Link to={lp("/")} className="edit-link">
            <span className="font-display font-bold uppercase tracking-[0.22em] text-white text-base md:text-lg">
              Ravolution
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:block"><LanguageSwitcher /></div>
            <button
              onClick={() => setOpen(true)}
              className="edit-label text-white border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div className={`edit-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="flex justify-between items-center mb-12">
          <Link to={lp("/")} onClick={() => setOpen(false)} className="edit-link">
            <span className="font-display font-bold uppercase tracking-[0.22em] text-white text-base md:text-lg">
              Ravolution
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="edit-label text-white border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col justify-start max-w-[1400px] mx-auto w-full">
          {links.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="menu-item border-b border-white/10"
              style={{ transitionDelay: open ? `${0.05 + i * 0.05}s` : "0s" }}
            >
              <span className="edit-label text-white/40 text-sm">0{i + 1}</span>
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap justify-between items-end gap-4 mt-auto pt-12">
          <span className="edit-label text-white/55">Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich</span>
          <a href="mailto:ivan.daza@ravolution.se" className="edit-label text-white/55 edit-link">
            ivan.daza@ravolution.se
          </a>
        </div>
      </div>
    </>
  );
};

/* ───────── Minimal editorial footer ───────── */
export const EditorialFooter = () => {
  const lp = useLangPath();
  const { t, language } = useLanguage();
  const salesPartnerHref = language === "sv" ? "/sv/saljpartner" : language === "es" ? "/es/socio-comercial" : "/en/sales-partner";
  const salesPartnerLabel = language === "sv" ? "Säljpartner" : language === "es" ? "Socio Comercial" : "Sales Partner";
  return (
    <footer className="border-t border-white/10 px-6 md:px-12 pt-20 pb-10 bg-[hsl(var(--bg))] text-white">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-display font-bold uppercase tracking-[0.22em] text-lg mb-4">
            Ravolution
          </div>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            {t("footer.tagline") || "Swedish venture studio & IP innovation company."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-2">
          {[
            { l: "Home", h: lp("/") },
            { l: "About", h: lp("/about") },
            { l: "Invest", h: lp("/invest") },
            { l: "Angel", h: lp("/angel-investor") },
            { l: "Develop", h: lp("/services") },
            { l: "Portfolio", h: lp("/portfolio") },
            { l: salesPartnerLabel, h: salesPartnerHref },
            { l: "Press", h: lp("/blog") },
            { l: "Metadata Machine", h: lp("/metadatamachine") },
            { l: "Contact", h: lp("/contact") },
          ].map((x) => (
            <Link key={x.h} to={x.h} className="edit-label text-white/70 hover:text-white edit-link w-fit">
              {x.l}
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          <div className="edit-label text-white/55">Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich</div>
          <div>
            <a href="mailto:ivan.daza@ravolution.se" className="edit-label text-white edit-link">
              ivan.daza@ravolution.se
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ivandaza/" target="_blank" rel="noopener noreferrer" className="edit-label text-white/70 hover:text-white edit-link">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-16 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
        <span className="edit-label text-white/40">
          © {new Date().getFullYear()} Ravolution AB. All rights reserved.
        </span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="edit-label text-white/70 hover:text-white edit-link"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

/* ───────── Page shell ───────── */
export const EditorialShell = ({ children }: { children: ReactNode }) => (
  <div className="editorial min-h-screen">
    <EditorialPreloader />
    <EditorialCursor />
    <EditorialNav />
    {children}
    <EditorialFooter />
  </div>
);
