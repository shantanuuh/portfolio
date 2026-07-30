"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const company = formData.get("companyName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Direct mailto fallback configured for Shantanu Harkulkar
    const subject = `Portfolio Contact from ${name}${company ? ` (${company})` : ""}`;
    const body = `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:shantanuharkulkar125@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Enhanced Hero-style Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.25)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(rgba(255,255,255,0.25)_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none opacity-100" />

      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Let's <span className="text-gradient">Collaborate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-foreground/70 max-w-lg text-sm md:text-base leading-relaxed"
          >
            Ready to build production-ready AI systems or automate complex workflows? Reach out to Shantanu Harkulkar and let's get started.
          </motion.p>
        </div>

        {/* Glassmorphism Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/60 dark:bg-white/5 backdrop-blur-2xl p-8 md:p-12 space-y-6 rounded-3xl shadow-2xl flex flex-col border border-white/40 dark:border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Shantanu Harkulkar"
                  className="w-full px-4 py-3.5 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/10 transition-all outline-none text-sm placeholder:text-foreground/30"
                />
              </div>

              {/* Company Name Field */}
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium text-foreground/80">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3.5 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/10 transition-all outline-none text-sm placeholder:text-foreground/30"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="shantanuharkulkar125@gmail.com"
                className="w-full px-4 py-3.5 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/10 transition-all outline-none text-sm placeholder:text-foreground/30"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project, workflow automation, or AI system requirements..."
                className="w-full px-4 py-3.5 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/10 transition-all outline-none text-sm resize-none placeholder:text-foreground/30"
              />
            </div>

            {/* Centered Light Gradient Button */}
            <button
              type="submit"
              className="relative overflow-hidden w-full max-w-xs mx-auto py-3.5 px-6 bg-slate-100/80 dark:bg-slate-800/80 text-slate-900 dark:text-white font-bold rounded-xl flex items-center justify-center transition-all duration-300 border border-white/40 dark:border-white/10 shadow-lg shadow-black/5 hover:bg-[#1d4ed8] hover:text-white dark:hover:bg-[#1d4ed8] dark:hover:text-white active:scale-[0.98] cursor-pointer text-sm md:text-base mt-4 backdrop-blur-sm group"
            >
              {/* Grain Texture Overlay */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
              />

              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}