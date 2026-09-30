import Link from "next/link";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Sparkles, Clock } from "lucide-react";

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 selection:bg-amber-500/20 selection:text-amber-500 font-sans antialiased transition-colors duration-300 flex flex-col justify-between">
            <Navigation />

            {/* Container for Back button and Main Content */}
            <div className="max-w-2xl mx-auto px-6 pt-24 sm:pt-28 pb-24 w-full">

                {/* Small Mini Back to Portfolio Button below fixed Navbar */}
                <div className="mb-8 flex items-center justify-start">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-2xs"
                    >
                        <ArrowLeft className="w-3 h-3" />
                        <span>Back to Portfolio</span>
                    </Link>
                </div>

                {/* Main Content Area */}
                <main className="flex flex-col items-center justify-center text-center">
                    
                    {/* Coming Soon Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9C4]/80 dark:bg-[#FFF59D]/15 border border-[#FFF176] dark:border-[#FFF59D]/30 text-yellow-900 dark:text-[#FFF59D] text-xs font-semibold mb-6 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-600 dark:text-[#FFF176]" />
                        <span>Blogs & Articles</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                        Blogs are <span className="bg-gradient-to-r from-yellow-600 via-[#eab308] to-yellow-500 dark:from-[#FFF9C4] dark:via-[#FFF59D] dark:to-[#FFF176] bg-clip-text text-transparent">Coming Soon</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed mb-8">
                        I'm currently writing deep dives on AI automation, n8n workflows, RAG architectures, and web development. Check back soon for new articles!
                    </p>

                    {/* Visual Status Card */}
                    <div className="w-full max-w-md p-6 rounded-2xl bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 shadow-sm text-left flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF9C4] dark:bg-[#FFF59D]/15 border border-[#FFF176]/50 dark:border-transparent flex items-center justify-center text-yellow-800 dark:text-[#FFF176] shrink-0">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Articles in Development</h3>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Upcoming posts include: <span className="text-neutral-800 dark:text-neutral-200 font-medium">"Building Production WhatsApp Bots with Meta API & n8n"</span> and <span className="text-neutral-800 dark:text-neutral-200 font-medium">"Architecting E-Commerce AI Agents"</span>.
                            </p>
                        </div>
                    </div>

                </main>
            </div>

            {/* Fixed Footer at the bottom */}
            <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 py-3 text-center text-xs text-neutral-600 dark:text-neutral-400">
                © 2026 Shantanu Harkulkar.
            </footer>
        </div>
    );
}
