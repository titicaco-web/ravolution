import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import AlarmSolePage from "@/pages/AlarmSolePage";

export const Route = createFileRoute("/alarmsole")({
  component: () => (
    <LanguageSync>
      <AlarmSolePage />
    </LanguageSync>
  ),
});
