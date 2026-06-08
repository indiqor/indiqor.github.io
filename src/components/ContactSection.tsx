import React, { useState } from "react";
import { Mail, Clock, ShieldAlert, Sparkles, Send, PhoneCall, CheckSquare } from "lucide-react";

interface ContactSectionProps {
  onSuccessSubmit: (name: string, budget: string, service: string) => void;
}

export default function ContactSection({ onSuccessSubmit }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    companyName: "",
    serviceInterestedIn: "",
    trainingInterestedIn: "",
    internshipInterestedIn: "",
    projectRequirement: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    { value: "custom-software", label: "Custom Software Development" },
    { value: "web-dev", label: "Web Development" },
    { value: "mobile-dev", label: "Mobile App Development" },
    { value: "cloud-devops", label: "Cloud Solutions & DevOps" },
    { value: "it-consulting", label: "IT Consulting" },
    { value: "support-maintenance", label: "Software Support & Maintenance" }
  ];

  const trainings = [
    { value: "java", label: "Java Development Training" },
    { value: "springboot", label: "Spring Boot Training" },
    { value: "react", label: "React JS Training" },
    { value: "fullstack", label: "Full Stack Development Training" }
  ];

  const internships = [
    { value: "java-dev", label: "Java Developer Internship" },
    { value: "springboot-dev", label: "Spring Boot Internship" },
    { value: "react-dev", label: "React Developer Internship" },
    { value: "fullstack-dev", label: "Full Stack Developer Internship" },
    { value: "testing", label: "Software Testing Internship" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyodPDoKII6N0cV1CDlxG2F8YQhkrBx6oau5M_JQVLRIl7u1ZQ17DsvoPtEhln02QWh/exec";


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.fullName || !formData.emailAddress) {
    alert("Please enter Full Name and Email Address");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.emailAddress,
        phone: formData.mobileNumber,
        company: formData.companyName,
        service: formData.serviceInterestedIn,
        training: formData.trainingInterestedIn,
        internship: formData.internshipInterestedIn,
        projectRequirement: formData.projectRequirement,
        message: formData.message,
      }),
    });

    const text = await response.text();

    console.log("Raw Response:", text);

    let result;

    try {
      result = JSON.parse(text);
    } catch (err) {
      console.error("JSON Parse Error:", err);
      alert("Invalid response received from server.");
      return;
    }

    if (result.success) {
      setSubmitSuccess(true);

      onSuccessSubmit(
        formData.fullName,
        formData.projectRequirement || "General Inquiry",
        formData.serviceInterestedIn ||
          formData.trainingInterestedIn ||
          formData.internshipInterestedIn ||
          "it-services"
      );

      setFormData({
        fullName: "",
        emailAddress: "",
        mobileNumber: "",
        companyName: "",
        serviceInterestedIn: "",
        trainingInterestedIn: "",
        internshipInterestedIn: "",
        projectRequirement: "",
        message: "",
      });

      alert("Form submitted successfully!");

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } else {
      alert(result.error || "Failed to submit form.");
    }

  } catch (error) {
    console.error("Submit Error:", error);
    alert("Unable to connect to server.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 text-white"
      id="contact"
    >
      {/* Dynamic graphic grids */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-0 h-[60%] w-[40%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[2%] left-0 h-[40%] w-[35%] rounded-full bg-cyan-600/5 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Inquiry Desk
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Get In Touch
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed pt-2">
            Have a software project, training requirement, or internship inquiry? Contact INDIQOR Technologies and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-split-grid">
          
          {/* Left Column: Customized Contact Form (Google Forms/Sheets Simulator) (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0c142b]/60 p-6 sm:p-8 backdrop-blur-md relative" id="contact-form-widget">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-45">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[9px]">Google Forms Sync Active</span>
            </div>

            <h3 className="font-sans text-xl font-bold text-white mb-6">
              Submit Inquiry Form
            </h3>

            {submitSuccess && (
              <div className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs text-emerald-400 flex items-center gap-2">
                <CheckSquare className="h-4 w-4 shrink-0" />
                <span>Thank you! Your inquiry was disptached directly to our Google Spreadsheet database. Our team will read it within 24 Hours.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Email Address *</label>
                  <input 
                    type="email" 
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="e.g. rahul@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Mobile Number & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 9876543210"
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Company Name (If applicable)</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Acme Tech Solutions"
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Interested Lists */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Service of Interest</label>
                  <select 
                    name="serviceInterestedIn"
                    value={formData.serviceInterestedIn}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] px-3 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">-- Select Service --</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Training Program</label>
                  <select 
                    name="trainingInterestedIn"
                    value={formData.trainingInterestedIn}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] px-3 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">-- Select Program --</option>
                    {trainings.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Internship Track</label>
                  <select 
                    name="internshipInterestedIn"
                    value={formData.internshipInterestedIn}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] px-3 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">-- Select Internship --</option>
                    {internships.map((i) => (
                      <option key={i.value} value={i.value}>{i.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Requirement */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Project Budget / Specific Goal</label>
                <input 
                  type="text" 
                  name="projectRequirement"
                  value={formData.projectRequirement}
                  onChange={handleInputChange}
                  placeholder="e.g. Launching custom ERP in 3 months (under $10k)"
                  className="w-full rounded-xl border border-white/10 bg-[#070b19] px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Explain Your Brief Goal</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Explain details of your software development build, internship scope, or training enrollment..."
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-[#070b19] px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Submit triggers */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Synchronizing Spreadsheet Entries...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry to INDIQOR</span>
                      <Send className="h-4.5 w-4.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6" id="contact-info-cards">
            
            {/* 1. Email Channel card */}
            <div className="rounded-2xl border border-white/[0.05] bg-[#0c142b]/65 p-6 hover:border-cyan-500/30 hover:bg-[#0c142b]/90 transition-all flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Mail className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono tracking-wide text-gray-500">Corporate Email</span>
                <a 
                  href="mailto:indiqor@rediffmail.com"
                  className="block font-sans text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  indiqor@rediffmail.com
                </a>
              </div>
            </div>

            {/* 2. Business Hours card */}
            <div className="rounded-2xl border border-white/[0.05] bg-[#0c142b]/65 p-6 hover:border-cyan-500/30 hover:bg-[#0c142b]/90 transition-all flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Clock className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono tracking-wide text-gray-500">Business Hours</span>
                <span className="block font-sans text-sm sm:text-base font-bold text-white leading-normal">
                  Monday – Saturday
                </span>
                <span className="block text-xs text-gray-400 font-mono">
                  9:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            {/* 3. SLA metric card */}
            <div className="rounded-2xl border border-white/[0.05] bg-[#0c142b]/65 p-6 hover:border-cyan-500/30 hover:bg-[#0c142b]/90 transition-all flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <ShieldAlert className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono tracking-wide text-gray-500">Response SLA</span>
                <span className="block font-sans text-sm sm:text-base font-bold text-white">
                  Within 24 Hours
                </span>
                <span className="block text-xs text-gray-400">
                  Quick feedback across all business inquiries.
                </span>
              </div>
            </div>

            {/* Quick Action Button Box */}
            <div className="rounded-2xl border border-white/[0.05] bg-[#0c142b]/20 p-5 mt-auto flex flex-col sm:flex-row items-center gap-3">
              <button 
                onClick={() => {
                  const el = document.getElementById("contact-form-widget");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full rounded-xl bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-500/20 py-3.5 text-center text-xs font-bold text-cyan-400 transition-all"
              >
                Submit Inquiry
              </button>
              
              <a 
                href="mailto:indiqor@rediffmail.com"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-center text-xs font-bold text-white transition-all block"
              >
                Email Us Link
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Interactive Widget Triggers (WhatsApp + BackToTop callback) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2.5" id="floating-actions-container">
        
        {/* Floating WhatsApp trigger */}
        <a 
          href="https://wa.me/918006494238?text=Hello%20Indiqor%20Technologies%2C%20I%20have%20a%20project%2Ftraining%20inquiry%20to%20discuss."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white p-3 sm:pr-5 shadow-2xl transition-all hover:scale-105 active:scale-95"
          title="Direct WhatsApp Inquiry"
          id="whatsapp-support-bubble"
        >
          {/* WhatsApp SVG or simple bubble icon */}
          <span className="flex h-5.5 w-5.5 items-center justify-center select-none text-base">💬</span>
          <span className="hidden sm:inline font-sans font-bold text-xs">WhatsApp Chat</span>
        </a>

        {/* Sticky Contact Callback prompt */}
        <button 
          onClick={() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 sm:pr-5 shadow-2xl transition-all hover:scale-105 active:scale-95"
          id="sticky-callback-launcher"
        >
          <PhoneCall className="h-4 w-4" />
          <span className="hidden sm:inline font-sans font-bold text-xs">Request Callback</span>
        </button>

      </div>

    </section>
  );
}
