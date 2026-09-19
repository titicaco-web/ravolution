import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import JournalArticlePage from "@/pages/JournalArticlePage";

export const Route = createFileRoute("/$lang/journal/$slug")({
  component: () => (
    <LanguageSync>
      <JournalArticlePage />
    </LanguageSync>
  ),
});
