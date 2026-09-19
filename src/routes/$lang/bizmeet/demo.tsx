import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BizMeetDemoPage from "@/pages/BizMeetDemoPage";

export const Route = createFileRoute("/$lang/bizmeet/demo")({
  component: () => (
    <LanguageSync>
      <BizMeetDemoPage />
    </LanguageSync>
  ),
});
