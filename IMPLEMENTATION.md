# Portfolio implementation

## Current presentation

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, npm, Geist, Lucide, and Vercel Analytics are retained.
- The homepage shows four featured projects. `/projects` shows all nine with combined search and category filtering, result announcements, and a resettable empty state.
- Shared project cards contain a description, technology stack, two engineering achievements, relevant measurement caveats, and verified GitHub links. A live demo action appears only when a verified URL is supplied; SignalRetention uses the live URL supplied by the owner: https://signal-retention.vercel.app/.
- Dedicated project detail routes, case-study navigation, diagram previews, and their unused styling were removed after checking dependencies. The typed catalog now contains only listing content and external-link fields.
- The warm ivory/slate palette, responsive grid, hover/focus states, and reduced-motion support remain intact. The exact personal hero headline is preserved.
- Contact links use `dfurnom@gmail.com`. The existing resume, LinkedIn, GitHub, and Calendly links remain available.

## Content sources

Repository names and descriptions were previously checked against the project's GitHub READMEs. No new repository or live demo URLs were invented.

The inference throughput describes direct vLLM serving on an external NVIDIA A40, not end-to-end RAG throughput. SignalRetention's slow-upload challenge is represented directly on its card: bulk processing and set-based queries. Other author-reported metrics retain their caveats, including the scheduler's lower-throughput trade-off. Accessibility Map credits the backend team context and describes nodes, rather than routes.

## Preserved architecture

The curated frontend catalog renders without backend availability. Existing Next.js API routes, fetching hooks, FastAPI GitHub services, Supabase synchronization, signed webhooks, health checks, backend warm-up route, deployment configuration, and dependencies remain unchanged. Production backend/database operations were not exercised.

## Verification

- ESLint, standalone TypeScript check, seven catalog/card tests, and the production build passed.
- Generated route manifest includes `/projects` and excludes the removed detail route.
- Cleared stale generated Next.js development types after removing the route; source configuration was unchanged.

The catalog tests cover nine unique projects, the requested four featured projects, search/category composition, one or two achievements per card, inference/scheduler caveats, rendered GitHub actions, absence of internal detail-page links, and omission of unavailable external actions. A synthetic demo fixture verifies the optional demo branch without adding a demo to the actual catalog.

Browser visual/mobile QA remains unverified because no connected browser was available in this session. Changes are local; no commit, push, or deployment was performed.
