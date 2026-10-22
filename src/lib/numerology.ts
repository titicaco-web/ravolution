// Shared Pythagorean numerology used by the Metadata Machine UI and the MCP server.
const PYTHAGOREAN: Record<string, number> = {
  a: 1, j: 1, s: 1, b: 2, k: 2, t: 2, c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4, e: 5, n: 5, w: 5, f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7, h: 8, q: 8, z: 8, i: 9, r: 9,
};
const VOWELS = new Set(["a", "e", "i", "o", "u"]);

export const reduceNumber = (n: number): number => {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n).split("").reduce((s, d) => s + Number(d), 0);
  }
  return n;
};

const sumLetters = (name: string, filter?: (ch: string) => boolean) => {
  let total = 0;
  for (const ch of name.toLowerCase().replace(/[^a-z]/g, "")) {
    if (filter && !filter(ch)) continue;
    total += PYTHAGOREAN[ch] ?? 0;
  }
  return total;
};

const sumDigits = (s: string) => s.replace(/\D/g, "").split("").reduce((a, d) => a + Number(d), 0);

export const MEANINGS: Record<number, string> = {
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

export const PROMPT_TEMPLATE =
  "Based on my name and date of birth, what is my metadata (from letter values). What was I put here to do. Go as deep as you can. Do not search the web.";

export const buildFullPrompt = (name: string, dob: string) =>
  `${PROMPT_TEMPLATE}\n\nFull name: ${name}\nDate of birth: ${dob}`;

export function calculateNumbers(name: string, dob: string) {
  return {
    expression: reduceNumber(sumLetters(name)),
    soulUrge: reduceNumber(sumLetters(name, (ch) => VOWELS.has(ch))),
    personality: reduceNumber(sumLetters(name, (ch) => !VOWELS.has(ch))),
    lifePath: reduceNumber(sumDigits(dob)),
    birthday: reduceNumber(Number(dob.split("-")[2] ?? 0)),
  };
}
