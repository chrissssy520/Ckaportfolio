"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import {
  FileSpreadsheet,
  Database,
  BarChart3,
  Palette,
  Languages,
  BrainCircuit,
  Code2,
  Search,
  MonitorSmartphone,
} from "lucide-react"

function getSkillLabel(level: number): string {
  if (level <= 35) return "Beginner"
  if (level <= 65) return "Intermediate"
  return "Advanced"
}

const skills = [
    {
    name: "Microsoft Suite",
    detail: "Productivity Tools",
    icon: MonitorSmartphone,
    level: 75,
    tags: ["Word", "PowerPoint", "Outlook", "Teams"],
  },
  
  {
    name: "Microsoft Excel",
    detail: "Advanced",
    icon: FileSpreadsheet,
    level: 75,
    tags: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Data Modeling", "Macros"],
  },
  {
    name: "Power Query",
    detail: "ETL & Data Cleaning",
    icon: Search,
    level: 70,
    tags: ["Data Transformation", "Merging", "Automation"],
  },
  {
    name: "SQL",
    detail: "Querying & Analysis",
    icon: Database,
    level: 65,
    tags: ["MySQL", "Joins", "Aggregation", "Subqueries"],
  },
  {
    name: "Power BI/Tableau",
    detail: "Currently Learning",
    icon: BarChart3,
    level: 60,
    tags: ["Visualizations", "DAX (Learning)", "Data Modeling"],
  },
 
  {
    name: "Canva & CapCut",
    detail: "Visual Content",
    icon: Palette,
    level: 75,
    tags: ["Graphic Design", "Video Editing", "Social Media"],
  },
  {
    name: "Vibe Coding",
    detail: "Rapid Prototyping",
    icon: Code2,
    level: 65,
    tags: ["AI-Assisted Dev", "Web Prototypes"],
  },
  {
    name: "English Language",
    detail: "Communication",
    icon: Languages,
    level: 70,
    tags: ["Written", "Verbal", "Technical Writing"],
  },

]

export function SkillsSection() {
  const refHeading = useScrollReveal(0)
  const refCard1 = useScrollReveal(0)
  const refCard2 = useScrollReveal(75)
  const refCard3 = useScrollReveal(150)
  const refCard4 = useScrollReveal(225)
  const refCard5 = useScrollReveal(300)
  const refCard6 = useScrollReveal(375)
  const refCard7 = useScrollReveal(450)
  const refCard8 = useScrollReveal(525)
  const refCard9 = useScrollReveal(600)

  const cardRefs = [refCard1, refCard2, refCard3, refCard4, refCard5, refCard6, refCard7, refCard8, refCard9]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div ref={refHeading} className="reveal mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            02. Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tools & Technologies
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground text-pretty">
            My core toolkit for data analysis, visualization, and creative
            content production.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={cardRefs[index]}
              className="reveal group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <skill.icon className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {skill.detail}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">
                    {getSkillLabel(skill.level)}
                  </span>
                  <span className="text-xs font-medium text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[11px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}