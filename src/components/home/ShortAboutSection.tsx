'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, UserCheck, Terminal, Palette, Sparkles, CheckCircle2 } from 'lucide-react';
import { FounderProfileCard } from '@/components/common/FounderProfileCard';

export function ShortAboutSection() {
  return (
    <section className="py-24 md:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Founder Profile Card & Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <FounderProfileCard />
          </motion.div>

          {/* Right Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3 font-semibold">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Behind the Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mb-6 leading-[1.08]">
              Designer. Developer.{' '}
              <span className="text-emerald-600 dark:text-emerald-400 block sm:inline">
                Visual storyteller.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              I operate at the intersection of aesthetic editorial design, robust web engineering, and next-generation AI video production. 
            </p>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Rather than managing disparate freelance designers, frontend developers, and video editors, my clients work directly with one dedicated builder who delivers end-to-end cohesion from Figma wireframe to 4K launch.
            </p>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300">
                <Palette className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bespoke Figma UI & Design Systems</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300">
                <Terminal className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Next.js 15, TypeScript & APIs</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300">
                <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Cinematic AI Video Generation</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated CRM & Lead Pipelines</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-neutral-950 transition-all duration-300 shadow-lg shadow-emerald-500/10"
            >
              <span>Explore My Full Story & Bio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

