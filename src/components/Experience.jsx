import React from "react";
import { 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles,
  TrendingUp,
  Code
} from "lucide-react";
import { experienceData, educationData, publicationsData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMIC MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Research Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record of engineering backend APIs, data quality test suites, and energy-efficient network algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Professional Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Professional Industry Experience</span>
            </h3>

            {experienceData.map((exp, idx) => (
              <div 
                key={idx}
                className="relative rounded-2xl bg-[#0c1222] border border-slate-800 p-6 sm:p-7 shadow-xl space-y-5 hover:border-cyan-500/40 transition-colors"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <div className="text-cyan-400 text-sm font-medium mt-0.5">{exp.company}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-0.5 text-xs font-mono bg-slate-900 text-slate-300 rounded border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Research & Publications Spotlight */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Conference Research Presentation</span>
              </h3>

              {publicationsData.map((pub, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[#0c1222] border border-slate-800 p-6 shadow-xl space-y-3 hover:border-purple-500/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white leading-snug">{pub.title}</h4>
                    <span className="px-2.5 py-1 text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-900/60 rounded self-start sm:self-auto shrink-0">
                      {pub.date}
                    </span>
                  </div>

                  <div className="text-xs text-cyan-400 font-mono">
                    {pub.venue} � {pub.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-mono bg-purple-950/40 text-purple-300 border border-purple-800/40 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Education & Core Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education & Degree</span>
            </h3>

            {educationData.map((edu, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#0c1222] border border-slate-800 p-6 shadow-xl space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <div className="text-emerald-400 text-xs sm:text-sm font-medium mt-0.5">{edu.institution}</div>
                    <div className="text-slate-400 text-xs mt-0.5 font-mono">{edu.location}</div>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 rounded shrink-0">
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.period}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Problem Solving & Extra Activities Card */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c1222] border border-slate-800 p-6 shadow-xl space-y-4">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Algorithmic & Industry Simulations</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1">
                  <div className="font-semibold text-white">JPMorgan Chase & Co. Simulation</div>
                  <div className="text-xs text-slate-400 font-mono">Quantitative financial analysis, algorithmic data processing, and risk metrics modeling.</div>
                </div>

                <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1">
                  <div className="font-semibold text-white">100+ DSA Problems Solved</div>
                  <div className="text-xs text-slate-400 font-mono">Proficient in trees, dynamic programming, graphs, sorting algorithms, and hash maps.</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
