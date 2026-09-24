export interface PricingTier {
  id: string;
  category: "website" | "ai-video";
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

export const websitePricing: PricingTier[] = [
  {
    id: "web-basic",
    category: "website",
    name: "Basic",
    tagline: "High-converting single-page landing page or essential 3-page site.",
    startingPrice: "$950",
    timeline: "5–7 Business Days",
    description: "Laser-focused modern web presence crafted to launch quickly, captivate visitors, and capture leads immediately.",
    deliverables: [
      "Custom responsive design (1–3 pages)",
      "Mobile-first responsive engineering",
      "Lead generation form & email routing",
      "Essential SEO & metadata structure",
      "Asset compression & sub-second loading speed",
      "2 rounds of revisions",
      "14 days post-launch support",
    ],
    bestFor: "Early startups, personal portfolios, product waitlists, and creator launches.",
    ctaText: "Start Basic Web Project",
    ctaLink: "/contact?service=web-basic",
  },
  {
    id: "web-standard",
    category: "website",
    name: "Standard",
    tagline: "Comprehensive multi-page digital flagship with CMS and dynamic interactions.",
    startingPrice: "$1,850",
    isPopular: true,
    timeline: "2–3 Weeks",
    description: "Bespoke website design and engineered development featuring fluid micro-interactions, CMS architecture, and conversion optimization.",
    deliverables: [
      "Custom multi-page website (up to 7 pages)",
      "Interactive Framer Motion scroll animations",
      "CMS setup for blog, case studies, or portfolio items",
      "Full technical SEO & OpenGraph schema",
      "Figma design tokens & style guide",
      "Unlimited revisions during design sprint",
      "30 days priority post-launch support",
    ],
    bestFor: "Growing businesses, SaaS platforms, agencies, and professional consultancies.",
    ctaText: "Start Standard Web Project",
    ctaLink: "/contact?service=web-standard",
  },
  {
    id: "web-premium",
    category: "website",
    name: "Premium",
    tagline: "High-end enterprise web architecture with 3D WebGL scenes and custom integrations.",
    startingPrice: "$3,500",
    timeline: "3–5 Weeks",
    description: "Flagship interactive digital experience tailored to enterprise specifications with custom shaders, CRM webhooks, and performance SLA.",
    deliverables: [
      "Full custom web application (unlimited pages)",
      "Bespoke 3D WebGL scenes & custom Three.js shaders",
      "Advanced database/CMS & API automation",
      "Conversion rate optimization & analytics instrumentation",
      "Complete design system with 80+ component variants",
      "Dedicated communication channel & weekly sprint demos",
      "60 days dedicated SLA post-launch support",
    ],
    bestFor: "Funded tech ventures, large brands, luxury boutiques, and high-scale platforms.",
    ctaText: "Start Premium Web Project",
    ctaLink: "/contact?service=web-premium",
  },
];

export const aiVideoPricing: PricingTier[] = [
  {
    id: "ai-basic",
    category: "ai-video",
    name: "Basic",
    tagline: "Crisp 15–30s cinematic AI video ad or product teaser for social media.",
    startingPrice: "$550",
    timeline: "3–5 Business Days",
    description: "High-impact generative visual cuts engineered for TikTok, Instagram Reels, and YouTube Shorts that stop the scroll.",
    deliverables: [
      "1x 15–30 second high-resolution video ad (4K/1080p)",
      "Custom Midjourney concept storyboard & art direction",
      "Runway Gen-3 / Kling camera motion animation",
      "Licensed cinematic audio track & sound design",
      "9:16 vertical & 16:9 widescreen formats",
      "2 rounds of creative revisions",
    ],
    bestFor: "Social media marketing campaigns, product reveals, and paid ad creative.",
    ctaText: "Start Basic AI Video",
    ctaLink: "/contact?service=ai-basic",
  },
  {
    id: "ai-standard",
    category: "ai-video",
    name: "Standard",
    tagline: "Full 60s brand commercial with AI voiceover, motion graphics & custom Foley.",
    startingPrice: "$1,250",
    isPopular: true,
    timeline: "1–2 Weeks",
    description: "Complete cinematic commercial narrative with hyper-consistent AI character generation, professional voice synthesis, and kinetic typography.",
    deliverables: [
      "1x 60-second flagship commercial + 2x 15s cutdowns",
      "Hyper-consistent multi-scene character & environment design",
      "AI neural voiceover (ElevenLabs) with emotion pacing",
      "Custom Foley & spatial sound engineering",
      "Kinetic typography overlays & brand logo stingers",
      "Full commercial usage rights",
    ],
    bestFor: "Brand launch campaigns, Kickstarter/indie game trailers, and website hero videos.",
    ctaText: "Start Standard AI Video",
    ctaLink: "/contact?service=ai-standard",
  },
  {
    id: "ai-premium",
    category: "ai-video",
    name: "Premium",
    tagline: "Multi-video cinematic campaign suite & interactive video web experience.",
    startingPrice: "$2,800",
    timeline: "2–4 Weeks",
    description: "Hollywood-grade generative film production suite delivering a full suite of commercial spots, trailers, and modular video assets.",
    deliverables: [
      "Complete video campaign suite (4+ full commercials)",
      "Cinematic worldbuilding, scriptwriting & full storyboarding",
      "Multi-angle 4K motion generation with dynamic VFX",
      "Custom orchestral soundtrack & studio audio mix",
      "All aspect ratios (16:9, 9:16, 1:1, 4:5)",
      "Priority fast-track turnaround & dedicated sprint reviews",
    ],
    bestFor: "Enterprise brands, game studios, luxury product lines, and agency partner suites.",
    ctaText: "Start Premium AI Video Suite",
    ctaLink: "/contact?service=ai-premium",
  },
];

export const allPricingTiers: PricingTier[] = [...websitePricing, ...aiVideoPricing];
export const pricingTiers: PricingTier[] = allPricingTiers;
