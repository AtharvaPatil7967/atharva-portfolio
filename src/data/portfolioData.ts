import {
  DeveloperProfile,
  Project,
  SkillCategory,
  Achievement,
  Education,
  ResearchDirection,
} from '@/types/portfolio';

/* ==========================================================================
   DEVELOPER CONFIGURATION & SOCIAL PLACEHOLDERS
   Replace any placeholder values below with your verified details.
   ========================================================================== */
export const profileData: DeveloperProfile = {
  name: 'Atharva Patil',
  headline: 'AI & Data Science Engineer',
  subheadline: 'Data Analytics • Machine Learning • Generative AI • Agentic AI',
  summary:
    'I build data-driven and AI-powered applications that turn complex problems into practical solutions.',
  detailedBio: [
    'I am an Artificial Intelligence & Data Science engineering student at Marathwada Mitra Mandal’s College of Engineering (MMCOE), Pune, with a strong focus on applied Machine Learning, quantitative analytics, and modern AI architectures.',
    'My work spans end-to-end development: from cleaning and preprocessing complex datasets to training predictive models, engineering analytics dashboards, and exploring cutting-edge Generative AI and Agentic AI workflows.',
    'I enjoy tackling real-world problems with rigorous data methodologies—building interactive platforms, deep learning vision models, and exploring multi-agent reasoning systems for complex decision-making.',
  ],
  location: 'Pune, India',
  degree: 'B.E. in Artificial Intelligence & Data Science',
  college: "Marathwada Mitra Mandal's College of Engineering (MMCOE)",
  graduationYear: '2027',
  cgpa: '8.55 / 10',
  interests: [
    'Data Analytics',
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Agentic AI',
    'Financial AI',
  ],
  socials: {
    github: 'https://github.com/AtharvaPatil7967',
    /* ------------------------------------------------------------------------
       PLACEHOLDERS: Update with your personal URLs when ready
       ------------------------------------------------------------------------ */
    linkedin: 'https://linkedin.com/in/REPLACE_WITH_YOUR_LINKEDIN_SLUG',
    email: 'atharva.patil.dev@placeholder.com', // Replace with your real email address
    resume: '/resume.pdf', // Place your resume.pdf inside the /public folder
  },
};

/* ==========================================================================
   NAVIGATION LINKS
   ========================================================================== */
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/* ==========================================================================
   CATEGORIZED SKILLS DATA
   ========================================================================== */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core languages for algorithmic logic, computational analytics, and data querying',
    icon: 'Code2',
    skills: ['Python', 'C++', 'SQL'],
  },
  {
    title: 'Data Analytics',
    description: 'Statistical manipulation, quantitative exploratory analysis, and visual reporting',
    icon: 'BarChart3',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Power BI', 'Excel'],
  },
  {
    title: 'Machine Learning',
    description: 'Classical, ensemble, and unsupervised clustering algorithms for predictive modelling',
    icon: 'Cpu',
    skills: [
      'Scikit-learn',
      'XGBoost',
      'CatBoost',
      'Random Forest',
      'K-Means',
      'GMM',
      'DBSCAN',
    ],
  },
  {
    title: 'Deep Learning',
    description: 'Neural network architectures for computer vision and feature representations',
    icon: 'Network',
    skills: ['TensorFlow', 'PyTorch', 'CNN', 'MobileNetV2', 'EfficientNet'],
  },
  {
    title: 'AI / GenAI',
    description: 'Large language models, semantic retrieval, and autonomous multi-agent reasoning',
    icon: 'Sparkles',
    skills: [
      'Transformers',
      'NLP',
      'RAG',
      'LLMs',
      'Agentic AI',
      'Multi-Agent Systems',
    ],
  },
  {
    title: 'Backend / Development',
    description: 'High-performance microservices, REST APIs, and rapid prototyping frameworks',
    icon: 'Server',
    skills: ['FastAPI', 'Flask', 'Streamlit'],
  },
  {
    title: 'Databases / Cloud',
    description: 'Relational, document-oriented, and real-time backend persistence layers',
    icon: 'Database',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    title: 'Tools',
    description: 'Version control, development environments, and scientific computing stacks',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Anaconda'],
  },
];

/* ==========================================================================
   PROJECTS DATA
   ========================================================================== */
