import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My fridge hums all night like it pays rent, yet the only thing it ever produces is a light and disappointment.";

// The gate wants exactly one line of 1–200 chars: enforce it, don't trust it.
const line = roast.replace(/\s+/g, " ").trim();
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line out of gate: ${line.length} chars`);
}

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
