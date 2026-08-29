export const personalInfo = {
  name: "Aman Varma",
  headline: "Python Developer & Software Engineer developing RESTful APIs, backend services, database-driven applications, and automated CI/CD pipelines.",
  subheadline: "Experienced in Python, FastAPI, Flask, SQL/NoSQL databases, API testing, data validation, and building customer-facing systems in agile environments.",
  location: "Ghaziabad, India",
  email: "amangurauli@gmail.com",
  phone: "+91-6306572504",
  github: "https://github.com/Amanvarma2231",
  githubUsername: "Amanvarma2231",
  linkedin: "https://www.linkedin.com/in/aman-v-697771345",
  status: "Open for Python Developer / Backend Engineer / Software Engineer roles",
  bio: "B.Tech Computer Science & Engineering graduate with hands-on experience as a Python Developer at Druidot Consulting. Skilled in Python, FastAPI, Flask, SQL/NoSQL databases, RESTful API design, automated testing, and CI/CD pipelines in agile sprint environments.",
  stats: [
    { label: "REST APIs Architected", value: "25+", desc: "CRUD, Auth & Validation" },
    { label: "Automated CI/CD Tests", value: "26+", desc: "GitHub Actions Pipeline" },
    { label: "Production Records", value: "1,000+", desc: "MySQL & MongoDB" },
    { label: "DSA Problems Solved", value: "100+", desc: "Algorithms & Structures" },
  ]
};

