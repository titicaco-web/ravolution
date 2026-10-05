import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import photo from "@/assets/claudia-alurralde.png.asset.json";
import {
  checkCourseCode,
  getResultados,
  reportComentario,
  submitValoracion,
} from "@/lib/profesora.functions";

const title = "Profesora Claudia Alurralde — Valoración del alumnado";
const description = "Valoración anónima del curso de Relaciones Internacionales (DER-501).";

export const Route = createFileRoute("/profesora-alurralde")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

const DIMS = [
  ["claridad", "Claridad en las explicaciones"],
  ["dominio", "Dominio de la materia"],
  ["metodologia", "Metodología y didáctica"],
  ["motivacion", "Motivación e inspiración"],
  ["disponibilidad", "Disponibilidad y trato con el alumnado"],
  ["general", "Valoración general"],
] as const;
type Dim = (typeof DIMS)[number][0];
type Results = Awaited<ReturnType<typeof getResultados>>;

const navy = "text-[#0F2747]";

function Stars({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} de 5`}
          onClick={() => onChange(n)}
          className={`text-2xl leading-none transition-colors ${n <= value ? "text-[#7C633D]" : "text-[#0F2747]/20 hover:text-[#7C633D]/60"}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function Page() {
  const check = useServerFn(checkCourseCode);
  const submit = useServerFn(submitValoracion);
  const results = useServerFn(getResultados);
  const report = useServerFn(reportComentario);

  const [code, setCode] = useState("");
  const [step, setStep] = useState<"gate" | "rate" | "done">("gate");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [scores, setScores] = useState<Record<Dim, number>>({
    claridad: 0, dominio: 0, metodologia: 0, motivacion: 0, disponibilidad: 0, general: 0,
  });
  const [comentario, setComentario] = useState("");
  const [res, setRes] = useState<Results | null>(null);
  const [reported, setReported] = useState<Set<string>>(new Set());

  const loadResults = async () => setRes(await results({ data: { code } }));

  const enter = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setErr("");
    const { ok } = await check({ data: { code } });
    setBusy(false);
    if (ok) { setStep("rate"); loadResults(); } else setErr("Código incorrecto.");
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(scores).some((v) => v === 0)) { setErr("Valora todas las dimensiones de 1 a 5."); return; }
    setBusy(true); setErr("");
    try {
      await submit({ data: { code, ...scores, comentario: comentario.trim() || undefined } });
      setStep("done");
      await loadResults();
    } catch { setErr("No se pudo enviar. Inténtalo de nuevo."); }
    setBusy(false);
  };

  const input = "w-full border border-[#0F2747]/25 bg-white px-4 py-3 text-[#0F2747] placeholder:text-[#0F2747]/40 focus:outline-none focus:border-[#7C633D]";

  return (
    <main className={`min-h-screen bg-[#F7F5F0] ${navy}`}>
      <header className="relative min-h-[72vh] overflow-hidden border-b border-[#0F2747]/15 bg-[#0F2747] text-[#F7F5F0]">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]" />
        <div aria-hidden="true" className="absolute right-[-12rem] top-[-15rem] h-[34rem] w-[34rem] rounded-full border border-[#B08D57]/30 md:right-[-5rem]" />
        <div className="relative mx-auto grid min-h-[72vh] max-w-6xl items-end gap-10 px-6 pb-10 pt-14 md:grid-cols-[minmax(250px,0.72fr)_minmax(0,1.6fr)] md:items-center md:gap-16 md:py-20">
          <div className="relative mx-auto w-full max-w-[290px] md:max-w-[360px]">
            <div aria-hidden="true" className="absolute -left-5 -top-5 h-16 w-16 border-l border-t border-[#B08D57]" />
            <img
              src={photo.url}
              alt="Profesora Claudia Alurralde"
              className="aspect-[2/3] w-full rounded-sm border border-[#F7F5F0]/20 object-cover object-center grayscale-[12%]"
            />
            <div className="absolute bottom-0 left-0 right-0 border-t border-[#F7F5F0]/20 bg-[#081426]/85 px-4 py-3 backdrop-blur-sm">
              <p className="edit-mono text-[10px] uppercase tracking-[0.18em] text-[#F7F5F0]/65">Docencia · 2026</p>
            </div>
          </div>

          <div className="pb-2 md:pb-0">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-[#B08D57]" />
              <span className="edit-mono text-[10px] uppercase tracking-[0.2em] text-[#B08D57] md:text-[11px]">DER-501 · Relaciones Internacionales</span>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              Profesora Claudia Alurralde
              <span className="mt-3 block text-[#F7F5F0]/58">Valoración del alumnado</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#F7F5F0]/72 md:text-xl">
              Tu opinión, de forma anónima, ayuda a mejorar el curso de Relaciones Internacionales (DER-501). Valora y comenta con respeto.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">

        {step === "gate" && (
          <form onSubmit={enter} className="border border-[#0F2747]/15 bg-white/60 p-6 md:p-8 flex flex-col sm:flex-row gap-3">
            <input className={input} value={code} onChange={(e) => setCode(e.target.value)} placeholder="Código del curso" aria-label="Código del curso" maxLength={100} />
            <button disabled={busy} className="px-8 py-3 bg-[#0F2747] text-[#F7F5F0] edit-mono text-xs uppercase tracking-[0.15em] hover:bg-[#081426] disabled:opacity-50">Entrar</button>
          </form>
        )}

        {step === "rate" && (
          <form onSubmit={send} className="border border-[#0F2747]/15 bg-white/60 p-6 md:p-8 space-y-6">
            <p className="edit-mono text-[11px] uppercase tracking-[0.2em] text-[#0F2747]/60">Valora de 1 a 5</p>
            {DIMS.map(([k, label]) => (
              <div key={k} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${k === "general" ? "pt-4 border-t border-[#0F2747]/15 font-semibold" : ""}`}>
                <span>{label}</span>
                <Stars label={label} value={scores[k]} onChange={(v) => setScores({ ...scores, [k]: v })} />
              </div>
            ))}
            <label className="block">
              <span className="block mb-2 text-sm">Comentario (opcional)</span>
              <textarea className={`${input} min-h-[120px]`} maxLength={2000} value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="¿Qué destacarías? ¿Qué podría mejorar?" />
            </label>
            <p className="text-xs text-[#0F2747]/60">Los comentarios se revisan antes de publicarse. Comentarios respetuosos y constructivos; los irrespetuosos no se publican.</p>
            <button disabled={busy} className="px-8 py-3 bg-[#0F2747] text-[#F7F5F0] edit-mono text-xs uppercase tracking-[0.15em] hover:bg-[#081426] disabled:opacity-50">
              {busy ? "Enviando…" : "Enviar valoración"}
            </button>
          </form>
        )}

        {step === "done" && (
          <p className="border border-[#7C633D]/40 bg-white/60 p-6 font-medium">¡Gracias! Tu valoración se ha registrado.</p>
        )}
        {err && <p className="mt-4 text-sm text-red-700">{err}</p>}

        {res && step !== "gate" && (
          <section className="mt-14">
            <div className="flex items-baseline justify-between border-b border-[#0F2747]/15 pb-3">
              <h2 className="text-xl font-semibold">Valoración media</h2>
              <span className="edit-mono text-xs text-[#0F2747]/60">{res.n} respuestas</span>
            </div>
            <dl className="mt-4 divide-y divide-[#0F2747]/10">
              {DIMS.map(([k, label]) => (
                <div key={k} className="flex justify-between py-3">
                  <dt>{label}</dt>
                  <dd className="edit-mono text-[#7C633D]">{res.n ? res.avg[k].toFixed(1) : "—"} / 5</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-12 text-xl font-semibold border-b border-[#0F2747]/15 pb-3">Comentarios del alumnado</h2>
            {res.comentarios.length === 0 && <p className="mt-4 text-[#0F2747]/60 text-sm">Aún no hay comentarios publicados.</p>}
            <ul className="mt-4 space-y-4">
              {res.comentarios.map((c) => (
                <li key={c.id} className="border border-[#0F2747]/10 bg-white/60 p-5">
                  <p className="whitespace-pre-line leading-relaxed">{c.texto}</p>
                  <button
                    type="button"
                    disabled={reported.has(c.id)}
                    onClick={async () => { await report({ data: { code, id: c.id } }); setReported(new Set(reported).add(c.id)); }}
                    className="mt-3 edit-mono text-[10px] uppercase tracking-[0.15em] text-[#0F2747]/50 hover:text-[#7C633D] disabled:opacity-60"
                  >
                    {reported.has(c.id) ? "Reportado" : "Reportar comentario"}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
