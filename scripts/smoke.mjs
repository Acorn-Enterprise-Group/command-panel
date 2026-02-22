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

try {
  const indexModule = loadTsModule('data/index.ts');
  packs = indexModule.packs;
  getPackById = indexModule.getPackById;
} catch (error) {
  problems.push(`Could not load data/index.ts: ${error.message}`);
}

if (!Array.isArray(packs)) {
  problems.push('packs did not load as an array.');
} else {
  const packIds = new Set();

  packs.forEach((pack, packIndex) => {
    if (!pack.id || !pack.label) {
      problems.push(`Pack at index ${packIndex} is missing id or label.`);
      return;
    }

    if (packIds.has(pack.id)) {
      problems.push(`Duplicate pack id found: ${pack.id}`);
    }
    packIds.add(pack.id);

    if (!Array.isArray(pack.sets)) {
      problems.push(`Pack ${pack.id} has no sets array.`);
      return;
    }

    const commandIds = new Set();

    pack.sets.forEach((set, setIndex) => {
      if (!set.id || !set.label) {
        problems.push(
          `Command set at index ${setIndex} in pack ${pack.id} is missing id or label.`
        );
      }

      if (!Array.isArray(set.items)) {
        problems.push(`Command set ${set.id} in pack ${pack.id} has no items array.`);
        return;
      }

      set.items.forEach((item, itemIndex) => {
        if (!item.id) {
          problems.push(
            `Item at index ${itemIndex} in set ${set.id} is missing id.`
          );
        } else if (commandIds.has(item.id)) {
          problems.push(`Duplicate command id found in pack ${pack.id}: ${item.id}`);
        } else {
          commandIds.add(item.id);
        }

        if (!item.explain || !item.command) {
          problems.push(
            `Item ${item.id || itemIndex} in set ${set.id} is missing explain or command.`
          );
        }

        if (!item.whatItDoes || !item.example || !item.commonMistake) {
          problems.push(
            `Item ${item.id || itemIndex} in set ${set.id} is missing whatItDoes, example, or commonMistake.`
          );
        }
      });
    });

    if (Array.isArray(pack.recipes)) {
      const recipeIds = new Set();

      pack.recipes.forEach((recipe, recipeIndex) => {
        if (!recipe.id || !recipe.title || !Array.isArray(recipe.steps)) {
          problems.push(
            `Recipe at index ${recipeIndex} in pack ${pack.id} is missing id, title, or steps.`
          );
          return;
        }

        if (recipeIds.has(recipe.id)) {
          problems.push(`Duplicate recipe id found in pack ${pack.id}: ${recipe.id}`);
        }
        recipeIds.add(recipe.id);

        recipe.steps
          .filter((step) => step.type === 'command')
          .forEach((step) => {
            if (!commandIds.has(step.commandId)) {
              problems.push(
                `Recipe ${recipe.id} references unknown command id in pack ${pack.id}: ${step.commandId}`
              );
            }
          });
      });
    } else {
      problems.push(`Pack ${pack.id} recipes did not load as an array.`);
    }
  });
}

if (typeof getPackById !== 'function') {
  problems.push('getPackById was not exported as a function.');
}

if (problems.length) {
  console.error('SMOKE FAILED');
  problems.forEach((problem) => console.error(`- ${problem}`));
  process.exit(1);
}

console.log('SMOKE OK');