export const projectsData = [
  {
    id: "nlpcrm",
    title: "NLPCRM – AI-Powered CRM Platform",
    tagline: "RESTful API Backend Architecture & Secure Database Persistence",
    category: "Backend & APIs",
    featured: true,
    badges: ["Python", "FastAPI", "Flask", "MySQL", "SQLite", "SQLAlchemy", "REST APIs", "OAuth 2.0", "JWT"],
    iconType: "crm",
    description: "Designed and developed 25+ RESTful API endpoints across contacts, NLP, email, and webhook modules with OAuth 2.0 authentication, JWT access control, rate limiting, and structured SQLAlchemy persistence.",
    highlights: [
      "Designed and developed 25+ RESTful API endpoints across contacts, NLP, email, and webhook modules, implementing API specifications, CRUD operations, input validation, and modular backend workflows.",
      "Integrated MySQL and SQLite using SQLAlchemy for structured data persistence and database-driven workflows, supporting reliable customer and application data management.",
      "Implemented OAuth 2.0 authentication, JWT-based access control, rate limiting, and input validation.",
      "Synchronized multi-channel data workflows into a normalized relational schema with zero security vulnerabilities."
    ],
    metrics: [
      { name: "REST Endpoints", value: "25+" },
      { name: "Auth & Security", value: "OAuth 2.0 + JWT" },
      { name: "Database", value: "MySQL / SQLite" },
      { name: "Live Uptime", value: "99.9%" }
    ],
    liveDemo: "https://npcrm-1.onrender.com",
    github: "https://github.com/Amanvarma2231/NLPCRM",
    architecture: "Client Request -> Rate Limiting & Auth Guard (JWT/OAuth 2.0) -> FastAPI/Flask Business Logic -> SQLAlchemy ORM -> MySQL / SQLite Database",
    color: "from-blue-600/30 via-slate-800 to-slate-900",
    borderGlow: "border-blue-500/40",
    accentColor: "blue"
  },
  {
    id: "content-desk",
    title: "ContentDesk – AI Content & Data Processing Platform",
    tagline: "Shared Backend Engine, SEO Scoring & 26 CI/CD Automated Tests",
    category: "Data Engineering",
    featured: true,
    badges: ["Python", "Flask", "SQLite", "REST APIs", "TF-IDF", "GitHub Actions", "CI/CD"],
    iconType: "data",
    description: "Engineered a shared Python/Flask backend serving web and desktop application channels with an automated SEO crawler, TF-IDF near-duplicate detector, and 26 automated unit tests in GitHub Actions CI.",
    highlights: [
      "Engineered a shared Python/Flask backend serving web and desktop application channels, centralizing business logic and database-access workflows for consistent application behavior.",
      "Developed an SEO-scoring crawler and TF-IDF near-duplicate detection workflow to automate content analysis and generate data-driven recommendations.",
      "Implemented 26 automated unit tests in GitHub Actions CI, enabling automated testing on pull requests and improving software reliability across iterative development cycles.",
      "Persisted analysis results to SQLite with structured CSV export capabilities."
    ],
    metrics: [
      { name: "CI/CD Unit Tests", value: "26 Tests Passing" },
      { name: "Engine Duplication", value: "0%" },
      { name: "Export Formats", value: "CSV, SQLite" },
      { name: "Analysis Latency", value: "< 800ms" }
    ],
    liveDemo: "https://content-desk.onrender.com",
    github: "https://github.com/Amanvarma2231/Content-Desk",
    architecture: "Data Ingestion -> TF-IDF Vectorizer -> Cosine Similarity & SEO Scorer -> Decision Engine -> Dual UI (Flask / Desktop) -> GitHub Actions CI",
    color: "from-slate-700/40 via-slate-800 to-slate-900",
    borderGlow: "border-slate-600/50",
    accentColor: "slate"
  },
  {
    id: "portfolio-app",
    title: "Aman Varma – Portfolio & Systems Platform",
    tagline: "High-Performance SPA with Developer CLI & Architecture Telemetry",
    category: "Full Stack",
    featured: true,
    badges: ["React", "FastAPI", "Tailwind CSS", "Vite", "Vercel", "REST APIs"],
    iconType: "portfolio",
    description: "Modern developer portfolio featuring interactive CLI terminal, system architecture simulator, responsive UI layouts, and continuous deployment workflows.",
    highlights: [
      "Engineered responsive, accessible single-page application with optimized component hierarchy and zero layout shifts.",
      "Implemented interactive developer CLI terminal supporting standard commands and real-time state management.",
      "Integrated pipeline architecture telemetry illustrating client auth to cloud database persistence.",
      "Configured automated deployment workflows on Vercel Edge CDN."
    ],
    metrics: [
      { name: "Performance", value: "99/100" },
      { name: "Load Time", value: "< 1s" },
      { name: "Deployment", value: "Vercel Edge" },
      { name: "Architecture", value: "Clean SPA" }
    ],
    liveDemo: "https://aman-portflio-chi.vercel.app",
    github: "https://github.com/Amanvarma2231/Aman-Portflio",
    architecture: "React Client -> Vite Bundler -> Tailwind Component System -> Modals & CLI -> Vercel Edge Global Network",
    color: "from-blue-700/30 via-slate-800 to-slate-900",
    borderGlow: "border-blue-500/40",
    accentColor: "blue"
  },
  {
    id: "vlm-hallucination",
    title: "VLM Hallucination Studio",
    tagline: "Vision-Language Model Diagnostics & Evaluation Hub",
    category: "AI & Vision",
    featured: true,
    badges: ["Python", "FastAPI", "PyTorch", "Transformers", "REST APIs", "Render"],
    iconType: "vision",
    description: "Diagnostic platform to detect, evaluate, and mitigate hallucinations in modern Vision-Language Models (VLMs) across multimodal visual reasoning tasks.",
    highlights: [
      "Built evaluation pipelines detecting object hallucination and semantic consistency in multimodal models.",
      "Engineered backend inference endpoints with FastAPI, delivering low-latency visual reasoning diagnostics.",
      "Created an intuitive visual inspector comparing ground-truth image tokens against model attention maps.",
      "Deployed on Render Cloud with containerized dependencies and health monitoring."
    ],
    metrics: [
      { name: "Model Support", value: "Multimodal VLMs" },
      { name: "Diagnostic Latency", value: "< 350ms" },
      { name: "Evaluation Metrics", value: "Precision / Recall" },
      { name: "Live Uptime", value: "99.9%" }
    ],
    liveDemo: "https://vlm-hallucination-studio.onrender.com",
    github: "https://github.com/Amanvarma2231/VLM-Hallucination-Studio",
    architecture: "Image & Text Ingestion -> Vision Feature Extractor -> VLM Attention & Token Scorer -> Hallucination Detection Engine -> Render Cloud",
    color: "from-indigo-700/30 via-slate-800 to-slate-900",
    borderGlow: "border-indigo-500/40",
    accentColor: "indigo"
  },
  {
    id: "voice-sentiment",
    title: "Voice Sentiment Analysis",
    tagline: "Real-Time Acoustic & Speech Emotion Classification",
    category: "AI & Audio",
    featured: true,
    badges: ["Python", "Signal Processing", "NLP", "REST APIs", "Vercel"],
    iconType: "audio",
    description: "Multi-modal emotion and sentiment extraction suite processing speech audio waveforms and transcribed text to classify speaker intent.",
    highlights: [
      "Engineered speech preprocessing pipelines for noise reduction, spectrogram extraction, and pitch analysis.",
      "Integrated sentiment scoring combining acoustic tonal cues with NLP lexical classification.",
      "Developed high-throughput API endpoints supporting audio uploads and live streaming.",
      "Deployed on Vercel with serverless routing and optimized bundle loading."
    ],
    metrics: [
      { name: "Emotion Classes", value: "Multi-Class" },
      { name: "Audio Formats", value: "WAV, MP3, WebM" },
      { name: "Processing Speed", value: "Real-time" },
      { name: "Platform", value: "Vercel Cloud" }
    ],
    liveDemo: "https://voice-sentiment12.vercel.app",
    github: "https://github.com/Amanvarma2231/Voice-Sentiment12",
    architecture: "Microphone Audio Stream -> Fast Fourier Transform (FFT) -> Acoustic Feature Extraction + NLP Transcription -> Sentiment Classifier",
    color: "from-slate-700/30 via-slate-800 to-slate-900",
    borderGlow: "border-slate-600/40",
    accentColor: "slate"
  },
  {
    id: "skill-development",
    title: "Skill Development Platform",
    tagline: "Interactive Learning & Assessment Tracking Portal",
    category: "Full Stack",
    featured: true,
    badges: ["JavaScript", "Node.js", "REST APIs", "Tailwind CSS", "Vercel"],
    iconType: "education",
    description: "Developer and student skill development tracking portal featuring modular course curricula, progress analytics, and responsive interactive exercises.",
    highlights: [
      "Engineered an interactive curriculum roadmap with real-time milestone tracking and progress visualization.",
      "Developed modular REST APIs for user assessment scoring, module completion, and badges.",
      "Optimized frontend performance with lazy-loading and responsive layouts for desktop and mobile.",
      "Deployed on Vercel with high-speed global edge network distribution."
    ],
    metrics: [
      { name: "Platform Speed", value: "< 1s First Load" },
      { name: "Deployment", value: "Vercel Edge" },
      { name: "Status", value: "Live" },
      { name: "Architecture", value: "Modular SPA" }
    ],
    liveDemo: "https://skill-development-eosin.vercel.app",
    github: "https://github.com/Amanvarma2231/skill-development",
    architecture: "Client UI -> Vercel Serverless Edge -> Modular Curriculum Store -> Progress State -> Analytics Dashboard",
    color: "from-blue-800/30 via-slate-800 to-slate-900",
    borderGlow: "border-blue-500/40",
    accentColor: "blue"
  }
];

