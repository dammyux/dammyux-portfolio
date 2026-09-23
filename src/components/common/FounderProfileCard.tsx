'use client';

import * as React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  CheckCircle2, 
  Camera, 
  MessageSquare,
  Calendar
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface FounderProfileCardProps {
  imageSrc?: string;
  className?: string;
  showBioDetails?: boolean;
}

export function FounderProfileCard({
  imageSrc = '/images/dammy-profile.jpg',
  className = '',
  showBioDetails = true
}: FounderProfileCardProps) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={`relative rounded-3xl p-6 sm:p-8 bg-[#0c0e12] border border-neutral-800 shadow-2xl overflow-hidden group ${className}`}>
      {/* Decorative Gradient Background Aura */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Picture Frame / Upload Placeholder */}
      <div className="relative w-full aspect-square max-w-[340px] mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-neutral-800 group-hover:border-emerald-500/60 transition-all duration-300 shadow-xl bg-neutral-900 flex items-center justify-center">
        {!imgError ? (
          <Image
            src={imageSrc}
            alt={`${siteConfig.author.name} — Founder & Creative Technologist`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 100vw, 340px"
          />
        ) : (
          /* High-aesthetic placeholder when custom photo is not yet dropped into /public/images/dammy-profile.jpg */
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-neutral-900 to-neutral-950">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-dashed border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-inner">
              <Camera className="w-8 h-8" />
            </div>
            <p className="text-sm font-bold text-white mb-1">
              Dammy&apos;s Profile Picture
            </p>
            <p className="text-[11px] text-neutral-400 max-w-[200px] leading-tight font-mono">
              Drop your photo at <br />
              <code className="text-emerald-400 bg-neutral-800/80 px-1 py-0.5 rounded text-[10px]">
                /public/images/dammy-profile.jpg
              </code>
            </p>
          </div>
        )}

        {/* Floating Availability Pill on photo */}
        <div className="absolute bottom-3 left-3 right-3 bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-xl px-3 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-emerald-400 text-[11px]">
              Available for Projects
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">Q3 / Q4</span>
        </div>
      </div>

      {/* Founder Details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {siteConfig.author.name}
              </h3>
              <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mt-0.5">
              Founder & Creative Technologist
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs text-neutral-400 font-mono">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>Worldwide</span>
          </div>
        </div>

        {showBioDetails && (
          <>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2 border-t border-neutral-800/80">
              {siteConfig.author.bio}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                ⚡ 45+ Projects Delivered
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                ⭐ 99% Satisfaction
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                🎬 AI Video Director
              </span>
            </div>

            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-4">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href={siteConfig.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Call</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
