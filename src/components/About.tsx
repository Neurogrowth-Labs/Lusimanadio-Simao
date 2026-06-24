import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Award, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2, Languages } from 'lucide-react';
import { EXPERIENCE, CREDENTIALS, PERSONAL_INFO, LANGUAGES } from '../data';
import { Experience } from '../types';

export default function About() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI' | 'Sustainability' | 'Trade' | 'Leadership'>('All');

  const categories: { key: 'All' | 'AI' | 'Sustainability' | 'Trade' | 'Leadership'; label: string }[] = [
    { key: 'All', label: 'All Fields' },
    { key: 'AI', label: 'AI & Analytics' },
    { key: 'Sustainability', label: 'Sustainability & Green Infra' },
    { key: 'Trade', label: 'Continental Trade' },
    { key: 'Leadership', label: 'Ventures & Media' },
  ];

  const filteredExperience = activeCategory === 'All'
    ? EXPERIENCE
    : EXPERIENCE.filter(exp => exp.category === activeCategory);

  return (
    <section id="history" className="py-24 bg-neutral-900/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              VISION & ARCHITECTURE
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              EXECUTIVE PATHWAY
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Unifying digital ecosystems, trade systems, and green frameworks to establish future-ready African enterprises.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Biography & Credentials Grid */}
          <div className="lg:col-span-6 space-y-12">
            
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl text-white tracking-wide">
                A Mission of Trans-Continental Impact
              </h3>
              <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                {PERSONAL_INFO.bioFull}
              </p>
              <div className="bg-neutral-950 p-6 border border-neutral-900">
                <div className="flex items-start space-x-4">
                  <Award className="text-white mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">
                      Distinguished Honors
                    </h4>
                    {PERSONAL_INFO.awards.map((award, index) => (
                      <p key={index} className="font-sans text-xs text-neutral-400 leading-normal">
                        {award}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Section */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold text-lg text-white tracking-wider flex items-center space-x-2">
                  <GraduationCap size={18} />
                  <span>CREDENTIALS & COMPLIANCE</span>
                </h3>
                <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-1">
                  Verified Executive Frameworks
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CREDENTIALS.map((cred) => (
                  <div
                    key={cred.id}
                    className="p-4 bg-neutral-950 border border-neutral-900 flex items-start space-x-3 hover:border-neutral-700 transition-colors duration-300"
                  >
                    <CheckCircle2 size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-sans font-medium text-xs text-white leading-snug">
                        {cred.name}
                      </h4>
                      <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider mt-1">
                        {cred.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-6 pt-6 border-t border-neutral-900/60">
              <div>
                <h3 className="font-display font-semibold text-lg text-white tracking-wider flex items-center space-x-2">
                  <Languages size={18} />
                  <span>LANGUAGES & FLUENCY</span>
                </h3>
                <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-1">
                  Multilingual Diplomacy & Governance
                </p>
              </div>

              <div className="space-y-5">
                {LANGUAGES.map((lang) => (
                  <div key={lang.id} className="space-y-2">
                    <div className="flex items-baseline justify-between text-xs">
                      <span className="font-display font-bold text-white tracking-wide">{lang.name}</span>
                      <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">{lang.fluency}</span>
                    </div>
                    {/* Minimalist Progress Track */}
                    <div className="h-[3px] bg-neutral-950 w-full overflow-hidden border border-neutral-900/40">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-white"
                      />
                    </div>
                    <p className="font-sans text-neutral-400 text-[11px] leading-relaxed">
                      {lang.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Professional Experience Timeline */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-white tracking-wider flex items-center space-x-2">
                <Briefcase size={18} />
                <span>LEADERSHIP APPOINTMENTS</span>
              </h3>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 pt-2 pb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                      activeCategory === cat.key
                        ? 'bg-white text-black font-semibold'
                        : 'bg-neutral-950 text-neutral-400 border border-neutral-900 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience List */}
            <div className="space-y-6 relative border-l border-neutral-800 pl-6 ml-2">
              <AnimatePresence mode="popLayout">
                {filteredExperience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="relative group pb-4"
                  >
                    {/* Timeline Node Bullet */}
                    <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-neutral-600 border border-neutral-950 group-hover:bg-white group-hover:scale-125 transition-all duration-300" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-mono text-[10px] tracking-widest text-neutral-500">
                          {exp.duration}
                        </span>
                        <span className="px-2 py-0.5 font-mono text-[8px] bg-neutral-950 border border-neutral-800 text-neutral-400 uppercase tracking-widest">
                          {exp.category}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-display font-bold text-base text-white group-hover:text-neutral-300 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="font-mono text-xs text-neutral-400 tracking-wide uppercase mt-0.5">
                          {exp.organization}
                        </p>
                      </div>

                      <p className="font-sans text-neutral-300 text-xs leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5 pt-2">
                        {exp.bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx} className="flex items-start text-neutral-400 text-xs leading-relaxed">
                            <span className="mr-2 text-white shrink-0 font-mono select-none">•</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
