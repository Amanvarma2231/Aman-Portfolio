import React from "react";
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  FileText
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-4xl h-[94vh] bg-[#0d131f] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#090d16] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
            <span className="font-mono text-xs sm:text-sm font-bold text-white">Aman_Varma_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Direct Official PDF Download Button */}
            <a
              href="/Aman_Varma_Resume.pdf"
              download="Aman_Varma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium font-mono bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-sm transition-all active:scale-95"
              title="Download Original Resume PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-2 text-xs font-mono bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-lg transition-colors"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real Document Preview Area (Formatted Exactly like the Resume) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#070a10] text-slate-900 font-sans">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 rounded-lg p-6 sm:p-10 space-y-5 shadow-2xl text-[13px] leading-relaxed border border-slate-200">
            
            {/* Document Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-300 pb-4 gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif">
                  Aman Varma
                </h1>
                <div className="flex items-center gap-2 text-xs text-blue-700 font-medium pt-1">
                  <a href="https://aman-portflio-chi.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
                  <span>|</span>
                  <a href="https://www.linkedin.com/in/aman-v-697771345" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                  <span>|</span>
                  <a href="https://github.com/Amanvarma2231" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>
              </div>

              <div className="text-right text-xs text-slate-600 font-medium">
                <div>Ghaziabad, India</div>
                <div>Mobile: +91-6306572504</div>
                <div>Email: <a href="mailto:amangurauli@gmail.com" className="text-blue-700 hover:underline">amangurauli@gmail.com</a></div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-slate-300 pb-0.5">
                Professional Summary
              </h2>
              <p className="text-slate-800 text-[12.5px] leading-relaxed">
                B.Tech Computer Science & Engineering graduate with hands-on experience developing <strong>RESTful APIs, backend services, database-driven applications, automated testing workflows, and CI/CD pipelines</strong> in agile sprint environments. Skilled in <strong>Python, Java, JavaScript, .NET, FastAPI, Flask, SQL/NoSQL databases, API specifications, API testing, code review, automation, and Git</strong>. Experienced in developing customer-facing web applications, integrating backend services, validating data, and delivering software through iterative development and testing.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-slate-300 pb-0.5">
                Technical Skills
              </h2>
              <div className="space-y-0.5 text-[12px] text-slate-800">
                <div className="grid grid-cols-12 gap-1">
                  <span className="col-span-3 font-semibold text-slate-900">Languages</span>
                  <span className="col-span-9">: Python, Java, JavaScript, .NET</span>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  <span className="col-span-3 font-semibold text-slate-900">Backend</span>
                  <span className="col-span-9">: FastAPI, Flask, Node.js, Express.js, RESTful APIs, Web Services</span>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  <span className="col-span-3 font-semibold text-slate-900">API & Integration</span>
                  <span className="col-span-9">: REST API Design, API Specifications, OpenAPI, API Integration, API Testing, OAuth 2.0, JWT, HTTP</span>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  <span className="col-span-3 font-semibold text-slate-900">Databases</span>
                  <span className="col-span-9">: SQL, MySQL, SQLite, MongoDB, SQLAlchemy, Database Schema Design, CRUD Operations</span>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  <span className="col-span-3 font-semibold text-slate-900">Testing</span>
                  <span className="col-span-9">: Unit Testing, Automated Testing, Test Automation, Data Validation, Debugging</span>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  <span className="col-span-3 font-semibold text-slate-900">DevOps & Tools</span>
                  <span className="col-span-9">: Git, GitHub, GitHub Actions, CI/CD, Docker, Code Review, GitHub Pull Requests, Agile, Scrum</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-slate-300 pb-0.5">
                Education
              </h2>
              <div className="flex justify-between items-baseline text-xs text-slate-800">
                <div>
                  <span className="font-bold text-slate-900">NITRA Technical Campus, AKTU</span>
                  <div className="text-slate-700 italic">B.Tech, Computer Science & Engineering <span className="font-bold font-sans not-italic text-slate-900">CGPA: 7.12/10</span></div>
                </div>
                <div className="text-right text-slate-700">
                  <div>Uttar Pradesh, India</div>
                  <div>May 2022 – June 2026</div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-slate-300 pb-0.5">
                Experience
              </h2>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-900">Python Developer Intern</span>
                  <span className="text-slate-700 font-medium">Feb 2026 – Present</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700 italic">
                  <span>Druidot Consulting (OPC) Pvt. Ltd.</span>
                  <span>Remote</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[12px] text-slate-800 space-y-1 pt-0.5">
                  <li>Developed and maintained <strong>RESTful APIs using Python, Flask, and FastAPI</strong> across agile sprint cycles, working with API specifications, backend services, testing, debugging, and iterative feature development.</li>
                  <li>Built <strong>Python-based automated tests and validation checks</strong> for database-driven workflows, reducing manual verification effort and improving data quality before production processing.</li>
                  <li>Performed <strong>SQL/NoSQL data validation and pipeline debugging</strong> across MySQL and MongoDB, supported database schema integrity, and improved query performance for customer-facing data workflows.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-slate-300 pb-0.5">
                Projects
              </h2>

              {/* NLPCRM */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-slate-900">NLPCRM – AI-Powered CRM Platform</span>
                    <span className="text-slate-600 ml-2 italic">Python, FastAPI, Flask, MySQL, SQLite, REST APIs</span>
                  </div>
                  <a href="https://github.com/Amanvarma2231/NLPCRM" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline text-xs font-medium">GitHub</a>
                </div>
                <ul className="list-disc list-outside ml-4 text-[12px] text-slate-800 space-y-0.5">
                  <li>Designed and developed <strong>25+ RESTful API endpoints</strong> across contacts, NLP, email, and webhook modules, implementing API specifications, CRUD operations, input validation, and modular backend workflows.</li>
                  <li>Integrated <strong>MySQL and SQLite using SQLAlchemy</strong> for structured data persistence and database-driven workflows, supporting reliable customer and application data management.</li>
                  <li>Implemented <strong>OAuth 2.0 authentication, JWT-based access control, rate limiting, and input validation</strong>.</li>
                </ul>
              </div>

              {/* ContentDesk */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-slate-900">ContentDesk – AI Content & Data Processing Platform</span>
                    <span className="text-slate-600 ml-2 italic">Python, Flask, SQLite, REST APIs, GitHub Actions</span>
                  </div>
                  <a href="https://github.com/Amanvarma2231/Content-Desk" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline text-xs font-medium">GitHub</a>
                </div>
                <ul className="list-disc list-outside ml-4 text-[12px] text-slate-800 space-y-0.5">
                  <li>Engineered a <strong>shared Python/Flask backend</strong> serving web and desktop application channels, centralizing business logic and database-access workflows for consistent application behavior.</li>
                  <li>Developed an <strong>SEO-scoring crawler and TF-IDF near-duplicate detection workflow</strong> to automate content analysis and generate <strong>data-driven recommendations</strong>.</li>
                  <li>Implemented <strong>26 automated unit tests in GitHub Actions CI</strong>, enabling automated testing on pull requests and improving software reliability across iterative development cycles.</li>
                </ul>
              </div>
            </div>

            {/* Certifications & Activities */}
            <div className="space-y-1 pt-1">
              <h2 className="text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-slate-300 pb-0.5">
                Certifications & Activities
              </h2>
              <ul className="list-disc list-outside ml-4 text-[12px] text-slate-800 space-y-0.5">
                <li><strong>Python Programming Certification</strong> – Infosys Springboard &bull; <strong>Quantitative Research Job Simulation</strong> – JPMorgan</li>
                <li>Presented <strong>“Adaptive Residual-Energy Threshold LEACH for Performance & Energy Efficiency”</strong> at NGAISL-2026, HRIT University (Apr 2026).</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}