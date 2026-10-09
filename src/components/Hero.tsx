'use client';

import Image from 'next/image';
import { profileData } from '@/data/portfolioData';
import AiVisualizer from '@/components/AiVisualizer';
import {
  ArrowDown,
  ArrowRight,
  FileText,
  Sparkles,
  Award,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Header: Profile Photo, Status Badge & Greeting */}
            <div className="flex items-center gap-4 sm:gap-5 pb-1">
              <div className="relative group shrink-0">
                {/* Subtle cyan & emerald accent ring */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 opacity-70 blur-[1px] group-hover:opacity-100 transition duration-300" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/20 bg-[#090d16] shadow-xl shadow-sky-500/10">
                  <Image
                    src="/images/profile.jpg"
                    alt="Portrait of Atharva Patil"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Active status pip */}
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#07090e] shadow-sm shadow-emerald-500/50"
                  title="Available for Opportunities"
                />
              </div>

              <div className="space-y-2">
                {/* Status / Availability badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/25 bg-sky-500/[0.08] text-sky-400 text-xs font-mono tracking-wide shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI &amp; Data Science Student • Class of 2027</span>
                </div>

                <div className="text-base sm:text-lg font-medium text-slate-300">
                  Hi, I&apos;m <span className="text-white font-semibold">{profileData.name}</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                AI &amp; Data Science{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
                  Engineer
                </span>
              </h1>
              <p className="text-base sm:text-lg font-mono text-sky-300/90 font-medium tracking-tight">
                {profileData.subheadline}
              </p>
            </div>

            {/* Professional Introduction Statement */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              &ldquo;{profileData.summary}&rdquo;
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2 max-w-xl">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                  <span>Academics</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">
                  {profileData.cgpa}
                </div>
                <div className="text-[11px] text-slate-500">MMCOE, Pune</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Competition</span>
                </div>
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  4 Honors
                </div>
                <div className="text-[11px] text-slate-500">2x 1st, 2x 2nd Place</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Research Focus</span>
                </div>
                <div className="text-lg font-bold text-indigo-300 font-mono">
                  FARE
                </div>
                <div className="text-[11px] text-slate-500">Financial Agentic AI</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Atharva Patil Resume (PDF)"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-medium text-sm border border-white/[0.12] transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm border border-white/[0.08] transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI & Data Systems Visualizer (5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none">
              <AiVisualizer />
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
