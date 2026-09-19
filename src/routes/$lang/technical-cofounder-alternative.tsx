import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import TechnicalCofounderAlternative from "@/pages/TechnicalCofounderAlternative";

export const Route = createFileRoute("/$lang/technical-cofounder-alternative")({
  component: () => (
    <LanguageSync>
      <TechnicalCofounderAlternative />
    </LanguageSync>
  ),
});
