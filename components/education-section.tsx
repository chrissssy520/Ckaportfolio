"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const refHeading = useScrollReveal(0)
  const refCard1 = useScrollReveal(150)
  const refCard2 = useScrollReveal(300)

  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div ref={refHeading} className="reveal mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            05. Education
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Education & Certifications"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Education card */}
          <div ref={refCard1} className="reveal rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  BS Information Technology
                </h3>
                <p className="text-sm text-primary">STI College Novaliches</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Graduated 2021
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Studied core IT concepts including database management, web development,
                  systems analysis, and networking. Completed a capstone project as Lead Programmer
                  for a hotel reservation system with virtual tour functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Certification card */}
          <div ref={refCard2} className="reveal rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Award className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Huawei HCIA Cloud Service
                </h3>
                <p className="text-sm text-primary">Huawei ICT Academy</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Certified 2021
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Industry-recognized certification in cloud computing fundamentals,
                  covering cloud architecture, deployment models, virtualization, storage,
                  and networking within the Huawei Cloud ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}