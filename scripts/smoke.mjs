import fs from 'fs';
import path from 'path';
import vm from 'vm';
import ts from 'typescript';

const filePath = path.resolve('data', 'commandSets.ts');
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

vm.runInNewContext(transpiled, sandbox, { filename: 'commandSets.ts' });

const commandSets =
  sandbox.module.exports.commandSets || sandbox.exports.commandSets;

const problems = [];

if (!Array.isArray(commandSets)) {
  problems.push('commandSets did not load as an array.');
} else {
  const seen = new Set();

  commandSets.forEach((set, setIndex) => {
    if (!set.id || !set.label) {
      problems.push(`Command set at index ${setIndex} is missing id or label.`);
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
      } else if (seen.has(item.id)) {
        problems.push(`Duplicate command id found: ${item.id}`);
      } else {
        seen.add(item.id);
      }

      if (!item.explain || !item.command) {
        problems.push(
          `Item ${item.id || itemIndex} in set ${set.id} is missing explain or command.`
        );
      }
    });
  });
}

if (problems.length) {
  console.error('Smoke check failed:');
  problems.forEach((problem) => console.error(`- ${problem}`));
  process.exit(1);
}

console.log('Smoke check passed.');
