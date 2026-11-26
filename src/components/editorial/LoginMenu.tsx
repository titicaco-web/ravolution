import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Central sign-in for all Ravolution project workspaces lives in TheCreator.
export const THECREATOR_LOGIN_URL = "https://thecreator.ravolution.se/auth";
const APPLY_URL = "/en/apply#thecreator";

const copy = {
  en: { login: "Log in to TheCreator", sub: "Founder Operating System", lead: "Strategy, build, decisions and capital in one evidence-based workspace.", signin: "Sign in", apply: "Apply for access", note: "Invite-only · Partners & founders" },
  sv: { login: "Logga in i TheCreator", sub: "Founder Operating System", lead: "Strategi, bygge, beslut och kapital i en evidensbaserad arbetsyta.", signin: "Logga in", apply: "Ansök om access", note: "Endast inbjudna · Partners & grundare" },
  es: { login: "Entrar a TheCreator", sub: "Founder Operating System", lead: "Estrategia, desarrollo, decisiones y capital en un solo espacio basado en evidencia.", signin: "Iniciar sesión", apply: "Solicitar acceso", note: "Solo por invitación · Socios y fundadores" },
} as const;

const STAGES = ["Imagine", "Validate", "Build", "Launch", "Grow", "Scale"];

const LoginMenu = () => {
  const { language } = useLanguage();
  const c = copy[(language as keyof typeof copy)] ?? copy.en;

  return (
    <div className="tc-login group relative">
      <a
        href={THECREATOR_LOGIN_URL}
        aria-label={`${c.login} — ${c.sub}`}
        className="relative flex items-center gap-3 border border-white/25 bg-white/[0.03] pl-2 pr-4 py-1.5 text-white backdrop-blur-sm transition-all duration-300 hover:border-[hsl(var(--accent-edit))] hover:bg-white/[0.06] focus-visible:border-[hsl(var(--accent-edit))] focus-visible:outline-none"
      >
        <span
          aria-hidden
          className="grid h-8 w-8 place-items-center border border-[hsl(var(--accent-edit))]/70 font-display text-[11px] font-bold tracking-[0.08em] text-[hsl(var(--accent-edit))] transition-colors duration-300 group-hover:bg-[hsl(var(--accent-edit))] group-hover:text-black"
        >
          TC
        </span>
        <span className="flex flex-col leading-none py-0.5">
          <span className="edit-label text-white">{c.login}</span>
          <span className="mt-[7px] font-mono text-[9px] uppercase tracking-[0.28em] text-[hsl(var(--accent-edit))]/80 transition-colors duration-300 group-hover:text-[hsl(var(--accent-edit))]">
            {c.sub}
          </span>
        </span>
        <ArrowUpRight aria-hidden className="h-3.5 w-3.5 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        <span aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-[hsl(var(--accent-edit))] transition-transform duration-500 group-hover:scale-x-100" />
      </a>

      {/* Hover / focus panel */}
      <div
        className="invisible absolute right-0 top-full z-[90] w-[340px] translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <div className="border border-white/15 bg-[#081426]/95 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <span className="h-px w-6 bg-[hsl(var(--accent-edit))]" aria-hidden />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[hsl(var(--accent-edit))]">TheCreator · by Ravolution</span>
          </div>
          <p className="mt-4 font-display text-xl font-bold leading-tight text-white">The Founder<br />Operating System</p>
          <p className="mt-2 text-[13px] leading-relaxed text-white/60">{c.lead}</p>

          <ol className="mt-4 grid grid-cols-6 gap-1" aria-label="Venture lifecycle">
            {STAGES.map((s, i) => (
              <li key={s} className="flex flex-col gap-1">
                <span className="h-0.5 bg-[hsl(var(--accent-edit))]" style={{ opacity: 0.35 + i * 0.13 }} />
                <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/50">{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <a href={THECREATOR_LOGIN_URL} className="edit-label inline-flex items-center justify-center gap-1.5 bg-[hsl(var(--accent-edit))] px-3 py-2.5 text-black transition-opacity hover:opacity-90">
              {c.signin} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <a href={APPLY_URL} className="edit-label inline-flex items-center justify-center border border-white/25 px-3 py-2.5 text-white transition-colors hover:bg-white hover:text-black">
              {c.apply}
            </a>
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">{c.note}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginMenu;
