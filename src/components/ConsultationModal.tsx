import React, { useState } from "react";
import { X, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, DollarSign, Calendar, Landmark, Briefcase } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlanId?: string;
  onSuccess: (name: string, budget: string, service: string) => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  preselectedPlanId = "",
  onSuccess
}: ConsultationModalProps) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: preselectedPlanId === "startup-tier" ? "web-dev" : preselectedPlanId === "business-tier" ? "custom-software" : "ai-ml",
    budget: preselectedPlanId === "startup-tier" ? "startup" : preselectedPlanId === "business-tier" ? "business" : "enterprise",
    timeline: "3months",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      alert("Please provide your name and email to proceed.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
      // Persist locally for validation
      const existingLeads = JSON.parse(localStorage.getItem("indiqor_leads") || "[]");
      const newLead = {
        ...formData,
        id: "lead_" + Date.now(),
        submittedAt: new Date().toISOString()
      };
      existingLeads.push(newLead);
      localStorage.setItem("indiqor_leads", JSON.stringify(existingLeads));

      // Trigger state update
      onSuccess(formData.name, formData.budget, formData.serviceType);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop mapping dark blue blur */}
      <div 
        className="absolute inset-0 bg-[#070b19]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        id="modal-backdrop"
      />

      {/* Main Glass Modal */}
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1329]/95 p-6 md:p-8 text-white shadow-2xl shadow-blue-500/10"
        id="modal-content"
      >
        {/* Glow Element */}
        <div className="absolute -top-1/4 -right-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          id="btn-close-modal"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
                <Sparkles className="h-3.5 w-3.5" /> Interactive RFP Blueprint
              </span>
              <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
                Get Your Solutions Blueprint
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Provide us details about your project, and our consulting architects will prepare a custom delivery proposal within 24 hours.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      step >= s ? "bg-gradient-to-r from-blue-500 to-cyan-400" : "bg-white/10"
                    }`} 
                  />
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Step 1: Partner Information</h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Indiqor Enterprise"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Step 2: Project Specifications</h4>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Target Service Domain</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none focus:border-blue-500 transition-all"
                    >
                      <option value="web-dev">Web Application (React, Java, Spring, Node)</option>
                      <option value="mobile-dev">Mobile App Development (Flutter, React Native)</option>
                      <option value="custom-software">Custom Architecture (ERP, CRM, Workflow Automation)</option>
                      <option value="cloud-solutions">Cloud Migration &amp; Infrastructure (DevOps, AWS, Azure)</option>
                      <option value="ai-ml">AI Integration &amp; Cognitive Engines (Gemini API, Chatbots)</option>
                      <option value="ui-ux">Digital UI/UX Visual Transformation Framework</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1">
                        <DollarSign className="h-3 w-3 text-cyan-400" /> Estimated Budget Frame
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none focus:border-blue-500 transition-all"
                      >
                        <option value="startup">Startup Core (~$999 - $2,500)</option>
                        <option value="business">Business Systems (~$2,500 - $10,000)</option>
                        <option value="enterprise">Enterprise Custom Tier (&gt;$10,000)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-cyan-400" /> Launch Timeline Goals
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none focus:border-blue-500 transition-all"
                      >
                        <option value="urgent">Urgent (&lt; 1 Month)</option>
                        <option value="3months">Standard (2 - 3 Months)</option>
                        <option value="flexible">Flexible (3+ Months)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Step 3: Brief Us</h4>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Project Scope Outline</label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Brief us on core visual goals, backend connections, or unique workflows you wish to engineer..."
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Summary recap preview card */}
                  <div className="rounded-xl border border-blue-500/10 bg-blue-500/5 p-4 text-xs">
                    <h5 className="font-semibold text-blue-400 mb-2 flex items-center gap-1">
                      <Landmark className="h-3.5 w-3.5" /> Proposal Overview Preview
                    </h5>
                    <div className="grid grid-cols-2 gap-y-1 text-gray-400">
                      <span>Requester:</span> <span className="text-white font-medium">{formData.name || "N/A"}</span>
                      <span>Target Service:</span> <span className="text-white font-medium capitalize">{formData.serviceType.replace("-", " ")}</span>
                      <span>Budget Tier:</span> <span className="text-white font-medium uppercase font-mono text-cyan-400">{formData.budget}</span>
                      <span>Timeline:</span> <span className="text-white font-medium">{formData.timeline === "urgent" ? "Urgent (< 30d)" : formData.timeline === "3months" ? "2-3 Months" : "Flexible"}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                    id="btn-prev-modal"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 shadow-lg shadow-blue-500/20 active:scale-95 transition-all ml-auto"
                    id="btn-next-step"
                  >
                    Next Stage <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-2.5 text-sm font-bold text-white hover:opacity-90 active:scale-95 disabled:opacity-50 shadow-lg shadow-cyan-500/10 transition-all ml-auto"
                    id="btn-submit-proposal"
                  >
                    {isSubmitting ? "Engineering RFP..." : "Generate Direct Proposal"}
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-fadeIn">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-white mb-2">
              Proposal Generated Successfully!
            </h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Brilliant, <span className="text-cyan-400 font-semibold">{formData.name}</span>! Your request for your <span className="text-white capitalize">{formData.serviceType}</span> system has been securely stored in our cloud leads tracker.
            </p>
            <p className="mt-3 text-xs text-gray-500 max-w-sm mx-auto bg-white/5 rounded-lg p-2 font-mono">
              Lead ID: {Math.random().toString(36).substr(2, 9).toUpperCase()} | Active proposal dispatched to {formData.email}
            </p>

            <button
              onClick={onClose}
              className="mt-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all cursor-pointer"
              id="btn-success-close"
            >
              Return to Showcase
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
