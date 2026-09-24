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
  whatsappDisplay: string;
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
  url: "https://dammyux-portfolio.vercel.app",
  ogImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  email: "dammyadetoro27@gmail.com",
  whatsapp: "https://wa.me/2348133537578",
  whatsappDisplay: "08133537578",
  calendlyUrl: "https://calendly.com/dammyadetoro27",
  upworkUrl: "https://www.upwork.com/freelancers/~01df4fc2f072205084?mp_source=share",
  fiverrUrl: "https://www.fiverr.com/dammyux",
  linkedinUrl: "https://www.linkedin.com/in/adetoro-hammed-b2402b223",
  instagramUrl: "https://instagram.com/dammyux",
  githubUrl: "https://github.com/dammyux",
  location: "Worldwide / Remote",
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
