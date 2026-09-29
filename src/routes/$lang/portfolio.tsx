import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PortfolioPage from "@/pages/PortfolioPage";

export const Route = createFileRoute("/$lang/portfolio")({
  head: () => ({
    meta: [
      { title: "Inventions & Portfolio | Ravolution AB" },
      { name: "description", content: "Explore mission systems, active ventures, acquisition assets and frontier work from Ravolution AB." },
      { property: "og:title", content: "Inventions & Portfolio | Ravolution AB" },
      { property: "og:description", content: "Explore mission systems, active ventures, acquisition assets and frontier work from Ravolution AB." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LanguageSync>
      <PortfolioPage />
    </LanguageSync>
  ),
});
