'use client';

import { useState } from 'react';
import CommandCard from './CommandCard';
import type { CommandItem } from '../data/schema';

export default function CommandPageClient({
  command
}: {
  command: CommandItem;
}) {
  const [beginnerMode, setBeginnerMode] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/60">Command</p>
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
      </div>
      <CommandCard item={command} beginnerMode={beginnerMode} />
    </div>
  );
}