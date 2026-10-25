export type NumerologyTopic = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  toolTitle: string;
  guideTitle: string;
  sections: { h: string; p: string }[];
  faq: { q: string; a: string }[];
};

export const NUMEROLOGY_TOPICS: NumerologyTopic[] = [
  {
    slug: "life-path-number-calculator",
    title: "Life Path Number Calculator — Free & Instant | Ravolution AB",
    description: "Free life path number calculator. Enter your date of birth to get your Life Path number (incl. master numbers) and its meaning, then go deeper with ChatGPT or Grok.",
    h1: "Life Path Number Calculator",
    intro: "Your Life Path number is the most important number in Pythagorean numerology. It is calculated from your full date of birth and describes the road you are walking.",
    toolTitle: "Calculate your Life Path",
    guideTitle: "How the Life Path number works",
    sections: [
      { h: "How to calculate it", p: "Add every digit of your birth date together (for example 1975-03-14 → 1+9+7+5+0+3+1+4 = 30), then reduce to a single digit (3+0 = 3). The totals 11, 22 and 33 are kept as master numbers." },
      { h: "What the numbers mean", p: "1 is the pioneer, 2 the diplomat, 3 the communicator, 4 the builder, 5 the freedom-seeker, 6 the nurturer, 7 the seeker, 8 the executive and 9 the humanitarian. 11, 22 and 33 are the master intuitive, master builder and master teacher." },
      { h: "Combine it with your name", p: "Numerology also reads your full birth name. The calculator above gives your Expression, Soul Urge and Personality numbers too, for a fuller picture." },
    ],
    faq: [
      { q: "Is the Life Path number the same as a birthday number?", a: "No. The Birthday number uses only the day you were born; the Life Path uses the full date." },
      { q: "Why are 11, 22 and 33 not reduced?", a: "In Pythagorean numerology these are master numbers and are traditionally kept as they are." },
      { q: "Is my data stored?", a: "No. The calculation runs in your browser and nothing is saved." },
    ],
  },
  {
    slug: "name-numerology",
    title: "Name Numerology Calculator — What Your Name Means | Ravolution AB",
    description: "Free name numerology calculator using Pythagorean letter values. Find your Expression, Soul Urge and Personality numbers from your full name.",
    h1: "Name Numerology",
    intro: "Every letter in your name carries a number from 1 to 9. Added together they form the symbolic metadata of your name: your Expression, Soul Urge and Personality numbers.",
    toolTitle: "Read your name",
    guideTitle: "How name numerology works",
    sections: [
      { h: "Pythagorean letter values", p: "A, J, S = 1 · B, K, T = 2 · C, L, U = 3 · D, M, V = 4 · E, N, W = 5 · F, O, X = 6 · G, P, Y = 7 · H, Q, Z = 8 · I, R = 9." },
      { h: "Expression, Soul Urge and Personality", p: "All letters give your Expression number (your talents). Vowels only give your Soul Urge (what you inwardly want). Consonants only give your Personality (how others first read you)." },
      { h: "Which name to use", p: "Use your full name as written on your birth certificate, including middle names, for the traditional reading." },
    ],
    faq: [
      { q: "Does a nickname or married name change my numbers?", a: "Traditionally the birth name is your core reading; a name you use today can be read as an additional layer." },
      { q: "Is Y a vowel?", a: "This calculator treats A, E, I, O and U as vowels and Y as a consonant." },
      { q: "Is my data stored?", a: "No. The calculation runs in your browser and nothing is saved." },
    ],
  },
  {
    slug: "what-does-my-birthdate-say-about-me",
    title: "What Does My Birthdate Say About Me? Free Reading | Ravolution AB",
    description: "Find out what your date of birth says about you. Free numerology reading of your Life Path and Birthday numbers, plus a ready prompt for ChatGPT and Grok.",
    h1: "What Does My Birthdate Say About Me?",
    intro: "In numerology your date of birth holds two key numbers: your Life Path (from the full date) and your Birthday number (from the day). Enter your details to see both.",
    toolTitle: "Read your birthdate",
    guideTitle: "What your birth date reveals",
    sections: [
      { h: "Your Life Path", p: "The sum of every digit in your birth date, reduced to one digit or a master number. It describes your core direction." },
      { h: "Your Birthday number", p: "The day of the month you were born, reduced. It points to a specific gift you bring." },
      { h: "Go deeper with AI", p: "After your reading, open ChatGPT or Grok pre-filled with the universal prompt and your details for a longer interpretation. Running it in two models and comparing the answers is a good check." },
    ],
    faq: [
      { q: "Do I need my birth time?", a: "No. Numerology uses only the date; birth time is used in astrology." },
      { q: "Is this scientific?", a: "Numerology is a symbolic tradition, not a science. Treat the reading as reflection, not prediction." },
      { q: "Is my data stored?", a: "No. The calculation runs in your browser and nothing is saved." },
    ],
  },
];

export const getTopic = (slug: string) => NUMEROLOGY_TOPICS.find((t) => t.slug === slug)!;

export const topicHead = (slug: string) => {
  const t = getTopic(slug);
  const url = `https://ravolution.se/${slug}`;
  return {
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  };
};
