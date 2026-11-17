import { createFileRoute } from "@tanstack/react-router";
import PaperTheatrePage from "@/pages/PaperTheatrePage";

export const Route = createFileRoute("/paper-theatre")({
  head: () => ({
    meta: [
      { title: "Paper Theatre Kit Builder | Ravolution AB" },
      { name: "description", content: "Bygg utskrivbara pappersteatrar: ladda upp linjeteckningar och skapa A4-ark att färglägga, klippa och vika." },
      { property: "og:title", content: "Paper Theatre Kit Builder | Ravolution AB" },
      { property: "og:description", content: "Bygg utskrivbara pappersteatrar: ladda upp linjeteckningar och skapa A4-ark att färglägga, klippa och vika." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PaperTheatrePage,
});
