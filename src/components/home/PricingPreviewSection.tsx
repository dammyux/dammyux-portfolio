'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles, Clock, Users } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';

export function PricingPreviewSection() {
  return (
    <section className="py-24 md:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Investment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Predictable pricing.{' '}
              <span className="text-neutral-600 dark:text-neutral-400 font-normal block sm:inline">
                No surprises.
              </span>
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            <span>View Full Services & Breakdown</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-neutral-900 text-white dark:bg-[#0f1216] border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 md:-translate-y-2'
                    : 'bg-white dark:bg-[#0c0e12] text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-lg hover:border-emerald-500/40'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.badge && (
                  <div className="mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isPopular
                          ? 'bg-emerald-500 text-neutral-950 shadow-md'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-xs mb-6 min-h-[36px] ${
                      isPopular ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-neutral-200/40 dark:border-neutral-800">
                    <span className="text-4xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span
                        className={`text-xs ${
                          isPopular ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        / starting rate
                      </span>
                    )}
                  </div>

                  {/* Timeline & Ideal For */}
                  <div className="space-y-2.5 mb-6 text-xs">
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                      <Clock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Timeline: {plan.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                      <Users className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{plan.idealFor}</span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-8">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider block mb-3 ${
                        isPopular ? 'text-neutral-400' : 'text-neutral-400 dark:text-neutral-500'
                      }`}
                    >
                      What&apos;s Included:
                    </span>
                    {plan.deliverables.slice(0, 5).map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span
                          className={
                            isPopular ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'
                          }
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                    isPopular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md hover:shadow-lg shadow-emerald-500/20'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

