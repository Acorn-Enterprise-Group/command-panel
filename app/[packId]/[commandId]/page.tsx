import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    title: `${command.command} - CopyCommand`,
    description: command.whatItDoes,
    alternates: {
      canonical: `/${params.packId}/${params.commandId}`
    }
  };
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
  const packSlug = encodeURIComponent(pack.id);
  const ordered = list.filter((item) => item.id !== command.id);
  const sameTagMatches =
    command.tags && command.tags.length > 0
      ? ordered.filter((item) =>
          item.tags?.some((tag) => command.tags?.includes(tag))
        )
      : [];
  const related = [
    ...sameTagMatches,
    ...ordered.filter((item) => !sameTagMatches.includes(item))
  ].slice(0, 3);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-16">
      <div className="flex items-center justify-between">
        <Link href={`/${packSlug}`} className="text-sm text-white/60 hover:text-white">
          <- Back to {pack.label}
        </Link>
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          {pack.label}
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">{command.command}</h1>
        <p className="text-white/70">{command.explain}</p>
      </div>

      <CommandPageClient command={command} />

      <nav className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/${packSlug}/${encodeURIComponent(prev.id)}`}
            className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
          >
            <span className="text-xs text-white/50">Previous</span>
            <span className="block font-semibold text-white">{prev.command}</span>
          </Link>
        ) : (
          <div className="rounded-xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-white/40">
            No previous command
          </div>
        )}
        {next ? (
          <Link
            href={`/${packSlug}/${encodeURIComponent(next.id)}`}
            className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
          >
            <span className="text-xs text-white/50">Next</span>
            <span className="block font-semibold text-white">{next.command}</span>
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
              href={`/${packSlug}/${encodeURIComponent(item.id)}`}
              className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
            >
              <span className="block font-semibold text-white">{item.command}</span>
              <span className="text-xs text-white/50">{item.explain}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}