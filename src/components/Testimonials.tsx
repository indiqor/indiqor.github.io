/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { TESTIMONIALS_DATA } from "../data/agencyData";
import { Star, ChevronLeft, ChevronRight, Quote, Landmark } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect to increase engagement
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  // Generate responsive high-end vector initials for client avatars
  const renderInitialsAvatar = (author: string, index: number) => {
    const initials = author.split(" ").map((n) => n[0]).join("");
    const bgGradients = [
      "from-cyan-400 to-blue-500",
      "from-blue-600 to-indigo-600",
      "from-purple-500 to-indigo-500",
      "from-emerald-400 to-teal-500"
    ];
    const activeGradient = bgGradients[index % bgGradients.length];

    return (
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr ${activeGradient} text-white font-sans font-extrabold text-sm shadow-xl select-none`}>
        {initials}
      </div>
    );
  };

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 text-white overflow-hidden"
      id="testimonials"
    >
      {/* Background neon glows */}
      <div className="absolute top-[30%] -right-[15%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[10%] h-[40%] w-[40%] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Client Success
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Read direct alignment feedback from chief technology officers and founders who launched scalable systems under INDIQOR Technologies.
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="relative" id="testimonial-carousel-container">
          
          <div className="relative min-h-[300px] flex items-center justify-center">
            {TESTIMONIALS_DATA.map((t, idx) => {
              const isActive = idx === activeIndex;
              if (!isActive) return null;

              return (
                <div 
                  key={t.id}
                  className="w-full rounded-3xl border border-white/10 bg-[#0c142b]/80 p-8 md:p-12 backdrop-blur-md shadow-2xl shadow-blue-500/5 relative animate-fadeIn"
                  id={`testimonial-slide-${idx}`}
                >
                  {/* Decorative big quotes icon */}
                  <Quote className="absolute top-6 right-8 h-16 w-16 text-blue-500/10 pointer-events-none" />

                  {/* Rating star block */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="h-4.5 w-4.5 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>

                  {/* Feedback text paragraph */}
                  <p className="font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed text-gray-200 mb-8 italic">
                    "{t.feedback}"
                  </p>

                  {/* Client Bio strip */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    {renderInitialsAvatar(t.author, idx)}
                    <div>
                      <h4 className="font-sans font-extrabold text-base text-white">
                        {t.author}
                      </h4>
                      <span className="text-xs text-gray-400 flex items-center gap-1.5 mt-1 select-none">
                        <Landmark className="h-3.5 w-3.5 text-blue-400 shrink-0" /> {t.position}, <strong className="text-cyan-400 font-semibold">{t.company}</strong>
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Slider bottom indicators & toggle buttons layout */}
          <div className="flex items-center justify-between mt-8 px-4">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    dotIdx === activeIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  id={`btn-dot-${dotIdx}`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next Navigation Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                id="btn-prev-testi"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                id="btn-next-testi"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
