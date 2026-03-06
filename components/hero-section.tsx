import { ArrowDown, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p className="mb-5 font-mono text-sm tracking-widest text-primary">
          {"Hello, I'm"}
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Christian Kho Aler
        </h1>

        <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
          Aspiring Data Analyst &middot; IT Graduate
        </p>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
          Turning data into decisions — one insight at a time.
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-3.5 text-primary" />
          Caloocan City, Manila
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  )
}
