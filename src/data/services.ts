import { ServiceCategory } from '@/types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-design-dev',
    title: 'Web Design & Development',
    subtitle: 'High-Performance, Editorial, and Fully Responsive Digital Presence',
    description: 'We build high-converting, blazing-fast websites engineered to elevate your brand prestige, attract high-ticket clients, and provide seamless experiences on every device.',
    icon: 'Globe',
    services: [
      {
        id: 'web-design',
        name: 'Custom Website Design',
        description: 'Bespoke UI layouts tailored to your unique market positioning, prioritizing clear visual hierarchy, typography, and intuitive user journeys.',
        tags: ['Figma', 'UI/UX', 'Design Systems', 'Mobile-First']
      },
      {
        id: 'web-dev',
        name: 'Next.js & React Web Engineering',
        description: 'Modern, high-performance web development utilizing Next.js App Router, TypeScript, and Tailwind CSS for near-instant load speeds and SEO perfection.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
      },
      {
        id: 'web-redesign',
        name: 'Website Redesign & Conversion Optimization',
        description: 'Revamping outdated websites into modern, high-converting digital assets that boost authority, engagement, and retention.',
        tags: ['Audit', 'CRO', 'Modernization', 'Speed Optimization']
      },
      {
        id: 'wix-studio',
        name: 'Wix & Wix Studio Development',
        description: 'Advanced responsive layouts, custom interactions, and custom CMS structuring using the full power of Wix Studio.',
        tags: ['Wix Studio', 'Velo Code', 'CMS Setup', 'Responsive Design']
      },
      {
        id: 'wordpress-shopify',
        name: 'WordPress & Shopify Development',
        description: 'Custom WordPress theme development with clean block architecture and high-converting Shopify storefronts with optimized checkout flows.',
        tags: ['WordPress', 'Shopify Liquid', 'E-commerce', 'WooCommerce']
      },
      {
        id: 'framer-webflow',
        name: 'Framer & Webflow Development',
        description: 'Award-level visual sites built with fluid scroll interactions, micro-animations, and client-friendly CMS backends.',
        tags: ['Framer', 'Webflow', 'Interactive', 'No-Code/Low-Code']
      }
    ]
  },
  {
    id: 'design-digital',
    title: 'Design, Digital & Growth',
    subtitle: 'Strategic Branding, Frictionless UX & Automated Operations',
    description: 'From high-impact brand identities to automated CRM lead capture, we craft holistic digital systems that save you time and maximize revenue.',
    icon: 'Layers',
    services: [
      {
        id: 'ui-ux',
        name: 'UI/UX Design & Prototyping',
        description: 'Interactive wireframing, high-density dashboard UX, usability testing, and comprehensive design tokens.',
        tags: ['Figma', 'User Research', 'Design Systems', 'Micro-interactions']
      },
      {
        id: 'landing-pages',
        name: 'High-Converting Landing Pages',
        description: 'Direct-response landing pages crafted with persuasive copy architecture, trust badges, and frictionless lead forms.',
        tags: ['Direct Response', 'A/B Testing', 'Copy Architecture', 'CRO']
      },
      {
        id: 'ecommerce',
        name: 'E-commerce Architecture & Checkout UX',
        description: 'Strategic e-commerce stores designed for high Average Order Value (AOV), cart retention, and frictionless mobile checkouts.',
        tags: ['Shopify', 'Stripe', 'Conversion Funnels', 'Product Storytelling']
      },
      {
        id: 'seo',
        name: 'Technical & On-Page SEO',
        description: 'Semantic HTML5 structure, schema markup, Core Web Vitals optimization, and keyword architecture for dominant search ranking.',
        tags: ['Schema.org', 'Core Web Vitals', 'Metadata', 'Keyword Mapping']
      },
      {
        id: 'branding',
        name: 'Brand Identity & Graphic Design',
        description: 'Logos, color systems, typography pairing, social media templates, and comprehensive brand guidelines.',
        tags: ['Brand Identity', 'Typography', 'Color Systems', 'Guidelines']
      },
      {
        id: 'automation',
        name: 'Digital Workflow & CRM Automation',
        description: 'Connecting web forms to Zapier, Make, Airtable, HubSpot, and Slack to automate lead routing and client onboarding.',
        tags: ['Make.com', 'Zapier', 'Webhooks', 'CRM Integration']
      },
      {
        id: 'maintenance',
        name: 'Website Maintenance & Security',
        description: 'Continuous performance monitoring, security patches, plugin updates, and regular speed audits to keep your site pristine.',
        tags: ['Uptime Monitoring', 'Security', 'Backups', 'Speed Maintenance']
      }
    ]
  },
  {
    id: 'ai-video-production',
    title: 'AI Video Production & Visual Storytelling',
    subtitle: 'Cinematic Visuals, Commercials & Social Video at Unprecedented Speed',
    description: 'We harness state-of-the-art AI video generation pipelines to produce cinema-grade commercials, product teasers, and viral social content at a fraction of traditional film production costs.',
    icon: 'Video',
    services: [
      {
        id: 'ai-ads',
        name: 'AI Video Ads & Commercials',
        description: 'Visually arresting commercials for brands and products, combining photorealistic scenes with dynamic camera direction.',
        tags: ['Runway Gen-3', 'Midjourney', 'Commercials', 'Color Grading']
      },
      {
        id: 'cinematic-films',
        name: 'Cinematic AI Short Films & Teasers',
        description: 'Narrative storytelling, world-building, and concept trailers with consistent character generation and cinematic lighting.',
        tags: ['Storyboarding', 'Consistent Characters', 'Worldbuilding', '4K Upscaling']
      },
      {
        id: 'ai-ugc',
        name: 'AI UGC & Social Video Campaigns',
        description: 'High-volume, engaging vertical video content for TikTok, Instagram Reels, and YouTube Shorts engineered for viral retention.',
        tags: ['Vertical Video', 'Reels / TikTok', 'Fast Paced', 'Hooks']
      },
      {
        id: 'explainer-videos',
        name: 'AI Explainer & Product Concept Videos',
        description: 'Showcasing intricate software, tech hardware, or concepts with hyper-detailed 3D-like motion and clear narration.',
        tags: ['Product Demos', 'Tech Visuals', 'Voiceover', 'Infographics']
      },
      {
        id: 'anime-animation',
        name: 'Anime & Stylized AI Animation',
        description: 'Custom 2D/3D stylized animation, anime music videos, and illustrated motion graphics generated with bespoke aesthetic models.',
        tags: ['Anime Style', 'ComfyUI', 'Motion Graphics', 'Stylized Art']
      },
      {
        id: 'documentary-trailers',
        name: 'Documentaries & Concept Movie Trailers',
        description: 'Historical reconstructions, speculative futures, and dramatic docu-series teasers with orchestral AI sound design.',
        tags: ['Docu-style', 'Trailer Pacing', 'Soundtrack Mix', 'Foley SFX']
      }
    ]
  }
];

