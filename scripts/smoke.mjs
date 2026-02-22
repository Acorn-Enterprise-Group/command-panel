import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

function loadTsModule(fileName) {
  const filePath = path.resolve(fileName);
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
    require,
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

let commandSets;
let recipes;

try {
  const commandModule = loadTsModule('data/commandSets.ts');
  commandSets = commandModule.commandSets;
} catch (error) {
  problems.push(`Could not load data/commandSets.ts: ${error.message}`);
}

try {
  const recipeModule = loadTsModule('data/recipes.ts');
  recipes = recipeModule.recipes;
} catch (error) {
  problems.push(`Could not load data/recipes.ts: ${error.message}`);
}

if (!Array.isArray(commandSets)) {
  problems.push('commandSets did not load as an array.');
} else {
  const commandSetIds = new Set();
  const commandIds = new Set();

  commandSets.forEach((set, setIndex) => {
    if (!set.id || !set.label) {
      problems.push(`Command set at index ${setIndex} is missing id or label.`);
    }

    if (set.id) {
      if (commandSetIds.has(set.id)) {
        problems.push(`Duplicate command set id found: ${set.id}`);
      }
      commandSetIds.add(set.id);
    }

    if (!Array.isArray(set.items)) {
      problems.push(`Command set ${set.id} has no items array.`);
      return;
    }

    set.items.forEach((item, itemIndex) => {
      if (!item.id) {
        problems.push(
          `Item at index ${itemIndex} in set ${set.id} is missing id.`
        );
      } else if (commandIds.has(item.id)) {
        problems.push(`Duplicate command id found: ${item.id}`);
      } else {
        commandIds.add(item.id);
      }

      if (!item.explain || !item.command) {
        problems.push(
          `Item ${item.id || itemIndex} in set ${set.id} is missing explain or command.`
        );
      }
    });
  });

  if (Array.isArray(recipes)) {
    const recipeIds = new Set();

    recipes.forEach((recipe, recipeIndex) => {
      if (!recipe.id || !recipe.title || !recipe.commandIds) {
        problems.push(
          `Recipe at index ${recipeIndex} is missing id, title, or commandIds.`
        );
        return;
      }

      if (recipeIds.has(recipe.id)) {
        problems.push(`Duplicate recipe id found: ${recipe.id}`);
      }
      recipeIds.add(recipe.id);

      recipe.commandIds.forEach((commandId) => {
        if (!commandIds.has(commandId)) {
          problems.push(
            `Recipe ${recipe.id} references unknown command id: ${commandId}`
          );
        }
      });
    });
  } else if (recipes !== undefined) {
    problems.push('recipes did not load as an array.');
  }
}

if (problems.length) {
  console.error('SMOKE FAILED');
  problems.forEach((problem) => console.error(`- ${problem}`));
  process.exit(1);
}

console.log('SMOKE OK');
