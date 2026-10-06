import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import EyeHealthMarketPage from "@/pages/EyeHealthMarketPage";

const title = "EyeHealthIntel Market Opportunity — Infrastructure between billions of eyes and care | Ravolution AB";
const description =
  "The market behind EyeHealthIntel: human need, five converging curves, seven markets, jurisdiction-gated release, layered economics and compounding network effects.";

export const Route = createFileRoute("/$lang/eyehealthintel/market-opportunity")({
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
      <EyeHealthMarketPage />
    </LanguageSync>
  ),
});
