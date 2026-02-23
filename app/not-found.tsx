import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">404</p>
      <h1 className="text-3xl font-semibold">That page doesn’t exist yet.</h1>
      <p className="text-white/70">
        Try the homepage or jump back to the default command pack.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-xl bg-moss-600 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-moss-500"
        >
          Go to Home
        </Link>
        <Link
          href="/default"
          className="rounded-xl border border-white/10 bg-ink-900/60 px-5 py-3 text-sm font-semibold text-white/90 hover:border-white/30"
        >
          Open Default Pack
        </Link>
      </div>
    </main>
  );
}
