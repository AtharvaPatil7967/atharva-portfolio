'use client';

import { useEffect } from 'react';
import { Project } from '@/types/portfolio';
import {
  X,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0b101c] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden text-left transform transition-all duration-300 scale-100 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12 space-y-2 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {project.badge && (
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-sky-500/15 text-sky-400 border border-sky-500/30">
                {project.badge}
              </span>
            )}
            {project.isResearch && (
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                Research Project
              </span>
            )}
            <span className="text-xs font-mono text-slate-400">
              {project.categories.join(' • ')}
            </span>
          </div>

          <h3
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {project.title}
          </h3>
          <p className="text-sm font-mono text-sky-300">{project.subtitle}</p>
        </div>

        {/* Overview Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
          {project.description}
        </p>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-rose-500/[0.03] border border-rose-500/15 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>THE CHALLENGE</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/15 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE SOLUTION</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Metrics callout if available */}
        {project.resultsOrMetrics && (
          <div className="p-4 rounded-xl bg-sky-500/[0.06] border border-sky-500/25 mb-6 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold mb-0.5">
                Key Result / Validated Metric
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {project.resultsOrMetrics}
              </p>
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            Architecture &amp; Core Capabilities
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feature, i) => (
              <li
                key={i}
                className="text-xs text-slate-300 flex items-start gap-2.5 leading-normal"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Badges */}
        <div className="mb-8 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            Technologies Applied
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-medium border border-white/[0.12] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold shadow-md shadow-sky-500/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-slate-500 italic">
                (Demo configured via local CLI / Streamlit / Docker)
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white px-3 py-1.5"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
