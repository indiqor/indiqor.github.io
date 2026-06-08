import React from "react";
import { Users, Code, Shield, CheckCircle2, Award, Briefcase } from "lucide-react";

export default function AboutCompany() {
  const coreFeatures = [
    {
      title: "Experienced Developers",
      description: "Our teams are led by expert engineers with deep domain expertise in designing enterprise-grade software architectures.",
      icon: <Users className="h-5 w-5 text-blue-400" />
    },
    {
      title: "Agile Development",
      description: "We practice structured SCRUM loops and rapid bi-weekly delivery cycles to incorporate continuous client input.",
      icon: <Code className="h-5 w-5 text-cyan-400" />
    },
    {
      title: "Enterprise Solutions",
      description: "Each package is engineered for security, high-availability, scalability, and robust cloud compliance workflows.",
      icon: <Shield className="h-5 w-5 text-indigo-400" />
    },
    {
      title: "Dedicated Support",
      description: "Get proactive monitoring answers, hot-fixes, server performance optimizations, and close technical communication.",
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-400" />
    },
    {
      title: "Professional Training",
      description: "We deliver industry-tested, mentor-led courses covering modern architectures (Java, Spring Boot, React).",
      icon: <Award className="h-5 w-5 text-purple-400" />
    },
    {
      title: "Internship Opportunities",
      description: "Empowering talented students and professionals with hands-on, live corporate project challenges.",
      icon: <Briefcase className="h-5 w-5 text-pink-400" />
    }
  ];

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 border-y border-white/5"
      id="about"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[5%] h-[35%] w-[35%] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] h-[35%] w-[35%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* About Company Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block">
              Core Identity
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About INDIQOR Technologies
            </h2>
            <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 mt-4" />
          </div>

          <div className="lg:col-span-6 lg:pt-2 space-y-4">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              INDIQOR Technologies is a technology company specializing in software development, web applications, mobile applications, cloud solutions, IT consulting, technical training, and internship programs.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We focus on delivering scalable, secure, and innovative solutions while helping students and professionals gain industry-ready skills.
            </p>
          </div>

        </div>

        {/* 6 Grid Features - Clean Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="about-features-grid">
          {coreFeatures.map((feat, idx) => (
            <div 
              key={feat.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-cyan-500/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-350"
              id={`about-feature-${idx}`}
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-sans font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
