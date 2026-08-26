import React, { useState } from "react";
import { 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Eye, 
  Cpu, 
  Database,
  Server,
  Mic,
  BrainCircuit,
  GraduationCap,
  FileCode2
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "AI & Vision", "AI & Audio", "Backend & AI", "Data Engineering", "Full Stack"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const getProjectIcon = (type) => {
    switch (type) {
      case "vision":
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      case "audio":
        return <Mic className="w-6 h-6 text-rose-400" />;
      case "crm":
        return <Server className="w-6 h-6 text-cyan-400" />;
      case "data":
        return <Database className="w-6 h-6 text-emerald-400" />;
      case "education":
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
      default:
        return <FileCode2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED PRODUCTION APPLICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems, AI Models & Full-Stack Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Live applications featuring Vision-Language diagnostics, real-time Voice Sentiment NLP, CRM pipelines, and data processing engines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-white shadow-sm shadow-cyan-500/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#0c1220]/95 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-cyan-950/30 backdrop-blur-sm"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 space-y-4 flex-1">
                
                {/* Header: Logo Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-700/80 flex items-center justify-center p-2.5 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {getProjectIcon(project.iconType)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-900/60 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Metric Badges */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2 bg-slate-950/70 border border-slate-800/80 rounded-lg">
                      <div className="text-[10px] text-slate-500 font-mono">{m.name}</div>
                      <div className="text-xs font-bold text-white font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs text-slate-300 hover:text-cyan-400 font-mono flex items-center gap-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium shadow-md shadow-cyan-600/30 transition-transform active:scale-95"
                    title="Launch Live App"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}