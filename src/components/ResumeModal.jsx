import React from "react";
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award,
  Layers,
  FileDown,
  FileText
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, experienceData, educationData, certificationsData, skillsData, publicationsData, projectsData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl h-[94vh] bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <span className="font-mono text-xs sm:text-sm font-bold text-white">Aman_Varma_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Direct Official PDF Download Button */}
            <a
              href="/Aman_Varma_Resume.pdf"
              download="Aman_Varma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg shadow-md transition-all active:scale-95"
              title="Download Original Resume PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download Real PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-2 text-xs font-mono bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors"
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

        {/* Resume Document Viewer */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#090d16] text-slate-200 font-sans space-y-6">
          <div className="max-w-3xl mx-auto bg-[#0e1628] border border-slate-800 rounded-xl p-6 sm:p-10 space-y-6 shadow-2xl text-slate-300 text-xs sm:text-sm leading-relaxed resume-print-area">
            
            {/* Header / Contact Details */}
            <div className="text-center space-y-2 border-b border-slate-800 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="text-xs font-mono text-cyan-400 font-semibold">
                Python Developer • Backend Engineer • Software Engineer
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" />{personalInfo.location}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-cyan-400" />{personalInfo.phone}</span>
                <span>•</span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 text-cyan-400 hover:underline"><Mail className="w-3 h-3" />{personalInfo.email}</a>
                <span>•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline"><LinkedinIcon className="w-3 h-3" />linkedin.com/in/aman-v-697771345</a>
                <span>•</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline"><GithubIcon className="w-3 h-3" />github.com/Amanvarma2231</a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                B.Tech Computer Science graduate with hands-on experience as a Python Developer at Druidot Consulting, specializing in backend development, REST APIs, SQL, ETL/data pipelines, and data validation. Strong foundation in API testing, automated testing, debugging, databases, Git, and CI/CD, with hands-on experience building cloud-deployed applications across Vision-Language Models and Voice Sentiment NLP.
              </p>
            </div>

            {/* Core Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Core Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-slate-300">
                <div><span className="font-semibold text-white">Languages:</span> Python, SQL, Java, C/C++, JavaScript, HTML, CSS, HTTP</div>
                <div><span className="font-semibold text-white">Testing & Automation:</span> Playwright, Python Test Automation, API Testing, ETL/Data Validation, Unit Testing (PyTest)</div>
                <div><span className="font-semibold text-white">AI / Data:</span> VLM Hallucination Diagnostics, Voice Sentiment Analysis, Qwen 2.5 LLM, TF-IDF, Information Retrieval</div>
                <div><span className="font-semibold text-white">Backend & APIs:</span> FastAPI, Flask, Django, REST APIs, Node.js, Express.js</div>
                <div><span className="font-semibold text-white">Databases:</span> MySQL, PostgreSQL, MongoDB, SQLite</div>
                <div><span className="font-semibold text-white">Cloud & DevOps:</span> Docker, Git/GitHub, CI/CD (GitHub Actions), GCP Fundamentals, Vercel, Render</div>
                <div><span className="font-semibold text-white">SAP Enterprise:</span> SAP Cloud ERP, SAP BusinessObjects IDT (Universe Design), SAP Clean Core</div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Professional Experience
              </h2>
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-baseline text-xs font-bold text-white">
                    <span>{exp.role} – <span className="text-cyan-400">{exp.company}</span></span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Featured Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Key Featured Projects
              </h2>
              
              {/* NLPCRM */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>NLPCRM – AI-Powered CRM Platform</span>
                  <span className="text-cyan-400 font-mono text-[11px]">Flask, Qwen 2.5 LLM, MySQL, OAuth 2.0</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  GitHub: github.com/Amanvarma2231/NLPCRM | Demo: npcrm-1.onrender.com
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                  <li>Architected 25+ REST API endpoints and integrated Qwen 2.5 LLM for automated lead scoring (0–10).</li>
                </ul>
              </div>

              {/* Content Desk */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>Content Desk – AI Content & Data Processing Platform</span>
                  <span className="text-cyan-400 font-mono text-[11px]">Flask, Tkinter, SQLite, TF-IDF, CI/CD</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  GitHub: github.com/Amanvarma2231/Content-Desk | Demo: content-desk.onrender.com
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                  <li>Built SEO crawler and TF-IDF near-duplicate detector with 26 automated CI/CD unit tests.</li>
                </ul>
              </div>

              {/* Portfolio */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>Aman Varma – Developer Portfolio & Systems Platform</span>
                  <span className="text-cyan-400 font-mono text-[11px]">React 19, Tailwind CSS, Python FastAPI, Vercel</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  GitHub: github.com/Amanvarma2231/Aman-Portflio | Demo: aman-portflio-chi.vercel.app
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                  <li>Engineered high-speed React SPA with interactive CLI terminal and live architecture telemetry.</li>
                </ul>
              </div>

              {/* VLM */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>VLM Hallucination Studio</span>
                  <span className="text-cyan-400 font-mono text-[11px]">Python, FastAPI, Multimodal VLMs, PyTorch</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  GitHub: github.com/Amanvarma2231/VLM-Hallucination-Studio | Demo: vlm-hallucination-studio.onrender.com
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Education
              </h2>
              <div className="flex justify-between items-baseline text-xs font-bold text-white">
                <span>B.Tech, Computer Science & Engineering – <span className="text-slate-300 font-normal">NITRA Technical Campus, AKTU</span></span>
                <span className="font-mono text-slate-400">May 2022 – June 2026 | CGPA: 7.12/10</span>
              </div>
            </div>

            {/* Certifications & Research */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Certifications & Conference Research
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>SAP Certified Learning Track (SAP Cloud ERP, BusinessObjects IDT, SAP Clean Core - Aug 2026)</li>
                <li>Python Programming Certification (Infosys) • JPMorgan Chase & Co. Quantitative Research Simulation</li>
                <li>Presented "Adaptive Residual-Energy Threshold LEACH for Performance & Energy Efficiency" at NGAISL-2026, HRIT University (Apr 2026)</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}