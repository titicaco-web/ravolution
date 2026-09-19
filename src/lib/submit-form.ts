import { submitFormFn, uploadBriefFileFn } from "./forms.functions";

type Result<T> = { data: T | null; error: Error | null };

/**
 * Sends a public form to Ravolution AB. Mirrors the previous
 * `supabase.functions.invoke()` result shape so call sites stay simple.
 */
export async function submitForm(
  form: string,
  fields: Record<string, unknown>,
): Promise<Result<{ success: true }>> {
  try {
    const data = await submitFormFn({ data: { form, fields } });
    return { data, error: null };
  } catch (err) {
    console.error(`Form "${form}" failed:`, err);
    return { data: null, error: err instanceof Error ? err : new Error(String(err)) };
  }
}

const toBase64 = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
};

/** Uploads a brief attachment and returns its private signed link. */
export async function uploadBriefFile(
  file: File,
): Promise<Result<{ path: string; url: string; name: string }>> {
  try {
    const base64 = toBase64(await file.arrayBuffer());
    const data = await uploadBriefFileFn({
      data: { name: file.name, type: file.type || "application/octet-stream", base64 },
    });
    return { data, error: null };
  } catch (err) {
    console.error("Brief upload failed:", err);
    return { data: null, error: err instanceof Error ? err : new Error(String(err)) };
  }
}
