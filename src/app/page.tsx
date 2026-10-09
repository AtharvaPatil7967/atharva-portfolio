import CursorGlow from '@/components/motion/CursorGlow';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import CodingProfiles from '@/components/CodingProfiles';
import Achievements from '@/components/Achievements';
import Research from '@/components/Research';
import Education from '@/components/Education';
import BeyondCode from '@/components/BeyondCode';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Ambient Cursor Following Glow (Desktop only, passive) */}
      <CursorGlow />

      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Me & Recruiter Panel */}
        <About />

        {/* Section 3: Categorized Skills */}
        <Skills />

        {/* Section 4: Projects Showcase & Interactive Filter */}
        <Projects />

        {/* Section 5: Coding Platform Profiles */}
        <CodingProfiles />

        {/* Section 6: Achievements & Honors */}
        <Achievements />

        {/* Section 7: Research & Advanced AI (FARE) */}
        <Research />

        {/* Section 8: Formal Education */}
        <Education />

        {/* Section 9: Personal Habits, Running & Resilience */}
        <BeyondCode />

        {/* Section 10: Final CTA & Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
