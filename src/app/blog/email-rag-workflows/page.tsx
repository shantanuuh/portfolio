import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  BookOpen,
  Cpu,
  ShieldAlert,
  Lock,
  Zap,
  Brain,
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
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Building an Enterprise AI Email Automation Pipeline | Shantanu Harkulkar",
  description:
    "An in-depth guide on designing automated customer support workflows using n8n Cloud, RAG knowledge retrieval, custom JavaScript formatting, and AI agents.",
};

function CodeBlock({ code, title, lang = "javascript" }: { code: string; title?: string; lang?: string }) {
  const langColor =
    lang === "javascript" ? "#f59e0b"   // amber for JS
      : lang === "plaintext" ? "#6366f1"  // indigo for prompt templates
        : "#007AFF";                         // blue fallback

  const langLabel =
    lang === "javascript" ? "JS"
      : lang === "plaintext" ? "PLAINTEXT"
        : lang.toUpperCase();

  return (
    <div className="space-y-0 my-4 rounded-xl overflow-hidden border border-white/[0.08] shadow-lg">
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08]"
        style={{ background: "#111318" }}
      >
        <div className="flex items-center gap-2">
          {/* Traffic light dots */}
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          {title && (
            <span className="ml-2 text-xs font-mono text-white/50 truncate">{title}</span>
          )}
        </div>
        <span
          className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase tracking-widest"
          style={{ background: `${langColor}22`, color: langColor, border: `1px solid ${langColor}44` }}
        >
          {langLabel}
        </span>
      </div>
      {/* Code body */}
      <pre
        className="overflow-x-auto text-xs font-mono leading-relaxed p-5"
        style={{
          background: "#0d0f14",
          color: "#e2e8f0",          /* always light — slate-200 */
          borderLeft: `3px solid ${langColor}`,
        }}
      >
        <code style={{ color: "inherit" }}>{code}</code>
      </pre>
    </div>
  );
}


