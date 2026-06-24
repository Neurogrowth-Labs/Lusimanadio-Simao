import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Award, Globe, ShieldCheck, QrCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenQr: () => void;
}

export default function Hero({ onOpenQr }: HeroProps) {
  const stats = [
    { value: '05', label: 'Technologies Architected' },
    { value: '23+', label: 'Publications & Books' },
    { value: '08', label: 'Executive Credentials' },
    { value: '03+', label: 'Impact Platforms Founded' },
  ];

  return (
    <section
      id="identity"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-neutral-950"
    >
      {/* Background Decorative Grid - Low Contrast */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

          {/* Title with outstanding typography */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-7xl xl:text-8xl tracking-tight text-white leading-[0.95]"
            >
              LUSIMADIO<br />
              <span className="text-neutral-500">SOKI SIMAO</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-xs md:text-sm tracking-wider text-neutral-400 uppercase max-w-xl"
            >
              Founder & CEO • Strategic Growth & AI Leader • Sustainability & Trade Advocate
            </motion.p>
          </div>

          {/* Bio statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl"
          >
            {PERSONAL_INFO.bioBrief} A catalyst for inclusive economic growth and digital transformation across the African continent.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#technologies"
              className="px-6 py-3.5 bg-white text-black font-mono text-xs tracking-wider uppercase border border-white hover:bg-neutral-950 hover:text-white transition-all duration-300"
            >
              View Technologies
            </a>
            <a
              href="#history"
              className="px-6 py-3.5 bg-transparent text-white font-mono text-xs tracking-wider uppercase border border-neutral-800 hover:border-white transition-all duration-300"
            >
              Executive Bio
            </a>
            <button
              onClick={onOpenQr}
              className="px-6 py-3.5 bg-transparent text-neutral-400 font-mono text-xs tracking-wider uppercase border border-neutral-800 hover:text-white hover:border-white transition-all duration-300 flex items-center space-x-2"
            >
              <QrCode size={13} />
              <span>Digital Card</span>
            </button>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-neutral-900"
          >
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-display font-bold text-3xl md:text-4xl text-white">
                  {stat.value}
                </div>
                <div className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase leading-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm aspect-[3/4] group"
          >
            {/* Top-left corner decorative bracket */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-white pointer-events-none z-20" />
            {/* Bottom-right corner decorative bracket */}
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-white pointer-events-none z-20" />

            {/* Solid background offset frame */}
            <div className="absolute inset-0 border border-neutral-800 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out" />

            {/* Main Portrait Wrapper */}
            <div className="absolute inset-0 overflow-hidden bg-neutral-900 border border-neutral-800">
              <img
                src={PERSONAL_INFO.portraitPath}
                alt="Mr. Lusimadio Soki Simao"
                className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlap Info Badge (Hover reveal) */}
            <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 border border-neutral-900 p-4 backdrop-blur-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    Mr Lusimanadio Soki Simao, MBA
                  </h4>
                  <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                    Global Speaker - Academic - Serial Entrepreneur
                  </p>
                </div>
                <Award size={18} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
