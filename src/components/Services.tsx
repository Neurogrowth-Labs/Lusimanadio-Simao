import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Globe, Navigation, Users, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

const iconMap: Record<string, React.ComponentType<any>> = {
  Cpu: Cpu,
  Globe: Globe,
  Navigation: Navigation,
  Users: Users,
  Smartphone: Smartphone
};

export default function Services() {
  const [activeAudience, setActiveAudience] = useState<'all' | 'C-Suite' | 'Sovereign & Govt' | 'Mid-Career' | 'Youth & Women'>('all');

  const audiences = [
    { key: 'all', label: 'All Targets' },
    { key: 'C-Suite', label: 'C-Suite & Boards' },
    { key: 'Sovereign & Govt', label: 'Sovereign & State' },
    { key: 'Mid-Career', label: 'Mid-Career Growth' },
    { key: 'Youth & Women', label: 'Youth & Women' },
  ] as const;

  const filteredServices = activeAudience === 'all'
    ? SERVICES
    : SERVICES.filter(srv => srv.targetAudience === activeAudience);

  return (
    <section id="services" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/10 to-neutral-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              EXECUTIVE & SOCIO-ECONOMIC INTERVENTIONS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              PROFESSIONAL SERVICES
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Delivering high-density systemic solutions that scale corporate automation, green infrastructure finance, trade readiness, and community empowerment frameworks.
          </p>
        </div>

        {/* Audience Segment Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {audiences.map((aud) => (
            <button
              key={aud.key}
              onClick={() => setActiveAudience(aud.key)}
              className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeAudience === aud.key
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-850 hover:text-white hover:border-neutral-700'
              }`}
            >
              {aud.label}
            </button>
          ))}
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Cpu;
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl group-hover:bg-white/[0.03] transition-all duration-500 pointer-events-none" />
                  
                  <div>
                    {/* Service Header: Icon & Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <IconComponent size={20} />
                      </div>
                      <span className="px-3 py-1 font-mono text-[9px] bg-neutral-950 border border-neutral-850 text-neutral-400 uppercase tracking-widest">
                        Target: {service.targetAudience}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-neutral-300 transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="font-sans text-neutral-400 text-xs md:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Sectors Tag List */}
                  <div className="pt-6 border-t border-neutral-900">
                    <span className="font-mono text-[8px] tracking-widest text-neutral-500 uppercase block mb-3">
                      Core Domains & Industries
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.sectors.map((sector, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 font-mono text-[8px] bg-neutral-900 border border-neutral-850/60 text-neutral-400 tracking-wider flex items-center space-x-1"
                        >
                          <span className="w-1 h-1 bg-neutral-500 rounded-full mr-1 shrink-0" />
                          <span>{sector}</span>
                        </span>
                      ))}
                    </div>

                    {/* Contact Button anchor */}
                    <div className="mt-8 flex items-center justify-between text-neutral-500 group-hover:text-white transition-colors">
                      <span className="font-mono text-[9px] tracking-widest uppercase">
                        Request Advisory Engagement
                      </span>
                      <a
                        href="#contact"
                        className="p-1.5 bg-neutral-900 group-hover:bg-white text-neutral-400 group-hover:text-black transition-all duration-500 border border-neutral-850 group-hover:border-white"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
