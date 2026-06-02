import { Github, BarChart2, Facebook, ArrowRight, Download } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      
      {/* Section Header & Note */}
      <div className="mb-10">
        <p className="text-primary font-mono text-sm mb-2">04. PORTFOLIO</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl text-base">
          My portfolio is divided into three main categories. Select a dedicated section below to explore my recent work, case studies, and live demos.
        </p>
      </div>

      {/* Category Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
        
        <a href="/data-analytics" className="group flex flex-col p-6 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-300">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Data Analytics</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">
            Dashboards, SQL queries, Excel modeling, and data visualization case studies.
          </p>
          <div className="flex items-center text-primary text-sm font-medium mt-auto">
            View Analytics <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        <a href="/programming" className="group flex flex-col p-6 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-300">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Programming</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">
            Web applications, frontend development, and deployed technical projects.
          </p>
          <div className="flex items-center text-primary text-sm font-medium mt-auto">
            View Programming <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        <a href="/design" className="group flex flex-col p-6 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-300">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Design</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">
            Creative assets, photo/video editing, and brand identity projects.
          </p>
          <div className="flex items-center text-primary text-sm font-medium mt-auto">
            View Design <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

      </div>

      {/* External Links & Resume */}
      <div className="border-t border-border pt-10">
        <p className="text-sm text-muted-foreground mb-4">More places to find my work:</p>
        <div className="flex flex-wrap gap-4">
          
  


          {/* GitHub */}
          <a 
            href="https://github.com/chrissssy520" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-md hover:border-primary hover:text-primary transition-colors text-sm font-medium"
          >
            <Github size={16} />
            GitHub
          </a>

          {/* Tableau */}
          <a 
            href="https://public.tableau.com/app/profile/christian.aler3008/vizzes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-md hover:border-primary hover:text-primary transition-colors text-sm font-medium"
          >
            <BarChart2 size={16} />
            Tableau Public
          </a>

          {/* Facebook */}
          <a 
            href="https://web.facebook.com/chanaler02" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-md hover:border-primary hover:text-primary transition-colors text-sm font-medium"
          >
            <Facebook size={16} />
            Facebook Page
          </a>

        </div>
      </div>

    </section>
  )
}