# Portfolio redesign

## Architecture audit

The existing frontend uses Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, npm, Geist fonts, Lucide, and Vercel Analytics. The separate Python/FastAPI backend fetches GitHub repositories, supports Supabase synchronization, and exposes signed webhook and health endpoints. Next.js retains its project proxy, health route, and backend warm-up route. There were no existing automated test scripts.

The original homepage loaded project cards from the backend. The redesigned pages render a curated typed catalog without requiring the backend to be available. Existing API routes, fetching hooks, backend services, deployment configuration, dependencies, resume PDF, email, social links, and Calendly booking URL remain available. Backend connectivity and database operations were not exercised against production.

## Implementation

- Dark charcoal design with blue-violet accents, Geist typography, responsive cards and system illustrations made with HTML/CSS.
- Homepage: four featured projects, about, six skill groups, education, contact, and scheduling.
- `/projects`: exactly nine projects, combined category and text filtering, result announcements, and resettable empty state.
- `/projects/[slug]`: nine statically generated case studies with overview, problem, conceptual architecture, contributions, design decisions, implementation, challenges, results, lessons, and related work.
- Shared sticky navigation, mobile disclosure, footer, skip link, focus indicators, reduced-motion support, metadata, and custom not-found page.
- Central content: `frontend/src/lib/projects.ts`. Shared presentation: `PortfolioCard`. Client interaction: `ProjectExplorer`.
- `npm test` checks catalog integrity, required featured projects, filtering combinations, case-study content, and benchmark caveats.

## Content provenance and remaining confirmation

Project descriptions were checked against the GitHub READMEs for distributed-rag-inference, SignalRetention, RL-cluster-scheduler, expense-api, GEPO, Studivio, accessibility-map-team3, and Chip8Emulator. Portfolio technologies were checked locally.

The inference project uses the supplied title **Distributed AI Inference System**. Its 2,007 tokens/sec, 20.31 requests/sec, 1.052s p95, and 100/100 successes describe direct vLLM serving at concurrency 20, not full RAG throughput. The external A40/vLLM server was separate from GKE. The README reports 154 passing tests and deletion of the validation cluster.

The SignalRetention timing improvement, EXPENSE-API load-test volume, scheduler 4.4% cost result, GEPO cache-hit figure, and Studivio size limits come from the author's brief; public READMEs do not independently substantiate all of these numbers. They are marked author-reported. The scheduler case study includes its documented lower-throughput trade-off. Accessibility Map describes 300+ nodes, rather than incorrectly presenting them as routes, and credits the team context.

Missing personal retrospectives and specific challenges have explicit pending-confirmation text. No live demo URLs were fabricated. No active production hosting is asserted. The existing resume file was preserved without changing its contents.

## Verification

- ESLint and TypeScript checks passed.
- Five catalog/filter tests passed.
- Production build passed and generated all nine case studies. The existing GitHub proxy logged an upstream timeout during prerendering; the build completed successfully and catalog pages are independent of that service.
- HTTP 200 verified for the homepage, project archive, nine case studies, and resume.
- Browser tool returned no connected browsers; visual, interactive mobile, and keyboard browser QA remain unverified.
- Local changes only; no commit, push, or hosting change was performed.
