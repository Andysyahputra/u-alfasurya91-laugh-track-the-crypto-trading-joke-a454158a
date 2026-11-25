// Laugh Track: The Crypto Trading Joke Contest
// Writes the entry line (a single crypto-trading joke, 127 chars) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My exchange went into 'scheduled maintenance' the exact minute my coin pumped, which is the most honest thing it has ever done.";

// Hardening: enforce the competition gate before writing anything, so a
// bad entry fails loudly here instead of being graded as invalid.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Verify what was actually written matches the entry byte for byte.
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY) {
  throw new Error("written entry does not match the decided line");
}
