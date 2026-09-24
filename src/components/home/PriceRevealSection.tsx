import { pricingTiers } from "@/content/pricing";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PriceRevealSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Investment &amp; Packages"
          title="Simple Pricing. Clear Starting Points."
          subtitle="Transparent, value-driven rates with zero hidden fees. Click any package below to reveal full deliverables and timeline."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              defaultExpanded={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
