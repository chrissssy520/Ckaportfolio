"use client"

import {
  FileSpreadsheet,
  Database,
  BarChart3,
  Palette,
  Scissors,
  BrainCircuit,
  Code2,
  Search,
} from "lucide-react"

const skills = [
  {
    name: "Microsoft Excel",
    detail: "Advanced",
    icon: FileSpreadsheet,
    level: 95,
    tags: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Data Modeling", "Macros"],
  },
  {
    name: "Power Query",
    detail: "ETL & Data Cleaning",
    icon: Search,
    level: 85,
    tags: ["Data Transformation", "Merging", "Automation"],
  },
  {
    name: "SQL",
    detail: "Querying & Analysis",
    icon: Database,
    level: 80,
    tags: ["MySQL", "Joins", "Aggregation", "Subqueries"],
  },
  {
    name: "Power BI",
    detail: "Dashboards & DAX",
    icon: BarChart3,
    level: 75,
    tags: ["Visualizations", "DAX (Learning)", "Data Modeling"],
  },
  {
    name: "AI-Assisted Workflows",
    detail: "Productivity",
    icon: BrainCircuit,
    level: 80,
    tags: ["Prompt Engineering", "Automation", "ChatGPT / Copilot"],
  },
  {
    name: "Canva & CapCut",
    detail: "Visual Content",
    icon: Palette,
    level: 90,
    tags: ["Graphic Design", "Video Editing", "Social Media"],
  },
  {
    name: "Vibe Coding",
    detail: "Rapid Prototyping",
    icon: Code2,
    level: 70,
    tags: ["AI-Assisted Dev", "Web Prototypes", "No-Code/Low-Code"],
  },
  {
    name: "Photo & Video Editing",
    detail: "Creative Production",
    icon: Scissors,
    level: 92,
    tags: ["Lightroom", "Premiere Pro", "Color Grading"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            02. Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tools & Technologies
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground text-pretty">
            My core toolkit for data analysis, visualization, and creative content production.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <skill.icon className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{skill.detail}</p>
                </div>
              </div>

              {/* Proficiency bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-muted-foreground">Proficiency</span>
                  <span className="text-[11px] font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-secondary">
                  <div
                    className="h-1 rounded-full bg-primary transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
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
