import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { ENDORSEMENTS } from '../data';

export default function Endorsements() {
  return (
    <section id="endorsements" className="py-24 bg-neutral-900/10 relative border-t border-neutral-900">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              EXECUTIVE SANCTION
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              PROFESSIONAL ENDORSEMENTS
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Direct feedback from global policy directors, technology investment funds, and sustainability leaders.
          </p>
        </div>

        {/* Endorsements Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ENDORSEMENTS.map((endorsement, index) => (
            <motion.div
              key={endorsement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-10 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Large Background Quote Sign */}
              <div className="absolute top-4 right-4 text-white/[0.02] transform translate-x-4 -translate-y-4 pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">
                <Quote size={120} />
              </div>

              {/* Quote Mark Icon */}
              <div className="mb-6 text-neutral-500 group-hover:text-white transition-colors duration-300">
                <Quote size={24} className="transform rotate-180" />
              </div>

              {/* Quote Content */}
              <div className="space-y-6 relative z-10">
                <p className="font-sans text-neutral-200 text-sm md:text-base leading-relaxed italic">
                  "{endorsement.quote}"
                </p>

                {/* Star rating for executive polish */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-white text-white" />
                  ))}
                </div>
              </div>

              {/* Author & Designation Block */}
              <div className="mt-8 pt-6 border-t border-neutral-900/80 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-sm text-white tracking-wide">
                    {endorsement.author}
                  </h4>
                  <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest mt-0.5">
                    {endorsement.role}
                  </p>
                </div>
                
                <span className="px-3 py-1 font-mono text-[8px] bg-neutral-900 border border-neutral-850 text-neutral-300 uppercase tracking-wider self-start sm:self-center">
                  {endorsement.organization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
