import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'lumina-aura',
    slug: 'lumina-aura',
    title: 'Lumina Aura — Luxury Architectural Lighting',
    headline: 'Bespoke Next.js ecommerce & 3D lighting configurator with +240% inbound leads',
    category: 'Web Development',
    industry: 'Architecture & Industrial Design',
    shortDescription: 'An ultra-refined editorial digital storefront with interactive 3D product visualizer and seamless headless checkout.',
    overview: 'Lumina Aura needed a digital presence that matched the prestige of their handcrafted architectural luminaire collection. We designed and engineered a custom Next.js web experience with dark-first aesthetics, ambient light simulations, and lightning-fast checkout flow.',
    thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true,
    year: '2025',
    timeline: '4 Weeks',
    servicesProvided: [
      'UI/UX Architecture',
      'Bespoke Web Design',
      'Next.js 15 & React Development',
      'Tailwind CSS Theming',
      'Interactive 3D Visualizer',
      'Technical SEO Optimization'
    ],
    platforms: ['Next.js', 'Vercel', 'Stripe'],
    tools: ['Figma', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    liveUrl: 'https://luminaaura.example.com',
    metrics: [
      { label: 'Conversion Rate Lift', value: '+142%' },
      { label: 'Lighthouse Performance Score', value: '99/100' },
      { label: 'Average Session Duration', value: '4m 12s' }
    ],
    challenge: 'The existing website was slow, built on a bloated legacy theme with poor mobile UX, resulting in a high bounce rate (68%) and lost high-ticket client inquiries.',
    solution: 'Engineered a custom headless Next.js frontend with dark-first glassmorphism, instant page transitions, subtle scroll reveals, and a fluid mobile navigation structure.',
    designProcess: 'Crafted low-fidelity wireframes focusing on high-contrast typography, followed by high-fidelity Figma components that emphasized product radiance through deep blacks and subtle green glows.',
    developmentDetails: 'Built using Next.js App Router, Tailwind CSS for strict token alignment, and WebGL shader effects to emulate dynamic light reflections on hover.',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    beforeAfterTitle: 'Legacy Generic Grid vs. Bespoke Editorial Dark Experience',
    testimonial: {
      quote: 'Dammy delivered an experience that exceeded all expectations. Our clients regularly comment on how breathtaking and smooth our website feels. The ROI was immediate.',
      author: 'Julian Vance',
      role: 'Founding Partner & Creative Director',
      company: 'Lumina Studio International'
    }
  },
  {
    id: 'vortex-ai-film',
    slug: 'vortex-ai-film',
    title: 'KRONOS: Cybernetic Odyssey',
    headline: 'Cinematic AI Sci-Fi Commercial & Teaser Campaign with 850k+ views',
    category: 'AI Video Production',
    industry: 'Entertainment & Tech Hardware',
    shortDescription: 'A high-concept cinematic AI commercial combining hyper-realistic character generation, coherent dynamic camera motion, and sound design.',
    overview: 'A full-pipeline AI video production created for a next-generation neural interface brand. Generated using proprietary diffusion workflows, custom LoRA training for actor consistency, and multi-layered sound design.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-at-night-42283-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    isAiVideo: true,
    featured: true,
    year: '2025',
    timeline: '10 Days',
    servicesProvided: [
      'Concept Storyboarding & Prompt Engineering',
      'Custom LoRA Character Training',
      'Generative Video Synthesis & Camera Control',
      'AI Voice Synthesis & Dialogue Generation',
      'Sound FX, Foley & Cinematic Audio Mix',
      'Color Grading & Final 4K Upscaling'
    ],
    platforms: ['ComfyUI', 'Runway Gen-3', 'Midjourney v6', 'Premiere Pro'],
    tools: ['Midjourney', 'ComfyUI', 'ElevenLabs', 'Topaz Video AI'],
    liveUrl: 'https://vimeo.com',
    metrics: [
      { label: 'Organic Views Across Platforms', value: '850K+' },
      { label: 'Production Cost Reduction', value: '85%' },
      { label: 'Turnaround Time', value: '10 Days' }
    ],
    challenge: 'Traditional sci-fi film production with custom futuristic sets, cyborg models, and neon cityscape locations was quoted at $90,000+ with a 3-month turnaround time.',
    solution: 'Deployed custom generative video workflows to produce photorealistic 4K scenes with consistent lighting, dynamic motion tracking, and zero uncanny-valley artifacts in 10 days.',
    designProcess: 'Structured comprehensive 3-act narrative storyboards, developed bespoke style anchors, and curated precise lighting palettes matching the client brand identity.',
    testimonial: {
      quote: 'Dammy produced a cinematic trailer that looked like a multimillion-dollar Netflix production. The visual consistency and emotional pacing were astonishing.',
      author: 'Elena Rostova',
      role: 'Head of Brand Marketing',
      company: 'NeuroSync Labs'
    }
  },
  {
    id: 'solaris-fintech',
    slug: 'solaris-fintech',
    title: 'Solaris Capital — Institutional Wealth Portal',
    headline: 'High-security financial dashboard and marketing site with micro-interactions',
    category: 'UI/UX Design',
    industry: 'Fintech & Private Equity',
    shortDescription: 'A modern, high-trust fintech application interface combining institutional data visualization with minimalist editorial typography.',
    overview: 'Solaris Capital required a complete brand refresh and client investment portal design that eliminated friction for high-net-worth investors while adhering to institutional security standards.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true,
    year: '2024',
    timeline: '3 Weeks',
    servicesProvided: [
      'Design System Architecture (Figma)',
      'High-Density Dashboard UX',
      'Interactive Charting & Financial Visualizations',
      'Responsive Mobile Adaptation',
      'Front-End Component Library'
    ],
    platforms: ['Figma', 'React', 'Tailwind CSS'],
    tools: ['Figma', 'TypeScript', 'Lucide Icons'],
    liveUrl: 'https://solariscapital.example.com',
    metrics: [
      { label: 'User Onboarding Drop-off Reduction', value: '-65%' },
      { label: 'Client Asset Commitments', value: '$12M+' },
      { label: 'Investor NPS Score', value: '94' }
    ],
    challenge: 'Previous portal suffered from fragmented UI, cluttered navigation, and lack of visual prestige, causing user confusion during multi-step asset onboarding.',
    solution: 'Designed a unified design system with dark/light mode balance, clear typographic hierarchy, and simplified portfolio metric cards.',
    testimonial: {
      quote: 'The level of craftsmanship and attention to UX detail is unmatched. Dammy translated complex financial workflows into pure elegance.',
      author: 'Marcus Sterling',
      role: 'Managing Director',
      company: 'Solaris Private Wealth'
    }
  },
  {
    id: 'hyperflow-automation',
    slug: 'hyperflow-automation',
    title: 'HyperFlow — Enterprise CRM & Lead Automation',
    headline: 'Automated 12,000 monthly lead workflows with zero manual data entry',
    category: 'Digital Automation',
    industry: 'SaaS & B2B Growth',
    shortDescription: 'End-to-end integration uniting Make, Zapier, Webhooks, Airtable, and OpenAI to automate complex sales qualification and instant scheduling.',
    overview: 'Built an autonomous revenue operations pipeline that intercepts incoming inquiries from multiple website forms, scores leads using AI, enriches company data, and syncs directly into CRM and Slack with personalized follow-up sequences.',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    year: '2025',
    timeline: '2 Weeks',
    servicesProvided: [
      'Webhook Architecture & API Integrations',
      'Lead Qualification AI Scoring Workflow',
      'Slack & WhatsApp Notification Bots',
      'Airtable & HubSpot CRM Synchronization',
      'Failover Error Logging & Alert System'
    ],
    platforms: ['Make.com', 'Zapier', 'OpenAI API', 'HubSpot'],
    tools: ['Webhooks', 'Airtable', 'Make', 'Node.js'],
    liveUrl: 'https://hyperflow.example.com',
    metrics: [
      { label: 'Weekly Hours Saved for Sales Reps', value: '35 hrs' },
      { label: 'Lead Response Time', value: '< 90 sec' },
      { label: 'Error Rate', value: '0.01%' }
    ],
    challenge: 'Manual copy-pasting of leads between form submissions, spreadsheets, and CRM caused 18-hour response delays and lost high-value enterprise prospects.',
    solution: 'Created an intelligent real-time automation engine that enriches, scores, and routes qualified leads within 90 seconds of submission.',
    testimonial: {
      quote: 'Our sales team doubled their qualified booked calls within the first two weeks of launching Dammy’s automation architecture.',
      author: 'Sarah Lin',
      role: 'VP of Revenue Operations',
      company: 'GrowthForge HQ'
    }
  },
  {
    id: 'zenith-ai-commercial',
    slug: 'zenith-ai-commercial',
    title: 'ZENITH: E-Performance Supercar Reveal',
    headline: 'Hyper-stylized 3D & AI cinematic commercial for luxury electric vehicle',
    category: 'AI Video Production',
    industry: 'Automotive & Luxury Lifestyle',
    shortDescription: 'Dynamic nighttime highway chase and aerodynamic close-up sequences created with AI video synthesis and sound design.',
    overview: 'Created a high-octane luxury electric supercar commercial. Designed with sleek studio lighting, dynamic rain-slicked asphalt reflections, and immersive atmospheric bass-heavy sound design.',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-the-streets-of-a-neon-lit-city-42284-large.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    isAiVideo: true,
    featured: true,
    year: '2025',
    timeline: '1 Week',
    servicesProvided: [
      'Vehicle Concept Prompt Design',
      'AI Motion Control & Camera Choreography',
      'Cinematic Color Grading in DaVinci Resolve',
      'Custom Electronic Score & Engine Audio Effects'
    ],
    platforms: ['Runway Gen-3', 'Midjourney', 'DaVinci Resolve'],
    tools: ['ComfyUI', 'Kling AI', 'DaVinci Resolve'],
    metrics: [
      { label: 'Social Engagement Rate', value: '18.4%' },
      { label: 'Production Cost Savings', value: '92%' }
    ],
    testimonial: {
      quote: 'The visual fidelity is simply unbelievable. Dammy took a brand concept and turned it into an adrenaline-pumping commercial in record time.',
      author: 'David Meyer',
      role: 'Creative Producer',
      company: 'Apex Kinetic Agency'
    }
  },
  {
    id: 'artisan-botanics',
    slug: 'artisan-botanics',
    title: 'Artisan Botanics — Organic Skincare & Wellness',
    headline: 'Complete brand identity, Shopify custom theme redesign, and SEO strategy',
    category: 'Website Redesign',
    industry: 'E-commerce & Organic Beauty',
    shortDescription: 'Warm minimalist e-commerce design with seamless subscription checkout, custom ingredient storyboards, and +170% organic traffic.',
    overview: 'A complete brand and digital overhaul for an artisan botanical skincare brand. Replaced an uninspired generic template with an earthy, warm, editorial Shopify store that elevated brand perceived value.',
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop',
    featured: false,
    year: '2024',
    timeline: '3 Weeks',
    servicesProvided: [
      'Brand Identity & Color Psychology',
      'Custom Shopify Liquid & Theme Customization',
      'Mobile-First E-commerce Checkout UX',
      'Comprehensive Technical & On-Page SEO'
    ],
    platforms: ['Shopify', 'Figma', 'Google Search Console'],
    tools: ['Shopify Liquid', 'Figma', 'Tailwind CSS', 'Schema.org'],
    liveUrl: 'https://artisanbotanics.example.com',
    metrics: [
      { label: 'Organic Search Traffic', value: '+174%' },
      { label: 'Mobile Conversion Rate', value: '4.8%' },
      { label: 'Average Order Value (AOV)', value: '+$24.50' }
    ],
    challenge: 'High drop-off on mobile devices, low organic search presence for non-branded keywords, and an outdated aesthetic that failed to justify premium pricing.',
    solution: 'Crafted a bespoke, clean editorial Shopify store with structured ingredient education modules, sticky mobile add-to-cart, and programmatic Schema markup.',
    testimonial: {
      quote: 'Our sales surged by over 60% in month one post-launch. Dammy combines stunning design sense with ruthless conversion optimization.',
      author: 'Chloë Laurent',
      role: 'Founder & Botanical Formulator',
      company: 'Artisan Botanics Paris'
    }
  }
];

export const projectCategories = [
  'All',
  'Web Design',
  'Web Development',
  'Website Redesign',
  'UI/UX Design',
  'AI Video Production',
  'Digital Automation'
];

