import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BeredskapadPage from "@/pages/BeredskapadPage";

export const Route = createFileRoute("/$lang/beredskapad")({
  component: () => (
    <LanguageSync>
      <BeredskapadPage />
    </LanguageSync>
  ),
});
