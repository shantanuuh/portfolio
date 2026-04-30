"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8 border-l-2 border-primary/20 pb-12"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            
            <div className="glass-card p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Generative AI Intern</h3>
                  <div className="flex items-center gap-2 text-primary mt-1 font-medium">
                    <Briefcase size={16} />
                    <a 
                      href="https://volosist.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary/70 transition-colors underline underline-offset-4"
                    >
                      Volosist Infotech Pvt. Ltd.
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground/50 text-sm bg-foreground/5 px-4 py-2 rounded-full w-fit">
                  <Calendar size={14} />
                  <span>Dec 2025 – Mar 2026</span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Architected end-to-end WhatsApp automation workflows using Meta Cloud API and n8n webhooks.",
                  "Developed statica.in, an e-commerce platform featuring a custom-built PHP chatbot plugin.",
                  "Engineered Retrieval-Augmented Generation (RAG) AI agents for intelligent customer support.",
                  "Configured secure SMTP email automation systems for dynamic newsletter and campaign workflows.",
                  "Implemented on-page and off-page SEO strategies, significantly improving search visibility."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 text-foreground/70"
                  >
                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
