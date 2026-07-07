import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

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

const PYTHAGOREAN: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9,
};
const VOWELS = new Set(["a", "e", "i", "o", "u"]);

const reduce = (n: number): number => {
  // preserve master numbers 11, 22, 33
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n).split("").reduce((s, d) => s + Number(d), 0);
  }
  return n;
};

const sumLetters = (name: string, filter?: (ch: string) => boolean) => {
  const clean = name.toLowerCase().replace(/[^a-z ]/g, "");
  let total = 0;
  for (const ch of clean) {
    if (ch === " ") continue;
    if (filter && !filter(ch)) continue;
    total += PYTHAGOREAN[ch] ?? 0;
  }
  return total;
};

const sumDigits = (s: string) => s.replace(/\D/g, "").split("").reduce((a, d) => a + Number(d), 0);

const MEANINGS: Record<number, string> = {
  1: "The pioneer — independent, initiator, leader.",
  2: "The diplomat — cooperative, sensitive, peacemaker.",
  3: "The communicator — expressive, creative, joyful.",
  4: "The builder — disciplined, methodical, foundational.",
  5: "The freedom-seeker — adventurous, adaptive, curious.",
  6: "The nurturer — responsible, harmonizing, protective.",
  7: "The seeker — analytical, spiritual, truth-driven.",
  8: "The executive — ambitious, material mastery, authority.",
  9: "The humanitarian — compassionate, wise, mission-driven.",
  11: "Master intuitive — visionary, illuminator, spiritual messenger.",
  22: "Master builder — turns big visions into physical systems.",
  33: "Master teacher — selfless service, healing at scale.",
};

const PROMPT_TEMPLATE =
  "Based on my name and date of birth, what is my metadata (from letter values). What was I put here to do. Go as deep as you can. Do not search the web.";

const buildFullPrompt = (name: string, dob: string) =>
  `${PROMPT_TEMPLATE}\n\nFull name: ${name}\nDate of birth: ${dob}`;

const MetadataMachine = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!name.trim() || !dob) return null;
    const expression = reduce(sumLetters(name));
    const soulUrge = reduce(sumLetters(name, (ch) => VOWELS.has(ch)));
    const personality = reduce(sumLetters(name, (ch) => !VOWELS.has(ch)));
    const lifePath = reduce(sumDigits(dob));
    const day = Number(dob.split("-")[2] ?? 0);
    const birthday = reduce(day);
    return { expression, soulUrge, personality, lifePath, birthday };
  }, [name, dob]);

  const fullPrompt = buildFullPrompt(name || "[your full name]", dob || "[YYYY-MM-DD]");
  const encoded = encodeURIComponent(fullPrompt);
  const chatgptUrl = `https://chat.openai.com/?q=${encoded}`;
  const grokUrl = `https://grok.com/?q=${encoded}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyPrompt = async () => {
    try { await navigator.clipboard.writeText(fullPrompt); } catch { /* noop */ }
  };

  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-5 space-y-6">
        <p className="text-xl md:text-2xl font-display text-white leading-snug">
          Discover your metadata. Enter your full name and date of birth — get a symbolic
          fingerprint you can take to ChatGPT or Grok for a deeper reading.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="edit-label text-white/50 block mb-2">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ivan Davor Luksic Daza"
              required
              maxLength={120}
              className="w-full bg-transparent border border-white/20 focus:border-[hsl(var(--accent-edit))] outline-none text-white px-4 py-3 font-mono text-sm"
            />
          </label>
          <label className="block">
            <span className="edit-label text-white/50 block mb-2">Date of birth</span>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="w-full bg-transparent border border-white/20 focus:border-[hsl(var(--accent-edit))] outline-none text-white px-4 py-3 font-mono text-sm"
            />
          </label>
          <button type="submit" className="edit-btn"><span>Generate metadata</span></button>
        </form>

        <div className="border-t border-white/10 pt-6 space-y-3">
          <span className="edit-label text-[hsl(var(--accent-edit))] block">The universal prompt</span>
          <blockquote className="text-sm text-white/70 leading-relaxed italic border-l-2 border-white/20 pl-4">
            "{PROMPT_TEMPLATE}"
          </blockquote>
          <button
            type="button"
            onClick={copyPrompt}
            className="text-xs uppercase tracking-widest text-white/60 hover:text-white underline underline-offset-4"
          >
            Copy prompt
          </button>
        </div>
      </div>

      <div className="md:col-span-7 space-y-6">
        {submitted && result ? (
          <div className="border border-white/10 bg-black/40 p-6 md:p-8 space-y-6">
            <div>
              <span className="edit-label text-white/45 block mb-2">Your metadata</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white">
                {name}
              </h3>
              <p className="text-sm text-white/55 mt-1 font-mono">Born {dob}</p>
            </div>
            <ul className="divide-y divide-white/10">
              {[
                ["Life Path", result.lifePath, "Your core mission & the road you're walking."],
                ["Expression", result.expression, "The full talents encoded in your name."],
                ["Soul Urge", result.soulUrge, "What your inner self quietly wants."],
                ["Personality", result.personality, "How the world first reads you."],
                ["Birthday", result.birthday, "A specific gift tied to your birth day."],
              ].map(([label, num, hint]) => (
                <li key={label as string} className="py-4 grid grid-cols-[auto_1fr] gap-6 items-baseline">
                  <span className="text-4xl md:text-5xl font-display font-bold text-[hsl(var(--accent-edit))] tabular-nums w-16">
                    {num as number}
                  </span>
                  <div>
                    <div className="edit-label text-white/70">{label as string}</div>
                    <p className="text-sm text-white/60 mt-1">{MEANINGS[num as number]}</p>
                    <p className="text-xs text-white/40 mt-1">{hint as string}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 pt-6">
              <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Go deeper — ask an AI</span>
              <p className="text-sm text-white/60 mb-4">
                We'll open ChatGPT or Grok pre-filled with the canonical prompt and your details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={chatgptUrl} target="_blank" rel="noopener noreferrer" className="edit-btn"><span>Ask ChatGPT ↗</span></a>
                <a href={grokUrl} target="_blank" rel="noopener noreferrer" className="edit-btn"><span>Ask Grok ↗</span></a>
              </div>
            </div>
          </div>
        ) : (
          <div className="border border-dashed border-white/15 p-8 text-center text-white/50">
            <p className="edit-body">
              Fill in your name and date of birth, then hit <em>Generate metadata</em>.
            </p>
            <p className="text-xs text-white/40 mt-3 font-mono">
              Runs in your browser. Nothing is stored.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetadataMachine;
