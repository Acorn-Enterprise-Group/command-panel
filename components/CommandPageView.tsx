import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import type { Command, Pack } from '../data/schema';
import CommandPageClient from './CommandPageClient';

type CommandPageViewProps = {
  pack: Pack;
  command: Command;
  packSlug: string;
  prev: Command | null;
  next: Command | null;
  related: Command[];
  jsonLd: string;
};

export default function CommandPageView({
  pack,
  command,
  packSlug,
  prev,
  next,
  related,
  jsonLd
}: CommandPageViewProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/${packSlug}`}
              className="text-sm text-white/60 hover:text-white"
            >
              {'<-'} Back to {pack.title}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              {pack.title}
            </span>
            <ThemeToggle />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">{command.name}</h1>
        </div>

        <CommandPageClient command={command} />

        <nav className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/${packSlug}/${encodeURIComponent(prev.slug)}`}
              className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
            >
              <span className="text-xs text-white/50">Previous</span>
              <span className="block font-semibold text-white">{prev.name}</span>
            </Link>
          ) : (
            <div className="rounded-xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-white/40">
              No previous command
            </div>
          )}
          {next ? (
            <Link
              href={`/${packSlug}/${encodeURIComponent(next.slug)}`}
              className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
            >
              <span className="text-xs text-white/50">Next</span>
              <span className="block font-semibold text-white">{next.name}</span>
            </Link>
          ) : (
            <div className="rounded-xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-white/40">
              No next command
            </div>
          )}
        </nav>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Related commands</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/${packSlug}/${encodeURIComponent(item.slug)}`}
                className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
              >
                <span className="block font-semibold text-white">{item.name}</span>
                <span className="text-xs text-white/50">
                  {item.learning.whatItDoes}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
