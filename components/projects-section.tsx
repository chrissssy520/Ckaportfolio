import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Sales Analytics Dashboard",
    description:
      "Built an interactive dashboard analyzing $12M in annual revenue across 8 product lines. Identified seasonal patterns that led to a 15% improvement in inventory planning.",
    image: "/images/project-sales-dashboard.jpg",
    tags: ["Python", "Tableau", "PostgreSQL", "Pandas"],
    github: "#",
    live: "#",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a machine learning model predicting customer churn with 89% accuracy. Enabled the retention team to proactively target at-risk customers, reducing churn by 22%.",
    image: "/images/project-churn-analysis.jpg",
    tags: ["Python", "Scikit-learn", "SQL", "Matplotlib"],
    github: "#",
    live: "#",
  },
  {
    title: "Supply Chain Optimization",
    description:
      "Analyzed logistics data across 200+ warehouses to optimize delivery routes and inventory levels. Reduced shipping costs by 18% and improved on-time delivery rates.",
    image: "/images/project-supply-chain.jpg",
    tags: ["SQL", "Excel", "Power BI", "Python"],
    github: "#",
    live: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Selected Work
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            A curated selection of data analysis projects demonstrating
            end-to-end analytical workflows and measurable business impact.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group flex flex-col gap-8 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 lg:flex-row lg:p-8 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-secondary lg:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center lg:w-1/2">
                <h3 className="text-xl font-semibold text-foreground lg:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="size-4" />
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
