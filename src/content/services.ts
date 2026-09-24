export interface AlwaysHereService {
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  tagline: string;
  features: string[];
  iconName: string;
}

export interface DetailedService {
  id: string;
  name: string;
  category: "Web & Digital" | "Design & UI/UX" | "AI Video Production";
  tagline: string;
  description: string;
  deliverables: string[];
  startingPrice: string;
  timeline: string;
  featured: boolean;
}

export const alwaysHereServices: AlwaysHereService[] = [
  {
    number: "01",
    title: "Web Design",
    shortDesc: "Website design and visual direction.",
    detailedDesc:
      "Bespoke, brand-first website aesthetics crafted with editorial precision. From typography hierarchies to interactive responsive layouts, designed to captivate your audience immediately.",
    tagline: "Visual storytelling engineered for modern brands.",
    features: ["Custom Figma prototypes", "Design tokens & style systems", "Responsive mobile-first layouts", "Micro-interactions & animations"],
    iconName: "Layout",
  },
  {
    number: "02",
    title: "Development",
    shortDesc: "Responsive website development.",
    detailedDesc:
      "Clean, modern, and lightning-fast web code built using Next.js, TypeScript, Tailwind CSS, or no-code powerhouses like Webflow and Framer. Scalable and fully responsive.",
    tagline: "Performant code with zero technical debt.",
    features: ["Next.js / React engineering", "Webflow / Framer builds", "Smooth 60fps animations", "100% PageSpeed score focus"],
    iconName: "Code2",
  },
  {
    number: "03",
    title: "Website Redesign",
    shortDesc: "Modernizing existing websites.",
    detailedDesc:
      "Transforming outdated, clunky legacy websites into sleek, high-converting digital flagships that match your brand's modern caliber and boost engagement.",
    tagline: "Reinvent your digital flagship with zero downtime.",
    features: ["UX audit & friction analysis", "Visual identity modernization", "Information architecture revamp", "Seamless content migration"],
    iconName: "RefreshCw",
  },
  {
    number: "04",
    title: "UI/UX",
    shortDesc: "Clear and user-friendly digital experiences.",
    detailedDesc:
      "Intuitive digital product interfaces, dashboard architectures, and web apps focused on removing friction, increasing retention, and maximizing conversion rate.",
    tagline: "Intuitive user flows that turn visitors into loyal advocates.",
    features: ["User journey mapping", "Interactive clickable prototypes", "Design systems & component libraries", "Usability testing & validation"],
    iconName: "Sparkles",
  },
  {
    number: "05",
    title: "SEO",
    shortDesc: "Technical and on-page website SEO.",
    detailedDesc:
      "Structuring websites with semantic HTML, JSON-LD schema, blazing fast Core Web Vitals, and keyword-targeted metadata to rank higher and attract high-intent organic traffic.",
    tagline: "Search visibility engineered from the ground up.",
    features: ["Schema structured data", "Core Web Vitals optimization", "Meta architecture & OpenGraph", "Sitemap & indexation tuning"],
    iconName: "Search",
  },
  {
    number: "06",
    title: "AI Video",
    shortDesc: "Cinematic, commercial and creative AI video production.",
    detailedDesc:
      "Hollywood-quality AI video commercials, social media ads, product reveals, and cinematic world-building using state-of-the-art generative video models and pro post-production.",
    tagline: "Studio-tier video production at a fraction of standard costs.",
    features: ["Commercial & brand ads", "AI product launch videos", "Cinematic short films & trailers", "Sound design & voice synthesis"],
    iconName: "Video",
  },
  {
    number: "07",
    title: "Branding",
    shortDesc: "Visual identity and supporting brand assets.",
    detailedDesc:
      "Distinct visual identities, typography pairing, color palettes, logomarks, and digital brand guidelines that make your business instantly recognizable.",
    tagline: "Memorable identities that stand apart in saturated markets.",
    features: ["Logo suite & brand marks", "Color & typography guides", "Social & marketing collateral", "Complete brand guidelines"],
    iconName: "Palette",
  },
  {
    number: "08",
    title: "Automation",
    shortDesc: "Digital workflows and automation.",
    detailedDesc:
      "Connecting your web presence with automated CRM pipelines, email sequences, appointment booking, and AI assistants to save hundreds of operational hours.",
    tagline: "Streamline workflows so your business runs on autopilot.",
    features: ["CRM & email integration", "Calendly & Stripe setup", "Webhook & API integrations", "AI workflow automations"],
    iconName: "Cpu",
  },
];

