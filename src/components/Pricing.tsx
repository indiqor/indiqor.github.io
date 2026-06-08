import React from "react";
import { PRICING_DATA } from "../data/agencyData";
import { Check, ShieldCheck, Sparkles, Building2 } from "lucide-react";

interface PricingProps {
  onOpenConsultationWithPlan: (planId: string) => void;
}

export default function Pricing({ onOpenConsultationWithPlan }: PricingProps) {
  return (
    <section 
      className="relative bg-[#050917] py-20 lg:py-28 text-white border-t border-white/[0.04]"
      id="pricing"
    >
      {/* Background radial effects */}
      <div className="absolute top-[30%] left-[10%] h-[45%] w-[45%] bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] h-[40%] w-[35%] bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Pricing Plans
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Clear, Transparent Investment
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Select an engagement tier that corresponds to your present operational scope, and click to pre-commission your custom RFP architecture.
          </p>
        </div>

        {/* 3-Card Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" id="pricing-matrix-container">
          {PRICING_DATA.map((plan) => {
            return (
              <div 
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-md transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-br from-[#0c1a3b] to-[#0c142b] border-2 border-blue-500 shadow-xl shadow-blue-500/10 scale-105 z-10" 
                    : "bg-[#0c1429]/60 border border-white/[0.06] hover:border-white/10"
                }`}
                id={`pricing-card-${plan.id}`}
              >
                
                {/* Popular Badge Glow */}
                {plan.popular && (
                  <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-1 text-xs font-extrabold text-white uppercase tracking-wider shadow-lg shadow-blue-500/30">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </div>
                )}

                <div>
                  {/* Category Details */}
                  <div className="space-y-1 mb-6">
                    <h3 className="font-sans text-lg font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <span className="font-mono text-[10px] tracking-wider text-blue-400 uppercase block">
                      {plan.label}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/5 mb-6">
                    <span className="font-mono text-4xl font-extrabold tracking-tight text-white leading-none">
                      {plan.price}
                    </span>
                    {plan.priceSub && (
                      <span className="text-xs text-gray-400 font-mono">
                        ({plan.priceSub})
                      </span>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 text-xs text-gray-350" id={`pricing-features-list-${plan.id}`}>
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action trigger */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => onOpenConsultationWithPlan(plan.id)}
                    className={`w-full rounded-xl py-3.5 text-center text-xs font-extrabold tracking-wide cursor-pointer transition-all ${
                      plan.popular 
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:opacity-95 active:scale-95 shadow-cyan-500/10" 
                        : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                    id={`btn-pricing-cta-${plan.id}`}
                  >
                    {plan.ctaText}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Trust indicator */}
        <div className="mt-16 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 font-mono">
          <Building2 className="h-4 w-4 text-blue-400" />
          <span>Complete custom enterprise contracts are secured under bilateral NDAs &amp; rigid SLA commitments.</span>
        </div>

      </div>
    </section>
  );
}
