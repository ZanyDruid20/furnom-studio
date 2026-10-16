import type { Metadata } from 'next';
import ProjectExplorer from '@/components/projects/ProjectExplorer';
export const metadata: Metadata = { title: 'Projects', description: 'Nine engineering projects spanning backend APIs, AI infrastructure, full-stack applications, and systems programming.' };
export default function ProjectsPage() { return <main id="main" className="shell page-main"><p className="eyebrow">THE PROJECT ARCHIVE / 09</p><h1>Ideas, engineered.</h1><p className="page-intro">From a single instruction to a distributed inference pipeline.<br />A closer look at the systems I have built and the decisions behind them.</p><ProjectExplorer /></main>; }
