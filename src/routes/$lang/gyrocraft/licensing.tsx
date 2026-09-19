import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ProtectedGyrocraftRoute from "@/components/gyrocraft/ProtectedGyrocraftRoute";
import GyrocraftLicensing from "@/pages/gyrocraft/GyrocraftLicensing";

export const Route = createFileRoute("/$lang/gyrocraft/licensing")({
  component: () => (
    <LanguageSync>
      <ProtectedGyrocraftRoute>
        <GyrocraftLicensing />
      </ProtectedGyrocraftRoute>
    </LanguageSync>
  ),
});
