'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Calendar 
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Interactive3DCard } from '@/components/ui/Interactive3DCard';

type PricingMode = 'sprints' | 'retainers';

const sprintPlans = [
  {
    id: 'starter-sprint',
    name: 'Starter Sprint',
    badge: 'Fast Delivery',
    price: '$750',
    period: 'one-time',
    description: 'Perfect for high-impact landing pages, 3-page sites, brand redesigns, or targeted AI video commercial packs.',
    timeline: '5 – 7 Business Days',
    idealFor: 'Startups, Solo Founders & Product Launches',
    deliverables: [
      'High-converting Single Page or 3-Page Website',
      'Modern, Responsive UI/UX (Figma + Code)',
      'Next.js 15, Framer, Webflow or WordPress',
      'Technical SEO & 95+ Core Web Vitals',
      'Zero-Flash Dark / Light Theme System',
      '1x 30s High-Def AI Video Commercial or Ad',
      'Direct WhatsApp & Founder Communication',
      '14 Days Dedicated Post-Launch Support'
    ],
    popular: false,
    ctaText: 'Book Starter Sprint',
    ctaLink: '/contact?plan=starter'
  },
  {
    id: 'full-studio',
    name: 'Professional Studio',
    badge: 'Most Popular',
    price: '$1,850',
    period: 'one-time',
    description: 'A complete end-to-end bespoke website build with custom animations, CMS, and multi-asset AI video campaign.',
    timeline: '2 – 3 Weeks',
    idealFor: 'Growing Brands, E-commerce & Scale-ups',
    deliverables: [
      'Full Multi-Page Website (Up to 8 Custom Pages)',
      'Custom 3D / WebGL & Framer Motion Effects',
      'Full CMS (Next.js App Router, Shopify, or WordPress)',
      'Lead Capture & Automated CRM Workflows (Make/Zapier)',
      '3x High-Impact AI Video Commercials (16:9 + 9:16 Socials)',
      'Comprehensive Brand Style Guide & Assets',
      'Priority Turnaround & Weekly Live Demos',
      '30 Days Dedicated Post-Launch Support'
    ],
    popular: true,
    ctaText: 'Start Professional Project',
    ctaLink: '/contact?plan=professional'
  },
  {
    id: 'custom-enterprise',
    name: 'Enterprise / Custom',
    badge: 'Bespoke Scope',
    price: 'Custom',
    period: 'quote-based',
    description: 'Tailored solutions for complex web applications, high-volume AI video series, or multi-brand digital ecosystems.',
    timeline: 'Custom Milestone Schedule',
    idealFor: 'Enterprise Teams & High-Volume Media Brands',
    deliverables: [
      'Bespoke Web Application & Headless Architecture',
      'Custom AI Automation Workflows & Intelligent Agents',
      'Cinematic AI Video Universe & Episodic Series',
      'Continuous Conversion Rate Optimization & A/B Testing',
      'Internationalization & Multi-Language Architecture',
      '24/7 Dedicated Private Slack & WhatsApp Channel',
      'Weekly Strategy Sprints & Performance Reviews',
      'Custom SLA & Ongoing Maintenance Retainer'
    ],
    popular: false,
    ctaText: 'Discuss Custom Scope',
    ctaLink: '/contact?plan=enterprise'
  }
];

const retainerPlans = [
  {
    id: 'retainer-growth',
    name: 'Growth Design & Dev',
    badge: 'Continuous Velocity',
    price: '$1,450',
    period: '/ month',
    description: 'Continuous web development, landing page rollouts, UI/UX optimization, and feature enhancements on demand.',
    timeline: '48h avg turnaround per request',
    idealFor: 'Startups requiring ongoing design & frontend velocity',
    deliverables: [
      '1 Active Request at a Time (Unlimited Queue)',
      'New Landing Pages, UI Components & Features',
      'Continuous Speed & Technical SEO Monitoring',
      'Figma UI/UX Prototypes & Next.js/Tailwind Coding',
      'Weekly Strategy & Async Loom Video Reviews',
      'Direct Private Slack / WhatsApp Access',
      'Pause or Cancel Anytime'
    ],
    popular: false,
    ctaText: 'Subscribe to Growth',
    ctaLink: '/contact?plan=retainer-growth'
  },
  {
    id: 'retainer-full-stack',
    name: 'Dedicated Studio Retainer',
    badge: 'Most Popular Retainer',
    price: '$2,950',
    period: '/ month',
    description: 'Full-spectrum creative studio on subscription: web development, digital automation, UI systems, and regular AI video ad drops.',
    timeline: '24-48h rapid turnaround',
    idealFor: 'High-growth brands scaling media and web ecosystems',
    deliverables: [
      '2 Active Requests Concurrently (Unlimited Queue)',
      'Full-Stack Web Dev (Next.js, Tailwind, APIs, CMS)',
      '4x High-Definition AI Video Commercials per month',
      'Custom Backend Automations (Make, n8n, Zapier)',
      'Conversion Rate Optimization (A/B Test Design)',
      'Priority 1-on-1 Founder Support on Slack/WhatsApp',
      'Flexible Month-to-Month Retainer (Pause Anytime)'
    ],
    popular: true,
    ctaText: 'Start Studio Retainer',
    ctaLink: '/contact?plan=retainer-full'
  },
  {
    id: 'retainer-enterprise',
    name: 'Enterprise Scale Partner',
    badge: 'Maximum Output',
    price: '$4,800',
    period: '/ month',
    description: 'Dedicated embedded partner providing fractional creative director, senior full-stack development, and unlimited media pipeline.',
    timeline: 'Same-day sprint response',
    idealFor: 'Enterprises & agencies needing dedicated high-volume firepower',
    deliverables: [
      'Unlimited Parallel Requests & Dedicated Priority Queue',
      'Complete Web Architecture & Custom Platform Engineering',
      'Unlimited AI Video & Motion Graphics Production',
      'Enterprise-grade Security, Backups & SLA',
      'Direct Daily Synchronous Standups & Private Slack',
      'Custom NDAs & IP Ownership Assignment',
      'Dedicated Creative Technologist on Standby'
    ],
    popular: false,
    ctaText: 'Partner with Enterprise',
    ctaLink: '/contact?plan=retainer-enterprise'
  }
];

