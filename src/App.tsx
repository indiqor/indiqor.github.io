import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import AboutCompany from "./components/AboutCompany";
import Services from "./components/Services";
import TrainingPrograms from "./components/TrainingPrograms";
import InternshipPrograms from "./components/InternshipPrograms";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Technologies from "./components/Technologies";
import FeaturedProjects from "./components/FeaturedProjects";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import ConsultationModal from "./components/ConsultationModal";
import Footer from "./components/Footer";
import { Sparkles, X, CheckSquare } from "lucide-react";

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedPlanId, setPreselectedPlanId] = useState<string>("");
  const [successLead, setSuccessLead] = useState<{ name: string; budget: string; service: string } | null>(null);

  const handleOpenConsultation = () => {
    setPreselectedPlanId("");
    setIsConsultationOpen(true);
  };

  const handleLeadSuccess = (name: string, budget: string, service: string) => {
    setSuccessLead({ name, budget, service });
    setIsConsultationOpen(false);

    // Auto-clear floating banner after 7 seconds
    setTimeout(() => {
      setSuccessLead(null);
    }, 7000);
  };

  return (
    <div className="min-h-screen bg-[#030712] font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-white scroll-smooth" id="app-root">
      
      {/* 1. Global Navigation */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* 2. Floating RFP Success Alert Banner */}
      {successLead && (
        <div 
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-emerald-500/20 bg-[#06151f]/95 p-5 pr-12 text-white shadow-2xl shadow-emerald-500/15 backdrop-blur-md animate-slideUp"
          id="lead-floating-banner"
          style={{ animationDuration: "0.4s" }}
        >
          <button 
            onClick={() => setSuccessLead(null)}
            className="absolute top-3 right-3 text-gray-500 hover:text-white focus:outline-none"
            aria-label="Close message"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
              <CheckSquare className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm leading-none text-white">Inquiry Received</h4>
              <p className="text-xs text-gray-400 mt-1.5 leading-normal">
                Thank you, <strong className="text-emerald-400 font-semibold">{successLead.name}</strong>! Your requirements have been synchronized with our core database spreadsheet.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Core Page Content */}
      <main>
        
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Corporate Trust Strip */}
        <TrustedBy />

        {/* About Company narration */}
        <AboutCompany />

        {/* Development Services Showcase */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* Professional IT Training Programs */}
        <TrainingPrograms onOpenConsultation={handleOpenConsultation} />

        {/* Internship Opportunities */}
        <InternshipPrograms onOpenConsultation={handleOpenConsultation} />

        {/* Interactive Step Roadmap Process */}
        <DevelopmentProcess />

        {/* Dynamic Technologies Categories */}
        <Technologies />

        {/* Case Studies Portfolio */}
        <FeaturedProjects />

        {/* Glassmorphism benefits checklist */}
        <WhyChooseUs />

        {/* Accordion FAQ Board */}
        <FAQSection />

        {/* Custom Google Forms inquiry widget & WhatsApp Bubble */}
        <ContactSection onSuccessSubmit={handleLeadSuccess} />

      </main>

      {/* 4. Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* 5. Central Consultation Modal Wizard */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedPlanId={preselectedPlanId}
        onSuccess={handleLeadSuccess}
      />

    </div>
  );
}
