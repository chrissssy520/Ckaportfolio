import { ArrowDown, MapPin } from "lucide-react"
import Image from "next/image"

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

      <div className="relative z-10 mx-auto w-full max-w-5xl flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

        {/* Left: Text */}
        <div className="flex-1">
          <p className="mb-5 font-mono text-sm tracking-widest text-primary">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Christian Kho Aler
          </h1>

          <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
            Aspiring Data Analyst · IT Graduate
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
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>

           

            <a
     href="/AlerResumePDF.pdf"
  download="AlerResumePDF.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
>
  <ArrowDown className="size-4" />
  Download Resume
</a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="relative flex-shrink-0">
          
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-2xl scale-110" />

          {/* Border ring */}
          <div className="relative rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/50 to-transparent">
            <div className="rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary">
              <Image
                src="/images/1000001027.jpg"
                alt="Christian Kho Aler"
                width={384}
                height={384}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll button */}
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