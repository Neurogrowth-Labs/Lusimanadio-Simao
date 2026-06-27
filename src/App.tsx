/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Publications from './components/Publications';
import Endorsements from './components/Endorsements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalCardModal from './components/DigitalCardModal';
import ExecutiveChat from './components/ExecutiveChat';

export default function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('executive_portfolio_theme');
      return (savedTheme as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.getElementById('portfolio-root');
    if (root) {
      if (theme === 'light') {
        root.classList.add('theme-light');
      } else {
        root.classList.remove('theme-light');
      }
    }
    localStorage.setItem('executive_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-white selection:text-black antialiased transition-colors duration-500">
      {/* Dynamic Navigation with Theme Controls */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Modules */}
      <main className="relative">
        <Hero onOpenQr={() => setIsQrOpen(true)} />
        <About />
        <Gallery />
        <Publications />
        <Endorsements />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />

      {/* Digital Business Card Modal */}
      <DigitalCardModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />

      {/* Floating Chat Advisor Button and Chatbox */}
      <ExecutiveChat />
    </div>
  );
}

