/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { IndiqorLogo } from "./Header";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#030712] text-white" id="footer">
      
      {/* ========================================== */}
      {/* 1. CALL TO ACTION (CTA) SECTION            */}
      {/* ========================================== */}
      <section className="relative py-20 lg:py-24 border-t border-white/[0.04]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[75%] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1a3b] via-[#0b1329] to-[#040814] p-8 md:p-14 text-center shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 to-cyan-400 opacity-60" />

            <div className="max-w-2xl mx-auto space-y-6">
              
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20 select-none">
                <Sparkles className="h-3.5 w-3.5" /> Transform Today
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready To Build Your Next Software Solution?
              </h2>

              <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Partner with INDIQOR Technologies for software development, professional training, and certified student internships.
              </p>

              <div className="flex justify-center pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4.5 text-sm font-extrabold text-white shadow-xl shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                  id="cta-contact-btn"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. CORPORATE FOOTER COLUMNS                */}
      {/* ========================================== */}
      <section className="relative py-16 border-t border-white/[0.04] z-10 font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Logo, tagline statement */}
            <div className="lg:col-span-3 space-y-5">
              <div className="flex items-center gap-3">
                <IndiqorLogo className="h-8 w-8" />
                <div className="flex flex-col">
                  <span className="font-sans text-lg font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                    INDIQOR
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-mono leading-none">
                    Technologies
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Transforming Ideas Into Digital Solutions. Premium custom software engineering, training platforms, and certified student internships.
              </p>
            </div>

            {/* Custom columns (9 spans total) */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-6">
              
              {/* Column 1: Company links */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Company
                </h4>
                <ul className="space-y-2.5 text-xs text-sans">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#training" className="text-gray-400 hover:text-white transition-colors">Training Programs</a></li>
                  <li><a href="#internships" className="text-gray-400 hover:text-white transition-colors">Internship Programs</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Column 2: Development Services links */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-200">
                  Development
                </h4>
                <ul className="space-y-2.5 text-xs text-sans">
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Software Dev</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile Platforms</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
                </ul>
              </div>

              {/* Column 3: Training links */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-200">
                  Training
                </h4>
                <ul className="space-y-2.5 text-xs text-sans">
                  <li><a href="#training" className="text-gray-400 hover:text-white transition-colors">Java Training</a></li>
                  <li><a href="#training" className="text-gray-400 hover:text-white transition-colors">Spring Boot</a></li>
                  <li><a href="#training" className="text-gray-400 hover:text-white transition-colors">React Training</a></li>
                  <li><a href="#training" className="text-gray-400 hover:text-white transition-colors">Full Stack Dev</a></li>
                </ul>
              </div>

              {/* Column 4: Internship Links */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-200">
                  Internships
                </h4>
                <ul className="space-y-2.5 text-xs text-sans">
                  <li><a href="#internships" className="text-gray-400 hover:text-white transition-colors">Java Internship</a></li>
                  <li><a href="#internships" className="text-gray-400 hover:text-white transition-colors">Spring Boot</a></li>
                  <li><a href="#internships" className="text-gray-400 hover:text-white transition-colors">React Developer</a></li>
                  <li><a href="#internships" className="text-gray-400 hover:text-white transition-colors">Full Stack Dev</a></li>
                </ul>
              </div>

              {/* Column 5: Contact column info */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Contact
                </h4>
                <ul className="space-y-3.5 text-xs text-sans">
                  <li className="flex flex-col gap-1">
                    <span className="text-gray-500 text-[10px] uppercase font-mono">Email Us</span>
                    <a href="mailto:indiqor@rediffmail.com" className="text-[#a5b4fc] font-bold hover:underline break-all">
                      indiqor@rediffmail.com
                    </a>
                  </li>
                  <li className="flex flex-col gap-1 text-gray-400">
                    <span className="text-gray-500 text-[10px] uppercase font-mono">Operations</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-cyan-400" />
                      <span>Mon - Sat</span>
                    </div>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. COPYRIGHT BAR                           */}
      {/* ========================================== */}
      <section className="relative py-8 border-t border-white/[0.04] bg-[#02050e] text-xs text-gray-500 z-10 font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="font-sans text-center sm:text-left text-gray-400">
              © {currentYear} INDIQOR Technologies. All Rights Reserved.
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 select-none">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span>Certified Professional Digital Security Standard</span>
            </div>

          </div>
        </div>
      </section>

    </footer>
  );
}
