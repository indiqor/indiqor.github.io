import React, { useState } from "react";
import { PROJECTS_DATA } from "../data/agencyData";
import { Project } from "../types";
import { X, ExternalLink, Sparkles, TrendingUp, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function FeaturedProjects() {
  const [selectedCase, setSelectedCase] = useState<Project | null>(null);

  // Return standard icon colors to match thematic metrics
  const getStatColor = (id: string) => {
    switch (id) {
      case "ecommerce-platform": return "from-cyan-400 to-blue-500 text-cyan-400";
      case "fintech-dashboard": return "from-emerald-400 to-teal-500 text-emerald-400";
      default: return "from-blue-500 to-indigo-500 text-blue-300";
    }
  };

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 text-white"
      id="projects"
    >
      {/* Visual background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] right-[10%] h-[40%] w-[40%] bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] h-[35%] w-[45%] bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Work Portfolio
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Recent Success Stories
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Discover how we code high-traffic distributed software, secure patient data pipelines, and scale online retail operations globally.
          </p>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="featured-projects-grid">
          {PROJECTS_DATA.map((proj, idx) => (
            <div 
              key={proj.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0c1429]/40 p-1 hover:border-blue-500/30 hover:bg-[#0c1429]/80 transition-all duration-300 transform"
              id={`portfolio-card-${idx}`}
            >
              
              {/* Graphic Wireframe Card Header */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#090f20] border border-white/[0.04]">
                {/* Visual Simulation of code/mock mockup inside */}
                <div className="absolute inset-4 rounded-lg bg-[#040813] border border-white/5 opacity-80 flex flex-col justify-between p-4 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 font-mono text-[9px] text-gray-500">
                    <span>INDEX: 0{idx + 1} // SYS_STAGING</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                  
                  {/* Visual Charts representation using stylized SVGs */}
                  <div className="my-auto space-y-2">
                    <div className="h-2 w-1/3 rounded bg-blue-500/20" />
                    <div className="h-10 w-full rounded-lg border border-blue-500/10 bg-blue-500/[0.02] p-2 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-1.5 w-16 rounded bg-gray-600" />
                        <div className="h-2 w-28 rounded bg-gradient-to-r from-blue-400 to-cyan-500" />
                      </div>
                      <span className="font-mono text-[10px] text-cyan-400 font-extrabold">{proj.statHighlight}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[8px] font-mono text-gray-650 pt-2 border-t border-white/[0.03]">
                    {proj.technologies.slice(0, 3).map((item) => (
                      <span key={item} className="text-gray-400">#{item.replace(" ", "")}</span>
                    ))}
                  </div>
                </div>

                {/* Soft gradient accent mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1429] via-transparent to-transparent opacity-80" />
              </div>

              {/* Informative text body */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="font-mono text-[9px] font-bold tracking-wider text-blue-400 uppercase">
                    {proj.clientSector}
                  </span>
                  <h3 className="font-sans text-xl font-bold tracking-tight text-white mt-1 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-400 line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                {/* Measurable success milestone tag */}
                <div className={`rounded-xl bg-white/[0.03] p-3 text-xs flex items-center gap-2.5 border border-white/[0.05]`}>
                  <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[9px] font-mono text-gray-500 uppercase leading-none">Measured Impact</span>
                    <span className="text-white font-semibold block mt-1">{proj.statHighlight} Delivered</span>
                  </div>
                </div>

                {/* Action button inside card */}
                <button
                  onClick={() => setSelectedCase(proj)}
                  className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-bold text-gray-300 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all cursor-pointer"
                  id={`btn-case-${proj.id}`}
                >
                  Inspect Case Study <ExternalLink className="h-3 w-3" />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* PORTFOLIO DRILLDOWN CASE STUDY OVERLAY */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#070b19]/85 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedCase(null)}
          />

          <div 
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c142b] p-6 sm:p-8 text-white shadow-2xl shadow-blue-500/10 animate-scaleUp"
            id="portfolio-detail-modal"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
              id="btn-close-case-modal"
              aria-label="Close case study"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content modal */}
            <div>
              <span className="font-mono text-[10px] font-bold tracking-wider text-blue-400 uppercase">
                {selectedCase.clientSector} • Architectural Audit
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1 mb-4">
                {selectedCase.title}
              </h3>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedCase.technologies.map((item) => (
                  <span key={item} className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-gray-300">
                    {item}
                  </span>
                ))}
              </div>

              {/* Long Description and core details */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>{selectedCase.longDescription}</p>
              </div>

              {/* Success metrics highlighting */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                
                {/* Result Highlight */}
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-4">
                  <h4 className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono mb-2">
                    <TrendingUp className="h-3.5 w-3.5" /> Measured System ROI
                  </h4>
                  <p className="text-xs text-gray-300 leading-normal">
                    {selectedCase.results}
                  </p>
                </div>

                {/* Compliance Info */}
                <div className="rounded-xl bg-blue-500/5 border border-blue-500/10 p-4 flex flex-col justify-between">
                  <h4 className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-400 font-mono mb-2">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Compliance Verification
                  </h4>
                  <p className="text-xs text-gray-300 leading-normal">
                    Verified through sandboxed stress compliance checklists under 15,000 requests/minute.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
