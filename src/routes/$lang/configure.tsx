import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ConfigurePage from "@/pages/ConfigurePage";

export const Route = createFileRoute("/$lang/configure")({
  component: () => (
    <LanguageSync>
      <ConfigurePage />
    </LanguageSync>
  ),
});
