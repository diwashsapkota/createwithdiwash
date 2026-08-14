'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, CloseIcon } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    if (menuRef.current) menuRef.current.open = false;
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Over the dark hero the nav is transparent with light text; everywhere else it is solid.
  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-paper/90 dark:bg-navy-950/90 backdrop-blur-xl border-b border-stone-200/70 dark:border-slate-800/70 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className={`font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
              solid ? 'text-stone-900 dark:text-white' : 'text-white'
            }`}
          >
            Create with Diwash<span className="text-amber-400">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-200 ${
                        active
                          ? 'text-amber-500'
                          : solid
                            ? 'text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400'
                            : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contact"
              className="btn-primary min-h-11 px-5 py-2.5 text-sm"
            >
              Start a Project
            </Link>
          </div>

          {/* Native details so the menu opens even if a React click handler is dropped */}
          <details
            ref={menuRef}
            className="md:hidden"
            onToggle={(event) => {
              setMenuOpen((event.currentTarget as HTMLDetailsElement).open);
            }}
          >
            <summary
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full transition-colors [&::-webkit-details-marker]:hidden ${
                solid ? 'text-stone-900 dark:text-white' : 'text-white'
              }`}
            >
              {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </summary>
            <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-stone-200/70 bg-paper dark:border-slate-800/70 dark:bg-navy-950">
              <ul className="space-y-2 px-6 py-8">
                {navLinks.map((link) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={`block py-3 font-display text-3xl font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400 ${
                          active
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-stone-900 dark:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 pb-10">
                <Link href="/contact" className="btn-primary w-full px-6 py-4 text-base">
                  Start a Project
                </Link>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
