import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to reach CopyCommand.org.'
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-white/70">
        For feedback or corrections, email: support@copycommand.org
      </p>
    </main>
  );
}
