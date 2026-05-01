"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Code2, Sparkles, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Supabase", icon: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta" },
  { name: "Mistral", icon: "https://cdn.simpleicons.org/mistralai" },
  { name: "Webhooks", icon: "https://img.icons8.com/color/48/webhook.png" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
  { name: "Hostinger", icon: "https://cdn.simpleicons.org/hostinger" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
];

const skillGroups = [
  {
    title: "AI & Automation",
    icon: <Sparkles size={24} />,
    skills: ["Generative AI", "RAG Systems", "AI Agents", "n8n", "Meta Cloud API"],
    color: "text-primary"
  },
  {
    title: "Web & Frontend",
    icon: <Code2 size={24} />,
    skills: ["Next.js", "React", "WordPress", "SEO", "Tailwind CSS", "TypeScript"],
    color: "text-secondary"
  },
  {
    title: "Backend & DevOps",
    icon: <Terminal size={24} />,
    skills: ["Node.js", "PHP", "Supabase", "REST APIs", "Webhooks", "Docker", "Git/GitHub"],
    color: "text-accent"
  }
];

export function Skills() {
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      // scrollWidth gives total width. With 3 sets, there are 3N-1 gaps.
      // A true seamless loop needs N gaps. We add 1/3 of the gap-24 (96px/3 = 32) 
      // to perfectly align the loop.
      setWidth((carouselRef.current.scrollWidth / 3) + 32);
    }
  }, []);

  useAnimationFrame((time, delta) => {
    if (!width || isDragging) return; // Wait until width is calculated or if dragging

    // Determine movement based on frame time
    let moveBy = 0.5 * (delta / 16);
    let newX = x.get() - moveBy;

    // Exact wrap around logic. 
    if (newX <= -width) {
      newX += width;
    } else if (newX > 0) {
      newX -= width;
    }

    x.set(newX);
  });

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            The Core <span className="text-gradient">Stack</span>
          </motion.h2>
        </div>

        {/* Truly Infinite Logo Marquee */}
        <div className="relative mb-20 group h-20">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] cursor-grab active:cursor-grabbing">
            <motion.div 
              ref={carouselRef}
              style={{ x }}
              drag="x"
              dragConstraints={{ right: 10000, left: -10000 }}
              dragElastic={0}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              className="flex gap-24 items-center whitespace-nowrap py-4"
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 select-none pointer-events-none group-hover:scale-110 transition-transform">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-10 h-10 object-contain dark:brightness-200 dark:contrast-200" 
                  />
                  <span className="text-base md:text-lg font-semibold opacity-80">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:bg-primary/[0.02] transition-colors"
            >
              <div className={group.color + " mb-6"}>{group.icon}</div>
              <h3 className="text-xl font-bold mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-foreground/5 text-sm font-medium border border-foreground/5 hover:border-primary/20 hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
