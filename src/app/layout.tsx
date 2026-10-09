import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { profileData } from '@/data/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Atharva Patil | AI & Data Science Engineer',
  description:
    'Portfolio of Atharva Patil — Artificial Intelligence & Data Science engineer focused on Data Analytics, Machine Learning, Generative AI and Agentic AI.',
  keywords: [
    'Atharva Patil',
    'AI Engineer',
    'Data Science',
    'Machine Learning Engineer',
    'Data Analytics',
    'Generative AI',
    'Agentic AI',
    'Financial AI',
    'MMCOE Pune',
    'Python',
    'Deep Learning',
  ],
  authors: [{ name: 'Atharva Patil', url: profileData.socials.github }],
  creator: 'Atharva Patil',
  openGraph: {
    title: 'Atharva Patil | AI & Data Science Engineer',
    description:
      'Portfolio of Atharva Patil — Artificial Intelligence & Data Science engineer focused on Data Analytics, Machine Learning, Generative AI and Agentic AI.',
    url: 'https://atharvapatil.dev',
    siteName: 'Atharva Patil Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Patil | AI & Data Science Engineer',
    description:
      'Portfolio of Atharva Patil — Artificial Intelligence & Data Science engineer focused on Data Analytics, Machine Learning, Generative AI and Agentic AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    jobTitle: profileData.headline,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: profileData.college,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressCountry: 'India',
    },
    sameAs: [profileData.socials.github, profileData.socials.linkedin],
    knowsAbout: profileData.interests,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-sky-500/30 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