export const webAndDigitalDisciplines = [
  "Website Design",
  "Website Development",
  "Website Redesign",
  "Wix & Wix Studio",
  "WordPress & WooCommerce",
  "Shopify & Shopify Plus",
  "Squarespace",
  "Framer",
  "Webflow",
  "UI/UX Design",
  "Technical SEO",
  "Ecommerce Solutions",
  "High-Converting Landing Pages",
  "Branding & Identity",
  "Graphic Design",
  "Digital Automations",
  "Website Maintenance & Support",
];

export const aiVideoDisciplines = [
  "AI Video Ads",
  "AI Commercial Videos",
  "Cinematic AI Videos",
  "AI Short Films",
  "AI UGC (User Generated Content)",
  "AI Explainer Videos",
  "AI Product Videos",
  "Movie Trailers",
  "Documentary Videos",
  "AI Animation",
  "Anime & Stylized Videos",
];

export const allServices: DetailedService[] = [
  {
    id: "custom-web-development",
    name: "Custom Web Design & Development",
    category: "Web & Digital",
    tagline: "Full-cycle digital flagships tailored to scale.",
    description:
      "Complete custom website design and engineering using Next.js, Tailwind CSS, or Webflow. Built for extreme speed, brand impact, and seamless responsiveness.",
    deliverables: [
      "Custom UI/UX in Figma with revisions",
      "Full responsive frontend development",
      "Interactive 3D / Framer Motion animations",
      "Technical SEO & Core Web Vitals optimization",
      "CMS integration & client dashboard walkthrough",
    ],
    startingPrice: "$1,800",
    timeline: "2–4 Weeks",
    featured: true,
  },
  {
    id: "website-redesign",
    name: "Website Redesign & Modernization",
    category: "Web & Digital",
    tagline: "Revitalize your legacy website into a modern powerhouse.",
    description:
      "Upgrading outdated design, slow load times, and poor mobile UX into a crisp, high-performing web presence that boosts conversions.",
    deliverables: [
      "Comprehensive UX & conversion audit",
      "Modernized visual design system",
      "Complete content & asset migration",
      "Mobile responsiveness optimization",
      "Speed boost & analytics integration",
    ],
    startingPrice: "$1,400",
    timeline: "2–3 Weeks",
    featured: true,
  },
  {
    id: "ui-ux-design",
    name: "UI/UX & Product Design",
    category: "Design & UI/UX",
    tagline: "Intuitive product flows and elegant interface design.",
    description:
      "User research, wireframing, interactive prototyping, and component systems for SaaS platforms, dashboards, and mobile web apps.",
    deliverables: [
      "User flow diagrams & wireframes",
      "High-fidelity clickable Figma prototype",
      "Design system & component library",
      "Developer handoff documentation",
    ],
    startingPrice: "$1,200",
    timeline: "1–3 Weeks",
    featured: false,
  },
  {
    id: "ai-video-production",
    name: "Cinematic AI Video Production",
    category: "AI Video Production",
    tagline: "Hollywood-tier visual ads and trailers powered by generative AI.",
    description:
      "Crafting high-impact video ads, product showcases, and cinematic world-building utilizing Runway Gen-3, Kling, Midjourney, and professional audio design.",
    deliverables: [
      "Scriptwriting & visual storyboard",
      "4K AI video generation & upscaling",
      "Professional voiceover synthesis & licensed music",
      "Motion graphics, subtitles & multi-format exports (9:16, 16:9)",
    ],
    startingPrice: "$850",
    timeline: "5–10 Days",
    featured: true,
  },
  {
    id: "landing-page-sprint",
    name: "High-Converting Landing Page",
    category: "Web & Digital",
    tagline: "Laser-focused landing pages engineered for paid ads & product launches.",
    description:
      "Single-page high-converting marketing site designed to maximize leads, waitlists, or direct purchases.",
    deliverables: [
      "Persuasive copywriting assistance",
      "Custom responsive design & development",
      "Lead magnet / form integration (Mailchimp/ConvertKit/HubSpot)",
      "A/B test ready structure & event tracking",
    ],
    startingPrice: "$950",
    timeline: "5–7 Days",
    featured: false,
  },
  {
    id: "ecommerce-store",
    name: "Shopify & Ecommerce Experience",
    category: "Web & Digital",
    tagline: "Premium online store setup engineered to sell.",
    description:
      "Custom Shopify / WooCommerce storefronts with frictionless checkout flows, upsells, and brand storytelling.",
    deliverables: [
      "Custom shop theme customization",
      "Product page architecture & reviews setup",
      "Payment gateway & shipping setup",
      "Speed optimization & SEO tags",
    ],
    startingPrice: "$1,600",
    timeline: "2–4 Weeks",
    featured: false,
  },
];
