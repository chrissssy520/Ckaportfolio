"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { useState } from "react"

const categories = [
  {
    label: "Data & Analytics",
    skills: [
     { name: "Excel", img: "https://img.icons8.com/color/96/microsoft-excel-2019.png" },
{ name: "Microsoft Suite", img: "https://img.icons8.com/color/96/microsoft.png" },
      { name: "Power BI", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Tableau", img: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
  },
  {
    label: "Creative & Deployment",
    skills: [
      { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico", invert: true },
      { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
]

function SkillCard({ name, img, invert }: { name: string; img: string; invert?: boolean }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5">
      <div className="flex h-11 w-11 items-center justify-center">
        {imgFailed ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-[10px] font-bold text-primary">
            {name.slice(0, 2).toUpperCase()}
          </div>
        ) : (
          <img
            src={img}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 object-contain"
            style={invert ? { filter: "invert(1)" } : undefined}
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <span className="text-center text-[11px] font-medium leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  )
}

function CategoryBlock({
  label,
  skills,
}: {
  label: string
  skills: (typeof categories)[0]["skills"]
}) {
  const ref = useScrollReveal(0)

  return (
    <div ref={ref} className="reveal flex w-full flex-col items-center gap-4">
      <p className="self-start border-l-2 border-primary/40 pl-3 font-mono text-[11px] uppercase tracking-widest text-primary/60">
        {label}
      </p>
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  const refHeading = useScrollReveal(0)

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

        <div className="flex flex-col items-center gap-10">
          {categories.map((cat) => (
            <CategoryBlock key={cat.label} label={cat.label} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}