'use client';

import { codingProfilesData } from '@/data/portfolioData';
import {
  LeetCodeIcon,
  CodeChefIcon,
  Code360Icon,
} from '@/components/icons/BrandIcons';
import { Code, ExternalLink, Terminal, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  LeetCode: <LeetCodeIcon className="w-6 h-6 text-amber-400" />,
  CodeChef: <CodeChefIcon className="w-6 h-6 text-emerald-400" />,
  Code360: <Code360Icon className="w-6 h-6 text-sky-400" />,
};

const accentStyles: Record<
  string,
  {
    glow: string;
    borderHover: string;
    buttonHover: string;
    badgeStyle: string;
  }
> = {
  LeetCode: {
    glow: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-400/40',
    buttonHover:
      'hover:bg-amber-400/15 hover:text-amber-300 hover:border-amber-400/30',
    badgeStyle: 'bg-amber-400/10 text-amber-300 border-amber-400/20',
  },
  CodeChef: {
    glow: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-400/40',
    buttonHover:
      'hover:bg-emerald-400/15 hover:text-emerald-300 hover:border-emerald-400/30',
    badgeStyle: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
  },
  Code360: {
    glow: 'bg-sky-500/10',
    borderHover: 'hover:border-sky-400/40',
    buttonHover:
      'hover:bg-sky-400/15 hover:text-sky-300 hover:border-sky-400/30',
    badgeStyle: 'bg-sky-400/10 text-sky-300 border-sky-400/20',
  },
};

export default function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="py-24 relative overflow-hidden bg-white/[0.01]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>ALGORITHMIC PROBLEM SOLVING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Coding Profiles
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            Explore my coding journey, problem-solving practice, and programming profiles across different platforms.
          </p>
        </div>

        {/* 3 Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfilesData.map((profile) => {
            const styles = accentStyles[profile.icon] || {
              glow: 'bg-sky-500/10',
              borderHover: 'hover:border-sky-400/40',
              buttonHover: 'hover:bg-sky-400/15 hover:text-sky-300',
              badgeStyle: 'bg-sky-400/10 text-sky-300 border-sky-400/20',
            };

            return (
              <div
                key={profile.name}
                className={`relative rounded-2xl bg-[#090d18]/90 border border-white/[0.08] ${styles.borderHover} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group backdrop-blur-md`}
              >
                {/* Ambient glow in card corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none ${styles.glow}`}
                />

                <div>
                  {/* Top Bar with Icon & Focus Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-105 transition-transform shadow-inner">
                      {iconMap[profile.icon] || (
                        <Code className="w-6 h-6 text-sky-400" />
                      )}
                    </div>

                    {profile.badge && (
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${styles.badgeStyle}`}
                      >
                        {profile.badge}
                      </span>
                    )}
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-slate-100 transition-colors">
                    {profile.name}
                  </h3>

                  {/* Platform Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                    {profile.description}
                  </p>
                </div>

                {/* Footer Action Button */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${profile.name} profile in new tab`}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-200 text-xs font-semibold border border-white/[0.08] transition-all duration-200 ${styles.buttonHover} focus:outline-none focus:ring-2 focus:ring-sky-400/40`}
                  >
                    <span>{profile.buttonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Verification Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Regularly practicing algorithmic thinking and optimized code solutions</span>
          </span>
          <span className="text-[11px] text-slate-500">
            LeetCode • CodeChef • Code360
          </span>
        </div>
      </div>
    </section>
  );
}
