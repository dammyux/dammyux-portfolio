import Link from 'next/link';
import { ArrowUpRight, Heart } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-[#07080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-4"
              >
                <span>dammy</span>
                <span className="text-emerald-600 dark:text-emerald-400">ux</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed mb-6">
                Multidisciplinary Creative Studio specializing in bespoke Web Design & Development, UI/UX Systems, and Cinematic AI Video Production. Simple for the client. Sophisticated underneath.
              </p>
            </div>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-200/60 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-300 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{siteConfig.author.statusText}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#web-design-dev"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Web Design & Dev
                </Link>
              </li>
              <li>
                <Link
                  href="/services#design-digital"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  UI/UX & Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-video-production"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  AI Video Production
                </Link>
              </li>
              <li>
                <Link
                  href="/services#design-digital"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Digital Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels Col */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              Direct Channels
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Book Discovery Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>{siteConfig.contact.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Upwork Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Fiverr Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-500">
          <p>© {currentYear} dammyux. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with precision & passion</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}

