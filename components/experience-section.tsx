"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Briefcase, Cloud, ShoppingBag, Camera } from "lucide-react"

const experiences = [
  {
    role: "Freelance Photo & Video Editor",
    company: "Self-Employed",
    period: "2020 - Present",
    icon: Camera,
    description:
      "Provide professional photo and video editing services for clients across social media, events, and brand content. Skilled in color grading, motion graphics, and fast turnaround under tight deadlines.",
    tags: ["Lightroom", "Premiere Pro", "CapCut", "Canva"],
  },
  {
    role: "Digital Marketplace Seller",
    company: "Self-Employed",
    period: "2018 - Present",
    icon: ShoppingBag,
    description:
      "Manage an online store across multiple digital marketplaces. Handle inventory tracking, sales analytics, customer engagement, and product photography to optimize listings and drive consistent revenue.",
    tags: ["E-Commerce", "Sales Analytics", "Product Photography"],
  },
  {
    role: "Cloud Computing Trainee",
    company: "Huawei ICT Academy",
    period: "2020 - 2021",
    icon: Cloud,
    description:
      "Completed intensive training in cloud architecture and services under the Huawei HCIA program. Gained hands-on experience with cloud deployment, networking fundamentals, and virtualization technologies.",
    tags: ["Huawei Cloud", "Networking", "Virtualization", "HCIA Certified"],
  },
]

export function ExperienceSection() {
  const refHeading = useScrollReveal(0)
  const refCard1 = useScrollReveal(0)
  const refCard2 = useScrollReveal(150)
  const refCard3 = useScrollReveal(300)

  const cardRefs = [refCard1, refCard2, refCard3]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div ref={refHeading} className="reveal mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            03. Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-border md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div key={exp.role} ref={cardRefs[index]} className="reveal group relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary group-hover:border-primary/50 transition-colors">
                    <exp.icon className="size-4" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-lg border border-border bg-card p-6 transition-colors group-hover:border-primary/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 