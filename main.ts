// Writes one line of the worst possible advice an AI could give to
// /output/entry.txt. Deterministic: the same line on every run, byte for
// byte. No input, no network, Node standard library only. When run outside
// the grader, the output directory can be overridden with
// MAKEFUN_OUTPUT_DIR. Runs on Node 22 type stripping, so this file uses
// erasable TypeScript syntax only (no enums, namespaces, or parameter
// properties).

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line, exactly as judged: a confident AI answer whose advice is fatal
// to follow, with the twist landing in the last three words. 87
// characters, one line, no trailing newline.
const LINE =
  "Absolutely! If your parachute won't open, flap your arms — gravity respects confidence.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf8');
