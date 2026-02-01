import { Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export default function ProjectCard({ name, description, techStack, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors"
          aria-label={`View ${name} on GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}