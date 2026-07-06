import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Sparkles, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { SPEAKING_ENGAGEMENTS, PERSONAL_INFO } from '../data';
import { SpeakingEngagement } from '../types';

export default function Speaking() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'AI & Tech' | 'Climate & Sustainability' | 'Trade & Logistics' | 'Leadership'>('all');

  const categories = [
    { key: 'all', label: 'All Topics' },
    { key: 'AI & Tech', label: 'AI & Frontier Tech' },
    { key: 'Climate & Sustainability', label: 'Climate & ESG' },
    { key: 'Trade & Logistics', label: 'Trade & Logistics' },
    { key: 'Leadership', label: 'Leadership & Policy' },
  ] as const;

  const filteredEngagements = activeCategory === 'all'
    ? SPEAKING_ENGAGEMENTS
    : SPEAKING_ENGAGEMENTS.filter(eng => eng.category === activeCategory);

  return (
    <section id="speaking" className="py-24 bg-neutral-900/10 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              KEYNOTES & SUMMITS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              SPEAKING ENGAGEMENTS
            </h2>
          </div>
          <div className="max-w-md mt-4 md:mt-0">
            <p className="font-sans text-neutral-400 text-sm leading-relaxed mb-4">
              Academic contributions, keynotes, and executive panels addressing trade integration, policy automation, and future-forward economic acceleration.
            </p>
            <a
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 font-mono text-[10px] tracking-wider uppercase text-white hover:text-neutral-300 transition-colors"
            >
              <span>Request Keynote Booking</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline List Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredEngagements.map((eng, idx) => (
              <motion.div
                layout
                key={eng.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-neutral-950 border border-neutral-900 hover:border-neutral-800 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 relative overflow-hidden"
              >
                {/* Horizontal progress bar border glow on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-700 group-hover:bg-white transition-colors duration-300" />

                {/* Left Column: Date & Location Info */}
                <div className="md:w-1/4 shrink-0 space-y-2">
                  <div className="flex items-center space-x-2 text-neutral-400 group-hover:text-white transition-colors">
                    <Calendar size={13} className="shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-wider">
                      {eng.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-500">
                    <MapPin size={13} className="shrink-0" />
                    <span className="font-mono text-[9px] uppercase tracking-widest">
                      {eng.location}
                    </span>
                  </div>
                </div>

                {/* Center Column: Title & Specific Topic details */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 font-mono text-[8px] bg-neutral-900 border border-neutral-850 text-neutral-400 uppercase tracking-widest">
                      {eng.category}
                    </span>
                    <span className="px-2 py-0.5 font-mono text-[8px] bg-neutral-950 border border-neutral-900 text-neutral-500 uppercase tracking-widest font-semibold flex items-center">
                      <span className="w-1 h-1 rounded-full bg-neutral-500 animate-pulse mr-1" />
                      <span>{eng.status}</span>
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-neutral-300 transition-colors leading-tight">
                    {eng.title}
                  </h3>
                  <p className="font-sans text-neutral-400 text-xs leading-relaxed max-w-2xl">
                    <strong className="text-neutral-500 font-mono text-[10px] uppercase block mb-1">PROPOSED DISCOURSE / ESSAY:</strong>
                    {eng.topic}
                  </p>
                </div>

                {/* Right Column: Interaction Action Button */}
                <div className="md:w-1/6 flex md:justify-end shrink-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 bg-neutral-900 group-hover:bg-white text-neutral-400 group-hover:text-black transition-all duration-500 border border-neutral-850 group-hover:border-white px-4 py-2 font-mono text-[9px] tracking-wider uppercase"
                  >
                    <span>Attend Seminar</span>
                    <MessageSquareCode size={11} />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
