/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import AboutCompany from "./components/AboutCompany";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import TrainingPrograms from "./components/TrainingPrograms";
import InternshipPrograms from "./components/InternshipPrograms";
import CertificatesSection from "./components/CertificatesSection";
import DevelopmentProcess from "./components/DevelopmentProcess";
import FeaturedProjects from "./components/FeaturedProjects";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeView, setActiveView] = useState<"agency" | "certificates">("agency");
  const [latestSubmission, setLatestSubmission] = useState<{
    name: string;
    budget: string;
    service: string;
  } | null>(null);

  const handleOpenConsultation = () => {
    setActiveView("agency");
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleConsultationSuccess = (name: string, budget: string, service: string) => {
    setLatestSubmission({ name, budget, service });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Banner on live form success */}
      {latestSubmission && (
        <div className="fixed bottom-6 right-6 z-55 max-w-sm rounded-xl border border-cyan-500/20 bg-[#070b19]/95 p-4 shadow-2xl backdrop-blur-md animate-slideUp text-xs flex items-start gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping mt-1 shrink-0" />
          <div className="space-y-1">
            <h5 className="font-sans font-bold text-white">Active Connection Registered</h5>
            <p className="text-gray-400">
              Welcome, <strong className="text-cyan-400">{latestSubmission.name}</strong>. Our custom proposal architects have received your request for a <span className="text-white capitalize">{latestSubmission.service.replace("-", " ")}</span> build.
            </p>
            <button 
              onClick={() => setLatestSubmission(null)}
              className="text-[10px] text-gray-500 hover:text-white underline pt-1 block cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main navigation Header */}
      <Header 
        onOpenConsultation={() => handleOpenConsultation()} 
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Core sections sequence matching optimal UX flow */}
      <main>
        {activeView === "agency" ? (
          <>
            {/* Landing Hero Screen */}
            <Hero onOpenConsultation={() => handleOpenConsultation()} />

            {/* Corporate Trust Badges Banner */}
            <TrustedBy />

            {/* About Company Sectors */}
            <AboutCompany />

            {/* Core Services Catalog */}
            <Services onOpenConsultation={() => handleOpenConsultation()} />

            {/* Bento Grid: Why Choose Us */}
            <WhyChooseUs />

            {/* Professional IT Training Programs */}
            <TrainingPrograms onOpenConsultation={() => handleOpenConsultation()} />

            {/* Certified Student & Recruiter Internship tracks */}
            <InternshipPrograms onOpenConsultation={() => handleOpenConsultation()} />

            {/* Connection development timeline */}
            <DevelopmentProcess />

            {/* High performance technologies stacks showcase */}
            <Technologies />

            {/* Portfolio Recent Works */}
            <FeaturedProjects />

            {/* Verified User & HR Testimonials */}
            <Testimonials />

            {/* Support Collapsible FAQ */}
            <FAQSection />

            {/* Spreadsheet Inquiry Desk Contact Forms */}
            <ContactSection onSuccessSubmit={(name, budget, service) => handleConsultationSuccess(name, budget, service)} />
          </>
        ) : (
          <div className="pt-24 min-h-[80vh] flex flex-col">
            {/* Elegant separate page portal wrapper */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
              <nav className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-6 bg-[#0c142b]/60 border border-white/5 py-2 px-4 rounded-full w-fit">
                <button 
                  onClick={() => setActiveView("agency")} 
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  INDIQOR Technologies
                </button>
                <span>/</span>
                <span className="text-cyan-400 font-bold uppercase">Verifiable Credentials Portal</span>
              </nav>
            </div>
            
            <CertificatesSection />
            
            {/* Professional informational block underneath for institutional verifiers */}
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20 text-center space-y-6">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <h3 className="font-sans text-lg font-bold text-white">Institutional Verification API &amp; Support</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
                Are you an HR manager, academic registrar, or corporate legal desk looking for automated bulk check handshakes or raw JSON ledgers? All credentials published by INDIQOR Technologies are cryptographically authenticated under the SHA-256 block schema.
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <button 
                  onClick={() => {
                    setActiveView("agency");
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2.5 text-xs font-mono text-gray-300 transition-all cursor-pointer"
                >
                  Contact Security Compliance Office
                </button>
                <button 
                  onClick={() => setActiveView("agency")}
                  className="rounded-lg bg-cyan-600/15 border border-cyan-500/20 hover:bg-cyan-600/30 px-4 py-2.5 text-xs font-mono text-cyan-400 transition-all cursor-pointer"
                >
                  ← Return to Corporate Home
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Structured CTA footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />


    </div>
  );
}
