import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Medal, ArrowUpRight, Landmark } from 'lucide-react';
import { NOMINATIONS } from '../data';

export default function Nominations() {
  return (
    <section id="nominations" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/5 to-neutral-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              HISTORIC INDUSTRY APPRECIATION
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              CONTINENTAL RECOGNITIONS
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Record of industry awards, public sector honors, and organization-nominated appreciation in regional and global forums.
          </p>
        </div>

        {/* Nominations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NOMINATIONS.map((nom, idx) => (
            <motion.div
              key={nom.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative top strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-neutral-850 group-hover:bg-neutral-600 transition-colors" />

              <div className="space-y-6">
                
                {/* Year & Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-neutral-500">YEAR</span>
                    <span className="font-mono text-sm text-white font-bold tracking-wider">
                      {nom.year}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-850 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:border-neutral-700 transition-all duration-300">
                    <Award size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>

                {/* Nomination Details */}
                <div className="space-y-3">
                  <span className="font-mono text-[8px] tracking-widest text-neutral-500 uppercase block">
                    {nom.category}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-neutral-300 transition-colors leading-tight">
                    {nom.award}
                  </h3>
                  <div className="flex items-center space-x-2 text-[10px] text-neutral-500">
                    <Landmark size={11} className="shrink-0" />
                    <span className="font-mono uppercase tracking-widest leading-none">
                      {nom.organization}
                    </span>
                  </div>
                </div>

                {/* Citation/Description */}
                <p className="font-sans text-neutral-400 text-xs leading-relaxed pt-2">
                  {nom.description}
                </p>

              </div>

              {/* Status Audit stamp */}
              <div className="mt-8 pt-4 border-t border-neutral-900/60 flex items-center justify-between text-neutral-600 group-hover:text-neutral-500 transition-colors text-[9px] font-mono uppercase tracking-wider">
                <span>AUDITED REGISTER ID: {nom.id.toUpperCase()}</span>
                <span className="font-semibold text-emerald-500 flex items-center space-x-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse mr-1" />
                  <span>OFFICIAL Shortlist</span>
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
