"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Play, Github } from "lucide-react";
import Link from "next/link";

interface Tech {
  name: string;
  icon: string;
}

interface ProjectLinks {
  live?: string;
  demo?: string;
  blog?: string;
  github?: string;
}

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tech: Tech[];
  links: ProjectLinks;
}

const projects: Project[] = [
  {
    title: "WhatsApp AI Automation",
    description:
      "Built robust WhatsApp automation using Meta Cloud API and n8n. Features real-time webhook-based workflow architecture.",
    icon: (
      <img
        src="https://cdn.simpleicons.org/whatsapp/25D366"
        alt="WhatsApp"
        className="w-8 h-8 object-contain"
      />
    ),
    tech: [
      { name: "Meta API", icon: "https://cdn.simpleicons.org/meta" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Webhooks", icon: "https://img.icons8.com/color/48/webhook.png" },
    ],
    links: {
      demo: "/demos/whatsapp-ai",
    },
  },
  {
    title: "Statica.in E-Commerce & AI Platform",
    description:
      "Restructured WordPress e-commerce architecture, executed advanced SEO optimization, engineered custom PHP plugins, and deployed n8n AI agent workflows.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
        alt="WordPress"
        className="w-8 h-8 object-contain"
      />
    ),
    tech: [
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
      { name: "SEO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    ],
    links: {
      live: "https://statica.in",
      blog: "/blog/statica",
    },
  },
  {
    title: "Automated Email & RAG Workflows",
    description:
      "Engineered intelligent email reply agents and automated newsletter workflows using secure SMTP configurations and dynamic AI knowledge retrieval.",
    icon: (
      <img
        src="https://cdn.simpleicons.org/n8n/EA4B71"
        alt="n8n"
        className="w-8 h-8 object-contain"
      />
    ),
    tech: [
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
      { name: "SMTP", icon: "https://img.icons8.com/color/48/gmail-new.png" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "LLMs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
    ],
    links: {
      blog: "/blog/email-rag-workflows",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
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
              className="glass-card p-8 group h-full flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-start mb-6 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-colors"
                    >
                      <img src={t.icon} alt={t.name} className="w-4 h-4 object-contain" />
                      <span className="text-foreground text-[10px] font-bold uppercase tracking-wider">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Links Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-foreground/10 flex-wrap">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live site for ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/30 hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}

                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    aria-label={`View demo for ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/30 hover:bg-primary/10 transition-colors"
                  >
                    <Play size={14} />
                    Demo
                  </Link>
                )}

                {project.links.blog && (
                  <Link
                    href={project.links.blog}
                    aria-label={`Read docs for ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/30 hover:bg-primary/10 transition-colors"
                  >
                    <BookOpen size={14} />
                    Read
                  </Link>
                )}

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-foreground/70 border border-foreground/10 hover:bg-foreground/5 transition-colors ml-auto"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}