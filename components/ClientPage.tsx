'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import CommandTabs from './CommandTabs';
import ThemeToggle from './ThemeToggle';
import { getPackById, packs } from '../data';
import type { Command, Pack } from '../data/schema';
import { formatToolLabel, getCommandGroups } from '../lib/pack';

const STORAGE_KEY = 'command-panel-pack';

type SearchHit = {
  packId: string;
  packLabel: string;
  groupId: string;
  groupLabel: string;
  command: Command;
};

function matchesGlobalQuery(command: Command, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return false;
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

export default function ClientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pack, setPack] = useState<Pack>(() => getPackById('default'));
  const [activeTabId, setActiveTabId] = useState<string>('');
  const [globalQuery, setGlobalQuery] = useState('');
  const groups = useMemo(() => getCommandGroups(pack), [pack]);

  useEffect(() => {
    const queryPack = searchParams.get('pack');
    const storedPack =
      typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const desired = queryPack ?? storedPack ?? 'default';
    const nextPack = getPackById(desired);
    setPack(nextPack);
    setActiveTabId(getCommandGroups(nextPack)[0]?.id ?? '');
  }, [searchParams]);

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
    setActiveTabId(hit.groupId);
    setGlobalQuery('');
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, nextPack.slug);
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set('pack', nextPack.slug);
    router.replace(`/?${params.toString()}`);
    const commands = document.getElementById('commands');
    if (commands) {
      commands.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const searchResults = useMemo(() => {
    const q = globalQuery.trim();
    if (q.length < 2) return [] as SearchHit[];
    const hits: SearchHit[] = [];
    packs.forEach((currentPack) => {
      currentPack.commands.forEach((command) => {
        if (matchesGlobalQuery(command, q)) {
          const groupId = command.tools[0] ?? 'general';
          hits.push({
            packId: currentPack.id,
            packLabel: currentPack.title,
            groupId,
            groupLabel: formatToolLabel(groupId),
            command
          });
        }
      });
    });
    return hits.slice(0, 10);
  }, [globalQuery]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10">
      <header className="space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CopyCommand owl logo"
              width={120}
              height={120}
              className="h-8 w-auto drop-shadow-sm sm:h-9"
              priority
            />
            <span className="text-sm font-semibold tracking-[0.08em] text-white/80">
              CopyCommand
            </span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 shadow-glow backdrop-blur sm:p-8">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Copy the command. Know what happens next.
            </h1>
            {/* Headline option: The right command, instantly. With the next step included. */}
            {/* Headline option: Copy with confidence. Run it without guessing. */}
            <p className="text-lg text-white/70 sm:text-xl">
              Find, copy, and run the right command for your setup - no rabbit
              holes.
            </p>
            {/* Subheading option: Fast, safe commands with plain-English guidance when you get stuck. */}
            {/* Subheading option: Built for beginners and busy devs who want clean steps, not chaos. */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#commands"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-moss-600 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-moss-500"
              >
                Start with Git
              </a>
              <div className="relative w-full sm:max-w-md">
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
                        key={`${hit.packId}-${hit.groupId}-${hit.command.id}`}
                        type="button"
                        onClick={() => handleSearchSelect(hit)}
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-white/90 hover:bg-white/5"
                      >
                        <span className="font-semibold text-white">
                          {hit.command.name}
                        </span>
                        <span className="block text-xs text-white/50">
                          {hit.packLabel} - {hit.groupLabel}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2" aria-label="Command shortcuts">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => handleCategoryClick(group.id)}
              className={`rounded-full border border-white/10 px-4 py-2 text-xs font-semibold transition ${
                activeTabId === group.id
                  ? 'bg-moss-600 text-ink-950'
                  : 'bg-white/5 text-white/80 hover:bg-white/10'
              }`}
            >
              {group.label}
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
