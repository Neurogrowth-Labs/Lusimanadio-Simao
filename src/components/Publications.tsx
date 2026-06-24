import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileText, Bookmark, Library, Search, Mic } from 'lucide-react';
import { PUBLICATIONS } from '../data';

export default function Publications() {
  const [activeTab, setActiveTab] = useState<'All' | 'book' | 'academic' | 'engagement'>('All');

  const filteredPubs = activeTab === 'All'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(pub => pub.type === activeTab);

  return (
    <section id="publications" className="py-24 bg-neutral-900/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              LITERATURE & KNOWLEDGE TRANSFERS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              PUBLICATIONS & BOOKS
            </h2>
          </div>

          {/* Type Toggle Tabs */}
          <div className="flex space-x-2 mt-6 md:mt-0">
            <button
              onClick={() => setActiveTab('All')}
              className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'All'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white'
              }`}
            >
              All Literatures
            </button>
            <button
              onClick={() => setActiveTab('book')}
              className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'book'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white'
              }`}
            >
              Books
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'academic'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white'
              }`}
            >
              Academic Papers
            </button>
            <button
              onClick={() => setActiveTab('engagement')}
              className={`px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'engagement'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white'
              }`}
            >
              Engagements
            </button>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPubs.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 flex items-start space-x-6 group transition-all duration-300"
            >
              {/* Type Icon Indicator */}
              <div className="shrink-0 p-3 bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:border-neutral-700 transition-colors">
                {pub.type === 'book' ? (
                  <BookOpen size={20} />
                ) : pub.type === 'engagement' ? (
                  <Mic size={20} />
                ) : (
                  <FileText size={20} />
                )}
              </div>

              {/* Publication Context */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
                    {pub.year} // {pub.type === 'book' ? 'BOOK VOLUME' : pub.type === 'engagement' ? 'SPEAKING ENGAGEMENT' : 'ACADEMIC JOURNAL'}
                  </span>
                  <Bookmark size={12} className="text-neutral-600 group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-neutral-300 transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  <p className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase">
                    {pub.publisher}
                  </p>
                </div>

                <p className="font-sans text-neutral-400 text-xs leading-relaxed">
                  {pub.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Summary Badge */}
        <div className="mt-12 p-6 bg-neutral-950/60 border border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/5 border border-white/10 text-white">
              <Library size={20} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase">
                COMPLETE ACADEMIC OUTPUT
              </h4>
              <p className="font-sans text-xs text-neutral-400">
                Over 3 published books, 3 international academic papers, and over 20 national publications.
              </p>
            </div>
          </div>
          
          <div className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase border border-neutral-900 px-4 py-2 bg-neutral-950">
            PORTFOLIO CLASSIFIED // LEVEL I APPROVED
          </div>
        </div>

      </div>
    </section>
  );
}
