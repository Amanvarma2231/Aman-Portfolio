import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  ShieldCheck, 
  GitBranch, 
  Terminal, 
  Workflow, 
  Layers,
  CheckCircle2
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("backend");

  const skillGroups = [
    { id: "backend", label: "Backend", icon: Server, color: "text-blue-400" },
    { id: "apiIntegration", label: "API & Integration", icon: Workflow, color: "text-sky-400" },
    { id: "databases", label: "Databases & ORM", icon: Database, color: "text-emerald-400" },
    { id: "testing", label: "Testing", icon: ShieldCheck, color: "text-amber-400" },
    { id: "devopsTools", label: "DevOps & Tools", icon: GitBranch, color: "text-indigo-400" },
    { id: "languages", label: "Languages", icon: Code2, color: "text-purple-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-blue-400">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Engineering Stack & Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized by practical application, architecture depth, and real-world project usage.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeTab === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-850 text-white border border-blue-500/50 shadow-lg scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? group.color : "text-slate-500"}`} />
                <span>{group.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillsData[activeTab]?.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#090d16] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-lg group"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 font-mono leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-medium text-blue-400 bg-blue-950/60 border border-blue-900/60 rounded shrink-0">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Architecture Summary Matrix */}
        <div className="mt-12 p-6 rounded-2xl bg-[#090d16]/80 border border-slate-800 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
            <div className="flex items-center gap-2 text-sm font-mono font-bold text-white">
              <Workflow className="w-4 h-4 text-blue-400" />
              <span>Full-Stack Development Philosophy</span>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Clean Core • API First • Automated Quality
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
            <div className="p-3 bg-slate-900/60 border border-slate-800/60 rounded-xl space-y-1">
              <div className="text-blue-400 font-bold">1. API Standards & Auth</div>
              <div className="text-slate-400">RESTful design with OAuth 2.0, CSRF tokens, strict Pydantic schemas, and rate-limiting.</div>
            </div>

            <div className="p-3 bg-slate-900/60 border border-slate-800/60 rounded-xl space-y-1">
              <div className="text-sky-400 font-bold">2. Data Engineering & Integrity</div>
              <div className="text-slate-400">Robust schema validation, transaction safety via SQLAlchemy, and high-performance databases.</div>
            </div>

            <div className="p-3 bg-slate-900/60 border border-slate-800/60 rounded-xl space-y-1">
              <div className="text-emerald-400 font-bold">3. Automated Testing</div>
              <div className="text-slate-400">26+ automated unit tests in GitHub Actions, eliminating release regression.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}