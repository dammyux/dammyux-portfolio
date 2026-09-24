import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    // As per requirement in Section 21 / 30: Case study pages should be noindex
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="pt-32 pb-24 space-y-20">
      {/* 1. Back Navigation & Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Work</span>
        </Link>

        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.industry} · {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Project Meta Details Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50">
          <div>
            <span className="block text-xs font-mono uppercase text-neutral-400">
              Client
            </span>
            <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
              {project.client}
            </span>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase text-neutral-400">
              Services
            </span>
            <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
              {project.services.slice(0, 2).join(", ")}
            </span>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase text-neutral-400">
              Timeline / Year
            </span>
            <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
              {project.year}
            </span>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase text-neutral-400">
              Live Preview
            </span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm sm:text-base font-bold text-brand hover:underline"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-sm text-neutral-400">Private Client</span>
            )}
          </div>
        </div>
      </section>

      {/* 2. Hero Visual / Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-white/[0.1] bg-neutral-950 shadow-2xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 3. Challenge, Approach & Solution */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Overview */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
            01 · Overview
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* The Challenge */}
        {project.challenge && (
          <div className="p-8 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
              02 · The Challenge
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        )}

        {/* The Approach & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.approach && (
            <div className="p-8 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                03 · Our Approach
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-8 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                04 · The Solution
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {/* Design & Dev Process */}
        {project.designProcess && project.designProcess.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
              05 · Design &amp; Architecture Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.designProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/[0.05]"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Before / After Comparison */}
      {project.beforeAfter && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-neutral-100/60 dark:bg-black/40 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-brand font-semibold text-center">
              Transformation &amp; Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/[0.06] space-y-2">
                <span className="text-xs font-mono uppercase text-red-400 font-bold">
                  Before
                </span>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {project.beforeAfter.beforeText}
                </p>
                <div className="pt-2 font-mono text-xs text-neutral-500 font-semibold">
                  {project.beforeAfter.beforeMetric}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-brand/40 space-y-2 shadow-[0_0_20px_-5px_rgba(0,255,135,0.2)]">
                <span className="text-xs font-mono uppercase text-brand font-bold">
                  After
                </span>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 font-medium">
                  {project.beforeAfter.afterText}
                </p>
                <div className="pt-2 font-mono text-sm text-brand font-bold">
                  {project.beforeAfter.afterMetric}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Gallery Screenshots */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
            Visual Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-white/[0.08] bg-neutral-950"
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery preview ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Measurable Results Metrics */}
      {project.results && project.results.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/[0.05] via-transparent to-transparent space-y-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                Quantified Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {project.results.map((res, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-4xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
                    {res.metric}
                  </span>
                  <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Client Testimonial */}
      {project.testimonial && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
            &ldquo;{project.testimonial.quote}&rdquo;
          </p>
          <div className="text-sm font-bold text-neutral-900 dark:text-white">
            {project.testimonial.author}
          </div>
          <div className="text-xs text-neutral-500">
            {project.testimonial.role}
          </div>
        </section>
      )}

      {/* 8. Next Project Navigation Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-neutral-200/80 dark:border-white/[0.08]">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 hover:border-brand/40 transition-all duration-300"
        >
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-neutral-400">
              Next Project →
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-brand transition-colors">
              {nextProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500">
              {nextProject.subtitle}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 p-3 rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-neutral-950 transition-all duration-300 self-start sm:self-auto">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>
    </article>
  );
}
