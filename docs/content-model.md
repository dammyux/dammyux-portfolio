# Content Model & Adding New Projects

## Project Data Schema
All projects conform to the `Project` interface in `src/types/index.ts`.

```typescript
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
```

## How to Add a New Project
1. Open `src/data/projects.ts`.
2. Append a new object with the required fields to the `projects` array.
3. Next.js will automatically generate `/work/[slug]` and include it in `sitemap.xml` upon build.

