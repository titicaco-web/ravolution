import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ProtectedGyrocraftRoute from "@/components/gyrocraft/ProtectedGyrocraftRoute";
import GyrocraftAbout from "@/pages/gyrocraft/GyrocraftAbout";

export const Route = createFileRoute("/$lang/gyrocraft/about")({
  component: () => (
    <LanguageSync>
      <ProtectedGyrocraftRoute>
        <GyrocraftAbout />
      </ProtectedGyrocraftRoute>
    </LanguageSync>
  ),
});
