/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SERVICES_DATA } from "../data/agencyData";
import { Service } from "../types";
import { Globe, Smartphone, Cpu, Cloud, Sparkles, Palette, ArrowRight, X, Layers, ShieldCheck, Check, Briefcase, Wrench } from "lucide-react";

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon strings to Lucide components for absolute system safety
  const renderIcon = (name: string, className: string = "h-6 w-6") => {
    switch (name) {
      case "Globe": return <Globe className={className} />;
      case "Smartphone": return <Smartphone className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "Cloud": return <Cloud className={className} />;
      case "Sparkles": return <Sparkles className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      case "Wrench": return <Wrench className={className} />;
      default: return <Palette className={className} />;
    }
  };

  return (
    <section 
      className="relative bg-[#050917] py-20 lg:py-28 text-white border-b border-white/5"
      id="services"
    >
      {/* Background grids */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] -left-[10%] h-[50%] w-[50%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-cyan-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Services Catalog
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Our Specialist Services
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            INDIQOR Technologies specializes in delivering scalable software builds, responsive web applications, and expert technical support matching precise business rules.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#0c1429]/60 p-6 sm:p-8 hover:border-blue-500/30 hover:bg-[#0c1429]/95 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
              id={`service-card-${idx}`}
            >
              {/* Card top flare overlay */}
              <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-3/4 transition-all duration-500" />
              
              <div>
                {/* Icon Circle */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:text-white transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Heading */}
                <h3 className="font-sans text-xl font-bold tracking-tight text-white transition-colors">
                  {service.title}
                </h3>

                {/* Sub text */}
                <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Micro tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-gray-400 border border-white/[0.02]">
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-blue-400">
                      +{service.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  id={`btn-learn-${service.id}`}
                >
                  Learn More <ArrowRight className="h-3 w-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* DETAILED DRILLDOWN MODAL OVERLAY */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#070b19]/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedService(null)}
          />
          
          <div 
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c142b] p-6 sm:p-8 text-white shadow-2xl shadow-cyan-500/5 animate-scaleUp"
            id="service-details-modal"
          >
            {/* Top Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              id="btn-close-service-modal"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Glowing background shapes */}
            <div className="absolute -top-1/4 -right-1/4 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            {/* Modal Body */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-cyan-400 border border-blue-500/15">
                  {renderIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-white leading-none">
                    {selectedService.title}
                  </h3>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400 mt-1 block">
                    Focus Domain Specifications
                  </span>
                </div>
              </div>

              {/* Detailed statement */}
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>{selectedService.details}</p>
              </div>

              {/* Grid dividing tech stacks & features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/5">
                
                {/* Tech Stacks */}
                <div>
                  <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
                    <Layers className="h-4 w-4" /> Recommended Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech) => (
                      <span key={tech} className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1 text-xs text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables */}
                <div>
                  <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 font-mono">
                    <ShieldCheck className="h-4 w-4" /> Deliverables Frame
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                    {selectedService.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Call to actions directly targeting this service */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500 text-center sm:text-left">
                  Need a custom scope proposal for this?
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-xs font-bold text-white hover:opacity-90 transition-all text-center cursor-pointer"
                  id="btn-modal-service-consult"
                >
                  Initiate Project Blueprint
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
