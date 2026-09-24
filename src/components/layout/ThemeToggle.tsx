"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Theme"
        className={`relative p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 opacity-60 ${className}`}
      >
        <span className="w-4 h-4 block" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`group relative p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/80 dark:bg-neutral-900/80 hover:border-brand/40 hover:bg-brand/5 dark:hover:bg-brand/10 text-neutral-700 dark:text-neutral-300 hover:text-brand dark:hover:text-brand transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${className}`}
    >
      <div className="relative w-4 h-4 overflow-hidden">
        <Sun
          className={`w-4 h-4 transition-all duration-300 absolute inset-0 ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          }`}
        />
        <Moon
          className={`w-4 h-4 transition-all duration-300 absolute inset-0 ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-emerald-400"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
