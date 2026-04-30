"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Database, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "WhatsApp AI Automation",
    description: "Built robust WhatsApp automation using Meta Cloud API and n8n. Features real-time webhook-based workflow architecture.",
    icon: <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="w-8 h-8 object-contain" />,
    tech: [
      { name: "Meta API", icon: "https://cdn.simpleicons.org/meta" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Webhooks", icon: "https://img.icons8.com/color/48/webhook.png" },
    ],
    link: "https://github.com/shantanuuh",
  },
  {
    title: "Statica.in E-commerce & AI",
    description: "Deployed a live e-commerce platform featuring a custom-built PHP chatbot plugin and a RAG-based AI Agent for handling customer queries.",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" className="w-8 h-8 object-contain dark:invert" />,
    tech: [
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "RAG AI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
      { name: "SEO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    ],
    link: "https://statica.in",
  },
  {
    title: "Automated Email & RAG Workflows",
    description: "Engineered intelligent email reply agents and automated newsletter workflows using secure SMTP configurations and dynamic AI knowledge retrieval.",
    icon: <img src="https://cdn.simpleicons.org/n8n/EA4B71" alt="n8n" className="w-8 h-8 object-contain" />,
    tech: [
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
      { name: "SMTP", icon: "https://img.icons8.com/color/48/gmail-new.png" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "LLMs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
    ],
    link: "https://github.com/shantanuuh",
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-4 text-foreground/60 max-w-2xl"
          >
            A showcase of AI-driven solutions and automated systems designed for scale and efficiency.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group"
            >
              <div className="w-12 h-12 flex items-center justify-start mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((t) => (
                  <div key={t.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-colors">
                    <img src={t.icon} alt={t.name} className="w-4 h-4 object-contain dark:brightness-200 dark:contrast-200" />
                    <span className="text-foreground text-[10px] font-bold uppercase tracking-wider">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.link} className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                  <Github size={18} />
                </a>
                <a href={project.link} className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
