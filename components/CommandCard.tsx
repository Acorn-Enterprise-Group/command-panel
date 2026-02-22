'use client';

import { useEffect, useState } from 'react';
import CopyButton from './CopyButton';
import type { Command, CommandVariant } from '../data/schema';
import { formatRunLabel, formatVariantLabel } from '../lib/variants';

export default function CommandCard({
  command,
  variant,
  beginnerMode
}: {
  command: Command;
  variant: CommandVariant;
  beginnerMode: boolean;
}) {
  const [expanded, setExpanded] = useState(beginnerMode);
  const level = command.learning.warnings?.length ? 'danger' : 'safe';

  useEffect(() => {
    setExpanded(beginnerMode);
  }, [beginnerMode]);

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-6 shadow-glow">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Command
          </p>
          <p className="text-xl font-semibold text-white">{command.name}</p>
          <p className="text-sm text-white/70">{command.learning.whatItDoes}</p>
        </div>
        <CopyButton text={variant.command} level={level} />
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        <div className="flex items-center justify-between border-b border-white/10 bg-ink-800 px-4 py-2">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
              {formatRunLabel(variant)}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">
              {formatVariantLabel(variant)}
            </span>
          </div>
        </div>
        <pre className="overflow-x-auto px-5 py-4 text-lg font-mono text-white">
          <code>{variant.command}</code>
        </pre>
      </div>
      {command.learning.warnings && command.learning.warnings.length > 0 && (
        <p className="mt-3 text-sm text-rose-200">
          {command.learning.warnings[0]}
        </p>
      )}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-4 text-sm font-semibold text-moss-500 hover:text-moss-600"
        aria-expanded={expanded}
      >
        {expanded ? 'Hide help' : 'Show help'}
      </button>
      {expanded && (
        <div className="mt-4 rounded-xl border border-white/10 bg-ink-900/60 p-4 text-sm text-white/80">
          <div className="grid gap-4">
            <div>
              <p className="font-semibold text-white">When to use</p>
              <p>{command.learning.whenToUse}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Example</p>
              <p className="font-mono text-white/90">
                {command.learning.examples[0]?.snippet}
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Common mistake</p>
              <p>
                {command.learning.commonMistakes[0]?.mistake}
                {command.learning.commonMistakes[0]?.fix
                  ? ` Fix: ${command.learning.commonMistakes[0]?.fix}`
                  : ''}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
