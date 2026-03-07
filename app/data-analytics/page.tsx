"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Navbar } from "@/components/navbar"

export default function DataAnalyticsPage() {
  const refHeading = useScrollReveal(0)
  const refCard1 = useScrollReveal(0)
  const refCard2 = useScrollReveal(150)
  const refCard3 = useScrollReveal(300)
  const refCard4 = useScrollReveal(450)
  const refCard5 = useScrollReveal(600)

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen px-6 py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="mx-auto max-w-5xl">
          <div ref={refHeading} className="reveal">
            <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
              Projects
            </p>
            <h1 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
              Data Analytics Projects
            </h1>
          </div>

          <div className="flex flex-col gap-8">

            <div ref={refCard1} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA1.JPG" alt="McDonald's Sales Dashboard" className="w-full rounded-lg object-cover h-52" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">McDonald's Sales Dashboard 2022</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Sales & Performance Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      An interactive sales dashboard analyzing McDonald's 2022 performance across South America. Features KPI cards for sales, profit, and customer count, a monthly trend line chart, and a customer satisfaction radar chart.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={refCard2} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA2.JPG" alt="Customer Insights Dashboard" className="w-full rounded-lg object-cover h-52" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Customer Insights & Behavioral Dashboard</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Retail Behavioral Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A behavioral analytics dashboard for a retail store covering payment methods, shipping types, seasonal volume, and top/worst performing products. Includes gender profitability and geographic sales breakdown by US states.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel", "SQL"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={refCard3} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA3.JPG" alt="Customer Retail Purchase Data" className="w-full rounded-lg object-cover h-52" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Customer Retail Purchase Data 2023</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Retail Sales Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A retail analytics report covering ₱456K in total sales across Beauty, Clothing, and Electronics categories. Features dynamic filtering, AI-generated insights, monthly trend charts, and customer age group breakdown.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel", "SQL"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={refCard4} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA4.JPG" alt="Christian's Pizzeria Dashboard" className="w-full rounded-lg object-cover h-52" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">{"Christian's Pizzeria Dashboard"}</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Restaurant Sales & Revenue Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A comprehensive pizzeria dashboard tracking ₱18.11M in revenue, ₱8.29M net profit, and 19.59K total orders. Includes order time volume, pizza category breakdown, revenue targets, and top-selling product analysis.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={refCard5} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA5.JPG" alt="Christian Med Healthcare Dashboard" className="w-full rounded-lg object-cover h-52" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Christian Med Healthcare Dashboard</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Hospital Revenue & Appointment Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A healthcare analytics dashboard for a multi-branch hospital tracking 1,002 appointments and ₱2.75M in revenue. Covers payment methods, doctor specializations, treatment types, and monthly revenue trends across Central, Eastside, and Westside branches.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel", "SQL"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}