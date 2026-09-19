import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PartystaPage from "@/pages/PartystaPage";

export const Route = createFileRoute("/partysta")({
  component: () => (
    <LanguageSync>
      <PartystaPage />
    </LanguageSync>
  ),
});
