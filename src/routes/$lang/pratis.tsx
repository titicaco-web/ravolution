import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PratisPage from "@/pages/PratisPage";

export const Route = createFileRoute("/$lang/pratis")({
  head: () => ({
    meta: [
      { title: "Pratis | Swedish AI Companion — Ravolution AB" },
      { name: "description", content: "Meet Pratis, a calm Swedish-speaking AI companion for older adults, and preview the live product experience." },
      { property: "og:title", content: "Pratis | Swedish AI Companion — Ravolution AB" },
      { property: "og:description", content: "Meet Pratis, a calm Swedish-speaking AI companion for older adults, and preview the live product experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LanguageSync>
      <PratisPage />
    </LanguageSync>
  ),
});