export const projectsData: Project[] = [
  {
    id: 'customer-segmentation-dashboard',
    title: 'Intelligent Customer Segmentation Dashboard',
    subtitle: 'RFM Analytics & Unsupervised Clustering Platform',
    categories: ['Data Analytics', 'Machine Learning'],
    badge: 'Silhouette ~0.80',
    description:
      'An interactive customer segmentation platform utilizing RFM analysis and multiple clustering algorithms to identify customer groups and support data-driven marketing decisions.',
    problem:
      'Traditional marketing approaches often rely on blanket campaigns that fail to account for variance in customer recency, frequency, and monetary contribution, resulting in lower conversion rates.',
    solution:
      'Engineered a comprehensive behavioral segmentation pipeline that ingests transactional records, calculates standard RFM metrics, and evaluates multiple clustering algorithms to determine the most natural cluster separations.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Streamlit',
      'Matplotlib',
      'Plotly',
      'Clustering',
    ],
    keyFeatures: [
      'RFM (Recency, Frequency, Monetary) metric feature engineering',
      'Evaluation across 5 clustering algorithms: K-Means, GMM, DBSCAN, Agglomerative, and BIRCH',
      'Interactive Streamlit UI with dynamic 2D/3D scatter plots via Plotly',
      'Silhouette score comparisons and Davies-Bouldin cluster separation metrics',
      'Actionable cohort profiles for targeted customer retention strategies',
    ],
    resultsOrMetrics:
      'Gaussian Mixture Model achieved a Silhouette Score of approximately 0.80, demonstrating exceptional cluster cohesion and separation.',
    githubUrl: 'https://github.com/AtharvaPatil7967/Intelligent-Customer-Segmentation', // Placeholder / update repo slug
    demoUrl: 'https://customer-segmentation-demo.streamlit.app', // Optional live demo placeholder
  },
  {
    id: 'agri-commodity-price-forecasting',
    title: 'Agri-Commodity Price Forecasting System',
    subtitle: 'Time-Series Machine Learning Engine',
    categories: ['Machine Learning', 'Data Analytics'],
    badge: '28-Day Forecast',
    description:
      'A machine-learning-based agricultural commodity price forecasting system designed to analyze historical market prices and generate future price forecasts.',
    problem:
      'Agricultural market prices fluctuate sharply due to seasonality, supply-demand shocks, and regional market trends, making financial planning difficult for farmers and trading bodies.',
    solution:
      'Constructed a robust multi-model forecasting pipeline utilizing rolling statistics, lag feature engineering, classical statistical time-series models, and gradient-boosted decision trees.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'ARIMA',
      'SARIMA',
      'Random Forest',
      'Gradient Boosting',
      'XGBoost',
      'CatBoost',
    ],
    keyFeatures: [
      '28-day forward price forecasting capability',
      'Rigorous time-series preprocessing with stationarity checks and decomposition',
      'Advanced lag feature construction and rolling window statistics',
      'Ensemble comparison between statistical (ARIMA, SARIMA) and tree-based gradient boosting models (XGBoost, CatBoost)',
      'Trend visualization and historical price anomaly identification',
    ],
    resultsOrMetrics:
      'Provides actionable 28-day predictive price trajectories with comprehensive lag-feature variance modeling.',
    githubUrl: 'https://github.com/AtharvaPatil7967/Agri-Price-Forecasting',
    demoUrl: undefined,
  },
  {
    id: 'krishi-mitra-ai',
    title: 'Krishi Mitra AI',
    subtitle: 'Deep Learning Agriculture Assistant',
    categories: ['Deep Learning', 'Machine Learning'],
    badge: 'Vision & NLP',
    description:
      'An AI-powered agriculture assistant that helps users with crop disease diagnosis and agricultural information.',
    problem:
      'Smallholder farmers face severe crop yield losses due to delays in accurately identifying foliar diseases and lack of accessible, localized agronomy advisory.',
    solution:
      'Developed a multi-modal assistant combining fine-tuned deep learning convolutional networks for rapid visual disease classification with NLP query handling for market rates and government initiatives.',
    technologies: [
      'Python',
      'TensorFlow',
      'CNN',
      'MobileNetV2',
      'EfficientNetB0',
      'FastAPI',
      'NLP',
      'MongoDB',
      'Firebase',
    ],
    keyFeatures: [
      'Foliar plant disease detection using MobileNetV2 and EfficientNetB0 backbones',
      'Real-time crop diagnostic recommendations for immediate treatment',
      'Natural language agricultural assistance answering farmer inquiries',
      'Market-price tracking integration for key regional produce',
      'Government welfare scheme discovery and agricultural subsidies guide',
    ],
    resultsOrMetrics:
      'Lightweight convolutional architecture optimized for low-latency inference on edge and mobile web clients.',
    githubUrl: 'https://github.com/AtharvaPatil7967/Krishi-Mitra-AI',
    demoUrl: undefined,
  },
  {
    id: 'ai-career-mentor',
    title: 'AI Career Mentor',
    subtitle: 'Full-Stack Agentic Career Guidance Platform',
    categories: ['GenAI', 'Agentic AI', 'Full Stack', 'Machine Learning'],
    badge: 'Agentic RAG',
    description:
      'A full-stack AI career platform concept designed to provide personalized career recommendations through intelligent resume parsing, semantic matching, and multi-agent workflows.',
    problem:
      'Job seekers struggle to identify concrete skill gaps against rapidly shifting industry standards, while traditional job portals only offer superficial keyword matching without personalized upskilling roadmaps.',
    solution:
      'Engineered an intelligent career architecture featuring automated resume entity extraction, semantic embedding matching via RAG, and an agentic reasoning loop that generates customized career trajectories.',
    technologies: [
      'Python',
      'FastAPI',
      'Deep Learning',
      'Machine Learning',
      'RAG',
      'LLM',
      'Agentic AI',
      'Database',
      'Dashboard UI',
    ],
    keyFeatures: [
      'Automated resume parsing with semantic entity and skill extraction',
      'Machine learning skill-vector similarity matching against job requirements',
      'Retrieval-Augmented Generation (RAG) for domain-specific industry roadmaps',
      'Agentic multi-step planning loop for structured career recommendation generation',
      'Interactive user dashboard for tracking skill milestones and application readiness',
      'FastAPI microservice backend with robust schema validation',
    ],
    resultsOrMetrics:
      'End-to-end architectural pipeline integrating document parsing, semantic RAG retrieval, and agentic plan synthesis.',
    githubUrl: 'https://github.com/AtharvaPatil7967/AI-Career-Mentor',
    demoUrl: undefined,
  },
  {
    id: 'routine-os',
    title: 'RoutineOS',
    subtitle: 'Personal Productivity & Routine Intelligence',
    categories: ['Full Stack', 'Data Analytics'],
    badge: 'Full Stack App',
    description:
      'A personal productivity and routine tracking system designed to record daily routines and analyze study, sleep, running, and other activities over time.',
    problem:
      'Maintaining consistent daily habits requires longitudinal visibility into behavioral patterns, yet generic productivity tools lack structured time analytics and cross-domain tracking.',
    solution:
      'Built a full-stack web application with Next.js, Supabase, and Prisma that provides intuitive daily check-ins, persistent relational storage, and interactive analytics to monitor health and study metrics.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
    ],
    keyFeatures: [
      'Streamlined daily activity logging for study sessions, sleep cycles, and running metrics',
      'Historical records view with interactive date-range filtering',
      'Weekly aggregate analysis and performance trends visualization',
      'Custom goal tracking with progress indicators',
      'Secure cloud database integration powered by PostgreSQL & Supabase',
      'Responsive dashboard interface optimized across desktop and mobile',
    ],
    resultsOrMetrics:
      'Production-ready full-stack architecture with type-safe database queries via Prisma and reactive UI state.',
    githubUrl: 'https://github.com/AtharvaPatil7967/RoutineOS',
    demoUrl: undefined,
  },
  {
    id: 'financial-ai-system',
    title: 'Agent-Orchestrated Financial AI',
    subtitle: 'Multi-Agent Reasoning for Earnings Call Transcripts',
    categories: ['Agentic AI', 'GenAI'],
    badge: 'Research Project',
    isResearch: true,
    description:
      'An advanced Financial AI research project exploring multi-agent orchestration to extract financial risks, analyze corporate earnings calls, and perform numerical reasoning over complex statements.',
    problem:
      'Current financial AI systems can struggle with numerical reasoning, structured regulatory alignment, and persona-adaptive explanations.',
    solution:
      'Designing an orchestrated multi-agent framework where specialized LLM agents collaborate to perform factual risk extraction, quantitative cross-checking, and persona-specific financial synthesis.',
    technologies: [
      'Agentic AI',
      'LLMs',
      'RAG',
      'NLP',
      'Multi-Agent Systems',
      'Numerical Reasoning',
      'Financial Risk Extraction',
    ],
    keyFeatures: [
      'Earnings-call transcript parsing and multi-turn financial Q&A context windows',
      'Multi-agent role specialization: Extraction Agent, Numerical Verifier Agent, and Synthesis Agent',
      'Structured financial risk and vulnerability identification across 10-K/quarterly calls',
      'Quantitative reasoning validation preventing arithmetic hallucinations',
      'Persona-adaptive explanations catering to both institutional analysts and retail investors',
    ],
    resultsOrMetrics:
      'System design and reasoning framework addressing the fragility of monolithic LLMs on complex financial statements.',
    githubUrl: 'https://github.com/AtharvaPatil7967/Financial-Agentic-AI',
    demoUrl: undefined,
  },
];

