export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface AboutContent {
  fullName: string;
  title: string;
  shortBio: string;
  longBio: string[];
  yearsOfExperience: string;
  completedProjects: string;
  clientSatisfaction: string;
  location: string;
  philosophy: {
    headline: string;
    points: { title: string; description: string }[];
  };
  approach: {
    step: string;
    title: string;
    description: string;
  }[];
  experience: TimelineItem[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  toolCategories: SkillCategory[];
  cvUrl: string;
  image: string;
}

export const aboutContent: AboutContent = {
  fullName: "DammyUX",
  title: "Lead Digital Designer, Web Architect & AI Video Producer",
  shortBio:
    "I craft hyper-tailored digital experiences, scalable web applications, and cinematic AI-powered visual narratives that elevate brands into category leaders.",
  longBio: [
    "With over 6+ years at the intersection of design, engineering, and visual media, I build web solutions that balance aesthetic elegance with high-performance business conversion.",
    "From high-growth venture-backed startups to international agency clients, my mission is simple: eliminate friction, inject personality, and build digital touchpoints people genuinely love to interact with.",
    "In 2024–2026, I expanded my creative toolkit into cutting-edge AI video generation and generative motion, producing viral video ads, brand commercials, and product launch trailers with Hollywood-tier visual fidelity.",
  ],
  yearsOfExperience: "6+",
  completedProjects: "120+",
  clientSatisfaction: "100%",
  location: "Global / Remote",
  philosophy: {
    headline: "Simplicity through rigorous intentionality.",
    points: [
      {
        title: "Function Drives Form",
        description:
          "Every pixel, micro-interaction, and typography scale is engineered to guide user behavior and drive tangible business outcomes.",
      },
      {
        title: "Speed as a Feature",
        description:
          "Lightweight code, optimized assets, and zero bloat ensure sub-second loads and fluid 60fps interactions on every device.",
      },
      {
        title: "Future-Proof Craft",
        description:
          "Leveraging modern stacks and AI capabilities to keep brands ahead of evolving industry trends.",
      },
    ],
  },
  approach: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "Deep-dive into your market position, user personas, brand voice, and clear measurable conversion targets.",
    },
    {
      step: "02",
      title: "Wireframing & UI/UX Design",
      description:
        "Iterative, high-fidelity prototypes in Figma focused on visual hierarchy, frictionless user journeys, and brand delight.",
    },
    {
      step: "03",
      title: "Engineered Development",
      description:
        "Building responsive, accessible, SEO-optimized web experiences with Next.js, Tailwind CSS, Framer Motion, Webflow, or Shopify.",
    },
    {
      step: "04",
      title: "Launch, AI Media & Optimization",
      description:
        "Deploying with zero downtime, producing custom AI video campaigns, and monitoring Core Web Vitals and user conversion.",
    },
  ],
  experience: [
    {
      year: "2023 — Present",
      role: "Founder & Creative Director",
      company: "DammyUX Studio",
      description:
        "Leading high-impact digital redesigns, bespoke web apps, and AI commercial video productions for international clients across SaaS, FinTech, and Luxury E-Commerce.",
    },
    {
      year: "2021 — 2023",
      role: "Senior UI/UX & Web Designer",
      company: "Apex Digital Agency",
      description:
        "Spearheaded full redesigns for 40+ client websites, increasing average conversion rates by 42% through interactive prototyping and design system implementations.",
    },
    {
      year: "2019 — 2021",
      role: "Frontend & Webflow Developer",
      company: "Vanguard Media",
      description:
        "Engineered scalable web applications and marketing landing pages utilizing modern JavaScript, React, WordPress, and Webflow.",
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science / Interactive Media",
      institution: "State University of Technology",
      year: "2015 — 2019",
    },
    {
      degree: "Advanced UX Architecture & Interaction Design Certification",
      institution: "Interaction Design Institute",
      year: "2020",
    },
  ],
  toolCategories: [
    {
      title: "Design & UI/UX",
      skills: ["Figma", "Design Systems", "Wireframing", "Prototyping", "Design Tokens", "Typography", "Color Theory"],
    },
    {
      title: "Web Platforms & CMS",
      skills: ["Webflow", "Framer", "Wix Studio", "Shopify Plus", "WordPress", "Squarespace", "Ghost"],
    },
    {
      title: "Frontend & Code",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / WebGL", "HTML5/CSS3"],
    },
    {
      title: "AI Video & Creative Media",
      skills: ["Runway Gen-3", "Midjourney v6", "Kling AI", "Luma Dream Machine", "ElevenLabs", "Premiere Pro", "After Effects"],
    },
    {
      title: "SEO & Growth",
      skills: ["Technical SEO", "Core Web Vitals", "Schema Markup", "Google Analytics 4", "Semrush", "Conversion Rate Optimization"],
    },
  ],
  cvUrl: "/resume.pdf",
  image: "/images/dammy-profile.jpg",
};