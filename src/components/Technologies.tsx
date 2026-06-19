/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { LayoutGrid, Layers, Database, Cpu } from "lucide-react";

interface TechIcon {
  name: string;
  category: string;
  useCase: string;
  proficiencyScore: string;
  badge: string;
}

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend", icon: <LayoutGrid className="h-4 w-4" /> },
    { id: "backend", label: "Backend", icon: <Cpu className="h-4 w-4" /> },
    { id: "database", label: "Database", icon: <Database className="h-4 w-4" /> },
    { id: "cloud", label: "Cloud & DevOps", icon: <Layers className="h-4 w-4" /> }
  ];

  const technologiesData: TechIcon[] = [
    // Frontend
    { name: "HTML5", category: "frontend", useCase: "W3C Semantic tags, high SEO-friendly structures, native browser accessibility guidelines.", proficiencyScore: "95%", badge: "Web Core Standard" },
    { name: "CSS3", category: "frontend", useCase: "Responsive grids, flexbox alignments, animations, Tailwind CSS styling systems.", proficiencyScore: "95%", badge: "Styling Core" },
    { name: "JavaScript", category: "frontend", useCase: "Native ES6+ programming, interactive layout controls, fast synchronous rendering.", proficiencyScore: "98%", badge: "Runtime Scripting" },
    { name: "React", category: "frontend", useCase: "State-driven components, virtual DOM renders, custom hooks, Single Page Apps.", proficiencyScore: "95%", badge: "Leader Framework" },
    { name: "Angular", category: "frontend", useCase: "Modular components, corporate systems, CLI bundles, strict TypeScript specs.", proficiencyScore: "85%", badge: "Enterprise Client" },

    // Backend
    { name: "Java", category: "backend", useCase: "Object-oriented structures, robust logic, multithreading and database transactional safety.", proficiencyScore: "96%", badge: "Enterprise JVM" },
    { name: "Spring Boot", category: "backend", useCase: "Microservices design pattern, spring security REST controllers, database mapping JPA/Hibernate.", proficiencyScore: "94%", badge: "Microservices Master" },
    { name: "Node.js", category: "backend", useCase: "Asynchronous I/O routing layers, real-time communication protocols, npm module ecosystem.", proficiencyScore: "90%", badge: "Fast API Runtime" },

    // Database
    { name: "MySQL", category: "database", useCase: "Relational columns, raw SQL queries, transactional safety, standard relational databases.", proficiencyScore: "92%", badge: "OpenSource SQL" },
    { name: "PostgreSQL", category: "database", useCase: "Advanced transactional metrics, spatial geolocations, JSON data formats, secure schemas.", proficiencyScore: "95%", badge: "Dev Choice SQL" },
    { name: "MongoDB", category: "database", useCase: "Flexible NoSQL document structures, high-performance product listings, dynamic JSON stores.", proficiencyScore: "88%", badge: "Scalable Document NoSQL" },

    // Cloud & DevOps
    { name: "AWS", category: "cloud", useCase: "Elastic computing (EC2), scalable object stores (S3), content delivery distribution grids.", proficiencyScore: "89%", badge: "Cloud Market Leader" },
    { name: "Azure", category: "cloud", useCase: "Structured corporate clusters, private security directories, active database backups.", proficiencyScore: "84%", badge: "Microsoft Ecosystem" },
    { name: "Docker", category: "cloud", useCase: "Container packaging, workspace virtualization, reliable staging integrations.", proficiencyScore: "92%", badge: "Standard Containers" },
    { name: "Kubernetes", category: "cloud", useCase: "Orchestration nodes, auto-scaling clusters, zero-downtime rolling service deployments.", proficiencyScore: "86%", badge: "Auto Scaling Grid" },
    { name: "GitHub Actions", category: "cloud", useCase: "Automated test runs, continuous integration pipelines, automated deployment triggers.", proficiencyScore: "90%", badge: "Continuous CI/CD" }
  ];

  const activeTechs = technologiesData.filter((tech) => tech.category === activeTab);

  return (
    <section 
      className="relative bg-[#050917] py-20 lg:py-28 text-white border-b border-white/5"
      id="tech-stack"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left max-w-xl">
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase block">
              Core Stack
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Technologies We Work With
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We leverage production-proven open source tools, scalable database layers, and cloud infrastructure pipelines to architect stable digital products.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0c142b] border border-white/5 rounded-2xl p-1.5 self-start shrink-0">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-3 text-xs font-bold leading-none cursor-pointer transition-all border border-transparent ${
                  activeTab === tab.id 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20" 
                    : "text-gray-400 hover:text-white"
                }`}
                id={`tech-tab-${tab.id}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="tech-cards-grid">
          {activeTechs.map((tech, tIdx) => (
            <div 
              key={tech.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-[#0c142b]/40 p-6 hover:border-cyan-500/30 hover:bg-[#0c142b]/95 hover:shadow-2xl transition-all duration-300 animate-fadeIn"
              id={`tech-card-${tIdx}`}
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-gray-500 block uppercase tracking-wide select-none">
                  {tech.badge}
                </span>
                
                <h3 className="font-sans text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
                
                <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                  {tech.useCase}
                </p>
              </div>

              {/* Skill Matrix Progress */}
              <div className="mt-6 pt-4 border-t border-white/[0.04]">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-450 mb-1 select-none">
                  <span>Usage Integration</span>
                  <span className="text-cyan-400 font-bold">{tech.proficiencyScore}</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500" 
                    style={{ width: tech.proficiencyScore }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
