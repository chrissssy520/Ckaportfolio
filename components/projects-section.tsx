import Image from "next/image"
import { ExternalLink, Code2 } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            04. Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Academic Project
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground text-pretty">
            A featured project from my undergraduate studies showcasing full-stack development skills.
          </p>
        </div>

        {/* Featured project card */}
        <div className="rounded-lg border border-border bg-card overflow-hidden transition-colors hover:border-primary/30">
          <div className="relative aspect-video w-full overflow-hidden bg-secondary">
            <Image
              src="/images/project-hotel-system.jpg"
              alt="Hotel Reservation System with Virtual Tour"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/40" />
            <div className="absolute top-4 right-4">
              <span className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Lead Programmer
              </span>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-foreground lg:text-2xl">
              Hotel Reservation System with Virtual Tour
            </h3>
            <p className="mt-1 text-sm text-primary font-mono">
              Capstone / Thesis Project
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              A full-stack hotel reservation website featuring 360-degree virtual room tours,
              real-time booking management, secure payment processing, and a comprehensive admin
              dashboard. Built as a team capstone project where I served as Lead Programmer,
              handling the core architecture, database design, and front-end implementation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Virtual Tours",
                  detail: "360-degree interactive room previews for guests",
                },
                {
                  label: "Booking Engine",
                  detail: "Real-time availability and reservation management",
                },
                {
                  label: "Secure Payments",
                  detail: "Integrated payment gateway with transaction records",
                },
                {
                  label: "Admin Dashboard",
                  detail: "Complete back-office management and analytics",
                },
              ].map((feature) => (
                <div key={feature.label} className="rounded-md bg-secondary p-3">
                  <p className="text-sm font-medium text-foreground">
                    {feature.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
