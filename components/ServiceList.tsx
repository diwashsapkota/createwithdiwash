import Link from 'next/link';
import { serviceGroups, services } from '@/lib/site';

export default function ServiceList() {
  return (
    <div className="mt-16 space-y-16">
      {serviceGroups.map((group) => (
        <div key={group.title}>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">
            {group.title}
          </h2>
          <ul className="mt-6 border-y border-stone-200 dark:border-slate-800">
            {group.slugs.map((slug) => {
              const service = services.find((item) => item.slug === slug);
              if (!service) return null;
              return (
                <li
                  key={slug}
                  className="border-b border-stone-200 last:border-b-0 dark:border-slate-800"
                >
                  <Link
                    href={`/services/${slug}`}
                    className="group flex min-h-11 flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                  >
                    <span className="font-display text-lg text-stone-900 transition-colors group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400">
                      {service.title}
                    </span>
                    <span className="max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-right">
                      {service.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
