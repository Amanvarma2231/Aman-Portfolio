export const personalInfo = {
  name: "Aman Varma",
  headline: "Python Developer & Software Engineer building high-throughput backends, intelligent AI systems, and robust data pipelines.",
  subheadline: "Specializing in Python (Flask & FastAPI), LLM / VLM vision integrations, Voice Sentiment processing, and automated ETL data validation.",
  location: "Ghaziabad, India",
  email: "amangurauli@gmail.com",
  phone: "+91-6306572504",
  github: "https://github.com/Amanvarma2231",
  githubUsername: "Amanvarma2231",
  linkedin: "https://www.linkedin.com/in/aman-v-697771345",
  status: "Available for Python Developer / Backend Engineer / Software Engineer roles",
  bio: "B.Tech Computer Science graduate with hands-on experience as a Python Developer at Druidot Consulting. Passionate about architecting resilient backend systems, LLM/VLM hallucination mitigation engines, voice sentiment pipelines, and automated CI/CD workflows.",
  stats: [
    { label: "REST APIs Architected", value: "25+", desc: "Full CRUD & Auth Coverage" },
    { label: "Automated CI/CD Tests", value: "26+", desc: "GitHub Actions Pipeline" },
    { label: "Live Deployed Projects", value: "5+", desc: "Vercel & Render Cloud" },
    { label: "DSA Problems Solved", value: "100+", desc: "Algorithms & Structures" },
  ]
};

