# Taraz Tea — Homepage

Pixel-accurate Next.js recreation of the Taraz Tea homepage reference.

## Stack
Next.js (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Lucide React

## Run locally
```bash
npm install
npm run dev
```

## Fonts
The layout ships with a safe system/Bengali font stack so it builds without
network access. For a closer visual match, add `next/font/google`'s
`Hind_Siliguri` (or `Noto_Sans_Bengali`) back into `app/layout.tsx` once you
have internet access during build — swap the `--font-sans` / `--font-bangla`
variables in `app/globals.css` accordingly.

## Structure
- `app/` — App Router entry (layout, page, global styles)
- `components/layout/` — Header, Footer
- `components/home/` — Hero, Categories, Products, Features, Affiliate banner, Testimonials
- `components/products/` — ProductCard
- `components/animations/` — GSAP context hook (handles cleanup + reduced-motion)
- `components/ui/` — Button, Container
- `lib/data.ts` — mock categories/products/testimonials/features (ready to swap for a real API)
