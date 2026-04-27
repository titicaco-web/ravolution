import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";

const Field = ({
  label, value, onChange, type = "text", required = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <label className="block group">
    <span className="block edit-label text-white/45 mb-3">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
    />
  </label>
);

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-investor-inquiry", {
        body: {
          name: form.name,
          email: form.email,
          message: form.message,
          investorType: "contact-page",
          ticketRange: "n/a",
        },
      });
      if (error) throw error;
      setSent(true);
    } catch (err) {
      console.error(err);
      toast.error("Could not send. Please email ivan.daza@ravolution.se directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Ravolution AB</title>
        <meta name="description" content="Reach Ravolution AB. Direct contact with the founding team across Stockholm, New York, Barcelona, Shanghai and Santiago." />
        <link rel="canonical" href="https://ravolution.se/en/contact" />
      </Helmet>
      <EditorialShell>
        {/* Giant email hero */}
        <section className="pt-40 pb-20 px-6 md:px-12">
          <div className="edit-container">
            <Reveal><span className="edit-label text-[hsl(var(--accent-edit))]">Direct line</span></Reveal>
            <Reveal delay={0.1}>
              <a
                href="mailto:ivan.daza@ravolution.se"
                className="block mt-6 font-display font-bold text-white uppercase tracking-[-0.04em] leading-[0.9] break-words hover:text-[hsl(var(--accent-edit))] transition-colors"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                ivan.daza<span className="text-[hsl(var(--accent-edit))]">@</span>ravolution.se
              </a>
            </Reveal>
          </div>
        </section>

        {/* Form */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Write" title="Send a message." />
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <Reveal className="md:col-span-5">
                <p className="text-xl md:text-2xl text-white/80 font-display leading-snug">
                  Tell us what you're building. We respond within 48 hours, in English, Swedish or Spanish.
                </p>
                <div className="mt-12 space-y-6 border-t border-white/10 pt-8">
                  <div>
                    <span className="edit-label text-white/45">HQ</span>
                    <p className="text-lg text-white/85 font-display mt-2">Stockholm · New York · Barcelona · Shanghai · Santiago</p>
                  </div>
                  <div>
                    <span className="edit-label text-white/45">Coordinates</span>
                    <p className="edit-mono text-sm text-white/70 mt-2">59.6099° N · 16.5448° E</p>
                  </div>
                </div>
              </Reveal>

              <div className="md:col-span-7">
                {sent ? (
                  <Reveal>
                    <div className="border border-white/10 p-12">
                      <span className="edit-label text-[hsl(var(--accent-edit))]">✓ Sent</span>
                      <h3 className="edit-h2 text-white mt-4">Message received.</h3>
                      <p className="text-white/65 mt-4">We'll respond within 48 hours.</p>
                    </div>
                  </Reveal>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <Field label="01 / Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                    <Field label="02 / Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                    <label className="block">
                      <span className="block edit-label text-white/45 mb-3">03 / Message</span>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors resize-none"
                      />
                    </label>
                    <button type="submit" disabled={loading} className="edit-btn">
                      <span>{loading ? "Sending…" : "Send Message"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default ContactPage;
