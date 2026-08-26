import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  CheckCircle2 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Opportunity / Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'\''S CONNECT DIRECTLY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with Aman Varma
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out directly for Python Developer, Backend Engineer, or Software Engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-[#0c1222] border border-slate-800 p-6 sm:p-7 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white font-mono flex items-center justify-between">
                <span>Direct Contact Channels</span>
                <span className="text-[11px] font-normal text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </h3>

              {/* Email Card */}
              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location & Availability</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location} • Open to Remote & Onsite
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typical response time: Within 2–4 hours</span>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0c1222] border border-slate-800 hover:border-slate-700 flex items-center gap-3 group transition-colors"
              >
                <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                <div>
                  <div className="text-xs font-bold text-white font-mono">GitHub</div>
                  <div className="text-[11px] text-slate-400 font-mono">@Amanvarma2231</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0c1222] border border-slate-800 hover:border-cyan-500/40 flex items-center gap-3 group transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                <div>
                  <div className="text-xs font-bold text-white font-mono">LinkedIn</div>
                  <div className="text-[11px] text-slate-400 font-mono">aman-v</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0c1222] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white font-mono">
                  Send Direct Message
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  Instant Response
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill the details below to initiate direct email contact with Aman.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Email Client Triggered!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your message draft was launched. You can also write directly to <span className="text-cyan-400 font-mono font-bold">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager / Recruiter"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject / Role Focus</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer / Python Backend Developer Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Aman, we reviewed your projects and would love to schedule an interview..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Aman Varma</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}