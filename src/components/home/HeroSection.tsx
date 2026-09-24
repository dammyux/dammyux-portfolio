"use client";

import { siteConfig } from "@/content/site";
import { aboutContent } from "@/content/about";
import { Button } from "@/components/ui/Button";
import { HeroSocialProof } from "@/components/home/HeroSocialProof";
import { ArrowUpRight, FolderCode } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern">
      {/* Radial Gradient Background Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-brand/10 text-brand border border-brand/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span>{siteConfig.availability}</span>
            </div>

            {/* Main Headline with Poppins 48px Reference */}
            <h1 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[48px] font-bold font-display tracking-tight text-neutral-900 dark:text-[#eaecea] uppercase">
              Digital Studio <br />
              <span className="text-gradient-green">&amp; Web Architect</span>
            </h1>

            {/* Short Bio / Description with Inter 14px / 20px Reference */}
            <p className="font-sans text-[14px] leading-[20px] font-normal text-neutral-600 dark:text-[#879287] max-w-xl">
              {siteConfig.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                href="/work"
                variant="primary"
                size="lg"
                icon={<FolderCode className="w-4 h-4" />}
                iconPosition="left"
              >
                View My Work
              </Button>

              <Button
                href="/contact"
                variant="brandGlow"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a Project
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 mt-2 border-t border-neutral-200/80 dark:border-white/[0.08] w-full max-w-lg">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight font-display">
                  {aboutContent.yearsOfExperience}
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                  Experience
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight font-display">
                  {aboutContent.completedProjects}
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                  Projects Done
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight text-brand font-display">
                  {aboutContent.clientSatisfaction}
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                  Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Client Review Bubbles */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroSocialProof />
          </div>
        </div>
      </div>
    </section>
  );
}
