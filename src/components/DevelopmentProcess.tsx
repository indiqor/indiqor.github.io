import React from "react";
import { PROCESS_STEPS_DATA } from "../data/agencyData";
import { Search, PenTool, Code, CheckSquare, Sparkles, Rocket } from "lucide-react";

export default function DevelopmentProcess() {
  // Map step numeric IDs to professional Lucide icons
  const getStepIcon = (stepStr: string) => {
    const iconClass = "h-5 w-5 text-cyan-400";
    switch (stepStr) {
      case "01": return <Search className={iconClass} />;
      case "02": return <Sparkles className={iconClass} />;
      case "03": return <PenTool className={iconClass} />;
      case "04": return <Code className={iconClass} />;
      case "05": return <CheckSquare className={iconClass} />;
      default: return <Rocket className={iconClass} />;
    }
  };

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 text-white overflow-hidden border-b border-white/5"
      id="process"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-1/4 h-[30%] w-[30%] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-1/4 h-[30%] w-[30%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Product Journey
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Our Development Process
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed pt-2">
            We follow a structured agile delivery methodology to safely guide your custom software from abstract ideas to certified production systems.
          </p>
        </div>

        {/* 6 Grid Connected Timeline */}
        <div className="relative" id="timeline-process-container">
          
          {/* Decorative Glowing Connection Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-600/35 via-cyan-400/40 to-blue-600/35 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {PROCESS_STEPS_DATA.map((item, idx) => (
              <div 
                key={item.step}
                className="group flex flex-col items-center text-center relative"
                id={`process-step-block-${item.step}`}
              >
                
                {/* Step Connector Bubble */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-[#070b19] shadow-lg shadow-cyan-950/40 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:border-white/10 transition-all duration-300 relative z-10">
                  {getStepIcon(item.step)}
                  
                  {/* Absolute outer numeric badge marker */}
                  <span className="absolute -top-1.5 -right-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/30 text-[9px] px-1.5 py-0.2 font-mono text-cyan-400">
                    {item.step}
                  </span>
                </div>

                {/* Text Card */}
                <div className="mt-6 rounded-2xl border border-white/[0.04] bg-[#0c142b]/50 p-5 group-hover:bg-[#0c142b]/90 group-hover:border-cyan-500/20 transition-all duration-300 w-full flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
