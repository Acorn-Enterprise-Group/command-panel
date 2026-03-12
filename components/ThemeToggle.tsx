'use client';

import React, { useEffect, useState } from 'react';

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

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

const THEME_CONFIG: Record<ThemeChoice, { Icon: () => React.ReactElement; label: string }> = {
  system: { Icon: MonitorIcon, label: 'System theme' },
  light: { Icon: SunIcon, label: 'Light theme' },
  dark: { Icon: MoonIcon, label: 'Dark theme' },
};

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
      if (theme === 'system') applyTheme('system');
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
    <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-ink-900/70 p-1">
      {(['system', 'light', 'dark'] as ThemeChoice[]).map((choice) => {
        const { Icon, label } = THEME_CONFIG[choice];
        return (
          <button
            key={choice}
            type="button"
            onClick={() => handleChange(choice)}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition ${
              theme === choice
                ? 'bg-white text-ink-950'
                : 'text-white/60 hover:text-white'
            }`}
            aria-pressed={theme === choice}
            aria-label={label}
            title={label}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}
