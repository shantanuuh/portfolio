"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, BrainCircuit, Play, ArrowUpRight, Video, Tag } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const demoItems = [
    {
        title: "WhatsApp AI Automation Showcase",
        description: "A working demonstration of an AI-powered chatbot driven by Groq API with live context retrieved from a Google Sheet, enabling dynamic, data-aware conversational responses.",
        date: "July 2026",
        href: "/demos/whatsapp-ai",
        tags: ["Groq API", "Google Sheets", "Meta Cloud", "n8n"],
    },
];

export default function DemosDashboardPage() {
    return (
        <main className="min-h-screen bg-background text-foreground relative">
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>

                <div className="space-y-4 mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Interactive <span className="text-gradient">Demos</span>
                    </h1>
                    <p className="text-foreground/60 text-base sm:text-lg max-w-2xl">
                        Video walk-throughs, operational system recordings, and production-ready tool proofs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl">
                    {demoItems.map((demo, idx) => (
                        <motion.div
                            key={demo.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                        >
                            {/* Card utilizes your identical contact layout system with secondary accents */}
                            <Link
                                href={demo.href}
                                className="flex flex-col justify-between p-6 h-full glass-card hover:bg-secondary/5 transition-all group rounded-2xl block border border-transparent"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shrink-0">
                                            <BrainCircuit size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold group-hover:text-secondary transition-colors flex items-center gap-1.5 leading-snug">
                                                {demo.title}
                                                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </h3>
                                            <div className="flex items-center gap-3 text-xs text-foreground/50 mt-1">
                                                <span className="flex items-center gap-1"><Calendar size={12} />{demo.date}</span>
                                                <span className="flex items-center gap-1 text-secondary font-medium"><Video size={11} />Video Walkthrough</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-foreground/60 leading-relaxed pl-1">
                                        {demo.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-glass-border flex items-center justify-between gap-2 pl-1">
                                    <div className="flex flex-wrap gap-1.5">
                                        {demo.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full"
                                            >
                                                <Tag size={10} />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary group-hover:underline underline-offset-4 shrink-0 pr-1">
                                        <Play size={10} fill="currentColor" /> Watch
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
