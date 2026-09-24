import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Work & Portfolio",
  description:
    "Explore selected web design, frontend development, UI/UX architecture, and AI video production projects by DammyUX.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          badge="Selected Portfolio"
          title="Engineered Digital Craft"
          subtitle="Explore our curated catalog of custom web flagships, SaaS product interfaces, and cinematic AI video campaigns."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
