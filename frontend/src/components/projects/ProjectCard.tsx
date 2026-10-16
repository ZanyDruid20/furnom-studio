import { Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export default function ProjectCard({ name, description, techStack, githubUrl }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-line bg-panel p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-on-warm transition-colors hover:text-foreground"
          aria-label={`View ${name} on GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      
      <p className="mb-4 leading-relaxed text-muted-on-warm">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="rounded-full bg-hover px-3 py-1 text-sm font-medium text-foreground transition-colors group-hover:bg-hover group-hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}