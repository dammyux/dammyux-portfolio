export interface SocialLink {
  label: string;
  url: string;
  handle?: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  whatsapp: string;
  calendlyUrl: string;
  upworkUrl: string;
  fiverrUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  githubUrl: string;
  location: string;
  availability: string;
  copyrightYear: number;
  navigation: { label: string; href: string }[];
  footerLinks: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "DAMMYUX",
  tagline: "Web Design, Development, UI/UX & AI Video Production",
  title: "DAMMYUX — Premium Digital Studio & Portfolio",
  description:
    "Creative digital studio crafting high-converting modern websites, intuitive UI/UX experiences, and cinematic AI video production for forward-thinking brands.",
  url: "https://dammyux.com",
  ogImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  email: "hello@dammyux.com", // [YOUR EMAIL]
  whatsapp: "https://wa.me/1234567890", // [YOUR WHATSAPP]
  calendlyUrl: "https://calendly.com/dammyux/discovery", // [YOUR CALENDLY]
  upworkUrl: "https://www.upwork.com/freelancers/~dammyux", // [YOUR UPWORK]
  fiverrUrl: "https://www.fiverr.com/dammyux", // [YOUR FIVERR]
  linkedinUrl: "https://www.linkedin.com/in/dammyux", // [YOUR LINKEDIN]
  instagramUrl: "https://instagram.com/dammyux", // [YOUR INSTAGRAM]
  githubUrl: "https://github.com/dammyux",
  location: "Worldwide / Remote", // [YOUR LOCATION]
  availability: "Available for Q1/Q2 Projects",
  copyrightYear: 2026,
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
