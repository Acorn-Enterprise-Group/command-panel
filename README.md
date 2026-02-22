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

Commands live inside packs in `data/packs`.

- Edit `data/packs/default.ts` for the default pack.
- Each pack has `sets`, which are the tab groups.
- Each set has `items`, which are individual command cards.
- Required fields per command: `id`, `explain`, `command`, `shellLabel`, `level`, `platform`, `whenToUse`, `expectedResult`, `ifItFails`.
- Optional fields: `title`, `notes`, `tags`, `copyAs`.

## Add recipes

Recipes live inside a pack file (ex: `data/packs/default.ts`).

Each recipe:

- `id`: unique identifier
- `title`: short name
- `intro`: 1 paragraph description
- `steps`: list of command steps (`type: 'command'`) or text steps (`type: 'text'`)
- `platform`: optional filter (`windows`, `mac`, `linux`, `any`)

## Add a new pack

1. Create `data/packs/<your-pack>.ts` exporting a `Pack`.
2. Register it in `data/index.ts` by adding it to the `packs` array.

## Add a new tab (set)

1. Open your pack file (ex: `data/packs/default.ts`).
2. Add a new object to the `sets` array.
3. Give it a unique `id`, `label`, and an `items` array.

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
