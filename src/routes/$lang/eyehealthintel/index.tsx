import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import EyeHealthIntelPage from "@/pages/EyeHealthIntelPage";

const title = "EyeHealthIntel — Your eyes change over time. The record should too. | Ravolution AB";
const description =
  "Why a longitudinal eye record should exist: guided smartphone eye capture, image-quality gating, provenance and evidence-governed AI. A patent-pending invention by Ravolution AB.";

export const Route = createFileRoute("/$lang/eyehealthintel/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LanguageSync>
      <EyeHealthIntelPage />
    </LanguageSync>
  ),
});
