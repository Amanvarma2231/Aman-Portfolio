export const personalInfo = {
  name: "Aman Varma",
  headline: "Python Developer & Software Engineer developing RESTful APIs, microservices, database-driven applications, and CI/CD pipelines.",
  subheadline: "Experienced in Python, FastAPI, Flask, SQL/NoSQL databases, Redis, gRPC, API testing, data validation, and AWS/Cloud deployments in agile environments.",
  location: "Ghaziabad, India",
  email: "amangurauli@gmail.com",
  phone: "+91-6306572504",
  github: "https://github.com/Amanvarma2231",
  githubUsername: "Amanvarma2231",
  linkedin: "https://www.linkedin.com/in/aman-v-697771345",
  status: "Open for Python Developer / Backend Engineer / Software Engineer roles",
  bio: "B.Tech Computer Science & Engineering graduate with hands-on experience as a Python Developer at Druidot Consulting. Skilled in Python, FastAPI, Flask, gRPC, SQL/NoSQL databases (MySQL, PostgreSQL, Redis, MongoDB), RESTful API design, automated testing, and CI/CD cloud pipelines in agile sprint environments.",
  stats: [
    { label: "REST APIs & gRPC Services", value: "25+", desc: "CRUD, Auth & Validation" },
    { label: "Automated CI/CD Tests", value: "26+", desc: "GitHub Actions & Jenkins" },
    { label: "Production Records", value: "1,000+", desc: "MySQL, PostgreSQL & Redis" },
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
    id: "microservices-arch",
    title: "1. Microservices Architecture",
    tagline: "High-Performance gRPC / REST Services & Docker Containerization",
    category: "Microservices",
    featured: true,
    badges: ["Python", "FastAPI", "gRPC", "REST APIs", "Docker", "Protobuf"],
    iconType: "crm",
    description: "Decoupled microservices architecture leveraging high-speed gRPC binary serialization and FastAPI REST gateways, packaged with Docker for containerized orchestration.",
    highlights: [
      "Architected gRPC and REST communication protocols between decoupled Python microservices.",
      "Implemented Protocol Buffers (Protobuf) for strongly-typed, low-latency inter-service payload transport.",
      "Containerized microservices using Docker and multi-stage builds for minimal image footprint.",
      "Configured API Gateway routing with rate-limiting, JWT authentication, and health checks."
    ],
    metrics: [
      { name: "Service Latency", value: "< 15ms (gRPC)" },
      { name: "Protocols", value: "gRPC & REST" },
      { name: "Containerization", value: "Docker Multi-stage" },
      { name: "Isolation", value: "Independent Scale" }
    ],
    liveDemo: "https://npcrm-1.onrender.com",
    github: "https://github.com/Amanvarma2231/NLPCRM",
    architecture: "API Gateway -> gRPC Inter-Service Communication -> Dockerized Microservices -> Auth & Rate Limiting -> Response Aggregation",
    color: "from-cyan-600/30 via-slate-800 to-slate-900",
    borderGlow: "border-cyan-500/40",
    accentColor: "cyan"
  },
  {
    id: "cache-system",
    title: "2. High-Throughput Cache & DB System",
    tagline: "PostgreSQL + Redis Caching & SQLAlchemy ORM Persistence",
    category: "Backend & Databases",
    featured: true,
    badges: ["PostgreSQL", "Redis", "SQLAlchemy ORM", "Python", "FastAPI", "Caching"],
    iconType: "data",
    description: "High-speed database and caching architecture combining PostgreSQL transactional storage with Redis in-memory key-value caching to optimize query throughput.",
    highlights: [
      "Integrated Redis in-memory cache layer to reduce PostgreSQL read pressure for hot database queries.",
      "Utilized SQLAlchemy ORM with async connection pooling and session management.",
      "Implemented Cache-Aside pattern with automated TTL invalidation on record mutation.",
      "Achieved sub-10ms response times on frequently accessed customer data endpoints."
    ],
    metrics: [
      { name: "Cache Hit Rate", value: "> 94%" },
      { name: "Query Speed", value: "< 8ms (Redis)" },
      { name: "Storage", value: "PostgreSQL + Redis" },
      { name: "Concurrency", value: "Async Connection Pool" }
    ],
    liveDemo: "https://content-desk.onrender.com",
    github: "https://github.com/Amanvarma2231/Content-Desk",
    architecture: "Client Request -> Redis In-Memory Cache (Hit) OR PostgreSQL (Miss) -> SQLAlchemy Async ORM -> Response Cache Update",
    color: "from-emerald-600/30 via-slate-800 to-slate-900",
    borderGlow: "border-emerald-500/40",
    accentColor: "emerald"
  },
  {
    id: "devops-cloud",
    title: "3. DevOps & Cloud Infrastructure Pipeline",
    tagline: "CI/CD Automation (GitHub Actions + Jenkins) & AWS Cloud Deployment",
    category: "DevOps & Cloud",
    featured: true,
    badges: ["CI/CD", "GitHub Actions", "Jenkins", "AWS Infrastructure", "Docker", "Git"],
    iconType: "portfolio",
    description: "Automated end-to-end DevOps pipeline featuring GitHub Actions and Jenkins for build-test-deploy cycles, container image registries, and cloud infrastructure deployment.",
    highlights: [
      "Configured multi-stage CI/CD pipelines executing automated unit testing, linting, and security audits.",
      "Automated Docker container builds and image publishing on every pull request.",
      "Managed deployment workflows targeting cloud infrastructure with zero-downtime rolling updates.",
      "Integrated automated regression test suites enforcing 26+ passing unit tests prior to release."
    ],
    metrics: [
      { name: "Pipeline Speed", value: "< 2.5 mins" },
      { name: "CI Tools", value: "GitHub Actions + Jenkins" },
      { name: "Test Coverage", value: "26+ Unit Tests" },
      { name: "Cloud Target", value: "AWS / Cloud Edge" }
    ],
    liveDemo: "https://aman-portflio-chi.vercel.app",
    github: "https://github.com/Amanvarma2231/Aman-Portflio",
    architecture: "Git Commit -> GitHub Actions / Jenkins Pipeline -> Automated PyTest Suite -> Docker Registry Build -> AWS Cloud Deployment",
    color: "from-blue-700/30 via-slate-800 to-slate-900",
    borderGlow: "border-blue-500/40",
    accentColor: "blue"
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
    { name: "JavaScript", level: "Proficient", desc: "ES6+, Async/Await, Web integrations" }
  ],
  backend: [
    { name: "FastAPI & Flask", level: "Advanced", desc: "Async Endpoints, Pydantic, High Concurrency, OpenAPI" },
    { name: "Node.js & Express.js", level: "Intermediate", desc: "Microservices, Routing, Middleware" },
    { name: "RESTful APIs & gRPC Services", level: "Expert", desc: "API Design, Specifications, CRUD, OpenAPI, Protobuf" },
    { name: "Web Services", level: "Advanced", desc: "Decoupled backend integration, HTTP standards" }
  ],
  apiIntegration: [
    { name: "REST API Design & gRPC", level: "Expert", desc: "URI structures, HTTP methods, Status codes, Protobuf binary" },
    { name: "API Specifications & OpenAPI", level: "Advanced", desc: "Swagger documentation, Schema definitions" },
    { name: "API Testing", level: "Advanced", desc: "Postman, PyTest, Automated endpoint validation" },
    { name: "OAuth 2.0 & JWT", level: "Advanced", desc: "Secure token authentication, Bearer auth, Access control" }
  ],
  databases: [
    { name: "SQL, MySQL & PostgreSQL", level: "Advanced", desc: "Relational Schemas, Constraints, Foreign Keys, Indexing" },
    { name: "Redis Caching", level: "Advanced", desc: "In-memory caching, Query throughput acceleration, TTL" },
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
    { name: "Docker & Containerization", level: "Advanced", desc: "Dockerfile, Multi-stage builds, Container orchestration" },
    { name: "Jenkins & OpenShift", level: "Proficient", desc: "Automated pipelines, Enterprise deployment jobs" },
    { name: "GitHub Actions & CI/CD", level: "Advanced", desc: "Automated Build, Test & Lint Pipelines (26 tests)" },
    { name: "AWS & Cloud Deployments", level: "Proficient", desc: "Cloud infrastructure, Edge CDN, Automated deployments" },
    { name: "Git, GitHub & Agile/Scrum", level: "Advanced", desc: "Branching, Pull Requests, Code Reviews, Sprint cycles" }
  ]
};