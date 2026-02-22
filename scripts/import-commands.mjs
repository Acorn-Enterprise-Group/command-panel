import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const INPUT_PATH = path.join(ROOT, 'data', 'staging', 'commands.csv');
const OUTPUT_PATH = path.join(ROOT, 'data', 'commands.generated.ts');

const TOOL_IDS = new Set([
  'start-here',
  'fix-common',
  'git-basics',
  'database-prisma',
  'troubleshoot',
  'reset-safe',
  'reset-nuclear'
]);

const INTENT_HINTS = new Map([
  ['fix', 'fix'],
  ['learn', 'learn'],
  ['compare', 'compare'],
  ['browse', 'browse']
]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(field);
      field = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') {
        i += 1;
      }
      row.push(field);
      field = '';
      if (row.some((cell) => cell.trim() !== '')) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.some((cell) => cell.trim() !== '')) {
      rows.push(row);
    }
  }

  return rows;
}

function toKebabCase(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitList(value, delimiter) {
  return value
    .split(delimiter)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseSources(value) {
  const entries = splitList(value, '|');
  return entries.map((entry) => {
    if (!entry) return null;
    if (!entry.startsWith('http') && entry.includes(':')) {
      const [label, ...rest] = entry.split(':');
      return { label: label.trim() || 'Source', url: rest.join(':').trim() };
    }
    return { label: 'Source', url: entry.trim() };
  }).filter(Boolean);
}

function parseMistakes(value) {
  const entries = splitList(value, '|');
  return entries.map((entry) => {
    if (entry.includes('=>')) {
      const [mistake, fix] = entry.split('=>');
      return { mistake: mistake.trim(), fix: fix.trim() };
    }
    if (entry.includes('::')) {
      const [mistake, fix] = entry.split('::');
      return { mistake: mistake.trim(), fix: fix.trim() };
    }
    return {
      mistake: entry.trim(),
      fix: 'Check the command, spelling, and folder, then try again.'
    };
  });
}

function inferIntent(tags) {
  for (const tag of tags) {
    if (INTENT_HINTS.has(tag)) return INTENT_HINTS.get(tag);
  }
  return 'do';
}

function inferTool(tags) {
  return tags.find((tag) => TOOL_IDS.has(tag)) ?? 'imported';
}

async function main() {
  const raw = await readFile(INPUT_PATH, 'utf8');
  const rows = parseCsv(raw);
  if (rows.length < 2) {
    throw new Error('CSV is empty or missing data rows.');
  }

  const headers = rows[0].map((header) => header.trim());
  const headerIndex = new Map(headers.map((header, index) => [header, index]));
  const requiredHeaders = [
    'id',
    'title',
    'description',
    'tags',
    'maclinux_command',
    'windows_command',
    'commonMistakes',
    'sources'
  ];

  const missingHeaders = requiredHeaders.filter((header) => !headerIndex.has(header));
  if (missingHeaders.length > 0) {
    throw new Error(`Missing required headers: ${missingHeaders.join(', ')}`);
  }

  const errors = [];
  const warnings = [];
  const seenIds = new Set();
  const commands = [];
  const now = new Date().toISOString().slice(0, 10);

  rows.slice(1).forEach((row, index) => {
    const get = (key) => (row[headerIndex.get(key)] ?? '').trim();
    const rawId = get('id');
    const id = toKebabCase(rawId);

    if (!rawId) {
      errors.push(`Row ${index + 2}: id is required.`);
      return;
    }
    if (rawId !== id) {
      errors.push(`Row ${index + 2}: id must be kebab-case (got "${rawId}").`);
      return;
    }
    if (seenIds.has(id)) {
      errors.push(`Row ${index + 2}: duplicate id "${id}".`);
      return;
    }
    seenIds.add(id);

    const title = get('title');
    const description = get('description');
    const maclinuxCommand = get('maclinux_command');
    const windowsCommand = get('windows_command');

    if (!title) errors.push(`Row ${index + 2}: title is required.`);
    if (!description) errors.push(`Row ${index + 2}: description is required.`);
    if (!maclinuxCommand) errors.push(`Row ${index + 2}: maclinux_command is required.`);
    if (!windowsCommand) errors.push(`Row ${index + 2}: windows_command is required.`);

    const tags = splitList(get('tags'), ',');
    const mistakes = parseMistakes(get('commonMistakes'));
    const sources = parseSources(get('sources'));

    if (sources.length === 0) {
      errors.push(`Row ${index + 2}: sources are required.`);
    }
    if (mistakes.length === 0) {
      warnings.push(`Row ${index + 2}: commonMistakes is empty.`);
    }

    const tool = inferTool(tags);
    const intent = inferIntent(tags);

    commands.push({
      id,
      slug: id,
      name: title,
      primaryIntent: intent,
      tools: [tool],
      tags,
      defaultVariantKey: 'windows:powershell',
      variants: {
        'windows:powershell': {
          platform: 'windows',
          shell: 'powershell',
          command: windowsCommand
        },
        'mac:bash': {
          platform: 'mac',
          shell: 'bash',
          command: maclinuxCommand
        },
        'linux:bash': {
          platform: 'linux',
          shell: 'bash',
          command: maclinuxCommand
        }
      },
      learning: {
        whatItDoes: description,
        whenToUse: `Use this when you need to ${description.toLowerCase()}.`,
        examples: [
          {
            title: 'Basic example',
            snippet: windowsCommand,
            explanation: description
          }
        ],
        commonMistakes: mistakes,
        warnings: []
      },
      sources,
      lastReviewed: now
    });
  });

  if (errors.length > 0) {
    errors.forEach((message) => console.error(`ERROR: ${message}`));
    process.exit(1);
  }

  warnings.forEach((message) => console.warn(`WARN: ${message}`));

  const output = [
    "import type { Command } from './schema';",
    '',
    `export const generatedCommands: Command[] = ${JSON.stringify(commands, null, 2)};`,
    ''
  ].join('\n');

  await writeFile(OUTPUT_PATH, output, 'utf8');
  console.log(`Wrote ${commands.length} commands to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(`ERROR: ${error.message}`);
  process.exit(1);
});
