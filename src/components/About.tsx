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
    <section id="about" className="py-24 relative overflow-hidden bg-foreground/[0.02] border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <User size={16} />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Bridging the gap between <span className="text-gradient">AI and Reality.</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-foreground/70 leading-relaxed">
                I’m Shantanu Harkulkar, working in AI automation and generative AI. I like building things that actually work in the real world, not just demos.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Most of what I do is around connecting systems—using AI, APIs, and webhooks to create workflows that can run on their own and handle real tasks like conversations or lead flow.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                During my time at Volosist, I worked on WhatsApp automation using Meta’s Cloud API, built webhook-based systems, and created AI agents that could interact with users. That experience pushed me to think more in terms of systems rather than just code.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I enjoy what people call “vibe coding”—getting into a flow, trying things out, and building end-to-end until it actually works. It’s less about perfection and more about making something useful.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Right now, I’m exploring AI agents, automation, and trying to build things that can stand on their own. If you’re building something interesting in this space, I’m always open to connecting.
              </p>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
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
