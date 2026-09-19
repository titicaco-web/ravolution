import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PortfolioPage from "@/pages/PortfolioPage";

export const Route = createFileRoute("/$lang/portfolio")({
  component: () => (
    <LanguageSync>
      <PortfolioPage />
    </LanguageSync>
  ),
});
