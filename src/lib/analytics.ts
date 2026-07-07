/**
 * Tiny GA4 wrapper. No-ops safely when gtag isn't loaded (e.g. dev/preview
 * without a Measurement ID, or when a user has an ad blocker).
 */
type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
  } catch {
    /* noop */
  }
};
