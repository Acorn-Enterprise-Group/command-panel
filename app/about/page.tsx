import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why CopyCommand.org exists and how it helps beginners.'
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="text-white/70">
        CopyCommand.org is a fast, static library of safe, copyable commands.
        It helps beginners and busy devs find the right command quickly, understand
        what it does, and recover when something fails.
      </p>
      <p className="text-white/70">
        No accounts. No tracking. Just clear commands and helpful guidance.
      </p>
    </main>
  );
}
