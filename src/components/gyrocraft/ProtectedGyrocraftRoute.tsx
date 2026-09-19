import type { ReactNode } from "react";
import GyrocraftPasswordGate from "./GyrocraftPasswordGate";

// Ported from src/App.tsx (Classic) — wraps Gyrocraft routes in the password gate.
const ProtectedGyrocraftRoute = ({ children }: { children: ReactNode }) => (
  <GyrocraftPasswordGate>{children}</GyrocraftPasswordGate>
);

export default ProtectedGyrocraftRoute;
