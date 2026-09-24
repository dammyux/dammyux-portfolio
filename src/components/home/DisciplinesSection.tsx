import { webAndDigitalDisciplines, aiVideoDisciplines } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

export function DisciplinesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-neutral-100/40 dark:bg-black/40 border-y border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Disciplines &amp; Toolkits"
          title="Two Disciplines. Zero Compromise."
          subtitle="A laser-focused creative synthesis of engineered web development and next-generation AI video production."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Web & Digital */}
          <div className="relative rounded-3xl p-8 sm:p-10 border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 flex flex-col justify-between gap-8 group hover:border-brand/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand/10 text-brand">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                    Core Specialization
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Web &amp; Digital
                  </h3>
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Full-cycle website engineering, modern CMS implementations, and custom web applications optimized for speed, search engines, and maximum conversion.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2 pt-4">
                {webAndDigitalDisciplines.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/[0.05] group-hover:border-brand/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                17 Core Capabilities
              </span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
              >
                <span>View Web Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: AI Video Production */}
          <div className="relative rounded-3xl p-8 sm:p-10 border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 flex flex-col justify-between gap-8 group hover:border-emerald-400/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    Creative Studio
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    AI Video Production
                  </h3>
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Cutting-edge generative AI video ads, cinematic brand commercials, product reveals, and narrative visual storytelling produced with Hollywood fidelity.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2 pt-4">
                {aiVideoDisciplines.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/[0.05] group-hover:border-emerald-400/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                11 Video Formats
              </span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:underline"
              >
                <span>Explore AI Video</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
