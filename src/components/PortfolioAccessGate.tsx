import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const DEFAULT_ACCESS_CODE = "gyrocraft";

export const isGateUnlocked = (project: string) =>
  typeof window !== "undefined" &&
  window.sessionStorage.getItem(`rav-gate-${project}`) === "1";

interface Props {
  project: string;
  onUnlock: () => void;
  code?: string;
}

/** Access-code gate + investor relations request form for restricted portfolio cards. */
const PortfolioAccessGate = ({ project, onUnlock, code: accessCode = DEFAULT_ACCESS_CODE }: Props) => {
  const [code, setCode] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submitCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toLowerCase() === accessCode.toLowerCase()) {
      window.sessionStorage.setItem(`rav-gate-${project}`, "1");
      onUnlock();
    } else {
      toast.error("Invalid access code.");
    }
  };

  const submitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Name and email are required.");
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-investor-inquiry", {
        body: { project, ...form },
      });
      if (error) throw error;
      setSent(true);
      toast.success("Request sent — we'll be in touch.");
    } catch (err) {
      console.error(err);
      toast.error("Could not send request. Please email ivan.daza@ravolution.se directly.");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-[hsl(var(--accent-edit))]";

  return (
    <div className="md:col-start-2 md:col-span-11 grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
      <div className="bg-[hsl(var(--surface))] p-6 md:p-8">
        <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3 uppercase">
          Restricted — access code required
        </span>
        <p className="text-white/70 text-sm leading-relaxed mb-6">
          Details on {project} are shared under access code only. Enter your code to read the full brief.
        </p>
        <form onSubmit={submitCode} className="flex flex-col sm:flex-row gap-3">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Access code"
            aria-label="Access code"
            className={field}
          />
          <button
            type="submit"
            className="px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors whitespace-nowrap"
          >
            Unlock
          </button>
        </form>
      </div>

      <div className="bg-[hsl(var(--surface))] p-6 md:p-8">
        <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3 uppercase">
          Investor relations — request access
        </span>
        {sent ? (
          <p className="text-white/80 text-sm leading-relaxed">
            Thank you — your request has been sent to the founder. You will hear back at the address you provided.
          </p>
        ) : (
          <form onSubmit={submitRequest} className="space-y-3">
            <input
              className={field}
              placeholder="Full name *"
              aria-label="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              type="email"
              placeholder="Email *"
              aria-label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                className={field}
                placeholder="Company / fund"
                aria-label="Company or fund"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <input
                className={field}
                placeholder="Phone"
                aria-label="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <textarea
              className={`${field} min-h-[90px]`}
              placeholder="Why you'd like to speak with the founder"
              aria-label="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              disabled={sending}
              className="px-6 py-3 border border-[hsl(var(--accent-edit))] text-[hsl(var(--accent-edit))] edit-label hover:bg-[hsl(var(--accent-edit))] hover:text-[hsl(var(--bg))] transition-colors disabled:opacity-50"
            >
              {sending ? "Sending…" : "Request contact →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PortfolioAccessGate;
