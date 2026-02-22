import Link from 'next/link';
import { getPackById } from '../../data';

export default function StartHerePage() {
  const pack = getPackById('default');
  const starterCommands = pack.commands.slice(0, 10);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Start Here
        </p>
        <h1 className="text-3xl font-semibold">Your first safe commands</h1>
        <p className="text-white/70">
          This page gives you a calm, beginner-safe starting path. Pick your OS,
          then copy one command at a time.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Choose your OS</h2>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 text-sm text-white/80">
            Windows PowerShell
          </span>
          <span className="rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 text-sm text-white/80">
            Mac Terminal
          </span>
          <span className="rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 text-sm text-white/80">
            Linux Terminal
          </span>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">First 10 commands</h2>
        <div className="grid gap-3">
          {starterCommands.map((command) => (
            <Link
              key={command.id}
              href={`/${pack.slug}/${encodeURIComponent(command.slug)}`}
              className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
            >
              <span className="font-semibold text-white">{command.name}</span>
              <span className="mt-1 block text-xs text-white/50">
                {command.learning.whatItDoes}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-ink-900/70 p-6 text-sm text-white/70">
        <p>
          Tip: If a command mentions deleting files, slow down and read the
          warning before you copy it.
        </p>
      </section>
    </main>
  );
}
