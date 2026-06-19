/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TRUSTED_BY_LOGOS } from "../data/agencyData";
import { ShieldCheck, Cpu, Code2, Server, Key } from "lucide-react";

export default function TrustedBy() {
  // Map icons to add authenticity to each sector pill
  const getBadgeIcon = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="h-4 w-4" />;
      case 1: return <ShieldCheck className="h-4 w-4" />;
      case 2: return <Code2 className="h-4 w-4" />;
      case 3: return <Server className="h-4 w-4" />;
      default: return <Key className="h-4 w-4" />;
    }
  };

  return (
    <section 
      className="relative bg-[#050917] py-10 border-y border-white/[0.06]"
      id="trusted-by"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Label statement */}
          <div className="shrink-0 text-center lg:text-left">
            <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
              Operational Footprint
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Trusted by innovative businesses worldwide.
            </p>
          </div>

          {/* Active Client Badges Strip */}
          <div className="w-full overflow-hidden">
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 md:gap-6">
              {TRUSTED_BY_LOGOS.map((logo, idx) => (
                <div 
                  key={logo.name} 
                  className="group flex items-center gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-2.5 backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                  id={`brand-badge-${idx}`}
                >
                  <div className="text-gray-500 group-hover:text-blue-400 transition-colors">
                    {getBadgeIcon(idx)}
                  </div>
                  <div>
                    <span className="font-sans font-bold text-sm text-gray-300 group-hover:text-white transition-colors block leading-none">
                      {logo.name}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-gray-500 mt-1 block">
                      {logo.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
