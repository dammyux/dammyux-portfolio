import { projects } from "@/content/projects";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function SelectedWorkSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 sm:py-28 relative bg-neutral-100/60 dark:bg-black/40 border-y border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <SectionHeading
            badge="Selected Work"
            title={
              <>
                Featured Projects &amp;{" "}
                <span className="font-normal text-brand">Digital Flagships</span>
              </>
            }
            subtitle="A curated showcase of bespoke websites, UI/UX systems, and high-converting platforms engineered for high-growth businesses."
          />
          <Button
            href="/work"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            Explore All Work
          </Button>
        </div>

        {/* Stacked Overlapping Cards Deck */}
        <div className="relative pb-16">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.slug}
              className="sticky mb-8 sm:mb-14 last:mb-0 transition-transform"
              style={{
                top: `calc(76px + ${idx * 22}px)`,
                zIndex: 10 + idx,
              }}
            >
              <FeaturedProjectCard
                project={project}
                index={idx}
                totalCount={featuredProjects.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
