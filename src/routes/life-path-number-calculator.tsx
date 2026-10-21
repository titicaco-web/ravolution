import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import NumerologyTopicPage from "@/pages/NumerologyTopicPage";
import { getTopic, topicHead } from "@/content/numerology-topics";

export const Route = createFileRoute("/life-path-number-calculator")({
  head: () => topicHead("life-path-number-calculator"),
  component: () => (
    <LanguageSync>
      <NumerologyTopicPage topic={getTopic("life-path-number-calculator")} />
    </LanguageSync>
  ),
});
