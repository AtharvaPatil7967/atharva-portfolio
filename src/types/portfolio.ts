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

export type AchievementCategory =
  | 'Awards & Project Competitions'
  | 'Industry Experience'
  | 'Hackathons & Participation';

export interface Achievement {
  id: string;
  title: string;
  category: AchievementCategory;
  awardOrStatus: string;
  statusBadge?: string;
  organizer: string;
  venue?: string;
  date?: string;
  duration?: string;
  role?: string;
  description: string;
  highlight?: string;
  associatedProject?: {
    name: string;
    projectId?: string;
  };
  technologies?: string[];
  emphasisLevel: 'highest' | 'second' | 'supporting';
  iconType: 'trophy' | 'medal' | 'briefcase' | 'code' | 'sparkles';
  position?: string;
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
    strava: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    resume: string;
  };
}

export interface CodingProfile {
  name: string;
  url: string;
  buttonText: string;
  description: string;
  badge?: string;
  icon: string;
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
