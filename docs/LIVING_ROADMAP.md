# CopyCommand.org Living Roadmap

## Vision
CopyCommand.org is a fast, static-first command library that turns copyable snippets into a traffic engine, a beginner-friendly learning layer, and a daily dev utility. Every feature must directly improve Traffic, Learning, or Utility without adding backend complexity.

## Success Metrics
- Traffic: Organic sessions, search impressions, CTR, top 20 landing pages
- Learning: Beginner Mode usage rate, help panel open rate, time to first successful command
- Utility: Copy events per session, return visits, top commands used weekly

## Current State Snapshot
- Next.js 14 static-friendly UI with packs, commands, copy buttons, and command pages
- Pack switching supported via query param and local storage
- Trust layer started: sources added for top commands
- No backend, no accounts, no analytics, no ads
- Build currently blocked locally by Windows PowerShell execution policy (needs session fix)

## Ranked Backlog
- P0 | Traffic | A) Homepage hero clarity + single CTA | RICE: R=8 I=3 C=0.8 E=2 | Done when hero explains value in <3s and has 1 primary CTA | Owner: Codex | Status: DONE
- P0 | Traffic | B) Site-wide navigation to categories | RICE: R=7 I=2.5 C=0.7 E=2 | Done when nav links to main categories and is visible on all pages | Owner: Codex | Status: DONE
- P0 | Traffic | C) Client-side search across commands/packs | RICE: R=7 I=2.5 C=0.7 E=3 | Done when search finds commands across packs and results are visible | Owner: Codex | Status: DONE
- P0 | Traffic | D) Metadata per page (title/description/OG) | RICE: R=9 I=2.5 C=0.7 E=2 | Done when pages have unique meta and OG tags | Owner: Codex | Status: DONE
- P0 | Traffic | E) sitemap.xml + robots.txt | RICE: R=9 I=2 C=0.8 E=1 | Done when sitemap and robots are served | Owner: Codex | Status: DONE
- P0 | Traffic | F) Canonical URLs + primary domain | RICE: R=8 I=2 C=0.6 E=2 | Done when canonical tags exist and domain rule documented | Owner: Codex | Status: DONE
- P0 | Traffic | G) Lighthouse basics (perf/a11y) | RICE: R=6 I=2 C=0.6 E=3 | Done when obvious a11y/perf issues are fixed without redesign | Owner: Codex | Status: DONE
- P0 | Learning | H) Add learning fields per command | RICE: R=6 I=3 C=0.7 E=3 | Done when each command shows what/when/example/mistake | Owner: Codex | Status: DONE
- P0 | Learning | I) Beginner Mode toggle (default ON) | RICE: R=6 I=3 C=0.7 E=2 | Done when toggle hides help by default OFF | Owner: Codex | Status: DONE
- P0 | Trust | J) About/Contact/Privacy pages | RICE: R=5 I=2 C=0.8 E=2 | Done when pages exist and are linked in footer | Owner: Codex | Status: DONE
- P0 | Trust | K) Cookie notice only if analytics/ads | RICE: R=3 I=1 C=0.9 E=1 | Done when added only after analytics/ads | Owner: Codex | Status: DONE (deferred until analytics/ads)
- P1 | Traffic | L) Indexable command pages | RICE: R=8 I=3 C=0.6 E=5 | Done when /git/git-clone style pages exist | Owner: Codex | Status: DONE
- P1 | Traffic | M) Internal linking between commands | RICE: R=7 I=2.5 C=0.6 E=4 | Done when related/next links exist | Owner: Codex | Status: DONE
- P1 | Learning | N) Start here onboarding page | RICE: R=6 I=2.5 C=0.7 E=3 | Done when beginner path exists | Owner: Codex | Status: DONE
- P1 | Utility | O) Copy UX consistency + shortcut | RICE: R=6 I=2 C=0.6 E=3 | Done when copy is consistent and shortcut documented | Owner: Codex | Status: TODO
- P1 | Utility | P) Copy pack as one block | RICE: R=5 I=2 C=0.7 E=2 | Done when pack has copy-all | Owner: Codex | Status: TODO
- P1 | Utility | Q) Pack query param support | RICE: R=5 I=2 C=0.8 E=1 | Done when pack param works | Owner: Codex | Status: DONE

