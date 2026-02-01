import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          techStack={project.techStack}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
}
