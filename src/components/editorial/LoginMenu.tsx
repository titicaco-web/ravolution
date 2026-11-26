import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

// Central, invite-only sign-in. Private project portals are listed only
// after sign-in, from the database-backed registry (no public listing).
const LoginMenu = () => (
  <Link
    to="/login"
    className="edit-label inline-flex items-center gap-1.5 text-white border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors"
  >
    <LogIn className="w-4 h-4" aria-hidden />
    <span>Login</span>
  </Link>
);

export default LoginMenu;
