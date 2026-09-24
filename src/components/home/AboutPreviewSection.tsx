import { aboutContent } from "@/content/about";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutPreviewSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Image Placeholder */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <ProfileImage src={aboutContent.image} priority={false} />
          </div>

          {/* Right Column: Personal Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <SectionHeading
              badge="Behind the Studio"
              title="Architecting digital craft with business purpose."
              subtitle={aboutContent.shortBio}
            />

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {aboutContent.longBio[0]}
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {aboutContent.philosophy.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span>{point.title}</span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 pl-6 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4">
              <Button
                href="/about"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                More About Me &amp; Philosophy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
