import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PratisPage from "@/pages/PratisPage";

export const Route = createFileRoute("/$lang/ventures/pratis")({
  component: () => (
    <LanguageSync>
      <PratisPage />
    </LanguageSync>
  ),
});