export default function EmailRAGBlogPage() {
  const tags = ["n8n", "AI", "Automation", "JavaScript", "RAG", "n8n Cloud", "Portfolio"];

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
            <span>Technical Blog Post</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            AI Email Automation with{" "}
            <span className="text-gradient">n8n, RAG & LLMs</span>
          </h1>

          <p className="text-foreground/75 text-base sm:text-lg max-w-3xl leading-relaxed">
            How I built an automated customer support email pipeline using n8n Cloud, RAG, custom JavaScript, and a Mistral AI Agent.
          </p>

          {/* Post Meta */}
          <div className="flex flex-wrap gap-5 text-xs text-foreground/60 border-y border-glass-border/60 py-3">
            <span className="flex items-center gap-1.5 font-medium">
              <User size={13} className="text-primary" /> Shantanu Harkulkar
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar size={13} className="text-secondary" /> July 29, 2026
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Cpu size={13} className="text-accent" /> Statica.in Internship
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
              In modern web development and business operations, manually processing inbound lead inquiries and customer support emails is a huge operational bottleneck. To automate this seamlessly, I designed and deployed an <span className="font-semibold text-foreground">AI-Driven Customer Support Email Pipeline</span> using <span className="font-semibold text-foreground">n8n Cloud</span>, <span className="font-semibold text-foreground">Retrieval-Augmented Generation (RAG)</span>, custom <span className="font-semibold text-foreground">JavaScript data transformation</span>, and an <span className="font-semibold text-foreground">AI Agent (Mistral LLM)</span>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
              In this blog post, I&apos;ll walk through the architecture, setup process, custom prompts, and code nodes used to build this end-to-end system during my internship at <span className="font-semibold text-foreground">Statica.in</span>.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
              <Zap size={20} className="text-primary" />
              Tech Stack &amp; System Architecture
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="glass-card p-4 space-y-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block">Orchestration Engine</span>
                <p className="text-foreground/80 font-medium">n8n Cloud (Official Cloud Subscription)</p>
              </div>

              <div className="glass-card p-4 space-y-1">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider block">Email Triggers</span>
                <p className="text-foreground/80 font-medium">Gmail / IMAP Protocol</p>
              </div>

              <div className="glass-card p-4 space-y-1">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block">Logic &amp; Pre-processing</span>
                <p className="text-foreground/80 font-medium">JavaScript Code Nodes</p>
              </div>

              <div className="glass-card p-4 space-y-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block">AI Core</span>
                <p className="text-foreground/80 font-medium">AI Agent powered by Mistral Cloud Chat Model</p>
              </div>

              <div className="glass-card p-4 space-y-1">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider block">Knowledge Retrieval</span>
                <p className="text-foreground/80 font-medium">RAG Vector Store &amp; CSV Tools</p>
              </div>

              <div className="glass-card p-4 space-y-1">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block">Formatting &amp; Output</span>
                <p className="text-foreground/80 font-medium">HTML Output Generator with custom JSON sanitization</p>
              </div>
            </div>
          </section>


          {/* Step 2: Workflows & Pipeline Structure */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
              <Brain size={20} className="text-accent" />
              Workflow Architecture
            </h2>

            <p className="text-sm sm:text-base leading-relaxed">
              I developed two distinct workflow topologies in n8n: <span className="font-semibold text-foreground">Basic Email Automation</span> for routine email processing, and <span className="font-semibold text-foreground">Advanced Customer Support Email Automation</span> equipped with RAG memory, knowledge retrieval, and strict guardrails.
            </p>

            {/* A. Basic Email Automation */}
            <div className="space-y-4 pt-2 pl-4 border-l-2 border-primary/30">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                A. Basic Email Automation Workflow
              </h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                The basic email workflow listens for incoming emails via IMAP/Gmail trigger, cleans the input payload, and dispatches standardized transactional replies.
              </p>

              {/* Basic Image: image.png */}
              <div className="glass-card p-3 border border-glass-border rounded-xl bg-black/40 group space-y-2">
                <div className="relative rounded-lg overflow-hidden border border-glass-border/60">
                  <img
                    src="/email_automation/image.png"
                    alt="Basic Email Automation Workflow Diagram"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
                <p className="text-center text-xs text-foreground/50 italic font-mono">
                  Basic Email Automation Workflow Diagram in n8n
                </p>
              </div>
            </div>

            {/* B. Advanced Customer Support Email Automation */}
            <div className="space-y-4 pt-4 pl-4 border-l-2 border-secondary/30">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Sparkles size={18} className="text-secondary" />
                B. Advanced Customer Support Email Automation Workflow
              </h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                In this advanced architecture, the entry point was upgraded to a native <span className="font-semibold text-foreground">Gmail Trigger node</span> (connected via OAuth2 API to listen for live email events), feeding into an <span className="font-semibold text-foreground">AI Agent orchestrator</span> paired with a Mistral LLM, dynamic thread memory, and a RAG knowledge retrieval tool.
              </p>

              {/* Advanced Image: image2.png */}
              <div className="glass-card p-3 border border-glass-border rounded-xl bg-black/40 group space-y-2">
                <div className="relative rounded-lg overflow-hidden border border-glass-border/60">
                  <img
                    src="/email_automation/image2.png"
                    alt="Advanced RAG Powered Customer Support Workflow Diagram"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
                <p className="text-center text-xs text-foreground/50 italic font-mono">
                  Advanced RAG-Powered Customer Support Email Workflow Diagram
                </p>
              </div>
            </div>

            {/* C. RAG for Knowledge Source Integration */}
            <div className="space-y-4 pt-4 pl-4 border-l-2 border-accent/30">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Database size={18} className="text-accent" />
                C. RAG &amp; Knowledge Source Integration
              </h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                To prevent AI hallucinations, the agent connects directly to an AI Agent Tool Node (RAG for CSV/Docs). The agent strictly relies on database entries to retrieve company details (e.g., STATICA product lines, kit specifications).
              </p>

              {/* RAG Knowledge Source Image: image3.png */}
              <div className="glass-card p-3 border border-glass-border rounded-xl bg-black/40 group space-y-2">
                <div className="relative rounded-lg overflow-hidden border border-glass-border/60">
                  <img
                    src="/email_automation/image3.png"
                    alt="RAG for Knowledge Source Integration"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
                <p className="text-center text-xs text-foreground/50 italic font-mono">
                  RAG Knowledge Source &amp; CSV Tool Node Configuration
                </p>
              </div>

              {/* Sub-components Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card p-4 space-y-1.5 border border-glass-border/60 bg-black/20">
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles size={16} />
                    <h4 className="font-bold text-sm">Chat Model</h4>
                  </div>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    Connected to <span className="text-foreground font-medium">Mistral Cloud</span> LLM for email summarization, intent classification, and drafting.
                  </p>
                </div>

                <div className="glass-card p-4 space-y-1.5 border border-glass-border/60 bg-black/20">
                  <div className="flex items-center gap-2 text-primary">
                    <Layers size={16} />
                    <h4 className="font-bold text-sm">Memory</h4>
                  </div>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    Retains contextual memory across conversation threads when multi-turn email exchanges occur.
                  </p>
                </div>

                <div className="glass-card p-4 space-y-1.5 border border-glass-border/60 bg-black/20">
                  <div className="flex items-center gap-2 text-secondary">
                    <Database size={16} />
                    <h4 className="font-bold text-sm">RAG Tool</h4>
                  </div>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    Accesses external knowledge base tools (CSV product lists, FAQ spreadsheets) for grounded answers.
                  </p>
                </div>
              </div>

              {/* AI Agent Prompt Strategy Breakdown */}
              <div className="space-y-6 pt-4 border-t border-glass-border/40 pl-4 border-l-2 border-primary/20">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    AI Agent Prompt Strategy (Team Statica)
                  </h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    The AI Agent Prompt Strategy (Team Statica) defines how the AI model (e.g., Mistral Cloud Chat Model) behaves when processing raw incoming email snippets, interacting with RAG/CSV tools, and generating structured responses.
                  </p>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Depending on whether you are running a tool-only RAG lookup or the main email formatting workflow, the prompt strategy is split into two distinct roles:
                  </p>
                </div>

                {/* 1. Main Email Agent Prompt Strategy */}
                <div className="space-y-2 pl-3 border-l border-primary/30">
                  <h5 className="font-semibold text-sm text-primary flex items-center gap-2">
                    <Mail size={14} className="text-primary" />
                    <span>1. Main Email Agent Prompt Strategy</span>
                  </h5>
                  <p className="text-xs text-foreground/65 leading-relaxed">
                    This prompt instructs the AI model to act as a customer support representative for STATICA, incorporating incoming metadata and enforcing strict HTML output rules.
                  </p>
                  <CodeBlock
                    title="Prompt Template — Main Email Agent"
                    lang="plaintext"
                    code={`You are a professional support agent named "Team Statica".

You will respond to incoming emails on behalf of the owner.

Here is the email metadata:
From: {{$json["from"]}}
Subject: {{$json["subject"]}}
Date: {{$json["date"]}}

Email Body:
{{$json["aiPrompt"]}}

Reply in **HTML format only**.
Use <p>, <b>, <i>, and <br> for formatting.
Do not include JSON or plain text formatting.
Be concise, professional, and visually appealing.`}
                  />
                </div>

                {/* 2. Tool-Only RAG Prompt Strategy */}
                <div className="space-y-2 pl-3 border-l border-secondary/30">
                  <h5 className="font-semibold text-sm text-secondary flex items-center gap-2">
                    <Database size={14} className="text-secondary" />
                    <span>2. Tool-Only RAG Prompt Strategy (For CSV Knowledge Source)</span>
                  </h5>
                  <p className="text-xs text-foreground/65 leading-relaxed">
                    When the agent queries custom knowledge bases (such as product specs, balsa kit details, or static model catalogs), it uses a strict Tool-Only / Zero-Hallucination Strategy.
                  </p>
                  <CodeBlock
                    title="Prompt Template — Tool-Only RAG Strategy"
                    lang="plaintext"
                    code={`You are a tool-only AI agent.

You MUST generate answers ONLY by using the AI Agent Tool Node
and the tools connected to it, as they contain the required data.

Rules:
- Do NOT answer from internal knowledge or assumptions.
- Do NOT generate a final response without using at least one tool.
- If no connected tool returns relevant data, respond EXACTLY with:
"Sorry, I don’t know."

Output Requirements:
- Use the connected tools to retrieve data.
- Base the answer strictly on tool output.
- Keep the response professional, direct, and concise.
- Do not describe your capabilities or the tools themselves.
- Do not elaborate unless explicitly asked.

Failure Condition:
- If you cannot use a tool to answer, return: "Sorry, I don’t know."
- If tool execution fails, is skipped, returns an empty result set, or contains only null/blank values, you must not answer.
Return exactly: "Sorry, I don’t know."`}
                  />
                </div>

                {/* 3. JSON Formatter Output Guardrail Prompt Strategy */}
                <div className="space-y-2 pl-3 border-l border-accent/30">
                  <h5 className="font-semibold text-sm text-accent flex items-center gap-2">
                    <Code2 size={14} className="text-accent" />
                    <span>3. JSON Formatter Output Guardrail Prompt Strategy</span>
                  </h5>
                  <p className="text-xs text-foreground/65 leading-relaxed">
                    To make sure the output can be parsed programmatically by the post-processing JavaScript node, the agent is instructed to format its output into a strict JSON payload.
                  </p>
                  <CodeBlock
                    title="Prompt Template — JSON Formatter Guardrail"
                    lang="plaintext"
                    code={`You are a professional email formatter.

Input:
{{ $json.output }}

Task:
Convert the input into a customer-ready email.

Output rules:
- Return ONLY valid JSON
- Do NOT add explanations or extra text
- Subject must be a plain string
- Body must be valid HTML (use <p>, <br>, <b>, <ul>, <li>)
- Do NOT invent information

Output format:
{
  "subject": "string",
  "body": "HTML string"
}

Failure condition:
If the input is empty, unclear, or insufficient, return:
{
  "subject": "",
  "body": "<p>Sorry, I don’t know.</p>"
}`}
                  />
                </div>

                {/* Key Takeaways Cards */}
                <div className="glass-card p-5 border border-primary/20 bg-primary/[0.02] rounded-xl space-y-3 mt-4">
                  <h5 className="font-bold text-sm text-primary flex items-center gap-2">
                    <Key size={16} /> Key Takeaways of This Strategy
                  </h5>
                  <ul className="space-y-2 text-xs text-foreground/75 leading-relaxed">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Zero Hallucination:</strong> Forces the model to reply with &quot;Sorry, I don&apos;t know.&quot; whenever information isn&apos;t found in the RAG tool.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Clean Rendering:</strong> Restricts formatting strictly to standard HTML tags (<code className="bg-glass-border/50 px-1 rounded">&lt;p&gt;</code>, <code className="bg-glass-border/50 px-1 rounded">&lt;b&gt;</code>, <code className="bg-glass-border/50 px-1 rounded">&lt;ul&gt;</code>, etc.).</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Machine Readable:</strong> Outputs pure JSON objects so n8n&apos;s downstream nodes can easily parse subject and body values without breaking.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* D. Post-Processing & JSON Sanitization */}
            <div className="space-y-4 pt-4 pl-4 border-l-2 border-accent/30">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent" />
                D. Post-Processing &amp; JSON Sanitization Node
              </h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                Sometimes LLMs surround JSON outputs with Markdown block quotes (<code className="bg-glass-border/50 px-1 rounded text-xs font-mono">```json ... ```</code>). To ensure outbound emails render raw HTML properly without broken code blocks, I wrote a post-processing node:
              </p>

              <CodeBlock
                title="Post-Processing & JSON Sanitization Code"
                lang="javascript"
                code={`// Step 1: Extract raw output from the AI Agent node
const rawOutput = $input.first().json.output;

// Hard fallback if the AI output is completely empty
if (!rawOutput) {
  return [
    {
      json: {
        subject: "",
        body: "<p>Sorry, I don’t know.</p>"
      }
    }
  ];
}

// Step 2: Remove markdown code fences like \`\`\`json ... \`\`\` or \`\`\` ... \`\`\`
const cleaned = rawOutput
  .replace(/\`\`\`json/gi, "")
  .replace(/\`\`\`/g, "")
  .trim();

// Step 3: Parse cleaned string into a JSON object
let parsed;
try {
  parsed = JSON.parse(cleaned);
} catch (e) {
  throw new Error("AI output is not valid JSON after cleanup");
}

// Step 4: Safely extract subject & body properties
const subject = parsed.subject || "";
const body = parsed.body || "";

// Step 5: Fallback check if both subject and body are empty
if (!subject && !body) {
  return [
    {
      json: {
        subject: "",
        body: "<p>Sorry, I don’t know.</p>"
      }
    }
  ];
}

// Step 6: Return clean JSON ready for the Send Email node
return [
  {
    json: {
      subject,
      body
    }
  }
];`}
              />
            </div>

          </section>

          {/* Reference Documents */}
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold border-b border-glass-border pb-3 flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Documentation &amp; Reference Links
            </h2>
            <p className="text-sm leading-relaxed text-foreground/75">
              The original Google Docs used to plan and document this pipeline:
            </p>

            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://docs.google.com/document/d/1V04LXOfakcACgCy2PtnLXjNvazmEFekPauF8UbncLgo/edit?tab=t.k5bys9b07f82"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl border border-glass-border hover:border-primary/40 hover:bg-primary/[0.03] transition-all flex items-center justify-between group"
              >
                <div className="space-y-0.5">
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors flex items-center gap-2">
                    <span>Basic Email Automation</span>
                  </h4>
                  <p className="text-xs text-foreground/50">Google Doc — Basic Workflow</p>
                </div>
                <ExternalLink size={16} className="text-foreground/40 group-hover:text-primary transition-colors shrink-0" />
              </a>

              <a
                href="https://docs.google.com/document/d/1V04LXOfakcACgCy2PtnLXjNvazmEFekPauF8UbncLgo/edit?tab=t.xoan0k1o49ms#heading=h.njuunm18pgz8"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl border border-glass-border hover:border-secondary/40 hover:bg-secondary/[0.03] transition-all flex items-center justify-between group"
              >
                <div className="space-y-0.5">
                  <h4 className="font-semibold text-sm group-hover:text-secondary transition-colors flex items-center gap-2">
                    <span>Customer Support Email Automation &amp; RAG Knowledge Source</span>
                  </h4>
                  <p className="text-xs text-foreground/50">Google Doc — Advanced RAG Pipeline</p>
                </div>
                <ExternalLink size={16} className="text-foreground/40 group-hover:text-secondary transition-colors shrink-0" />
              </a>
            </div>
          </section>

          {/* Confidentiality Disclaimer */}
          <div className="glass-card p-6 border border-amber-500/20 bg-amber-500/[0.02] rounded-2xl space-y-3 mt-12">
            <div className="flex items-center gap-3 text-amber-500">
              <ShieldAlert size={20} className="shrink-0" />
              <h3 className="text-base font-bold">Confidentiality &amp; NDA Notice</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              This technical write-up documents architectural patterns developed during my internship at <span className="font-semibold text-foreground">Statica.in</span>. Proprietary API keys, live SMTP credentials, customer PII, and internal infrastructure parameters have been sanitized in compliance with non-disclosure obligations.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-foreground/50 border-t border-glass-border pt-2">
              <span className="flex items-center gap-1.5"><Lock size={12} /> Client Data Anonymized</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> Verified n8n Pipeline</span>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
