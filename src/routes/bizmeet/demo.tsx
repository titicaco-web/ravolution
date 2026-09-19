import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BizMeetDemoPage from "@/pages/BizMeetDemoPage";

export const Route = createFileRoute("/bizmeet/demo")({
  component: () => (
    <LanguageSync>
      <BizMeetDemoPage />
    </LanguageSync>
  ),
});
