'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ServiceList from '@/components/ServiceList';
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/icons';
import { services, projects, images } from '@/lib/site';

const stats = [
  { value: '8', label: 'Sites in production' },
  { value: '4', label: 'Countries' },
];

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'too_fast'>('idle');
  const [formStartTime] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (formData.website) {
      setStatus('error');
      return;
    }

    const timeSpent = (Date.now() - formStartTime) / 1000;
    if (timeSpent < 3) {
      setStatus('too_fast');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xnjndabz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Create with Diwash',
      },
    })),
  };

  const portfolioStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: project.title,
      description: project.description,
      url: project.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />

      <section id="home" className="relative flex min-h-dvh items-center overflow-hidden bg-navy-950">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/55 to-navy-950/95" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16">
          <div className="max-w-3xl animate-fade-in">
            <p className="kicker !text-amber-400">Websites, CRM, and media for churches</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Where faith meets{' '}
              <em className="italic text-amber-400">technology</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl">
              We build the site, the member system, and the weekly media so a church can run Sunday
              without juggling five vendors.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="btn-primary px-8 py-4 text-base">
                Start a Project
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a
                href="#services"
                onClick={(e) => scrollTo(e, 'services')}
                className="btn-outline-light px-8 py-4 text-base"
              >
                See the work we take on
              </a>
            </div>
          </div>

          <dl className="mt-20 grid max-w-md grid-cols-2 gap-6 border-t border-white/15 pt-8 animate-slide-up">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="order-2 text-sm text-stone-300">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <ol className="grid gap-12 md:grid-cols-3 md:gap-16">
            <li>
              <p className="font-display text-sm text-amber-700 dark:text-amber-400">01</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white">
                Marketing that names the service time
              </h2>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
                Ads, email, and clips that point to a real Sunday, not a vague brand campaign.
              </p>
            </li>
            <li>
              <p className="font-display text-sm text-amber-700 dark:text-amber-400">02</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white">
                Sites and apps a visitor can actually use
              </h2>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
                Parking, kids check-in, giving, and last week&apos;s sermon without a scavenger hunt.
              </p>
            </li>
            <li>
              <p className="font-display text-sm text-amber-700 dark:text-amber-400">03</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white">
                CRM so follow-up is not a spreadsheet
              </h2>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
                Members, donations, and a new guest typed in once, then handed to the right pastor.
              </p>
            </li>
          </ol>
        </Reveal>
      </section>

      <section id="about" className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.cathedral.src}
                  alt={images.cathedral.alt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
                Built for churches, not generic small business
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                A ministry is not a storefront. You have a calendar of services, people who give,
                members who need a call, and a sermon that should still be findable on Tuesday.
              </p>
              <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">
                Diwash and a small team of designers, developers, and editors have shipped sites and
                systems for churches in the US, Nepal, Australia, and Canada.
              </p>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="btn-dark mt-10 px-7 py-3.5 text-sm"
              >
                Tell us about Sunday
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            Ten services, grouped the way a church actually buys them
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Pick a line, or ask us to stitch two of them together. Most churches need a site plus
            a way to keep members and giving in one place.
          </p>
        </Reveal>
        <ServiceList />
      </section>

      <section id="portfolio" className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              Recent work
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Churches, a missions data project, and a few local businesses. Each link opens the
              live site.
            </p>
          </Reveal>

          <ul className="mt-14 divide-y divide-stone-200 border-y border-stone-200 dark:divide-slate-800 dark:border-slate-800">
            {projects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-6 py-8 sm:grid-cols-[180px_1fr_auto] sm:items-center"
                >
                  <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-stone-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="hidden h-5 w-5 text-stone-400 sm:block" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              If giving, sermons, and new guests live in three tools, we should talk.
            </h2>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="btn-primary mt-8 px-8 py-4 text-base"
            >
              Email the studio
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              Write with a service time and what is broken
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              We reply in one or two business days with whether we can help, a rough timeline, and
              what it would cost.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="relative border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                    className="field"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                    className="field"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="field"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field resize-none"
                  placeholder="Church name, city, and what you need built."
                />
              </div>

              <div className="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-dark mt-8 w-full px-8 py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div
                  role="status"
                  className="mt-6 border border-green-300 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-300"
                >
                  Message sent. We will write back soon.
                </div>
              )}

              {status === 'too_fast' && (
                <div
                  role="alert"
                  className="mt-6 border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
                >
                  Please wait a moment, then send again. This helps us filter automated submissions.
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mt-6 border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300"
                >
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