export function InteractivePricingSection() {
  const [mode, setMode] = React.useState<PricingMode>('sprints');
  const activePlans = mode === 'sprints' ? sprintPlans : retainerPlans;

  return (
    <section id="pricing" className="py-24 md:py-32 relative border-t border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/50 dark:bg-[#080a0e]/50">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] mb-6">
            Predictable pricing.{' '}
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">
              No hidden fees.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Choose between fixed-scope project sprints or flexible monthly retainers. 
            All engagements include direct founder communication, fast turnaround, and guaranteed quality.
          </p>

          {/* Interactive Pricing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <button
              onClick={() => setMode('sprints')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                mode === 'sprints'
                  ? 'bg-neutral-950 dark:bg-emerald-500 text-white dark:text-neutral-950 shadow-md scale-105'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              🚀 Project Sprints (Fixed Scope)
            </button>
            <button
              onClick={() => setMode('retainers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                mode === 'retainers'
                  ? 'bg-neutral-950 dark:bg-emerald-500 text-white dark:text-neutral-950 shadow-md scale-105'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              🔄 Monthly Dedicated Retainers
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                Flexible
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid with 3D Tilt */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16"
          >
            {activePlans.map((plan) => {
              const isPopular = plan.popular;
              return (
                <Interactive3DCard key={plan.id} className="h-full">
                  <div
                    className={`h-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                      isPopular
                        ? 'bg-neutral-900 text-white dark:bg-[#0e1217] border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10'
                        : 'bg-white dark:bg-[#0c0e12] text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800/80 shadow-lg hover:border-emerald-500/40'
                    }`}
                  >
                    <div>
                      {/* Badge Ribbon */}
                      {plan.badge && (
                        <div className="mb-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              isPopular
                                ? 'bg-emerald-500 text-neutral-950 shadow-md'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700'
                            }`}
                          >
                            {plan.badge}
                          </span>
                        </div>
                      )}

                      <h3 className="text-xl font-bold mb-2 text-neutral-950 dark:text-white">
                        {plan.name}
                      </h3>

                      <p
                        className={`text-xs mb-6 min-h-[36px] ${
                          isPopular ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        {plan.description}
                      </p>

                      {/* Price Header */}
                      <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-neutral-200/50 dark:border-neutral-800">
                        <span className="text-4xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
                          {plan.price}
                        </span>
                        <span
                          className={`text-xs font-mono ${
                            isPopular ? 'text-neutral-400' : 'text-neutral-500'
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>

                      {/* Timeline & Turnaround */}
                      <div className="space-y-2 mb-6 text-xs">
                        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 font-medium">
                          <Clock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Timeline: {plan.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                          <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Best for: {plan.idealFor}</span>
                        </div>
                      </div>

                      {/* Deliverables List */}
                      <div className="space-y-2.5 mb-8">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          What&apos;s Included:
                        </p>
                        {plan.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span
                              className={
                                isPopular
                                  ? 'text-neutral-200'
                                  : 'text-neutral-700 dark:text-neutral-300'
                              }
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-neutral-200/40 dark:border-neutral-800 flex flex-col gap-2.5">
                      <Link
                        href={plan.ctaLink}
                        className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                          isPopular
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/20'
                            : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100'
                        }`}
                      >
                        <span>{plan.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 text-center text-xs font-mono text-neutral-500 hover:text-emerald-500 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Quick WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>
                </Interactive3DCard>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Guarantees & Safe Escrow Trust Strip */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white">
                100% Milestone & Escrow Safety Guaranteed
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Work directly via secure invoice, or hire with buyer protection on Fiverr Pro and Upwork.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.contact.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-mono border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:border-emerald-500 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              Order on Fiverr Pro
            </a>
            <a
              href={siteConfig.contact.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-mono border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:border-emerald-500 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              Hire on Upwork
            </a>
            <a
              href={siteConfig.contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-mono bg-emerald-500 text-neutral-950 font-semibold hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Strategy Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
