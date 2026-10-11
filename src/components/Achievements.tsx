'use client';

import { useState } from 'react';
import { achievementsData } from '@/data/portfolioData';
import { Achievement, AchievementCategory } from '@/types/portfolio';
import {
  Trophy,
  Medal,
  Briefcase,
  Code2,
  Calendar,
  Building2,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Award,
} from 'lucide-react';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import TiltCard from '@/components/motion/TiltCard';

const categories: ('All' | AchievementCategory)[] = [
  'All',
  'Awards & Project Competitions',
  'Industry Experience',
  'Hackathons & Participation',
];

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState<'All' | AchievementCategory>('All');

  const filteredItems = achievementsData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const competitionItems = achievementsData.filter(
    (item) => item.category === 'Awards & Project Competitions'
  );
  const experienceItems = achievementsData.filter(
    (item) => item.category === 'Industry Experience'
  );
  const hackathonItems = achievementsData.filter(
    (item) => item.category === 'Hackathons & Participation'
  );

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>EXPERIENCE &amp; HONORS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Achievements, Competitions &amp; Experience
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
                Recognizing project innovation, competitive problem-solving, hands-on experience, and continuous learning.
              </p>
            </div>

            {/* Quick summary badge */}
            <div className="text-xs font-mono text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.08] self-start md:self-auto flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                <strong className="text-white font-semibold">{achievementsData.length}</strong> Verified Records
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Category Filter Pills */}
        <RevealOnScroll direction="up" delayMs={80}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => {
              const count =
                category === 'All'
                  ? achievementsData.length
                  : achievementsData.filter((i) => i.category === category).length;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 font-semibold shadow-lg shadow-sky-500/25 scale-[1.02]'
                      : 'bg-[#0d1220]/80 text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                  aria-pressed={isActive}
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
        </RevealOnScroll>

        {/* Categorized Content */}
        {activeCategory === 'All' ? (
          <div className="space-y-14">
            {/* 1. Awards & Project Competitions (Highest Emphasis) */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.06]">
                <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    Awards &amp; Project Competitions
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Podium finishes in competitive technical and project evaluations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {competitionItems.map((item, idx) => (
                  <CompetitionCard key={item.id} item={item} index={idx} />
                ))}
              </div>
            </div>

            {/* 2. Industry Experience (Second Emphasis) */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.06]">
                <div className="p-1.5 rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    Industry Experience
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Professional internship applying AI/ML and engineering workflow automation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {experienceItems.map((item, idx) => (
                  <ExperienceCard key={item.id} item={item} index={idx} />
                ))}
              </div>
            </div>

            {/* 3. Hackathons & Participation (Supporting Entries) */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.06]">
                <div className="p-1.5 rounded-lg bg-sky-400/10 text-sky-400 border border-sky-400/20">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    Hackathons &amp; Participation
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Competitive coding hackathons and multi-day innovation challenges
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hackathonItems.map((item, idx) => (
                  <HackathonCard key={item.id} item={item} index={idx} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered View */
          <div
            className={`grid gap-6 ${
              activeCategory === 'Industry Experience'
                ? 'grid-cols-1'
                : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
            {filteredItems.map((item, idx) => {
              if (item.category === 'Awards & Project Competitions') {
                return <CompetitionCard key={item.id} item={item} index={idx} />;
              }
              if (item.category === 'Industry Experience') {
                return <ExperienceCard key={item.id} item={item} index={idx} />;
              }
              return <HackathonCard key={item.id} item={item} index={idx} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ==========================================================================
   1. COMPETITION CARD (Highest Emphasis)
   ========================================================================== */
function CompetitionCard({ item, index }: { item: Achievement; index: number }) {
  const isSecondPlace = item.awardOrStatus === '2nd Place';

  return (
    <RevealOnScroll direction="up" delayMs={index * 80}>
      <TiltCard maxTiltDeg={2.5} className="h-full rounded-2xl">
        <article className="relative h-full rounded-2xl bg-[#090d18]/90 border border-white/[0.09] hover:border-amber-400/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group backdrop-blur-md">
          {/* Subtle warm corner glow */}
          <div
            aria-hidden="true"
            className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 ${
              isSecondPlace
                ? 'bg-amber-500/[0.12] group-hover:bg-amber-500/[0.18]'
                : 'bg-indigo-500/[0.10] group-hover:bg-indigo-500/[0.15]'
            }`}
          />

          <div>
            {/* Header: Award Badge & Date */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shadow-md transition-transform group-hover:scale-105 ${
                    isSecondPlace
                      ? 'bg-gradient-to-br from-amber-400/20 to-amber-500/10 text-amber-300 border border-amber-400/35 shadow-amber-500/10'
                      : 'bg-gradient-to-br from-sky-400/20 to-indigo-500/10 text-sky-300 border border-sky-400/35 shadow-sky-500/10'
                  }`}
                >
                  {isSecondPlace ? (
                    <Trophy className="w-5 h-5 text-amber-400" aria-hidden="true" />
                  ) : (
                    <Medal className="w-5 h-5 text-sky-300" aria-hidden="true" />
                  )}
                </div>

                <div>
                  <div
                    className={`text-base font-bold font-mono tracking-tight ${
                      isSecondPlace ? 'text-amber-300' : 'text-sky-300'
                    }`}
                  >
                    {item.awardOrStatus}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.statusBadge || 'Project Competition'}
                  </div>
                </div>
              </div>

              {item.date && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08]">
                  <Calendar className="w-3 h-3 text-slate-400" aria-hidden="true" />
                  <span>{item.date}</span>
                </span>
              )}
            </div>

            {/* Event Name */}
            <h4 className="text-xl font-bold text-white tracking-tight mb-1.5 group-hover:text-amber-200 transition-colors">
              {item.title}
            </h4>

            {/* Organizer */}
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
              <Building2 className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              <span>{item.organizer}</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Associated Project Direct Navigation Pill */}
            {item.associatedProject && (
              <div className="mb-4">
                <a
                  href={`#${item.associatedProject.projectId}`}
                  className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl bg-sky-500/10 text-sky-300 hover:text-white border border-sky-500/25 hover:border-sky-500/50 hover:bg-sky-500/20 transition-all duration-200 shadow-sm group/btn"
                  title={`View ${item.associatedProject.name} in Projects Showcase`}
                >
                  <Layers className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                  <span>Project: <strong className="font-semibold text-white">{item.associatedProject.name}</strong></span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>

          {/* Card Footer: Verified Result */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" aria-hidden="true" />
              <span>Project Competition Podium</span>
            </span>
            <span className="text-slate-400 font-semibold">{item.awardOrStatus}</span>
          </div>
        </article>
      </TiltCard>
    </RevealOnScroll>
  );
}

/* ==========================================================================
   2. EXPERIENCE CARD (Second Emphasis)
   ========================================================================== */
function ExperienceCard({ item, index }: { item: Achievement; index: number }) {
  return (
    <RevealOnScroll direction="up" delayMs={index * 80}>
      <TiltCard maxTiltDeg={1.8} className="h-full rounded-2xl">
        <article className="relative h-full rounded-2xl bg-[#090d18]/90 border border-white/[0.09] hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 group backdrop-blur-md">
          {/* Emerald accent glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/[0.08] rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/[0.12] transition-opacity duration-300"
          />

          <div>
            {/* Top Bar: Role Status & Duration */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/10 text-emerald-400 border border-emerald-400/35 flex items-center justify-center font-bold text-sm shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {item.awardOrStatus}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 group-hover:text-emerald-200 transition-colors">
                    {item.role || item.title}
                  </h4>
                </div>
              </div>

              {item.duration && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>{item.duration}</span>
                </span>
              )}
            </div>

            {/* Organization info */}
            <div className="flex items-center gap-2 text-sm font-mono text-slate-300 mb-5">
              <Building2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span className="font-semibold text-white">{item.organizer}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 text-xs">CAD Automation &amp; AI Integration</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-4xl">
              {item.description}
            </p>

            {/* Technologies & Focus Areas */}
            {item.technologies && item.technologies.length > 0 && (
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Core Technologies &amp; Workflow Competencies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-slate-200 border border-white/[0.08] hover:border-emerald-500/35 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer validation mark */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>Two-Month Engineering Internship</span>
            </span>
            <span className="text-slate-400">5 Jan 2026 – 5 Mar 2026</span>
          </div>
        </article>
      </TiltCard>
    </RevealOnScroll>
  );
}

/* ==========================================================================
   3. HACKATHON CARD (Supporting Entries)
   ========================================================================== */
function HackathonCard({ item, index }: { item: Achievement; index: number }) {
  return (
    <RevealOnScroll direction="up" delayMs={index * 80}>
      <TiltCard maxTiltDeg={2} className="h-full rounded-2xl">
        <article className="relative h-full rounded-2xl bg-[#090d18]/90 border border-white/[0.08] hover:border-sky-500/35 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 group backdrop-blur-md">
          {/* Subtle cyan corner glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-28 h-28 bg-sky-500/[0.06] rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/[0.10] transition-opacity duration-300"
          />

          <div>
            {/* Header: Status & Dates */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/25 flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5 text-sky-400" aria-hidden="true" />
                </div>
                <div>
                  <span className="inline-block text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    {item.awardOrStatus}
                  </span>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    {item.statusBadge || 'Hackathon Participation'}
                  </div>
                </div>
              </div>

              {item.date && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                  <Calendar className="w-3 h-3 text-slate-400" aria-hidden="true" />
                  <span>{item.date}</span>
                </span>
              )}
            </div>

            {/* Event Name */}
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
              {item.title}
            </h4>

            {/* Institution / Venue info */}
            <div className="space-y-1 mb-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <span>{item.organizer}</span>
              </div>
              {item.venue && (
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-sky-400/80" aria-hidden="true" />
                  <span>{item.venue}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          {/* Footer validation mark */}
          <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-sky-400" aria-hidden="true" />
              <span>Competitive Hackathon</span>
            </span>
            <span className="text-slate-400">Participant</span>
          </div>
        </article>
      </TiltCard>
    </RevealOnScroll>
  );
}
