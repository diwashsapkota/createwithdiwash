import Link from 'next/link';
import { services } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-2xl font-semibold text-white">
              Create with Diwash<span className="text-amber-400">.</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              Where faith meets technology. Digital marketing, websites, mobile apps, Church CRM,
              automation, and creative services for churches and faith-based organizations.
            </p>
            <Link href="/contact" className="btn-primary mt-7 px-6 py-3 text-sm">
              Start a Project
            </Link>
          </div>

          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More services">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500 mb-5">
              Creative
            </h3>
            <ul className="space-y-3 text-sm">
              {services.slice(6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500 mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-amber-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>© {year} Create with Diwash. All rights reserved.</p>
          <p className="font-display italic text-stone-400">Empowering ministries in the digital age.</p>
        </div>
      </div>
    </footer>
  );
}
