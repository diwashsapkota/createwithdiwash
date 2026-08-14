import Link from 'next/link';
import Image from 'next/image';
import { serviceIcons, type ServiceSlug, CheckIcon, ArrowRightIcon, ChevronLeftIcon } from '@/components/icons';
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
  pricingNote = "Choose the plan that best fits your church's needs",
}: ServicePageProps) {
  const Icon = serviceIcons[slug];
  const image = serviceImages[slug];

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6">
        <Link
          href="/#services"
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
              <Link href="/#contact" className="btn-primary px-7 py-3.5 text-sm">
                Get a Free Consultation
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href="#pricing" className="btn-outline px-7 py-3.5 text-sm">
                View Pricing
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-40 w-40 rounded-3xl bg-amber-200/60 dark:bg-amber-400/10" />
            <div className="icon-tile absolute -top-5 -right-4 h-16 w-16 rounded-2xl border-4 border-paper bg-amber-400 !text-slate-950 shadow-lg dark:border-navy-950">
              <Icon className="h-7 w-7" />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center">What we offer</p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">
            Included in every engagement
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offerings.map((offering) => (
            <div key={offering.title} className="card card-hover p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white">
                  {offering.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker justify-center">Pricing</p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">
              Simple, transparent plans
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
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-950">
                    Most Popular
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
                    href="/#contact"
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
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">
          Not sure which plan is right for <em className="italic text-amber-600 dark:text-amber-400">you</em>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-stone-600 dark:text-stone-400">
          Tell us about your ministry and we&apos;ll recommend the best fit — the first consultation
          is always free.
        </p>
        <Link href="/#contact" className="btn-dark mt-9 px-8 py-4 text-base">
          Talk to Us
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
