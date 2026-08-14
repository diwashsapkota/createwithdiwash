import Link from 'next/link';
import Image from 'next/image';
import { type ServiceSlug, CheckIcon, ArrowRightIcon, ChevronLeftIcon } from '@/components/icons';
import { serviceImages } from '@/lib/site';

export type Offering = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
};

type ServicePageProps = {
  slug: ServiceSlug;
  title: string;
  kicker: string;
  intro: string;
  offerings: Offering[];
  plans: PricingPlan[];
  /** Optional sentence under the pricing heading. */
  pricingNote?: string;
};

export default function ServicePage({
  slug,
  title,
  kicker,
  intro,
  offerings,
  plans,
  pricingNote = 'Prices are a starting point. Most churches mix two services.',
}: ServicePageProps) {
  const image = serviceImages[slug];

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition-colors hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker">{kicker}</p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">{intro}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary px-7 py-3.5 text-sm">
                Talk about this work
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href="#pricing" className="btn-outline px-7 py-3.5 text-sm">
                See prices
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">
          What this engagement includes
        </h2>
        <ul className="mt-10 divide-y divide-stone-200 border-y border-stone-200 dark:divide-slate-800 dark:border-slate-800">
          {offerings.map((offering) => (
            <li key={offering.title} className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-10">
              <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white">
                {offering.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {offering.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">
              Pricing
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-400">{pricingNote}</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-navy-950 text-white shadow-2xl ring-1 ring-navy-800 dark:bg-navy-900 dark:ring-amber-400/30 md:-my-4 md:py-12'
                    : 'card'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-semibold text-slate-950">
                    Usual starting point
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-semibold ${
                    plan.popular ? 'text-white' : 'text-stone-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.popular ? 'text-stone-300' : 'text-stone-600 dark:text-stone-400'}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`font-display text-4xl font-semibold ${
                      plan.popular ? 'text-amber-400' : 'text-stone-900 dark:text-white'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.popular ? 'text-stone-300' : 'text-stone-500 dark:text-stone-400'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="mt-7 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckIcon
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          plan.popular ? 'text-amber-400' : 'text-amber-600 dark:text-amber-400'
                        }`}
                      />
                      <span className={plan.popular ? 'text-stone-200' : 'text-stone-700 dark:text-stone-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    className={`${plan.popular ? 'btn-primary' : 'btn-outline'} w-full px-6 py-3.5 text-sm`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">
          Not sure which line item you need?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-stone-600 dark:text-stone-400">
          Send the church name, city, and what is currently a mess. First conversation is free.
        </p>
        <Link href="/contact" className="btn-dark mt-9 px-8 py-4 text-base">
          Write the studio
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
