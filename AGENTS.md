# AGENTS.md — Developer & AI Collaboration Guidelines

Welcome to the **dammyux** multidisciplinary portfolio codebase.

## 1. Project Philosophy
- **Identity:** dammyux represents a multidisciplinary creative studio spanning Web Design & Development, UI/UX Systems, Digital Automation, and Cinematic AI Video Production.
- **Principle:** *"Simple for the client. Sophisticated underneath."*
- **Design Formula:** 70% clean editorial design, 20% polished interaction, 10% experimental visual effects.

## 2. Technical Stack
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 with custom dark/light theme variables
- **Motion:** Framer Motion
- **3D & WebGL:** Three.js / React Three Fiber
- **Icons:** Lucide React
- **Theme:** `next-themes` (Dark mode default with zero-flash light mode switching)

## 3. Modifying Content
- All projects are structured under `src/data/projects.ts`. Adding a project requires creating a typed entry conforming to `Project` in `src/types/index.ts`. No application code modifications are needed.
- Services and pricing packages are stored in `src/data/services.ts` and `src/data/pricing.ts`.
- Global links, contact channels, and author information live in `src/data/siteConfig.ts`.

## 4. Architectural Rules
1. **Never break theme compatibility:** Every component must look intentional and polished in both Dark and Light modes.
2. **Performance First:** Heavy 3D or video media must be lazy-loaded with proper poster fallbacks and `prefers-reduced-motion` detection.
3. **Frictionless Contact:** No database forms; contact is conducted directly via WhatsApp, Calendly, Email, Fiverr, and Upwork.

