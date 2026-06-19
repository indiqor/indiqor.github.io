/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { WHY_CHOOSE_US_DATA } from "../data/agencyData";
import { 
  Users, 
  BookOpen, 
  Laptop, 
  Cpu, 
  DollarSign, 
  ShieldCheck, 
  Layers, 
  Award,
  Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  // Map index safely to 8 distinct icons
  const getFeatureIcon = (idx: number) => {
    const iconClass = "h-5 w-5 text-cyan-400";
    switch (idx) {
      case 0: return <Users className={iconClass} />;
      case 1: return <BookOpen className={iconClass} />;
      case 2: return <Laptop className={iconClass} />;
      case 3: return <Cpu className={iconClass} />;
      case 4: return <DollarSign className={iconClass} />;
      case 5: return <ShieldCheck className={iconClass} />;
      case 6: return <Layers className={iconClass} />;
      default: return <Award className={iconClass} />;
    }
  };

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 text-white border-b border-white/5"
      id="why-choose-us"
    >
      {/* Decorative ambient glowing grids */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-10 h-[30%] w-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-10 h-[30%] w-[30%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> High Service Standard
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Choose INDIQOR Technologies
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed pt-2">
            We merge professional software engineering standards with industry-focused training tracks to create lasting business and developer careers.
          </p>
        </div>

        {/* 8-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="why-choose-us-grid">
          {WHY_CHOOSE_US_DATA.map((card, idx) => (
            <div 
              key={card.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-[#0c142b]/50 p-6 backdrop-blur-md hover:border-cyan-500/30 hover:bg-[#0c142b]/95 hover:-translate-y-1 transition-all duration-300"
              id={`why-card-${idx}`}
            >
              <div>
                
                {/* Icon box and index indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all">
                    {getFeatureIcon(idx)}
                  </div>
                  <span className="font-mono text-[10px] text-gray-600 group-hover:text-cyan-400/50 transition-colors select-none">
                    #{(idx + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-sm sm:text-base text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>

                <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Graphical glowing spacer */}
              <div className="h-[1.5px] w-6 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-20 group-hover:w-full group-hover:opacity-40 transition-all duration-500 mt-6" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
