import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { serviceIcons, CheckIcon, ArrowRightIcon } from '@/components/icons';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Digital marketing, websites, mobile apps, Church CRM, automation, and creative services for ministries.',
};

export default function Services() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center">What we do</p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            Our <em className="italic text-amber-600 dark:text-amber-400">services</em>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Comprehensive digital solutions designed specifically for churches and faith-based
            organizations. From marketing to development, system automations, and creative
            services — everything you need to grow your ministry.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Reveal key={service.slug} delay={(index % 3) * 80}>
                <div className="card card-hover group flex h-full flex-col p-8">
                  <div className="icon-tile">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold text-stone-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-stone-700 dark:text-stone-300"
                      >
                        <CheckIcon className="h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-stone-900 underline-offset-4 transition-colors hover:text-amber-600 hover:underline dark:text-white dark:hover:text-amber-400"
                    >
                      View details &amp; pricing
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-dark px-7 py-3.5 text-sm">
            Get a Quote
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
