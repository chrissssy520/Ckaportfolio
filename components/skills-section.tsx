"use client"

import { Database, FileSpreadsheet, BarChart3, BrainCircuit, GitBranch, LineChart } from "lucide-react"

const skills = [
  {
    name: "Python",
    icon: BrainCircuit,
    level: 92,
    tools: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    description: "Data wrangling, statistical modeling, and machine learning pipelines.",
  },
  {
    name: "SQL",
    icon: Database,
    level: 95,
    tools: ["PostgreSQL", "MySQL", "BigQuery", "Window Functions", "CTEs"],
    description: "Complex queries, database design, and performance optimization.",
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    level: 88,
    tools: ["Power Query", "Pivot Tables", "VBA", "DAX", "Power BI"],
    description: "Advanced modeling, dashboards, and automated reporting workflows.",
  },
  {
    name: "Data Visualization",
    icon: BarChart3,
    level: 90,
    tools: ["Tableau", "Power BI", "Plotly", "D3.js"],
    description: "Interactive dashboards and compelling visual narratives.",
  },
  {
    name: "Statistics",
    icon: LineChart,
    level: 85,
    tools: ["Hypothesis Testing", "Regression", "A/B Testing", "Bayesian"],
    description: "Rigorous statistical analysis and experiment design.",
  },
  {
    name: "Version Control",
    icon: GitBranch,
    level: 80,
    tools: ["Git", "GitHub", "Jupyter", "Docker"],
    description: "Reproducible analysis workflows and collaborative development.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tools & Technologies
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            My core toolkit for extracting insights from data, building
            analytical pipelines, and communicating findings effectively.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <skill.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {skill.description}
              </p>

              {/* Proficiency bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-muted-foreground">Proficiency</span>
                  <span className="text-xs font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-secondary">
                  <div
                    className="h-1.5 rounded-full bg-primary transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tool}
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
