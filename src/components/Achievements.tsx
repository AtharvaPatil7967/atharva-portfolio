'use client';

import { achievementsData } from '@/data/portfolioData';
import {
  Trophy,
  Medal,
  Calendar,
  Building,
  Sparkles,
} from 'lucide-react';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import TiltCard from '@/components/motion/TiltCard';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="space-y-2 mb-14 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>HONORS &amp; COMPETITIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Competitive Recognition &amp; Awards
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-mono">
              Hackathons, analytics competitions, and technical challenges demonstrating applied execution under competitive constraints.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline / Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => {
            const isFirstPlace = item.position.includes('1st');

            return (
              <RevealOnScroll key={item.id} direction="up" delayMs={index * 80}>
                <TiltCard maxTiltDeg={2.5} className="h-full rounded-2xl">
                  <div
                    className="relative h-full rounded-2xl bg-[#090d18]/90 border border-white/[0.08] hover:border-amber-400/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 group"
                  >
                    {/* Accent corner glow */}
                    <div
                      className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl pointer-events-none ${
                        isFirstPlace ? 'bg-amber-500/10' : 'bg-sky-500/10'
                      }`}
                    />

                    <div>
                      {/* Top Bar with Badge & Position */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-md transition-transform group-hover:scale-105 ${
                              isFirstPlace
                                ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30 shadow-amber-500/10'
                                : 'bg-sky-400/15 text-sky-300 border border-sky-400/30 shadow-sky-500/10'
                            }`}
                          >
                            {isFirstPlace ? (
                              <Trophy className="w-5 h-5 text-amber-400" />
                            ) : (
                              <Medal className="w-5 h-5 text-sky-300" />
                            )}
                          </div>
                          <div>
                            <div
                              className={`text-sm font-bold font-mono tracking-tight ${
                                isFirstPlace ? 'text-amber-300' : 'text-sky-300'
                              }`}
                            >
                              {item.position}
                            </div>
                            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                              {item.highlight || 'Recognized'}
                            </div>
                          </div>
                        </div>

                        {item.date ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>{item.date}</span>
                          </span>
                        ) : (
                          <span className="text-[11px] font-mono text-slate-500 italic">
                            Competition Entry
                          </span>
                        )}
                      </div>

                      {/* Competition Title */}
                      <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>

                      {/* Host Institution */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
                        <Building className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.organizer}</span>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Footer validation mark */}
                    <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-400/80" />
                        <span>Verified Competition Result</span>
                      </span>
                      <span>Rank #{item.position.replace(/[^0-9]/g, '')}</span>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
