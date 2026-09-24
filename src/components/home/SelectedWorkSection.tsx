import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function SelectedWorkSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-50/50 dark:bg-black/30 border-y border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <SectionHeading
            badge="Selected Work"
            title="Featured Projects &amp; Digital Flagships"
            subtitle="A curated showcase of bespoke websites, UI/UX systems, and AI video campaigns engineered for high-growth brands."
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
