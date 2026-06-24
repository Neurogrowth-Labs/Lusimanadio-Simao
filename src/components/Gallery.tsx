import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Layers, X, Cpu, Trash2, Shield, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'AI & Software' | 'Climate & Sustainability' | 'Trade & Logistics'>('All');

  const categories: ('All' | 'AI & Software' | 'Climate & Sustainability' | 'Trade & Logistics')[] = [
    'All',
    'AI & Software',
    'Climate & Sustainability',
    'Trade & Logistics',
  ];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(proj => proj.category === filter);

  // Procedural SVGs representing the technical schema of each project
  const renderProjectArtwork = (seed: string) => {
    switch (seed) {
      case 'ai_studio':
        return (
          <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="35" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="20" strokeWidth="1" />
            <path d="M15 50h70M50 15v70" strokeWidth="0.5" />
            <circle cx="50" cy="15" r="3" fill="currentColor" />
            <circle cx="50" cy="85" r="3" fill="currentColor" />
            <circle cx="15" cy="50" r="3" fill="currentColor" />
            <circle cx="85" cy="50" r="3" fill="currentColor" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <path d="M25 25l50 50M25 75l50-50" strokeWidth="0.5" strokeDasharray="1 1" />
          </svg>
        );
      case 'waste_data':
        return (
          <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="25" y="25" width="50" height="50" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="15" strokeWidth="0.75" />
            <path d="M50 10v30M50 60v30M10 50h30M60 50h30" strokeWidth="0.5" />
            <path d="M30 30h40v40H30z" strokeWidth="0.5" />
            <circle cx="50" cy="10" r="2" fill="currentColor" />
            <circle cx="50" cy="90" r="2" fill="currentColor" />
            <circle cx="10" cy="50" r="2" fill="currentColor" />
            <circle cx="90" cy="50" r="2" fill="currentColor" />
          </svg>
        );
      case 'trade_os':
        return (
          <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M10 20h80v60H10z" strokeWidth="1" />
            <path d="M10 50h80M35 20v60M65 20v60" strokeWidth="0.5" />
            <circle cx="35" cy="35" r="4" fill="currentColor" />
            <circle cx="65" cy="65" r="4" fill="currentColor" />
            <path d="M35 35l30 30" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="8" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        );
      case 'neuro_growth':
        return (
          <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
            <path d="M50 10c22 0 40 18 40 40S72 90 50 90 10 72 10 50s18-40 40-40" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            <line x1="50" y1="50" x2="20" y2="30" strokeWidth="0.75" />
            <line x1="50" y1="50" x2="80" y2="30" strokeWidth="0.75" />
            <line x1="50" y1="50" x2="30" y2="75" strokeWidth="0.75" />
            <line x1="50" y1="50" x2="70" y2="75" strokeWidth="0.75" />
            <circle cx="20" cy="30" r="3" fill="currentColor" />
            <circle cx="80" cy="30" r="3" fill="currentColor" />
            <circle cx="30" cy="75" r="3" fill="currentColor" />
            <circle cx="70" cy="75" r="3" fill="currentColor" />
          </svg>
        );
      case 'rescue_bot':
        return (
          <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="30" strokeWidth="1" />
            <circle cx="50" cy="50" r="42" strokeWidth="0.5" strokeDasharray="4 2" />
            <path d="M50 20v60M20 50h60" strokeWidth="1" />
            <rect x="42" y="42" width="16" height="16" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="technologies" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              ENGINEERED ECOSYSTEMS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              TECHNOLOGY GALLERY
            </h2>
          </div>
          
          {/* Custom Black & White Filter Controls */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 max-w-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                  filter === cat
                    ? 'bg-white text-black font-semibold'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat === 'All' ? 'All Systems' : cat.split(' & ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-900 border border-neutral-900 hover:border-neutral-800 flex flex-col justify-between h-96 p-8 relative group overflow-hidden cursor-pointer transition-all duration-500"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Top Metas */}
                <div className="flex justify-between items-start relative z-10">
                  <span className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600 border border-neutral-800 px-2 py-0.5 uppercase tracking-widest bg-neutral-950/80">
                    Active Suite
                  </span>
                </div>

                {/* Typography Block */}
                <div className="space-y-4 relative z-10 mt-auto">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white tracking-tight leading-none group-hover:text-neutral-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mt-1.5">
                      {proj.subtitle}
                    </p>
                  </div>
                  
                  <p className="font-sans text-neutral-400 text-xs leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Trigger Link */}
                  <div className="flex items-center space-x-2 pt-2 text-white group-hover:text-neutral-400 transition-colors">
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                      Inspect Architecture
                    </span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Immersive Detail Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Modal Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-neutral-950 border border-neutral-800 w-full max-w-3xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl p-6 md:p-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all focus:outline-none"
                  aria-label="Close details"
                >
                  <X size={16} />
                </button>

                {/* Modal Header */}
                <div className="border-b border-neutral-900 pb-6 mb-8 pr-12">
                  <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                    SYSTEM SPECIFICATION // {selectedProject.category}
                  </span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Specs Split Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Left Specs Column */}
                  <div className="space-y-6">
                    {/* Problem Block */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase flex items-center space-x-2">
                        <HelpCircle size={12} />
                        <span>The Operational Bottleneck</span>
                      </h4>
                      <p className="font-sans text-neutral-300 text-xs leading-relaxed">
                        {selectedProject.details.problem}
                      </p>
                    </div>

                    {/* Solution Block */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase flex items-center space-x-2">
                        <Cpu size={12} />
                        <span>Engineered Solution</span>
                      </h4>
                      <p className="font-sans text-neutral-300 text-xs leading-relaxed">
                        {selectedProject.details.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Specs Column */}
                  <div className="space-y-6">
                    {/* Impact Block */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase flex items-center space-x-2">
                        <TrendingUp size={12} />
                        <span>Measured Impact Metrics</span>
                      </h4>
                      <div className="p-4 bg-neutral-900/60 border border-neutral-900 font-sans text-xs text-neutral-300 leading-relaxed italic">
                        "{selectedProject.details.impact}"
                      </div>
                    </div>

                    {/* Tech Stack List */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                        Integration Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {selectedProject.details.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 font-mono text-[9px] bg-neutral-900 border border-neutral-850 text-white uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Controls */}
                <div className="pt-6 border-t border-neutral-900 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 bg-white text-black font-mono text-[11px] tracking-wider uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 border border-white"
                  >
                    Acknowledge Specification
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
