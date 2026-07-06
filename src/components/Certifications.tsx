import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, X, Calendar, Building, FileCheck, Shield, ExternalLink, RefreshCw } from 'lucide-react';
import { CREDENTIALS } from '../data';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<'all' | 'certification' | 'training'>('all');
  const [selectedCred, setSelectedCred] = useState<typeof CREDENTIALS[0] | null>(null);

  const tabs = [
    { key: 'all', label: 'All Credentials' },
    { key: 'certification', label: 'Board Certifications' },
    { key: 'training', label: 'Executive Training' },
  ] as const;

  const filteredCredentials = activeTab === 'all'
    ? CREDENTIALS
    : CREDENTIALS.filter(cred => cred.type === activeTab);

  return (
    <section id="certifications" className="py-24 bg-neutral-900/10 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              VERIFIED COMPLIANCE & MERIT
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              CERTIFICATIONS & ACCREDITATIONS
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            A visual register of verified professional board certifications, executive training, and specialist credentials issued by premier global institutions. Click any credential to inspect its audit verification.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white hover:border-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCredentials.map((cred) => (
              <motion.div
                layout
                key={cred.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedCred(cred)}
                className="group bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-all duration-500 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Visual Certificate Frame container */}
                <div className="w-full relative bg-neutral-900 flex items-center justify-center aspect-[4/3] border-b border-neutral-900 overflow-hidden">
                  
                  {/* Subtle paper textures or mock lines for certificate */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-transparent to-black/20 z-10 pointer-events-none" />
                  
                  {/* Real image if available, fallback beautifully */}
                  {cred.image ? (
                    <img
                      src={cred.image}
                      alt={cred.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col justify-between border-4 border-double border-neutral-800 m-2 relative bg-neutral-950/40 text-center">
                      <div className="absolute inset-2 border border-neutral-850/40 pointer-events-none" />
                      <div className="flex justify-center pt-2">
                        <Award size={24} className="text-neutral-700" />
                      </div>
                      <div className="space-y-1 my-auto">
                        <p className="font-display font-bold text-[11px] text-neutral-400 tracking-wide line-clamp-2 uppercase">
                          {cred.name}
                        </p>
                        <p className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                          {cred.issuer}
                        </p>
                      </div>
                      <div className="pb-1">
                        <span className="font-mono text-[7px] text-neutral-600 tracking-widest uppercase">
                          OFFICIAL RECOGNITION
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Top-right floating type badge */}
                  <div className="absolute top-3 right-3 z-30">
                    <span className="px-2 py-0.5 font-mono text-[8px] bg-neutral-950/90 border border-neutral-800 text-neutral-400 uppercase tracking-widest">
                      {cred.type === 'certification' ? 'Board Cert' : 'Executive Training'}
                    </span>
                  </div>

                  {/* Hover overlay indicator */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="px-4 py-2 bg-white text-black font-mono text-[10px] tracking-widest uppercase flex items-center space-x-1.5 font-medium">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      <span>Audit Verification</span>
                    </div>
                  </div>
                </div>

                {/* Caption / Information details displayed directly underneath */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-neutral-950">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                        {cred.issuer}
                      </span>
                      {cred.year && (
                        <span className="font-mono text-[10px] text-neutral-400">
                          {cred.year}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-display font-bold text-sm text-white tracking-tight leading-snug line-clamp-2 group-hover:text-neutral-300 transition-colors">
                      {cred.name}
                    </h3>

                    {cred.description && (
                      <p className="font-sans text-neutral-400 text-xs leading-relaxed line-clamp-3">
                        {cred.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-900/80 flex items-center justify-between">
                    <span className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                      REG: {cred.id.toUpperCase()}-NGL-{cred.year || '2026'}
                    </span>
                    <span className="flex items-center text-neutral-500 text-[9px] font-mono uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                      <ShieldCheck size={11} className="text-emerald-500 mr-1" />
                      Inspect
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic High-Tech Credential Audit Verification Modal */}
        <AnimatePresence>
          {selectedCred && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCred(null)}
                className="absolute inset-0 bg-neutral-950/95 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-neutral-950 border border-neutral-800 w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCred(null)}
                  className="absolute top-6 right-6 p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all z-40 focus:outline-none"
                  aria-label="Close verification panel"
                >
                  <X size={16} />
                </button>

                {/* Left Side: Certificate Artwork/Visual Frame */}
                <div className="w-full md:w-1/2 bg-neutral-900/50 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-neutral-900 relative">
                  <div className="absolute top-4 left-4 flex items-center space-x-1.5 font-mono text-[8px] text-neutral-500 tracking-wider">
                    <Shield size={10} className="text-emerald-500" />
                    <span>SECURE VISUAL REGISTER</span>
                  </div>

                  <div className="w-full max-w-sm aspect-[4/3] bg-neutral-950 border border-neutral-800 p-2 shadow-2xl relative group overflow-hidden mt-6 md:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20 pointer-events-none z-10" />
                    {selectedCred.image ? (
                      <img
                        src={selectedCred.image}
                        alt={selectedCred.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full p-4 flex flex-col justify-between border-2 border-dashed border-neutral-800 relative bg-neutral-900 text-center">
                        <div className="flex justify-center pt-2">
                          <Award size={32} className="text-neutral-600" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-display font-bold text-[10px] text-neutral-400 tracking-wide uppercase line-clamp-2">
                            {selectedCred.name}
                          </p>
                          <p className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                            {selectedCred.issuer}
                          </p>
                        </div>
                        <div className="pb-1">
                          <span className="font-mono text-[7px] text-neutral-600 tracking-widest">
                            VERIFICATION ACTIVE
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side: Compliance details */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <span className="px-2 py-0.5 font-mono text-[8px] bg-neutral-900 border border-neutral-850 text-neutral-400 uppercase tracking-widest inline-block mb-3">
                        {selectedCred.type === 'certification' ? 'BOARD CERTIFICATION' : 'EXECUTIVE TRAINING'}
                      </span>
                      <h4 className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
                        CREDENTIAL AUDIT VERIFICATION
                      </h4>
                      <h3 className="font-display font-bold text-2xl text-white tracking-tight mt-1.5 leading-snug">
                        {selectedCred.name}
                      </h3>
                      <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mt-1">
                        Issued by: {selectedCred.issuer}
                      </p>
                    </div>

                    {/* Metadata table */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-neutral-900/60 font-mono text-[10px] text-neutral-400">
                      <div>
                        <span className="text-neutral-600 block text-[8px] tracking-wider uppercase">Audit ID</span>
                        <span className="text-white break-all">{selectedCred.id.toUpperCase()}-NGL-{selectedCred.year || '2026'}</span>
                      </div>
                      <div>
                        <span className="text-neutral-600 block text-[8px] tracking-wider uppercase">Conformance Year</span>
                        <span className="text-white">{selectedCred.year || '2026'}</span>
                      </div>
                      <div>
                        <span className="text-neutral-600 block text-[8px] tracking-wider uppercase">Vetting Authority</span>
                        <span className="text-emerald-500 flex items-center">
                          <ShieldCheck size={11} className="mr-1" />
                          Secure Ledger
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-600 block text-[8px] tracking-wider uppercase">Integrity Status</span>
                        <span className="text-emerald-500 uppercase tracking-widest font-semibold flex items-center">
                          <FileCheck size={11} className="mr-1" />
                          PASS (100%)
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <span className="font-mono text-[8px] text-neutral-600 tracking-widest uppercase block">Credential Scope</span>
                      <p className="font-sans text-neutral-300 text-xs leading-relaxed">
                        {selectedCred.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 mt-8 border-t border-neutral-900/80 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                        Digital Signature Live
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedCred(null)}
                      className="px-4 py-2 bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 border border-white"
                    >
                      Close Audit Log
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
