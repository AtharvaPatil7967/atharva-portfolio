'use client';

import { useState } from 'react';
import { profileData } from '@/data/portfolioData';
import {
  Mail,
  FileText,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'demo'>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // ISOLATED SUBMISSION LOGIC:
    // This frontend form is prepared for your preferred backend provider (e.g. EmailJS, Resend, Formspree).
    // It validates user input and provides explicit user feedback without pretending to send an unconfigured email.
    setTimeout(() => {
      setStatus('demo');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-sky-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let&apos;s build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              intelligent.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I&apos;m interested in opportunities involving data, analytics, machine learning and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0a0e1a]/90 border border-white/[0.08] backdrop-blur-md space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Direct Contact Channels</span>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="text-sm font-mono text-slate-200 hover:text-sky-300 transition-colors block break-all font-medium"
                >
                  {profileData.socials.email}
                </a>
                <span className="text-[10px] text-slate-500 block">
                  Click to open default mail client or replace in config
                </span>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-all space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                    LinkedIn
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </div>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-200 hover:text-sky-300 transition-colors block"
                >
                  Connect on LinkedIn
                </a>
                <span className="text-[10px] text-slate-500 block">
                  Placeholder link: replace in portfolioData.ts
                </span>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-all space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                    GitHub
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </div>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-slate-200 hover:text-white transition-colors block break-all"
                >
                  github.com/AtharvaPatil7967
                </a>
                <span className="text-[10px] text-emerald-400/80 block font-mono">
                  Active code repositories &amp; experiments
                </span>
              </div>

              {/* Resume Card */}
              <div className="p-4 rounded-xl bg-sky-500/[0.06] border border-sky-500/20 hover:border-sky-500/40 transition-all space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-300 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    Curriculum Vitae
                  </span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </div>
                <a
                  href={profileData.socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Atharva Patil Resume (PDF)"
                  className="text-sm font-medium text-white hover:text-sky-300 transition-colors block"
                >
                  View / Download Resume (PDF)
                </a>
                <span className="text-[10px] text-slate-400 block font-mono">
                  Stored at /public/resume.pdf
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form UI (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0a0e1a]/90 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md relative shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have an internship, project, or role opening? Reach out directly using this form.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-mono text-slate-300"
                    >
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#070a12] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="sender-email"
                      className="block text-xs font-mono text-slate-300"
                    >
                      Your Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#070a12] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message-subject"
                    className="block text-xs font-mono text-slate-300"
                  >
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="message-subject"
                    type="text"
                    placeholder="AI & Data Science Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-[#070a12] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message-body"
                    className="block text-xs font-mono text-slate-300"
                  >
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message-body"
                    required
                    rows={5}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#070a12] border border-white/[0.1] rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Status / Notice Box */}
              {status === 'demo' && (
                <div className="mt-5 p-4 rounded-xl bg-sky-500/[0.08] border border-sky-500/30 text-xs space-y-2 text-left">
                  <div className="flex items-center gap-2 text-sky-300 font-semibold font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Frontend Validation Passed</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Thank you! Your message payload was captured in local state. To enable instant email delivery to your inbox, connect your preferred service (e.g., <strong>Formspree</strong>, <strong>Resend</strong>, or <strong>EmailJS</strong>) in <code>src/components/Contact.tsx</code>.
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    Or email directly at: <span className="text-sky-300">{profileData.socials.email}</span>
                  </div>
                </div>
              )}

              {/* Isolated submission footnote */}
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>
                  Configurable submission handler — ready for API or webhook binding.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
