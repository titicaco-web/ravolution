import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import StoryPage from "@/pages/StoryPage";

export const Route = createFileRoute("/story")({
  component: () => (
    <LanguageSync>
      <StoryPage />
    </LanguageSync>
  ),
});
