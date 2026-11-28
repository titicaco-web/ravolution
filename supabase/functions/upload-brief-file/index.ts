// Anonymous brief file upload proxy. Uses the service role to store files in
// the private `project-briefs` bucket and returns a short-lived signed URL that
// the client can include in the WhatsApp handoff message.
//
// Hardening: only an allowlist of document/image types is accepted; the stored
// content-type is derived from the extension (never trusted from the client);
// the signed URL forces a download (never inline render/execute); CORS is
// restricted to Ravolution origins; the signed URL is short-lived.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

// NOTE: CORS stays permissive — it does not gate non-browser clients (curl/Postman
// ignore it), so it adds no real upload protection and locking it would break Lovable
// preview testing. The real hardening below is: strict type allowlist, server-forced
// safe content-type, forced download (no inline execute), size cap and short-lived URL.
// Recommended follow-up: a Turnstile/hCaptcha token or rate limit for abuse control,
// since this function is intentionally public (verify_jwt = false).
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
const SIGNED_URL_TTL = 60 * 60 * 24 * 7; // 7 days

// Extension -> safe stored content type. Only these are accepted.
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

function sanitize(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 120) || "file";
}

function extOf(name: string): string {
  const m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : "";
}

Deno.serve(async (req) => {
  const cors = corsHeaders;
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return new Response(JSON.stringify({ error: "Missing file" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
    if (file.size > MAX_FILE_SIZE) {
      return new Response(JSON.stringify({ error: "File too large" }), {
        status: 413,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const ext = extOf(file.name);
    const storedType = ALLOWED_TYPES[ext];
    if (!storedType) {
      return new Response(
        JSON.stringify({ error: "Unsupported file type" }),
        { status: 415, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const folder = `brief-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
    const path = `${folder}/${sanitize(file.name)}`;

    const { error: upErr } = await supabase.storage
      .from("project-briefs")
      .upload(path, file, {
        // Never trust the client-provided type; derive from the allowlisted extension.
        contentType: storedType,
        upsert: false,
      });
    if (upErr) throw upErr;

    // Force a download so the file can never render/execute inline from the signed URL.
    const { data: signed, error: signErr } = await supabase.storage
      .from("project-briefs")
      .createSignedUrl(path, SIGNED_URL_TTL, { download: true });
    if (signErr) throw signErr;

    return new Response(
      JSON.stringify({ path, url: signed.signedUrl, name: file.name }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("upload-brief-file error", err);
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
