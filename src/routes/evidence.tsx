import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import EvidencePage from "@/pages/EvidencePage";

export const Route = createFileRoute("/evidence")({
  component: () => (
    <LanguageSync>
      <EvidencePage />
    </LanguageSync>
  ),
});
