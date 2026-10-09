'use client';

import { educationData } from '@/data/portfolioData';
import {
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  BookOpen,
} from 'lucide-react';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import TiltCard from '@/components/motion/TiltCard';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="space-y-2 mb-14 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Formal Engineering Education
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-mono">
              Rigorous undergraduate training in computer engineering, statistical modeling, and artificial intelligence principles.
            </p>
          </div>
        </RevealOnScroll>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll direction="up" delayMs={60}>
            <TiltCard maxTiltDeg={2} className="rounded-2xl">
              <div className="rounded-2xl bg-[#090d18]/90 border border-white/[0.08] hover:border-sky-500/30 p-7 sm:p-9 shadow-2xl relative overflow-hidden backdrop-blur-md">
                {/* Ambient subtle glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Degree & Details (7 cols) */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
                        Undergraduate Program
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight pt-2">
                        {educationData.degree}
                      </h3>
                      <div className="text-base text-slate-300 font-medium">
                        {educationData.institution}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-sky-400" />
                        <span>Graduation: {educationData.graduationYear}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        <span>{educationData.location}</span>
                      </div>
                    </div>

                    <div className="pt-3 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                        Academic Highlights
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {educationData.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: CGPA & Scorecard (5 cols) */}
                  <div className="md:col-span-5 flex flex-col justify-center items-center h-full">
                    <div className="w-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center space-y-2 shadow-inner">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <Award className="w-4 h-4" />
                        <span>Cumulative Grade Point Average</span>
                      </div>
                      <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                        {educationData.cgpa}
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono">
                        Scale: 10.0 • First Class with Distinction
                      </p>

                      <div className="pt-4 mt-2 border-t border-white/[0.06] text-[11px] text-slate-400 leading-normal">
                        AI &amp; Data Science Department • MMCOE Pune
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
