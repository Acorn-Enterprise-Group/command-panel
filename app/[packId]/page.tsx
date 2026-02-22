import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPackIds, getPackById } from '../../data';

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
    title: pack.label,
    description: pack.description ?? 'Command pack on CopyCommand.org',
    alternates: {
      canonical: `/${pack.id}`
    }
  };
}

export default function PackPage({ params }: { params: { packId: string } }) {
  const pack = getPackById(params.packId);
  const packSlug = encodeURIComponent(pack.id);
  const firstSet = pack.sets[0];
  const starter = firstSet?.items[0];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-16">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Pack</p>
        <h1 className="text-3xl font-semibold">{pack.label}</h1>
        {pack.description && (
          <p className="text-white/70">{pack.description}</p>
        )}
        <p className="text-sm text-white/60">
          This pack groups beginner-friendly commands. Start with the simplest
          one, then move to the next.
        </p>
        {starter && (
          <div className="pt-2">
            <Link
              href={`/${packSlug}/${encodeURIComponent(starter.id)}`}
              className="inline-flex items-center gap-2 rounded-xl bg-moss-600 px-4 py-2 text-xs font-semibold text-ink-950 transition hover:bg-moss-500"
            >
              Start with {starter.command}
            </Link>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {pack.sets.map((set) => (
          <section key={set.id} className="space-y-3">
            <h2 className="text-xl font-semibold">{set.label}</h2>
            {set.description && (
              <p className="text-sm text-white/60">{set.description}</p>
            )}
            <ul className="grid gap-3">
              {set.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/${packSlug}/${encodeURIComponent(item.id)}`}
                    className="block rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white/90 hover:border-white/30"
                  >
                    <span className="font-semibold text-white">{item.command}</span>
                    <span className="mt-1 block text-xs text-white/50">{item.explain}</span>
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
