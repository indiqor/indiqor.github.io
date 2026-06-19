/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FAQ_DATA } from "../data/agencyData";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleOpen = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section 
      className="relative bg-[#050917] py-20 lg:py-28 text-white border-b border-white/5"
      id="faq"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[20%] h-[30%] w-[30%] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-[30%] right-[20%] h-[30%] w-[30%] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Questions Support
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed pt-2">
            Got queries about our software deliverables, certification criteria, or courses? We've listed quick answers below.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4" id="faq-accordions-group">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-cyan-500/30 bg-[#0c142b]/90 shadow-lg shadow-cyan-950/20" 
                    : "border-white/[0.05] bg-[#0c142b]/40 hover:border-white/10"
                }`}
                id={`faq-bar-${item.id}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 select-none focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${item.id}`}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? "text-cyan-400 animate-pulse" : "text-gray-500"}`} />
                    <span className="font-sans font-bold text-sm sm:text-base text-white tracking-tight leading-tight">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Plus/Minus Indicator */}
                  <div className={`p-1.5 rounded-full border shrink-0 transition-all ${isOpen ? "border-cyan-500/30 bg-cyan-900/20 text-cyan-400" : "border-white/10 bg-[#070b19] text-gray-400"}`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                <div 
                  className={`transition-all duration-350 ease-in-out border-t border-white/5 bg-[#080d1c]/40 ${
                    isOpen ? "max-h-[500px] opacity-100 p-6 sm:p-8" : "max-h-0 opacity-0 pointer-events-none hidden"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
