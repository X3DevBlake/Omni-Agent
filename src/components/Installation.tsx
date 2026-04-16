import { useState } from "react";

const STEPS = [
  {
    number: 1,
    title: "Install",
    code: "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash",
    note: "Installs uv, Python 3.11, clones the repo, sets up everything. No sudo needed.",
    lang: "bash",
  },
  {
    number: 2,
    title: "Configure",
    code: `# Interactive setup wizard
hermes setup

# Or choose your model directly
hermes model`,
    note: "Connect to Nous Portal (OAuth), OpenRouter (API key), or your own endpoint.",
    lang: "bash",
  },
  {
    number: 3,
    title: "Start chatting",
    code: "hermes",
    note: "That's it. Full interactive CLI with tools, memory, and skills.",
    lang: "bash",
  },
  {
    number: 4,
    title: "Go multi-platform",
    code: `# Interactive gateway setup wizard
hermes gateway setup

# Start the messaging gateway
hermes gateway

# Install as a system service
hermes gateway install`,
    note: "Connect Telegram, Discord, Slack, or WhatsApp. Runs as a systemd service.",
    lang: "bash",
    optional: true,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const cleanText = text
      .split("\n")
      .filter((line) => !line.trim().startsWith("#"))
      .join("\n")
      .trim();
    await navigator.clipboard.writeText(cleanText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="copy-btn">
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function Installation() {
  return (
    <section id="install" className="relative z-10 py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get started in 60 seconds
          </h2>
          <p className="mt-4 text-lg text-text-dim">
            One command to install. One command to run.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="step-number">{step.number}</div>
                {step.number < STEPS.length && (
                  <div className="mt-3 flex-1 w-px bg-border" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                  {step.optional && (
                    <span className="ml-2 text-xs font-normal text-text-muted">
                      (optional)
                    </span>
                  )}
                </h3>
                <div className="code-block">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                    <span className="text-xs text-text-muted font-mono">
                      {step.lang}
                    </span>
                    <CopyButton text={step.code} />
                  </div>
                  <div className="px-4 py-3 overflow-x-auto">
                    <pre className="font-mono text-sm leading-7">
                      {step.code.split("\n").map((line, i) => (
                        <div key={i}>
                          {line.trim().startsWith("#") ? (
                            <span className="text-text-muted">{line}</span>
                          ) : line.trim() ? (
                            <span className="text-foreground">{line}</span>
                          ) : (
                            <br />
                          )}
                        </div>
                      ))}
                    </pre>
                  </div>
                </div>
                <p className="mt-2.5 text-sm text-text-muted">{step.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Windows note */}
        <div className="mt-10 rounded-xl border border-warning/20 bg-warning/5 px-5 py-4 text-sm text-text-dim">
          <strong className="text-warning font-medium">Windows:</strong> Native
          Windows is not supported. Please install{" "}
          <a
            href="https://learn.microsoft.com/en-us/windows/wsl/install"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light underline underline-offset-2 hover:text-primary"
          >
            WSL2
          </a>{" "}
          and run the command above.
        </div>
      </div>
    </section>
  );
}
