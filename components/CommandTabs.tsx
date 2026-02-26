'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import CommandCard from './CommandCard';
import { copyText } from '../lib/clipboard';
import type { Command, Pack } from '../data/schema';
import { getCommandGroups } from '../lib/pack';
import { getVariantForPlatform } from '../lib/variants';

const platformOptions = [
  { id: 'windows', label: 'Windows PowerShell' },
  { id: 'unix', label: 'Mac/Linux Terminal' }
];

const BEGINNER_STORAGE_KEY = 'cc-beginner-mode';

type PlatformFilter = 'windows' | 'unix';
type CopyState = 'idle' | 'copied' | 'error';

function getVariantForFilter(command: Command, filter: PlatformFilter) {
  if (filter === 'windows') return getVariantForPlatform(command, 'windows');
  return (
    getVariantForPlatform(command, 'mac') ??
    getVariantForPlatform(command, 'linux')
  );
}

export default function CommandTabs({
  pack,
  onActiveChange
}: {
  pack: Pack;
  onActiveChange?: (id: string) => void;
}) {
  const groups = useMemo(() => getCommandGroups(pack), [pack]);
  const [copyAllStateByGroup, setCopyAllStateByGroup] = useState<
    Record<string, CopyState>
  >({});
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('windows');
  const [beginnerMode, setBeginnerMode] = useState(false);
  const sectionRefs = useRef(new Map<string, HTMLDivElement | null>());

  useEffect(() => {
    setCopyAllStateByGroup({});
  }, [pack.id, groups]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(BEGINNER_STORAGE_KEY);
    if (stored === 'on') setBeginnerMode(true);
    if (stored === 'off') setBeginnerMode(false);
  }, []);

  const itemsByGroup = useMemo(() => {
    const map = new Map<
      string,
      Array<{ command: Command; variantMatch: ReturnType<typeof getVariantForFilter> }>
    >();
    groups.forEach((group) => {
      const items = group.commands
        .map((command) => ({
          command,
          variantMatch: getVariantForFilter(command, platformFilter)
        }))
        .filter((item) => Boolean(item.variantMatch));
      map.set(group.id, items);
    });
    return map;
  }, [groups, platformFilter]);

  useEffect(() => {
    if (!onActiveChange) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        const nextId = visible[0]?.target.getAttribute('data-section-id');
        if (nextId) onActiveChange(nextId);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.25, 0.6] }
    );

    sectionRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [groups, onActiveChange]);

  const handleCopyAll = async (groupId: string) => {
    const items = itemsByGroup.get(groupId) ?? [];
    const payload = items
      .map((item) => item.variantMatch?.variant.command)
      .filter(Boolean)
      .join('\n');
    if (!payload) return;
    const ok = await copyText(payload);
    setCopyAllStateByGroup((prev) => ({
      ...prev,
      [groupId]: ok ? 'copied' : 'error'
    }));
    setTimeout(() => {
      setCopyAllStateByGroup((prev) => ({
        ...prev,
        [groupId]: 'idle'
      }));
    }, 2000);
  };

  const getSectionId = (groupId: string) => `section-${groupId}`;
  const setSectionRef = (groupId: string) => (node: HTMLDivElement | null) => {
    sectionRefs.current.set(groupId, node);
  };

  return (
    <div className="space-y-8">
      <div className="command-panel sticky top-0 z-40 -mx-6 space-y-3 border-b px-6 py-4 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
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
            onClick={() => {
              setBeginnerMode((prev) => {
                const next = !prev;
                if (typeof window !== 'undefined') {
                  localStorage.setItem(BEGINNER_STORAGE_KEY, next ? 'on' : 'off');
                }
                return next;
              });
            }}
            className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
              beginnerMode
                ? 'bg-moss-600 text-ink-950'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Beginner Mode {beginnerMode ? 'ON' : 'OFF'}
          </button>
        </div>

        <p className="text-sm text-white/60">
          Showing {platformFilter === 'windows' ? 'Windows' : 'Mac/Linux'} commands
        </p>
      </div>

      <div className="space-y-12 pt-4">
        {groups.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 text-white/60">
            No commands available for this pack yet.
          </div>
        ) : (
          groups.map((group) => {
            const items = itemsByGroup.get(group.id) ?? [];
            const copyState = copyAllStateByGroup[group.id] ?? 'idle';
            return (
              <section
                key={group.id}
                id={getSectionId(group.id)}
                data-section-id={group.id}
                ref={setSectionRef(group.id)}
                className="scroll-mt-28 space-y-8"
              >
                <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-semibold">{group.label}</p>
                      {group.description && (
                        <p className="text-sm text-white/60">
                          {group.description}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyAll(group.id)}
                      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                        copyState === 'copied'
                          ? 'bg-moss-600 text-ink-950'
                          : copyState === 'error'
                          ? 'bg-red-500/80 text-white'
                          : 'bg-white text-ink-950 hover:bg-moss-500'
                      }`}
                    >
                      {copyState === 'copied'
                        ? 'All copied'
                        : copyState === 'error'
                        ? 'Copy failed'
                        : 'Copy all'}
                    </button>
                  </div>
                </div>

                <div className="grid gap-6">
                  {items.length === 0 ? (
                    <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-8 text-white/60">
                      No commands available for this section.
                    </div>
                  ) : (
                    items.map((item) => (
                      <CommandCard
                        key={item.command.id}
                        command={item.command}
                        variant={item.variantMatch!.variant}
                        beginnerMode={beginnerMode}
                      />
                    ))
                  )}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}
