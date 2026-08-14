'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import {
  serviceIcons,
  MegaphoneIcon,
  GlobeIcon,
  WorkflowIcon,
  UsersIcon,
  HeartIcon,
  SparkIcon,
  TargetIcon,
  CheckIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@/components/icons';
import { services, projects, images } from '@/lib/site';

const pillars = [
  {
    icon: MegaphoneIcon,
    title: 'Marketing & Analytics',
    description:
      'Strategic digital campaigns, email marketing, and data analytics to help you connect with your congregation and measure your impact.',
  },
  {
    icon: GlobeIcon,
    title: 'Websites & Mobile Apps',
    description:
      'Custom websites and mobile applications built to serve your community, share your message, and engage members effectively.',
  },
  {
    icon: WorkflowIcon,
    title: 'Church CRM & Automation',
    description:
      'Specialized CRM systems and workflow automations using n8n, Zapier, and Power Automate — plus creative services for your ministry.',
  },
];

const whyUs = [
  {
    icon: UsersIcon,
    title: 'Experienced Team',
    description: 'Highly skilled designers, developers, and video editors dedicated to your success.',
  },
  {
    icon: HeartIcon,
    title: 'Faith-Focused',
    description: "Specialized understanding of churches and faith-based organizations' unique needs.",
  },
  {
    icon: SparkIcon,
    title: 'Comprehensive Solutions',
    description: 'From marketing to development to creative services — everything you need in one place.',
  },
  {
    icon: TargetIcon,
    title: 'Data-Driven Results',
    description: "Advanced analytics to track engagement, growth, and measure your ministry's impact.",
  },
];

const stats = [
  { value: '8+', label: 'Projects delivered' },
  { value: '10', label: 'Service areas' },
  { value: '100%', label: 'Ministry-focused' },
];

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formStartTime] = useState(Date.now()); // Track when form was loaded

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Check honeypot field
    if (formData.website) {
      // Bot detected - silently fail
      setStatus('error');
      return;
    }

    // Calculate time spent on form (minimum 3 seconds to prevent bots)
    const timeSpent = (Date.now() - formStartTime) / 1000;
    if (timeSpent < 3) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xnjndabz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
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
    } catch (error) {
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

  // Structured data for SEO
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

      {/* Hero */}
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
            <p className="kicker !text-amber-400">Digital solutions for churches &amp; ministries</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Where faith meets{' '}
              <em className="italic text-amber-400">technology</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl">
              From digital marketing to custom CRM systems, automation, and creative services — we
              help churches and faith-based organizations reach their community and grow their
              mission.
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
                Explore Services
              </a>
            </div>
          </div>

          <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8 animate-slide-up">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="order-2 text-sm text-stone-300">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <div className="card card-hover h-full p-8">
                <div className="icon-tile">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-stone-900 dark:text-white">
                  {pillar.title}
                </h2>
                <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About / Why us */}
      <section id="about" className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={images.teamLaughing.src}
                    alt={images.teamLaughing.alt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-xl dark:border-slate-900 sm:block md:w-64">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={images.community.src}
                      alt={images.community.alt}
                      fill
                      sizes="256px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-3xl bg-amber-200/60 dark:bg-amber-400/10" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="kicker">About Create with Diwash</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
                Helping ministries thrive in the <em className="italic text-amber-600 dark:text-amber-400">digital age</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                We are passionate about empowering churches and faith-based organizations with
                digital solutions that help them reach their communities and fulfill their missions
                — combining modern design with cutting-edge technology.
              </p>

              <ul className="mt-10 space-y-6">
                {whyUs.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="icon-tile h-11 w-11 flex-shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="btn-dark mt-10 px-7 py-3.5 text-sm"
              >
                Let&apos;s Work Together
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center">What we do</p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            Everything your ministry needs to <em className="italic text-amber-600 dark:text-amber-400">grow</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Comprehensive digital solutions designed specifically for churches and faith-based
            organizations — from marketing to development and creative services.
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
                  <h3 className="mt-6 font-display text-xl font-semibold text-stone-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                        <CheckIcon className="h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 underline-offset-4 transition-colors hover:text-amber-600 hover:underline dark:text-white dark:hover:text-amber-400"
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
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="kicker justify-center">Our work</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              Recent <em className="italic text-amber-600 dark:text-amber-400">projects</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Explore some of our recent work for churches, faith-based organizations, and
              businesses.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 80}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-white">
                        {project.title}
                      </h3>
                      <ArrowUpRightIcon className="h-5 w-5 flex-shrink-0 text-stone-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-500" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-slate-800 dark:text-stone-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-navy-950">
        <Image
          src={images.cathedral.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/90" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Ready to transform your <em className="italic text-amber-400">ministry</em>?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
              Let&apos;s discuss how our digital solutions can help you reach your community and grow
              your mission — the first consultation is free.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="btn-primary px-8 py-4 text-base">
                Get a Free Consultation
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="kicker">Get in touch</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              Have a project in <em className="italic text-amber-600 dark:text-amber-400">mind</em>?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Tell us about your ministry and what you&apos;d like to build. We&apos;ll get back to
              you with ideas, timelines, and a plan to bring it to life.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                'We reply within 1–2 business days',
                'Free initial consultation — no commitment',
                'A clear proposal with scope, timeline, and pricing',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-stone-700 dark:text-stone-300">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card p-8 md:p-10">
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
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Honeypot field - hidden from users but visible to bots */}
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
                  className="mt-6 flex items-center gap-3 rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-300 animate-fade-in"
                >
                  <CheckIcon className="h-5 w-5 flex-shrink-0" />
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300 animate-fade-in"
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
