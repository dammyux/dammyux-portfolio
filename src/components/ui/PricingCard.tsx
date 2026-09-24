"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PricingTier } from "@/content/pricing";
import { Button } from "./Button";
import { Check, ChevronDown, Clock, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: PricingTier;
  defaultExpanded?: boolean;
  className?: string;
}

export function PricingCard({
  tier,
  defaultExpanded = false,
  className = "",
}: PricingCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between rounded-3xl border transition-all duration-500 overflow-hidden",
        tier.isPopular
          ? "border-brand/60 bg-gradient-to-b from-brand/[0.06] via-white dark:via-surface to-white dark:to-surface shadow-[0_0_40px_-15px_rgba(0,255,135,0.25)]"
          : "border-neutral-300/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-white/20 shadow-sm",
        className
      )}
    >
      {/* Popular Badge */}
      {tier.isPopular && (
        <div className="absolute top-0 right-8 -translate-y-1/2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-neutral-950 shadow-md">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      {/* Card Header */}
      <div className="p-7 sm:p-8 space-y-5">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-brand font-bold">
            {tier.name} Package
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172018] dark:text-[#eaecea]">
            {tier.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#445145] dark:text-[#879287] min-h-[36px] leading-relaxed">
            {tier.tagline}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.06] flex items-baseline gap-2">
          <span className="text-xs font-mono text-[#556356] dark:text-neutral-400 uppercase">
            {tier.startingPrice.startsWith("$") ? "Starting from" : "Estimated"}
          </span>
          <span className="text-3xl sm:text-4xl font-black text-[#172018] dark:text-white tracking-tight">
            {tier.startingPrice}
          </span>
        </div>

        {/* Reveal Toggle Trigger */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-neutral-100 dark:bg-white/[0.05] hover:bg-brand/15 dark:hover:bg-brand/10 hover:text-emerald-950 dark:hover:text-brand text-[#172018] dark:text-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-neutral-200 dark:border-white/[0.05]"
        >
          <span>{isExpanded ? "− Hide Package Details" : "+ Reveal Package Details"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180 text-emerald-600 dark:text-brand" : "text-[#445145] dark:text-neutral-400"
            }`}
          />
        </button>
      </div>

      {/* Expandable Package Details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden px-7 sm:px-8 pb-8 pt-0 border-t border-neutral-200 dark:border-white/[0.06] bg-neutral-50 dark:bg-black/20"
          >
            <div className="space-y-6 pt-5">
              {/* Timeline Indicator */}
              <div className="flex items-center gap-2 text-xs font-medium text-[#172018] dark:text-neutral-200 bg-white dark:bg-white/[0.04] p-3 rounded-xl border border-neutral-200 dark:border-white/[0.05] shadow-xs">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-brand shrink-0" />
                <span>Typical Delivery: <strong>{tier.timeline}</strong></span>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#445145] dark:text-neutral-400 font-semibold">
                  What&apos;s Included:
                </span>
                <ul className="space-y-2.5">
                  {tier.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#243025] dark:text-neutral-200">
                      <div className="p-0.5 rounded-full bg-brand/20 dark:bg-brand/15 text-emerald-800 dark:text-brand shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <p className="text-xs text-[#556356] dark:text-neutral-400 italic">
                Best for: {tier.bestFor}
              </p>

              {/* Action Button */}
              <Button
                href={tier.ctaLink}
                variant={tier.isPopular ? "brandGlow" : "primary"}
                size="md"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {tier.ctaText}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
