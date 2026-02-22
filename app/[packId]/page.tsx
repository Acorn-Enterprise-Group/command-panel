import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';
import { getAllPackIds, getPackById } from '../../data';
import { getCommandGroups } from '../../lib/pack';

export function generateStaticParams() {
  return getAllPackIds().map((packId) => ({ packId }));
}

export function generateMetadata({
  params
}: {
  params: { packId: string };
}): Metadata {
  const pack = getPackById(params.packId);
  return {
    title: `${pack.title} — CopyCommand`,
    description: pack.description ?? 'Command pack on CopyCommand.org',
    alternates: {
      canonical: `https://copycommand.org/${pack.slug}`
    }
  };
}

export default function PackPage({ params }: { params: { packId: string } }) {
  const pack = getPackById(params.packId);
  const packSlug = encodeURIComponent(pack.slug);
  const groups = getCommandGroups(pack);
  const starterCommands = pack.commands.slice(0, 3);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-16">
      <div className="space-y-3">
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
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Pack
            </p>
          </div>
          <ThemeToggle />
        </div>
        <h1 className="text-3xl font-semibold">{pack.title}</h1>
        {pack.description && (
          <p className="text-white/70">{pack.description}</p>
        )}
        <p className="text-sm text-white/60">
          Start with a beginner-safe command, then move to the next one when it
          works.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Start with</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {starterCommands.map((command) => (
            <Link
              key={command.id}
              href={`/${packSlug}/${encodeURIComponent(command.slug)}`}
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

      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.id} className="space-y-3">
            <h2 className="text-xl font-semibold">{group.label}</h2>
            {group.description && (
              <p className="text-sm text-white/60">{group.description}</p>
            )}
            <ul className="grid gap-3">
              {group.commands.map((command) => (
                <li key={command.id}>
                  <Link
                    href={`/${packSlug}/${encodeURIComponent(command.slug)}`}
                    className="block rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
                  >
                    <span className="font-semibold text-white">
                      {command.name}
                    </span>
                    <span className="mt-1 block text-xs text-white/50">
                      {command.learning.whatItDoes}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
