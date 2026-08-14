'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { CheckIcon } from '@/components/icons';

export default function Contact() {
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

    if ((Date.now() - formStartTime) / 1000 < 3) {
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

  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="kicker">Get in touch</p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              Have a project in <em className="italic text-amber-600 dark:text-amber-400">mind</em>?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Let&apos;s discuss how we can help bring your ideas to life. Tell us about your
              ministry and what you&apos;d like to build — we&apos;ll get back to you with ideas,
              timelines, and a plan.
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
            <form onSubmit={handleSubmit} className="card relative p-8 md:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100"
                  >
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
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100"
                  >
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
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100"
                >
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
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="field resize-none"
                  placeholder="Tell us about your project..."
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
                {status === 'loading' ? 'Sending…' : 'Send Message'}
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

              {status === 'too_fast' && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200 animate-fade-in"
                >
                  Please wait a moment, then send again. This helps us filter automated submissions.
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
    </div>
  );
}
