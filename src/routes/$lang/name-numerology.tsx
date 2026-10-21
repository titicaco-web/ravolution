import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import NumerologyTopicPage from "@/pages/NumerologyTopicPage";
import { getTopic, topicHead } from "@/content/numerology-topics";

export const Route = createFileRoute("/$lang/name-numerology")({
  head: () => topicHead("name-numerology"),
  component: () => (
    <LanguageSync>
      <NumerologyTopicPage topic={getTopic("name-numerology")} />
    </LanguageSync>
  ),
});
