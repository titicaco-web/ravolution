import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import JournalPage from "@/pages/JournalPage";

export const Route = createFileRoute("/$lang/journal/")({
  component: () => (
    <LanguageSync>
      <JournalPage />
    </LanguageSync>
  ),
});
