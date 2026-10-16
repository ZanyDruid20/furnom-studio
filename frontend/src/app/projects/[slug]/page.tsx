import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { projects, githubUrl } from '@/lib/projects';
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> { const { slug } = await params; const p = projects.find(p => p.slug === slug); return p ? { title: p.name, description: p.description, openGraph: { title: p.name, description: p.description } } : { title: 'Project not found' }; }
export default async function CaseStudy({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const p = projects.find(p => p.slug === slug);
    if (!p)
        notFound();
    const related = projects.filter(q => q.slug !== p.slug && q.filters.some(f => p.filters.includes(f))).slice(0, 2);
    return <main id="main" className="shell page-main case-study"><Link className="text-link" href="/projects"><ArrowLeft size={16}/> Back to projects</Link><header className="case-header"><p className="eyebrow">{p.category}</p><h1>{p.name}</h1><p className="page-intro">{p.description}</p><div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div><a className="button" href={githubUrl(p)} target="_blank" rel="noopener noreferrer"><Github size={17}/> View repository <ArrowUpRight size={16}/></a></header>
    <div className="case-layout"><aside><p className="eyebrow">IN THIS CASE STUDY</p><nav aria-label="Case study sections">{['Overview', 'Problem', 'Architecture', 'Contributions', 'Design decisions', 'Implementation', 'Challenges', 'Results', 'Lessons learned'].map((s, i) => <a key={s} href={`#part-${i}`}>{s}</a>)}</nav></aside><div className="case-content">
    <section id="part-0"><p className="eyebrow">01 / OVERVIEW</p><h2>{p.metric} <span className="muted">{p.metricLabel}</span></h2>{p.metricNote && <p className="muted">{p.metricNote}</p>}<p>{p.description}</p></section>
    <section id="part-1"><h2>The problem</h2><p>{p.problem}</p></section>
    <section id="part-2"><h2>Architecture & stack</h2><p className="muted">Conceptual components; the sequence below is an overview, not a deployment diagram.</p><ol className="architecture">{p.architecture.map((s, i) => <li key={s}><span>0{i + 1}</span>{s}</li>)}</ol><p>{p.stack.join(' / ')}</p></section>
    <section id="part-3"><h2>Engineering contributions</h2><ul>{p.contributions.map(s => <li key={s}>{s}</li>)}</ul></section>
    <section id="part-4"><h2>Key design decisions</h2><p>{p.decisions}</p></section>
    <section id="part-5"><h2>Implementation highlights</h2><p>{p.contributions[0]}</p><a className="text-link" href={githubUrl(p)} target="_blank" rel="noopener noreferrer">Explore the implementation on GitHub <ArrowUpRight size={15}/></a></section>
    <section id="part-6"><h2>Challenges & solutions</h2><p>{p.challenge || 'Pending author confirmation: a specific implementation challenge and the solution used have not yet been documented for this case study.'}</p></section>
    <section id="part-7"><h2>Performance & results</h2><ul>{p.results.map(s => <li key={s}>{s}</li>)}</ul><p className="source-note">Sources: project README and the author-provided portfolio brief. Repository test and benchmark results describe the project reported validation runs; they were not rerun as part of this portfolio redesign.</p></section>
    <section id="part-8"><h2>Lessons learned</h2><p>{p.lesson || 'Pending author confirmation: a personal retrospective on the engineering trade-offs and what to change in a future iteration.'}</p></section>
    </div></div><section className="related"><p className="eyebrow">CONTINUE EXPLORING</p><h2>Related work</h2>{related.map(q => <Link key={q.slug} href={`/projects/${q.slug}`}>{q.name}<ArrowUpRight size={18}/></Link>)}</section></main>;
}
