import type { ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const nb = "border-[hsl(var(--text-secondary)/0.3)]";
export const field = "w-full bg-[hsl(var(--surface))] border border-[hsl(var(--text-secondary)/0.3)] px-3 py-2 text-[hsl(var(--text-primary))] font-mono text-sm focus:outline-none focus:border-[hsl(var(--accent-edit))]";
export const btn = "edit-label border border-[hsl(var(--accent-edit))] text-[hsl(var(--accent-edit))] px-4 py-2 hover:bg-[hsl(var(--accent-edit))] hover:text-[hsl(var(--bg))] transition-colors disabled:opacity-50";

export function NetworkShell({ children, email }: { children: ReactNode; email?: string | undefined }) {
  const navigate = useNavigate();
  return (
    <div className="editorial min-h-screen">
      <header className="border-b border-[hsl(var(--text-secondary)/0.3)]">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between gap-4">
          <Link to="/" className="font-display font-bold uppercase tracking-[0.22em] text-[hsl(var(--text-primary))]">
            Ravolution <span className="edit-label text-[hsl(var(--accent-edit))]">/ Network</span>
          </Link>
          {email && (
            <div className="flex items-center gap-4">
              <span className="edit-label text-[hsl(var(--text-secondary))] hidden sm:inline">{email}</span>
              <button
                className="edit-label border border-[hsl(var(--text-secondary)/0.3)] px-3 py-1.5 text-[hsl(var(--text-primary))] hover:border-[hsl(var(--accent-edit))]"
                onClick={async () => {
                  await supabase.auth.signOut();
                  navigate({ to: "/login", replace: true });
                }}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
    </div>
  );
}
