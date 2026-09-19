import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BeredskapadPage from "@/pages/BeredskapadPage";

export const Route = createFileRoute("/beredskapad")({
  component: () => (
    <LanguageSync>
      <BeredskapadPage />
    </LanguageSync>
  ),
});
