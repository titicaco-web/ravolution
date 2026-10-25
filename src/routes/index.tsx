import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ravolution AB | Swedish Invention Company" },
    { name: "description", content: "Discover Ravolution AB, a Swedish invention company building the missing infrastructure for human progress." },
    { property: "og:title", content: "Ravolution AB | Swedish Invention Company" },
    { property: "og:description", content: "Patented systems for learning, language, trust, opportunity, climate and health." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ravolution.se/" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: "https://ravolution.se/og-homepage.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Ravolution — Building the missing infrastructure for human progress. 28 patent assets / 369 claims." },
    { name: "twitter:image", content: "https://ravolution.se/og-homepage.jpg" },
  ],
  links: [{ rel: "canonical", href: "https://ravolution.se/" }] }),
  component: RootHome,
});

// Serve the full English homepage at "/" so crawlers see real content (no
// soft-404 redirect); returning visitors with a saved SV/ES preference are
// moved to their language after hydration.
function RootHome() {
  const navigate = useNavigate();
  useEffect(() => {
    const stored = localStorage.getItem("site-language");
    if (stored === "sv" || stored === "es") navigate({ to: `/${stored}` as "/", replace: true });
  }, [navigate]);
  return (
    <LanguageSync>
      <Index />
    </LanguageSync>
  );
}
