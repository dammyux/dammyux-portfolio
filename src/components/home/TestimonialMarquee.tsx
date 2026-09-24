import { testimonialsRow1, testimonialsRow2, Testimonial } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";
import Image from "next/image";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] p-6 sm:p-7 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/60 shadow-sm hover:border-brand/40 dark:hover:border-brand/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-5 mx-3 group">
      {/* Top: Stars & Year */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
          {item.year}
        </span>
      </div>

      {/* Quote */}
      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal italic">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Bottom: Client Profile & Project Tag */}
      <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {item.avatarUrl && (
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 dark:border-white/10 shrink-0">
              <Image
                src={item.avatarUrl}
                alt={item.clientName}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white leading-tight">
              {item.clientName}
            </h4>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              {item.clientRole}, {item.company}
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand/10 text-brand shrink-0 max-w-[120px] truncate">
          {item.projectType.split("&")[0]}
        </span>
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  // Duplicate arrays to create seamless infinite marquee loop
  const row1Extended = [...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1];
  const row2Extended = [...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-50/50 dark:bg-black/30 border-y border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <SectionHeading
          badge="Client Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from founders, executives, and marketing leaders worldwide."
          align="center"
        />
      </div>

      {/* Marquee Container with subtle edge fades */}
      <div className="relative w-full overflow-hidden space-y-6 pause-marquee-hover">
        {/* Left and Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-neutral-50 dark:from-[#070709] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-neutral-50 dark:from-[#070709] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right (marquee-right) */}
        <div className="flex w-fit animate-marquee-right marquee-content">
          {row1Extended.map((item, idx) => (
            <TestimonialCard key={`r1-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 2: Right to Left (marquee-left) */}
        <div className="flex w-fit animate-marquee-left marquee-content">
          {row2Extended.map((item, idx) => (
            <TestimonialCard key={`r2-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
