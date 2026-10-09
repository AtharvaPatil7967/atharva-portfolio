'use client';

import { researchData } from '@/data/portfolioData';
import {
  Brain,
  Layers,
  ShieldAlert,
  Calculator,
  MessageSquare,
  FileSearch,
  CheckCircle,
} from 'lucide-react';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import TiltCard from '@/components/motion/TiltCard';

const iconMap = [
  <Layers key="1" className="w-4 h-4 text-sky-400" />,
  <FileSearch key="2" className="w-4 h-4 text-emerald-400" />,
  <Calculator key="3" className="w-4 h-4 text-indigo-400" />,
  <MessageSquare key="4" className="w-4 h-4 text-amber-400" />,
];

export default function Research() {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="space-y-2 mb-14 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/[0.08] text-indigo-300 text-xs font-mono">
              <Brain className="w-3.5 h-3.5" />
              <span>ACADEMIC &amp; ADVANCED INQUIRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {researchData.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
              Investigating multi-agent autonomy, symbolic verification, and risk extraction for high-consequence quantitative domains.
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured Research Direction Showcase: FARE */}
        <RevealOnScroll direction="up" delayMs={60}>
          <div className="rounded-2xl bg-[#0a0f1d]/90 border border-indigo-500/20 p-6 sm:p-9 shadow-2xl relative overflow-hidden mb-12">
            {/* Top banner tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold tracking-wider">
                  RESEARCH INITIATIVE: {researchData.acronym}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  Financial Reasoning Lab
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span>Architectural Exploration</span>
              </div>
            </div>

            {/* Research Title */}
            <div className="max-w-3xl mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {researchData.fullName}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mt-3">
                {researchData.overview}
              </p>
            </div>

            {/* Core Problem Card */}
            <div className="mb-8 p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col sm:flex-row items-start gap-4">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold mb-1">
                  Core Problem Statement
                </div>
                <blockquote className="text-sm sm:text-base text-slate-200 font-medium italic">
                  &ldquo;{researchData.coreProblem}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* 4 Research Architecture Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {researchData.pillars.map((pillar, idx) => (
                <TiltCard key={pillar.title} maxTiltDeg={2} className="h-full rounded-xl">
                  <div className="h-full p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="p-2 rounded-lg bg-white/[0.04]">
                          {iconMap[idx]}
                        </div>
                        <h4 className="text-sm font-semibold text-white">
                          {pillar.title}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                      {pillar.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/[0.08] text-indigo-300 border border-indigo-500/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Clarification & Integrity Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>
                  Independent academic inquiry &amp; final-year system design (Pre-publication stage).
                </span>
              </div>
              <span className="text-[11px] text-slate-500">
                Focus: Mitigating Hallucinations in Financial AI
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Focus Areas Pills */}
        <RevealOnScroll direction="up" delayMs={120}>
          <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Broad Technical Research Interests:
            </div>
            <div className="flex flex-wrap gap-2">
              {researchData.focusAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0e1424] text-slate-300 border border-white/[0.08] hover:border-indigo-500/30 hover:text-white transition-all"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
