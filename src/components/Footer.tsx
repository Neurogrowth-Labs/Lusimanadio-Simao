import React from 'react';
import { ArrowUp, Award, Linkedin, Twitter, Github, BookOpen } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/in/lusimadio-soki-simao' },
    { name: 'X / Twitter', icon: <Twitter size={14} />, href: 'https://x.com/soki_simao' },
    { name: 'GitHub', icon: <Github size={14} />, href: 'https://github.com/neurogrowthlabs' },
    { name: 'Scholar', icon: <BookOpen size={14} />, href: '#publications' }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        
        {/* Top Footer Row: Social Links, Subscription Form & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-neutral-900 items-start">
          
          {/* Column 1: Social Channels */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
              GLOBAL CHANNELS & PROFILES
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-900 border border-neutral-850 hover:border-white hover:text-white text-neutral-400 transition-all duration-300 flex items-center justify-center"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Subscription Form */}
          <div className="flex flex-col items-center md:items-start space-y-2.5">
            <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
              SUBSCRIBE TO UPDATES
            </span>
            <form onSubmit={handleSubscribe} className="w-full max-w-sm flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter executive email"
                required
                className="w-full bg-neutral-900 border border-neutral-850 px-3 py-2 text-xs text-white focus:outline-none focus:border-white font-sans transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 border border-white shrink-0"
              >
                {subscribed ? 'Subscribed' : 'Join'}
              </button>
            </form>
            {subscribed && (
              <p className="font-mono text-[9px] text-green-400 uppercase tracking-widest animate-pulse">
                Successfully joined updates ledger.
              </p>
            )}
          </div>

          {/* Column 3: Back to Top */}
          <div className="flex justify-center md:justify-end items-center h-full pt-4 md:pt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-white uppercase group transition-colors focus:outline-none"
            >
              <span>Return To Summit</span>
              <div className="p-1.5 bg-neutral-900 border border-neutral-850 group-hover:border-white transition-colors">
                <ArrowUp size={12} />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Footer Row: Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
          {/* Left Side: Branding */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Mr. Lusimadio Soki Simao, MBA
            </div>
            <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
              © 2026 L.S. Simao. All rights reserved. Registered Business Intelligence Systems.
            </p>
          </div>

          {/* Right Side: SDG Alignment Badge */}
          <div className="flex items-center space-x-2 text-neutral-600 font-mono text-[8px] uppercase tracking-widest">
            <Award size={12} />
            <span>SDG Alignment Verified • AfCFTA Advisory Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