export const projectsData = [
  {
    id: "vlm-hallucination",
    title: "VLM Hallucination Studio",
    tagline: "Vision-Language Model Analysis, Hallucination Detection & Diagnostic Hub",
    category: "AI & Vision",
    featured: true,
    badges: ["Python", "FastAPI", "Vision-Language Models", "PyTorch", "Render", "REST APIs"],
    iconType: "vision",
    description: "An advanced diagnostic research platform to detect, evaluate, and mitigate hallucinations in modern Vision-Language Models (VLMs) across multimodal visual reasoning tasks.",
    highlights: [
      "Built structured evaluation pipelines to benchmark object hallucination and semantic consistency in multimodal models.",
      "Engineered high-performance backend inference endpoints with FastAPI, delivering low-latency visual reasoning diagnostics.",
      "Created an intuitive visual inspector to compare ground-truth image tokens against model attention maps.",
      "Deployed on Render Cloud with automated health checks and containerized dependencies."
    ],
    metrics: [
      { name: "Model Support", value: "Multimodal VLMs" },
      { name: "Diagnostic Latency", value: "< 350ms" },
      { name: "Evaluation Metrics", value: "Precision / Recall" },
      { name: "Live Uptime", value: "99.9%" }
    ],
    liveDemo: "https://vlm-hallucination-studio.onrender.com",
    github: "https://github.com/Amanvarma2231/VLM-Hallucination-Studio",
    architecture: "Image & Text Ingestion -> Vision Feature Extractor -> VLM Attention & Token Scorer -> Hallucination Detection Engine -> Diagnostic Dashboard -> Render Cloud",
    color: "from-purple-500/30 via-indigo-500/20 to-cyan-500/10",
    borderGlow: "border-purple-500/40",
    accentColor: "purple"
  },
  {
    id: "voice-sentiment",
    title: "Voice Sentiment Analysis",
    tagline: "Real-Time Acoustic & Textual Speech Emotion Intelligence",
    category: "AI & Audio",
    featured: true,
    badges: ["Python", "Speech-to-Text", "Audio Signal Processing", "NLP", "Vercel", "REST APIs"],
    iconType: "audio",
    description: "Multi-modal emotion and sentiment extraction suite that processes speech audio waveforms and transcribed text to classify speaker intent, valence, and emotional arousal.",
    highlights: [
      "Engineered speech preprocessing pipelines for noise reduction, spectrogram feature extraction, and pitch analysis.",
      "Integrated real-time sentiment scoring combining acoustic tonal cues with NLP lexical classification.",
      "Developed high-throughput API endpoints supporting audio file uploads and live microphone streaming.",
      "Deployed on Vercel with serverless routing and optimized bundle loading."
    ],
    metrics: [
      { name: "Emotion Classes", value: "Multi-Class Sentiment" },
      { name: "Audio Formats", value: "WAV, MP3, WebM" },
      { name: "Processing Speed", value: "Real-time" },
      { name: "Platform", value: "Vercel Cloud" }
    ],
    liveDemo: "https://voice-sentiment12.vercel.app",
    github: "https://github.com/Amanvarma2231/Voice-Sentiment12",
    architecture: "Microphone Audio Stream -> Fast Fourier Transform (FFT) -> Acoustic Feature Extraction + NLP Transcription -> Sentiment Classifier -> Real-Time Emotion Gauges",
    color: "from-rose-500/30 via-pink-500/20 to-indigo-500/10",
    borderGlow: "border-rose-500/40",
    accentColor: "rose"
  },
  {
    id: "nlpcrm",
    title: "NLPCRM – AI-Powered CRM Platform",
    tagline: "Intelligent Lead Extraction & Real-Time Sentiment Analysis Engine",
    category: "Backend & AI",
    featured: true,
    badges: ["Python", "Flask", "Qwen 2.5 (LLM)", "MySQL / SQLite", "REST APIs", "OAuth 2.0", "Render"],
    iconType: "crm",
    description: "Production-ready CRM platform featuring automated lead extraction from unstructured text via Qwen 2.5 LLM, 25+ normalized REST API endpoints, and multi-channel synchronization.",
    highlights: [
      "Architected 25+ REST API endpoints across contacts, AI/NLP, email, and webhook modules with full CRUD coverage.",
      "Integrated Qwen 2.5 LLM (via Hugging Face) for zero-shot lead extraction & automated 0–10 lead scoring with sentiment analysis.",
      "Engineered production-grade security: session auth, CSRF protection, Google OAuth 2.0, and strict rate-limiting.",
      "Synchronized data pipelines across WhatsApp, Email, and Teams channels into a normalized MySQL/SQLite schema."
    ],
    metrics: [
      { name: "REST Endpoints", value: "25+" },
      { name: "Lead Scoring", value: "0–10 AI Dynamic" },
      { name: "Security Incidents", value: "0" },
      { name: "Live Uptime", value: "99.9%" }
    ],
    liveDemo: "https://npcrm-1.onrender.com",
    github: "https://github.com/Amanvarma2231/NLPCRM",
    architecture: "Frontend / Webhook -> Flask Auth & Rate Limiter -> Qwen 2.5 Hugging Face Inference -> Sentiment & Lead Scoring -> MySQL / SQLite Transaction -> Real-time CRM Dashboard",
    color: "from-cyan-500/30 via-blue-500/20 to-teal-500/10",
    borderGlow: "border-cyan-500/40",
    accentColor: "cyan"
  },
  {
    id: "content-desk",
    title: "Content Desk – AI Content & Data Processing",
    tagline: "Automated SEO Scoring, TF-IDF Deduplication & Content Auditing",
    category: "Data Engineering",
    featured: true,
    badges: ["Python", "Flask", "Tkinter", "SQLite", "TF-IDF", "REST APIs", "GitHub Actions CI"],
    iconType: "data",
    description: "Dual-interface content intelligence platform with unified core engine powering both a Flask web dashboard and a Tkinter desktop suite with automated CI/CD validation.",
    highlights: [
      "Designed a decoupled shared core engine consumed by both Flask web dashboard and Tkinter desktop GUI without duplicating business logic.",
      "Built an SEO-scoring crawler and TF-IDF near-duplicate detector with automated Keep/Refresh/Consolidate/Remove recommendations.",
      "Configured a robust GitHub Actions CI pipeline executing 26 automated unit tests on every pull request.",
      "Engineered high-speed SQLite persistence with structured CSV/JSON batch export workflows."
    ],
    metrics: [
      { name: "CI/CD Unit Tests", value: "26 Tests Passing" },
      { name: "Engine Duplication", value: "0%" },
      { name: "Export Formats", value: "CSV, JSON, SQLite" },
      { name: "Analysis Latency", value: "< 800ms" }
    ],
    liveDemo: "https://content-desk.onrender.com",
    github: "https://github.com/Amanvarma2231/Content-Desk",
    architecture: "Data Ingestion -> TF-IDF Vectorizer -> Cosine Similarity & SEO Scorer -> Decision Engine (Keep/Refresh/Remove) -> Dual UI (Flask / Tkinter) -> GitHub Actions CI",
    color: "from-emerald-500/30 via-teal-500/20 to-cyan-500/10",
    borderGlow: "border-emerald-500/40",
    accentColor: "emerald"
  },
  {
    id: "skill-development",
    title: "Skill Development Platform",
    tagline: "Interactive Learning, Skill Tracking & Assessment Hub",
    category: "Full Stack",
    featured: true,
    badges: ["React.js", "Node.js", "REST APIs", "Tailwind CSS", "Vercel", "Analytics"],
    iconType: "education",
    description: "A modern developer and student skill development tracking portal featuring modular course curricula, progress analytics, and responsive interactive exercises.",
    highlights: [
      "Engineered an interactive curriculum roadmap with real-time milestone tracking and progress visualization.",
      "Developed modular REST APIs for user assessment scoring, module completion, and badges.",
      "Optimized frontend performance with lazy-loading and responsive layouts for desktop and mobile.",
      "Deployed on Vercel with high-speed global edge network distribution."
    ],
    metrics: [
      { name: "Platform Speed", value: "< 1s First Load" },
      { name: "UI Framework", value: "React + Tailwind" },
      { name: "Deployment", value: "Vercel Edge" },
      { name: "Status", value: "Live" }
    ],
    liveDemo: "https://skill-development-eosin.vercel.app",
    github: "https://github.com/Amanvarma2231/skill-development",
    architecture: "React Client -> Vercel Edge Server -> Modular Curriculum Store -> User Progress State -> Real-time Analytics Dashboard",
    color: "from-amber-500/30 via-orange-500/20 to-yellow-500/10",
    borderGlow: "border-amber-500/40",
    accentColor: "amber"
  }
];

