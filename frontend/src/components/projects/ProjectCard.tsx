import { Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export default function ProjectCard({ name, description, techStack, githubUrl }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-950">{name}</h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition-colors hover:text-slate-950"
          aria-label={`View ${name} on GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      
      <p className="mb-4 leading-relaxed text-slate-600">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}