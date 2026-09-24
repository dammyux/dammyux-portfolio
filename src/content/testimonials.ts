export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatarUrl?: string;
  rating: number;
  projectType: string;
  year: string;
}

export const testimonialsRow1: Testimonial[] = [
  {
    id: "t1",
    quote:
      "DammyUX took our outdated SaaS landing page and turned it into a world-class digital experience. Our demo signups jumped by 47% within the first 3 weeks post-launch.",
    clientName: "Marcus Vance",
    clientRole: "Founder & CEO",
    company: "Synthetix AI",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "SaaS Web Redesign & Next.js Build",
    year: "2025",
  },
  {
    id: "t2",
    quote:
      "The combination of crisp UI/UX design and stunning AI video commercials gave our brand launch an unfair advantage. Fast, responsive, and incredibly visionary.",
    clientName: "Elena Rostova",
    clientRole: "Head of Marketing",
    company: "Aura Luxury Goods",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "E-Commerce + AI Video Production",
    year: "2025",
  },
  {
    id: "t3",
    quote:
      "Working with DammyUX was the smoothest agency collaboration we have ever experienced. Pixel-perfect execution, 100 PageSpeed scores, and zero drama.",
    clientName: "David Chen",
    clientRole: "Co-Founder & CTO",
    company: "Loom Finance",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "FinTech Web App UI & Frontend",
    year: "2026",
  },
  {
    id: "t4",
    quote:
      "Every single client who visits our portfolio mentions the subtle 3D interactions and smooth motion. It instantly established our studio as a premium player.",
    clientName: "Sophie Martin",
    clientRole: "Creative Director",
    company: "Kroma Studios",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "Creative Portfolio & Webflow CMS",
    year: "2025",
  },
];

export const testimonialsRow2: Testimonial[] = [
  {
    id: "t5",
    quote:
      "The AI cinematic trailer produced for our gaming launch generated over 1.2M views in 5 days. Unbelievable production value and narrative direction.",
    clientName: "Tyler Harrison",
    clientRole: "Product Lead",
    company: "Nexus Interactive",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "AI Cinematic Video & Landing Page",
    year: "2025",
  },
  {
    id: "t6",
    quote:
      "The price reveal transparency, the swift communication, and the attention to micro-details made DammyUX our go-to partner for all our client web builds.",
    clientName: "Amara Okafor",
    clientRole: "Managing Director",
    company: "Pulse Digital Studio",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "Agency Web & SEO Retainer",
    year: "2026",
  },
  {
    id: "t7",
    quote:
      "DammyUX redesigned our entire Shopify store from the ground up. Our checkout abandonment decreased by 28% and mobile average order value went up 35%.",
    clientName: "Liam O'Connor",
    clientRole: "E-Commerce Director",
    company: "Veloce Apparel",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "Shopify Plus Store Redesign",
    year: "2025",
  },
  {
    id: "t8",
    quote:
      "If you need a website that looks like it cost $50k and loads at supersonic speeds, hire DammyUX immediately. Best investment our startup made this year.",
    clientName: "Chloe Dupont",
    clientRole: "VP of Growth",
    company: "Aerovox CleanTech",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    projectType: "Web Design, Development & SEO",
    year: "2026",
  },
];
