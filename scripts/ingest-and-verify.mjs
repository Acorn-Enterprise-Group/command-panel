import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const steps = [
  { label: 'Import commands', args: ['scripts/import-commands.mjs'] },
  { label: 'Update roadmap count', args: ['scripts/update-roadmap-count.mjs'] },
  { label: 'Smoke test', args: ['scripts/smoke.mjs'] }
];

function runStep(step) {
  return new Promise((resolve, reject) => {
    execFile('node', step.args, { cwd: ROOT }, (error, stdout, stderr) => {
      if (stdout) process.stdout.write(stdout);
      if (stderr) process.stderr.write(stderr);
      if (error) {
        reject(new Error(`${step.label} failed.`));
        return;
      }
      resolve();
    });
  });
}

async function main() {
  for (const step of steps) {
    console.log(`\n== ${step.label} ==`);
    await runStep(step);
  }
  console.log('\nIngestion pipeline complete.');
}

main().catch((error) => {
  console.error(`ERROR: ${error.message}`);
  process.exit(1);
});
