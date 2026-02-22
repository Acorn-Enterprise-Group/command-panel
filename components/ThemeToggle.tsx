'use client';

import { useEffect, useState } from 'react';

type ThemeChoice = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'cc-theme';

function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const resolved = choice === 'system' ? (prefersDark ? 'dark' : 'light') : choice;

  root.dataset.theme = choice;
  root.classList.toggle('theme-dark', resolved === 'dark');
  root.classList.toggle('theme-light', resolved === 'light');
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeChoice>('system');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeChoice | null;
    const initial = stored ?? 'system';
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [theme]);

  const handleChange = (choice: ThemeChoice) => {
    setTheme(choice);
    localStorage.setItem(STORAGE_KEY, choice);
    applyTheme(choice);
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-ink-900/70 p-1 text-xs font-semibold">
      {(['system', 'light', 'dark'] as ThemeChoice[]).map((choice) => (
        <button
          key={choice}
          type="button"
          onClick={() => handleChange(choice)}
          className={`rounded-full px-3 py-1.5 transition ${
            theme === choice
              ? 'bg-white text-ink-950'
              : 'text-white/70 hover:text-white'
          }`}
          aria-pressed={theme === choice}
        >
          {choice.charAt(0).toUpperCase() + choice.slice(1)}
        </button>
      ))}
    </div>
  );
}
