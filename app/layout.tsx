import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Command Panel — Beginner Mode',
  description: 'Safe, copyable commands for entry-level users.'
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