/* ==========================================================================
   ACHIEVEMENTS DATA
   ========================================================================== */
export const achievementsData: Achievement[] = [
  {
    id: 'hackx-2025',
    title: 'HackX',
    position: '1st Place',
    organizer: 'XDE Studios',
    date: 'September 2025',
    highlight: 'Grand Winner',
    description:
      'Secured 1st place for engineering an innovative technological solution addressing complex problem constraints within an intensive hackathon environment.',
  },
  {
    id: 'insight-innovator-2025',
    title: 'Insight Innovator',
    position: '1st Place',
    organizer: 'Sri Balaji University Pune',
    date: 'April 2025',
    highlight: 'Winner',
    description:
      'Awarded 1st place in a competitive analytics and innovation event, recognized for data-driven modeling, insight depth, and presentation clarity.',
  },
  {
    id: 'burst-n-storm-2025',
    title: 'Burst n Storm',
    position: '2nd Place',
    organizer: 'COEP Technical University, Pune',
    date: 'October 2025',
    highlight: 'Runner Up',
    description:
      'Clinched 2nd place in high-intensity technical competition hosted by COEP Technical University, Pune.',
  },
  {
    id: 'dashboard-derby',
    title: 'Dashboard Derby',
    position: '2nd Place',
    organizer: 'COEP Technical University, Pune',
    date: undefined, // Preserved without inventing dates
    highlight: 'Runner Up',
    description:
      'Earned 2nd place for crafting a high-impact, insightful analytical dashboard focusing on user experience, storytelling, and metric precision.',
  },
];

