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
const SIGNED_URL_TTL = 60 * 60 * 24 * 7; // 7 days

// Extension -> safe stored content type. Only these are accepted; the client's
// declared type is never trusted for storage.
const ALLOWED_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  csv: "text/csv",
  txt: "text/plain",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  zip: "application/zip",
};

const uploadSchema = z.object({
  name: z.string().min(1).max(200),
  type: z.string().max(200).optional(),
  /** Raw file bytes, base64-encoded (no data: prefix). */
  base64: z.string().min(1),
});

const sanitize = (name: string): string =>
  name.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 120) || "file";

const extOf = (name: string): string => {
  const m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : "";
};

/** Stores a brief attachment privately and returns a short-lived signed link. */
export const uploadBriefFileFn = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => uploadSchema.parse(input))
  .handler(async ({ data }) => {
    const storedType = ALLOWED_TYPES[extOf(data.name)];
    if (!storedType) throw new Error("Unsupported file type");

    const bytes = Uint8Array.from(atob(data.base64), (c) => c.charCodeAt(0));
    if (bytes.byteLength > MAX_FILE_SIZE) throw new Error("File too large");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const folder = `brief-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
    const path = `${folder}/${sanitize(data.name)}`;

    const { error: upErr } = await supabaseAdmin.storage
      .from("project-briefs")
      .upload(path, bytes, {
        // Derived from the allowlisted extension, never the client's declared type.
        contentType: storedType,
        upsert: false,
      });
    if (upErr) throw new Error(upErr.message);

    // Force a download so an uploaded file can never render/execute inline.
    const { data: signed, error: signErr } = await supabaseAdmin.storage
      .from("project-briefs")
      .createSignedUrl(path, SIGNED_URL_TTL, { download: true });
    if (signErr || !signed) throw new Error(signErr?.message ?? "Could not sign URL");

    return { path, url: signed.signedUrl, name: data.name };
  });
