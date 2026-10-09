# Atharva Patil — Personal Developer Portfolio

> **AI & Data Science Engineer**  
> *Data Analytics • Machine Learning • Generative AI • Agentic AI*  
> B.E. Artificial Intelligence & Data Science @ MMCOE, Pune (2027) | CGPA: 8.55 / 10

A modern, high-performance developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically around technical projects, quantitative modeling, competition achievements, and advanced AI research.

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Node.js (v18.18.0 or higher recommended, tested on Node v22.19.0)
- npm (v9.0.0 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
Portofolio/
├── public/
│   ├── resume.pdf           # [Placeholder] Replace with your official PDF resume
│   └── ...                  # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom dark theme, glassmorphism & subtle grid patterns
│   │   ├── icon.svg         # SVG favicon monogram (AP)
│   │   ├── layout.tsx       # Root layout, SEO metadata, OpenGraph & JSON-LD Person schema
│   │   └── page.tsx         # Main portfolio assembly page
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx   # Pixel-perfect SVG icons for GitHub & LinkedIn
│   │   ├── About.tsx            # Technical background, competency pillars & recruiter info panel
│   │   ├── Achievements.tsx     # Hackathons & competitions showcase (HackX, Insight Innovator, etc.)
│   │   ├── AiVisualizer.tsx     # High-performance interactive AI data & agent node canvas
│   │   ├── Contact.tsx          # Direct contact channels & interactive contact form UI
│   │   ├── Education.tsx        # MMCOE Pune academic credentials & coursework highlights
│   │   ├── Footer.tsx           # Minimal copyright, quick links & back-to-top button
│   │   ├── Hero.tsx             # First-screen hero, headline, intro quote, metrics & CTAs
│   │   ├── Navbar.tsx           # Sticky glassmorphic navbar with active section spy & mobile drawer
│   │   ├── ProjectModal.tsx     # Deep-dive system architecture modal for projects
│   │   ├── Projects.tsx         # Filterable showcase with large project cards
│   │   ├── Research.tsx         # Research & Advanced AI section (FARE Financial Multi-Agent AI)
│   │   ├── ScrollProgress.tsx   # Top reading progress indicator
│   │   └── Skills.tsx           # Categorized technical competencies with search filter
│   ├── data/
│   │   └── portfolioData.ts     # Centralized, typed configuration for all profile data & links
│   └── types/
│       └── portfolio.ts         # TypeScript interfaces and type definitions
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Updating Your Personal Links & Placeholders

All profile data, links, and project repositories are centralized in **`src/data/portfolioData.ts`**. You do not need to hunt through components to change links.

### 1. Social & Contact Placeholders:
Open [`src/data/portfolioData.ts`](file:///d:/Portofolio/src/data/portfolioData.ts) and replace the placeholders:
```typescript
socials: {
  github: 'https://github.com/AtharvaPatil7967',
  linkedin: 'https://linkedin.com/in/YOUR_ACTUAL_SLUG',     // <-- Replace here
  email: 'your.actual.email@example.com',                    // <-- Replace here
  resume: '/resume.pdf',                                     // <-- Drop resume.pdf into /public
}
```

### 2. Resume File:
Drop your official resume PDF named `resume.pdf` into the `public/` directory (replacing the temporary `public/resume.pdf` placeholder).

### 3. Project Repositories & Demos:
In `src/data/portfolioData.ts`, each project entry in `projectsData` has `githubUrl` and optional `demoUrl`. Update the repository slugs to match your exact GitHub repository names when you create them.

### 4. Contact Form Integration:
The contact form in [`src/components/Contact.tsx`](file:///d:/Portofolio/src/components/Contact.tsx) includes client-side validation and isolated submission handling. When you are ready to receive emails directly to your inbox, connect your preferred provider:
- **Formspree**: Replace the `<form onSubmit={handleSubmit}>` with `action="https://formspree.io/f/YOUR_FORM_ID"`
- **Resend**: Create a Next.js API route (`src/app/api/contact/route.ts`) and trigger it via `fetch('/api/contact', { ... })`
- **EmailJS**: Call `emailjs.send(...)` inside `handleSubmit`

---

## 🌐 Deploying to Vercel (Recommended)

This portfolio is built with Next.js and is optimized for zero-configuration one-click deployment on [Vercel](https://vercel.com):

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit of Atharva Patil personal portfolio"
   git branch -M main
   git remote add origin https://github.com/AtharvaPatil7967/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New...** -> **Project**.
   - Select your `portfolio` repository.
   - Vercel automatically detects Next.js. Click **Deploy**.
   - Your portfolio will be live with automatic HTTPS and global edge CDN caching!

---

## 🛡️ Content Integrity & Compliance
- **No Fabrications**: All education details, CGPA (8.55/10), competition rankings (HackX 1st, Insight Innovator 1st, Burst n Storm 2nd, Dashboard Derby 2nd), and project metrics (GMM Silhouette score ~0.80, 28-day price forecasting) strictly reflect Atharva Patil's actual technical profile.
- **Accessibility & Motion**: Complies with standard WCAG contrast ratios, semantic heading hierarchies, ARIA tags, and `prefers-reduced-motion` settings.
