import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PikpCashPage from "@/pages/PikpCashPage";

export const Route = createFileRoute("/pikpcash/system")({
  component: () => (
    <LanguageSync>
      <PikpCashPage />
    </LanguageSync>
  ),
});
