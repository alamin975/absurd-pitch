import { mkdirSync, writeFileSync } from "node:fs";

// Byte-for-byte: one sentence, no trailing newline.
const LINE = "A dating app for your fridge and your oven, matching appliances that met at 180 degrees.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
