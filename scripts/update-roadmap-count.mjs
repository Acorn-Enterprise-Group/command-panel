import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const ROADMAP_PATH = path.join(ROOT, 'docs', 'LIVING_ROADMAP.md');
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
      return source.slice(start, i + 1);
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

async function getCounts() {
  const baseSource = await readFile(BASE_PATH, 'utf8');
  const generatedSource = await readFile(GENERATED_PATH, 'utf8');

  const baseArrayText = extractJsonArray(baseSource, 'const baseCommands');
  const generatedArrayText = extractJsonArray(generatedSource, 'generatedCommands');

  const base = parseJsonArray(baseArrayText, 'baseCommands');
  const generated = parseJsonArray(generatedArrayText, 'generatedCommands');

  const ids = new Set();
  base.forEach((command) => ids.add(command.id));
  generated.forEach((command) => ids.add(command.id));

  return { total: ids.size };
}

async function main() {
  const { total } = await getCounts();
  const raw = await readFile(ROADMAP_PATH, 'utf8');
  const lines = raw.split(/\r?\n/);

  const snapshotIndex = lines.findIndex((line) => line.trim() === '## Current State Snapshot');
  if (snapshotIndex === -1) {
    throw new Error('Current State Snapshot section not found.');
  }

  const nextHeaderIndex = lines
    .slice(snapshotIndex + 1)
    .findIndex((line) => line.startsWith('## '));
  const sectionEnd = nextHeaderIndex === -1 ? lines.length : snapshotIndex + 1 + nextHeaderIndex;

  let replaced = false;
  for (let i = snapshotIndex + 1; i < sectionEnd; i += 1) {
    if (lines[i].startsWith('- Command count:')) {
      lines[i] = `- Command count: ${total}`;
      replaced = true;
      break;
    }
  }

  if (!replaced) {
    lines.splice(snapshotIndex + 2, 0, `- Command count: ${total}`);
  }

  await writeFile(ROADMAP_PATH, lines.join('\n'), 'utf8');
  console.log(`Roadmap updated: Command count ${total}`);
}

main().catch((error) => {
  console.error(`ERROR: ${error.message}`);
  process.exit(1);
});
