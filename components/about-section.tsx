"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import Image from "next/image"

export function AboutSection() {
  const refHeading = useScrollReveal(0)
  const refText = useScrollReveal(150)
  const refCard = useScrollReveal(300)
  const [showCert, setShowCert] = useState(false)

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">

        <div ref={refHeading} className="reveal mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
            01. About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div ref={refText} className="reveal lg:col-span-3 flex flex-col gap-5 text-muted-foreground leading-relaxed">
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

          <div ref={refCard} className="reveal lg:col-span-2">
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

              {/* View Certificate Button */}
              <button
                onClick={() => setShowCert(true)}
                className="mt-6 w-full rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                View Certificate
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Certificate Modal */}
      {showCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setShowCert(false)}
        >
          <div
            className="relative max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCert(false)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Certificate Image */}
            <Image
              src="/images/cert.JPG"
              alt="Huawei HCIA Cloud Computing Certificate"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}