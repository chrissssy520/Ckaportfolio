export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            01. About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 flex flex-col gap-5 text-muted-foreground leading-relaxed">
            <p>
              {"I'm an IT graduate from STI College Novaliches with a strong interest in data analytics, business intelligence, and making sense of complex datasets. My goal is to help organizations make smarter, data-driven decisions."}
            </p>
            <p>
              {"With hands-on experience in advanced Excel modeling, SQL querying, and Power BI dashboards, I enjoy the process of transforming raw numbers into clear visual stories. I'm currently expanding my skills in DAX and AI-assisted analytical workflows."}
            </p>
            <p>
              {"Beyond data, I bring creative problem-solving from years of freelance photo and video editing, digital entrepreneurship, and cloud computing training with Huawei. I believe the best analysts combine technical rigor with strong communication and a genuine curiosity about the 'why' behind the numbers."}
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                Quick Facts
              </h3>
              <dl className="flex flex-col gap-4">
                {[
                  { label: "Name", value: "Christian Kho Aler" },
                  { label: "Role", value: "Aspiring Data Analyst" },
                  { label: "Degree", value: "BS Information Technology" },
                  { label: "Location", value: "Caloocan City, Manila" },
                  { label: "Certification", value: "Huawei HCIA Cloud Service" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <dt className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
