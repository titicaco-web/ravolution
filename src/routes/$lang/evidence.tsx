import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import EvidencePage from "@/pages/EvidencePage";

export const Route = createFileRoute("/$lang/evidence")({
  component: () => (
    <LanguageSync>
      <EvidencePage />
    </LanguageSync>
  ),
});
