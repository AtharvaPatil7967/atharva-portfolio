import { profileData } from '@/data/portfolioData';
import { Mail, FileText, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, StravaIcon } from '@/components/icons/BrandIcons';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05070c] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-semibold text-white text-sm tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span>{profileData.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                MMCOE &apos;27
              </span>
            </div>
            <p className="text-slate-400 font-mono text-[11px]">
              {profileData.headline} • Data Analytics &amp; Machine Learning
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] text-slate-400 hover:text-sky-400 hover:bg-white/[0.08] transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.strava}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] text-slate-400 hover:text-orange-400 hover:bg-white/[0.08] transition-colors"
              aria-label="Strava Profile"
              title="Strava"
            >
              <StravaIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.socials.email}`}
              className="p-2 rounded-lg bg-white/[0.03] text-slate-400 hover:text-sky-400 hover:bg-white/[0.08] transition-colors"
              aria-label="Email Atharva Patil"
              title={profileData.socials.email}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] text-slate-400 hover:text-sky-400 hover:bg-white/[0.08] transition-colors"
              aria-label="Download Atharva Patil Resume (PDF)"
              title="Resume (PDF)"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-center md:text-right font-mono text-[11px] text-slate-500">
            <span>&copy; 2026 {profileData.name}</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
