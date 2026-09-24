import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export function ProfileImage({
  src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  alt = "DammyUX — Profile & Creative Studio Director",
  className = "",
  priority = false,
}: ProfileImageProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Outer Glow on hover */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand/30 via-emerald-500/10 to-transparent blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 -z-10" />

      {/* Frame Container */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-white/[0.1] bg-neutral-900 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

        {/* Brand Accent Corner */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-panel text-[10px] font-mono tracking-widest text-brand uppercase border border-brand/30">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span>DammyUX</span>
        </div>
      </div>
    </div>
  );
}
