"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

export function ProjectCard({ project, className = "", index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 hover:border-brand/50 dark:hover:border-brand/40 transition-all duration-500 shadow-sm hover:shadow-[0_10px_35px_-10px_rgba(0,255,135,0.2)]",
        className
      )}
    >
      {/* Media Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
            {project.industry}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-brand/20 backdrop-blur-md text-brand border border-brand/30">
            {project.year}
          </span>
        </div>

        {/* View Project Floating Indicator */}
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand text-neutral-950 text-xs font-bold shadow-lg">
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Meta */}
      <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-brand transition-colors duration-300">
              {project.title}
            </h3>
            <div className="p-2 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 group-hover:border-brand group-hover:bg-brand group-hover:text-neutral-950 transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Services / Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-white/[0.06]">
          {project.services.slice(0, 3).map((service, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors"
            >
              {service}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.04] text-neutral-500">
              +{project.services.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
