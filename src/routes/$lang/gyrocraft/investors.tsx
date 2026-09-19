import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ProtectedGyrocraftRoute from "@/components/gyrocraft/ProtectedGyrocraftRoute";
import GyrocraftInvestors from "@/pages/gyrocraft/GyrocraftInvestors";

export const Route = createFileRoute("/$lang/gyrocraft/investors")({
  component: () => (
    <LanguageSync>
      <ProtectedGyrocraftRoute>
        <GyrocraftInvestors />
      </ProtectedGyrocraftRoute>
    </LanguageSync>
  ),
});
