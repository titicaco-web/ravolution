import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import InvestPage from "@/pages/InvestPage";

export const Route = createFileRoute("/$lang/invest")({
  component: () => (
    <LanguageSync>
      <InvestPage />
    </LanguageSync>
  ),
});
