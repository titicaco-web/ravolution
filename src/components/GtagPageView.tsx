import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Single-Page App GA4 page_view tracker.
 * The gtag config in index.html has send_page_view: false so the initial
 * script load doesn't double-fire; we emit a page_view on every route change.
 */
export const GtagPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = location.pathname + location.search + location.hash;
    const title = document.title || path;

    try {
      window.gtag?.("event", "page_view", {
        page_location: window.location.href,
        page_path: path,
        page_title: title,
      });
    } catch {
      /* noop — ad blockers or missing gtag shouldn't crash the app */
    }
  }, [location]);

  return null;
};
