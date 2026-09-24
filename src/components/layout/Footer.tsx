"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUp, ArrowUpRight, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-neutral-200/80 dark:border-white/[0.08] bg-neutral-100/60 dark:bg-[#070709] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white"
            >
              <span>DAMMY<span className="text-brand">UX</span></span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand/10 text-brand border border-brand/20">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                {siteConfig.availability}
              </span>
            </div>
          </div>

          {/* Navigation & Services */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Disciplines
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  UI/UX & Product Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  Technical SEO & CRO
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  AI Video Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Pages */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Studio
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                <Link href="/about" className="hover:text-brand transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-brand transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-brand transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Direct Channels
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-brand transition-colors group"
              >
                <span>Upwork Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={siteConfig.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-brand transition-colors group"
              >
                <span>Fiverr Pro</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-brand transition-colors group"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-brand transition-colors group"
              >
                <span>WhatsApp Direct</span>
                <MessageSquare className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-brand transition-colors group"
              >
                <span>{siteConfig.email}</span>
                <Mail className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved. Built with Next.js & Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 hover:text-brand hover:border-brand/40 transition-all focus:outline-none"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