export const experienceData = [
  {
    role: "Python Developer Intern",
    company: "Druidot Consulting (OPC) Pvt. Ltd.",
    location: "Remote",
    period: "Feb 2026 – Present",
    type: "Professional Internship",
    description: "Working on enterprise backend architecture, database verification suites, and automated REST API pipelines.",
    achievements: [
      "Developed Python-based validation checks and automated test suites for database-driven workflows, significantly improving data quality and eliminating manual verification cycles.",
      "Built and maintained Python REST APIs (Flask/FastAPI) powering database operations, measured by improved data-access reliability through standards-based API design.",
      "Owned data-pipeline debugging and validation, implementing structured schema checks across MySQL and MongoDB data stores before records reach production.",
      "Designed optimized database schemas supporting AI-driven application features, improving query performance on 1,000+ live records.",
      "Automated CI/CD build-test-deploy workflows via Git and GitHub Actions, reducing manual release overhead."
    ],
    skills: ["Python", "Flask", "FastAPI", "MySQL", "MongoDB", "Data Validation", "ETL Pipelines", "GitHub Actions", "Docker"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "NITRA Technical Campus, AKTU",
    location: "Uttar Pradesh, India",
    period: "May 2022 – June 2026",
    cgpa: "7.12 / 10",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.",
      "Final Year Research Paper on Energy Efficiency in Wireless Sensor Networks presented at NGAISL-2026.",
      "Active problem solver on algorithmic platforms with 100+ solved problems."
    ]
  }
];

