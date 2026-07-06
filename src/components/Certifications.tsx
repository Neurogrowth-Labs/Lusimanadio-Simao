import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, FileCheck, Search, X, ChevronRight } from 'lucide-react';
import { CREDENTIALS } from '../data';
import { Credential } from '../types';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<'all' | 'degree' | 'certification' | 'training'>('all');
  const [selectedCred, setSelectedCred] = useState<Credential | null>(null);

  const tabs = [
    { key: 'all', label: 'All Credentials' },
    { key: 'degree', label: 'Degrees' },
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
            A visual register of verified academic degrees, professional board certifications, and specialist credentials issued by premier global institutions.
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
                className="group relative bg-neutral-950 border border-neutral-900 hover:border-neutral-800 cursor-pointer transition-all duration-500 overflow-hidden aspect-[4/3]"
              >
                {/* Visual Certificate Frame container */}
                <div className="w-full h-full relative bg-neutral-900 flex items-center justify-center">
                  
                  {/* Subtle paper textures or mock lines for certificate */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/20 z-10 pointer-events-none" />
                  
                  {/* Real image if available, fallback beautifully */}
                  {cred.image ? (
                    <img
                      src={cred.image}
                      alt={cred.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center space-y-2 p-4">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Search size={16} />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-neutral-300 uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Inspect Credential
                    </span>
                    <p className="font-display font-bold text-[10px] text-white text-center tracking-wide uppercase line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-xs">
                      {cred.name}
                    </p>
                  </div>

                  {/* Top-right floating type badge */}
                  <div className="absolute top-3 right-3 z-30">
                    <span className="px-2 py-0.5 font-mono text-[8px] bg-neutral-950/90 border border-neutral-800 text-neutral-400 uppercase tracking-widest">
                      {cred.type === 'degree' ? 'Degree' : cred.type === 'certification' ? 'Board Cert' : 'Executive Training'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Immersive Credential Modal Overlay */}
        <AnimatePresence>
          {selectedCred && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Modal Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCred(null)}
                className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
              />

              {/* Modal Content Container */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-neutral-950 border border-neutral-850 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCred(null)}
                  className="absolute top-5 right-5 p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all z-20 focus:outline-none"
                  aria-label="Close certificate viewer"
                >
                  <X size={16} />
                </button>

                {/* Left: Interactive Certificate Image Frame */}
                <div className="lg:w-3/5 bg-neutral-900 border border-neutral-850 relative flex items-center justify-center aspect-[4/3] self-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
                  {selectedCred.image ? (
                    <img
                      src={selectedCred.image}
                      alt={selectedCred.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full p-8 flex flex-col justify-between border-8 border-double border-neutral-800 m-4 bg-neutral-950/80 text-center text-white relative">
                      <div className="absolute inset-2 border border-neutral-800/40 pointer-events-none" />
                      <div className="flex justify-center pt-4">
                        <Award size={36} className="text-white animate-pulse" />
                      </div>
                      <div className="space-y-3">
                        <p className="font-display font-bold text-lg text-white uppercase tracking-tight">
                          {selectedCred.name}
                        </p>
                        <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                          {selectedCred.issuer}
                        </p>
                      </div>
                      <div className="pb-4 font-mono text-[9px] text-neutral-500 tracking-widest uppercase">
                        Official Verification Certificate
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Technical Audit Specification Column */}
                <div className="lg:w-2/5 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block mb-1">
                        CREDENTIAL AUDIT VERIFICATION
                      </span>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight leading-tight">
                        {selectedCred.name}
                      </h3>
                      <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mt-2">
                        {selectedCred.issuer}
                      </p>
                    </div>

                    <div className="p-4 bg-neutral-900/40 border border-neutral-900 space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-neutral-500 uppercase tracking-widest text-[9px]">
                          Verification Status
                        </span>
                        <span className="px-2.5 py-0.5 font-mono text-[9px] bg-emerald-950/80 border border-emerald-900 text-emerald-400 uppercase tracking-widest font-semibold flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                          <span>Verified</span>
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs pt-3 border-t border-neutral-900/85">
                        <span className="font-mono text-neutral-500 uppercase tracking-widest text-[9px]">
                          Registration ID
                        </span>
                        <span className="font-mono text-white text-[10px] tracking-wider uppercase">
                          {selectedCred.id.toUpperCase()}-NGL-2026
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs pt-3 border-t border-neutral-900/85">
                        <span className="font-mono text-neutral-500 uppercase tracking-widest text-[9px]">
                          Classification
                        </span>
                        <span className="font-mono text-white text-[10px] uppercase tracking-wider">
                          {selectedCred.type === 'degree' ? 'Academic Degree' : selectedCred.type === 'certification' ? 'Board Certification' : 'Executive Training'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
                        EXECUTIVE RECOGNITION NOTE
                      </h4>
                      <p className="font-sans text-neutral-400 text-xs leading-relaxed">
                        This credential is legally registered under the administrative framework of <strong>{selectedCred.issuer}</strong>. For third-party corporate governance audits, sovereign investment checks, or institutional inquiries, please contact our strategic operations office directly via the dispatch form.
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setSelectedCred(null)}
                      className="w-full py-2.5 bg-neutral-900 text-white font-mono text-[11px] tracking-wider uppercase hover:bg-neutral-800 transition-all duration-300 border border-neutral-800"
                    >
                      Dismiss Viewer
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setSelectedCred(null)}
                      className="w-full py-2.5 bg-white text-black font-mono text-[11px] tracking-wider uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 border border-white block text-center"
                    >
                      Verify Document
                    </a>
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
