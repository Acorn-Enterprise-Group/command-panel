# Command Panel V2

A tiny, beginner-friendly command panel with pack switching, safety labels, and optional help.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Edit commands

Commands live inside `data/commands.ts` (single source of truth).

- Edit `data/commands.ts` for the default pack.
- `data/packs/default.ts` imports the command list and defines the pack shell.
- Each command has `variants` (OS/shell-specific command text), a `defaultVariantKey`, and a `learning` block.
- Tabs on the homepage are derived from the first value in `command.tools`.

## Add a new pack

1. Create `data/packs/<your-pack>.ts` exporting a `Pack`.
2. Register it in `data/index.ts` by adding it to the `packs` array.

## Windows build/run (PowerShell)

PowerShell may block running npm scripts because `npm.ps1` is disabled by default.

One-time session fix:

```powershell
Set-ExecutionPolicy -Scope Process Bypass -Force
```

Alternative options:

- Use `npm.cmd` directly (avoids PowerShell script policy).
- Use Command Prompt instead of PowerShell.
- Run the command through PowerShell with bypass:

```powershell
powershell -ExecutionPolicy Bypass -Command "npm run build"
```

## Smoke check

```bash
npm run smoke
```

Checks that command ids are unique and required fields exist.

## Pack switching

Use the `pack` query param:

```
/?pack=default
```

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Use the default Next.js settings.

### Static export

If you want a fully static build, add `output: 'export'` to `next.config.js`, then run:

```bash
npm run build
```

The static site will be created in `out/`.
