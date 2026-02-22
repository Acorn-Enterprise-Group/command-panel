'use client';

import { useEffect, useMemo, useState } from 'react';
import CommandCard from './CommandCard';
import { copyText } from '../lib/clipboard';
import type { Command, Pack } from '../data/schema';
import { getCommandGroups } from '../lib/pack';
import { getVariantForPlatform } from '../lib/variants';

const platformOptions = [
  { id: 'windows', label: 'Windows PowerShell' },
  { id: 'unix', label: 'Mac/Linux Terminal' }
];

type PlatformFilter = 'windows' | 'unix';
type CopyState = 'idle' | 'copied' | 'error';

function getVariantForFilter(command: Command, filter: PlatformFilter) {
  if (filter === 'windows') return getVariantForPlatform(command, 'windows');
  return (
    getVariantForPlatform(command, 'mac') ??
    getVariantForPlatform(command, 'linux')
  );
}

function matchesQuery(command: Command, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const bucket = [
    command.name,
    command.learning.whatItDoes,
    command.learning.whenToUse,
    ...command.learning.examples.map((example) => example.snippet),
    ...command.learning.commonMistakes.map((mistake) => mistake.mistake),
    ...command.learning.commonMistakes.map((mistake) => mistake.fix),
    ...command.tags,
    ...command.tools
  ]
    .join(' ')
    .toLowerCase();
  return bucket.includes(q);
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
  const groups = useMemo(() => getCommandGroups(pack), [pack]);
  const [internalActiveId, setInternalActiveId] = useState(
    groups[0]?.id ?? ''
  );
  const [query, setQuery] = useState('');
  const [copyAllState, setCopyAllState] = useState<CopyState>('idle');
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('windows');
  const [beginnerMode, setBeginnerMode] = useState(true);

  const currentActiveId = activeId ?? internalActiveId;

  useEffect(() => {
    setInternalActiveId(groups[0]?.id ?? '');
    setQuery('');
    setCopyAllState('idle');
  }, [pack.id, groups]);

  const activeGroup = useMemo(
    () => groups.find((group) => group.id === currentActiveId),
    [currentActiveId, groups]
  );

  const filteredItems = useMemo(() => {
    if (!activeGroup) return [];
    return activeGroup.commands
      .map((command) => ({
        command,
        variantMatch: getVariantForFilter(command, platformFilter)
      }))
      .filter((item) => Boolean(item.variantMatch))
      .filter((item) => matchesQuery(item.command, query));
  }, [activeGroup, platformFilter, query]);

  const handleCopyAll = async () => {
    if (!activeGroup) return;
    const payload = filteredItems
      .map((item) => item.variantMatch?.variant.command)
      .filter(Boolean)
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
      <div
        className="sticky top-0 z-40 -mx-6 space-y-3 border-b px-6 py-4 backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          borderBottomColor: 'rgba(255, 255, 255, 0.06)'
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div
            className="flex flex-wrap gap-3"
            role="tablist"
            aria-label="Command categories"
          >
            {groups.map((tab) => (
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
                  onClick={() => setPlatformFilter(option.id as PlatformFilter)}
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
            <button
              type="button"
              onClick={() => setBeginnerMode((prev) => !prev)}
              className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                beginnerMode
                  ? 'bg-moss-600 text-ink-950'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Beginner Mode {beginnerMode ? 'ON' : 'OFF'}
            </button>
            <div className="relative">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search commands"
                className="w-56 rounded-xl border border-white/10 bg-ink-900/70 px-4 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500"
                aria-label="Search commands"
              />
              {activeGroup && (
                <span className="pointer-events-none absolute right-3 top-2.5 text-xs text-white/40">
                  /{activeGroup.label}
                </span>
              )}
            </div>
            {activeGroup && (
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
      </div>

      <div className="space-y-8 pt-4">
        {activeGroup ? (
          <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">{activeGroup.label}</p>
              {activeGroup.description && (
                <p className="text-sm text-white/60">{activeGroup.description}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 text-white/60">
            No commands available for this pack yet.
          </div>
        )}

        {activeGroup ? (
          <div className="grid gap-6">
            {filteredItems.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-8 text-white/60">
                No commands match that search.
              </div>
            ) : (
              filteredItems.map((item) => (
                <CommandCard
                  key={item.command.id}
                  command={item.command}
                  variant={item.variantMatch!.variant}
                  beginnerMode={beginnerMode}
                />
              ))
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
