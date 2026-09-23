# Architecture & Technology Stack

## 1. System Overview
The dammyux portfolio is built on a modern statically-optimized React architecture utilizing Next.js App Router, TypeScript, and Tailwind CSS.

```
┌──────────────────────────────────────────────────────────┐
│                   Next.js App Router                     │
├──────────────────────────────────────────────────────────┤
│  RootLayout (ThemeProvider, Preloader, Navbar, Footer)   │
├─────────────────┬───────────────────┬────────────────────┤
│  Core Pages     │ Dynamic Routes    │ SEO Endpoints      │
│  - /            │ - /work/[slug]    │ - /sitemap.xml     │
│  - /about       │                   │ - /robots.txt      │
│  - /services    │                   │                    │
│  - /work        │                   │                    │
│  - /case-studies│                   │                    │
│  - /contact     │                   │                    │
├─────────────────┴───────────────────┴────────────────────┤
│                     UI & 3D Layer                        │
│  - Framer Motion Transitions                             │
│  - Three.js Interactive Canvas (HeroScene)               │
│  - Lucide React Iconography                              │
├──────────────────────────────────────────────────────────┤
│                 Structured Data Layer                    │
│  - src/data/projects.ts                                  │
│  - src/data/services.ts                                  │
│  - src/data/pricing.ts                                   │
│  - src/data/testimonials.ts                              │
│  - src/data/siteConfig.ts                                │
└──────────────────────────────────────────────────────────┘
```

## 2. Key Technical Decisions
1. **App Router & Static Generation:** All static pages and dynamic `[slug]` pages are pre-rendered at build time with `generateStaticParams` for sub-second TTFB on Netlify / Vercel.
2. **Theme Management:** `next-themes` synchronizes user preferences across React state, DOM `.dark` class, and Three.js ambient lighting without flickering on load.
3. **Structured Content Layer:** All marketing data is isolated in TypeScript arrays with strong typing, decoupling content from page rendering logic.

