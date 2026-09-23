'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { projects } from '@/data/projects';

export function SelectedWorkSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="py-24 md:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Crafted with purpose.{' '}
              <span className="text-neutral-600 dark:text-neutral-400 font-normal block sm:inline">
                Built to perform.
              </span>
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, index) => {
            const isLarge = index === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={isLarge ? 'md:col-span-2' : ''}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block relative rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  {/* Media Container */}
                  <div
                    className={`relative w-full overflow-hidden ${
                      isLarge ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[16/10]'
                    }`}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes={isLarge ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 backdrop-blur-md text-neutral-200 border border-neutral-700/60 shadow-sm">
                        {project.category}
                      </span>

                      {project.isAiVideo && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-neutral-950 shadow-sm backdrop-blur-md">
                          <Play className="w-3 h-3 fill-current" />
                          <span>AI Video</span>
                        </span>
                      )}
                    </div>

                    {/* Floating Hover Indicator */}
                    <div className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {project.industry} • {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-neutral-200/70 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
