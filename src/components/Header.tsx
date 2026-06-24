import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Identity', href: '#identity' },
    { name: 'Focus & History', href: '#history' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Publications', href: '#publications' },
    { name: 'Endorsements', href: '#endorsements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/90 border-b border-neutral-900/60 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - Powerful & Spiritual Executive Emblem */}
        <a
          href="#identity"
          className="group flex items-center space-x-3 focus:outline-none"
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-transparent border border-neutral-800 group-hover:border-white transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 to-neutral-950 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <svg
              viewBox="0 0 100 100"
              className="w-4.5 h-4.5 text-white group-hover:scale-110 transition-transform duration-500 relative z-10"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="50" cy="50" r="45" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-40" />
              <polygon points="50,15 80,50 50,85 20,50" strokeWidth="2" />
              <line x1="50" y1="15" x2="50" y2="85" strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />
              <line x1="20" y1="50" x2="80" y2="50" strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />
              <polygon points="50,30 68,50 50,70 32,50" fill="currentColor" className="opacity-15 group-hover:opacity-30 transition-opacity" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs tracking-[0.25em] text-white group-hover:text-neutral-300 transition-colors duration-300 uppercase leading-none">
              S I M A O
            </span>
            <span className="font-mono text-[7px] tracking-[0.3em] text-neutral-500 uppercase mt-0.5 leading-none">
              SOVEREIGN LEADER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 py-1 uppercase group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="flex items-center space-x-1.5 font-mono text-xs tracking-wider border border-white text-black bg-white hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 uppercase"
          >
            <span>Inquire</span>
            <ArrowUpRight size={12} />
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-all duration-300 focus:outline-none flex items-center justify-center bg-transparent"
            aria-label="Toggle Theme Mode"
            title="Toggle Light/Dark Mode"
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </nav>

        {/* Mobile controls & Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 border border-neutral-800 text-neutral-400 hover:text-white transition-all duration-300 focus:outline-none flex items-center justify-center bg-transparent"
            aria-label="Toggle Theme Mode"
            title="Toggle Light/Dark Mode"
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1 hover:text-neutral-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-neutral-950/98 backdrop-blur-lg flex flex-col justify-between p-8 border-t border-neutral-900 z-40 md:hidden"
          >
            <nav className="flex flex-col space-y-8 mt-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="font-display font-medium text-3xl tracking-tight text-neutral-400 hover:text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-t border-neutral-900 pt-8 pb-12 flex flex-col space-y-4"
            >
              <div className="font-mono text-xs text-neutral-500 tracking-wider">
                DIRECT CHANNELS
              </div>
              <a
                href="mailto:simao@thevoiceofwellness.co.za"
                className="font-mono text-sm text-neutral-300 hover:text-white transition-colors"
              >
                simao@thevoiceofwellness.co.za
              </a>
              <a
                href="tel:+27676171261"
                className="font-mono text-sm text-neutral-300 hover:text-white transition-colors"
              >
                +27 67 617 1261
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
