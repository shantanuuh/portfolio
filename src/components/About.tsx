"use client";

import { motion } from "framer-motion";
import { User, Code, Sparkles, Network } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Generative AI",
      description: "Building intelligent RAG agents and conversational LLM integrations.",
    },
    {
      icon: <Network className="w-6 h-6 text-primary" />,
      title: "Workflow Automation",
      description: "Connecting complex systems using n8n, webhooks, and the Meta API.",
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Full-Stack Web",
      description: "Crafting premium user interfaces with Next.js, React, and Tailwind CSS.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <User size={16} />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Bridging the gap between <span className="text-gradient">AI and Reality.</span>
            </h2>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              I am a Generative AI & Full-Stack Developer specializing in building enterprise-grade automation systems. My passion lies in taking complex, cutting-edge technologies—like LLMs, RAG frameworks, and WhatsApp Cloud APIs—and architecting them into seamless, real-world products.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              During my recent tenure as a Generative AI Intern at Volosist Infotech, I led the development of end-to-end webhook infrastructures, live e-commerce integrations, and autonomous customer support agents.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-6 flex flex-col gap-4 hover:bg-foreground/[0.02] transition-colors ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
