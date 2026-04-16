const MESSAGING = [
  { name: "Telegram", icon: "T" },
  { name: "Discord", icon: "D" },
  { name: "Slack", icon: "S" },
  { name: "WhatsApp", icon: "W" },
  { name: "Signal", icon: "Si" },
  { name: "Email", icon: "E" },
  { name: "CLI", icon: ">" },
];

const PROVIDERS = [
  "Nous Portal",
  "OpenRouter",
  "OpenAI",
  "Xiaomi MiMo",
  "z.ai / GLM",
  "Kimi / Moonshot",
  "MiniMax",
  "Hugging Face",
  "Any OpenAI-compatible API",
];

const ENVIRONMENTS = [
  { name: "Local", desc: "Run directly on your machine" },
  { name: "Docker", desc: "Container isolation out of the box" },
  { name: "SSH", desc: "Remote server over SSH" },
  { name: "Daytona", desc: "Serverless — hibernates when idle" },
  { name: "Modal", desc: "Serverless GPUs on demand" },
  { name: "Singularity", desc: "HPC cluster compatible" },
];

export default function Platforms() {
  return (
    <section id="platforms" className="relative z-10 py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Connects to everything
          </h2>
          <p className="mt-4 text-lg text-text-dim max-w-2xl mx-auto">
            Any messaging platform. Any model provider. Any infrastructure.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Messaging Platforms */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-light">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Messaging</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {MESSAGING.map((p) => (
                <div
                  key={p.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary-light">
                    {p.icon}
                  </span>
                  <span className="text-text-dim">{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Model Providers */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-light">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Model Providers</h3>
            </div>
            <div className="space-y-1.5">
              {PROVIDERS.map((provider) => (
                <div
                  key={provider}
                  className="flex items-center gap-2 text-sm text-text-dim"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {provider}
                </div>
              ))}
            </div>
          </div>

          {/* Environments */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-light">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Environments</h3>
            </div>
            <div className="space-y-3">
              {ENVIRONMENTS.map((env) => (
                <div key={env.name}>
                  <div className="text-sm font-medium text-foreground">
                    {env.name}
                  </div>
                  <div className="text-xs text-text-muted">{env.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
