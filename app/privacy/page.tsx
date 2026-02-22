import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for CopyCommand.org.'
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="text-white/70">
        CopyCommand.org does not collect personal data, does not use cookies,
        and does not run analytics at this time.
      </p>
      <p className="text-white/70">
        If this changes in the future, this page will be updated first.
      </p>
    </main>
  );
}
