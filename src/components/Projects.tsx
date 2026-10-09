'use client';

import { useState } from 'react';
import { projectsData } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/types/portfolio';
import ProjectModal from '@/components/ProjectModal';
import {
  Code2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Brain,
  Layers,
  AlertCircle,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

const categories: ProjectCategory[] = [
  'All',
  'Data Analytics',
  'Machine Learning',
  'Deep Learning',
  'GenAI',
  'Agentic AI',
  'Full Stack',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.categories.includes(activeCategory);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Work &amp; Applied AI Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-mono">
              Production-oriented machine learning pipelines, quantitative analytics platforms, and advanced agentic systems.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.08] self-start md:self-auto">
            Showing{' '}
            <span className="text-sky-400 font-semibold">
              {filteredProjects.length}
            </span>{' '}
            of {projectsData.length} projects
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.categories.includes(category))
                    .length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-lg shadow-sky-500/25 scale-[1.02]'
                    : 'bg-[#0d1220]/80 text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isActive
                      ? 'bg-slate-950/30 text-slate-900'
                      : 'bg-white/[0.08] text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Large, Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl bg-[#0a0e19]/90 border border-white/[0.08] hover:border-sky-500/35 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/5 group relative backdrop-blur-md"
            >
              {/* Top Meta & Badges */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30 font-medium">
                        {project.badge}
                      </span>
                    )}
                    {project.isResearch && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        Research
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    {project.categories.join(' • ')}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Problem & Solution Mini Blocks */}
                <div className="space-y-3 mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs">
                    <span className="font-mono text-rose-400 font-semibold block mb-0.5">
                      Problem:
                    </span>
                    <span className="text-slate-300/90 leading-relaxed">
                      {project.problem}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs">
                    <span className="font-mono text-emerald-400 font-semibold block mb-0.5">
                      Solution:
                    </span>
                    <span className="text-slate-300/90 leading-relaxed">
                      {project.solution}
                    </span>
                  </div>
                </div>

                {/* Key Metric Highlight */}
                {project.resultsOrMetrics && (
                  <div className="mb-5 p-3 rounded-xl bg-sky-500/[0.07] border border-sky-500/25 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300 font-semibold">
                        Key Metric / Result
                      </div>
                      <p className="text-xs text-slate-200 mt-0.5 font-medium">
                        {project.resultsOrMetrics}
                      </p>
                    </div>
                  </div>
                )}

                {/* Key Features Preview (Top 3) */}
                <div className="mb-5 space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Key Features:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                    {project.keyFeatures.length > 3 && (
                      <li className="text-[11px] text-slate-500 font-mono pl-3.5">
                        +{project.keyFeatures.length - 3} more capabilities in architecture
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.08] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-slate-950 border border-sky-500/30 transition-all duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : null}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-mono hover:underline cursor-pointer"
                >
                  <span>Inspect System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
