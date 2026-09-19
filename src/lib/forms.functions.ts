import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submitSchema = z.object({
  form: z.string().min(3).max(64),
  fields: z.record(z.string(), z.unknown()),
});

/** Sends any public form on the site to Ravolution AB by email. */
export const submitFormFn = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submitSchema.parse(input))
  .handler(async ({ data }) => {
    const { deliverForm } = await import("./forms.server");
    await deliverForm(data.form, data.fields);
    return { success: true } as const;
  });

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
const SIGNED_URL_TTL = 60 * 60 * 24 * 365; // 1 year

const uploadSchema = z.object({
  name: z.string().min(1).max(200),
  type: z.string().max(200).optional(),
  /** Raw file bytes, base64-encoded (no data: prefix). */
  base64: z.string().min(1),
});

const sanitize = (name: string): string =>
  name.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 120) || "file";

/** Stores a brief attachment privately and returns a long-lived signed link. */
export const uploadBriefFileFn = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => uploadSchema.parse(input))
  .handler(async ({ data }) => {
    const bytes = Uint8Array.from(atob(data.base64), (c) => c.charCodeAt(0));
    if (bytes.byteLength > MAX_FILE_SIZE) throw new Error("File too large");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const folder = `brief-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
    const path = `${folder}/${sanitize(data.name)}`;

    const { error: upErr } = await supabaseAdmin.storage
      .from("project-briefs")
      .upload(path, bytes, {
        contentType: data.type || "application/octet-stream",
        upsert: false,
      });
    if (upErr) throw new Error(upErr.message);

    const { data: signed, error: signErr } = await supabaseAdmin.storage
      .from("project-briefs")
      .createSignedUrl(path, SIGNED_URL_TTL);
    if (signErr || !signed) throw new Error(signErr?.message ?? "Could not sign URL");

    return { path, url: signed.signedUrl, name: data.name };
  });
