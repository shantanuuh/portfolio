import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Lock, CheckCircle2, FileSpreadsheet, BrainCircuit } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "AI Chatbot Demonstration | Shantanu Harkulkar",
  description:
    "Demonstration of a Groq-powered AI chatbot with real-time Google Sheets context retrieval, deployed as part of the WhatsApp AI Automation project.",
};

export default function WhatsAppAIDemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Back Link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Demos</span>
        </Link>

        {/* Title Header */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
            <BrainCircuit size={14} />
            <span>Chatbot Demo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Demonstration Video for{" "}
            <span className="text-gradient">WhatsApp AI Automation</span>
          </h1>

          <p className="text-foreground/70 text-base sm:text-lg max-w-3xl leading-relaxed">
            A working demonstration of an AI-powered chatbot driven by{" "}
            <span className="font-semibold text-foreground">Groq API</span> with live context
            retrieved from a{" "}
            <span className="font-semibold text-foreground">Google Sheet</span>, enabling
            dynamic, data-aware conversational responses.
          </p>
        </div>

        {/* Video Player — IntersectionObserver Autoplay */}
        <div className="mb-12">
          <VideoPlayer
            src="/DE.mp4"
            title="Demonstration Video for WhatsApp AI Automation"
          />
        </div>

        {/* Privacy & NDA Disclaimer Card */}
        <div className="glass-card p-6 sm:p-8 border border-amber-500/20 bg-amber-500/[0.02] rounded-2xl space-y-4 mb-12">
          <div className="flex items-center gap-3 text-amber-500">
            <ShieldAlert size={22} className="shrink-0" />
            <h3 className="text-lg font-bold">Privacy &amp; Confidentiality Disclaimer</h3>
          </div>

          <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
            This recording demonstrates the AI response layer of the larger WhatsApp automation
            system — specifically, a{" "}
            <span className="font-semibold text-foreground">Groq-powered LLM</span> receiving
            structured data from a{" "}
            <span className="font-semibold text-foreground">Google Sheet</span> as conversational
            context, enabling it to respond intelligently to user queries in real time. The
            underlying production pipeline — including live{" "}
            <span className="font-semibold text-foreground">Meta Cloud API</span> webhook
            integration, <span className="font-semibold text-foreground">n8n</span> automation
            workflows, and production{" "}
            <span className="font-semibold text-foreground">SMTP pipelines</span> — was
            implemented for{" "}
            <span className="font-semibold text-foreground">Statica.in</span> as part of a
            professional internship engagement. Due to client data privacy obligations, proprietary
            API credentials, customer interaction records, and internal infrastructure
            configurations are bound by confidentiality and cannot be publicly disclosed or
            reproduced. This demonstration is therefore limited to a sanitized subset of the AI
            response module, executed in an isolated test environment with anonymized data.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-foreground/50 border-t border-glass-border">
            <span className="flex items-center gap-1.5">
              <Lock size={12} /> Client Data Anonymized
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-primary" /> Isolated Test Environment
            </span>
          </div>
        </div>

        {/* Tech Breakdown */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Tech Stack in This Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 space-y-2">
              <div className="flex items-center gap-2 text-primary mb-2">
                <BrainCircuit size={20} />
                <h4 className="font-bold text-base">Groq API (LLM Layer)</h4>
              </div>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Ultra-fast inference via Groq's LPU hardware, powering natural language
                understanding and response generation with low-latency chat completions.
              </p>
            </div>
            <div className="glass-card p-6 space-y-2">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <FileSpreadsheet size={20} />
                <h4 className="font-bold text-base">Google Sheets (Context Source)</h4>
              </div>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Structured product, FAQ, or operational data retrieved from Google Sheets
                and injected as dynamic context into the LLM's prompt, enabling accurate,
                data-grounded responses without a vector database.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
