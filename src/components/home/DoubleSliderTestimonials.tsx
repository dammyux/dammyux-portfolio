'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, TrendingUp, Quote } from 'lucide-react';
import { testimonialsRow1, testimonialsRow2 } from '@/data/testimonials';
import { siteConfig } from '@/data/siteConfig';

export function DoubleSliderTestimonials() {
  const row1 = [...testimonialsRow1, ...testimonialsRow1];
  const row2 = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/40 dark:bg-neutral-900/20">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#fbfbfa] dark:from-[#090a0c] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#fbfbfa] dark:from-[#090a0c] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        {/* Metric Counter Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-4xl mx-auto">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1 font-sans">
                {stat.value}
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
          <Quote className="w-3.5 h-3.5" />
          <span>Client Proof & Outcomes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white mb-4">
          Trusted by founders & creators worldwide.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Real results from high-growth startups, luxury brands, and visionary agency founders.
        </p>
      </div>

      {/* Row 1: Right-to-Left Infinite Scroll */}
      <div className="flex w-full overflow-hidden select-none mb-6 group/row1">
        <div className="flex gap-6 items-center animate-scroll-left group-hover/row1:[animation-play-state:paused] whitespace-nowrap py-2">
          {row1.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800/80 shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between whitespace-normal shrink-0"
            >
              <div>
                {/* Stars & Metric Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-emerald-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {item.metric && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.metric}</span>
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-3">
                {item.avatar && (
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-emerald-500/30 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold text-neutral-950 dark:text-white">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Left-to-Right Infinite Scroll */}
      <div className="flex w-full overflow-hidden select-none group/row2">
        <div className="flex gap-6 items-center animate-scroll-right group-hover/row2:[animation-play-state:paused] whitespace-nowrap py-2">
          {row2.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800/80 shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between whitespace-normal shrink-0"
            >
              <div>
                {/* Stars & Metric Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-emerald-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {item.metric && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.metric}</span>
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-3">
                {item.avatar && (
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-emerald-500/30 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold text-neutral-950 dark:text-white">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
