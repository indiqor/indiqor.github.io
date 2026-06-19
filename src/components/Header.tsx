/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";

interface HeaderProps {
  onOpenConsultation: () => void;
  activeView: "agency" | "certificates";
  setActiveView: (view: "agency" | "certificates") => void;
}

export function IndiqorLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main electric blue to cyan gradient */}
        <linearGradient id="logo-electric-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052d4" />
          <stop offset="50%" stopColor="#4364f7" />
          <stop offset="100%" stopColor="#6fb1fc" />
        </linearGradient>
        
        {/* Core cyan linear gradient */}
        <linearGradient id="logo-cyan-grad" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        <filter id="glow-logo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Cybernetic Swirling Q Base Outer circles */}
      <circle cx="50" cy="50" r="42" stroke="url(#logo-electric-grad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="180 60" />
      <circle cx="50" cy="50" r="32" stroke="url(#logo-cyan-grad)" strokeWidth="2.5" strokeDasharray="120 40" transform="rotate(45 50 50)" />
      
      {/* Maze channels winding outwards */}
      <path d="M 50 8 A 42 42 0 0 1 82 76" stroke="url(#logo-cyan-grad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 28 28 A 31 31 0 0 1 72 72" stroke="url(#logo-electric-grad)" strokeWidth="2" strokeLinecap="round" />

      {/* Upward Arrow in the Center */}
      <path 
        d="M 50 25 L 35 48 H 44 V 68 H 56 V 48 H 65 L 50 25 Z" 
        fill="url(#logo-cyan-grad)" 
        filter="url(#glow-logo)"
      />
      <path d="M 44 68 L 50 63 L 56 68" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Stylized Bottom-Right Q-Tail Arrow Extension */}
      <path 
        d="M 75 75 L 94 94 M 84 72 L 95 91 L 76 91" 
        stroke="url(#logo-cyan-grad)" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export default function Header({ onOpenConsultation, activeView, setActiveView }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll height to apply dynamic frosting blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Training", href: "#training" },
    { name: "Internships", href: "#internships" },
    { name: "Certificates", href: "#certificates" },
    { name: "Process", href: "#process" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavLinkClick = (e: React.MouseEvent, name: string, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (name === "Certificates") {
      setActiveView("certificates");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveView("agency");
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveView("agency");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#070b19]/80 border-b border-white/10 backdrop-blur-md py-4 shadow-lg shadow-black/20" 
          : "bg-transparent py-6"
      }`}
      id="main-header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a 
            href="#hero" 
            onClick={handleLogoClick}
            className="flex items-center gap-3 group transition-transform duration-205" 
            id="brand-logo"
          >
            <IndiqorLogo className="h-9 w-9 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-sans text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-blue-400">
                INDIQOR
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-mono leading-none">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1.5" id="desktop-nav">
            {navLinks.map((link) => {
              const isCert = link.name === "Certificates";
              const isHighlighted = isCert ? activeView === "certificates" : false;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.name, link.href)}
                  className={`relative rounded-full px-3 py-2 text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isHighlighted
                      ? "bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)] px-4"
                      : "text-gray-300 hover:text-white"
                  } after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-4`}
                  id={`nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                if (activeView === "certificates") {
                  setActiveView("agency");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  onOpenConsultation();
                }
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:opacity-90 active:scale-95 transition-all"
              id="header-btn-contact"
            >
              Contact <Rocket className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 hover:bg-white/10 hover:text-white md:hidden transition-all pointer-events-auto"
            id="mobile-menu-trigger"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Sliding Overlay Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-x-0 top-[73px] z-[39] bg-[#070b19] border-b border-white/10 p-6 md:hidden animate-slideDown max-h-[80vh] overflow-y-auto"
          id="mobile-navigation-pane"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isCert = link.name === "Certificates";
              const isHighlighted = isCert ? activeView === "certificates" : false;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.name, link.href)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all block ${
                    isHighlighted 
                      ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
                      : "bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                  id={`mobile-nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </a>
              );
            })}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (activeView === "certificates") {
                  setActiveView("agency");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  onOpenConsultation();
                }
              }}
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-center text-sm font-extrabold text-white shadow-lg shadow-blue-500/10 hover:opacity-95"
              id="mobile-btn-contact"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
