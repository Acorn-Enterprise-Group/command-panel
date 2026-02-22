'use client';

import { useEffect, useState } from 'react';
import CopyButton from './CopyButton';
import type { CommandItem, Level } from '../data/schema';

const levelStyles: Record<Level, string> = {
  safe: 'bg-emerald-500/20 text-safety-safe border-emerald-500/30',
  caution: 'bg-amber-500/20 text-safety-caution border-amber-500/30',
  danger: 'bg-rose-500/20 text-safety-danger border-rose-500/30'
};

const levelLabels: Record<Level, string> = {
  safe: 'Safe',
  caution: 'Caution',
  danger: 'Danger'
};

export default function CommandCard({
  item,
  beginnerMode
}: {
  item: CommandItem;
  beginnerMode: boolean;
}) {
  const [expanded, setExpanded] = useState(beginnerMode);
  const copyText = item.copyAs ?? item.command;

  useEffect(() => {
    setExpanded(beginnerMode);
  }, [beginnerMode]);

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-6 shadow-glow">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          {item.title && (
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              {item.title}
            </p>
          )}
          <p className="text-lg text-white/90">{item.explain}</p>
          {item.notes && (
            <p className="text-sm text-white/60">{item.notes}</p>
          )}
        </div>
        <CopyButton text={copyText} level={item.level} />
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        <div className="flex items-center justify-between border-b border-white/10 bg-ink-800 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">
            {item.shellLabel}
          </span>
          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
              levelStyles[item.level]
            }`}
          >
            {levelLabels[item.level]}
          </span>
        </div>
        <pre className="overflow-x-auto px-5 py-4 text-lg font-mono text-white">
          <code>{item.command}</code>
        </pre>
      </div>
      {item.level === 'danger' && (
        <p className="mt-3 text-sm text-rose-200">
          This can delete files or discard work.
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
            {item.whatItDoes && (
              <div>
                <p className="font-semibold text-white">What it does</p>
                <p>{item.whatItDoes}</p>
              </div>
            )}
            {item.whenToUse && (
              <div>
                <p className="font-semibold text-white">When to use</p>
                <p>{item.whenToUse}</p>
              </div>
            )}
            {item.expectedResult && (
              <div>
                <p className="font-semibold text-white">What should happen</p>
                <p>{item.expectedResult}</p>
              </div>
            )}
            {item.example && (
              <div>
                <p className="font-semibold text-white">Example</p>
                <p className="font-mono text-white/90">{item.example}</p>
              </div>
            )}
            {item.commonMistake && (
              <div>
                <p className="font-semibold text-white">Common mistake</p>
                <p>{item.commonMistake}</p>
              </div>
            )}
            {item.ifItFails && item.ifItFails.length > 0 && (
              <div>
                <p className="font-semibold text-white">If it fails</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {item.ifItFails.map((step, index) => (
                    <li key={`${item.id}-fail-${index}`}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.notes && (
              <div>
                <p className="font-semibold text-white">Notes</p>
                <p>{item.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