export const experienceData = [
  {
    role: "Python Developer Intern",
    company: "Druidot Consulting (OPC) Pvt. Ltd.",
    location: "Remote",
    period: "Feb 2026 – Present",
    type: "Professional Internship",
    description: "Working on RESTful APIs, database-driven workflows, testing, and CI/CD pipelines in agile sprint cycles.",
    achievements: [
      "Developed and maintained RESTful APIs using Python, Flask, and FastAPI across agile sprint cycles, working with API specifications, backend services, testing, debugging, and iterative feature development.",
      "Built Python-based automated tests and validation checks for database-driven workflows, reducing manual verification effort and improving data quality before production processing.",
      "Performed SQL/NoSQL data validation and pipeline debugging across MySQL and MongoDB, supported database schema integrity, and improved query performance for customer-facing data workflows."
    ],
    skills: ["Python", "Flask", "FastAPI", "SQL", "MySQL", "MongoDB", "RESTful APIs", "API Testing", "Data Validation", "Debugging", "Git"]
  }
];

export const educationData = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "NITRA Technical Campus, AKTU",
    location: "Uttar Pradesh, India",
    period: "May 2022 – June 2026",
    cgpa: "7.12 / 10",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming.",
      "Research: Presented 'Adaptive Residual-Energy Threshold LEACH for Performance & Energy Efficiency' at NGAISL-2026, HRIT University.",
      "Active problem solver on algorithmic platforms with 100+ solved problems."
    ]
  }
];

