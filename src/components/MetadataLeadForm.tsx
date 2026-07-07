import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "46769456600"; // Ivan's WhatsApp, no + or spaces

const MetadataLeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hi Ivan — I came from the Metadata Machine on ravolution.se.",
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      link ? `Link: ${link}` : "",
      description ? `\nWhat I need help with:\n${description}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    trackEvent("metadata_lead_whatsapp", { has_link: Boolean(link), has_description: Boolean(description) });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !whatsapp) {
      toast({ title: "Add an email or WhatsApp", description: "Ivan needs a way to reach you back." });
      return;
    }
    if (!description && !link) {
      toast({ title: "Tell Ivan what you need", description: "Add a short description or a link." });
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-metadata-lead", {
        body: { name, email, whatsapp, link, description },
      });
      if (error) throw error;
      trackEvent("metadata_lead_email", { has_email: Boolean(email), has_whatsapp: Boolean(whatsapp) });
      setSent(true);
      toast({ title: "Sent to Ivan", description: "You'll hear back at the address you provided." });
    } catch (err) {
      console.error(err);
      toast({ title: "Couldn't send", description: "Please try WhatsApp instead, or email ivan.daza@ravolution.se directly." });
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="border border-[hsl(var(--accent-edit))]/40 bg-black/40 p-8 text-center">
        <h3 className="text-2xl font-display font-bold uppercase text-white mb-3">Sent to Ivan</h3>
        <p className="text-white/70">He reads every message personally. Expect a reply within a few days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitEmail} className="grid md:grid-cols-2 gap-6">
      <label className="block">
        <span className="edit-label text-white/50 block mb-2">Your name (optional)</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={120}
          className="w-full bg-transparent border border-white/20 focus:border-[hsl(var(--accent-edit))] outline-none text-white px-4 py-3 font-mono text-sm"
        />
      </label>
      <label className="block">
        <span className="edit-label text-white/50 block mb-2">Link (optional)</span>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://…"
          maxLength={500}
          className="w-full bg-transparent border border-white/20 focus:border-[hsl(var(--accent-edit))] outline-none text-white px-4 py-3 font-mono text-sm"
        />
      </label>
      <label className="block md:col-span-2">
        <span className="edit-label text-white/50 block mb-2">What do you need help with?</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          maxLength={2000}
          placeholder="A sentence or two is enough."
          className="w-full bg-transparent border border-white/20 focus:border-[hsl(var(--accent-edit))] outline-none text-white px-4 py-3 font-mono text-sm resize-y"
        />
      </label>
      <label className="block">
        <span className="edit-label text-white/50 block mb-2">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={200}
          placeholder="you@company.com"
          className="w-full bg-transparent border border-white/20 focus:border-[hsl(var(--accent-edit))] outline-none text-white px-4 py-3 font-mono text-sm"
        />
      </label>
      <label className="block">
        <span className="edit-label text-white/50 block mb-2">WhatsApp (optional)</span>
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          maxLength={40}
          placeholder="+46 …"
          className="w-full bg-transparent border border-white/20 focus:border-[hsl(var(--accent-edit))] outline-none text-white px-4 py-3 font-mono text-sm"
        />
      </label>

      <p className="md:col-span-2 text-xs text-white/45">
        Provide at least one of email or WhatsApp. Messages go directly to Ivan at ivan.daza@ravolution.se.
      </p>

      <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
        <button type="submit" disabled={sending} className="edit-btn disabled:opacity-50">
          <span>{sending ? "Sending…" : "Send to Ivan"}</span>
        </button>
        <button
          type="button"
          onClick={openWhatsApp}
          className="edit-btn"
          style={{ borderColor: "rgba(37, 211, 102, 0.6)" }}
        >
          <span>Send via WhatsApp ↗</span>
        </button>
      </div>
    </form>
  );
};

export default MetadataLeadForm;
