/**
 * i18n coverage check.
 *
 * Fails the build if `sv` or `es` are missing any key present in `en`,
 * so translation drift can't ship silently as raw dot-paths ("services.hero.title")
 * rendered to end users.
 *
 * Run: `bun run scripts/check-i18n.ts`
 */
import { en } from "../src/i18n/translations/en";
import { sv } from "../src/i18n/translations/sv";
import { es } from "../src/i18n/translations/es";

type Dict = Record<string, unknown>;

function flatten(obj: unknown, prefix = ""): string[] {
  if (obj === null || typeof obj !== "object") return [];
  return Object.entries(obj as Dict).flatMap(([k, v]) => {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      return flatten(v, path);
    }
    return [path];
  });
}

const enKeys = new Set(flatten(en));
const svKeys = new Set(flatten(sv));
const esKeys = new Set(flatten(es));

const missingSv = [...enKeys].filter((k) => !svKeys.has(k));
const missingEs = [...enKeys].filter((k) => !esKeys.has(k));
const extraSv = [...svKeys].filter((k) => !enKeys.has(k));
const extraEs = [...esKeys].filter((k) => !enKeys.has(k));

const problems =
  missingSv.length + missingEs.length + extraSv.length + extraEs.length;

console.log(`en: ${enKeys.size} keys · sv: ${svKeys.size} · es: ${esKeys.size}`);

if (missingSv.length) {
  console.error(`\n❌ ${missingSv.length} key(s) missing in sv:`);
  missingSv.slice(0, 20).forEach((k) => console.error("   - " + k));
  if (missingSv.length > 20) console.error(`   … and ${missingSv.length - 20} more`);
}
if (missingEs.length) {
  console.error(`\n❌ ${missingEs.length} key(s) missing in es:`);
  missingEs.slice(0, 20).forEach((k) => console.error("   - " + k));
  if (missingEs.length > 20) console.error(`   … and ${missingEs.length - 20} more`);
}
if (extraSv.length) {
  console.warn(`\n⚠️  ${extraSv.length} key(s) in sv but not en (stale?):`);
  extraSv.slice(0, 10).forEach((k) => console.warn("   - " + k));
}
if (extraEs.length) {
  console.warn(`\n⚠️  ${extraEs.length} key(s) in es but not en (stale?):`);
  extraEs.slice(0, 10).forEach((k) => console.warn("   - " + k));
}

if (missingSv.length || missingEs.length) {
  console.error("\ni18n coverage check FAILED");
  process.exit(1);
}
console.log(problems === 0 ? "\n✅ i18n coverage OK" : "\n✅ no missing keys (warnings above)");
