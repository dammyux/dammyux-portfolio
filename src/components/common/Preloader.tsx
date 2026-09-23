'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [progress, setProgress] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);
  const [shouldRender, setShouldRender] = React.useState(true);

  React.useEffect(() => {
    // Check if previously loaded in session to prevent annoying re-delays
    const hasLoaded = sessionStorage.getItem('dammyux_preloaded');
    if (hasLoaded) {
      setShouldRender(false);
      return;
    }

    const intervals = [
      { target: 25, time: 200 },
      { target: 60, time: 400 },
      { target: 90, time: 700 },
      { target: 100, time: 950 }
    ];

    intervals.forEach(({ target, time }) => {
      setTimeout(() => {
        setProgress(target);
        if (target === 100) {
          setTimeout(() => {
            setIsComplete(true);
            sessionStorage.setItem('dammyux_preloaded', 'true');
            setTimeout(() => setShouldRender(false), 600);
          }, 300);
        }
      }, time);
    });
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090a0c] text-white select-none pointer-events-auto"
        >
          <div className="relative flex flex-col items-center">
            {/* Brand Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tight font-sans text-neutral-100">
                dammy<span className="text-emerald-400">ux</span>
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Progress Bar & Percentage */}
            <div className="w-48 sm:w-64 flex flex-col items-center gap-2">
              <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                />
              </div>
              
              <div className="flex justify-between w-full text-xs font-mono text-neutral-400 tracking-wider">
                <span>INITIALIZING</span>
                <span className="text-emerald-400 font-semibold">{String(progress).padStart(2, '0')}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

