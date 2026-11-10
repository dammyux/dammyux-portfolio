"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    // Check if previously loaded in this session
    const hasLoaded = sessionStorage.getItem("dammyux_preloaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const checkReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (checkReducedMotion) {
      sessionStorage.setItem("dammyux_preloaded", "true");
      setLoading(false);
      return;
    }

    // Natural, rhythmic count-up from 1 to 100 (~2 seconds)
    let current = 1;
    const interval = setInterval(() => {
      let increment = 1;
      if (current >= 30 && current < 75) {
        // Natural slight pace variation through the middle
        increment = Math.random() > 0.4 ? 2 : 1;
      } else if (current >= 92) {
        // Subtle deceleration into 100 for premium feel
        increment = 1;
      }

      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        // Brief pause at 100% before smooth fade out
        setTimeout(() => {
          sessionStorage.setItem("dammyux_preloaded", "true");
          setLoading(false);
        }, 320);
      } else {
        setProgress(current);
      }
    }, 24);

    return () => clearInterval(interval);
  }, []);

  // Journey milestones matching count
  const journeyStatus =
    progress < 25
      ? "Initializing design engine..."
      : progress < 55
      ? "Curating digital flagships..."
      : progress < 85
      ? "Calibrating user interfaces..."
      : progress < 100
      ? "Assembling interactive systems..."
      : "Welcome to DammyUX";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] text-white select-none overflow-hidden"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-brand/12 blur-[130px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-7 px-4 max-w-sm w-full">
            {/* Prominent, Professional Logo with Brand Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <Image
                src="/images/dammyux-logo.png"
                alt="DAMMYUX"
                width={280}
                height={102}
                priority
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_35px_rgba(0,255,135,0.4)]"
              />
            </motion.div>

            {/* Natural Digital Counter */}
            <div className="flex items-baseline justify-center font-mono">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter tabular-nums font-display">
                {String(progress).padStart(2, "0")}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-brand ml-1">%</span>
            </div>

            {/* Journey Milestone Status Text */}
            <div className="text-xs sm:text-[13px] font-mono tracking-wider text-neutral-400 text-center min-h-[20px]">
              {journeyStatus}
            </div>

            {/* Interactive Animated Loading Line */}
            <div className="w-full relative">
              {/* Background Track */}
              <div className="w-full h-[4px] bg-white/[0.08] rounded-full relative overflow-hidden backdrop-blur-sm border border-white/5">
                {/* Real-time Progress Fill Bar */}
                <div
                  className="h-full bg-gradient-to-r from-emerald-500/40 via-brand to-emerald-300 relative rounded-full transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                >
                  {/* Shimmer sweep animation over the line */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
                </div>
              </div>

              {/* Glowing Traveling Pulse Head Indicator */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-75 pointer-events-none"
                style={{ left: `${progress}%` }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-4 h-4 rounded-full bg-brand/50 animate-ping" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#00ff87,0_0_20px_#00ff87]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
