import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Executive name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Secure email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Provide a valid email protocol';
    }
    if (!formData.message.trim()) tempErrors.message = 'Inquiry details are required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Save to localStorage for durable client-side record
      const existing = JSON.parse(localStorage.getItem('executive_inquiries') || '[]');
      existing.push(newMessage);
      localStorage.setItem('executive_inquiries', JSON.stringify(existing));

      // Construct direct mailto connection
      const mailtoEmail = 'simao@neurogrowthlabs.co.za';
      const mailtoSubject = encodeURIComponent(`Advisory Inquiry: ${formData.organization || 'Partnership'} - ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Dear Mr. Simao,\n\n` +
        `I am writing to initiate an advisory/partnership inquiry.\n\n` +
        `Executive Name: ${formData.name}\n` +
        `Representative Email: ${formData.email}\n` +
        `Organization/Ministry: ${formData.organization || 'N/A'}\n\n` +
        `Inquiry Specification:\n${formData.message}\n\n` +
        `Best regards,\n` +
        `${formData.name}`
      );

      // Open email client
      window.location.href = `mailto:${mailtoEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', organization: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase block mb-2">
              SECURE CHANNELS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              SECURE INQUIRY
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Direct coordination lines for corporate governance, AI integrations, regional trade, and sustainability summits.
          </p>
        </div>

        {/* Form & Channels Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-xl text-white tracking-wide">
                Direct Executive Channels
              </h3>
              <p className="font-sans text-neutral-400 text-xs leading-relaxed max-w-md">
                Select the appropriate communication channel for your organizational department. Messages are processed by executive office assistants under strict confidentiality.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-4">
              {PERSONAL_INFO.contacts.map((contact, index) => (
                <div
                  key={index}
                  className="p-5 bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 transition-colors duration-300 flex items-center space-x-4"
                >
                  <div className="p-3 bg-neutral-950 border border-neutral-850 text-neutral-400">
                    {contact.label.includes('Phone') ? <Phone size={18} /> : <Mail size={18} />}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block">
                      {contact.label}
                    </span>
                    <a
                      href={contact.label.includes('Phone') ? `tel:${contact.value.replace(/\s+/g, '')}` : `mailto:${contact.value}`}
                      className="font-mono text-xs text-white hover:text-neutral-400 transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="p-5 bg-neutral-900/40 border border-neutral-900 flex items-center space-x-4">
                <div className="p-3 bg-neutral-950 border border-neutral-850 text-neutral-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block">
                    Regional Headquarters
                  </span>
                  <span className="font-sans text-xs text-neutral-300">
                    Johannesburg, South Africa / Kinshasa, DRC
                  </span>
                </div>
              </div>
            </div>

            {/* Cryptographic Security Badge */}
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex items-center space-x-3">
              <Shield size={16} className="text-neutral-500 shrink-0" />
              <p className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase leading-snug">
                TRANSMISSION ENCRYPTED // TLS 1.3 SECURE DIRECT CHANNEL
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/20 border border-neutral-900 p-8 md:p-10 relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                        Full Name / Representative *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Director Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 bg-neutral-950 border text-xs text-white rounded-none focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-neutral-850 focus:border-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="font-mono text-[9px] text-red-400 tracking-wider uppercase">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                        Secure Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. s.jenkins@company.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-neutral-950 border text-xs text-white rounded-none focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-neutral-850 focus:border-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="font-mono text-[9px] text-red-400 tracking-wider uppercase">{errors.email}</p>
                      )}
                    </div>

                    {/* Organization Input */}
                    <div className="space-y-2">
                      <label htmlFor="organization" className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                        Organization / Ministry
                      </label>
                      <input
                        id="organization"
                        type="text"
                        placeholder="e.g. United Nations Sustainability Office"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-850 text-xs text-white rounded-none focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                        Inquiry Specification *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Describe the scope of the partnership, advisory, or integration..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 bg-neutral-950 border text-xs text-white rounded-none focus:outline-none resize-none transition-colors ${
                          errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-neutral-850 focus:border-white'
                        }`}
                      />
                      {errors.message && (
                        <p className="font-mono text-[9px] text-red-400 tracking-wider uppercase">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white text-black font-mono text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-neutral-950 hover:text-white border border-white disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      <span>{isSubmitting ? 'DISPATCHING TO SECURE HOST...' : 'DISPATCH ADVISORY INQUIRY'}</span>
                      {!isSubmitting && <Send size={12} />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <div className="p-4 bg-white text-black rounded-full animate-bounce">
                      <CheckCircle size={32} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-white tracking-tight uppercase">
                        Transmission Successful
                      </h3>
                      <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                        SECURE RECORD ID: INQ-{Math.floor(100000 + Math.random() * 900000)}
                      </p>
                    </div>

                    <p className="font-sans text-neutral-300 text-xs leading-relaxed max-w-sm">
                      Your inquiry has been compiled and securely handed over to your email application. Please tap send to deliver it directly to <strong>simao@neurogrowthlabs.co.za</strong>.
                    </p>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-neutral-950 text-white font-mono text-[10px] tracking-wider uppercase border border-neutral-800 hover:border-white hover:text-neutral-400 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
