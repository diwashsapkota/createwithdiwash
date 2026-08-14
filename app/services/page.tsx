import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ServiceList from '@/components/ServiceList';
import { ArrowRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Digital marketing, websites, mobile apps, Church CRM, automation, and creative work for ministries.',
};

export default function Services() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            Services
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Ten lines of work. Most churches start with a website and a member system. Pricing
            lives on each service page.
          </p>
        </Reveal>

        <ServiceList />

        <div className="mt-16">
          <Link href="/contact" className="btn-dark px-7 py-3.5 text-sm">
            Ask for a quote
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
