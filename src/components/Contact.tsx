"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Let's <span className="text-gradient">Collaborate</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-foreground/60 max-w-2xl"
          >
            Ready to build the next generation of AI-driven systems? Reach out and let's start a conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href="mailto:shantanuharkulkar125@gmail.com" 
                className="flex items-center gap-4 p-6 glass-card hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Email</p>
                  <p className="text-xs sm:text-sm md:text-base font-semibold break-all">shantanuharkulkar125@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/918879528437" 
                target="_blank"
                className="flex items-center gap-4 p-6 glass-card hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">WhatsApp</p>
                  <p className="text-xs sm:text-sm md:text-base font-semibold">Direct Message</p>
                </div>
              </a>

              <div className="flex gap-4 mt-8">
                <a href="https://linkedin.com/in/shantanu-harkulkar-563b38269/" className="p-4 glass rounded-2xl hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/shantanuuh" className="p-4 glass rounded-2xl hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            suppressHydrationWarning
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              const whatsappMsg = `Hi, I'm ${name}. My email is ${email}. %0A%0A${message}`;
              window.open(`https://wa.me/918879528437?text=${whatsappMsg}`, '_blank');
            }}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input 
                suppressHydrationWarning
                name="name"
                type="text" 
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-transparent focus:border-primary/30 focus:bg-transparent transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                suppressHydrationWarning
                name="email"
                type="email" 
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-transparent focus:border-primary/30 focus:bg-transparent transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea 
                suppressHydrationWarning
                name="message"
                rows={4}
                required
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-transparent focus:border-primary/30 focus:bg-transparent transition-all outline-none resize-none"
              />
            </div>
            <button 
              suppressHydrationWarning
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
