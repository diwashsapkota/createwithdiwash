import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="kicker">Page not found</p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
          This page doesn&apos;t <em className="italic text-amber-600 dark:text-amber-400">exist</em>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
          The link may be old, or the address was typed wrong. Head home, browse services, or tell
          us what you were looking for.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary min-h-11 px-6 py-3 text-base">
            Back home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center font-medium text-amber-700 transition-colors hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          >
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
}
