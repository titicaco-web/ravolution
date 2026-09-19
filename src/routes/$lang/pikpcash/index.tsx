import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PikpCashFlagshipPage from "@/pages/PikpCashFlagshipPage";

export const Route = createFileRoute("/$lang/pikpcash")({
  component: () => (
    <LanguageSync>
      <PikpCashFlagshipPage />
    </LanguageSync>
  ),
});
