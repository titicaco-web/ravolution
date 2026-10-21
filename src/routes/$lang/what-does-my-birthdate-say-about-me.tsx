import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import NumerologyTopicPage from "@/pages/NumerologyTopicPage";
import { getTopic, topicHead } from "@/content/numerology-topics";

export const Route = createFileRoute("/$lang/what-does-my-birthdate-say-about-me")({
  head: () => topicHead("what-does-my-birthdate-say-about-me"),
  component: () => (
    <LanguageSync>
      <NumerologyTopicPage topic={getTopic("what-does-my-birthdate-say-about-me")} />
    </LanguageSync>
  ),
});
