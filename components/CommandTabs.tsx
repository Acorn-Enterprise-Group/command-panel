'use client';

import { useEffect, useMemo, useState } from 'react';
import CommandCard from './CommandCard';
import { copyText } from '../lib/clipboard';
import RecipesPanel from './RecipesPanel';
import type { CommandItem, CommandSet, Pack, Platform } from '../data/schema';

const platformOptions = [
  { id: 'windows', label: 'Windows PowerShell' },
  { id: 'unix', label: 'Mac/Linux Terminal' }
] as const;

type PlatformFilter = (typeof platformOptions)[number]['id'];
type CopyState = 'idle' | 'copied' | 'error';

type Tab = {
  id: string;
  label: string;
  description?: string;
};

function matchesPlatform(item: CommandItem, filter: PlatformFilter) {
  const platform: Platform = item.platform ?? 'any';
  if (filter === 'windows') return platform === 'any' || platform === 'windows';
  return platform === 'any' || platform === 'mac' || platform === 'linux';
}

function matchesQuery(item: CommandItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const bucket = [
    item.command,
    item.explain,
    item.notes ?? '',
    item.whenToUse ?? '',
    item.expectedResult ?? '',
    item.title ?? '',
    ...(item.ifItFails ?? []),
    ...(item.tags ?? [])
  ]
    .join(' ')
    .toLowerCase();
  return bucket.includes(q);
}

function buildTabs(sets: CommandSet[]) {
  return [
    ...sets.map((set) => ({
      id: set.id,
      label: set.label,
      description: set.description
    })),
    { id: 'recipes', label: 'Recipes', description: 'Guided step-by-step flows.' }
  ];
}

export default function CommandTabs({
  pack,
  activeId,
  onActiveChange
}: {
  pack: Pack;
  activeId?: string;
  onActiveChange?: (id: string) => void;
}) {
  const tabs = useMemo(() => buildTabs(pack.sets), [pack.sets]);
  const [internalActiveId, setInternalActiveId] = useState(
    pack.sets[0]?.id ?? ''
  );
  const [query, setQuery] = useState('');
  const [copyAllState, setCopyAllState] = useState<CopyState>('idle');
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('windows');

  const currentActiveId = activeId ?? internalActiveId;

  useEffect(() => {
    setInternalActiveId(pack.sets[0]?.id ?? '');
    setQuery('');
    setCopyAllState('idle');
  }, [pack.id, pack.sets]);

  const activeSet = useMemo(
    () => pack.sets.find((set) => set.id === currentActiveId),
    [currentActiveId, pack.sets]
  );

  const filteredItems = useMemo(() => {
    if (!activeSet) return [];
    return activeSet.items
      .filter((item) => matchesPlatform(item, platformFilter))
      .filter((item) => matchesQuery(item, query));
  }, [activeSet, platformFilter, query]);

  const handleCopyAll = async () => {
    if (!activeSet) return;
    const payload = filteredItems
      .map((item) => item.copyAs ?? item.command)
      .join('\n');
    const ok = await copyText(payload);
    setCopyAllState(ok ? 'copied' : 'error');
    setTimeout(() => setCopyAllState('idle'), 2000);
  };

  const handleTabChange = (id: string) => {
    setInternalActiveId(id);
    onActiveChange?.(id);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Command categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={currentActiveId === tab.id}
              onClick={() => {
                handleTabChange(tab.id);
                setCopyAllState('idle');
              }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                currentActiveId === tab.id
                  ? 'bg-moss-600 text-ink-950'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-xl border border-white/10 bg-ink-900/70 p-1">
            {platformOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setPlatformFilter(option.id)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  platformFilter === option.id
                    ? 'bg-white text-ink-950'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search commands"
              className="w-56 rounded-xl border border-white/10 bg-ink-900/70 px-4 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500"
              aria-label="Search commands"
            />
            {activeSet && (
              <span className="pointer-events-none absolute right-3 top-2.5 text-xs text-white/40">
                /{activeSet.label}
              </span>
            )}
          </div>
          {activeSet && (
            <button
              type="button"
              onClick={handleCopyAll}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                copyAllState === 'copied'
                  ? 'bg-moss-600 text-ink-950'
                  : copyAllState === 'error'
                  ? 'bg-red-500/80 text-white'
                  : 'bg-white text-ink-950 hover:bg-moss-500'
              }`}
            >
              {copyAllState === 'copied'
                ? 'All copied'
                : copyAllState === 'error'
                ? 'Copy failed'
                : 'Copy all'}
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-white/60">
        Showing {platformFilter === 'windows' ? 'Windows' : 'Mac/Linux'} commands
      </p>

      {activeSet ? (
        <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">{activeSet.label}</p>
            {activeSet.description && (
              <p className="text-sm text-white/60">{activeSet.description}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">Recipes</p>
            <p className="text-sm text-white/60">
              Step-by-step flows that chain commands together.
            </p>
          </div>
        </div>
      )}

      {activeSet ? (
        <div className="grid gap-6">
          {filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-8 text-white/60">
              No commands match that search.
            </div>
          ) : (
            filteredItems.map((item) => (
              <CommandCard key={item.id} item={item} />
            ))
          )}
        </div>
      ) : (
        <RecipesPanel
          pack={pack}
          query={query}
          platformFilter={platformFilter}
        />
      )}
    </div>
  );
}
