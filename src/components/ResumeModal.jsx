import React, { useRef } from "react";
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, CheckCircle2, Briefcase, GraduationCap, Award, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, experienceData, educationData, certificationsData, skillsData, publicationsData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const resumePrintRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl h-[94vh] bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <span className="font-mono text-xs sm:text-sm font-bold text-white">Aman_Varma_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
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
          <div ref={resumePrintRef} className="max-w-3xl mx-auto bg-[#0e1628] border border-slate-800 rounded-xl p-6 sm:p-10 space-y-6 shadow-2xl text-slate-300 text-xs sm:text-sm leading-relaxed">
            
            {/* Header / Contact Details */}
            <div className="text-center space-y-2 border-b border-slate-800 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" />{personalInfo.location}</span>
                <span>�</span>
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-cyan-400" />{personalInfo.phone}</span>
                <span>�</span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 text-cyan-400 hover:underline"><Mail className="w-3 h-3" />{personalInfo.email}</a>
                <span>�</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline"><LinkedinIcon className="w-3 h-3" />linkedin.com/in/aman-v-697771345</a>
                <span>�</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline"><GithubIcon className="w-3 h-3" />github.com/Amanvarma2231</a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                B.Tech Computer Science graduate with hands-on experience as a Python Developer, specializing in backend development, REST APIs, SQL, ETL/data pipelines, and data validation. Strong foundation in API testing, automated testing, debugging, databases, Git, and CI/CD, with hands-on experience building cloud-deployed applications.
              </p>
            </div>

            {/* SAP Certifications */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                SAP Certifications � SAP Learning
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Exploring SAP Cloud ERP � Cloud Onboarding for SAP Cloud ERP</li>
                <li>Developing a Universe: Fundamental Concepts of SAP BusinessObjects Information Design Tool</li>
                <li>Developing a Universe: Advanced Concepts of SAP BusinessObjects Information Design Tool (Aug 2026) � SAP Clean Core, RISE & GROW</li>
              </ul>
            </div>

            {/* Core Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Core Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-slate-300">
                <div><span className="font-semibold text-white">Languages:</span> Python, SQL, Java, C/C++, JavaScript, HTML, CSS, HTTP</div>
                <div><span className="font-semibold text-white">Testing & Automation:</span> Playwright, Python Test Automation, API Testing, ETL/Data Validation, Unit Testing</div>
                <div><span className="font-semibold text-white">AI / Data:</span> LLM Integration (Qwen 2.5), NLP, TF-IDF, Machine Learning, Information Retrieval</div>
                <div><span className="font-semibold text-white">Data Engineering:</span> ETL/ELT, Data Pipelines, Data Cleaning & Validation, Data Warehousing</div>
                <div><span className="font-semibold text-white">Backend & APIs:</span> Flask, FastAPI, Django, REST APIs, Node.js, Express.js</div>
                <div><span className="font-semibold text-white">Databases:</span> MySQL, PostgreSQL, MongoDB, SQLite</div>
                <div><span className="font-semibold text-white">Cloud & DevOps:</span> GCP Fundamentals, Docker, Git/GitHub, CI/CD (GitHub Actions), Automated Testing</div>
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
                    <span>{exp.role} � <span className="text-cyan-400">{exp.company}</span></span>
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

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Key Projects
              </h2>
              
              {/* NLPCRM */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>NLPCRM � AI-Powered CRM Platform</span>
                  <span className="text-cyan-400 font-mono text-[11px]">Flask, Qwen 2.5 LLM, MySQL, OAuth 2.0</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  GitHub: github.com/Amanvarma2231/NLPCRM | Demo: npcrm-1.onrender.com
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                  <li>Architected 25+ REST API endpoints across contacts, AI/NLP, email, and webhook modules with full CRUD coverage.</li>
                  <li>Integrated Qwen 2.5 LLM to auto-extract lead details from unstructured text with automated 0�10 lead scoring.</li>
                  <li>Implemented production-grade security: session auth, CSRF protection, Google OAuth 2.0, and rate limiting.</li>
                </ul>
              </div>

              {/* Content Desk */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between items-baseline text-xs font-bold text-white">
                  <span>Content Desk � AI Content & Data Processing Platform</span>
                  <span className="text-cyan-400 font-mono text-[11px]">Flask, Tkinter, SQLite, TF-IDF, CI/CD</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  GitHub: github.com/Amanvarma2231/Content-Desk | Demo: content-desk.onrender.com
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                  <li>Designed a shared core engine consumed by both a Flask web dashboard and a Tkinter desktop app without duplicate logic.</li>
                  <li>Built an SEO-scoring crawler and TF-IDF near-duplicate detector with automated Keep/Refresh/Remove recommendations.</li>
                  <li>Ensured pipeline correctness with 26 automated unit tests in GitHub Actions CI with SQLite persistence.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Education
              </h2>
              <div className="flex justify-between items-baseline text-xs font-bold text-white">
                <span>B.Tech, Computer Science & Engineering � <span className="text-slate-300 font-normal">NITRA Technical Campus, AKTU</span></span>
                <span className="font-mono text-slate-400">May 2022 � June 2026 | CGPA: 7.12/10</span>
              </div>
            </div>

            {/* Additional Certifications & Activities */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider border-b border-slate-800 pb-1">
                Additional Certifications & Activities
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Python Programming Certification (Infosys) � JPMorgan Chase & Co. Quantitative Research Simulation</li>
                <li>Cyber Security Fundamentals (Udemy) � Solved 100+ Data Structures & Algorithms problems</li>
                <li>Presented "Adaptive Residual-Energy Threshold LEACH for Performance & Energy Efficiency" at NGAISL-2026, HRIT University (Apr 2026)</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
