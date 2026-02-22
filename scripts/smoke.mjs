import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

function loadTsModule(fileName) {
  const filePath = path.resolve(fileName);
  const localRequire = createRequire(filePath);
  const smartRequire = (specifier) => {
    if (specifier.startsWith('.')) {
      const basePath = path.resolve(path.dirname(filePath), specifier);
      const tsPath = basePath.endsWith('.ts') ? basePath : `${basePath}.ts`;
      if (fs.existsSync(tsPath)) {
        return loadTsModule(tsPath);
      }
    }
    return localRequire(specifier);
  };
  const source = fs.readFileSync(filePath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2019
    }
  }).outputText;

  const sandbox = {
    module: { exports: {} },
    exports: {},
    require: smartRequire,
    console
  };

  vm.runInNewContext(transpiled, sandbox, { filename: fileName });
  const moduleExports = sandbox.module.exports;
  if (moduleExports && Object.keys(moduleExports).length > 0) {
    return moduleExports;
  }
  return sandbox.exports;
}

const problems = [];

let packs;
let getPackById;
let shouldShowVariantToggle;

try {
  const indexModule = loadTsModule('data/index.ts');
  packs = indexModule.packs;
  getPackById = indexModule.getPackById;
} catch (error) {
  problems.push(`Could not load data/index.ts: ${error.message}`);
}

try {
  const variantModule = loadTsModule('lib/variants.ts');
  shouldShowVariantToggle = variantModule.shouldShowVariantToggle;
} catch (error) {
  problems.push(`Could not load lib/variants.ts: ${error.message}`);
}

if (!Array.isArray(packs)) {
  problems.push('packs did not load as an array.');
} else {
  const packIds = new Set();

  packs.forEach((pack, packIndex) => {
    if (!pack.id || !pack.slug || !pack.title) {
      problems.push(`Pack at index ${packIndex} is missing id, slug, or title.`);
      return;
    }

    if (packIds.has(pack.id)) {
      problems.push(`Duplicate pack id found: ${pack.id}`);
    }
    packIds.add(pack.id);

    if (!Array.isArray(pack.commands)) {
      problems.push(`Pack ${pack.id} has no commands array.`);
      return;
    }

    const commandIds = new Set();
    const commandSlugs = new Set();

    pack.commands.forEach((command, commandIndex) => {
      if (!command.id || !command.slug || !command.name) {
        problems.push(
          `Command at index ${commandIndex} in pack ${pack.id} is missing id, slug, or name.`
        );
      }

      if (commandIds.has(command.id)) {
        problems.push(`Duplicate command id found in pack ${pack.id}: ${command.id}`);
      } else {
        commandIds.add(command.id);
      }

      if (commandSlugs.has(command.slug)) {
        problems.push(`Duplicate command slug found in pack ${pack.id}: ${command.slug}`);
      } else {
        commandSlugs.add(command.slug);
      }

      if (!command.defaultVariantKey || !command.variants) {
        problems.push(`Command ${command.id} is missing defaultVariantKey or variants.`);
      } else if (!command.variants[command.defaultVariantKey]) {
        problems.push(
          `Command ${command.id} has defaultVariantKey that does not exist: ${command.defaultVariantKey}`
        );
      }

      if (!command.learning?.whatItDoes || !command.learning?.whenToUse) {
        problems.push(
          `Command ${command.id} is missing learning.whatItDoes or learning.whenToUse.`
        );
      }
    });
  });
}

if (typeof getPackById !== 'function') {
  problems.push('getPackById was not exported as a function.');
}

if (typeof shouldShowVariantToggle === 'function') {
  const fakeCommand = {
    id: 'test',
    slug: 'test',
    name: 'test',
    primaryIntent: 'do',
    tools: [],
    tags: [],
    defaultVariantKey: 'mac:bash',
    variants: {
      'mac:bash': { platform: 'mac', shell: 'bash', command: 'npm install' },
      'windows:powershell': {
        platform: 'windows',
        shell: 'powershell',
        command: 'npm install'
      }
    },
    learning: {
      whatItDoes: 'Test',
      whenToUse: 'Test',
      examples: [],
      commonMistakes: []
    },
    sources: [],
    lastReviewed: '2026-02-22'
  };

  if (shouldShowVariantToggle(fakeCommand) !== false) {
    problems.push('Variant toggle should be hidden when commands are identical.');
  }
} else {
  problems.push('shouldShowVariantToggle was not exported as a function.');
}

if (!fs.existsSync('components/CopyButton.tsx')) {
  problems.push('CopyButton component is missing.');
}

if (!fs.existsSync('app/[packId]/[commandId]/page.tsx')) {
  problems.push('Command page route file is missing.');
}

if (problems.length) {
  console.error('SMOKE FAILED');
  problems.forEach((problem) => console.error(`- ${problem}`));
  process.exit(1);
}

console.log('SMOKE OK');
