"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, BookOpen, Clock, ArrowUpRight, Tag } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const blogPosts = [
    {
        title: "Scaling & Automating Statica.in: From CMS Overhaul to n8n AI Agents",
        description: "An end-to-end technical documentation of restructuring a live e-commerce platform specializing in balsa wood aircraft kits, executing rigorous SEO, building custom WordPress plugins, and implementing workflow automation with n8n and AI agents.",
        date: "December 2025",
        readingTime: "6 min read",
        href: "/blog/statica",
        tags: ["WordPress", "SEO", "n8n", "AI Agents", "PHP"],
    },
    {
        title: "AI Email Automation with n8n, RAG & LLMs",
        description: "How I built an automated customer support email pipeline using n8n Cloud, RAG, custom JavaScript, and a Mistral AI Agent.",
        date: "July 29, 2026",
        readingTime: "6 min read",
        href: "/blog/email-rag-workflows",
        tags: ["n8n", "AI", "RAG", "JavaScript"],
    },
];

export default function BlogDashboardPage() {
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
                        My <span className="text-gradient">Blogs</span>
                    </h1>
                    <p className="text-foreground/60 text-base sm:text-lg max-w-2xl">
                        Technical writing on AI pipelines, workflow automations, and engineering architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                        >
                            <Link
                                href={post.href}
                                className="flex flex-col justify-between p-6 h-full glass-card hover:bg-primary/5 transition-all group rounded-2xl block border border-transparent"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                                            <BookOpen size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-1.5 leading-snug">
                                                {post.title}
                                                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </h3>
                                            <div className="flex items-center gap-3 text-xs text-foreground/50 mt-1">
                                                <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                                                <span className="flex items-center gap-1"><Clock size={12} />{post.readingTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-foreground/60 leading-relaxed pl-1">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-1.5 pl-1">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full"
                                        >
                                            <Tag size={10} />
                                            {tag}
                                        </span>
                                    ))}
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