import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import GyroscopeIcon from "@/components/icons/GyroscopeIcon";
import { submitForm } from "@/lib/submit-form";

// Gyrocraft is access-by-request: interested parties apply here and Ivan grants
// access manually. The invention material is never served to the public client.
const GyrocraftAccessRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    setStatus("sending");
    setError("");
    const { error: err } = await submitForm("send-gyrocraft-access-request", {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      message: message.trim(),
    });
    if (err) {
      setStatus("error");
      setError("Something went wrong. Please email us directly at gyrocraft@ravolution.se.");
    } else {
      setStatus("sent");
    }
  };

  return (
    <div className="min-h-screen bg-gyrocraft-dark flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gyrocraft-teal/20 rounded-full mb-6">
            <GyroscopeIcon className="w-10 h-10 text-gyrocraft-teal" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gyrocraft-text mb-2">
            Request Gyrocraft access
          </h1>
          <p className="text-gyrocraft-text/70">
            Gyrocraft materials are shared on request. Tell us who you are and why you're
            interested, and we'll be in touch.
          </p>
        </div>

        {status === "sent" ? (
          <div className="text-center border border-gyrocraft-teal/30 bg-gyrocraft-teal/10 p-8">
            <CheckCircle2 className="w-10 h-10 text-gyrocraft-teal mx-auto mb-4" />
            <h2 className="text-xl font-display font-semibold text-gyrocraft-text mb-2">
              Request received
            </h2>
            <p className="text-gyrocraft-text/70 text-sm">
              Thanks, {name.split(" ")[0] || "there"}. We've got your request and will review it
              shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <Input
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); }}
              placeholder="Your name"
              aria-label="Your name"
              className="bg-gyrocraft-dark/50 border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/40 focus:border-gyrocraft-teal"
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="Email"
              aria-label="Email"
              className="bg-gyrocraft-dark/50 border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/40 focus:border-gyrocraft-teal"
            />
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company or organisation (optional)"
              aria-label="Company or organisation"
              className="bg-gyrocraft-dark/50 border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/40 focus:border-gyrocraft-teal"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="A short note — your interest in Gyrocraft (licensing, investment, partnership…)"
              aria-label="Your note"
              rows={4}
              className="w-full rounded-md bg-gyrocraft-dark/50 border border-gyrocraft-text/20 px-3 py-2 text-sm text-gyrocraft-text placeholder:text-gyrocraft-text/40 focus:border-gyrocraft-teal focus:outline-none resize-y"
            />

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold"
            >
              {status === "sending" ? (
                <>Sending <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
              ) : (
                <>Request access <ArrowRight className="w-4 h-4 ml-2" /></>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default GyrocraftAccessRequest;
