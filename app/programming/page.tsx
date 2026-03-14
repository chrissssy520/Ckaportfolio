"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Navbar } from "@/components/navbar"

export default function ProgrammingPage() {
  const refHeading = useScrollReveal(0)
  const refCard1 = useScrollReveal(150)
  const refCard2 = useScrollReveal(300)

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen px-6 py-24">

        {/* Background grid */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,128,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,128,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="mx-auto max-w-5xl">

          <div ref={refHeading} className="reveal">
            <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
              Projects
            </p>

            <h1 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
              Programming Projects
            </h1>
          </div>

          <div className="flex flex-col gap-8">

            {/* ProStudio */}
            <div
              ref={refCard1}
              className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="p-6 lg:p-8">

                <h3 className="text-xl font-semibold lg:text-2xl">
                  Brainsells
                </h3>

                <p className="mt-1 font-mono text-sm text-primary">
                  Team Project Planner
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">

                  <a
                    href=" https://brainsells.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    Live Demo
                  </a>

                  <a
                    href=" https://brainsells.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground underline"
                  >
                    https://brainsells.vercel.app/
                  </a>

                </div>

                {/* Screenshots */}
                <div className="mt-4 mb-4 grid grid-cols-2 gap-2 lg:grid-cols-3">
                  {[
                    "brain1.png",
                    "brain2.png",
                    "brain3.png",
                    "brain4.png",
                    "brain5.png",
                    "brain6.png",
                 
                  ].map((pic) => (
                    <img
                      key={pic}
                      src={`/images/${pic}`}
                      alt={`Brainsells screenshot ${pic}`}
                      className="h-60 w-full rounded-lg object-cover"
                    />
                  ))}
                </div>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  A full-stack team project management web app with Firebase
                  authentication, real-time task tracking, and role-based admin
                  access. Built solo using modern tools, featuring a Kanban
                  board, team calendar, costing tracker, and email notifications
                  via Resend API.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    {
                      label: "Dashboard",
                      detail:
                        "Real-time task stats — total, in progress, completed, and overdue",
                    },
                    {
                      label: "Kanban Board",
                      detail:
                        "Drag-and-drop task management per project with status tracking",
                    },
                    {
                      label: "Team Calendar",
                      detail:
                        "Shared calendar view for deadlines and team scheduling",
                    },
                    {
                      label: "Notifications",
                      detail:
                        "In-app and email notifications powered by Resend API",
                    },
                    {
                      label: "Costing Tracker",
                      detail:
                        "Per-project budget and cost breakdown for team leads",
                    },
                    {
                      label: "Firebase Auth",
                      detail:
                        "Secure admin login with Firebase authentication",
                    },
                  ].map((feature) => (
                    <div key={feature.label} className="rounded-md bg-secondary p-3">
                      <p className="text-sm font-medium">{feature.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {feature.detail}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">

                  {[
                    "Next.js",
                    "TypeScript",
                    "Firebase",
                    "Tailwind CSS",
                    "Shadcn/UI",
                    "Recharts",
                    "Resend",
                  ].map((tag) => (
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

            {/* Hotel System */}
            <div
              ref={refCard2}
              className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >

              <div className="p-6 lg:p-8">

                <h3 className="text-xl font-semibold lg:text-2xl">
                  Hotel Reservation System with Virtual Tour
                </h3>

                <p className="mt-1 font-mono text-sm text-primary">
                  Capstone / Thesis Project
                </p>

                <img
                  src="/images/thesis.png"
                  alt="Hotel Reservation System"
                  className="mt-4 mb-4 h-[480px] w-full rounded-lg object-cover"
                />  <img
                  src="/images/thesis1.png"
                  alt="Hotel Reservation System"
                  className="mt-4 mb-4 h-[480px] w-full rounded-lg object-cover"
                />

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  A full-stack hotel reservation website featuring 360-degree
                  virtual room tours, real-time booking management, secure
                  payment processing, and a comprehensive admin dashboard.
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
                      <p className="text-sm font-medium">{feature.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
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
        </div>

      </main>
    </>
  )
}