import type { Metadata } from "next";
import { allServices } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceRevealSection } from "@/components/home/PriceRevealSection";
import { Button } from "@/components/ui/Button";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Comprehensive Web Design, Web Development, UI/UX, Website Redesign, SEO, and AI Video Production services with clear, transparent pricing.",
};

export default function ServicesPage() {
  const webServices = allServices.filter(
    (s) => s.category === "Web & Digital" || s.category === "Design & UI/UX"
  );
  const videoServices = allServices.filter(
    (s) => s.category === "AI Video Production"
  );

  return (
    <div className="pt-32 pb-24 space-y-28">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <SectionHeading
          badge="Services &amp; Pricing"
          title="Engineered for Brand Caliber &amp; Tangible Growth"
          subtitle="From high-speed bespoke web applications to viral AI video campaigns, explore clear scopes and starting rates."
          align="center"
        />
      </section>

      {/* 2. Web & Digital Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-brand/10 text-brand">
            <Sparkles className="w-5 h-5" />
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Web Design, Engineering &amp; Modernization
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webServices.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 flex flex-col justify-between gap-6 hover:border-brand/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                  {service.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-white/[0.06]">
                  <span className="text-xs font-mono uppercase text-neutral-400">
                    Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                      >
                        <Check className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Meta & CTA */}
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">Timeline:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {service.timeline}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-neutral-400">
                      Starting from
                    </span>
                    <span className="text-xl font-bold text-neutral-900 dark:text-white">
                      {service.startingPrice}
                    </span>
                  </div>
                  <Button
                    href={`/contact?service=${encodeURIComponent(service.name)}`}
                    variant="primary"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Inquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AI Video Production Services */}
      <section className="py-20 bg-neutral-100/40 dark:bg-black/40 border-y border-neutral-200/60 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              AI Video Production &amp; Generative Motion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoServices.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-3xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 flex flex-col justify-between gap-6 hover:border-emerald-400/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    {service.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-white/[0.06]">
                    <span className="text-xs font-mono uppercase text-neutral-400">
                      Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Meta & CTA */}
                <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500">Timeline:</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {service.timeline}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase font-mono text-neutral-400">
                        Starting from
                      </span>
                      <span className="text-xl font-bold text-neutral-900 dark:text-white">
                        {service.startingPrice}
                      </span>
                    </div>
                    <Button
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Package Pricing Reveal Tiers */}
      <PriceRevealSection
        badge="Package Tiers"
        title="All-Inclusive Studio Packages"
        subtitle="Fixed-scope turnkey solutions with guaranteed timelines and transparent pricing."
      />

      {/* 5. Custom Quote Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          Need a Custom Combination or Ongoing Retainer?
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto">
          We frequently partner with companies for monthly design engineering retainers, complex WebGL micro-experiences, and high-volume AI video production.
        </p>
        <div className="pt-2">
          <Button
            href="/contact?plan=custom"
            variant="brandGlow"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Request Custom Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
