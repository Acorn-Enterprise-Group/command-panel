import CommandTabs from '../components/CommandTabs';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-moss-500">
          Beginner Command Panel
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Safe commands, zero anxiety.
        </h1>
        <p className="max-w-2xl text-lg text-white/70">
          Click any command to copy it instantly. Use Show help when you need
          extra guidance. Everything is written for beginners.
        </p>
      </header>

      <CommandTabs />

      <footer className="text-sm text-white/40">
        Tip: You can edit the commands in <span className="font-semibold text-white/70">data/commandSets.ts</span>.
      </footer>
    </main>
  );
}
