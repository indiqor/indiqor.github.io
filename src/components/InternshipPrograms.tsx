/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { INTERNSHIP_DATA, INTERNSHIP_BENEFITS } from "../data/agencyData";
import { Check, Calendar, Award, Briefcase, Key, Shield, Computer, Terminal, CheckSquare, Star } from "lucide-react";

interface InternshipProgramsProps {
  onOpenConsultation: () => void;
}

export default function InternshipPrograms({ onOpenConsultation }: InternshipProgramsProps) {
  // Map icons
  const getIcon = (name: string) => {
    const className = "h-5 w-5 text-purple-400";
    switch (name) {
      case "Key": return <Key className={className} />;
      case "Shield": return <Shield className={className} />;
      case "Computer": return <Computer className={className} />;
      case "Terminal": return <Terminal className={className} />;
      default: return <CheckSquare className={className} />;
    }
  };

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 text-white border-b border-white/5"
      id="internships"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[10%] h-[35%] w-[35%] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[35%] w-[35%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Indicator */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Career Placement
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Internship Opportunities
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed pt-2">
            Build live enterprise sandbox systems, gain authentic portfolio codebases, and secure certified experience credentials.
          </p>
        </div>

        {/* Outer Split layout: Benefits and Internship Program level cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="internships-split-stage">
          
          {/* Left Column: Internship Benefits Sidebar (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#0c142b]/80 p-6 sm:p-8 relative shadow-xl" id="internships-benefits-panel">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider mb-6">
              <Star className="h-4 w-4" /> Real Advantages
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Internship Benefits
            </h3>
            
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
              Join INDIQOR Technologies as a project-based student intern and benefit from genuine industrial software development team structures.
            </p>

            <div className="space-y-4 mt-8 pt-6 border-t border-white/5">
              {INTERNSHIP_BENEFITS.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-gray-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <button 
                onClick={onOpenConsultation}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-xs font-bold text-white tracking-wide cursor-pointer"
              >
                Apply For Internship Program
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Program Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-6" id="internship-cards-collection">
            {INTERNSHIP_DATA.map((prog) => (
              <div 
                key={prog.id}
                className="group relative rounded-2xl border border-white/[0.05] bg-gradient-to-r from-[#0c142b]/60 to-[#0c142b]/20 p-6 hover:border-purple-500/30 hover:bg-[#0c142b]/95 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                id={`internship-bar-${prog.id}`}
              >
                
                {/* Content */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:text-white transition-all">
                    {getIcon(prog.iconName)}
                  </div>
                  <div>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors animate">
                      {prog.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-gray-400 max-w-xl leading-relaxed">
                      {prog.description}
                    </p>

                    {/* micro badges */}
                    <div className="flex flex-wrap items-center gap-2 mt-4 text-[10px] text-gray-350">
                      <span className="inline-flex items-center gap-1 font-mono bg-purple-950/60 border border-purple-500/20 px-2.5 py-1 rounded-full">
                        <Calendar className="h-3 w-3 text-purple-400" /> Duration: {prog.duration}
                      </span>
                      {prog.benefits.map((ben, idx) => (
                        <span key={idx} className="rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1">
                          {ben}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Application button */}
                <div className="w-full md:w-auto shrink-0 self-stretch md:self-auto flex items-end justify-start md:justify-end">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full md:w-auto rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 py-3 px-5 text-center text-xs font-bold text-gray-300 hover:text-white hover:border-transparent border border-white/5 transition-all cursor-pointer"
                  >
                    Quick Apply
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