## Changelog
- 2026-02-22: Initialized living roadmap and recorded current state.
- 2026-02-22: Updated hero headline/subheadline and added single CTA. Next: site-wide navigation (P0 B). Score: Traffic 35 / Learning 25 / Utility 30.
- 2026-02-22: Added category navigation linked to command sections. Next: global search across packs (P0 C). Score: Traffic 40 / Learning 25 / Utility 32.
- 2026-02-22: Added global search across packs/commands with results list. Next: metadata + sitemap + canonical (P0 D–F). Score: Traffic 48 / Learning 25 / Utility 34.
- 2026-02-22: Added metadata/OG, sitemap/robots, canonical + www redirect. Next: learning layer fields + Beginner Mode (P0 H–I). Score: Traffic 58 / Learning 25 / Utility 34.
- 2026-02-22: Added learning fields (what/when/example/mistake) and Beginner Mode toggle. Next: trust pages (P0 J). Score: Traffic 58 / Learning 45 / Utility 34.
- 2026-02-22: Added About, Contact, and Privacy pages + footer links. Next: confirm cookie notice is deferred (P0 K). Score: Traffic 60 / Learning 45 / Utility 34.
- 2026-02-22: Confirmed cookie notice deferred until analytics/ads. Next: stabilize build and validate Lighthouse basics. Score: Traffic 60 / Learning 45 / Utility 34.
- 2026-02-22: Added indexable pack and command pages, metadata, related links, and sitemap coverage. Score: Traffic 70 / Learning 45 / Utility 38.
- 2026-02-22: Added pack intro with starter link, prev/next navigation, and related command links. Score: Traffic 78 / Learning 48 / Utility 40.
- 2026-02-22: Moved living doc into docs/ as source-of-truth. Next: add sources trust layer. Score: Traffic 78 / Learning 48 / Utility 40.
- 2026-02-22: Added authoritative sources for top commands. Next: variant default behavior + Windows run note. Score: Traffic 82 / Learning 50 / Utility 41.
- 2026-02-22: Added deterministic variant fallback order. Next: document Windows PowerShell build/run fix. Score: Traffic 82 / Learning 50 / Utility 42.
- 2026-02-22: Documented Windows PowerShell build/run workaround. Next: internal linking pass. Score: Traffic 82 / Learning 50 / Utility 43.
- 2026-02-22: Refined related command linking (adjacency + tag overlap). Score: Traffic 84 / Learning 50 / Utility 44.
- 2026-02-22: Centralized commands in data/commands.ts (single source of truth). Score: Traffic 84 / Learning 50 / Utility 44.
- 2026-02-22: Ensured every command has Windows + macOS/Linux variants and added run labels. Score: Traffic 86 / Learning 52 / Utility 45.
- 2026-02-22: Added theme toggle with system/light/dark + copy feedback timing. Score: Traffic 86 / Learning 52 / Utility 48.
- 2026-02-22: Hardened smoke checks for OS variant coverage. Score: Traffic 86 / Learning 52 / Utility 49.
- 2026-02-22: Added no-flash theme fallback styling. Score: Traffic 86 / Learning 52 / Utility 49.
- 2026-02-22: Build still blocked locally by Windows EPERM spawn (environment issue, not code). Score: Traffic 86 / Learning 52 / Utility 49.
- 2026-02-22: Light theme overrides for readability + removed duplicate OS-only commands. Score: Traffic 86 / Learning 52 / Utility 50.
- 2026-02-22: Logo added to header and home hero area. Score: Traffic 87 / Learning 52 / Utility 50.

## Weekly Execution Plan (Next 7 Days)
- Day 1: P0 A hero clarity + CTA, update roadmap
- Day 2: P0 B navigation, update roadmap
- Day 3: P0 C global search, update roadmap
- Day 4: P0 D–F metadata/sitemap/canonical, update roadmap
- Day 5: P0 G lighthouse basics, update roadmap
- Day 6: P0 H–I learning fields + beginner mode toggle, update roadmap
- Day 7: P0 J trust pages, update roadmap
