import './globals.css';
import type { Metadata } from 'next';

const siteUrl = 'https://copycommand.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CopyCommand.org — Copyable commands with guidance',
    template: '%s — CopyCommand.org'
  },
  description:
    'Find the exact command fast, copy it safely, and get beginner-friendly guidance if it fails.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'CopyCommand.org — Copyable commands with guidance',
    description:
      'Find the exact command fast, copy it safely, and get beginner-friendly guidance if it fails.',
    siteName: 'CopyCommand.org'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CopyCommand.org — Copyable commands with guidance',
    description:
      'Find the exact command fast, copy it safely, and get beginner-friendly guidance if it fails.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
