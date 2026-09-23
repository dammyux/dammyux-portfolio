import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles, HelpCircle } from 'lucide-react';
import { serviceCategories } from '@/data/services';
import { pricingPlans, pricingFaqs } from '@/data/pricing';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Services & Pricing — Transparent Multidisciplinary Studio',
  description: 'Explore full multidisciplinary services: Web Design & Development, UI/UX, Automation, and Cinematic AI Video Production with transparent pricing packages.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Service Catalog & Investment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6">
            Bespoke creative services.{' '}
            <span className="text-emerald-600 dark:text-emerald-400 block sm:inline">
              Engineered for impact.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            From high-conversion Next.js applications and Wix Studio storefronts to cinema-grade AI video campaigns, explore our full spectrum of creative and technical offerings.
          </p>
        </div>

        {/* 3 Main Service Pillars */}
        <div className="space-y-24 mb-28">
          {serviceCategories.map((category, idx) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-32 p-8 sm:p-12 rounded-3xl bg-neutral-100/70 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800"
            >
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
                  <span>Pillar 0{idx + 1}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white mb-3">
                  {category.title}
                </h2>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  {category.subtitle}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Service Sub-cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    className="p-6 rounded-2xl bg-white dark:bg-[#121419] border border-neutral-200 dark:border-neutral-800/80 hover:border-emerald-500/40 transition-colors shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-base font-bold text-neutral-950 dark:text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing System */}
        <div id="pricing" className="scroll-mt-32 mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white mb-4">
              Clear, predictable pricing tiers.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              No hidden fees, no unnecessary bloat. Choose the sprint package that fits your current business stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
            {pricingPlans.map((plan) => {
              const isPopular = plan.popular;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'bg-neutral-900 text-white dark:bg-[#0f1216] border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10'
                      : 'bg-white dark:bg-[#0c0e12] text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-lg'
                  }`}
                >
                  {plan.badge && (
                    <div className="mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isPopular
                            ? 'bg-emerald-500 text-neutral-950 shadow-md'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p
                      className={`text-xs mb-6 ${
                        isPopular ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-neutral-200/40 dark:border-neutral-800">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
                        {plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-xs text-neutral-400"> / starting</span>
                      )}
                    </div>

                    <div className="space-y-3 mb-8">
                      <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Full Deliverables:
                      </p>
                      {plan.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span
                            className={
                              isPopular ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'
                            }
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={plan.ctaLink}
                    className={`w-full py-4 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/20'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Pricing FAQ */}
          <div className="max-w-3xl mx-auto mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-neutral-500">
                Everything you need to know about starting a project.
              </p>
            </div>

            <div className="space-y-4">
              {pricingFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-neutral-100 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800"
                >
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-500" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FinalCtaSection />
    </div>
  );
}
