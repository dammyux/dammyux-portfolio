'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  Gauge, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const fannedCards = [
  {
    id: 'card-1',
    icon: HeartHandshake,
    title: 'Dedicated Partner',
    description: 'I treat every project like my own, with genuine care and obsessive attention to detail.',
    tag: 'Care & Focus',
    baseRotation: -16,
    baseX: -160,
    baseY: 20
  },
  {
    id: 'card-2',
    icon: Zap,
    title: 'Rapid Sprints',
    description: 'Launch high-converting landing pages in 5–7 days flat without compromising craft.',
    tag: 'High Velocity',
    baseRotation: -8,
    baseX: -80,
    baseY: 8
  },
  {
    id: 'card-3',
    icon: MessageSquare,
    title: 'Direct Founder Access',
    description: 'Zero bureaucracy or account managers. Work directly with Dammy on Slack & WhatsApp.',
    tag: '1-on-1 Direct',
    baseRotation: 0,
    baseX: 0,
    baseY: 0
  },
  {
    id: 'card-4',
    icon: ShieldCheck,
    title: 'Escrow & Milestone Safe',
    description: '100% risk-free milestone protection via direct invoice, Fiverr Pro, or Upwork.',
    tag: 'Guaranteed Trust',
    baseRotation: 8,
    baseX: 80,
    baseY: 8
  },
  {
    id: 'card-5',
    icon: Gauge,
    title: '98+ Lighthouse Speed',
    description: 'Sub-second transitions, WebGL 60fps animations, and zero-bloat semantic code.',
    tag: 'Peak Performance',
    baseRotation: 16,
    baseX: 160,
    baseY: 20
  }
];

export function AlwaysHereSection() {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(2);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-neutral-950 text-white border-t border-neutral-800/80">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Reaction Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          {/* Left Floating Badge: Hey, It's me! 👋 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-200 backdrop-blur-md shadow-xl absolute left-4 lg:left-16 top-12 cursor-default select-none hover:border-emerald-500/40 transition-colors"
          >
            <span>Hey, It&apos;s me!</span>
            <span className="text-base">👋</span>
          </motion.div>

          {/* Right Floating Badge: Problem Solved 💥 */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-emerald-400 backdrop-blur-md shadow-xl absolute right-4 lg:right-16 top-12 cursor-default select-none hover:border-emerald-500/40 transition-colors"
          >
            <span className="font-semibold">Problem Solved</span>
            <span className="text-base">💥</span>
          </motion.div>

          {/* Section Header Matching Lovable Reference */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ALWAYS HERE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-100 mb-4 leading-[1.05]">
              Here When You <br />
              <span className="italic font-serif text-emerald-400 font-normal">Need Me</span> Most.
            </h2>

            {/* Centered Glowing Green Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mx-auto my-5 shadow-[0_0_14px_#00e599]" />

            <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
              Dedicated support to help you launch and maintain your site without friction.
            </p>

            {/* Pill CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95"
            >
              <span>View About dammyux</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Fanned Interactive Card Deck Showcase */}
        <div className="relative pt-12 sm:pt-20 pb-8 flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px]">
          {/* Desktop/Tablet Fanned Card Layout */}
          <div className="hidden sm:flex relative items-center justify-center w-full max-w-4xl h-[380px]">
            {fannedCards.map((card, idx) => {
              const Icon = card.icon;
              const isHovered = hoveredIdx === idx;
              
              let rotate = card.baseRotation;
              let x = card.baseX;
              let y = card.baseY;
              let zIndex = 10 + idx;
              let scale = 0.96;

              if (isHovered) {
                rotate = 0;
                y = -35;
                scale = 1.06;
                zIndex = 50;
              } else if (hoveredIdx !== null) {
                const diff = idx - hoveredIdx;
                x = card.baseX + diff * 20;
                scale = 0.92;
                rotate = card.baseRotation * 1.1;
              }

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    rotate: rotate,
                    x: x,
                    y: y,
                    scale: scale,
                  }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  style={{ zIndex }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="absolute w-[280px] h-[340px] rounded-3xl p-6 bg-[#0f1216] border border-neutral-800/90 shadow-2xl cursor-pointer select-none flex flex-col justify-between transition-colors duration-300 group hover:border-emerald-500 hover:shadow-emerald-500/10"
                >
                  <div>
                    {/* Top Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/90 block mb-1">
                      {card.tag}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="font-mono">0{idx + 1} / 05</span>
                    <span className="text-emerald-400/80 font-medium">Interactive Card</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Carousel for small screens */}
          <div className="sm:hidden w-full overflow-x-auto pb-4 pt-2 flex gap-4 snap-x snap-mandatory px-4 scrollbar-none">
            {fannedCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="w-[260px] shrink-0 snap-center rounded-3xl p-6 bg-[#0f1216] border border-neutral-800 shadow-xl flex flex-col justify-between h-[300px]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                      {card.tag}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span>0{idx + 1} / 05</span>
                    <span className="text-emerald-400">Value Guarantee</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

