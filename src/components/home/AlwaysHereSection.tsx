"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { alwaysHereServices } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Layout,
  Code2,
  RefreshCw,
  Sparkles,
  Search,
  Video,
  Palette,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Code2,
  RefreshCw,
  Sparkles,
  Search,
  Video,
  Palette,
  Cpu,
};

export function AlwaysHereSection() {
  const [activeNumber, setActiveNumber] = useState<string>("01");

  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient flare */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Signature Capabilities"
          title="Always Here When You Need It"
          subtitle="From concept to high-scale execution, explore the eight core disciplines engineered to elevate your brand."
          align="left"
          className="mb-12"
        />

        {/* Interactive 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {alwaysHereServices.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const isActive = activeNumber === service.number;

            return (
              <motion.div
                key={service.number}
                layout
                onClick={() => setActiveNumber(service.number)}
                className={`relative cursor-pointer rounded-3xl p-6 sm:p-7 border transition-all duration-500 flex flex-col justify-between group ${
                  isActive
                    ? "border-brand bg-neutral-900 dark:bg-neutral-900/90 text-white shadow-[0_0_30px_-5px_rgba(0,255,135,0.25)] lg:col-span-2"
                    : "border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 hover:border-brand/40 text-neutral-900 dark:text-white"
                }`}
              >
                {/* Card Top: Number & Icon */}
                <div className="flex items-center justify-between gap-4 pb-6">
                  <span
                    className={`font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-colors ${
                      isActive
                        ? "bg-brand text-neutral-950"
                        : "bg-neutral-100 dark:bg-white/[0.06] text-neutral-500 group-hover:text-brand"
                    }`}
                  >
                    {service.number}
                  </span>

                  <div
                    className={`p-3 rounded-2xl transition-colors ${
                      isActive
                        ? "bg-brand/20 text-brand"
                        : "bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 group-hover:text-brand"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Middle: Title & Description */}
                <div className="space-y-2">
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                      isActive ? "text-brand" : "group-hover:text-brand"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isActive
                        ? "text-neutral-300"
                        : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* Active Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-6 mt-6 border-t border-white/[0.1] space-y-4"
                    >
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                        {service.detailedDesc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-neutral-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                        >
                          <span>Explore {service.title} Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inactive Click Prompt */}
                {!isActive && (
                  <div className="pt-4 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-brand transition-colors">
                    <span>Click to expand</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
