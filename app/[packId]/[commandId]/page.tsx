import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../../../components/ThemeToggle';
import { notFound } from 'next/navigation';
import type { Command } from '../../../data/schema';
import {
  getCommandById,
  getCommandRouteList,
  getCommandsForPack,
  getPackById
} from '../../../data';
import CommandPageClient from '../../../components/CommandPageClient';

export function generateStaticParams() {
  return getCommandRouteList();
}

export function generateMetadata({
  params
}: {
  params: { packId: string; commandId: string };
}): Metadata {
  const command = getCommandById(params.packId, params.commandId);
  if (!command) return { title: 'Command Not Found' };
  return {
    title: `${command.name} — CopyCommand`,
    description: command.learning.whatItDoes,
    alternates: {
      canonical: `https://copycommand.org/${params.packId}/${params.commandId}`
    }
  };
}

function getRelatedCommands(command: Command, list: Command[]): Command[] {
  const index = list.findIndex((item) => item.id === command.id);
  const ordered = list.filter((item) => item.id !== command.id);
  const others = list.filter((item) => item.id !== command.id);
  const scoreTagOverlap = (candidate: Command) => {
    const overlap = candidate.tags.filter((tag) => command.tags.includes(tag));
    return overlap.length;
  };

  const tagMatches = ordered
    .filter((candidate) => scoreTagOverlap(candidate) > 0)
    .sort((a, b) => scoreTagOverlap(b) - scoreTagOverlap(a));

  const adjacency: Command[] = [];
  if (index >= 0) {
    for (let step = 1; step <= 3; step += 1) {
      const nextIndex = (index + step) % list.length;
      const candidate = list[nextIndex];
      if (candidate && candidate.id !== command.id) {
        adjacency.push(candidate);
      }
    }
  }

  const orderedByPriority = [...tagMatches, ...adjacency, ...others];
  const seen = new Set<string>();
  const deduped: Command[] = [];
  orderedByPriority.forEach((item) => {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      deduped.push(item);
    }
  });

  return deduped.slice(0, 3);
}

export default function CommandPage({
  params
}: {
  params: { packId: string; commandId: string };
}) {
  const pack = getPackById(params.packId);
  const command = getCommandById(params.packId, params.commandId);
  if (!command) return notFound();

  const list = getCommandsForPack(params.packId);
  const index = list.findIndex((item) => item.id === command.id);
  const prev = index > 0 ? list[index - 1] : null;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : null;
  const packSlug = encodeURIComponent(pack.slug);
  const related = getRelatedCommands(command, list);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CopyCommand"
              width={144}
              height={144}
              className="h-9 w-auto drop-shadow-sm"
            />
          </Link>
          <Link
            href={`/${packSlug}`}
            className="text-sm text-white/60 hover:text-white"
          >
            <- Back to {pack.title}
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
  );
}
