/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TRAINING_DATA, TRAINING_FEATURES } from "../data/agencyData";
import { Check, Calendar, Layers, Server, Code, Sparkles, KeyRound } from "lucide-react";

interface TrainingProgramsProps {
  onOpenConsultation: () => void;
}

export default function TrainingPrograms({ onOpenConsultation }: TrainingProgramsProps) {
  // Map icons
  const getIcon = (name: string) => {
    const className = "h-5 w-5 text-cyan-400";
    switch (name) {
      case "KeyRound": return <KeyRound className={className} />;
      case "Server": return <Server className={className} />;
      case "Code": return <Code className={className} />;
      default: return <Layers className={className} />;
    }
  };

  return (
    <section 
      className="relative bg-[#050917] py-20 lg:py-28 text-white border-b border-white/5"
      id="training"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] h-[40%] w-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Professional Education
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Professional IT Training Programs
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed pt-2">
            Accelerate your professional engineering skillset with practical assignment metrics, live classrooms, and genuine corporate mentors.
          </p>
        </div>

        {/* Training Tracks & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="training-split-grid">
          
          {/* Left Column: Awesome Training Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6" id="training-courses-grid">
            {TRAINING_DATA.map((course) => (
              <div 
                key={course.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-[#0c142b]/60 p-6 sm:p-8 hover:border-cyan-500/30 hover:bg-[#0c142b]/95 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-350"
                id={`training-card-${course.id}`}
              >
                <div>
                  
                  {/* Top line with duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform">
                      {getIcon(course.iconName)}
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                      <Calendar className="h-3 w-3" /> {course.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Topics covered checklist */}
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-500 mb-2">
                      Key Topics Covered:
                    </span>
                    <ul className="space-y-1.5">
                      {course.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5 text-xs text-gray-300">
                          <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom button */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <button 
                    onClick={onOpenConsultation}
                    className="w-full text-center rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white py-2.5 text-xs font-bold text-gray-300 border border-white/5 hover:border-transparent transition-all cursor-pointer"
                  >
                    Enroll / Inquire Now
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Training Key Features & Highlights (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c142b] to-[#0e172a]/80 p-6 sm:p-8 relative overflow-hidden" id="training-features-banner">
            
            {/* Ambient graphic blob */}
            <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" />

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
              <Sparkles className="h-4 w-4" /> Why Train With Us
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white leading-snug">
              Industry-Approved Mentoring Standards
            </h3>
            
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
              We reject academic rote copy methodologies. Our program focuses on actual practical assignments, mock interview coaching, and professional corporate code structure checks.
            </p>

            {/* Feature lists */}
            <div className="space-y-4 mt-8 pt-6 border-t border-white/5">
              {TRAINING_FEATURES.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold text-gray-200">
                      {feat}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <button
                onClick={onOpenConsultation}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-center text-xs font-bold text-white shadow-lg shadow-blue-500/10 hover:opacity-95 cursor-pointer"
              >
                Inquire For Batches
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
