export const MAX_DESCRIPTION = 160;

/** Trim a meta description to at most 160 chars at a word boundary. */
export function clampDescription(text: string): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= MAX_DESCRIPTION) return t;
  const cut = t.slice(0, MAX_DESCRIPTION - 1);
  const at = cut.lastIndexOf(" ");
  return (at > 100 ? cut.slice(0, at) : cut).replace(/[\s,;:—–-]+$/, "") + "…";
}
