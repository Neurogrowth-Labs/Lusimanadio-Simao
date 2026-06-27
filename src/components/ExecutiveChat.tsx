import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ExecutiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Welcome to Mr. Simao's Executive Suite. I am his AI Advisor. You may ask me anything about his research, startups, or executive advisory."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          history: messages.slice(1), // Exclude initial welcome message
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "I apologize, but I am currently unable to securely reach Mr. Simao's server. Please verify your connection or try again shortly."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        id="executive-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white text-black border border-neutral-800 hover:bg-neutral-900 hover:text-white flex items-center justify-center shadow-2xl cursor-pointer transition-colors duration-300 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Executive Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={18} />
              <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="executive-chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-22 right-6 z-40 w-[calc(100vw-3rem)] max-w-[380px] h-[480px] bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-neutral-800 bg-neutral-900 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center border border-neutral-750">
                  <Sparkles size={11} className="text-white animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs tracking-wider text-white uppercase leading-tight">
                    EXECUTIVE ADVISOR
                  </h4>
                  <p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
                    Gemini 3.5 AI Protocol
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:text-white text-neutral-400 transition-colors focus:outline-none"
              >
                <X size={14} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs scrollbar-thin scrollbar-thumb-neutral-800">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 border ${
                      msg.role === 'user'
                        ? 'bg-white text-black border-white'
                        : 'bg-neutral-900/60 text-neutral-300 border-neutral-850'
                    } leading-relaxed`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3 bg-neutral-900/60 text-neutral-400 border border-neutral-850 flex items-center space-x-1.5">
                    <span className="font-mono text-[9px] tracking-widest uppercase">
                      COMPILING RESPONSE
                    </span>
                    <span className="flex space-x-1">
                      <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-100" />
                      <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-200" />
                      <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-300" />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSend}
              className="p-3 border-t border-neutral-800 bg-neutral-950 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask about Mr. Simao..."
                className="flex-1 bg-neutral-900 text-white placeholder-neutral-500 border border-neutral-850 hover:border-neutral-800 focus:border-white focus:outline-none px-3 py-2 font-sans text-xs transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 bg-white text-black hover:bg-neutral-900 hover:text-white border border-white hover:border-neutral-800 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Send message"
              >
                <Send size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
