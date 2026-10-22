import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";

/**
 * Metadata Creation Machine
 * ─────────────────────────
 * Users enter their full name + date of birth. The component computes a
 * Pythagorean numerology "metadata" profile locally (Life Path, Expression,
 * Soul Urge, Personality, Birthday) and then provides one-click buttons that
 * open ChatGPT or Grok pre-filled with the canonical prompt:
 *
 *   "Based on my name and date of birth, what is my metadata (from letter
 *    values). What was I put here to do. Go as deep as you can. Do not search
 *    the web."
 *
 * The full name and DOB are appended to the prompt so the AI has full context.
 */

import { buildFullPrompt, calculateNumbers, MEANINGS } from "@/lib/numerology";

const MetadataMachine = ({ light = false }: { light?: boolean }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const lp = useLangPath();

  const result = useMemo(() => {
    if (!name.trim() || !dob) return null;
    return calculateNumbers(name, dob);
  }, [name, dob]);

  const fullPrompt = buildFullPrompt(name || "[your full name]", dob || "[YYYY-MM-DD]");
  const encoded = encodeURIComponent(fullPrompt);
  const chatgptUrl = `https://chat.openai.com/?q=${encoded}`;
  const grokUrl = `https://grok.com/?q=${encoded}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (result) {
      trackEvent("metadata_generate", {
        life_path: result.lifePath,
        expression: result.expression,
        soul_urge: result.soulUrge,
        has_name: Boolean(name),
        has_dob: Boolean(dob),
      });
    }
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(fullPrompt);
      trackEvent("metadata_copy_prompt");
    } catch { /* noop */ }
  };

  const shareUrl = (src: string) =>
    `https://ravolution.se/${language}/metadatamachine?utm_source=${src}&utm_medium=social&utm_campaign=metadata_share`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl("copy_link"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackEvent("metadata_share", { platform: "copy_link", life_path: result?.lifePath ?? null });
    } catch { /* noop */ }
  };

  const trackLaunch = (target: "chatgpt" | "grok") => {
    trackEvent("metadata_ai_launch", { target, life_path: result?.lifePath ?? null });
  };

  const btnClass = light ? "edit-btn edit-btn-light" : "edit-btn";
  const ink = light ? "text-[#081426]" : "text-white";
  const inkMuted = light ? "text-[#344258]" : "text-white/65";
  const inkSoft = light ? "text-[#536078]" : "text-white/55";
  const inkFaint = light ? "text-[#9AA6B4]" : "text-white/45";
  const border = light ? "border-[#081426]/15" : "border-white/10";
  const inputBorder = light ? "border-[#081426]/25 focus:border-[#7C633D]" : "border-white/20 focus:border-[hsl(var(--accent-edit))]";
  const resultBg = light ? "bg-[#efece4] border-[#081426]/15" : "bg-black/40 border-white/10";
  const placeholder = light ? "placeholder:text-[#536078]" : "placeholder:text-white/40";

  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-5 space-y-6">
        <p className={`text-xl md:text-2xl font-display leading-snug ${ink}`}>
          Discover your metadata. Enter your full name and date of birth — get a symbolic
          fingerprint you can take to ChatGPT or Grok for a deeper reading.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className={`edit-label block mb-2 ${inkFaint}`}>Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ivan Davor Luksic Daza"
              required
              maxLength={120}
              className={`w-full bg-transparent border ${inputBorder} outline-hidden px-4 py-3 font-mono text-sm ${ink} ${placeholder}`}
            />
          </label>
          <label className="block">
            <span className={`edit-label block mb-2 ${inkFaint}`}>Date of birth</span>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className={`w-full bg-transparent border ${inputBorder} outline-hidden px-4 py-3 font-mono text-sm ${ink} ${placeholder}`}
            />
          </label>
          <button type="submit" className={btnClass}><span>Generate metadata</span></button>
        </form>

        <div className={`border-t ${border} pt-6 space-y-3`}>
          <span className={`edit-label block ${light ? "text-[#7C633D]" : "text-[hsl(var(--accent-edit))]"}`}>The universal prompt</span>
          <blockquote className={`text-sm leading-relaxed italic border-l-2 pl-4 ${light ? "text-[#344258] border-[#081426]/20" : "text-white/70 border-white/20"}`}>
            "{PROMPT_TEMPLATE}"
          </blockquote>
          <button
            type="button"
            onClick={copyPrompt}
            className={`text-xs uppercase tracking-widest underline underline-offset-4 ${light ? "text-[#536078] hover:text-[#081426]" : "text-white/60 hover:text-white"}`}
          >
            Copy prompt
          </button>
        </div>
      </div>

      <div className="md:col-span-7 space-y-6">
        {submitted && result ? (
          <div className={`border ${resultBg} p-6 md:p-8 space-y-6`}>
            <div>
              <span className={`edit-label block mb-2 ${inkFaint}`}>Your metadata</span>
              <h3 className={`text-2xl md:text-3xl font-display font-bold uppercase tracking-tight ${ink}`}>
                {name}
              </h3>
              <p className={`text-sm mt-1 font-mono ${inkSoft}`}>Born {dob}</p>
            </div>
            <ul className={`divide-y ${border}`}>
              {[
                ["Life Path", result.lifePath, "Your core mission & the road you're walking."],
                ["Expression", result.expression, "The full talents encoded in your name."],
                ["Soul Urge", result.soulUrge, "What your inner self quietly wants."],
                ["Personality", result.personality, "How the world first reads you."],
                ["Birthday", result.birthday, "A specific gift tied to your birth day."],
              ].map(([label, num, hint]) => (
                <li key={label as string} className={`py-4 grid grid-cols-[auto_1fr] gap-6 items-baseline`}>
                  <span className={`text-4xl md:text-5xl font-display font-bold tabular-nums w-16 ${light ? "text-[#7C633D]" : "text-[hsl(var(--accent-edit))]"}`}>
                    {num as number}
                  </span>
                  <div>
                    <div className={`edit-label ${light ? "text-[#081426]/70" : "text-white/70"}`}>{label as string}</div>
                    <p className={`text-sm mt-1 ${inkSoft}`}>{MEANINGS[num as number]}</p>
                    <p className={`text-xs mt-1 ${inkFaint}`}>{hint as string}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={`border-t ${border} pt-6`}>
              <span className={`edit-label block mb-3 ${light ? "text-[#7C633D]" : "text-[hsl(var(--accent-edit))]"}`}>Go deeper — ask an AI</span>
              <p className={`text-sm mb-4 ${inkSoft}`}>
                We'll open ChatGPT or Grok pre-filled with the canonical prompt and your details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
               <a href={chatgptUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackLaunch("chatgpt")} className={btnClass}><span>Ask ChatGPT ↗</span></a>
               <a href={grokUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackLaunch("grok")} className={btnClass}><span>Ask Grok ↗</span></a>
              </div>
            </div>
            <div className={`border-t ${border} pt-6`}>
              <span className={`edit-label block mb-3 ${light ? "text-[#7C633D]" : "text-[hsl(var(--accent-edit))]"}`}>Share my result</span>
              <div className="flex flex-wrap gap-3">
                {(["whatsapp", "facebook", "linkedin"] as const).map((p) => {
                  const url = shareUrl(p);
                  const text = `My Life Path is ${result.lifePath}. Discover your metadata:`;
                  const href =
                    p === "whatsapp"
                      ? `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`
                      : p === "facebook"
                      ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
                      : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                  return (
                    <a key={p} href={href} target="_blank" rel="noopener noreferrer"
                      onClick={() => trackEvent("metadata_share", { platform: p, life_path: result.lifePath })}
                      className={btnClass}>
                      <span>{p === "whatsapp" ? "WhatsApp" : p === "facebook" ? "Facebook" : "LinkedIn"}</span>
                    </a>
                  );
                })}
                <button type="button" onClick={copyLink} className={btnClass}>
                  <span>{copied ? "Link copied ✓" : "Copy link"}</span>
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {submitted && result && (
          <p className={`text-xs font-mono ${inkSoft}`}>
            Built by Ravolution, the inventor of 28 patents —{" "}
            <a href={lp("/story")} onClick={() => trackEvent("metadata_story_click")}
              className={`underline underline-offset-4 ${light ? "hover:text-[#081426]" : "hover:text-white"}`}>
              read the story →
            </a>{" · "}
            <a href={lp("/portfolio")} onClick={() => trackEvent("metadata_portfolio_click")}
              className={`underline underline-offset-4 ${light ? "hover:text-[#081426]" : "hover:text-white"}`}>
              see the portfolio →
            </a>
          </p>
        )}
        {submitted && result ? null : (
          <div className={`border border-dashed p-8 text-center ${light ? "border-[#081426]/15 text-[#9AA6B4]" : "border-white/15 text-white/50"}`}>
            <p className="edit-body">
              Fill in your name and date of birth, then hit <em>Generate metadata</em>.
            </p>
            <p className={`text-xs mt-3 font-mono ${inkFaint}`}>
              Runs in your browser. Nothing is stored.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetadataMachine;
