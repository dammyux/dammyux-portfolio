import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-neutral-900 text-white border-t border-white/[0.08]">
      {/* Intense Ambient Green Glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-brand/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid background texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-brand/15 text-brand border border-brand/30 shadow-[0_0_15px_rgba(0,255,135,0.3)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Now Booking Next Quarter</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase">
          Ready to Build <br />
          <span className="text-gradient-green">Something Remarkable?</span>
        </h2>

        {/* Supporting description */}
        <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Whether you need a high-converting website overhaul, a modern UI/UX system, or a viral AI video campaign — let&apos;s turn your vision into an unfair competitive advantage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            href="/contact"
            variant="brandGlow"
            size="lg"
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            Start a Project
          </Button>

          <Button
            href={siteConfig.calendlyUrl}
            variant="secondary"
            size="lg"
            icon={<Calendar className="w-5 h-5" />}
            iconPosition="left"
          >
            Book a 15-Min Discovery Call
          </Button>
        </div>

        {/* Direct Email Prompt */}
        <p className="text-xs text-neutral-400 pt-4 font-mono">
          Prefer direct email? Reach out at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-brand hover:underline font-bold"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}
