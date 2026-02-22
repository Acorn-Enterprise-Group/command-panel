'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CommandTabs from './CommandTabs';
import { getPackById, packs } from '../data';
import type { CommandItem, Pack } from '../data/schema';

const STORAGE_KEY = 'command-panel-pack';

type SearchHit = {
  packId: string;
  packLabel: string;
  setId: string;
  setLabel: string;
  item: CommandItem;
};

function matchesGlobalQuery(item: CommandItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  const bucket = [
    item.command,
    item.explain,
    item.title ?? '',
    item.whenToUse ?? '',
    item.expectedResult ?? '',
    ...(item.ifItFails ?? []),
    ...(item.tags ?? [])
  ]
    .join(' ')
    .toLowerCase();
  return bucket.includes(q);
}

export default function ClientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pack, setPack] = useState<Pack>(() => getPackById('default'));
  const [activeTabId, setActiveTabId] = useState<string>('');
  const [globalQuery, setGlobalQuery] = useState('');

  useEffect(() => {
    const queryPack = searchParams.get('pack');
    const storedPack =
      typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const desired = queryPack ?? storedPack ?? 'default';
    const nextPack = getPackById(desired);
    setPack(nextPack);
    setActiveTabId(nextPack.sets[0]?.id ?? '');
  }, [searchParams]);

  const handlePackChange = (nextId: string) => {
    const nextPack = getPackById(nextId);
    setPack(nextPack);
    setActiveTabId(nextPack.sets[0]?.id ?? '');
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, nextPack.id);
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set('pack', nextPack.id);
    router.replace(`/?${params.toString()}`);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveTabId(categoryId);
    const commands = document.getElementById('commands');
    if (commands) {
      commands.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSelect = (hit: SearchHit) => {
    const nextPack = getPackById(hit.packId);
    setPack(nextPack);
    setActiveTabId(hit.setId);
    setGlobalQuery('');
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, nextPack.id);
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set('pack', nextPack.id);
    router.replace(`/?${params.toString()}`);
    const commands = document.getElementById('commands');
    if (commands) {
      commands.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packOptions = useMemo(() => packs, []);

  const searchResults = useMemo(() => {
    const q = globalQuery.trim();
    if (q.length < 2) return [] as SearchHit[];
    const hits: SearchHit[] = [];
    packs.forEach((currentPack) => {
      currentPack.sets.forEach((set) => {
        set.items.forEach((item) => {
          if (matchesGlobalQuery(item, q)) {
            hits.push({
              packId: currentPack.id,
              packLabel: currentPack.label,
              setId: set.id,
              setLabel: set.label,
              item
            });
          }
        });
      });
    });
    return hits.slice(0, 10);
  }, [globalQuery]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <label
              htmlFor="pack-select"
              className="text-xs uppercase tracking-[0.3em] text-white/40"
            >
              Pack
            </label>
            <select
              id="pack-select"
              value={pack.id}
              onChange={(event) => handlePackChange(event.target.value)}
              className="rounded-xl border border-white/10 bg-ink-900/70 px-4 py-2 text-sm font-semibold text-white"
            >
              {packOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-moss-500">
            Beginner Command Panel
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Copy the exact command. Know what happens next.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Find the right command fast, copy it safely, and see clear guidance if
            you get stuck. Built for beginners and busy devs.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#commands"
              className="inline-flex items-center gap-2 rounded-xl bg-moss-600 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-moss-500"
            >
              Start with Git
            </a>
            <div className="relative w-full max-w-md">
              <input
                value={globalQuery}
                onChange={(event) => setGlobalQuery(event.target.value)}
                placeholder="Search all commands"
                className="w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500"
                aria-label="Search all commands"
              />
              {searchResults.length > 0 && (
                <div className="absolute z-20 mt-2 w-full rounded-xl border border-white/10 bg-ink-900/95 p-2 shadow-glow">
                  {searchResults.map((hit) => (
                    <button
                      key={`${hit.packId}-${hit.setId}-${hit.item.id}`}
                      type="button"
                      onClick={() => handleSearchSelect(hit)}
                      className="w-full rounded-lg px-3 py-2 text-left text-sm text-white/90 hover:bg-white/5"
                    >
                      <span className="font-semibold text-white">
                        {hit.item.command}
                      </span>
                      <span className="block text-xs text-white/50">
                        {hit.packLabel} · {hit.setLabel}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-2">
          {pack.sets.map((set) => (
            <button
              key={set.id}
              type="button"
              onClick={() => handleCategoryClick(set.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                activeTabId === set.id
                  ? 'bg-white text-ink-950'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {set.label}
            </button>
          ))}
        </nav>
      </header>

      <div id="commands">
        <CommandTabs
          pack={pack}
          activeId={activeTabId}
          onActiveChange={setActiveTabId}
        />
      </div>

      <footer className="flex flex-col gap-3 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
        <span>
          Tip: You can edit the commands in{' '}
          <span className="font-semibold text-white/70">data/packs</span>.
        </span>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-white" href="/about">
            About
          </a>
          <a className="hover:text-white" href="/contact">
            Contact
          </a>
          <a className="hover:text-white" href="/privacy">
            Privacy
          </a>
        </div>
      </footer>
    </main>
  );
}
