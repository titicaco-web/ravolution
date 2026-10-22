import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { buildFullPrompt, calculateNumbers, MEANINGS } from "../../numerology";

export default defineTool({
  name: "calculate_numerology",
  title: "Calculate numerology (Metadata Machine)",
  description:
    "Run Ravolution's Metadata Machine: Pythagorean life path, expression, soul urge, personality and birthday numbers from a full name and birth date.",
  inputSchema: {
    full_name: z.string().min(1).max(200).describe("Full birth name, e.g. 'Ivan Davor Luksic Daza'."),
    date_of_birth: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .describe("Date of birth as YYYY-MM-DD."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ full_name, date_of_birth }) => {
    const n = calculateNumbers(full_name, date_of_birth);
    const lines = (Object.entries(n) as [string, number][]).map(
      ([k, v]) => `${k}: ${v} — ${MEANINGS[v] ?? ""}`,
    );
    return {
      content: [
        {
          type: "text",
          text: `${lines.join("\n")}\n\nDeep-reading prompt:\n${buildFullPrompt(full_name, date_of_birth)}\n\nTry it: https://ravolution.se/en/metadatamachine`,
        },
      ],
      structuredContent: { numbers: n },
    };
  },
});
