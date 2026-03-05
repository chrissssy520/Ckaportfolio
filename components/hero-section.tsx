import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      {/* Decorative grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-mono text-sm tracking-widest uppercase text-primary">
          Data Analyst
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Alex Chen
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto text-pretty">
          I transform raw data into actionable insights. Specializing in
          statistical analysis, data visualization, and predictive modeling to
          drive data-informed decision making.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "20+", label: "Projects Delivered" },
            { value: "5M+", label: "Rows Analyzed" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to skills"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  )
}
