import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  Star, 
  Sparkles, 
  TrendingUp, 
  ArrowRight,
  Zap,
  Code2
} from 'lucide-react';
import { projects } from '@/data/projects';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { Interactive3DCard } from '@/components/ui/Interactive3DCard';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study & Transformation`,
    description: project.headline || project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category} Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
            {project.headline || project.shortDescription}
          </p>
        </div>

        {/* Metadata Strip / Project Information Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800/80 mb-14 shadow-sm">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5">
              Client & Industry
            </span>
            <p className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">
              {project.industry}
            </p>
            <span className="text-xs text-neutral-500 font-mono">Year {project.year}</span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5">
              Timeline & Delivery
            </span>
            <p className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">
              {project.timeline || '2 – 3 Weeks'}
            </p>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
              Completed On Schedule
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5">
              Services Delivered
            </span>
            <div className="flex flex-wrap gap-1">
              {project.servicesProvided?.slice(0, 3).map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5">
              Live Preview / Code
            </span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-neutral-500 italic">Client Enterprise NDA</span>
            )}
          </div>
        </div>

        {/* Hero Featured Image / Video Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-20 shadow-2xl bg-neutral-950">
          {project.videoUrl ? (
            <div className="aspect-[16/9] w-full relative">
              <video
                src={project.videoUrl}
                poster={project.videoPoster || project.thumbnail}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <Image
                src={project.featuredImage || project.thumbnail}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
          )}
        </div>

        {/* Measurable Performance Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Measurable Impact</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                Proven numbers & business results
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.metrics.map((metric, idx) => (
                <Interactive3DCard key={idx} className="h-full">
                  <div className="h-full p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800/80 text-center flex flex-col items-center justify-center shadow-sm hover:border-emerald-500/40 transition-colors">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
                      {metric.value}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-medium">
                      {metric.label}
                    </span>
                  </div>
                </Interactive3DCard>
              ))}
            </div>
          </div>
        )}

        {/* The Context, Challenge & Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-24">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-3">
              01 // The Strategic Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white mb-6 leading-tight">
              Transforming complex problems into elegant digital products.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base mb-8">
              {project.overview}
            </p>

            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white font-bold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-500" />
                <span>Tech Stack & Tools</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {[...(project.platforms || []), ...(project.tools || [])].map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300/60 dark:border-neutral-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            {/* The Challenge */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#0e1116] border border-neutral-200 dark:border-neutral-800/80 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-red-500 dark:text-red-400 block mb-2 font-semibold">
                The Challenge & Bottlenecks
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mb-4">
                What held the brand back prior to our redesign?
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.challenge ||
                  'The legacy platform suffered from outdated UX flows, slow page speeds, poor mobile conversion rates, and a disconnected visual brand identity that failed to inspire high-ticket customers.'}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-neutral-900 text-white dark:bg-[#080b0f] border border-emerald-500/40 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2 font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                The Solution & Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Engineering a high-conversion, editorial digital experience
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {project.solution ||
                  'We completely re-architected the customer journey with bespoke Figma design systems, lightning-fast Next.js engineering, micro-interactions, and AI-powered media assets to drive trust and conversions.'}
              </p>

              <div className="space-y-3">
                {project.servicesProvided?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Before / After Comparison Slider */}
        {project.beforeImage && project.afterImage && (
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
                02 // Visual Transformation
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                {project.beforeAfterTitle || 'Interactive Before & After Comparison'}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                Drag the slider handle to inspect the evolution in visual hierarchy, clarity, and polish.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="Legacy Version"
              afterLabel="dammyux Redesign"
            />
          </div>
        )}

        {/* Gallery / Visual System Showcase */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
                03 // Design & Component Showcase
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                Meticulous attention to every breakpoint
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg group bg-neutral-950"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} gallery screenshot ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Testimonial Banner */}
        {project.testimonial && (
          <div className="mb-24 rounded-3xl p-8 sm:p-12 bg-neutral-900 text-white dark:bg-[#0e1217] border border-neutral-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-1.5 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                  Verified Client Review
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-medium leading-relaxed mb-8 text-neutral-100">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-neutral-950 font-bold flex items-center justify-center text-lg">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    {project.testimonial.author}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {project.testimonial.role} • {project.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Next Project Navigation Card */}
        <div className="mb-24 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-6 text-center">
            Continue Exploring
          </span>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 transition-all duration-300 shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
                  Next Case Study →
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-xl">
                  {nextProject.shortDescription}
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors">
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Global Bottom CTA Section */}
      <FinalCtaSection />
    </div>
  );
}
