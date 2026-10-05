import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import CarbonXPage from "@/pages/CarbonXPage";

const title = "CarbonX — Carbon is not the enemy. Imbalance is. | Ravolution AB";
const description = "A reflection on carbon, planetary health across generations, and why a carbon marketplace must be built on quality, verifiability and trust.";

export const Route = createFileRoute("/$lang/carbonx")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://ravolution.se/og-carbonx.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://ravolution.se/og-carbonx.jpg" },
    ],
  }),
  component: () => (
    <LanguageSync>
      <CarbonXPage />
    </LanguageSync>
  ),
});
