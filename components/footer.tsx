import { Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-mono text-sm text-primary">{"<CKA />"}</p>
          <p className="text-xs text-muted-foreground">
            {"Christian Kho Aler. Built with Next.js."}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:chan.aler02@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://sites.google.com/view/alerchristian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Portfolio"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
