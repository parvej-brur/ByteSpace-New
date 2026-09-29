# ByteSpace New

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script          | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the development server    |
| `npm run build` | Production build                |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Lint with ESLint                |

## Structure

```
src/app/         Routing layer only — layouts, pages, route handlers
src/features/    Business domains (the only place logic lives)
src/components/  Shared UI used by 2+ features
src/providers/   Context providers mounted in the root layout
src/hooks/       Shared hooks
src/store/       Root store
src/lib/         Shared infrastructure (api, auth, utils, constants)
src/config/      App-wide configuration (env, site, navigation)
src/styles/      Global styles and fonts
src/types/       Global TypeScript types
public/          Static assets
tests/           Mirrors src/ exactly
```

Imports resolve from `./src` via the `@/*` alias, e.g. `import { Button } from "@/components/ui/button"`.
