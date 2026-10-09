import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import Index from "@/pages/Index";

export const Route = createFileRoute("/$lang/")({
  head: () => ({ meta: [
    { title: "Ravolution AB | Building the Missing Infrastructure for Human Progress" },
    { name: "description", content: "Ravolution AB is a Swedish invention company building patent-backed systems for education, language, trust, climate and health." },
    { property: "og:title", content: "Ravolution AB | Invent What's Missing" },
    { property: "og:description", content: "Explore Ravolution's missions and platforms, invest or build with a Swedish invention company." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => (
    <LanguageSync>
      <Index />
    </LanguageSync>
  ),
});
