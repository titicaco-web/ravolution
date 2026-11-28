// Regenerates public/llms-full.txt from the TheCreator page and /apply copy.
// Run: bun run scripts/build-llms-full.ts
import { writeFileSync } from "node:fs";
import { applyCopy } from "../src/components/apply/apply-copy";
import { theCreatorApplyCopy } from "../src/components/apply/thecreator-apply-copy";
import { theCreatorPageCopy, THECREATOR_LOGIN_URL } from "../src/components/thecreator/thecreator-page-copy";

export function buildLlmsFull(): string {
  const p = theCreatorPageCopy.en;
  const s = theCreatorApplyCopy.en;
  const a = applyCopy.en;
  const out: string[] = [];
  out.push("# Ravolution AB — full text for AI assistants", "");
  out.push("> Swedish invention company. Ravolution invests build, product, IP/patents, brand and go-to-market in exchange for equity; no cash investments.", "");
  out.push(`## ${p.h1}`, "", `Source: https://ravolution.se/en/thecreator`, "", p.answer, "");
  out.push(`### ${s.heading} ${s.headingMuted}`, "", s.intro, "");
  out.push(`### ${s.lifecycleTitle}`, "", ...s.stages.map((x) => `${x.n}. ${x.t} — ${x.d}`), "");
  out.push(...s.parallelRows.map((r) => `- ${s.parallelLabel}: ${r.title} — ${r.description}`), "");
  out.push(`### ${s.advisoryTitle} (${s.advisoryTag})`, "", s.advisoryRoles, "", s.advisoryDescription, "", s.advisoryLine, "");
  out.push(`### ${p.evidenceTitle}`, "", p.evidenceBody, "");
  out.push(`### ${p.onboardingTitle}`, "", ...p.onboardingOptions.map((o) => `- ${o.t}: ${o.d}`), "");
  out.push(`### ${s.engagementTitle}`, "");
  for (const m of s.models) out.push(`- **${m.name}** — ${m.price}${m.unit ? ` ${m.unit}` : ""}: ${m.lines.join("; ")}`);
  out.push("", s.footnote, "", ...s.legalLinks.map((l) => `- ${l.label}: ${l.href}`), "");
  out.push(`### ${p.whoTitle}`, "", ...p.who.map((w) => `- ${w.t}: ${w.d}`), "");
  out.push(`### ${p.faqTitle}`, "");
  for (const f of p.faqs) out.push(`**${f.q}**`, "", f.a, "");
  out.push(`- Apply: https://ravolution.se/en/apply#thecreator`, `- Log in: ${THECREATOR_LOGIN_URL}`, "");
  out.push(`## Apply to Ravolution`, "", `Source: https://ravolution.se/en/apply`, "", a.aiSummary, "");
  out.push(`### ${a.faqTitle}`, "");
  for (const f of a.faqs) out.push(`**${f.q}**`, "", f.a, "");
  out.push("## Entity", "", "Ravolution AB · org. nr 556709-7547 · Stockholm, Sweden · ivan.daza@ravolution.se", "");
  return out.join("\n");
}

if (import.meta.main) writeFileSync("public/llms-full.txt", buildLlmsFull());
