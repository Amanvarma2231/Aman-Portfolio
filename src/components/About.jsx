import React from "react";
import { 
  User, 
  Code2, 
  Server, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  MapPin, 
  Workflow, 
  GraduationCap
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-blue-400">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT AMAN VARMA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Backend Engineering, RESTful APIs & Data Workflows
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Developing scalable backend services, validating database integrity, and automating CI/CD test workflows in agile environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Framed Master Portrait Card (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="rounded-3xl bg-[#0d131f] border border-slate-800 p-4 shadow-xl space-y-4 hover:border-slate-700 transition-all duration-300">
                {/* Large Master Portrait */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={profileImg}
                    alt="Aman Varma - Software Engineer"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Identity Tag Card */}
                <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1 text-center font-mono">
                  <div className="text-base font-bold text-white tracking-tight">
                    Aman Varma
                  </div>
                  <div className="text-xs text-blue-400 font-medium">
                    Python Developer • Software Engineer
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>Ghaziabad, India • Remote / Onsite</span>
                  </div>
                </div>

                {/* Quick Credentials Checklist */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Druidot Intern</span>
                  </div>
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>25+ REST APIs</span>
                  </div>
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>NGAISL-26 Paper</span>
                  </div>
                  <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>100+ DSA Solved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Engineering Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">B.Tech Computer Science & Engineering graduate</strong> with hands-on experience developing <strong className="text-white">RESTful APIs, backend services, database-driven applications, automated testing workflows, and CI/CD pipelines</strong> in agile sprint environments.
              </p>

              <p>
                Currently working as a <strong className="text-white">Python Developer Intern at Druidot Consulting (OPC) Pvt. Ltd.</strong>, I develop and maintain RESTful endpoints using Python, Flask, and FastAPI. I build automated test suites and validation checks across MySQL and MongoDB to protect schema integrity and eliminate manual verification effort.
              </p>

              <p>
                Having graduated from <strong className="text-white">NITRA Technical Campus (AKTU), Uttar Pradesh</strong>, I presented research on energy-efficient clustering protocols at the <span className="text-blue-300">NGAISL-2026</span> International Conference. My development toolkit centers around <strong className="text-white">Python, FastAPI, Flask, SQL/NoSQL databases, SQLAlchemy, Docker, and GitHub Actions CI (26 automated unit tests)</strong>.
              </p>
            </div>

            {/* Core Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors space-y-1.5">
                <div className="text-blue-400 font-mono font-bold text-xs flex items-center gap-1.5">
                  <Server className="w-4 h-4" />
                  <span>RESTful APIs</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  FastAPI, Flask, OpenAPI specifications, CRUD, OAuth 2.0 & JWT access control.
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors space-y-1.5">
                <div className="text-emerald-400 font-mono font-bold text-xs flex items-center gap-1.5">
                  <Database className="w-4 h-4" />
                  <span>Databases & ORM</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  SQL, MySQL, SQLite, MongoDB, SQLAlchemy, schema design & query optimization.
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors space-y-1.5">
                <div className="text-indigo-400 font-mono font-bold text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Testing & CI/CD</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  Automated testing, data validation, PyTest, GitHub Actions CI & Docker.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}