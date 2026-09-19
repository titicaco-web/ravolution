import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import XportMatchPage from "@/pages/XportMatchPage";

export const Route = createFileRoute("/xportmatch")({
  component: () => (
    <LanguageSync>
      <XportMatchPage />
    </LanguageSync>
  ),
});
