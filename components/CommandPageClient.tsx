'use client';

import { useEffect, useMemo, useState } from 'react';
import CopyButton from './CopyButton';
import type { Command } from '../data/schema';
import {
  formatVariantLabel,
  formatRunLabel,
  getDefaultVariant,
  getVariantOptions,
  shouldShowVariantToggle
} from '../lib/variants';

export default function CommandPageClient({ command }: { command: Command }) {
  const [beginnerMode, setBeginnerMode] = useState(false);
  const showVariantToggle = shouldShowVariantToggle(command);
  const options = useMemo(() => getVariantOptions(command), [command]);
  const [variantKey, setVariantKey] = useState(command.defaultVariantKey);
  const activeVariant =
    command.variants[variantKey] ?? getDefaultVariant(command);
  const level = command.learning.warnings?.length ? 'danger' : 'safe';
  const storageKey = 'cc-beginner-mode';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(storageKey);
    if (stored === 'on') setBeginnerMode(true);
    if (stored === 'off') setBeginnerMode(false);
  }, [storageKey]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Summary
          </p>
          <p className="text-lg text-white/90">{command.learning.whatItDoes}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setBeginnerMode((prev) => {
              const next = !prev;
              if (typeof window !== 'undefined') {
                localStorage.setItem(storageKey, next ? 'on' : 'off');
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

      {showVariantToggle && (
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setVariantKey(option.key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                variantKey === option.key
                  ? 'bg-white text-ink-950'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Command
            </p>
            <p className="text-base text-white/90">
              {formatVariantLabel(activeVariant)}
            </p>
          </div>
          <CopyButton text={activeVariant.command} level={level} />
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-ink-850">
          <div className="flex items-center justify-between border-b border-white/10 bg-ink-800 px-4 py-2">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                {formatRunLabel(activeVariant)}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">
                {formatVariantLabel(activeVariant)}
              </span>
            </div>
          </div>
          <pre className="overflow-x-auto px-5 py-4 text-lg font-mono text-white">
            <code>{activeVariant.command}</code>
          </pre>
        </div>
        {command.learning.warnings?.length ? (
          <p className="mt-3 text-sm text-rose-200">
            {command.learning.warnings[0]}
          </p>
        ) : null}
      </div>

      {beginnerMode && (
        <div className="space-y-6 rounded-2xl border border-white/10 bg-ink-900/50 p-6 text-sm text-white/80">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-white">What it does</h2>
            <p>{command.learning.whatItDoes}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-white">When to use</h2>
            <p>{command.learning.whenToUse}</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Examples</h2>
            {command.learning.examples.length ? (
              <div className="grid gap-3">
                {command.learning.examples.map((example) => (
                  <div
                    key={example.title}
                    className="rounded-xl border border-white/10 bg-ink-900/70 p-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      {example.title}
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      {example.explanation}
                    </p>
                    <pre className="mt-2 overflow-x-auto rounded-lg border border-white/10 bg-ink-850 px-3 py-2 text-sm text-white">
                      <code>{example.snippet}</code>
                    </pre>
                  </div>
                ))}
              </div>
            ) : (
              <p>No examples yet.</p>
            )}
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              Common mistakes (and fixes)
            </h2>
            {command.learning.commonMistakes.length ? (
              <ul className="grid gap-3">
                {command.learning.commonMistakes.map((mistake, index) => (
                  <li
                    key={`${mistake.mistake}-${index}`}
                    className="rounded-xl border border-white/10 bg-ink-900/70 p-4"
                  >
                    <p className="text-sm text-white/90">{mistake.mistake}</p>
                    <p className="mt-2 text-xs text-white/60">
                      Fix: {mistake.fix}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No common mistakes listed yet.</p>
            )}
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-white">Sources</h2>
            {command.sources.length ? (
              <ul className="grid gap-2">
                {command.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      className="text-moss-500 hover:text-moss-400"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No sources listed yet.</p>
            )}
          </div>
          <div className="text-xs text-white/60">
            Last reviewed: {command.lastReviewed}
          </div>
        </div>
      )}
    </section>
  );
}
