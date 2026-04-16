import { useState } from "react";

const INSTALL_CMD =
  "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 flex flex-col items-center pt-32 pb-20 sm:pt-40 sm:pb-28 px-4">
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-text-dim">
        <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-success" />
        Open Source &middot; MIT License
      </div>

      {/* ASCII Art - Desktop Only */}
      <pre
        className="hero-ascii mb-8 text-center text-primary/30 leading-none select-none"
        aria-hidden="true"
        style={{ fontSize: "0.45rem", letterSpacing: "0.05em" }}
      >
{`  ██████╗ ███╗   ███╗███╗   ██╗██╗       █████╗  ██████╗ ███████╗███╗   ██╗████████╗
 ██╔═══██╗████╗ ████║████╗  ██║██║      ██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝
 ██║   ██║██╔████╔██║██╔██╗ ██║██║█████╗███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║
 ██║   ██║██║╚██╔╝██║██║╚██╗██║██║╚════╝██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║
 ╚██████╔╝██║ ╚═╝ ██║██║ ╚████║██║      ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║
  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝      ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝`}
      </pre>

      {/* Heading */}
      <h1 className="max-w-3xl text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        An agent that{" "}
        <span className="gradient-text">grows with you.</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-center text-lg text-text-dim sm:text-xl leading-relaxed">
        Not a chatbot wrapper. Not a coding copilot tethered to an IDE. It's an{" "}
        <strong className="text-foreground font-semibold">autonomous agent</strong> that
        lives on your server, remembers what it learns, builds its own skills,
        and gets more capable the longer it runs.
      </p>

      {/* Install Widget */}
      <div className="mt-10 w-full max-w-2xl">
        <div className="code-block">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
            </div>
            <span className="text-xs text-text-muted font-mono">
              Linux / macOS / WSL
            </span>
          </div>
          <div className="flex items-center gap-3 px-4 py-4 overflow-x-auto">
            <span className="text-success font-mono text-sm font-medium select-none">$</span>
            <code className="text-foreground font-mono text-sm whitespace-nowrap flex-1">
              {INSTALL_CMD}
            </code>
            <button onClick={handleCopy} className="copy-btn shrink-0">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-text-muted">
          Works on Linux, macOS & WSL2 &middot; No prerequisites &middot; Installs everything automatically
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://github.com/NousResearch/hermes-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
        <a
          href="#install"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/5 hover:border-border-hover transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
          Get Started
        </a>
      </div>
    </section>
  );
}
