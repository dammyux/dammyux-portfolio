import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Case Studies — In-Depth Client Transformations',
  description: 'Visual breakdowns of problems, solutions, design systems, and verified ROI outcomes for select dammyux projects.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CaseStudiesPage() {
  const caseStudyProjects = projects.filter((p) => p.challenge && p.solution);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Transformations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6">
            Case studies & verifiable outcomes.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            A transparent look into the problem, architectural approach, design execution, and bottom-line commercial impact for select high-stakes projects.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-24 mb-28">
          {caseStudyProjects.map((project, idx) => (
            <article
              key={project.id}
              className="p-8 sm:p-12 rounded-3xl bg-neutral-100/80 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 shadow-xl"
            >
              {/* Header meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {project.category} • {project.industry}
                  </span>
                </div>
                <span className="text-xs text-neutral-500 font-mono">
                  Delivered in {project.timeline || '3 Weeks'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-4">
                {project.title}
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-3xl">
                {project.overview}
              </p>

              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-6 rounded-2xl bg-white dark:bg-[#121419] border border-neutral-200 dark:border-neutral-800">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                        {m.value}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#121419] border border-neutral-200 dark:border-neutral-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-500 block mb-2 font-semibold">
                    The Problem
                  </span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#121419] border border-neutral-200 dark:border-neutral-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2 font-semibold">
                    The Approach & Solution
                  </span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Interactive Before & After (if available) */}
              {project.beforeImage && project.afterImage && (
                <div className="mb-10">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    title={project.beforeAfterTitle || 'Visual Transformation Comparison'}
                  />
                </div>
              )}

              {/* Read Full Case Button */}
              <div className="flex justify-end pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  <span>Explore Complete Project Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <FinalCtaSection />
    </div>
  );
}

