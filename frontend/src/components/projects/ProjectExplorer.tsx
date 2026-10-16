"use client";
import { useState } from 'react';
import { Search } from 'lucide-react';
import { projects, categories, Category, filterProjects } from '@/lib/projects';
import PortfolioCard from './PortfolioCard';
export default function ProjectExplorer() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState<Category>('All Projects');
    const filtered = filterProjects(query, category);
    return <><label className="search"><Search size={19}/><span className="sr-only">Search projects by name, technology, or topic</span><input type="search" placeholder="Search projects, technologies, or topics..." value={query} onChange={e => setQuery(e.target.value)}/></label>
 <div className="filters" aria-label="Project categories">{categories.map(c => <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div>
 <p className="result-count" role="status">{filtered.length} of {projects.length} projects</p>
 <div className="project-grid">{filtered.map(p => <PortfolioCard key={p.slug} project={p}/>)}</div>
 {!filtered.length && <div className="empty"><h2>No matching projects</h2><p>Try a different technology or choose another category.</p><button className="button" onClick={() => { setQuery(''); setCategory('All Projects'); }}>Clear filters</button></div>}</>;
}
