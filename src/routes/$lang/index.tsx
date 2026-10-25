import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import Index from "@/pages/Index";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => ({ meta: [
    { title: "Ravolution AB | Building the Missing Infrastructure for Human Progress" },
    { name: "description", content: "Ravolution AB is a Swedish invention company building patent-backed systems for education, language, trust, climate and health." },
    { property: "og:title", content: "Ravolution AB | Invent What's Missing" },
    { property: "og:description", content: "Explore Ravolution's missions and platforms, invest or build with a Swedish invention company." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `https://ravolution.se/${params.lang}` },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: "https://ravolution.se/og-homepage.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Ravolution — Building the missing infrastructure for human progress. 28 patent assets / 369 claims." },
    { name: "twitter:image", content: "https://ravolution.se/og-homepage.jpg" },
  ],
  links: [{ rel: "canonical", href: `https://ravolution.se/${params.lang}` }] }),
  component: () => (
    <LanguageSync>
      <Index />
    </LanguageSync>
  ),
});
