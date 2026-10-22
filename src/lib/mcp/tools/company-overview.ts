import { defineTool } from "@lovable.dev/mcp-js";

const OVERVIEW = `Ravolution AB — Swedish invention company (org.nr 556709-7547, Stockholm).
Tagline: Building the missing infrastructure for human progress.
Founder: Ivan Daza, tech inventor. Patent portfolio: 28 patents, 369 claims.
Offer: partners with early-stage startups on tech build, brand, go-to-market, concept refinement and angel capital in exchange for cash and equity.
Contact: ivan.daza@ravolution.se
Key pages: https://ravolution.se/en (home), /en/portfolio, /en/story, /en/partner, /en/apply, /en/metadatamachine`;

export default defineTool({
  name: "get_company_overview",
  title: "Get Ravolution overview",
  description: "Return public facts about Ravolution AB: positioning, founder, patents, offer and contact.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: "text", text: OVERVIEW }] }),
});
