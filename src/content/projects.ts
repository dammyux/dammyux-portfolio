export interface ProjectResult {
  metric: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  category: "Web & Digital" | "UI/UX & Product" | "AI Video Production" | "Full Studio Sprint";
  industry: string;
  year: string;
  featured: boolean;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  videoUrl?: string;
  liveUrl?: string;
  description: string;
  services: string[];
  platforms: string[];
  tools: string[];
  challenge: string;
  approach: string;
  solution: string;
  designProcess?: string[];
  developmentProcess?: string[];
  beforeAfter?: {
    beforeText: string;
    afterText: string;
    beforeMetric: string;
    afterMetric: string;
  };
  results: ProjectResult[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    slug: "synthetix-ai-platform",
    title: "Synthetix AI",
    subtitle: "Enterprise Next-Gen Neural Workflow Studio",
    client: "Synthetix Inc.",
    category: "Web & Digital",
    industry: "Artificial Intelligence & SaaS",
    year: "2026",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://synthetix-preview.example.com",
    description:
      "A dark-mode first, high-performance web platform and marketing site for an enterprise generative AI startup. Features interactive 3D WebGL node graphs, fluid typography, and sub-second page loads.",
    services: ["Web Design", "Next.js Development", "UI/UX Prototyping", "Technical SEO", "Interactive 3D"],
    platforms: ["Next.js 15", "TypeScript", "Tailwind CSS", "Three.js", "Vercel"],
    tools: ["Figma", "VS Code", "Blender", "Framer Motion"],
    challenge:
      "Synthetix was launching their flagship AI orchestration engine and needed a brand-new digital home that could explain complex machine learning workflows to both developers and Fortune 500 decision makers without feeling generic or overwhelming.",
    approach:
      "We established a futuristic yet restrained visual language: deep obsidian canvas, emerald signal lines, and real-time interactive 3D node simulations. We structured the content around intuitive interactive demonstrations rather than walls of text.",
    solution:
      "Delivered a production-ready Next.js web application with 100% PageSpeed scores, dynamic feature reveals, interactive pricing calculator, and automated lead routing directly into their CRM.",
    designProcess: [
      "Conducted 10 stakeholder interviews to distill core value propositions.",
      "Created 4 distinct moodboards exploring technical elegance vs. minimalism.",
      "Engineered a modular Figma design token system with 80+ component variants.",
      "Rapidly prototyped WebGL shader interactions for the hero visualization.",
    ],
    developmentProcess: [
      "Built with Next.js App Router for optimized static generation and instant routing.",
      "Implemented hardware-accelerated Framer Motion scroll triggers.",
      "Integrated automated Lighthouse CI to guarantee 99+ Core Web Vitals.",
    ],
    beforeAfter: {
      beforeText: "Legacy static PDF decks and fragmented slide presentations with zero digital lead capture.",
      afterText: "Award-winning interactive digital flagship with live interactive AI demo and direct booking.",
      beforeMetric: "0% Digital Conversions",
      afterMetric: "47% Demo Signup Rate",
    },
    results: [
      { metric: "+47%", label: "Demo Conversion Rate" },
      { metric: "0.4s", label: "Largest Contentful Paint (LCP)" },
      { metric: "$3.2M", label: "Seed Funding Secured Post-Launch" },
    ],
    testimonial: {
      quote:
        "DammyUX delivered beyond our highest expectations. The 3D interactions and crisp typography elevated our brand perception overnight.",
      author: "Marcus Vance",
      role: "Founder & CEO, Synthetix AI",
    },
  },
  {
    slug: "aura-luxury-ecommerce",
    title: "Aura Haute Horlogerie",
    subtitle: "Immersive Luxury E-Commerce & AI Visuals",
    client: "Aura Timepieces",
    category: "Full Studio Sprint",
    industry: "Luxury Goods & E-Commerce",
    year: "2025",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://aura-luxury.example.com",
    description:
      "A bespoke digital boutique experience combining editorial typography, 360-degree interactive product exploration, and a series of cinematic AI-generated commercial videos.",
    services: ["Shopify Plus Development", "UI/UX Design", "AI Video Production", "Brand Identity", "SEO"],
    platforms: ["Shopify Plus", "Liquid", "Tailwind CSS", "Runway Gen-3"],
    tools: ["Figma", "Midjourney v6", "Adobe Premiere Pro", "After Effects"],
    challenge:
      "Traditional luxury watch retail relies heavily on in-person boutique experiences. Aura needed a digital storefront that replicated the bespoke tactile exclusivity of high-end Swiss watchmaking online.",
    approach:
      "We crafted an editorial layout with high-contrast typography, velvet black backdrops, micro-interactions for timepiece complications, and integrated Hollywood-grade AI video commercial cuts in the hero and story sections.",
    solution:
      "Engineered a custom Shopify Plus headless architecture with dynamic currency switching, custom engraving previewer, and integrated 4K AI video campaigns across Instagram and YouTube.",
    results: [
      { metric: "+35%", label: "Average Order Value (AOV)" },
      { metric: "-28%", label: "Cart Abandonment Drop" },
      { metric: "1.4M", label: "AI Video Commercial Views" },
    ],
    testimonial: {
      quote:
        "The combination of website craftsmanship and AI cinematic commercials gave our boutique a global stage. Flawless execution.",
      author: "Elena Rostova",
      role: "Head of Marketing, Aura",
    },
  },
  {
    slug: "loom-fintech-app",
    title: "Loom Finance",
    subtitle: "Cross-Border Treasury & Asset Management",
    client: "Loom Technologies",
    category: "UI/UX & Product",
    industry: "FinTech & Web3",
    year: "2026",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://loom-finance.example.com",
    description:
      "Intuitive web app interface and high-converting marketing site for a modern global treasury management platform managing over $80M in daily liquidity.",
    services: ["UI/UX Product Design", "Design System", "Next.js Frontend", "Animation"],
    platforms: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    tools: ["Figma", "Storybook", "Framer Motion"],
    challenge:
      "Complex financial tables, multi-currency routing rules, and multi-signature authorization flows were creating high onboarding drop-off for corporate clients.",
    approach:
      "We restructured the entire navigation hierarchy into three core streams: Cash Flow, Global Transfers, and Yield Vaults. We introduced a unified design token system with dark and high-contrast modes.",
    solution:
      "Designed and coded a comprehensive web dashboard and landing page with frictionless KYC onboarding steps, automated analytics cards, and instant transaction previews.",
    results: [
      { metric: "62%", label: "Faster User Onboarding" },
      { metric: "99.8%", label: "Crash-Free Session Rate" },
      { metric: "$80M+", label: "Daily Liquidity Processed" },
    ],
    testimonial: {
      quote:
        "DammyUX transformed a very complicated financial workflow into something our enterprise clients actually love using every day.",
      author: "David Chen",
      role: "CTO, Loom Finance",
    },
  },
  {
    slug: "nexus-interactive-trailer",
    title: "Nexus Odyssey",
    subtitle: "Cinematic Sci-Fi Worldbuilding & AI Film Production",
    client: "Nexus Games Studio",
    category: "AI Video Production",
    industry: "Gaming & Entertainment",
    year: "2025",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://nexus-odyssey.example.com",
    description:
      "A 90-second cinematic launch trailer and interactive lore microsite created entirely with generative AI video, spatial sound design, and custom typography.",
    services: ["AI Video Production", "Sound Design", "Interactive Microsite", "Copywriting"],
    platforms: ["Runway Gen-3", "Midjourney v6", "Kling AI", "Next.js"],
    tools: ["After Effects", "Premiere Pro", "ElevenLabs", "Figma"],
    challenge:
      "The indie game studio needed a blockbuster-grade teaser trailer on an indie budget to generate hype before their Kickstarter and Steam reveal.",
    approach:
      "We wrote an epic narrative script, generated hyper-consistent character and planetary concept frames in Midjourney, animated dynamic camera motions via Gen-3, and mixed custom orchestral synths and spatial Foley.",
    solution:
      "Delivered a 4K 60fps cinematic trailer along with a responsive lore portal where fans could explore character backstories and join the whitelist.",
    results: [
      { metric: "1.2M+", label: "Viral Views in 5 Days" },
      { metric: "35,000+", label: "Steam Wishlists Added" },
      { metric: "300%", label: "Kickstarter Funding Goal Reached" },
    ],
    testimonial: {
      quote:
        "The trailer blew our entire community away. People couldn't believe this was produced by a lean studio in just two weeks.",
      author: "Tyler Harrison",
      role: "Creative Producer, Nexus Games",
    },
  },
  {
    slug: "aerovox-cleantech-redesign",
    title: "Aerovox Carbon",
    subtitle: "Industrial Decarbonization Web Redesign & SEO",
    client: "Aerovox Systems",
    category: "Web & Digital",
    industry: "CleanTech & Industrial Sustainability",
    year: "2026",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://aerovox-systems.example.com",
    description:
      "Complete brand modernization, technical SEO architecture, and Webflow CMS build for a European climate-tech enterprise reducing industrial emissions.",
    services: ["Website Redesign", "Webflow Development", "Technical SEO", "Interactive Data Graphs"],
    platforms: ["Webflow CMS", "JavaScript", "HTML5", "CSS3"],
    tools: ["Figma", "Semrush", "Google Analytics 4"],
    challenge:
      "Aerovox had an 8-year-old WordPress website with broken layouts, poor mobile rendering, and non-existent organic search rankings for their key industrial filtration solutions.",
    approach:
      "We rebuilt the site architecture around specific B2B industrial search intent, created high-contrast clean diagrams of carbon capture hardware, and optimized every asset for sub-second loading.",
    solution:
      "A sleek, accessible Webflow CMS portal with interactive emissions ROI calculators, rich case studies, and automated appointment booking for enterprise consultations.",
    results: [
      { metric: "+180%", label: "Organic Search Traffic Growth" },
      { metric: "+55%", label: "Inbound Enterprise RFP Inquiries" },
      { metric: "100/100", label: "Mobile Accessibility & SEO Score" },
    ],
    testimonial: {
      quote:
        "DammyUX gave Aerovox the high-tech, modern credibility we needed to close deals with multinational manufacturing giants.",
      author: "Chloe Dupont",
      role: "VP of Growth, Aerovox",
    },
  },
  {
    slug: "kroma-creative-studios",
    title: "Kroma Spatial Studio",
    subtitle: "Spatial Computing & Architectural Visualization",
    client: "Kroma Collective",
    category: "Web & Digital",
    industry: "Architecture & Spatial Design",
    year: "2025",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    liveUrl: "https://kroma-spatial.example.com",
    description:
      "An avant-garde portfolio website for an architectural studio featuring horizontal gallery scrubbing, smooth page transitions, and dark/light ambient lighting effects.",
    services: ["Web Design", "Next.js Engineering", "Creative Motion", "Brand Strategy"],
    platforms: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis Smooth Scroll"],
    tools: ["Figma", "Cinema 4D", "VS Code"],
    challenge:
      "Showcasing massive 8K architectural renders without lagging mobile browsers or compromising visual fidelity.",
    approach:
      "We implemented progressive WebP/AVIF responsive image sets, virtualized gallery containers, and subtle smooth magnetic cursor effects.",
    solution:
      "A fluid, ultra-minimal editorial gallery where imagery and typography shine effortlessly, resulting in widespread design community recognition.",
    results: [
      { metric: "3x", label: "Average Session Duration" },
      { metric: "Awwwards", label: "Site of the Day Nominee" },
      { metric: "60fps", label: "Rock-solid Mobile Scrolling" },
    ],
    testimonial: {
      quote:
        "The website feels like a digital art gallery. Our prospective clients constantly praise the elegance and responsiveness.",
      author: "Sophie Martin",
      role: "Creative Director, Kroma Collective",
    },
  },
];
