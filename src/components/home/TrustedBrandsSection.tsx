'use client';

import * as React from 'react';
import { brands } from '@/data/brands';
import { Sparkles } from 'lucide-react';

export function TrustedBrandsSection() {
  const brandList = [...brands, ...brands, ...brands];

  return (
    <section className="py-14 border-y border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-[#07080a]/50 overflow-hidden relative">
      {/* Side Fade Gradients for clean marquee loop */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#fbfbfa] dark:from-[#090a0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#fbfbfa] dark:from-[#090a0c] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Trusted by Innovative Brands & Fast-Growing Startups</span>
        </p>
      </div>

      {/* Marquee Track */}
      <div className="flex w-full overflow-hidden select-none">
        <div className="flex gap-6 sm:gap-8 items-center animate-marquee whitespace-nowrap py-2">
          {brandList.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-[#111317] border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-sm hover:border-emerald-500/40 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs sm:text-sm font-bold tracking-tight font-sans">
                {brand.name}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono hidden sm:inline">
                / {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

