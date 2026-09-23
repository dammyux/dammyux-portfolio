import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter / Sprint',
    badge: 'Fast Turnaround',
    price: '$750',
    description: 'Ideal for focused landing pages, single-page sites, brand redesigns, or targeted AI video commercial packs.',
    timeline: '5 – 7 Business Days',
    idealFor: 'Startups, Solo Founders, Product Launches & Local Businesses',
    deliverables: [
      'High-converting Single Page or 3-Page Website',
      'Modern, Responsive UI/UX Design (Figma + Code)',
      'Built on Next.js, Framer, Wix Studio or WordPress',
      'Technical SEO & Core Web Vitals Optimization',
      'Theme System (Dark / Light Mode)',
      '1x 30s High-Quality AI Video Commercial or Ad',
      'Direct WhatsApp & Email Support',
      '14 Days Post-Launch Support & Minor Tweaks'
    ],
    popular: false,
    ctaText: 'Start with Starter',
    ctaLink: '/contact?plan=starter'
  },
  {
    id: 'professional',
    name: 'Professional / Full Studio',
    badge: 'Most Popular',
    price: '$1,850',
    description: 'A complete end-to-end bespoke website build with custom animations, CMS integration, and multi-asset AI video campaign.',
    timeline: '2 – 3 Weeks',
    idealFor: 'Growing Brands, E-commerce, Agencies & Established Creators',
    deliverables: [
      'Full Multi-Page Website (Up to 8 Custom Pages)',
      'Bespoke Interactive Animations (Framer Motion / Micro-interactions)',
      'Full CMS Setup (Next.js App Router, WordPress, or Shopify)',
      'Interactive 3D / WebGL Accent Elements',
      'Lead Capture & Automated CRM Workflows (Zapier/Make)',
      '3x High-Impact AI Video Commercials (16:9 + 9:16 Social Ads)',
      'Full Brand Style Guide & Asset Export',
      '30 Days Dedicated Post-Launch Support'
    ],
    popular: true,
    ctaText: 'Start Professional Project',
    ctaLink: '/contact?plan=professional'
  },
  {
    id: 'custom',
    name: 'Enterprise / Custom Retainer',
    badge: 'Bespoke Scope',
    price: 'Custom',
    description: 'Tailored solutions for complex web apps, continuous monthly creative sprints, or comprehensive AI video series production.',
    timeline: 'Custom Milestone Schedule',
    idealFor: 'Enterprise Teams, Tech Startups & High-Volume Media Brands',
    deliverables: [
      'Bespoke Web Application & Headless Architecture',
      'Custom Multi-Stage Automation & AI Agent Integrations',
      'Full-Scale Cinematic AI Video Series & Brand Universes',
      'Continuous Conversion Optimization & A/B Testing',
      'Multi-Language / Internationalization Setup',
      'Priority 24/7 Direct Slack / WhatsApp Channel',
      'Dedicated Weekly Strategy & Design Reviews',
      'Custom SLA & Ongoing Maintenance Retainer'
    ],
    popular: false,
    ctaText: 'Discuss Custom Scope',
    ctaLink: '/contact?plan=custom'
  }
];

export const pricingFaqs = [
  {
    question: 'How do project payments work?',
    answer: 'Standard projects are split into a 50% upfront deposit to initiate discovery and design, and 50% upon final client sign-off before launch. Custom milestones can be arranged for enterprise projects.'
  },
  {
    question: 'How long does a website or AI video project take?',
    answer: 'Starter sprint projects typically take 5–7 business days. Full multi-page bespoke websites take 2–3 weeks. Fast-track rush delivery is available on request.'
  },
  {
    question: 'Can you work on an existing website or platform?',
    answer: 'Yes! We frequently redesign, optimize, or migrate existing websites built on WordPress, Shopify, Wix, Framer, Webflow, or custom React codebases.'
  },
  {
    question: 'How does the AI Video production process work?',
    answer: 'We collaborate on the concept and script, create visual moodboards and character style anchors, generate coherent high-definition video scenes, and provide full sound design, voiceover, and color grading.'
  },
  {
    question: 'Do you offer ongoing maintenance after launch?',
    answer: 'All projects include 14 to 30 days of complimentary post-launch support. We also offer affordable monthly maintenance retainers for hosting, security, and ongoing updates.'
  }
];

