import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { requestSignInHelp } from "@/lib/network/network.functions";
import { NetworkShell, btn, field } from "@/components/network/NetworkShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Ravolution AB Project Network" },
      { name: "description", content: "Invite-only sign-in to the Ravolution AB project network for invited partners and project members." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Sign in — Ravolution AB Project Network" },
      { property: "og:description", content: "Invite-only sign-in to the Ravolution AB project network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/network", replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") navigate({ to: "/network", replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const clean = email.trim().toLowerCase();
    // Invite-only: never creates accounts. Unknown emails get the same response.
    await supabase.auth.signInWithOtp({
      email: clean,
      options: { shouldCreateUser: false, emailRedirectTo: `${window.location.origin}/login` },
    });
    await requestSignInHelp({ data: { email: clean, origin: window.location.origin } }).catch(() => undefined);
    setState("sent");
  }

  return (
    <NetworkShell>
      <div className="max-w-md">
        <p className="edit-label text-[hsl(var(--accent-edit))] mb-4">Invite only</p>
        <h1 className="font-display text-4xl font-bold uppercase mb-4">Project Network sign-in</h1>
        <p className="text-[hsl(var(--text-secondary))] mb-8">
          Enter the email you were invited with. We'll send a one-time sign-in link. There is no public sign-up.
        </p>
        {state === "sent" ? (
          <p role="status" className="border border-[hsl(var(--accent-edit))] p-4">
            If this email has access, a sign-in link is on its way. Check your inbox.
          </p>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <label className="block">
              <span className="edit-label text-[hsl(var(--text-secondary))]">Email</span>
              <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field + " mt-2"} />
            </label>
            <button type="submit" disabled={state === "sending"} className={btn}>
              {state === "sending" ? "Sending…" : "Send sign-in link"}
            </button>
          </form>
        )}
      </div>
    </NetworkShell>
  );
}
