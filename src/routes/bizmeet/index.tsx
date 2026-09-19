import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BizMeetPage from "@/pages/BizMeetPage";

export const Route = createFileRoute("/bizmeet/")({
  component: () => (
    <LanguageSync>
      <BizMeetPage />
    </LanguageSync>
  ),
});
