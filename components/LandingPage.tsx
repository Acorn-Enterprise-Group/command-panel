import CommandPanel, {
  CommandPanelPills,
  CommandPanelProvider,
  CommandPanelSearch
} from './CommandPanel';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import logoImage from '../images/logo.png';

export default function LandingPage() {
  return (
    <CommandPanelProvider>
      <div className="flex min-h-screen flex-col">
        {/* Minimal sticky header */}
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 px-5 py-3 backdrop-blur-md">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src={logoImage}
              alt="CopyCommand"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="text-sm font-semibold tracking-wide">
              CopyCommand
            </span>
          </Link>
          <ThemeToggle />
        </header>

        <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-24">
          {/* Hero */}
          <section className="flex flex-col items-center py-12 text-center sm:py-16">
            {/* Owl logo — prominent */}
            <div className="mb-5">
              <Image
                src={logoImage}
                alt="CopyCommand owl logo"
                width={88}
                height={88}
                className="h-20 w-auto drop-shadow-2xl sm:h-24"
                priority
              />
            </div>

            {/* Eyebrow */}
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-moss-500">
              Beginner Command Panel
            </p>

            {/* Headline */}
            <h1 className="mb-4 text-[1.85rem] font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
              Copy the exact command.{' '}
              <span className="block sm:inline">Know what happens next.</span>
            </h1>

            {/* Supporting text */}
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              Find the right command fast, copy it safely, and see clear
              guidance if you get stuck. Built for beginners and busy devs.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="#commands"
                className="inline-flex items-center justify-center rounded-xl bg-moss-600 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-moss-500"
              >
                Start with Git
              </a>
              <div className="w-full sm:max-w-xs">
                <CommandPanelSearch />
              </div>
            </div>
          </section>

          {/* Category nav pills */}
          <div className="mb-10">
            <CommandPanelPills />
          </div>

          {/* Command panel */}
          <CommandPanel />
        </main>

        <footer className="border-t border-white/5 px-5 py-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-3 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <span>
              Tip: Edit commands in{' '}
              <span className="font-semibold text-white/60">data/packs</span>.
            </span>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-white" href="/about">About</a>
              <a className="hover:text-white" href="/contact">Contact</a>
              <a className="hover:text-white" href="/privacy">Privacy</a>
            </div>
          </div>
        </footer>
      </div>
    </CommandPanelProvider>
  );
}