export const certificationsData = [
  {
    title: "Python Programming Certification",
    issuer: "Infosys Springboard",
    date: "Certified",
    items: [
      "Object-Oriented Programming in Python",
      "Data Structures, File I/O & Memory Optimization",
      "Automated Testing & Exception Handling"
    ],
    icon: "code"
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co. (Forage)",
    date: "Certified",
    items: [
      "Quantitative financial analysis & algorithmic models",
      "Commodity price modeling & data exploration",
      "Python data extraction & risk metrics"
    ],
    icon: "trending-up"
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "Udemy",
    date: "Certified",
    items: [
      "Network Security, OWASP Top 10, Auth & CSRF Mitigation",
      "Data Encryption, Secure Sessions & Access Controls"
    ],
    icon: "shield"
  }
];

export const publicationsData = [
  {
    title: "Adaptive Residual-Energy Threshold LEACH for Performance & Energy Efficiency",
    venue: "International Conference on Next-Gen AI & Smart Logistics (NGAISL-2026)",
    institution: "HRIT University",
    date: "April 2026",
    abstract: "Presented an adaptive residual-energy threshold clustering mechanism for LEACH protocol to maximize network lifetime, mitigate node death imbalances, and enhance communication throughput in distributed sensor architectures.",
    tags: ["Research Paper", "Algorithms", "Network Protocols", "Energy Optimization"]
  }
];

export const skillsData = {
  languages: [
    { name: "Python", level: "Expert", desc: "Core language, AsyncIO, OOP, Scripting, Automation" },
    { name: "Java", level: "Intermediate", desc: "Core OOP, Collections, Multi-threading basics" },
    { name: "JavaScript", level: "Proficient", desc: "ES6+, Async/Await, Web integrations" },
    { name: ".NET", level: "Working Knowledge", desc: "C# fundamentals, backend service basics" }
  ],
  backend: [
    { name: "FastAPI", level: "Advanced", desc: "Async Endpoints, Pydantic, High Concurrency, OpenAPI" },
    { name: "Flask", level: "Advanced", desc: "REST APIs, Blueprints, Auth, Session Management" },
    { name: "Node.js & Express.js", level: "Intermediate", desc: "Microservices, Routing, Middleware" },
    { name: "RESTful APIs & Web Services", level: "Expert", desc: "API Design, Specifications, CRUD, OpenAPI" }
  ],
  apiIntegration: [
    { name: "REST API Design", level: "Expert", desc: "Standards-based URI structures, HTTP methods, Status codes" },
    { name: "API Specifications & OpenAPI", level: "Advanced", desc: "Swagger documentation, Schema definitions" },
    { name: "API Testing", level: "Advanced", desc: "Postman, PyTest, Automated endpoint validation" },
    { name: "OAuth 2.0 & JWT", level: "Advanced", desc: "Secure token authentication, Bearer auth, Access control" }
  ],
  databases: [
    { name: "SQL & Relational DBs", level: "Advanced", desc: "Database Schema Design, CRUD Operations, Queries" },
    { name: "MySQL", level: "Advanced", desc: "Relational Schemas, Constraints, Foreign Keys, Indexing" },
    { name: "SQLite", level: "Advanced", desc: "Embedded Storage, Fast In-Memory DB, Lightweight persistence" },
    { name: "MongoDB", level: "Intermediate", desc: "NoSQL document stores, JSON schemas, Collections" },
    { name: "SQLAlchemy", level: "Advanced", desc: "Python ORM, Model declarations, Sessions, Migrations" }
  ],
  testing: [
    { name: "Unit Testing & Automated Testing", level: "Advanced", desc: "PyTest, Unittest, Mocking, Test suites" },
    { name: "Data Validation", level: "Expert", desc: "SQL/NoSQL data validation, Schema checks, Integrity" },
    { name: "Debugging & Code Review", level: "Advanced", desc: "Error tracking, Root-cause analysis, Code quality" }
  ],
  devopsTools: [
    { name: "Git & GitHub", level: "Advanced", desc: "Branching, Pull Requests, Code Reviews, Version control" },
    { name: "GitHub Actions & CI/CD", level: "Advanced", desc: "Automated Build, Test & Lint Pipelines (26 tests)" },
    { name: "Docker", level: "Intermediate", desc: "Containerization, Dockerfile, Container deployment" },
    { name: "Agile & Scrum", level: "Proficient", desc: "Sprint cycles, Iterative feature development, Daily standups" }
  ]
};