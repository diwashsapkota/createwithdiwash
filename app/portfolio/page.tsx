import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/icons';
import { projects, images } from '@/lib/site';

export default function Portfolio() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center">Our work</p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">
            Our <em className="italic text-amber-600 dark:text-amber-400">portfolio</em>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Explore some of our recent projects and creative work for churches, faith-based
            organizations, and businesses.
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
                    <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-white">
                      {project.title}
                    </h2>
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
      </section>

      {/* Closing CTA band */}
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
              Your project could be <em className="italic text-amber-400">next</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
              Let&apos;s discuss how we can help bring your ideas to life — the first consultation
              is free.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Start Your Project
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
