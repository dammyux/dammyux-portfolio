export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  startingPrice: string;
  isPopular?: boolean;
  timeline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  ctaText: string;
  ctaLink: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Essential digital presence for emerging brands & creators.",
    startingPrice: "$950",
    timeline: "5–10 Business Days",
    description:
      "A laser-focused, high-impact landing page or 3-page site designed to launch fast, look incredible, and capture leads immediately.",
    deliverables: [
      "Custom responsive design (1–3 pages)",
      "Mobile-first responsive development",
      "Lead generation / form integration",
      "Essential SEO & metadata setup",
      "Speed optimization & asset compression",
      "2 rounds of revisions",
      "14 days post-launch support",
    ],
    bestFor: "Startups, portfolio creators, product waitlists, and single-service businesses.",
    ctaText: "Start Starter Project",
    ctaLink: "/contact?plan=starter",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Comprehensive custom flagship website engineered for maximum growth.",
    startingPrice: "$1,850",
    isPopular: true,
    timeline: "2–4 Weeks",
    description:
      "Full bespoke website design and engineering with interactive micro-animations, CMS architecture, and advanced conversion strategy.",
    deliverables: [
      "Custom multi-page website (up to 7 pages)",
      "Interactive 3D / Framer Motion animations",
      "CMS setup for blog/case studies/projects",
      "Full technical SEO & schema implementation",
      "Custom brand style guide & UI kit",
      "AI video commercial or social asset included",
      "Unlimited revisions during design sprint",
      "30 days post-launch priority support",
    ],
    bestFor: "Established brands, SaaS companies, agencies, and e-commerce stores ready to scale.",
    ctaText: "Start Professional Project",
    ctaLink: "/contact?plan=professional",
  },
  {
    id: "custom",
    name: "Custom Enterprise",
    tagline: "Bespoke digital systems, complex web apps & complete AI media suites.",
    startingPrice: "Custom Quote",
    timeline: "3–6 Weeks",
    description:
      "End-to-end digital transformation tailored to complex specifications, custom web platforms, extensive AI media campaigns, or ongoing design retainers.",
    deliverables: [
      "Full custom web application or complex platform",
      "Bespoke 3D WebGL scenes & custom shaders",
      "Complete AI video campaign suite (5+ video ads)",
      "Advanced API & CRM automation integrations",
      "Design system with complete token architecture",
      "Dedicated Slack channel & weekly sprint demos",
      "60 days dedicated post-launch SLA support",
    ],
    bestFor: "Enterprises, funded tech ventures, large e-commerce, and brands needing ongoing studio support.",
    ctaText: "Let's Discuss Your Project",
    ctaLink: "/contact?plan=custom",
  },
];
