'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import type { ReactNode } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CommandTabs from './CommandTabs';
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

type CommandPanelContextValue = {
  pack: Pack;
  groups: ReturnType<typeof getCommandGroups>;
  activeTabId: string;
  globalQuery: string;
  searchResults: SearchHit[];
  setGlobalQuery: (value: string) => void;
  handleSearchSelect: (hit: SearchHit) => void;
  handlePillClick: (categoryId: string) => void;
  setActiveTabId: (id: string) => void;
};

const CommandPanelContext = createContext<CommandPanelContextValue | null>(null);

function useCommandPanel() {
  const ctx = useContext(CommandPanelContext);
  if (!ctx) throw new Error('CommandPanel components must be used within Provider');
  return ctx;
}

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

export function CommandPanelProvider({ children }: { children: ReactNode }) {
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

  const scrollToSection = useCallback((categoryId: string) => {
    const target = document.getElementById(`section-${categoryId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const commands = document.getElementById('commands');
    if (commands) {
      commands.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handlePillClick = useCallback(
    (categoryId: string) => {
      setActiveTabId(categoryId);
      scrollToSection(categoryId);
    },
    [scrollToSection]
  );

  const handleSearchSelect = useCallback(
    (hit: SearchHit) => {
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
      scrollToSection(hit.groupId);
    },
    [router, scrollToSection, searchParams]
  );

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

  const value: CommandPanelContextValue = {
    pack,
    groups,
    activeTabId,
    globalQuery,
    searchResults,
    setGlobalQuery,
    handleSearchSelect,
    handlePillClick,
    setActiveTabId
  };

  return (
    <CommandPanelContext.Provider value={value}>
      {children}
    </CommandPanelContext.Provider>
  );
}

export function CommandPanelSearch() {
  const { globalQuery, searchResults, setGlobalQuery, handleSearchSelect } =
    useCommandPanel();

  return (
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
              <span className="font-semibold text-white">{hit.command.name}</span>
              <span className="block text-xs text-white/50">
                {hit.packLabel} - {hit.groupLabel}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function CommandPanelPills() {
  const { groups, activeTabId, handlePillClick } = useCommandPanel();

  return (
    <nav className="flex flex-wrap gap-2" aria-label="Command categories">
      {groups.map((group) => (
        <button
          key={group.id}
          type="button"
          onClick={() => handlePillClick(group.id)}
          className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
            activeTabId === group.id
              ? 'bg-moss-600 text-ink-950'
              : 'border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white'
          }`}
        >
          {group.label}
        </button>
      ))}
    </nav>
  );
}

export default function CommandPanel() {
  const { pack, setActiveTabId } = useCommandPanel();

  return (
    <div id="commands">
      <CommandTabs pack={pack} onActiveChange={setActiveTabId} />
    </div>
  );
}
