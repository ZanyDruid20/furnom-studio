'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectSkeleton from '@/components/projects/ProjectSkeleton';
import ScheduleCard from '@/components/Schedule/scheduleCard';
import SkillsSection from '@/components/skills/SkillsSection';
import { useProjects } from '@/hooks/useProjects';

export default function Home() {
  // Preload projects in the background
  useEffect(() => {
    // Warm up the API cache
    fetch('/api/projects').catch(() => {});
  }, []);

  const { projects, loading, error, refetch } = useProjects();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-28" aria-label="Hero">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(15,118,110,0.10),_transparent_28%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              Open to software engineering roles and internships
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Furnom Dam
            </h1>
            <p className="mt-4 text-xl text-slate-700 sm:text-2xl">
              Computer Science Senior · University of Maryland, Baltimore County
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I build practical software with a bias toward clean UX, reliable systems, and AI/ML workflows that solve real problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800">
                View Projects
              </a>
              <a href="/myresume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white">
                Resume
              </a>
              <a href="#schedule" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white/80">
                Schedule a Chat
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-slate-200">Next.js</span>
              <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-slate-200">AI / ML</span>
              <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-slate-200">Backend APIs</span>
              <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-slate-200">Systems Thinking</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-slate-900/10 via-white/80 to-amber-100/60 blur-2xl" />
            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-lg shadow-slate-950/10">
                  <p className="text-sm text-slate-300">Focus</p>
                  <p className="mt-2 text-xl font-semibold">Shipping polished full-stack products</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Current stack</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">Next.js, FastAPI, Docker</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Strength</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">Fast iteration with clear structure</p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-200">
                  <p className="text-sm text-amber-700">Available for</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">Internships, SWE roles, collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20" aria-label="Featured projects">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:p-10">
          <h2 className="mb-12 text-slate-950" role="heading" aria-level={2}>Projects</h2>
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <ProjectSkeleton key={i} />
              ))}
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700">{error}</p>
              <button 
                onClick={refetch}
                className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Try Again
              </button>
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
            <p className="text-center text-slate-500">No projects found.</p>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Schedule Section */}
      <section id="schedule" className="px-6 py-20" aria-label="Schedule a call">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/60 bg-slate-950 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:px-10">
          <ScheduleCard bookingUrl="https://calendly.com/jlc10291/30min" />
        </div>
      </section>

      <Footer />
    </>
  );
}
