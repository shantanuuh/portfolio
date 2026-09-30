"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function Home() {
    const [isPhotoOpen, setIsPhotoOpen] = useState(false);

    return (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-8 pt-32 sm:pt-40 md:pb-16">

            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                    {/* Interactive Zoomable Profile Badge Container */}
                    <button
                        onClick={() => setIsPhotoOpen(true)}
                        className="group relative w-16 h-16 rounded-2xl bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden flex items-center justify-center shadow-inner shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                        title="Click to expand profile photo"
                    >
                        <img 
                            src="/myself.png" 
                            alt="Shantanu Harkulkar" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115" 
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-white font-medium backdrop-blur-[1px]">
                            🔍
                        </div>
                    </button>

                    <div>
                        <h1 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">Shantanu Harkulkar</h1>
                        <p className="text-xs text-neutral-700 dark:text-neutral-400 font-medium">Gen AI, AI Automation & Full-Stack Developer</p>
                    </div>
                </div>

                {/* Mobile & Desktop Clickable Full Photo Modal Lightbox */}
                {isPhotoOpen && (
                    <div 
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
                        onClick={() => setIsPhotoOpen(false)}
                    >
                        <div 
                            className="relative max-w-sm w-full bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-4 shadow-2xl text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsPhotoOpen(false)}
                                className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md mb-3 mt-2">
                                <img src="/myself.png" alt="Shantanu Harkulkar Full View" className="w-full h-full object-cover" />
                            </div>
                            
                            <h3 className="text-base font-bold text-neutral-900 dark:text-white">Shantanu Harkulkar</h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Gen AI & Full-Stack Developer • Mumbai, India</p>
                        </div>
                    </div>
                )}

                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
                    M.Sc. Computer Science graduate specializing in Retrieval-Augmented Generation (RAG) pipelines, LLM agent orchestration, and automated workflow systems. Based in Mumbai, India.
                </p>

                {/* Contact Badges with Hover Image Previews */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-6 text-xs font-medium text-neutral-700 dark:text-neutral-300">

                    {/* Email Hover Badge */}
                    <div className="hover-badge-container">
                        <a href="mailto:shantanuharkulkar125@gmail.com" className="hover:text-neutral-900 dark:hover:text-white transition-colors underline underline-offset-4">Email</a>
                        <div className="hover-badge-popup p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl w-60 sm:w-64 text-center">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                                📧
                            </div>
                            <p className="font-bold text-neutral-900 dark:text-white text-[11px]">Direct Inbox</p>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 mt-0.5">shantanuharkulkar125@gmail.com</p>
                            <span className="inline-block mt-2 text-[9px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded-full font-semibold">Click to message</span>
                        </div>
                    </div>

                    <span className="text-neutral-400 dark:text-neutral-600">•</span>

                    {/* LinkedIn Hover Badge */}
                    <div className="hover-badge-container">
                        <a href="https://www.linkedin.com/in/shantanu-harkulkar-563b38269/" target="_blank" className="hover:text-neutral-900 dark:hover:text-white transition-colors underline underline-offset-4" rel="noreferrer">LinkedIn</a>
                        <div className="hover-badge-popup p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl w-60 sm:w-64 text-center">
                            <div className="w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700">
                                <img src="/myself.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-bold text-neutral-900 dark:text-white text-[11px]">Shantanu Harkulkar</p>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 mt-0.5">Gen AI & Full-Stack Engineer @ Mumbai</p>
                            <span className="inline-block mt-2 text-[9px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded-full font-semibold">Connect on LinkedIn</span>
                        </div>
                    </div>

                    <span className="text-neutral-400 dark:text-neutral-600">•</span>

                    {/* GitHub Hover Badge */}
                    <div className="hover-badge-container">
                        <a href="https://github.com/shantanuuh" target="_blank" className="hover:text-neutral-900 dark:hover:text-white transition-colors underline underline-offset-4" rel="noreferrer">GitHub</a>
                        <div className="hover-badge-popup p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl w-60 sm:w-64 text-center">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-mono font-bold text-neutral-900 dark:text-white text-xs">
                                GH
                            </div>
                            <p className="font-bold text-neutral-900 dark:text-white text-[11px]">shantanuuh</p>
                            <p className="text-[10px] text-neutral-600 dark:text-neutral-400 mt-0.5">AI Workflows, RAG & Web Repositories</p>
                            <span className="inline-block mt-2 text-[9px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded-full font-semibold">Explore Repos</span>
                        </div>
                    </div>

                </div>
            </section>

            <hr className="border-neutral-200 dark:border-neutral-800 mb-16" />

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-32">
                <div className="text-center mb-10">
                    <span className="text-[10px] uppercase tracking-widest bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full font-semibold">My Projects</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-3">Check out my Work</h2>
                    <p className="text-xs text-neutral-700 dark:text-neutral-400 mt-1">From automated multi-agent communication pipelines to production e-commerce platforms.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project 1 */}
                    <div className="group p-5 rounded-2xl bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col justify-between">
                        <div>
                            <div className="relative h-36 rounded-xl bg-neutral-100 dark:bg-neutral-900 mb-4 border border-neutral-200 dark:border-neutral-800 overflow-hidden group/img">
                                <img 
                                    src="/whatsapp-preview.png" 
                                    alt="WhatsApp AI Automation Preview" 
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105" 
                                />
                                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span>n8n Architecture</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-sm font-bold text-neutral-900 dark:text-white">WhatsApp AI Automation</h3>
                                <span className="text-[10px] text-neutral-600 dark:text-neutral-400 font-mono">2026</span>
                            </div>
                            <p className="text-xs text-neutral-700 dark:text-neutral-400 mb-4 leading-relaxed">
                                Built robust WhatsApp automation using Meta Cloud API and n8n. Features real-time webhook-based workflow architecture and dynamic agent routing.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                <span className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800">Meta API</span>
                                <span className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800">n8n</span>
                                <span className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800">Node.js</span>
                            </div>
                            <Link href="/blogs" className="text-xs font-semibold text-yellow-600 dark:text-[#FFF176] hover:underline inline-flex items-center gap-1">
                                <span>Read Article (Coming Soon)</span> ↗
                            </Link>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group p-5 rounded-2xl bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col justify-between">
                        <div>
                            <div className="relative h-36 rounded-xl bg-neutral-100 dark:bg-neutral-900 mb-4 border border-neutral-200 dark:border-neutral-800 overflow-hidden group/img">
                                <img 
                                    src="/statica-preview.png" 
                                    alt="Statica.in Official Preview" 
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105" 
                                />
                                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span>statica.in</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Statica.in E-Commerce & AI</h3>
                                <span className="text-[10px] text-neutral-600 dark:text-neutral-400 font-mono">2025</span>
                            </div>
                            <p className="text-xs text-neutral-700 dark:text-neutral-400 mb-4 leading-relaxed">
                                Restructured WordPress e-commerce architecture, executed advanced SEO optimization, engineered custom PHP plugins, and deployed n8n AI agent workflows.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                <span className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800">WordPress</span>
                                <span className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800">PHP</span>
                                <span className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800">n8n</span>
                            </div>
                            <a href="https://statica.in" target="_blank" className="text-xs font-semibold text-yellow-600 dark:text-[#FFF176] hover:underline inline-flex items-center gap-1" rel="noreferrer">
                                <span>Live Site</span> ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Skills Section (With Clean Steel Shine Inner Glows) */}
            <section id="skills" className="mb-16 scroll-mt-32">
                <div className="text-center mb-10">
                    <span className="text-[10px] uppercase tracking-widest bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full font-semibold">Skills</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-3">Technical Skills & Core Stack</h2>
                    <p className="text-xs text-neutral-700 dark:text-neutral-400 mt-1">Tools, frameworks, and technologies I leverage to architect end-to-end intelligent systems.</p>
                </div>

                {/* Outer wrapper card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">

                    {/* Inner Category 1 with Steel Shine */}
                    <div className="steel-shine-inner-glow">
                        <div className="steel-shine-content p-4">
                            <h3 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-3">AI Systems & Automation</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">n8n Automation</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">RAG Architectures</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">AI System Design</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">LangChain</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">Ollama</span>
                            </div>
                        </div>
                    </div>

                    {/* Inner Category 2 with Steel Shine */}
                    <div className="steel-shine-inner-glow">
                        <div className="steel-shine-content p-4">
                            <h3 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-3">Languages & Core Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">Python</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">TypeScript</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">SQL</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">Next.js</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">Flask</span>
                            </div>
                        </div>
                    </div>

                    {/* Inner Category 3 with Steel Shine */}
                    <div className="steel-shine-inner-glow">
                        <div className="steel-shine-content p-4">
                            <h3 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-3">Vector Stores & Data</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">ChromaDB</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">FAISS</span>
                                <span className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs text-xs">Pandas & NumPy</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Academic Background Section (With Clean Steel Shine Inner Glows) */}
            <section id="education" className="mb-16 scroll-mt-32">
                <div className="text-center mb-10">
                    <span className="text-[10px] uppercase tracking-widest bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full font-semibold">Education</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-3">Academic Background</h2>
                    <p className="text-xs text-neutral-700 dark:text-neutral-400 mt-1">Formal education and computer science foundations.</p>
                </div>

                {/* Outer wrapper card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">

                    {/* Inner Degree 1 with Steel Shine */}
                    <div className="steel-shine-inner-glow">
                        <div className="steel-shine-content p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                            <div>
                                <strong className="text-sm font-bold text-neutral-900 dark:text-white block mb-0.5">M.Sc. Computer Science</strong>
                                <span className="text-xs text-neutral-700 dark:text-neutral-400">Ramnarain Ruia Autonomous College, Matunga</span>
                            </div>
                            <span className="font-mono text-xs text-neutral-700 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 shadow-2xs self-start sm:self-auto">2024 – 2026</span>
                        </div>
                    </div>

                    {/* Inner Degree 2 with Steel Shine */}
                    <div className="steel-shine-inner-glow">
                        <div className="steel-shine-content p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                            <div>
                                <strong className="text-sm font-bold text-neutral-900 dark:text-white block mb-0.5">B.Sc. Computer Science</strong>
                                <span className="text-xs text-neutral-700 dark:text-neutral-400">DSPM's K V Pendharkar College, Dombivli</span>
                            </div>
                            <span className="font-mono text-xs text-neutral-700 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 shadow-2xs self-start sm:self-auto">2021 – 2024</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16 scroll-mt-32">
                {/* Single Steel Shine Card spanning full section width */}
                <div className="steel-shine-inner-glow">
                    <div className="steel-shine-content p-8 sm:p-10 text-center">

                        {/* Heading & Subtitle inside card */}
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                            Get in Touch
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                            Open to opportunities, collaborations, and conversations.
                        </p>

                        {/* Body text with links */}
                        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto leading-relaxed border-t border-neutral-100 dark:border-neutral-800/80 pt-6">
                            Feel free to reach out — drop me an email at{" "}
                            <a
                                href="mailto:shantanuharkulkar125@gmail.com"
                                className="text-yellow-600 dark:text-[#FFF176] font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                                shantanuharkulkar125@gmail.com
                            </a>
                            {" "}or connect on{" "}
                            <a
                                href="https://www.linkedin.com/in/shantanu-harkulkar-563b38269/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-yellow-600 dark:text-[#FFF176] font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                                LinkedIn
                            </a>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-xs text-neutral-600 dark:text-neutral-400">
                © 2026 Shantanu Harkulkar.
            </footer>

        </main>
    );
}
