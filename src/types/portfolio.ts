export type ProjectCategory =
  | 'All'
  | 'Data Analytics'
  | 'Machine Learning'
  | 'Deep Learning'
  | 'GenAI'
  | 'Agentic AI'
  | 'Full Stack';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  resultsOrMetrics?: string;
  badge?: string;
  githubUrl: string;
  demoUrl?: string;
  isResearch?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  position: string;
  organizer: string;
  date?: string;
  highlight?: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  graduationYear: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

export interface DeveloperProfile {
  name: string;
  headline: string;
  subheadline: string;
  summary: string;
  detailedBio: string[];
  location: string;
  degree: string;
  college: string;
  graduationYear: string;
  cgpa: string;
  interests: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
}

export interface ResearchDirection {
  title: string;
  acronym: string;
  fullName: string;
  overview: string;
  coreProblem: string;
  pillars: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  focusAreas: string[];
}
