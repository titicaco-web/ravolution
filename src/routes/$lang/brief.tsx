import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BriefPage from "@/pages/BriefPage";

export const Route = createFileRoute("/$lang/brief")({
  component: () => (
    <LanguageSync>
      <BriefPage />
    </LanguageSync>
  ),
});
