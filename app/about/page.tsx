import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon } from '@/components/icons';
import { images } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Create with Diwash builds websites, Church CRM, marketing, and media for churches and ministries.',
};

export default function About() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              Create with Diwash
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              We build digital tools for churches and ministries: marketing, websites, apps, Church
              CRM, automation, analytics, and video.
            </p>
            <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">
              Ministries are not typical businesses. Events, giving, members, and the people you are
              trying to reach all have to live in the same week.
            </p>
            <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">
              The studio is Diwash plus designers, developers, and editors who have shipped work for
              churches in the US, Nepal, Australia, and Canada.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white">
                What we take on
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">
                Digital and email marketing. Church websites and apps. CRM for members and
                donations. Analytics. Sunday graphics and sermon video. Automations between the
                tools you already pay for (n8n, Zapier, Power Automate).
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white">
                Who does the work
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">
                Graphic designers who have done faith-based print and social. Web designers who
                know a first-time visitor needs the service time in the first screen. Editors who
                cut sermons for YouTube and the lobby.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            If you have a Sunday to run, write us
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            First conversation is free. Bring the church name, city, and what is currently a mess.
          </p>
          <Link href="/contact" className="btn-dark mt-9 px-7 py-3.5 text-sm">
            Get in Touch
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
