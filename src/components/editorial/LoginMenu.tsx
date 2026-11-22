import { useState, useRef, useEffect } from "react";
import { LogIn } from "lucide-react";

type Portal = { label: string; href: string; note?: string };

// Project & client management portals.
// To add a portal: append { label, href, note } below.
const portals: Portal[] = [
  { label: "Yotaú", href: "https://yotau.ravolution.se", note: "Hospitality project portal" },
  { label: "Drivally", href: "https://drivally.ravolution.se", note: "Drive-through payment portal" },
];

const LoginMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="edit-label inline-flex items-center gap-1.5 text-white border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <LogIn className="w-4 h-4" aria-hidden />
        <span>Login</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-primary border border-white/20 rounded-lg shadow-xl overflow-hidden z-[90] min-w-[240px]">
          <div className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/40 border-b border-white/10">
            Project portals
          </div>
          {portals.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="font-medium">{p.label}</span>
              {p.note && <span className="block text-xs text-white/40">{p.note}</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoginMenu;
