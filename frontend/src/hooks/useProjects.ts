interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
}
import { useState, useEffect } from 'react';
import { fetchRepos } from '@/lib/github';



interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export const useProjects = (): UseProjectsReturn => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const repos = await fetchRepos();
        
        // Transform GitHub repos to match ProjectCard interface
        const transformed = repos.map((repo: GitHubRepo & { techStack?: string[] }) => ({
          id: repo.id?.toString() || '',
          name: repo.name,
          description: repo.description || 'No description provided',
          techStack: Array.isArray(repo.techStack) && repo.techStack.length > 0
            ? repo.techStack
            : (repo.language ? [repo.language] : []),
          githubUrl: repo.html_url,
        }));
        
        setProjects(transformed);
        setError(null);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};
