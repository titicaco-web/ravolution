import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PikpCashDataRoomPage from "@/pages/PikpCashDataRoomPage";

export const Route = createFileRoute("/$lang/pikpcash/dataroom")({
  component: () => (
    <LanguageSync>
      <PikpCashDataRoomPage />
    </LanguageSync>
  ),
});