/* ==========================================================================
   RESEARCH & ADVANCED AI DATA
   ========================================================================== */
export const researchData: ResearchDirection = {
  title: 'Research & Advanced AI',
  acronym: 'FARE',
  fullName: 'Financial Agentic Reasoning and Evaluation for Earnings Call Transcripts',
  overview:
    'Exploration into overcoming the limitations of standard autoregressive language models in high-stakes quantitative domains. FARE investigates multi-agent decomposition to analyze unstructured corporate earnings calls and quantitative disclosures with provable numerical consistency.',
  coreProblem:
    'Current financial AI systems can struggle with numerical reasoning, structured regulatory alignment, and persona-adaptive explanations.',
  pillars: [
    {
      title: 'Agentic Reasoning & Multi-Agent Decomposition',
      description:
        'Partitioning monolithic financial analysis into discrete specialized sub-agents: Document Partitioning, Numerical Fact-Checking, and Regulatory Alignment.',
      technologies: ['Agentic AI', 'Multi-Agent Systems', 'Chain-of-Thought'],
    },
    {
      title: 'Earnings-Call Risk Extraction',
      description:
        'Extracting implicit operational risks, guidance revisions, and hedging stances from executive remarks and analyst Q&A transcripts.',
      technologies: ['NLP', 'Transformers', 'Sentiment & Risk Modeling'],
    },
    {
      title: 'Numerical Consistency & Verification',
      description:
        'Augmenting language generation with deterministic symbolic calculation layers to mitigate hallucinations in fiscal percentages, ratios, and EBITDA margins.',
      technologies: ['Symbolic Math Tools', 'Numerical Reasoning', 'RAG'],
    },
    {
      title: 'Persona-Adaptive Financial Explanations',
      description:
        'Synthesizing multi-level intelligence—delivering granular quantitative metrics for seasoned analysts while providing intuitive, plain-language summaries for retail investors.',
      technologies: ['Conversational AI', 'Adaptive Generation', 'Context Filtering'],
    },
  ],
  focusAreas: [
    'Financial AI Systems',
    'Agentic Reasoning Architectures',
    'Multi-Agent Coordination',
    'Domain-Specific RAG Pipelines',
    'Advanced NLP for Corporate Disclosures',
    'Numerical Consistency & Hallucination Mitigation',
  ],
};

/* ==========================================================================
   EDUCATION DATA
   ========================================================================== */
export const educationData: Education = {
  institution: "Marathwada Mitra Mandal's College of Engineering (MMCOE)",
  degree: 'B.E. in Artificial Intelligence & Data Science',
  graduationYear: '2027',
  cgpa: '8.55 / 10',
  location: 'Pune, India',
  highlights: [
    'Specialized engineering curriculum focusing on Machine Learning, Deep Learning, Data Analytics, and Big Data Engineering.',
    'Consistently maintained academic excellence with an 8.55 / 10 CGPA.',
    'Active participant in regional and national hackathons and data analytics competitions.',
    'Strong mathematical foundations in linear algebra, multivariable calculus, probability, and statistics.',
  ],
};
