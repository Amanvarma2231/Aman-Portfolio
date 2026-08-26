import React, { useState, useEffect } from "react";
import { Search, Terminal, FileText, Code2, Briefcase, Layers, Award, Mail, ExternalLink, X, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, projectsData } from "../data/portfolioData";

export default function CommandPalette({ isOpen, onClose, onOpenResume, onOpenTerminal }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open command palette
          window.dispatchEvent(new CustomEvent("open-command-palette"));
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "projects",
      name: "Explore Featured Projects",
      category: "Navigation",
      icon: Code2,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "terminal",
      name: "Launch Interactive CLI Terminal",
      category: "Tools",
      icon: Terminal,
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: "resume",
      name: "View & Download Resume PDF",
      category: "Documents",
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: "nlpcrm-demo",
      name: "Open NLPCRM Live App (Render)",
      category: "Live Demos",
      icon: ExternalLink,
      action: () => {
        window.open("https://npcrm-1.onrender.com", "_blank");
        onClose();
      }
    },
    {
      id: "contentdesk-demo",
      name: "Open Content Desk Live App (Render)",
      category: "Live Demos",
      icon: ExternalLink,
      action: () => {
        window.open("https://content-desk.onrender.com", "_blank");
        onClose();
      }
    },
    {
      id: "experience",
      name: "View Work Experience & Internships",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "skills",
      name: "Inspect Core Skills Matrix",
      category: "Navigation",
      icon: Layers,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "architecture",
      name: "Run Pipeline Architecture Simulator",
      category: "Simulation",
      icon: Sparkles,
      action: () => {
        document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "contact",
      name: "Send Direct Message / Email",
      category: "Contact",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "github",
      name: "Visit GitHub Profile (@Amanvarma2231)",
      category: "External",
      icon: GithubIcon,
      action: () => {
        window.open(personalInfo.github, "_blank");
        onClose();
      }
    },
    {
      id: "linkedin",
      name: "Visit LinkedIn Profile (aman-v)",
      category: "External",
      icon: LinkedinIcon,
      action: () => {
        window.open(personalInfo.linkedin, "_blank");
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
        
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-950/90 border-b border-slate-800">
          <Search className="w-4 h-4 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search (e.g. 'projects', 'resume', 'demo')..."
            className="flex-1 bg-transparent text-white focus:outline-none text-xs sm:text-sm font-mono placeholder-slate-500"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No matching actions found. Try searching 'projects', 'terminal', or 'resume'.
            </div>
          ) : (
            filteredActions.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
                    Jump ?
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigation Quick Menu</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
}
