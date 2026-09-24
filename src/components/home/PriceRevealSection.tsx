"use client";

import { useState } from "react";
import { websitePricing, aiVideoPricing } from "@/content/pricing";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Layout, Video, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PriceRevealSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function PriceRevealSection({
  badge = "Investment & Packages",
  title = "Simple Pricing. Clear Starting Points.",
  subtitle = "Transparent, value-driven rates with zero hidden fees. Click any package below to reveal full deliverables and timeline.",
  className = "",
}: PriceRevealSectionProps) {
  const [activeTab, setActiveTab] = useState<"website" | "ai-video">("website");

  const currentTiers = activeTab === "website" ? websitePricing : aiVideoPricing;

  return (
    <section className={`py-24 relative overflow-hidden bg-grid-pattern ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-10"
        />

        {/* Pricing Category Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-200/80 dark:bg-white/[0.06] border border-neutral-300 dark:border-white/[0.08] backdrop-blur-md shadow-sm">
            <button
              onClick={() => setActiveTab("website")}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "website"
                  ? "bg-brand text-neutral-950 shadow-[0_0_20px_rgba(0,255,135,0.35)]"
                  : "text-[#445145] dark:text-neutral-300 hover:text-[#172018] dark:hover:text-white"
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>Website Design</span>
            </button>

            <button
              onClick={() => setActiveTab("ai-video")}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "ai-video"
                  ? "bg-brand text-neutral-950 shadow-[0_0_20px_rgba(0,255,135,0.35)]"
                  : "text-[#445145] dark:text-neutral-300 hover:text-[#172018] dark:hover:text-white"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>AI Video</span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-900 dark:text-emerald-300">
                HOT
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {currentTiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                defaultExpanded={false}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
