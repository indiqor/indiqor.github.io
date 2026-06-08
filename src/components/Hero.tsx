import React from "react";
import { ArrowUpRight, ChevronRight, Terminal, Server, Sparkles, Code, Cpu } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-28 pb-16 md:pb-24 lg:pt-32"
      id="hero"
    >
      {/* 1. Animated Tech Gradients & Grid Particle Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] h-[60%] w-[50%] rounded-full bg-blue-600/15 blur-[120px] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute top-[30%] -right-[15%] h-[60%] w-[60%] rounded-full bg-cyan-500/15 blur-[135px]" />
        <div className="absolute -bottom-[10%] left-[10%] h-[50%] w-[50%] rounded-full bg-indigo-500/10 blur-[110px]" />
        
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Panel: High Converting Headline, Descriptors & Calls */}
          <div className="lg:col-span-7 space-y-8 text-left max-w-2xl lg:max-w-none">
            
            {/* Tagline micro capsule */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 animate-slideUp">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Transforming Ideas Into Digital Solutions</span>
            </div>

            {/* Core Target Header */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]" id="hero-main-title">
              Build, Learn &amp; Grow With{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-[#93c5fd]">
                Technology
              </span>
            </h1>

            {/* Core Subtitle description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl" id="hero-subtitle">
              We help businesses build scalable software solutions while empowering future developers through professional training and internship programs.
            </p>

            {/* Call to Actions matching user spec */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all text-center cursor-pointer"
                id="hero-btn-consultation"
              >
                Get Free Consultation 
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              
              <a
                href="#services"
                className="group flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95 transition-all text-center"
                id="hero-btn-services"
              >
                Explore Services
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quality focus points without metric numbers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 text-xs text-gray-400">
              <div>
                <span className="block text-blue-400 font-semibold font-mono text-sm mb-0.5">Software Dev</span>
                Enterprise Solutions
              </div>
              <div>
                <span className="block text-cyan-400 font-semibold font-mono text-sm mb-0.5">IT Training</span>
                Industry-Ready Skills
              </div>
              <div>
                <span className="block text-[#a5b4fc] font-semibold font-mono text-sm mb-0.5">Internships</span>
                Project-Based Training
              </div>
            </div>

          </div>

          {/* Right Panel: Beautiful, Custom IDE Dashboard Coding Illustration (Anti-AI-Slop & Professional) */}
          <div className="lg:col-span-5 relative flex items-center justify-center" id="hero-illustrations-panel">
            
            {/* Ambient decorative glowing frames */}
            <div className="absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none -z-10" />
            
            {/* Coders Interactive Dashboard Widget */}
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#070b19]/90 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-md relative overflow-hidden">
              
              {/* Header Titlebar bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[10px] text-gray-500">indiqor-core-system.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="font-mono text-[10px] text-cyan-400">root@indiqor:~#</span>
                </div>
              </div>

              {/* IDE Code Lines */}
              <div className="font-mono text-xs space-y-2 text-gray-400 leading-relaxed overflow-x-auto min-h-[174px]">
                <div>
                  <span className="text-pink-400">import</span> {"{"} <span className="text-cyan-300">Software</span>, <span className="text-purple-400">Training</span>, <span className="text-emerald-400">Interns</span> {"}"} <span className="text-pink-400">from</span> <span className="text-yellow-300">"indiqor-tech"</span>;
                </div>
                <div className="text-gray-500">// Initialize high availability stacks</div>
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-300">company</span> = <span className="text-pink-400">new</span> <span className="text-cyan-400">INDIQOR</span>({"{"}
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">mission</span>: <span className="text-yellow-200">"Transforming Ideas"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">scalability</span>: <span className="text-emerald-400">"Cloud Native"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">internships</span>: <span className="text-blue-300">"Project Based"</span>
                </div>
                <div>{"});"}</div>
                
                <div className="pt-2">
                  <span className="text-emerald-400">await</span> <span className="text-blue-300">company</span>.<span className="text-yellow-400">compileSolution</span>();
                  <span className="text-gray-500"> // SUCCESS</span>
                </div>
              </div>

              {/* Graphical Infrastructure Widgets */}
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                
                {/* Cloud & Container status */}
                <div className="rounded-lg bg-white/5 p-2.5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="font-mono text-[10px] text-white">AWS Cluster</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* AI integration status */}
                <div className="rounded-lg bg-white/5 p-2.5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                    <span className="font-mono text-[10px] text-white">Gemini API</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

              </div>

              {/* Workspace Code Flow overlay tag */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-mono text-[9px] px-3.5 py-1 rounded-tl-xl border-t border-l border-white/15">
                VITE + SPRING BOOT
              </div>

            </div>

            {/* Orbiting technology micro badges */}
            <div className="absolute -top-3 -right-3 sm:-right-6 rounded-lg bg-slate-900 border border-white/10 p-2 shadow-lg animate-bounce" style={{ animationDuration: "5s" }}>
              <Code className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="absolute -bottom-3 -left-3 sm:-left-6 rounded-lg bg-slate-900 border border-white/10 p-2 shadow-lg animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "4s" }}>
              <Cpu className="h-4 w-4 text-blue-400" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
