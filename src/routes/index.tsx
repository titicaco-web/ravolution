import { createFileRoute } from "@tanstack/react-router";
import LanguageRedirect from "@/components/LanguageRedirect";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ravolution AB | Swedish Invention Company" },
    { name: "description", content: "Discover Ravolution AB, a Swedish invention company building the missing infrastructure for human progress." },
    { property: "og:title", content: "Ravolution AB | Swedish Invention Company" },
    { property: "og:description", content: "Patented systems for learning, language, trust, opportunity, climate and health." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: "https://ravolution.se/og-homepage.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Ravolution — Building the missing infrastructure for human progress. 28 patent assets / 369 claims." },
    { name: "twitter:image", content: "https://ravolution.se/og-homepage.jpg" },
  ] }),
  component: LanguageRedirect,
});
