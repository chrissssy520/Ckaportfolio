"use client"

import { useState, type FormEvent } from "react"
import { Send, Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get in Touch
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            {"Have a project in mind or want to discuss data? I'd love to hear from you."}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-primary/30 bg-card p-12 text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Send className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Thanks for reaching out! I'll get back to you within 24 hours."}
                </p>
                <button
                  className="mt-6 text-sm text-primary hover:underline"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 lg:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Project inquiry"
                    className="rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or question..."
                    className="resize-none rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="size-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Direct
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:alex@example.com"
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="flex size-9 items-center justify-center rounded-md bg-secondary text-muted-foreground group-hover:text-primary transition-colors">
                    <Mail className="size-4" />
                  </div>
                  alex@example.com
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Profiles
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="flex size-9 items-center justify-center rounded-md bg-secondary text-muted-foreground group-hover:text-primary transition-colors">
                    <Github className="size-4" />
                  </div>
                  github.com/alexchen
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="flex size-9 items-center justify-center rounded-md bg-secondary text-muted-foreground group-hover:text-primary transition-colors">
                    <Linkedin className="size-4" />
                  </div>
                  linkedin.com/in/alexchen
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Availability
              </h3>
              <div className="flex items-center gap-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-sm text-foreground">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
