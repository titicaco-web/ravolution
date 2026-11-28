// Escape user-controlled text before interpolating it into HTML email bodies.
// Prevents markup/link injection into the emails Ravolution receives.
export function escapeHtml(value: unknown): string {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Escape, then convert newlines to <br> for multi-line fields (notes, descriptions).
export function escapeHtmlMultiline(value: unknown): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}
