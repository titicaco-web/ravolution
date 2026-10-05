import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

async function codeOk(input: string, envName: string): Promise<boolean> {
  const expected = process.env[envName];
  if (!expected) return false;
  const { createHash, timingSafeEqual } = await import("node:crypto");
  const norm = (s: string) => s.trim().toUpperCase();
  const a = createHash("sha256").update(norm(input)).digest();
  const b = createHash("sha256").update(norm(expected)).digest();
  return timingSafeEqual(a, b);
}

const admin = async () =>
  (await import("@/integrations/supabase/client.server")).supabaseAdmin;

export const checkCourseCode = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => z.object({ code: z.string().max(100) }).parse(d))
  .handler(async ({ data }) => ({ ok: await codeOk(data.code, "CLAUDIA_COURSE_CODE") }));

const star = z.number().int().min(1).max(5);
export const submitValoracion = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) =>
    z
      .object({
        code: z.string().max(100),
        claridad: star,
        dominio: star,
        metodologia: star,
        motivacion: star,
        disponibilidad: star,
        general: star,
        comentario: z.string().trim().max(2000).optional(),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    if (!(await codeOk(data.code, "CLAUDIA_COURSE_CODE"))) throw new Error("Código incorrecto");
    const db = await admin();
    const { code: _c, comentario, ...scores } = data;
    const { error } = await db.from("profesora_valoraciones").insert(scores);
    if (error) throw new Error(error.message);
    if (comentario) {
      const { error: e2 } = await db.from("profesora_comentarios").insert({ texto: comentario });
      if (e2) throw new Error(e2.message);
    }
    return { ok: true };
  });

export const getResultados = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => z.object({ code: z.string().max(100) }).parse(d))
  .handler(async ({ data }) => {
    if (!(await codeOk(data.code, "CLAUDIA_COURSE_CODE"))) throw new Error("Código incorrecto");
    const db = await admin();
    const { data: rows } = await db
      .from("profesora_valoraciones")
      .select("claridad,dominio,metodologia,motivacion,disponibilidad,general");
    const { data: com } = await db
      .from("profesora_comentarios")
      .select("id,texto,created_at")
      .eq("estado", "aprobado")
      .order("created_at", { ascending: false })
      .limit(200);
    const n = rows?.length ?? 0;
    const keys = ["claridad", "dominio", "metodologia", "motivacion", "disponibilidad", "general"] as const;
    const avg = Object.fromEntries(
      keys.map((k) => [k, n ? rows!.reduce((s, r) => s + r[k], 0) / n : 0]),
    ) as Record<(typeof keys)[number], number>;
    return { n, avg, comentarios: com ?? [] };
  });

export const reportComentario = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => z.object({ code: z.string().max(100), id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    if (!(await codeOk(data.code, "CLAUDIA_COURSE_CODE"))) throw new Error("Código incorrecto");
    const db = await admin();
    const { data: row } = await db.from("profesora_comentarios").select("reportes").eq("id", data.id).maybeSingle();
    if (!row) return { ok: false };
    // Reported comments go back to the queue for review.
    await db.from("profesora_comentarios").update({ reportes: row.reportes + 1, estado: "pendiente" }).eq("id", data.id);
    return { ok: true };
  });

export const listModeracion = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => z.object({ key: z.string().max(200) }).parse(d))
  .handler(async ({ data }) => {
    if (!(await codeOk(data.key, "CLAUDIA_MOD_KEY"))) throw new Error("Clave incorrecta");
    const db = await admin();
    const { data: rows } = await db
      .from("profesora_comentarios")
      .select("id,texto,estado,reportes,created_at")
      .order("created_at", { ascending: false })
      .limit(500);
    return rows ?? [];
  });

export const moderarComentario = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) =>
    z.object({ key: z.string().max(200), id: z.string().uuid(), estado: z.enum(["aprobado", "oculto", "pendiente"]) }).parse(d),
  )
  .handler(async ({ data }) => {
    if (!(await codeOk(data.key, "CLAUDIA_MOD_KEY"))) throw new Error("Clave incorrecta");
    const db = await admin();
    await db.from("profesora_comentarios").update({ estado: data.estado }).eq("id", data.id);
    return { ok: true };
  });
