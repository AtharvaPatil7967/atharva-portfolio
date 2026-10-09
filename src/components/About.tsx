'use client';

import { profileData } from '@/data/portfolioData';
import {
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  Sparkles,
  Database,
  BrainCircuit,
  Bot,
  Layers,
  Check,
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Systems from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              Data &amp; Intelligence
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            Bridging analytical data exploration with modern machine learning and autonomous agent architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              {profileData.detailedBio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competency Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-[#0b101c]/80 border border-white/[0.08] hover:border-sky-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Data Analytics
                </h3>
                <p className="text-xs text-slate-400 leading-normal">
                  RFM segmentation, exploratory statistics, and interactive visualization dashboards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b101c]/80 border border-white/[0.08] hover:border-indigo-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Predictive ML
                </h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Time-series 28-day price forecasting, clustering, and convolutional vision models.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b101c]/80 border border-white/[0.08] hover:border-emerald-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Bot className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  GenAI &amp; Agents
                </h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Semantic RAG architectures, Multi-Agent systems, and financial risk extraction.
                </p>
              </div>
            </div>
          </div>

          {/* Recruiter Information Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#090e1a]/90 border border-white/[0.1] p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  Academic &amp; Profile Summary
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Data
                </span>
              </div>

              <dl className="space-y-4 text-xs">
                {/* Degree */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.03] text-sky-400 border border-white/[0.06] mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <dt className="text-slate-400 font-mono">Degree Program</dt>
                    <dd className="text-white font-medium text-sm mt-0.5">
                      {profileData.degree}
                    </dd>
                    <dd className="text-slate-400 text-xs mt-0.5">
                      {profileData.college}
                    </dd>
                  </div>
                </div>

                {/* Graduation & CGPA */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <dt className="text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Graduation
                    </dt>
                    <dd className="text-white font-bold text-base font-mono">
                      {profileData.graduationYear}
                    </dd>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <dt className="text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      CGPA
                    </dt>
                    <dd className="text-emerald-400 font-bold text-base font-mono">
                      {profileData.cgpa}
                    </dd>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="p-2 rounded-lg bg-white/[0.03] text-indigo-400 border border-white/[0.06] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <dt className="text-slate-400 font-mono">Location</dt>
                    <dd className="text-white font-medium text-sm mt-0.5">
                      {profileData.location}
                    </dd>
                  </div>
                </div>

                {/* Primary Interests */}
                <div className="pt-2">
                  <dt className="text-slate-400 font-mono mb-2">
                    Primary Career Interests
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {profileData.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 text-xs border border-white/[0.08] hover:border-sky-500/30 transition-colors"
                      >
                        {interest}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
