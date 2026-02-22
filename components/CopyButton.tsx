'use client';

import { useEffect, useState } from 'react';
import { copyText } from '../lib/clipboard';

type CopyState = 'idle' | 'copying' | 'copied' | 'error';

export default function CopyButton({
  text,
  label = 'Copy'
}: {
  text: string;
  label?: string;
}) {
  const [state, setState] = useState<CopyState>('idle');

  useEffect(() => {
    if (state !== 'copied') return;
    const timer = setTimeout(() => setState('idle'), 2000);
    return () => clearTimeout(timer);
  }, [state]);

  const handleCopy = async () => {
    setState('copying');
    const ok = await copyText(text);
    setState(ok ? 'copied' : 'error');
    if (!ok) {
      setTimeout(() => setState('idle'), 2000);
    }
  };

  const buttonText =
    state === 'copied' ? 'Copied!' : state === 'error' ? 'Copy failed' : label;

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
          state === 'copied'
            ? 'bg-moss-600 text-ink-950'
            : state === 'error'
            ? 'bg-red-500/80 text-white'
            : 'bg-white text-ink-950 hover:bg-moss-500'
        }`}
        aria-label="Copy command to clipboard"
      >
        <span className="text-base">{buttonText}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
      {state === 'error' && (
        <span className="text-xs text-red-200">
          Copy failed — select text manually.
        </span>
      )}
    </div>
  );
}
