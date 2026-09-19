import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ProtectedGyrocraftRoute from "@/components/gyrocraft/ProtectedGyrocraftRoute";
import GyrocraftHome from "@/pages/gyrocraft/GyrocraftHome";

export const Route = createFileRoute("/$lang/gyrocraft/")({
  component: () => (
    <LanguageSync>
      <ProtectedGyrocraftRoute>
        <GyrocraftHome />
      </ProtectedGyrocraftRoute>
    </LanguageSync>
  ),
});