export const certificationsData = [
  {
    title: "SAP Certified Learning Track",
    issuer: "SAP Learning",
    date: "Aug 2026",
    items: [
      "Exploring SAP Cloud ERP",
      "Cloud Onboarding for SAP Cloud ERP",
      "Developing a Universe: Fundamental Concepts of SAP BusinessObjects IDT",
      "Developing a Universe: Advanced Concepts of SAP BusinessObjects IDT",
      "SAP Clean Core, RISE & GROW with SAP"
    ],
    icon: "database"
  },
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
  backend: [
    { name: "Python", level: "Expert", desc: "Core language, AsyncIO, OOP, Scripting, Automation" },
    { name: "FastAPI", level: "Advanced", desc: "Async Endpoints, Pydantic, High Concurrency, Swagger" },
    { name: "Flask", level: "Advanced", desc: "REST APIs, Blueprints, Auth, Session Management" },
    { name: "Django", level: "Intermediate", desc: "ORM, MVC Architecture, Admin Portal" },
    { name: "RESTful APIs", level: "Expert", desc: "25+ Endpoints, Rate Limiting, CORS, Webhooks" },
    { name: "Node.js & Express", level: "Intermediate", desc: "Backend microservices, Event loop" },
    { name: "SQL & Query Tuning", level: "Advanced", desc: "Complex Joins, Indexing, Normalization" }
  ],
  aiData: [
    { name: "VLM & Vision AI", level: "Advanced", desc: "Hallucination Diagnostics, Multimodal Analysis" },
    { name: "Speech & Audio NLP", level: "Advanced", desc: "Voice Sentiment, Spectrogram & Waveform Processing" },
    { name: "LLM Integration", level: "Advanced", desc: "Qwen 2.5, Hugging Face Inference, Prompt Chaining" },
    { name: "TF-IDF Vectorization", level: "Advanced", desc: "Text Deduplication, Content Similarity Scoring" },
    { name: "ETL / ELT Pipelines", level: "Advanced", desc: "Data Ingestion, Transformation, Cleaning" },
    { name: "Data Validation", level: "Expert", desc: "Automated Data Quality & Integrity Checks" }
  ],
  databases: [
    { name: "MySQL", level: "Advanced", desc: "Relational Schemas, Constraints, Foreign Keys" },
    { name: "PostgreSQL", level: "Intermediate", desc: "ACID Transactions, Complex Queries" },
    { name: "MongoDB", level: "Intermediate", desc: "Document Stores, Aggregation Pipelines" },
    { name: "SQLite", level: "Advanced", desc: "Embedded Storage, Fast In-Memory Testing" }
  ],
  testingDevOps: [
    { name: "Playwright", level: "Intermediate", desc: "End-to-End Web Automation & Testing" },
    { name: "Python Test Automation", level: "Advanced", desc: "PyTest, Unittest, Mocking, Fixtures" },
    { name: "GitHub Actions CI/CD", level: "Advanced", desc: "Automated Build, Test & Lint Pipelines" },
    { name: "Docker", level: "Intermediate", desc: "Containerization, Dockerfile, Compose" },
    { name: "Git & GitHub", level: "Advanced", desc: "Branching, Pull Requests, Code Reviews" },
    { name: "GCP Fundamentals", level: "Intermediate", desc: "Cloud Storage, Compute, IAM Basics" }
  ],
  sapAndLanguages: [
    { name: "SAP Cloud ERP", level: "Certified", desc: "Clean Core, Cloud Onboarding, RISE & GROW" },
    { name: "SAP BusinessObjects IDT", level: "Certified", desc: "Universe Design, Data Foundation, Business Layer" },
    { name: "Java & C/C++", level: "Intermediate", desc: "OOP, Memory Management, Algorithms" },
    { name: "JavaScript & React", level: "Advanced", desc: "Modern SPA UI, Hooks, State Management" },
    { name: "HTML5 & Tailwind CSS", level: "Advanced", desc: "Responsive Design, Glassmorphism, UI/UX" }
  ]
};