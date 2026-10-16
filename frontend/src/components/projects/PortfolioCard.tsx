import { ArrowUpRight, Github } from 'lucide-react';
import { Project, githubUrl } from '@/lib/projects';

export default function PortfolioCard({ project }: { project: Project }) {
    const repositoryUrl = githubUrl(project);

    return (
        <article className="project-card" aria-labelledby={`project-${project.slug}`}>
            <div className="card-body">
                <p className="eyebrow">{project.category}</p>
                <h3 id={`project-${project.slug}`}>{project.name}</h3>
                <p className="muted">{project.description}</p>
                <div className="tags" aria-label="Technology stack">
                    {project.stack.map(technology => <span key={technology}>{technology}</span>)}
                </div>
                <ul className="card-achievements" aria-label="Engineering achievements">
                    {project.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}
                </ul>
                {project.achievementNote && <p className="achievement-note">{project.achievementNote}</p>}
                {(repositoryUrl || project.liveDemoUrl) && (
                    <div className="card-actions">
                        {repositoryUrl && (
                            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub (opens in a new tab)`}>
                                <Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" />
                            </a>
                        )}
                        {project.liveDemoUrl && (
                            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo (opens in a new tab)`}>
                                Live demo <ArrowUpRight size={15} aria-hidden="true" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}
