'use client';

import { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import {
  Code2,
  BarChart3,
  Cpu,
  Network,
  Sparkles,
  Server,
  Database,
  Wrench,
  Search,
  CheckCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-sky-400" />,
  BarChart3: <BarChart3 className="w-4 h-4 text-emerald-400" />,
  Cpu: <Cpu className="w-4 h-4 text-indigo-400" />,
  Network: <Network className="w-4 h-4 text-purple-400" />,
  Sparkles: <Sparkles className="w-4 h-4 text-amber-400" />,
  Server: <Server className="w-4 h-4 text-cyan-400" />,
  Database: <Database className="w-4 h-4 text-rose-400" />,
  Wrench: <Wrench className="w-4 h-4 text-teal-400" />,
};

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories = skillCategories.filter((cat) => {
    const matchesCategory =
      selectedCategory === 'All' || cat.title === selectedCategory;

    if (!searchQuery.trim()) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(query);
    const matchesSkill = cat.skills.some((s) =>
      s.toLowerCase().includes(query)
    );

    return matchesCategory && (matchesTitle || matchesSkill);
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills &amp; Technical Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-mono">
              Categorized toolsets across quantitative data analytics, machine learning pipelines, and modern GenAI architectures.
            </p>
          </div>

          {/* Search Filter for Recruiters */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d1220]/90 border border-white/[0.1] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl bg-[#090d17]/80 border border-white/[0.08] hover:border-sky-500/30 p-5 transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-sky-500/5 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:scale-105 transition-transform">
                      {iconMap[category.icon] || <Cpu className="w-4 h-4 text-sky-400" />}
                    </div>
                    <h3 className="font-semibold text-white text-sm">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {category.skills.length}
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => {
                    const isMatched =
                      searchQuery.trim() &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase());

                    return (
                      <span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono transition-all ${
                          isMatched
                            ? 'bg-sky-500 text-slate-950 font-semibold ring-2 ring-sky-300'
                            : 'bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-white/[0.2] hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Verified Competency Footnote */}
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                <CheckCircle className="w-3 h-3 text-emerald-400/80" />
                <span>Applied in Academic &amp; Personal Projects</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="py-12 text-center text-slate-400 text-sm">
            No skills found matching &ldquo;{searchQuery}&rdquo;. Try another keyword.
          </div>
        )}
      </div>
    </section>
  );
}
