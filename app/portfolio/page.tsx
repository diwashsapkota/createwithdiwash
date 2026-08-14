import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/icons';
import { projects } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Websites and digital work for churches, ministries, and businesses.',
};

export default function Portfolio() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            Portfolio
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Churches, a missions data project, and a few local businesses. Each name opens the live
            site.
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-stone-200 border-y border-stone-200 dark:divide-slate-800 dark:border-slate-800">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-6 py-8 sm:grid-cols-[200px_1fr_auto] sm:items-center"
              >
                <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-stone-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400">
                    {project.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRightIcon className="hidden h-5 w-5 text-stone-400 sm:block" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              If your church is not on this list yet, that is the point of writing us.
            </h2>
            <Link href="/contact" className="btn-primary mt-8 px-8 py-4 text-base">
              Start a project
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
