'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, Video, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function DisciplinesSection() {
  return (
    <section className="py-24 md:py-32 relative bg-neutral-100/60 dark:bg-neutral-900/30 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white mb-4">
            Two distinct realms.{' '}
            <span className="text-emerald-600 dark:text-emerald-400">One unified standard.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Eliminate fragmented agency handoffs. We unify high-level editorial design engineering with cutting-edge AI video storytelling under a single multidisciplinary studio.
          </p>
        </div>

        {/* 2 Major Disciplines Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.disciplines.map((discipline, idx) => {
            const isWeb = discipline.id === 'web-digital';
            return (
              <motion.div
                key={discipline.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                {/* Discipline Top Icon & Title */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      {isWeb ? <Globe2 className="w-7 h-7" /> : <Video className="w-7 h-7" />}
                    </div>
                    <span className="text-xs font-mono tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                      0{idx + 1} / 02
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mb-2">
                    {discipline.title}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                    {discipline.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                    {discipline.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 mb-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/80">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      Core Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {discipline.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Link */}
                <Link
                  href={discipline.ctaHref}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-neutral-100 dark:border-neutral-800/80 text-sm font-semibold text-neutral-900 dark:text-neutral-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                >
                  <span>{discipline.ctaText}</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
