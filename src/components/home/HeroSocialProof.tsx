"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Zap, Sparkles, CheckCircle2, ShieldCheck, MessageSquare, Play } from "lucide-react";

export function HeroSocialProof() {
  return (
    <div className="relative w-full max-w-xl mx-auto py-6 flex flex-col items-center justify-center select-none">
      {/* Ambient background glow behind bubbles */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-emerald-500/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating Bubbles Stack */}
      <div className="w-full space-y-4 relative">
        
        {/* TOP STATUS BUBBLE: Overall Rating & Proof */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex items-center justify-between px-5 py-3 rounded-full border border-neutral-200/90 dark:border-white/[0.1] bg-white/90 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg hover:border-brand/40 transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-brand flex items-center justify-center text-[10px] font-black text-neutral-950 ring-2 ring-white dark:ring-neutral-900">
                SJ
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-[10px] font-black text-white ring-2 ring-white dark:ring-neutral-900">
                MT
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-[10px] font-black text-white ring-2 ring-white dark:ring-neutral-900">
                AR
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-neutral-900 dark:text-white font-display">
                5.0 (120+ Reviews)
              </span>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold text-brand uppercase px-2.5 py-0.5 rounded-full bg-brand/10 border border-brand/20">
            <ShieldCheck className="w-3 h-3" />
            Verified Pro
          </span>
        </motion.div>

        {/* BUBBLE 1: Main Speech Bubble Review (Left-Aligned Chat Card) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.15 },
            y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="relative p-5 sm:p-6 rounded-[28px] rounded-tl-sm border border-neutral-200/90 dark:border-white/[0.1] bg-white/95 dark:bg-neutral-900/90 backdrop-blur-xl shadow-xl hover:border-brand/50 dark:hover:border-brand/40 transition-all duration-300"
        >
          {/* Bubble Tail Accent */}
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-xs font-bold text-brand font-display">
                SJ
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white font-display leading-tight">
                  Sarah Jenkins
                </h4>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                  Head of Product, Synthetix
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <p className="font-sans text-[13px] sm:text-[14px] leading-[20px] text-neutral-800 dark:text-neutral-200 font-normal">
            &ldquo;Dammy redesigned and engineered our entire digital flagship in Next.js. Demo bookings skyrocketed by <span className="font-bold text-brand bg-brand/10 px-1.5 py-0.5 rounded">140%</span> in our first week after launch!&rdquo;
          </p>

          <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-400">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3 h-3" /> Website Design & Next.js
            </span>
            <span>2 hours ago</span>
          </div>
        </motion.div>

        {/* BUBBLE 2: Floating Stat Pill (Right-Aligned Accent) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, y: [0, 8, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.3 },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          whileHover={{ scale: 1.03 }}
          className="ml-auto max-w-xs sm:max-w-sm p-3.5 px-5 rounded-full border border-neutral-200/90 dark:border-white/[0.1] bg-gradient-to-r from-emerald-500/10 via-brand/10 to-transparent dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg flex items-center gap-3.5 hover:border-brand/50 transition-all duration-300"
        >
          <div className="p-2 rounded-full bg-brand text-neutral-950 shrink-0 shadow-[0_0_15px_rgba(0,255,135,0.4)]">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-black text-neutral-900 dark:text-white font-display">
                +140% Lead Growth
              </span>
              <span className="text-[10px] font-mono text-brand font-bold">AVG ROI</span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans truncate">
              Conversion rate lift on new redesigns
            </p>
          </div>
        </motion.div>

        {/* BUBBLE 3: AI Video Customer Review Bubble (Left/Center Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: [0, -7, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: 0.45 },
            y: { duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
          }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="relative p-5 sm:p-6 rounded-[28px] rounded-tr-sm border border-neutral-200/90 dark:border-white/[0.1] bg-white/95 dark:bg-neutral-900/90 backdrop-blur-xl shadow-xl hover:border-emerald-400/50 dark:hover:border-emerald-400/40 transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center text-xs font-bold text-cyan-400 font-display">
                MT
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white font-display leading-tight">
                  Marcus Thorne
                </h4>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                  VP Marketing, Apex Studio
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              <Sparkles className="w-3 h-3" /> AI Video
            </span>
          </div>

          <p className="font-sans text-[13px] sm:text-[14px] leading-[20px] text-neutral-800 dark:text-neutral-200 font-normal">
            &ldquo;The generative AI video ads generated over <span className="font-bold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">2.4M organic impressions</span> on TikTok. Hollywood-grade fidelity in record turnaround time.&rdquo;
          </p>

          <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-400">
            <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
              <CheckCircle2 className="w-3 h-3" /> Cinematic AI Campaign Suite
            </span>
            <span>Yesterday</span>
          </div>
        </motion.div>

        {/* BOTTOM METRIC PILL: Speed & Uptime */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.6 },
            y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }
          }}
          className="flex items-center justify-center gap-3 p-3 px-5 rounded-full border border-neutral-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md shadow-sm text-xs font-mono text-neutral-600 dark:text-neutral-300"
        >
          <span className="flex items-center gap-1 font-bold text-brand">
            <Zap className="w-3.5 h-3.5" /> 99/100 PageSpeed
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <span className="flex items-center gap-1 text-neutral-700 dark:text-neutral-300 font-sans font-medium">
            Sub-second Next.js execution
          </span>
        </motion.div>

      </div>
    </div>
  );
}
