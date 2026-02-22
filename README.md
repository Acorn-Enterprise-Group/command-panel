# Command Panel (Beginner Mode)

A tiny, beginner-friendly command panel with large copy buttons, safety labels, and optional help.

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

All commands live in `data/commandSets.ts`.

- Add or remove tabs by editing the `commandSets` array.
- Each tab has `items`, which are individual command cards.
- Required fields per command: `id`, `explain`, `command`, `shellLabel`.
- Optional fields power the help drawer: `whenToUse`, `expectedResult`, `ifItFails`, `notes`.
- Add `level` to show safety badges: `safe`, `caution`, or `danger`.
- Add `platform` to control the Windows vs Mac/Linux filter.

## Add recipes

Recipes live in `data/recipes.ts`.

Each recipe:

- `id`: unique identifier
- `title`: short name
- `intro`: 1 paragraph description
- `commandIds`: list of command ids from `data/commandSets.ts`
- `platform`: optional filter (`windows`, `mac`, `linux`, `any`)

## Add a new tab

1. Open `data/commandSets.ts`.
2. Add a new object to the `commandSets` array.
3. Give it a unique `id`, `label`, and an `items` array.

## Smoke check

```bash
npm run smoke
```

Checks that command ids are unique and required fields exist.

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
