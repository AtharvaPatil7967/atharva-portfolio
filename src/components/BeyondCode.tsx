'use client';

import Image from 'next/image';
import { beyondCodeData } from '@/data/portfolioData';
import {
  BookOpen,
  Compass,
  ArrowRight,
  Sparkles,
  Flame,
  CheckCircle2,
  TrendingUp,
  Activity,
  Quote,
  Target,
} from 'lucide-react';
import { StravaIcon } from '@/components/icons/BrandIcons';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import TiltCard from '@/components/motion/TiltCard';
import MagneticButton from '@/components/motion/MagneticButton';

export default function BeyondCode() {
  const { reading, running, mindset, themes } = beyondCodeData;

  return (
    <section
      id="beyond-code"
      className="py-24 relative overflow-hidden bg-white/[0.01] scroll-mt-20"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="space-y-4 mb-16 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/[0.08] text-amber-300 text-xs font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>PERSONAL DIMENSIONS &amp; DISCIPLINE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {beyondCodeData.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl">
              {beyondCodeData.subtitle}
            </p>

            {/* Intro Quote Callout */}
            <div className="mt-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] max-w-3xl relative backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-400/80 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  {beyondCodeData.intro}
                </p>
              </div>
            </div>

            {/* Thematic Storytelling Progression: Read -> Run -> Rise Again */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              {themes.map((theme, i) => (
                <div key={theme.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        theme.accent === 'amber'
                          ? 'bg-amber-400 shadow-sm shadow-amber-400/50'
                          : theme.accent === 'orange'
                          ? 'bg-orange-400 shadow-sm shadow-orange-400/50'
                          : 'bg-emerald-400 shadow-sm shadow-emerald-400/50'
                      }`}
                    />
                    <span className="font-semibold text-white">{theme.label}</span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="text-slate-400 hidden sm:inline text-[11px]">
                      {theme.subtitle}
                    </span>
                  </div>
                  {i < themes.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="space-y-20">
          {/* =================================================================
              SUBSECTION 1: READING & PERSONAL GROWTH
              ================================================================= */}
          <section aria-labelledby="reading-heading">
            <RevealOnScroll direction="up" delayMs={60}>
              <div className="rounded-3xl bg-[#090d18]/90 border border-white/[0.08] hover:border-amber-400/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md transition-colors duration-300">
                {/* Subtle warm amber corner glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Narrative & Atomic Habits Detail (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/25 bg-amber-400/10 text-amber-300 text-xs font-mono">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{reading.badge}</span>
                      </div>
                      <h3
                        id="reading-heading"
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1"
                      >
                        {reading.title}
                      </h3>
                    </div>

                    {/* Featured Book Badge Card */}
                    <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold">
                          Featured Reading
                        </div>
                        <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {reading.bookTitle}{' '}
                          <span className="text-slate-400 font-normal text-sm">
                            — {reading.bookAuthor}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                        Continuous Improvement
                      </span>
                    </div>

                    {/* Supporting Narrative */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {reading.quote}
                    </p>

                    {/* Three habit pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                        <div className="text-xs font-mono font-semibold text-amber-300">
                          1. Consistency
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Small daily efforts compound into dramatic long-term skills.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                        <div className="text-xs font-mono font-semibold text-amber-300">
                          2. Identity
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Habits reflect who we want to become through daily actions.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                        <div className="text-xs font-mono font-semibold text-amber-300">
                          3. Curiosity
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Broadening mental models across science, systems, and behavior.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Composition (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 items-center justify-center">
                    {/* Primary Photograph: Atomic Habits Book with Tea on Wood */}
                    <TiltCard maxTiltDeg={2.5} className="w-full max-w-sm rounded-2xl">
                      <div className="group relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0d1220] shadow-xl">
                        <div className="relative aspect-[9/14] w-full overflow-hidden">
                          <Image
                            src={reading.primaryImage}
                            alt={reading.primaryImageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            priority={false}
                          />
                        </div>
                        <div className="p-3 bg-[#0d1220]/95 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1.5 text-amber-300/90">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            <span>Atomic Habits</span>
                          </span>
                          <span>James Clear</span>
                        </div>
                      </div>
                    </TiltCard>

                    {/* Secondary Scrapbook Visual: Identity & Habits Quotation */}
                    <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c101d] p-3 text-left">
                      <div className="relative aspect-[9/12] w-full rounded-xl overflow-hidden border border-white/[0.06]">
                        <Image
                          src={reading.secondaryImage}
                          alt={reading.secondaryImageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="mt-2 px-1 text-[11px] font-mono text-slate-400 leading-snug">
                        &ldquo;Good habits make rational sense, but must align with identity.&rdquo;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* =================================================================
              SUBSECTION 2: RUNNING & PHYSICAL DISCIPLINE
              ================================================================= */}
          <section aria-labelledby="running-heading">
            <RevealOnScroll direction="up" delayMs={60}>
              <div className="rounded-3xl bg-[#090d18]/90 border border-white/[0.08] hover:border-orange-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md transition-colors duration-300">
                {/* Subtle warm orange corner glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Supplied Running Mindset Photograph (5 cols) */}
                  <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                    <TiltCard maxTiltDeg={2.5} className="w-full max-w-sm rounded-2xl">
                      <div className="group relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#07090f] shadow-2xl">
                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <Image
                            src={running.primaryImage}
                            alt={running.primaryImageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>
                        <div className="p-3 bg-[#0a0e19]/95 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1.5 text-orange-400">
                            <Activity className="w-3.5 h-3.5" />
                            <span>Physical Discipline</span>
                          </span>
                          <span>Consistency in Motion</span>
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Right Column: Running Philosophy & Strava Integration (7 cols) */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-300 text-xs font-mono">
                        <Flame className="w-3.5 h-3.5 text-orange-400" />
                        <span>{running.badge}</span>
                      </div>
                      <h3
                        id="running-heading"
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1"
                      >
                        {running.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {running.quote}
                    </p>

                    {/* Running Philosophy Blocks */}
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0 mt-0.5">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-mono font-semibold text-white">
                            Patience Over Instant Gratification
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                            Progress in distance and endurance isn&apos;t rushed—it demands steady, patient repetition even when milestones seem distant.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-400" />
                        </div>
                        <div>
                          <div className="text-xs font-mono font-semibold text-white">
                            Mental Clarity &amp; Focus
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                            Clearing the mind away from screens to build stamina, cultivate resilience, and reset creative problem-solving energy.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Strava Profile CTA Button */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <MagneticButton strength={4}>
                        <a
                          href={running.stravaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Follow Atharva Patil's runs on Strava (opens in new tab)"
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-orange-500/25 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-orange-400/50"
                        >
                          <StravaIcon className="w-4 h-4" />
                          <span>{running.buttonText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </MagneticButton>

                      <span className="text-[11px] font-mono text-slate-500">
                        Live athletic logs on Strava
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* =================================================================
              SUBSECTION 3: THE NEVER-GIVE-UP MINDSET
              ================================================================= */}
          <section aria-labelledby="mindset-heading">
            <RevealOnScroll direction="up" delayMs={60}>
              <div className="rounded-3xl bg-[#090d18]/90 border border-white/[0.08] hover:border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md transition-colors duration-300">
                {/* Subtle emerald corner glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-8">
                  {/* Header & Motto */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
                        <Target className="w-3.5 h-3.5" />
                        <span>{mindset.badge}</span>
                      </div>
                      <h3
                        id="mindset-heading"
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1"
                      >
                        {mindset.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                        {mindset.quote}
                      </p>
                    </div>

                    {/* 1% Better Every Day Banner */}
                    <div className="p-4 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/25 text-left md:text-right shrink-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                        Daily Compounding Motto
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight flex items-center md:justify-end gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span>{mindset.motto}</span>
                      </div>
                    </div>
                  </div>

                  {/* Core Content Grid: Principles + Visual Highlights */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* 3 Principles (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Core Guiding Principles
                      </div>

                      {mindset.principles.map((principle, index) => (
                        <div
                          key={principle.title}
                          className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-start gap-4 group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                            0{index + 1}
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                              {principle.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-1">
                              {principle.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Visual Highlights: Fall Seven Times + 1% Better (5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {/* Primary Resilience Image: Fall seven times, stand up eight */}
                      <TiltCard maxTiltDeg={2.5} className="rounded-2xl">
                        <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c101d] p-3 text-center shadow-xl h-full flex flex-col justify-between">
                          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/95 border border-white/[0.1]">
                            <Image
                              src={mindset.primaryImage}
                              alt={mindset.primaryImageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, 240px"
                              className="object-contain p-3 hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="mt-2.5 text-[11px] font-mono text-slate-300">
                            Resilience in Adversity
                          </div>
                        </div>
                      </TiltCard>

                      {/* Supporting 1% Daily Compounding Pawn-to-King Image */}
                      <TiltCard maxTiltDeg={2.5} className="rounded-2xl">
                        <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c101d] p-3 text-center shadow-xl h-full flex flex-col justify-between">
                          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/95 border border-white/[0.1]">
                            <Image
                              src={mindset.supportingImage}
                              alt={mindset.supportingImageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, 240px"
                              className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="mt-2.5 text-[11px] font-mono text-emerald-400 font-semibold">
                            {mindset.motto}
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>
        </div>
      </div>
    </section>
  );
}
