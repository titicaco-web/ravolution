import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import StoryPage from "@/pages/StoryPage";

export const Route = createFileRoute("/$lang/story")({
  component: () => (
    <LanguageSync>
      <StoryPage />
    </LanguageSync>
  ),
});
