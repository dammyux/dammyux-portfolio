"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { ArrowUpRight, Menu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#070709]/80 dark:bg-[#070709]/80 light:bg-white/80 backdrop-blur-xl border-b border-neutral-200/60 dark:border-white/[0.06] shadow-sm dark:shadow-none"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md py-1"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-neutral-900 dark:text-white transition-colors">
              DAMMY<span className="text-brand">UX</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:scale-150 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full glass-panel dark:bg-neutral-900/60 light:bg-white/80 border border-neutral-200/80 dark:border-white/[0.08] shadow-sm">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-brand font-semibold"
                      : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/40 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-brand/10 dark:bg-brand/15 -z-10" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs lg:text-sm font-semibold text-neutral-900 dark:text-white bg-neutral-900 text-white dark:bg-white/[0.08] dark:hover:bg-brand dark:hover:text-neutral-950 hover:bg-brand hover:text-neutral-950 rounded-full transition-all duration-300 border border-neutral-800 dark:border-white/[0.12] hover:border-brand shadow-sm hover:shadow-[0_0_20px_rgba(0,255,135,0.4)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 hover:text-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
