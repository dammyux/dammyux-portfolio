"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/content/projects";
import { Check, ArrowRight, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
  totalCount?: number;
  className?: string;
}

export function FeaturedProjectCard({
  project,
  index,
  totalCount = 6,
  className = "",
}: FeaturedProjectCardProps) {
  const imageSrc = project.scrollImage || project.thumbnail;

  // Fallback highlights if not explicitly provided
  const highlights = project.highlights || [
    { title: "Clear UX", desc: "Structured user journey and clear messaging" },
    { title: "One Action", desc: "Strategic conversion pathways front and center" },
  ];

  const formattedIndex = String(index + 1).padStart(2, "0");
  const metaCategory = (project.services[0] || project.category || "WEBSITE DESIGN").toUpperCase();

  // Progressive sticky top offset for overlapping cards effect
  // On desktop: offset by index * 24px so each card stacks and partially overlaps
  // On mobile: offset by index * 12px for compact viewports
  const topOffsetDesktop = 80 + index * 24;
  const topOffsetMobile = 64 + index * 12;

  return (
    <article
      style={{
        top: `clamp(${topOffsetMobile}px, 8vh + ${index * 1.25}rem, ${topOffsetDesktop}px)`,
        zIndex: 10 + index,
      }}
      className={cn(
        "sticky group w-full max-w-full overflow-hidden rounded-[24px] sm:rounded-[36px] bg-[#ECE9E2] dark:bg-[#111219] border border-neutral-300/80 dark:border-white/[0.09] p-3 sm:p-5 lg:p-6 transition-all duration-300",
        // Multi-layered elevated shadow for tactile card-stack depth
        "shadow-[0_-12px_36px_-6px_rgba(0,0,0,0.12),0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-16px_45px_-6px_rgba(0,0,0,0.7),0_25px_50px_-15px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Information Card */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-[20px] sm:rounded-[28px] bg-white dark:bg-[#0c0d12] border border-neutral-200/90 dark:border-white/[0.08] p-4 sm:p-7 lg:p-9 shadow-sm">
          <div>
            {/* Top Category & Index Meta (Wrapped for Mobile) */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <span className="text-neutral-900 dark:text-brand font-bold">{formattedIndex}</span>
              <span className="text-neutral-300 dark:text-neutral-600">/</span>
              <span className="truncate max-w-[130px] sm:max-w-none">{project.industry.toUpperCase()}</span>
              <span className="text-neutral-300 dark:text-neutral-600">/</span>
              <span className="truncate max-w-[120px] sm:max-w-none">{metaCategory}</span>
            </div>

            {/* Project Heading in Bricolage Grotesque */}
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-2.5 sm:mt-3 mb-2.5 sm:mb-4 leading-snug group-hover:text-brand transition-colors duration-300 break-words">
              <Link href={`/work/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            {/* Project Description */}
            <p className="text-xs sm:text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-300 font-sans line-clamp-3 mb-4 sm:mb-5">
              {project.description}
            </p>

            {/* Service & Platform Tags */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
              {project.services.slice(0, 4).map((service, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/[0.08]"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* Subtle Divider */}
            <div className="border-t border-neutral-200/80 dark:border-white/[0.08] my-3.5 sm:my-4" />

            {/* Two Value Highlights with Green Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 my-3 sm:my-4">
              {highlights.slice(0, 2).map((h, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-neutral-900 dark:text-white">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[2.5]" />
                    <span className="truncate">{h.title}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 pl-5 leading-normal">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Read Case Study Link */}
          <div className="pt-3 sm:pt-4 border-t border-neutral-100 dark:border-white/[0.06] mt-2">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900 dark:text-white hover:text-brand transition-colors group/cta w-fit"
            >
              <span>Read the case study</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1.5 text-brand" />
            </Link>
          </div>
        </div>

        {/* Right Column: Device Browser Mockup with Hover to Scroll */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center p-0 sm:p-2 lg:p-4">
          <Link
            href={`/work/${project.slug}`}
            className="w-full relative block rounded-xl sm:rounded-[22px] overflow-hidden bg-[#0c0d12] border border-neutral-300/80 dark:border-white/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            tabIndex={-1}
            aria-label={`View ${project.title} case study`}
          >
            {/* Minimal Browser Top Bar */}
            <div className="px-3 sm:px-4 py-2 bg-[#171821] dark:bg-[#0e0f14] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]/80" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]/80" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-md bg-black/40 text-[10px] sm:text-[11px] font-mono text-neutral-400 max-w-[140px] sm:max-w-xs truncate border border-white/5">
                {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : `${project.slug}.com`}
              </div>
              <div className="w-6 sm:w-10" />
            </div>

            {/* Screen Viewport with Smooth Hover-to-Scroll */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
              <Image
                src={imageSrc}
                alt={`${project.title} live website screengrab`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover object-top transition-[object-position] duration-[7000ms] ease-linear group-hover:object-bottom will-change-[object-position]"
              />

              {/* Gradient Overlay for visual polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-10" />

              {/* Floating Center 'Scroll' Badge on Hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand text-neutral-950 font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(0,255,135,0.6)] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out border border-white/20">
                  Scroll
                </div>
              </div>
            </div>
          </Link>

          {/* Bottom Pill Badge: 'Hover to scroll the full site' */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center pointer-events-none">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-[#1a1b24]/95 text-white/90 border border-white/10 shadow-md backdrop-blur-md transition-all duration-300 group-hover:border-brand/40 group-hover:text-white">
              <MousePointer2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand animate-pulse" />
              <span>Hover to scroll the full site</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
