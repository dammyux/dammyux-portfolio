"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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

    // Dynamic, fast journey progression
    const steps = [
      { value: 32, delay: 120 },
      { value: 68, delay: 260 },
      { value: 100, delay: 440 },
    ];

    const timers: NodeJS.Timeout[] = [];

    steps.forEach(({ value, delay }) => {
      const timer = setTimeout(() => {
        setProgress(value);
      }, delay);
      timers.push(timer);
    });

    const finishTimer = setTimeout(() => {
      sessionStorage.setItem("dammyux_preloaded", "true");
      setLoading(false);
    }, 620);
    timers.push(finishTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Journey milestones
  const journeyStatus =
    progress < 35
      ? "Curating digital flagships..."
      : progress < 75
      ? "Engineering interactive craft..."
      : progress < 100
      ? "Assembling design matrix..."
      : "Welcome to DammyUX";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] text-white select-none"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute w-96 h-96 rounded-full bg-brand/15 blur-[120px] pointer-events-none animate-pulse-glow" />

          <div className="relative flex flex-col items-center gap-7 px-4">
            {/* Prominent, Professional Logo with Brand Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
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

            {/* Journey Milestone Status */}
            <motion.div
              key={journeyStatus}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs sm:text-[13px] font-mono tracking-wide text-neutral-400 font-medium"
            >
              {journeyStatus}
            </motion.div>

            {/* Luminous Journey Path Indicator */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-60 sm:w-72 h-[3px] bg-white/[0.08] rounded-full relative overflow-hidden backdrop-blur-sm border border-white/5">
                {/* Flowing Energy Line */}
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500/20 via-brand to-emerald-300 relative rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut", duration: 0.25 }}
                />
              </div>

              {/* Counter percentage */}
              <div className="flex items-baseline gap-1 font-mono text-[11px] tracking-widest text-neutral-500">
                <span className="text-white font-semibold">{String(progress).padStart(2, "0")}</span>
                <span className="text-brand font-bold">%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
