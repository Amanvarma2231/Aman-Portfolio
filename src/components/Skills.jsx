import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  ShieldCheck, 
  GitBranch, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle2,
  Workflow,
  Sparkles
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "backend", label: "Backend" },
    { id: "apiAndIntegration", label: "API & Integration" },
    { id: "databases", label: "Databases" },
    { id: "testing", label: "Testing" },
    { id: "devopsAndTools", label: "DevOps & Tools" }
  ];

  const categoryIcons = {
    languages: <Code2 className="w-5 h-5 text-blue-400" />,
    backend: <Server className="w-5 h-5 text-blue-400" />,
    apiAndIntegration: <Workflow className="w-5 h-5 text-sky-400" />,
    databases: <Database className="w-5 h-5 text-emerald-400" />,
    testing: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    devopsAndTools: <GitBranch className="w-5 h-5 text-indigo-400" />
  };

  const categoryTitles = {
    languages: "Languages",
    backend: "Backend & Web Services",
    apiAndIntegration: "API Architecture & Integration",
    databases: "Databases & ORM",
    testing: "Testing & Validation",
    devopsAndTools: "DevOps, Tools & Agile"
  };

  const getSkillsToDisplay = () => {
    if (activeTab === "all") {
      return Object.entries(skillsData);
    }
    return [[activeTab, skillsData[activeTab]]];
  };

  return (
    <section id="skills" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Technical Skills & Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on technical stack across backend architecture, REST API design, database modeling, automated testing, and CI/CD pipelines.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkillsToDisplay().map(([catKey, skills]) => (
            <div
              key={catKey}
              className="rounded-2xl bg-[#0d131f] border border-slate-800/80 p-6 space-y-4 hover:border-slate-700 transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  {categoryIcons[catKey] || <Terminal className="w-5 h-5 text-blue-400" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {categoryTitles[catKey] || catKey}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3 pt-1">
                {skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/60">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}