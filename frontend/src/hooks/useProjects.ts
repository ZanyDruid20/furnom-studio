import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  techStack?: string[];
}

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
  refetch: () => void;
}

export const useProjects = (): UseProjectsReturn => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cacheRef = useRef<{ data: Project[]; timestamp: number } | null>(null);
  const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes - aggressive caching

  useEffect(() => {
    const loadProjects = async (skipCache = false) => {
      try {
        // Check cache first
        if (!skipCache && cacheRef.current) {
          const now = Date.now();
          if (now - cacheRef.current.timestamp < CACHE_DURATION) {
            setProjects(cacheRef.current.data);
            setLoading(false);
            return;
          }
        }

        setLoading(true);
        const response = await axios.get('/api/projects', {
          timeout: 15000, // Longer timeout to handle cold starts
        });
        
        const repos = response.data.repos || [];
        
        // Transform GitHub repos to match ProjectCard interface
        const transformed = repos.map((repo: GitHubRepo) => ({
          id: repo.id?.toString() || '',
          name: repo.name,
          description: repo.description || 'No description provided',
          techStack: Array.isArray(repo.techStack) && repo.techStack.length > 0
            ? repo.techStack
            : (repo.language ? [repo.language] : []),
          githubUrl: repo.html_url,
        }));
        
        setProjects(transformed);
        // Update cache
        cacheRef.current = {
          data: transformed,
          timestamp: Date.now(),
        };
        setError(null);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [CACHE_DURATION]);

  const handleRefetch = () => {
    // Define refetch function outside useEffect to use in the return
    const refetchProjects = async (skipCache = false) => {
      try {
        if (!skipCache && cacheRef.current) {
          const now = Date.now();
          if (now - cacheRef.current.timestamp < CACHE_DURATION) {
            setProjects(cacheRef.current.data);
            setLoading(false);
            return;
          }
        }

        setLoading(true);
        const response = await axios.get('/api/projects', {
          timeout: 15000, // Longer timeout to handle cold starts
        });
        
        const repos = response.data.repos || [];
        
        const transformed = repos.map((repo: GitHubRepo) => ({
          id: repo.id?.toString() || '',
          name: repo.name,
          description: repo.description || 'No description provided',
          techStack: Array.isArray(repo.techStack) && repo.techStack.length > 0
            ? repo.techStack
            : (repo.language ? [repo.language] : []),
          githubUrl: repo.html_url,
        }));
        
        setProjects(transformed);
        cacheRef.current = {
          data: transformed,
          timestamp: Date.now(),
        };
        setError(null);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    refetchProjects(true);
  };

  return { 
    projects, 
    loading, 
    error,
    refetch: handleRefetch,
  };
};
