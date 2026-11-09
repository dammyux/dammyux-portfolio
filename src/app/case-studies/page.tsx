import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed breakdowns, architectural decisions, and measurable client results achieved across our digital flagship builds.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          badge="In-Depth Analyses"
          title="Case Studies &amp; Client Transformations"
          subtitle="Explore the strategy, technical engineering, and data-backed outcomes behind our most impactful client deliverables."
        />

        <div className="space-y-12 pt-8">
          {projects.map((project, idx) => (
            <div
              key={project.slug}
              className="p-8 sm:p-12 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 hover:border-brand/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
            >
              {/* Media Preview with Hover to Scroll */}
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950">
                <Image
                  src={project.scrollImage || project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-[object-position] duration-[5000ms] ease-in-out group-hover:object-bottom will-change-[object-position]"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {project.industry}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-black/75 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    <span>Hover to scroll</span>
                  </span>
                </div>
                {/* Center Floating "Scroll" Circle Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-16 h-16 rounded-full bg-brand text-neutral-950 font-black text-xs uppercase tracking-wider flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(0,255,135,0.6)] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out border border-white/20">
                    Scroll
                  </div>
                </div>
              </div>

              {/* Story & Outcomes */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brand uppercase font-bold">
                      Case Study 0{idx + 1}
                    </span>
                    <span className="text-neutral-400">•</span>
                    <span className="text-xs font-mono text-neutral-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.challenge || project.description}
                  </p>
                </div>

                {/* Key Metrics Pill Grid */}
                {project.results && project.results.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/60 dark:border-white/[0.05]">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx}>
                        <span className="block text-lg sm:text-xl font-black text-brand tracking-tight">
                          {res.metric}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-neutral-500 line-clamp-1">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-brand hover:text-neutral-950 dark:hover:bg-brand dark:hover:text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
