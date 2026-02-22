'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CommandTabs from './CommandTabs';
import { getPackById, packs } from '../data';
import type { Pack } from '../data/schema';

const STORAGE_KEY = 'command-panel-pack';

export default function ClientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pack, setPack] = useState<Pack>(() => getPackById('default'));

  useEffect(() => {
    const queryPack = searchParams.get('pack');
    const storedPack =
      typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const desired = queryPack ?? storedPack ?? 'default';
    setPack(getPackById(desired));
  }, [searchParams]);

  const handlePackChange = (nextId: string) => {
    const nextPack = getPackById(nextId);
    setPack(nextPack);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, nextPack.id);
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set('pack', nextPack.id);
    router.replace(`/?${params.toString()}`);
  };

  const packOptions = useMemo(() => packs, []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <label
              htmlFor="pack-select"
              className="text-xs uppercase tracking-[0.3em] text-white/40"
            >
              Pack
            </label>
            <select
              id="pack-select"
              value={pack.id}
              onChange={(event) => handlePackChange(event.target.value)}
              className="rounded-xl border border-white/10 bg-ink-900/70 px-4 py-2 text-sm font-semibold text-white"
            >
              {packOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-moss-500">
            Beginner Command Panel
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Copy the exact command. Know what happens next.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Find the right command fast, copy it safely, and see clear guidance if
            you get stuck. Built for beginners and busy devs.
          </p>
          <div>
            <a
              href="#commands"
              className="inline-flex items-center gap-2 rounded-xl bg-moss-600 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-moss-500"
            >
              Start with Git
            </a>
          </div>
        </div>
      </header>

      <div id="commands">
        <CommandTabs pack={pack} />
      </div>

      <footer className="text-sm text-white/40">
        Tip: You can edit the commands in{' '}
        <span className="font-semibold text-white/70">data/packs</span>.
      </footer>
    </main>
  );
}
