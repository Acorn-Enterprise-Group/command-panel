import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const BASE_PATH = path.join(ROOT, 'data', 'commands.ts');
const GENERATED_PATH = path.join(ROOT, 'data', 'commands.generated.ts');

function extractJsonArray(source, marker) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return null;

  const assignIndex = source.indexOf('=', markerIndex);
  if (assignIndex === -1) return null;

  const start = source.indexOf('[', assignIndex);
  if (start === -1) return null;

  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (char === '[') depth += 1;
    if (char === ']') depth -= 1;
    if (depth === 0) {
      const slice = source.slice(start, i + 1);
      return slice;
    }
  }

  return null;
}

function parseJsonArray(text, label) {
  if (!text) {
    throw new Error(`Unable to find array for ${label}.`);
  }
  return JSON.parse(text);
}

async function main() {
  const baseSource = await readFile(BASE_PATH, 'utf8');
  const generatedSource = await readFile(GENERATED_PATH, 'utf8');

  const baseArrayText = extractJsonArray(baseSource, 'const baseCommands');
  const generatedArrayText = extractJsonArray(generatedSource, 'generatedCommands');

  const base = parseJsonArray(baseArrayText, 'baseCommands');
  const generated = parseJsonArray(generatedArrayText, 'generatedCommands');

  const ids = new Set();
  base.forEach((command) => ids.add(command.id));
  generated.forEach((command) => ids.add(command.id));

  console.log(`Base commands: ${base.length}`);
  console.log(`Generated commands: ${generated.length}`);
  console.log(`Total unique commands: ${ids.size}`);
}

main().catch((error) => {
  console.error(`ERROR: ${error.message}`);
  process.exit(1);
});
