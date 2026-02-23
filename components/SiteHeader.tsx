import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-6xl px-6 pt-10">
      <Link href="/" className="inline-flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="CopyCommand"
          width={144}
          height={144}
          className="h-9 w-auto drop-shadow-sm"
          priority
        />
        <span className="text-sm font-semibold text-white/80">
          CopyCommand
        </span>
      </Link>
    </header>
  );
}
