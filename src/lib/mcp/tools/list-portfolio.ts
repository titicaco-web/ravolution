import { defineTool } from "@lovable.dev/mcp-js";

const VENTURES = [
  { name: "iApply", summary: "Transparent recruitment platform.", url: "https://iapply.se" },
  { name: "CommunicaringSchool", summary: "Internet-based K1–K9 school for underserved regions.", url: "https://ravolution.se/en/portfolio" },
  { name: "SINGUISTIC", summary: "Music-native language learning, live in 26 languages.", url: "https://singuistic.com" },
  { name: "Okwerin", summary: "Contract lifecycle and e-signing; 0 kr/month, 19 kr per finished contract.", url: "https://okwerin.com" },
  { name: "CarbonX", summary: "Carbon platform built by Ravolution.", url: "https://ravolution.se/en/carbonx" },
  { name: "Pratis", summary: "Swedish-speaking AI companion for lonely older adults.", url: "https://ravolution.se/en/pratis" },
  { name: "AIMagnifica", summary: "Enterprise AI governance & compliance layer, available for sale.", url: "https://ravolution.se/en/portfolio" },
  { name: "BizMeet", summary: "White-label community operating system for 2,000–20,000 members.", url: "https://ravolution.se/en/bizmeet" },
  { name: "AlarmSole", summary: "Connected footwear safety platform, patent pending.", url: "https://ravolution.se/en/alarmsole" },
  { name: "PikpCash", summary: "Direct sales gamification platform.", url: "https://ravolution.se/en/pikpcash" },
  { name: "xPortMatch", summary: "AI trade infrastructure.", url: "https://ravolution.se/en/xportmatch" },
  { name: "Partysta", summary: "Party planning and memory sharing; available for acquisition.", url: "https://ravolution.se/en/partysta" },
];

export default defineTool({
  name: "list_portfolio",
  title: "List Ravolution portfolio",
  description: "List Ravolution's public portfolio ventures with a one-line summary and link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: VENTURES.map((v) => `${v.name}: ${v.summary} ${v.url}`).join("\n") }],
    structuredContent: { ventures: VENTURES.map((v) => ({ ...v })) },
  }),
});
