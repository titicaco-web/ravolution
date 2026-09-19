import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ProtectedGyrocraftRoute from "@/components/gyrocraft/ProtectedGyrocraftRoute";
import GyrocraftAcquisition from "@/pages/gyrocraft/GyrocraftAcquisition";

export const Route = createFileRoute("/$lang/gyrocraft/acquisition")({
  component: () => (
    <LanguageSync>
      <ProtectedGyrocraftRoute>
        <GyrocraftAcquisition />
      </ProtectedGyrocraftRoute>
    </LanguageSync>
  ),
});
