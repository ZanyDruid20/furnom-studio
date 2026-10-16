import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project, githubUrl } from '@/lib/projects';
export default function PortfolioCard({ project, index = 0 }: {
    project: Project;
    index?: number;
}) {
    return <article className="project-card">
  <Link href={`/projects/${project.slug}`} className={`project-art art-${index % 4}`} aria-label={`Read ${project.name} case study`}>
   <span className="art-label">SYSTEM / {String(index + 1).padStart(2, '0')}</span>
   <div className="art-flow" aria-hidden="true"><span>{project.architecture[0]}</span><i aria-hidden="true">&rarr;</i><span>{project.architecture[1]}</span><i aria-hidden="true">&rarr;</i><span>{project.architecture[project.architecture.length - 1]}</span></div>
   <span className="art-caption">CONCEPTUAL SYSTEM OVERVIEW</span><ArrowUpRight className="art-arrow" size={20}/>
  </Link>
  <div className="card-body"><p className="eyebrow">{project.category}</p><h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3><p className="muted">{project.description}</p>
  <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
  <div className="card-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>{project.metricNote && <p className="metric-note">{project.metricNote}</p>}
  <div className="card-actions"><Link href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={15}/></Link><a href={githubUrl(project)} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}><Github size={18}/></a></div></div>
 </article>;
}
