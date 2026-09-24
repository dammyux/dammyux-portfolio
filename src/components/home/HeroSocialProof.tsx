"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Zap, Sparkles, ShieldCheck } from "lucide-react";

interface ReviewBubble {
  id: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  icon: typeof TrendingUp;
  quote: string;
  author: string;
  role: string;
  rating: number;
  metric?: string;
  metricLabel?: string;
  delay: number;
  duration: number;
  yOffset: number;
}

const reviewBubbles: ReviewBubble[] = [
  {
    id: "review-1",
    tag: "CONVERSION LIFT",
    tagColor: "text-emerald-400",
    tagBg: "bg-emerald-500/10 border-emerald-500/20",
    icon: TrendingUp,
    quote: "Dammy rebuilt our marketing site. Demo bookings skyrocketed by 140% in week one.",
    author: "Alex Rivers",
    role: "Founder & CEO, Synthetix",
    rating: 5,
    metric: "+140%",
    metricLabel: "Lead Growth",
    delay: 0,
    duration: 5.5,
    yOffset: 8,
  },
  {
    id: "review-2",
    tag: "AI VIDEO PRODUCTION",
    tagColor: "text-brand",
    tagBg: "bg-brand/10 border-brand/20",
    icon: Sparkles,
    quote: "The 3D generative film ads generated over 2.4M organic views on TikTok & IG.",
    author: "Elena Rostov",
    role: "Creative Director, Nexus",
    rating: 5,
    metric: "2.4M+",
    metricLabel: "Impressions",
    delay: 0.3,
    duration: 6.2,
    yOffset: 12,
  },
  {
    id: "review-3",
    tag: "SPEED & CRAFT",
    tagColor: "text-cyan-400",
    tagBg: "bg-cyan-500/10 border-cyan-500/20",
    icon: Zap,
    quote: "Sub-second load times, pixel-perfect Figma translation, and delivered 4 days ahead of schedule.",
    author: "Marcus Chen",
    role: "VP Engineering, Loom",
    rating: 5,
    metric: "99/100",
    metricLabel: "PageSpeed",
    delay: 0.6,
    duration: 5.8,
    yOffset: 10,
  },
];

export function HeroSocialProof() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto py-4 flex flex-col items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand/15 via-emerald-500/5 to-transparent rounded-3xl blur-3xl pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="w-full space-y-4 sm:space-y-5">
        {/* Top Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-neutral-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-950 bg-brand text-neutral-950 text-xs font-black">
                AR
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-950 bg-emerald-400 text-neutral-950 text-xs font-black">
                ER
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-950 bg-cyan-400 text-neutral-950 text-xs font-black">
                MC
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-950 bg-neutral-800 text-brand text-[10px] font-bold">
                50+
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-neutral-900 dark:text-white ml-1 font-display">
                  5.0
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Verified Client Reviews
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-[10px] font-mono font-bold text-brand uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Verified</span>
          </div>
        </motion.div>

        {/* Floating Review Bubbles */}
        {reviewBubbles.map((bubble) => {
          const IconComponent = bubble.icon;
          return (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: 1,
                y: [0, -bubble.yOffset, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: bubble.delay },
                y: {
                  duration: bubble.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bubble.delay,
                },
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative p-5 sm:p-6 rounded-3xl border border-neutral-200/90 dark:border-white/[0.08] bg-white dark:bg-neutral-900/70 backdrop-blur-xl shadow-lg hover:border-brand/50 dark:hover:border-brand/40 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${bubble.tagBg} ${bubble.tagColor}`}
                >
                  <IconComponent className="w-3 h-3" />
                  <span>{bubble.tag}</span>
                </div>

                {bubble.metric && (
                  <div className="text-right">
                    <span className="block text-sm sm:text-base font-black text-brand tracking-tight font-display">
                      {bubble.metric}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">
                      {bubble.metricLabel}
                    </span>
                  </div>
                )}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed italic mb-4 font-normal">
                &ldquo;{bubble.quote}&rdquo;
              </p>

              {/* Author Info & Star Rating */}
              <div className="pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white leading-tight font-display">
                    {bubble.author}
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {bubble.role}
                  </p>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(bubble.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Live Status Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-center text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-1"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span>Currently accepting new project inquiries for Q1/Q2</span>
        </motion.div>
      </div>
    </div>
  );
}
