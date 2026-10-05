import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { listModeracion, moderarComentario } from "@/lib/profesora.functions";

export const Route = createFileRoute("/profesora-alurralde/moderar")({
  head: () => ({
    meta: [
      { title: "Moderación — Valoración Profesora Alurralde" },
      { name: "description", content: "Cola de moderación de comentarios." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Moderación" },
      { property: "og:description", content: "Cola de moderación de comentarios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Moderar,
});

type Row = Awaited<ReturnType<typeof listModeracion>>[number];

function Moderar() {
  const list = useServerFn(listModeracion);
  const set = useServerFn(moderarComentario);
  const [key, setKey] = useState("");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [err, setErr] = useState("");

  const load = async () => {
    try { setRows(await list({ data: { key } })); setErr(""); } catch { setErr("Clave incorrecta."); }
  };
  const act = async (id: string, estado: "aprobado" | "oculto") => {
    await set({ data: { key, id, estado } });
    load();
  };

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#0F2747]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold mb-6">Moderación de comentarios</h1>
        {!rows && (
          <form onSubmit={(e) => { e.preventDefault(); load(); }} className="flex gap-3">
            <input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Clave de moderación" aria-label="Clave de moderación" className="flex-1 border border-[#0F2747]/25 bg-white px-4 py-3" />
            <button className="px-6 py-3 bg-[#0F2747] text-[#F7F5F0] text-sm">Entrar</button>
          </form>
        )}
        {err && <p className="mt-3 text-sm text-red-700">{err}</p>}
        {rows && (
          <ul className="space-y-4">
            {rows.length === 0 && <li className="text-sm text-[#0F2747]/60">No hay comentarios.</li>}
            {rows.map((r) => (
              <li key={r.id} className="border border-[#0F2747]/15 bg-white p-5">
                <div className="flex justify-between text-xs mb-2 text-[#0F2747]/60">
                  <span>{new Date(r.created_at).toLocaleString("es")}</span>
                  <span className={r.estado === "pendiente" ? "text-[#7C633D] font-semibold" : ""}>
                    {r.estado}{r.reportes ? ` · ${r.reportes} reportes` : ""}
                  </span>
                </div>
                <p className="whitespace-pre-line">{r.texto}</p>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => act(r.id, "aprobado")} className="px-4 py-2 text-xs bg-[#0F2747] text-[#F7F5F0]">Aprobar</button>
                  <button onClick={() => act(r.id, "oculto")} className="px-4 py-2 text-xs border border-[#0F2747]/30">Ocultar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
