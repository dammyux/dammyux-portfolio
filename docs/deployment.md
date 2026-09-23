# Deployment Guide (Netlify & Vercel)

## 1. Deploying to Netlify
1. Push your repository to GitHub.
2. Link your GitHub repository in the Netlify Dashboard.
3. Set build configuration:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Netlify Plugin:** `@netlify/plugin-nextjs` (detected automatically)
4. Add custom domain `dammyux.com` and enable automatic SSL certificate.

## 2. Deploying to Vercel
1. Import repository on [Vercel](https://vercel.com).
2. Framework Preset: **Next.js**.
3. Click **Deploy**.

