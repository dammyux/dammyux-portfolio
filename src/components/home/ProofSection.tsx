'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { siteConfig } from '@/data/siteConfig';

export function ProofSection() {
  return (
    <section className="py-24 md:py-32 relative bg-neutral-100/60 dark:bg-neutral-900/30 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {siteConfig.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800/80 text-center shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Proof & Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Trusted by founders, agencies, and creators.
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800/80 flex flex-col justify-between shadow-lg relative group hover:border-emerald-500/40"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-emerald-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Outcome Badge */}
                {item.metric && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-4 border border-emerald-500/20">
                    <TrendingUp className="w-3 h-3" />
                    <span>{item.metric}</span>
                  </div>
                )}

                {/* Quote */}
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-sm font-bold text-neutral-950 dark:text-white">
                  {item.author}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {item.role}, {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

