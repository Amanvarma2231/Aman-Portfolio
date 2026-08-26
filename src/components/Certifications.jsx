import React from "react";
import { 
  Award, 
  CheckCircle2, 
  Database, 
  Code, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "database": return Database;
      case "code": return Code;
      case "trending-up": return TrendingUp;
      case "shield": return ShieldCheck;
      default: return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY & PROFESSIONAL ACCREDITATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications & Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Recognized industry standards across SAP Enterprise Systems, Python Programming, Quantitative Simulation, and Cybersecurity.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => {
            const Icon = getIcon(cert.icon);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {cert.title}
                        </h3>
                        <div className="text-xs font-mono text-cyan-400 mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded">
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {cert.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Verified Credential</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Authenticated
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
