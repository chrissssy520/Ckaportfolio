"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Cloud, ShoppingBag, Camera, Code } from "lucide-react"

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    icon: Code,
    description:
      "Built simple landing pages and non-complex websites for various clients. Focused on clean design, responsive layouts, and user-friendly structure. Worked with basic front-end tools and handled minor revisions based on client feedback.",
    tags: ["Frontend Development", "Responsive Design", "UI/UX"],
  },
  {
    role: "Digital Marketplace Seller",
    company: "Self-Employed",
    period: "2018 - 2026",
    icon: ShoppingBag,
    description:
      "Managed an online reselling business specializing in in-game items, NFTs, digital goods, and premium software subscriptions. Sourced international deals through market research and resold to local buyers at competitive prices. Handled inventory tracking, pricing strategy, sales analytics.",
    tags: ["E-Commerce", "Sales Analytics", "Market Research"],
  },
  {
    role: "Cloud Computing Trainee",
    company: "Huawei (OJT)",
    period: "2020 - 2021",
    icon: Cloud,
    description:
      "Completed HCIA-Cloud Service certification with hands-on training in VM setup and cloud security. Collaborated remotely on cloud infrastructure projects and passed Huawei's official exam.",
    tags: ["Huawei Cloud", "VM Setup", "Cloud Security", "HCIA Certified"],
  },
  {
    role: "Freelance Photo & Video Editor",
    company: "Self-Employed",
    period: "2020 - 2022",
    icon: Camera,
    description:
      "Edited photos and created promotional videos for different clients using Canva, Photoshop, and Cap Cut. Delivered content mainly for social media and marketing use.",
    tags: ["Photoshop", "CapCut", "Canva", "Social Media"],
  },
]

export function ExperienceSection() {
  const refHeading = useScrollReveal(0)
  const refCard1 = useScrollReveal(0)
  const refCard2 = useScrollReveal(150)
  const refCard3 = useScrollReveal(300)
  const refCard4 = useScrollReveal(450)

  const cardRefs = [refCard1, refCard2, refCard3, refCard4]

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