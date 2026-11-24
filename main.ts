// Make the AI Judge Laugh: Developer Excuses
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
//
// Writes one funny single-line excuse a developer gives when code breaks
// in production to /output/entry.txt (1-200 characters, UTF-8).
//
// The joke: the deploy is innocent. The bug was already live for months -
// it just needed one stubborn customer to click the button twice, at 3 a.m.
// The twist a developer recognises: production didn't break the code, it
// finally introduced the code to a real user.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The deploy didn't break anything — that bug's been live since March, it just needed one customer stubborn enough to click the button twice, and of course he did it at 3 a.m.";

mkdirSync("/output", { recursive: true });

// Gate check (mirrors the sealed scorer): 1-200 characters, not blank.
const length = [...EXCUSE].length;
if (length < 1 || length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

writeFileSync("/output/entry.txt", EXCUSE, "utf8");

console.log(`entry (${EXCUSE.length} chars): ${EXCUSE}`);
