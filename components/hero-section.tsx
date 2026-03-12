"use client"

import { ArrowDown, MapPin, Github } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const roles = ["Data Analyst", "Web Developer", "Graphic Designer"]

export function HeroSection() {
  const [displayed, setDisplayed] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const refText = useScrollReveal(0)
  const refPhoto = useScrollReveal(200)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)
    } 
    else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } 
    else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 45)
    } 
    else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20">

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.030]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

        {/* TEXT */}
        <div ref={refText} className="reveal flex-1">

          <p className="mb-5 font-mono text-sm tracking-widest text-primary">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Christian Kho Aler
          </h1>

          <p className="mt-3 text-xl sm:text-2xl flex items-center gap-2 flex-wrap text-muted-foreground">
            Aspiring{" "}
            <span className="job-glow relative inline-flex items-center font-semibold">
              {displayed}

              <span
                className="ml-[2px] inline-block w-[2px] h-[1.1em] align-middle rounded-full"
                style={{
                  backgroundColor: "#00d4a8",
                  animation: "blink 0.75s step-end infinite",
                }}
              />
            </span>
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
            Turning data into decisions — one insight at a time.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            Caloocan City, Manila
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

       

            <a
              href="/AlerResumePDF.pdf"
              download="AlerResumePDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowDown className="size-4" />
              Download CV
            </a>

            <a
              href="https://github.com/chrissssy520"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="size-4" />
              GitHub
            </a>
                 <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>

          </div>
        </div>

        {/* PHOTO */}
        <div ref={refPhoto} className="reveal relative flex-shrink-0">

          <div className="absolute inset-0 rounded-full bg-primary opacity-25 blur-2xl scale-110" />

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

      {/* SCROLL ICON */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="size-5" />
      </a>

      <style>{`

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .job-glow {
          color: #00d4a8;
          filter: brightness(1.3);
          animation: jobGlow 2s ease-in-out infinite;
        }

        @keyframes jobGlow {
          0% {
            text-shadow:
              0 0 8px #00d4a8,
              0 0 20px #00d4a880,
              0 0 40px #00d4a840;
          }

          50% {
            text-shadow:
              0 0 16px #00d4a8,
              0 0 40px #00d4a8cc,
              0 0 80px #00d4a860,
              0 0 120px #00d4a830;
          }

          100% {
            text-shadow:
              0 0 8px #00d4a8,
              0 0 20px #00d4a880,
              0 0 40px #00d4a840;
          }
        }

      `}</style>

    </section>
  )
}