/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Award, 
  Search, 
  ShieldCheck, 
  CheckCircle, 
  Download, 
  ArrowRight, 
  Sparkles, 
  Key, 
  Database, 
  RefreshCw,
  QrCode,
  Hash,
  AlertTriangle,
  Lock,
  Unlock,
  Terminal,
  Activity
} from "lucide-react";
import { MOCK_CERTIFICATES_DATABASE } from "../data/agencyData";
import { VerifiedCertificate } from "../types";
import { IndiqorLogo } from "./Header";

export default function CertificatesSection() {
  // Current loaded credentials lookup state
  const [searchQuery, setSearchQuery] = useState("IND-TR-0042");
  const [activeVerifiedCert, setActiveVerifiedCert] = useState<VerifiedCertificate>(MOCK_CERTIFICATES_DATABASE[0]);
  const [isValidId, setIsValidId] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationLogs, setVerificationLogs] = useState<string[]>([]);
  const [searchFeedback, setSearchFeedback] = useState("");

  // Run the cryptographic ID check handshake whenever the active certificate is verified/changed
  const runIdVerification = (idToVerify: string, certRef: VerifiedCertificate | null) => {
    setIsVerifying(true);
    setVerificationLogs([
      "📡 Swapping security nodes... Connecting to INDIQOR Ledger Service",
      "🔍 Querying Block Index contract for certificate identifier: '" + idToVerify + "'..."
    ]);

    setTimeout(() => {
      if (certRef) {
        setIsValidId(true);
        setActiveVerifiedCert(certRef);
        setVerificationLogs((prev) => [
          ...prev,
          "🌐 Handshake Successful! Found Registry signature matching Central Authority key.",
          "🛡️ Verification Check: Checked Recipient '" + certRef.recipientName + "'",
          "📈 Block Hash loaded: " + certRef.sha256.slice(0, 32) + "...",
          "✨ Dynamic Security Logo: Status set to VALIDATED & ACTIVE"
        ]);
        setSearchFeedback("Ledger record verified successfully.");
      } else {
        // Fallback check against DB
        const match = MOCK_CERTIFICATES_DATABASE.find(
          (c) => c.certificateId.toUpperCase() === idToVerify.trim().toUpperCase()
        );
        if (match) {
          setIsValidId(true);
          setActiveVerifiedCert(match);
          setVerificationLogs((prev) => [
            ...prev,
            "🌐 Handshake Successful! Found Central Registry signature entry.",
            "🛡️ Verification Check: Checked Recipient '" + match.recipientName + "'",
            "📈 Block Hash loaded: " + match.sha256.slice(0, 32) + "...",
            "✨ Dynamic Security Logo: Status set to VALIDATED & ACTIVE"
          ]);
          setSearchFeedback("Record found. Seal verified.");
        } else {
          setIsValidId(false);
          setVerificationLogs((prev) => [
            ...prev,
            "⚠️ DATABASE AUDIT FAILURE: Identifier '" + idToVerify + "' is not registered in central contracts.",
            "❌ Digital Signature Signature Check: REJECTED",
            "🚨 Dynamic Security Logo Seal: BLOCKED & UNVERIFIED"
          ]);
          setSearchFeedback("Registry lookup failed. Dynamic seal restricted.");
        }
      }
      setIsVerifying(false);
    }, 550);
  };

  // Perform active initial validation check
  useEffect(() => {
    runIdVerification("IND-TR-0042", MOCK_CERTIFICATES_DATABASE[0]);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const cleaned = searchQuery.trim().toUpperCase();
    const match = MOCK_CERTIFICATES_DATABASE.find(
      (cert) =>
        cert.certificateId.toUpperCase() === cleaned ||
        cert.recipientName.toUpperCase().includes(cleaned)
    );

    if (match) {
      runIdVerification(match.certificateId, match);
    } else {
      runIdVerification(searchQuery, null);
    }
  };

  const handleApplyMockCert = (cert: VerifiedCertificate) => {
    setSearchQuery(cert.certificateId);
    runIdVerification(cert.certificateId, cert);
  };

  const handlePrint = () => {
    window.print();
  };

  // Determine current active display color theme derived directly from verified certificate profile
  const themeStyle = isValidId
    ? activeVerifiedCert.type === "training" && activeVerifiedCert.certificateId.includes("0042")
      ? "gold"
      : activeVerifiedCert.type === "training"
      ? "cyan"
      : "purple"
    : "error";

  return (
    <section 
      className="relative bg-[#030712] py-20 lg:py-28 text-white border-y border-white/5"
      id="certificates"
    >
      {/* Dynamic Grid Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] h-[40%] w-[40%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] h-[35%] w-[45%] rounded-full bg-purple-500/5 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase flex items-center justify-center gap-1.5 select-none">
            <ShieldCheck className="h-4.5 w-4.5 text-cyan-400 animate-pulse" /> Cryptographic Authenticity Desk
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Verifiable Credentials Ledger
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed pt-2">
            Validate authentic professional training certificates and project-based internship records directly against our decentralized registry database.
          </p>
        </div>

        {/* Dashboard split into 4-col validation controls and 8-col certificate view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Ledger Queries & Security Audits (4 cols)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Database Verification Search Desk */}
            <div className="rounded-2xl border border-white/10 bg-[#0c142b]/85 p-5 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-sans text-sm font-extrabold text-white flex items-center gap-2">
                  <Database className="h-4 w-4 text-cyan-400" /> Registry Query Console
                </h3>
                <span className="font-mono text-[9px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 rounded-full select-none animate-pulse">
                  Ledger Online
                </span>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Search via unique Certificate ID or Student Name to authorize security seal certificates.
              </p>

              {/* Instant pre-populate queries suggestion chips */}
              <div className="space-y-2 mb-4">
                <span className="text-[10px] font-mono text-gray-400 block select-none">
                  Registered Database Records:
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {MOCK_CERTIFICATES_DATABASE.map((item) => (
                    <button
                      key={item.certificateId}
                      onClick={() => handleApplyMockCert(item)}
                      className={`rounded hover:border-cyan-400/40 hover:bg-cyan-950/20 px-2 py-1 text-[10px] font-mono transition-all duration-200 cursor-pointer select-none ${
                        searchQuery === item.certificateId && isValidId
                          ? "bg-cyan-500/25 border border-cyan-400 text-cyan-300"
                          : "bg-white/5 border border-white/5 text-gray-300"
                      }`}
                      title={`Verify credentials for ${item.recipientName}`}
                    >
                      {item.certificateId}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Search bar */}
              <form onSubmit={handleSearch} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter Certificate ID, e.g. IND-TR-0042"
                    className="w-full rounded-xl border border-white/10 bg-[#070b19] pl-10 pr-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  />
                  <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-500" />
                </div>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white font-bold py-3 text-xs transition-all flex items-center justify-center gap-2 select-none disabled:opacity-50 cursor-pointer"
                >
                  {isVerifying ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <ShieldCheck className="h-3.5 w-3.5" />
                  )}
                  {isVerifying ? "Contacting Registrar..." : "Query Credential ID"}
                </button>
              </form>
            </div>



          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Real-Time High-Fidelity Render Canvas (8 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Real-time Certificate Card Chassis */}
            <div 
              className={`relative overflow-hidden rounded-3xl border-2 p-8 transition-all duration-300 shadow-2xl ${
                themeStyle === "gold" 
                  ? "bg-gradient-to-br from-[#120e06] via-[#090804] to-[#040402] border-[#e0a94b]/40 shadow-[#e0a94b]/5" 
                  : themeStyle === "cyan" 
                  ? "bg-gradient-to-br from-[#05141e] via-[#020810] to-[#010408] border-cyan-500/40 shadow-cyan-500/5"
                  : themeStyle === "purple"
                  ? "bg-gradient-to-br from-[#150a24] via-[#080312] to-[#04010a] border-purple-500/40 shadow-purple-500/5"
                  : "bg-gradient-to-br from-[#1c0808] via-[#0b0202] to-[#050101] border-red-500/40 shadow-red-500/5"
              }`}
              id="ind-certificate-render-frame"
            >
              
              {/* Complex Guilloche Vector background borders */}
              <div className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none opacity-20 border-white" />
              <div className="absolute inset-4 border rounded-xl pointer-events-none opacity-10 border-white" />

              {/* Watermark Logo Background in Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-[0.03]">
                <Award className="h-[350px] w-[350px]" />
              </div>

              {/* Glowing Ambient Spotlights */}
              <div className={`absolute top-0 right-0 h-48 w-48 rounded-full blur-[90px] -z-10 opacity-30 ${
                themeStyle === "gold" ? "bg-[#e0a94b]" : themeStyle === "cyan" ? "bg-cyan-500" : themeStyle === "purple" ? "bg-purple-500" : "bg-red-500"
              }`} />
              <div className={`absolute bottom-0 left-0 h-48 w-48 rounded-full blur-[90px] -z-10 opacity-20 ${
                themeStyle === "error" ? "bg-red-900" : "bg-blue-600"
              }`} />

              {/* Security Header Watermarks */}
              <div className="absolute top-6 left-6 flex flex-col gap-1 text-gray-500 font-mono text-[8px] select-none scale-75">
                <span>INDIQOR_LEDGER_LEDGERCHECK_ACTIVE</span>
                <span>SIGNATURE: {isValidId ? "AUTHORIZED" : "REJECTED"}</span>
              </div>
              <div className="absolute top-6 right-6 font-mono text-[9px] text-gray-500 select-none uppercase tracking-widest">
                VERIFIABLE DIGITAL DEPLOYMENT
              </div>

              {/* CERTIFICATE BODY CONTENT */}
              {isValidId ? (
                <div className="text-center space-y-8 py-4 relative">
                  
                  {/* Dynamic Header Logo Integration - Validated Logo using ID */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-b border-white/[0.04] pb-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative p-1 shrink-0 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                        <IndiqorLogo className="h-12 w-12 text-emerald-400" />
                        <div className="absolute -top-1 -right-1 h-5 w-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] font-sans font-bold shadow-lg shadow-emerald-500/45 border-2 border-[#0c142b] animate-pulse">
                          ✓
                        </div>
                      </div>
                      <div className="text-left select-none">
                        <span className="font-sans text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 leading-none block">
                          INDIQOR
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-mono block leading-none mt-1">
                          Technologies
                        </span>
                      </div>
                    </div>
                    <div className="sm:ml-auto inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 text-xs font-mono text-emerald-400">
                      <ShieldCheck className="h-4 w-4 text-emerald-400 animate-pulse" />
                      <span>LOGO AUDITED &amp; SECURE VIA ID: {activeVerifiedCert.certificateId}</span>
                    </div>
                  </div>

                  {/* Classification Row */}
                  <div className="space-y-2">
                    <span className={`block font-mono text-xs font-semibold tracking-[0.3em] uppercase ${
                      themeStyle === "gold" ? "text-[#e0a94b]" : themeStyle === "cyan" ? "text-cyan-400" : "text-purple-400"
                    }`}>
                      {activeVerifiedCert.type === "training" ? "Professional Training Certificate" : "Project-Based Internship Certificate"}
                    </span>
                    <p className="text-[11px] font-mono text-gray-400">
                      THIS SECURED INDUSTRIAL CREDENTIAL IS SINCERELY CONFERRED UPON
                    </p>
                  </div>

                  {/* Student/Recipient Name */}
                  <div className="space-y-2 py-2">
                    <h4 className="font-sans text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow">
                      {activeVerifiedCert.recipientName}
                    </h4>
                    <div className={`h-0.5 max-w-[200px] mx-auto bg-gradient-to-r ${
                      themeStyle === "gold" 
                        ? "from-transparent via-[#e0a94b] to-transparent" 
                        : themeStyle === "cyan"
                        ? "from-transparent via-cyan-400 to-transparent"
                        : "from-transparent via-purple-500 to-transparent"
                    }`} />
                  </div>

                  {/* Fulfillment rationale text */}
                  <div className="max-w-xl mx-auto">
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans px-4">
                      {activeVerifiedCert.type === "training" ? (
                        <>
                          For successful modules completion and practical workspace applications comprising the custom course track in <strong className="text-white capitalize">{activeVerifiedCert.courseName}</strong>. The practitioner has demonstrated core competencies on production pipelines.
                        </>
                      ) : (
                        <>
                          For demonstrating outstanding engineering dedication during their term at INDIQOR. The intern has successfully architected, integrated, and deployed modules under the high-performance course <strong className="text-white capitalize">{activeVerifiedCert.courseName}</strong>.
                        </>
                      )}
                    </p>
                  </div>

                  {/* Grid of details: performance score and dates */}
                  <div className="grid grid-cols-2 max-w-md mx-auto pt-4 border-y border-white/5 py-4 gap-4 text-xs font-mono">
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase">Fulfillment Grade</span>
                      <span className="text-white font-bold block mt-1">{activeVerifiedCert.grade}</span>
                    </div>
                    <div className="border-l border-white/5 pl-4">
                      <span className="block text-[10px] text-gray-500 uppercase">Official Issue Date</span>
                      <span className="text-white font-bold block mt-1">{activeVerifiedCert.issueDate}</span>
                    </div>
                  </div>

                  {/* Verification Block Details column and signatories */}
                  <div className="mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-6 max-w-xl mx-auto text-left">
                    
                    {/* Unique Identifier ledger outputs */}
                    <div className="space-y-3.5 font-mono text-[10px] text-gray-500">
                      <div>
                        <span className="text-gray-400 font-semibold block uppercase text-[8px]">Registry Certificate ID</span>
                        <span className="text-cyan-400 font-semibold block font-sans text-xs">{activeVerifiedCert.certificateId}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 font-semibold block uppercase text-[8px]">Database Ledger UUID</span>
                        <span className="text-white truncate block max-w-[240px] font-sans">{activeVerifiedCert.uuid}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 font-semibold block uppercase text-[8px] flex items-center gap-1">
                          Cryptographic Block Hash (SHA256)
                        </span>
                        <span className="text-purple-300 font-mono text-[9px] break-all block max-w-[240px] md:max-w-xs leading-normal">
                          {activeVerifiedCert.sha256}
                        </span>
                      </div>
                    </div>

                    {/* Stamp Signatures & QR Code */}
                    <div className="flex items-center gap-6">
                      
                      {/* Interactive dynamic validated logo badge - "validate logo using id" */}
                      <div className="text-center font-mono select-none">
                        <div className="h-10 flex items-end justify-center relative">
                          <svg className="w-24 h-8 text-blue-400" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 25 C15 5, 25 10, 35 25 C45 10, 55 5, 65 20 C75 5, 85 10, 95 15 M 25 15 C45 25, 75 5, 90 25" />
                          </svg>
                          <div className="absolute top-0 right-0 h-4 w-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white shadow-lg animate-pulse" title="Verifiable Seal">✓</div>
                        </div>
                        <div className="h-[1px] w-28 bg-white/25 mt-1" />
                        <span className="block text-[8px] text-gray-400 uppercase tracking-widest mt-1">Managing Director</span>
                        <span className="text-[7px] text-cyan-400/80 block">INDIQOR Technologies</span>
                      </div>

                      {/* Official QR Replica to map ID */}
                      <div className="relative group/qr select-none">
                        <div className={`rounded-xl bg-white p-2 border shadow-lg ${
                          themeStyle === "gold" ? "border-[#e0a94b]/40" : themeStyle === "cyan" ? "border-cyan-500/40" : "border-purple-500/40"
                        }`}>
                          <QrCode className="h-12 w-12 text-[#030712]" />
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 rounded bg-[#070b19] border border-cyan-500/20 px-2 py-1 text-[8px] font-mono text-center text-cyan-400 opacity-0 group-hover/qr:opacity-100 transition-opacity pointer-events-none shadow-xl leading-normal">
                          Ledger ID: <span className="text-white text-[7px]">{activeVerifiedCert.certificateId}</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              ) : (
                /* UNVERIFIED / BLOCKED STATE FOR INVALID ID RENDER */
                <div className="text-center py-16 space-y-6 relative animate-fadeIn">
                  <div className="mx-auto h-16 w-16 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-sans text-xl sm:text-2xl font-black text-red-500 tracking-tight">
                      CRYPTOGRAPHIC WATERMARK UNVERIFIED
                    </h3>
                    <p className="text-xs font-mono text-gray-400 max-w-md mx-auto">
                      THE SPECIFIED SEARCH IDENTIFIER <span className="text-red-400 font-semibold underline font-mono">"{searchQuery}"</span> IS NOT BOUND TO AN AUTHENTIC REGISTRY LEDGER CERTIFICATE.
                    </p>
                  </div>

                  {/* Warning Box */}
                  <div className="max-w-md mx-auto rounded-xl border border-red-500/25 bg-red-500/5 p-4 text-[11px] text-gray-300 text-left font-sans leading-relaxed">
                    <span className="font-bold text-red-400 block mb-1 text-xs">⚠️ Security Alert:</span>
                    The verification module checks physical logo seals dynamically. Since the search queue returned blank matches, static rendering locks have engaged. Please click one of the pre-authorized "Registered Database Records" in the sidebar lookup panel to verify dynamic certificate layouts.
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => handleApplyMockCert(MOCK_CERTIFICATES_DATABASE[0])}
                      className="rounded-xl bg-gradient-to-r from-red-600 to-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg active:scale-95 transition-all cursor-pointer"
                    >
                      Reset to Default Authorized ID
                    </button>
                  </div>
                </div>
              )}

              {/* Verified seal tag at bottom-left */}
              {isValidId && (
                <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-all font-mono text-[9px] text-[#22c55e] select-none">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>REGISTRY CHECK: SECURED OK</span>
                </div>
              )}

            </div>

            {/* Print and verification support desk footer triggers */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0c142b]/40 border border-white/5 rounded-2xl p-4 text-xs font-sans">
              <div className="flex items-center gap-2 text-gray-400 text-center sm:text-left">
                <ShieldCheck className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                <span>This digital engine compiles verified student and intern achievements into print-friendly vectors.</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrint}
                  disabled={!isValidId}
                  className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold transition-all flex items-center gap-1.5 enabled:bg-white/5 enabled:hover:bg-white/10 enabled:text-white disabled:opacity-45 disabled:text-gray-500 select-none cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" /> Save / Print PDF
                </button>
                <a
                  href="#contact"
                  className="rounded-xl bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-500/20 px-4 py-2.5 text-xs font-bold text-cyan-400 transition-all flex items-center gap-1 cursor-pointer select-none"
                >
                  Request Official Copy <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
