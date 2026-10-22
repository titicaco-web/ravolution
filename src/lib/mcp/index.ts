import { defineMcp } from "@lovable.dev/mcp-js";
import calculateNumerology from "./tools/calculate-numerology";
import companyOverview from "./tools/company-overview";
import listPortfolio from "./tools/list-portfolio";

export default defineMcp({
  name: "ravolution",
  title: "ravolution",
  version: "0.1.0",
  instructions:
    "Public tools for Ravolution AB, a Swedish invention company. Get the company overview, list portfolio ventures, or run the Metadata Machine numerology calculator from a name and birth date.",
  tools: [companyOverview, listPortfolio, calculateNumerology],
});
