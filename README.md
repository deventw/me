# deven.tw

Personal site of Deven Kwong, full-stack developer in Hong Kong.

## Stack

- [TanStack Start](https://tanstack.com/start) (TanStack Router) + React 19 + Vite
- Tailwind CSS, Radix UI, Framer Motion
- Fully prerendered at build time: `/` (English) and `/zh/` (Traditional Chinese) are static HTML, plus `sitemap.xml`. No server needed.

## Development

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # static site → dist/client
bun run typecheck
```

## Content

- All copy and data: `src/config.tsx` (English and Chinese)
- UI labels: `messages/en.json`, `messages/zh.json`
- Page layout: `src/components/home.tsx`
- Routes: `src/routes/index.tsx` (`/`), `src/routes/zh/index.tsx` (`/zh/`)

## Deploying (Cloudflare Pages)

- Build command: `bun run build`
- Build output directory: `dist/client`
- `public/_headers` sets long-lived caching for hashed `/assets/*`
