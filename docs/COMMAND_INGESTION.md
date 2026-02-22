# Command Ingestion Pipeline

This workflow lets you add many commands safely using a staging CSV and a generated TypeScript file.

## Edit the CSV

File: `data/staging/commands.csv`

Columns:
- `id`: kebab-case unique id (also used as the slug)
- `title`: display name
- `description`: one-line explanation
- `tags`: comma-separated list
- `maclinux_command`: command for macOS/Linux
- `windows_command`: command for Windows PowerShell
- `commonMistakes`: pipe-separated list (optional `mistake=>fix`)
- `sources`: pipe-separated list of `Label:https://...` or raw URLs

## Import commands

Run:

```powershell
node scripts/import-commands.mjs
```

Output:
- `data/commands.generated.ts`

## Smoke check

Run:

```powershell
node scripts/smoke.mjs
```

## Add a new pack or batch

- Add a tool tag that matches a pack section (e.g. `start-here`, `git-basics`).
- Update `data/packs/default.ts` if you create a new pack.
- Re-run the import script and smoke test.
