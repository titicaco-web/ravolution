import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import Index from "@/pages/Index";

export const Route = createFileRoute("/$lang")({
  component: () => (
    <LanguageSync>
      <Index />
    </LanguageSync>
  ),
});
