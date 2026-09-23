import { Testimonial } from '@/types';

export const testimonialsRow1: Testimonial[] = [
  {
    id: 't1',
    author: 'Julian Vance',
    role: 'Creative Director',
    company: 'Lumina Studio International',
    content: 'Dammy delivered a Next.js web application that exceeded all expectations. Our clients regularly comment on how breathtaking and smooth our website feels.',
    rating: 5,
    projectHighlight: 'Lumina Aura Next.js Architecture',
    metric: '+142% Inbound Leads',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    author: 'Elena Rostova',
    role: 'Head of Brand Marketing',
    company: 'NeuroSync Labs',
    content: 'Produced a cinematic AI sci-fi trailer that looked like a multimillion-dollar Netflix production. The character consistency and pacing were astonishing.',
    rating: 5,
    projectHighlight: 'KRONOS AI Sci-Fi Campaign',
    metric: '850K+ Video Views',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't3',
    author: 'Marcus Sterling',
    role: 'Managing Director',
    company: 'Solaris Private Wealth',
    content: 'The level of craftsmanship and attention to UX detail is unmatched. Dammy translated complex financial data into pure elegance. Investor drop-off dropped by 65%.',
    rating: 5,
    projectHighlight: 'Solaris Wealth Portal',
    metric: '-65% Onboarding Drop-off',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't4',
    author: 'Sarah Lin',
    role: 'VP of Revenue Operations',
    company: 'GrowthForge HQ',
    content: 'Our sales team doubled their qualified booked calls within the first two weeks of launching Dammy’s automated lead scoring pipeline. Seamless execution.',
    rating: 5,
    projectHighlight: 'HyperFlow CRM Engine',
    metric: '35 hrs/wk Saved',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  }
];

export const testimonialsRow2: Testimonial[] = [
  {
    id: 't5',
    author: 'David Meyer',
    role: 'Creative Producer',
    company: 'Apex Kinetic Agency',
    content: 'The visual fidelity is unbelievable. Dammy took our automotive brand concept and turned it into an adrenaline-pumping commercial in record turnaround time.',
    rating: 5,
    projectHighlight: 'ZENITH Supercar Reveal',
    metric: '92% Budget Saved',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't6',
    author: 'Chloë Laurent',
    role: 'Founder & Formulator',
    company: 'Artisan Botanics Paris',
    content: 'Our e-commerce sales surged by over 60% in month one post-launch. Dammy combines stunning editorial design sense with ruthless conversion optimization.',
    rating: 5,
    projectHighlight: 'Artisan Botanics Shopify Redesign',
    metric: '+174% SEO Traffic',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't7',
    author: 'Alexandre Roy',
    role: 'Co-Founder & CTO',
    company: 'Vortex Dynamics',
    content: 'Fast, responsive, and insanely talented. The Three.js 3D animations run at 60 FPS on mobile without draining battery. The best frontend developer we have worked with.',
    rating: 5,
    projectHighlight: '3D WebGL Configurator',
    metric: '99/100 Speed Score',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't8',
    author: 'Kavita Patel',
    role: 'Head of Product',
    company: 'Cipher Flow App',
    content: 'Working with Dammy was a breath of fresh air. Clear timelines, zero guesswork, and a finished web product that blew our investors and board away.',
    rating: 5,
    projectHighlight: 'Fintech SaaS Dashboard UX',
    metric: '5-Star Delivery',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop'
  }
];

export const testimonials: Testimonial[] = [...testimonialsRow1, ...testimonialsRow2];
