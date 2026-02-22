import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

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
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('cc-theme');
        var theme = stored || 'system';
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var resolved = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;
        var root = document.documentElement;
        root.dataset.theme = theme;
        root.classList.toggle('theme-dark', resolved === 'dark');
        root.classList.toggle('theme-light', resolved === 'light');
      } catch (e) {}
    })();
  `;
  return (
    <html lang="en">
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
