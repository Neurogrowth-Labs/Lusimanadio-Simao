import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface DigitalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DigitalCardModal({ isOpen, onClose }: DigitalCardModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://www.linkedin.com/in/lusimadio-soki-simao');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
          />

          {/* Modal Body */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            className="bg-neutral-950 border border-neutral-800 w-full max-w-sm relative z-10 shadow-2xl p-8 text-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white hover:border-white transition-all focus:outline-none"
              aria-label="Close modal"
            >
              <X size={14} />
            </button>

            <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block mb-2">
              EXECUTIVE NETWORKING
            </span>
            <h3 className="font-display font-bold text-lg text-white tracking-tight mb-1">
              DIGITAL PASS
            </h3>
            <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-6">
              Mr Lusimanadio Soki Simao, MBA
            </p>

            {/* QR Code Box */}
            <div className="bg-white p-4 inline-block border border-neutral-800 mb-6">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.linkedin.com/in/lusimadio-soki-simao"
                alt="LinkedIn QR Code"
                className="w-48 h-48 block grayscale"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="font-sans text-neutral-300 text-xs leading-relaxed mb-6">
              Scan this QR code with your mobile camera to instantly access Mr. Simao's verified LinkedIn profile.
            </p>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/lusimadio-soki-simao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white text-black font-mono text-[11px] tracking-wider uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300 border border-white block text-center"
              >
                Visit LinkedIn Direct
              </a>
              <button
                onClick={handleCopy}
                className="w-full py-2.5 bg-neutral-900 text-neutral-400 font-mono text-[11px] tracking-wider uppercase hover:text-white transition-all duration-300 border border-neutral-850 block text-center"
              >
                {copied ? 'Copied to Ledger!' : 'Copy Profile Link'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
