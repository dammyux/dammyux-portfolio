import type { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Button } from "@/components/ui/Button";
import {
  Download,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about DammyUX — Lead Digital Designer, Web Architect & AI Video Producer with 6+ years of experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* 1. Hero & Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Container */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <ProfileImage src={aboutContent.image} priority={true} />
          </div>

          {/* Intro Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{aboutContent.title}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
              Driven by simplicity, obsession with detail, &amp; measurable impact.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              {aboutContent.longBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Stats & CV Download */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href={aboutContent.cvUrl}
                variant="brandGlow"
                size="md"
                icon={<Download className="w-4 h-4" />}
                iconPosition="left"
              >
                Download CV / Resume
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Approach */}
      <section className="py-20 bg-neutral-100/40 dark:bg-black/40 border-y border-neutral-200/60 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            badge="Guiding Principles"
            title="Design Philosophy &amp; Systematic Approach"
            subtitle={aboutContent.philosophy.headline}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.philosophy.points.map((point, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-brand uppercase tracking-widest">
                  Principle 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {point.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4-Step Process */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center sm:text-left">
              The 4-Step Studio Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutContent.approach.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/30 space-y-2 relative"
                >
                  <span className="text-3xl font-black text-brand/30 font-mono block">
                    {step.step}
                  </span>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professional Experience & Education */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand/10 text-brand">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-6 border-l-2 border-neutral-200 dark:border-white/[0.1] pl-6 ml-3">
              {aboutContent.experience.map((item, idx) => (
                <div key={idx} className="relative space-y-1 group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 border-2 border-white dark:border-[#070709] group-hover:bg-brand transition-colors" />

                  <span className="font-mono text-xs text-brand font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {item.role} · <span className="text-neutral-500 font-normal">{item.company}</span>
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand/10 text-brand">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Education &amp; Training
              </h2>
            </div>

            <div className="space-y-4">
              {aboutContent.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 space-y-1"
                >
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    {edu.year}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tools & Platforms Matrix */}
      <section className="py-20 bg-neutral-100/40 dark:bg-black/40 border-y border-neutral-200/60 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Stack &amp; Ecosystem"
            title="Tools, Technologies &amp; Platforms"
            subtitle="Industry-standard tools and modern programming stacks mastered to deliver world-class digital assets."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.toolCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/60 space-y-4"
              >
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-white/[0.06] pb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/[0.05]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tight">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
          Have a project in mind, an existing site in need of modernization, or a new creative concept?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            href="/contact"
            variant="brandGlow"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Project
          </Button>
          <Button
            href={siteConfig.calendlyUrl}
            variant="secondary"
            size="lg"
            icon={<Calendar className="w-4 h-4" />}
            iconPosition="left"
          >
            Schedule a Call
          </Button>
        </div>
      </section>
    </div>
  );
}
