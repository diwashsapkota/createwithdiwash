import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CheckIcon, ArrowRightIcon, SparkIcon, UsersIcon } from '@/components/icons';
import { images } from '@/lib/site';

const whatWeOffer = [
  'Digital marketing and email marketing campaigns to grow your reach',
  'Custom website and mobile application development',
  'Specialized Church CRM systems for member and donation management',
  "Data analytics to track engagement and measure your ministry's impact",
  'Professional graphic design, web design, and video editing services',
  'System automations using n8n, Zapier, Power Automate, and other integration platforms',
];

const ourTeam = [
  'Highly skilled graphic designers specializing in faith-based content',
  'Expert web designers creating beautiful, functional church websites',
  'Professional video editors for sermons, events, and promotional content',
  'Digital marketing specialists focused on growing your ministry',
];

export default function About() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero / intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="kicker">About us</p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
              Create with <em className="italic text-amber-600 dark:text-amber-400">Diwash</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Welcome to Create with Diwash, where faith meets technology. We are passionate about
              empowering churches and faith-based organizations with comprehensive digital
              solutions that help them reach their communities and fulfill their missions.
            </p>
            <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">
              Our mission is to help churches and faith-based organizations thrive in the digital
              age. We understand the unique needs of ministries and provide specialized services
              including digital marketing, website and mobile app development, Church CRM systems,
              system automations using n8n, Zapier, and Power Automate, data analytics, and
              creative services like graphic design and video editing.
            </p>
            <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">
              With a team of experienced and highly skilled professionals — including graphic
              designers, web designers, and video editors — we combine modern design principles
              with cutting-edge technology to create solutions that are both beautiful and
              functional, specifically tailored for churches and faith-based organizations.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={images.teamWorkshop.src}
                  alt={images.teamWorkshop.alt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-xl dark:border-slate-900 sm:block md:w-64">
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
              <div className="absolute -top-5 -right-5 -z-10 h-40 w-40 rounded-3xl bg-amber-200/60 dark:bg-amber-400/10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we offer / Our team */}
      <section className="bg-white dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <Reveal>
              <div className="card h-full p-8">
                <div className="icon-tile">
                  <SparkIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-stone-900 dark:text-white">
                  What We Offer
                </h2>
                <ul className="mt-6 space-y-4">
                  {whatWeOffer.map((item) => (
                    <li key={item} className="flex gap-3 text-stone-700 dark:text-stone-300">
                      <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card h-full p-8">
                <div className="icon-tile">
                  <UsersIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-stone-900 dark:text-white">
                  Our Team
                </h2>
                <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">
                  We have a dedicated team of experienced professionals who understand the unique
                  needs of churches and faith-based organizations:
                </p>
                <ul className="mt-6 space-y-4">
                  {ourTeam.map((item) => (
                    <li key={item} className="flex gap-3 text-stone-700 dark:text-stone-300">
                      <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            Let&apos;s build something <em className="italic text-amber-600 dark:text-amber-400">meaningful</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Tell us about your ministry and what you&apos;d like to create — the first consultation
            is free.
          </p>
          <Link href="/#contact" className="btn-dark mt-9 px-7 py-3.5 text-sm">
            Get in Touch
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
