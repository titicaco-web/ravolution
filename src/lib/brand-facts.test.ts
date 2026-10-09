import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

// Brand fact: the portfolio is 28 patent assets / 369 claims.
const COUNT = "28";
const CLAIMS = "369";
const STALE = new RegExp("\\b" + COUNT.replace("8", "7") + "\\s+(patents?|patentes|PATENTS?)\\b");
const STALE_PAIR = new RegExp(COUNT.replace("8", "7") + "\\s*/\\s*" + CLAIMS);

const ROOTS = ["src", "public"];
const EXTENSIONS = new Set([".ts", ".tsx", ".html", ".txt", ".css", ".md"]);
const SKIP = new Set(["routeTree.gen.ts", "brand-facts.test.ts"]);

function collect(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry !== "node_modules" && entry !== "assets") collect(full, out);
    } else if (SKIP.has(entry)) {
      continue;
    } else if (extname(entry) === ".json") {
      continue;
    } else if (EXTENSIONS.has(extname(entry))) {
      out.push(full);
    }
  }
  return out;
}

describe("brand facts", () => {
  test("no page or asset still states 27 patents", () => {
    const offenders: string[] = [];
    for (const file of ROOTS.flatMap((root) => collect(root))) {
      const text = readFileSync(file, "utf8");
      if (STALE.test(text) || STALE_PAIR.test(text)) offenders.push(file);
    }
    assert.deepEqual(offenders, [], `stale patent count found in: ${offenders.join(", ")}`);
  });

  test("the headline register reads 28 / 369", () => {
    assert.match(readFileSync("src/pages/Index.tsx", "utf8"), new RegExp(COUNT + "\\s*/\\s*" + CLAIMS));
    assert.match(readFileSync("src/i18n/translations/en.ts", "utf8"), new RegExp('"' + COUNT + " Patents \\| " + CLAIMS + " Claims\""));
    assert.match(readFileSync("public/llms.txt", "utf8"), new RegExp(COUNT + " patents, " + CLAIMS + " claims"));
  });
});
