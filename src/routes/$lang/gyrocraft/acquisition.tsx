import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ProtectedGyrocraftRoute from "@/components/gyrocraft/ProtectedGyrocraftRoute";

export const Route = createFileRoute("/$lang/gyrocraft/acquisition")({
  component: () => (
    <LanguageSync>
      <ProtectedGyrocraftRoute />
    </LanguageSync>
  ),
});
