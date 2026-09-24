"use client";

import { useEffect, useState } from "react";
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

    // Fast discrete progression: 0% -> 25% -> 60% -> 100%
    const steps = [
      { value: 25, delay: 180 },
      { value: 60, delay: 380 },
      { value: 100, delay: 650 },
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
    }, 900);
    timers.push(finishTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] text-white"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl font-bold tracking-tighter uppercase font-display">
                dammy<span className="text-brand">ux</span>
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand animate-ping" />
            </motion.div>

            {/* Counter */}
            <div className="flex items-baseline gap-1 font-mono text-xs tracking-widest text-neutral-400">
              <span className="text-sm font-semibold text-white">
                {String(progress).padStart(2, "0")}
              </span>
              <span className="text-brand">%</span>
            </div>

            {/* Minimal Progress Line */}
            <div className="w-32 h-[2px] bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand to-emerald-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
