# ByteSpace

A pixel-accurate implementation of the ByteSpace online-learning platform, built from a Figma design (1440px desktop frames, with responsive layouts inferred for smaller screens). It is a front-end only project: all content is typed static data, with no backend.

- **Live demo:** _add Vercel URL here_
- **Repository:** _add GitHub link here_

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components by default)
- [React 19](https://react.dev) and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first; design tokens live in `@theme` in `src/styles/globals.css`)
- `next/font` with local Satoshi, Clash Display and Poppins fonts
- ESLint, with architecture boundaries enforced by `eslint.config.mjs`

## Pages and routes

| Screen          | Route                              |
| --------------- | ---------------------------------- |
| Home            | `/`                                |
| Login           | `/login`                           |
| Register        | `/register`                        |
| Search          | `/courses`                         |
| Course details  | `/courses/[slug]`                  |
| Course lessons  | `/courses/[slug]/lessons`          |
| Course reviews  | `/courses/[slug]/reviews`          |
| Creator profile | `/creators/[slug]`                 |
| 404 Not Found   | any unknown URL (`app/not-found.tsx`) |

Sample data exists for the course `build-digital-asset` and the creator `purepearl-studio`.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script              | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the development server |
| `npm run build`     | Production build             |
| `npm run start`     | Serve the production build   |
| `npm run lint`      | Lint with ESLint             |
| `npm run typecheck` | Type-check with `tsc`        |

## Folder structure

```
src/
├── app/           Routing layer only: layouts, pages, not-found
├── features/      Business domains: landing, auth, courses, creators, not-found
├── components/    Shared UI used by 2+ features (layout, shared, ui)
├── lib/           Shared infrastructure and constants (courses, routes, footer links)
├── styles/        Global styles, design tokens and fonts
└── types/         Global TypeScript types
public/            Static assets: fonts, icons, images
```

Each feature owns its components, schemas and utils and exposes a single `index.ts`. A feature never imports another feature, and shared code moves to `components/` or `lib/`. Imports use the single `@/*` alias for `./src/*`.

## Git workflow

Work was done on separate `feature/*` branches created from `develop` and merged with `--no-ff`. `main` is the stable branch.
