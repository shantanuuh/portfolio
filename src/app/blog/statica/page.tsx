import Link from "next/link";
import {
    ArrowLeft,
    BookOpen,
    Cpu,
    ShieldAlert,
    Lock,
    Zap,
    Code2,
    Sparkles,
    Layers,
    Database,
    Tag,
    Calendar,
    User,
    CheckCircle2,
    FileText,
    ExternalLink,
    Key,
    Globe,
    ShoppingCart,
    TrendingUp,
    Bot,
    Mail,
    Workflow,
    Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Building, Scaling & Automating Statica.in: From WordPress E-Commerce to n8n AI Agents | Shantanu Harkulkar",
    description:
        "A comprehensive technical case study documenting the end-to-end overhaul of Statica.in—covering WordPress product structuring, advanced SEO, custom plugin development, and n8n AI agent automation.",
};

export default function StaticaComprehensiveBlogPage() {
    const tags = ["WordPress", "SEO", "n8n", "AI Agents", "E-Commerce", "PHP", "Automation", "Statica"];

    return (
        <main className="min-h-screen bg-background text-foreground relative">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Blogs</span>
                </Link>

                {/* Header */}
                <div className="space-y-6 mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider border border-secondary/20">
                        <BookOpen size={14} />
                        <span>Engineering Case Study</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                        Scaling &amp; Automating <span className="text-gradient">Statica.in</span>: From CMS Overhaul to n8n AI Agents
                    </h1>

                    <p className="text-foreground/75 text-base sm:text-lg max-w-3xl leading-relaxed">
                        An end-to-end technical documentation of restructuring a live e-commerce platform specializing in balsa wood aircraft kits, executing rigorous SEO, building custom WordPress plugins, and implementing workflow automation with n8n and AI agents.
                    </p>

                    {/* Live Site Callout */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <Globe size={20} className="text-primary shrink-0" />
                        <div className="text-sm">
                            <span className="font-semibold text-foreground">Live Production Platform: </span>
                            <a
                                href="https://statica.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline font-medium inline-flex items-center gap-1 ml-1"
                            >
                                statica.in <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>

                    {/* Post Meta */}
                    <div className="flex flex-wrap gap-5 text-xs text-foreground/60 border-y border-glass-border/60 py-3">
                        <span className="flex items-center gap-1.5 font-medium">
                            <User size={13} className="text-primary" /> Shantanu Harkulkar
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                            <Calendar size={13} className="text-secondary" /> November – December 2025
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                            <Cpu size={13} className="text-accent" /> Full-Stack Architecture &amp; AI Automation
                        </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        {tags.map((t, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                            >
                                <Tag size={10} />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Article Body */}
                <div className="space-y-12 text-foreground/80 leading-relaxed">

                    {/* Introduction */}
                    <section className="space-y-4">
                        <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                            Managing an e-commerce platform requires more than just listing products—it demands clean structural hierarchies, robust search engine visibility, reliable transactional communication, and intelligent customer support. Over an intensive multi-week development cycle, I led the complete structural optimization, SEO overhaul, and AI automation integration for <a href="https://statica.in" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">statica.in</a>.
                        </p>
                    </section>

                    {/* Phase 1: WordPress Architecture & Catalog Restructuring */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
                            <ShoppingCart size={20} className="text-primary" />
                            Phase 1: Catalog Restructuring &amp; Live Site Deployment
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            The initial phase focused on organizing product categories for precision hobbyists and scale model enthusiasts. I structured navigation tabs, created dedicated sub-tabs for <span className="font-semibold text-foreground">Balsa Wood Model Kits</span> and <span className="font-semibold text-foreground">Assembly Model Kits</span>, and successfully populated 100% of the product catalog with detailed pricing, sizing specifications, and descriptions.
                        </p>
                        <div className="glass-card p-4 space-y-2 border border-glass-border/60 bg-black/20">
                            <h4 className="font-bold text-sm text-foreground">Overcoming Hosting Constraints</h4>
                            <p className="text-xs text-foreground/70 leading-relaxed">
                                When attempting to migrate a local clone of the site to Hostinger, shared hosting import limitations and costly migration plugins created deployment bottlenecks. To ensure zero downtime, I pivoted to manually executing all structural changes, UI edits, button placements, and animation updates directly on the live production environment.
                            </p>
                        </div>
                    </section>

                    {/* Phase 2: SEO Strategy & Implementation */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
                            <TrendingUp size={20} className="text-secondary" />
                            Phase 2: On-Page SEO &amp; Off-Page Backlink Strategy
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            To maximize organic visibility in Google Search Results, I implemented an aggressive keyword optimization strategy targeting high-intent search terms such as <span className="font-mono text-xs bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">Balsa Wood Static Model Kits</span> and <span className="font-mono text-xs bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">Assembly Model Kits</span> across homepage H1 tags, metadata, and site taglines.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/75 pl-4 border-l-2 border-secondary/30">
                            <li><strong>On-Page Optimization:</strong> Rigorously optimized titles, meta descriptions, keyword density, and image alt tags across all site pages and product categories.</li>
                            <li><strong>Off-Page Authority:</strong> Created and published SEO-optimized articles on Medium with strategic anchor text redirection to drive high-quality referral traffic back to statica.in.</li>
                        </ul>
                    </section>

                    {/* Phase 3: Custom WordPress Plugin Development */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
                            <Code2 size={20} className="text-accent" />
                            Phase 3: Custom Plugin Development (`statica-free-cloud-chatbot`)
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Relying on bloated third-party plugins for customer support created performance drag and cost overhead. To overcome this, I engineered a fully custom WordPress plugin (<span className="font-mono text-xs text-accent">statica-free-cloud-chatbot</span>) featuring a modular folder structure, dedicated includes directory, and clean activation hooks.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Debugging fatal activation errors using <code className="bg-glass-border/50 px-1 rounded text-xs font-mono">WP_DEBUG</code> provided deep insight into WordPress plugin architecture, ensuring lightweight execution without reliance on costly external tools.
                        </p>
                    </section>

                    {/* Phase 4: Email Automation & Infrastructure */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
                            <Mail size={20} className="text-primary" />
                            Phase 4: Email Automation &amp; SMTP Verification
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Transactional communications—such as newsletters, promotional campaigns, and customer support notifications—require resilient SMTP delivery.
                        </p>
                        <div className="space-y-2 text-sm text-foreground/75">
                            <p>
                                After testing partial integrations with EmailJS and evaluating platform constraints, I built a custom email automation module leveraging Gmail App Passwords, TLS encryption, and SMTP server workflows. Network connectivity and credential delivery were successfully validated and troubleshot using PowerShell scripts, confirming 100% reliable message transmission.
                            </p>
                        </div>
                    </section>

                    {/* Phase 5: Transition to n8n & AI Agent Workflow */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
                            <Workflow size={20} className="text-secondary" />
                            Phase 5: n8n Workflow Automation &amp; AI Agent Integration
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Recognizing the structural limitations and high cost of WordPress-native automation plugins for advanced workflows, I transitioned the architecture to <span className="font-semibold text-foreground">n8n</span> for scalable, low-code orchestration.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                            <div className="glass-card p-4 space-y-1.5 border border-glass-border/60 bg-black/20">
                                <div className="flex items-center gap-2 text-primary">
                                    <Bot size={16} />
                                    <h4 className="font-bold text-sm">LLM &amp; Memory</h4>
                                </div>
                                <p className="text-xs text-foreground/60 leading-relaxed">
                                    Configured an n8n AI Agent workflow featuring LLM integration and persistent conversation memory.
                                </p>
                            </div>

                            <div className="glass-card p-4 space-y-1.5 border border-glass-border/60 bg-black/20">
                                <div className="flex items-center gap-2 text-secondary">
                                    <Database size={16} />
                                    <h4 className="font-bold text-sm">Knowledge Base</h4>
                                </div>
                                <p className="text-xs text-foreground/60 leading-relaxed">
                                    Equipped the agent with custom tools containing structured FAQs, product specs, and inventory data for statica.in.
                                </p>
                            </div>

                            <div className="glass-card p-4 space-y-1.5 border border-glass-border/60 bg-black/20">
                                <div className="flex items-center gap-2 text-accent">
                                    <Zap size={16} />
                                    <h4 className="font-bold text-sm">Order Processing</h4>
                                </div>
                                <p className="text-xs text-foreground/60 leading-relaxed">
                                    Enabled users to query product availability, retrieve support info, and initiate order placements seamlessly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Project Handover & Conclusion */}
                    <div className="glass-card p-6 border border-primary/20 bg-primary/[0.02] rounded-2xl space-y-3 mt-12">
                        <h5 className="font-bold text-sm text-primary flex items-center gap-2">
                            <Users size={16} /> Project Handover &amp; Evolution
                        </h5>
                        <p className="text-xs text-foreground/75 leading-relaxed">
                            Following the successful execution and delivery of these updates, the platform owner expressed full satisfaction with the deliverables and requested my transition toward other advanced projects. Consequently, management of <a href="https://statica.in" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">statica.in</a> was handed over to other colleagues. As a result, certain features, layouts, or integrations may have evolved or changed since my tenure.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}