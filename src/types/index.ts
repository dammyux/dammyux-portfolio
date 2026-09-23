export type ProjectCategory = 
  | 'Web Design' 
  | 'Web Development' 
  | 'Website Redesign' 
  | 'UI/UX Design' 
  | 'Ecommerce' 
  | 'SEO' 
  | 'Branding' 
  | 'Digital Automation' 
  | 'AI Video Production';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  headline: string;
  category: ProjectCategory;
  industry: string;
  shortDescription: string;
  overview: string;
  thumbnail: string;
  featuredImage?: string;
  gallery?: string[];
  videoUrl?: string;
  videoPoster?: string;
  isAiVideo?: boolean;
  featured: boolean;
  year: string;
  timeline?: string;
  servicesProvided: string[];
  platforms: string[];
  tools: string[];
  liveUrl?: string;
  metrics?: ProjectMetric[];
  challenge?: string;
  solution?: string;
  designProcess?: string;
  developmentDetails?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAfterTitle?: string;
  testimonial?: ProjectTestimonial;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  services: ServiceItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period?: string;
  description: string;
  timeline: string;
  idealFor: string;
  deliverables: string[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
  projectHighlight?: string;
  metric?: string;
}

export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

