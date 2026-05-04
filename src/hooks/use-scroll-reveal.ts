import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document.querySelectorAll("[data-reveal]:not(.is-observed)").forEach((el) => {
        el.classList.add("is-observed");
        observer.observe(el);
      });
    };
    observe();
    const t = setTimeout(observe, 250);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [location.pathname]);
}
