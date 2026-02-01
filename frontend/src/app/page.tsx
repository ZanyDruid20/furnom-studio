'use client';


import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProjectCard from '@/components/projects/ProjectCard';
import ScheduleCard from '@/components/Schedule/scheduleCard';
import SkillsSection from '@/components/skills/SkillsSection';
import { useProjects } from '@/hooks/useProjects';

export default function Home() {
  // ...existing code...

  const { projects, loading, error } = useProjects();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section id="hero" className="py-16 px-6 bg-gray-50" aria-label="Hero">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 text-left">Furnom Dam</h1>
          <p className="text-xl text-gray-700 mb-2 text-left">Computer Science Senior · University of Maryland, Baltimore County</p>
          <p className="text-lg text-gray-600 mb-8 text-left">Interested in Software Engineering and AI/ML, building applications that solve real-world problems through innovative technology.</p>
          <div className="flex flex-wrap gap-4 text-left">
            <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">View Projects</a>
            <a href="https://github.com/ZanyDruid20" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-100 transition flex items-center gap-2">
              {/* GitHub icon can be added here if desired */}
              GitHub
            </a>
            <a href="/myresume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-100 transition flex items-center gap-2">
              {/* Resume icon can be added here if desired */}
              Resume
            </a>
            <a href="#schedule" className="px-6 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-100 transition">Schedule a Chat</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white" aria-label="Featured projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-gray-900" role="heading" aria-level={2}>Projects</h2>
          {loading && (
            <div className="flex justify-center items-center py-12">
              <p className="text-gray-500">Loading projects...</p>
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          {!loading && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          )}
          {!loading && projects.length === 0 && !error && (
            <p className="text-gray-500 text-center">No projects found.</p>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-6 bg-gray-50" aria-label="Schedule a call">
        <div className="max-w-4xl mx-auto">
          <ScheduleCard bookingUrl="https://calendly.com/jlc10291/30min" />
        </div>
      </section>

      <Footer />
    </>
  );
}
