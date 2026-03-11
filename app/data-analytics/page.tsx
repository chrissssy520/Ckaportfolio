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
  const refCard6 = useScrollReveal(750)

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

  {/* NEW: Philippine Sales Data Analysis - FIRST */}
  <div ref={refCard6} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
    <div className="p-6 lg:p-8">

      <h3 className="text-xl font-semibold lg:text-2xl">
        Philippine Sales Data Analysis
      </h3>

   <div className="mt-1 flex items-center gap-3">
  <p className="font-mono text-sm text-primary">
    Real-World Data Cleaning & Dashboard Analysis
  </p>
  
    <a href="/Sales1cka.xlsx"
    download="Philippine_Sales_Analysis_CKA.xlsx"
    className="inline-flex items-center gap-1.5 rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
  >
    ⬇ Download Project
  </a>
</div>

      <div className="mt-4 mb-4 grid grid-cols-3 gap-2">
        {["Sales1.png", "Sales2.png", "Sales3.png"].map((img) => (
          <img
            key={img}
            src={`/images/${img}`}
            alt={`Sales project screenshot ${img}`}
            className="h-44 w-full rounded-lg object-cover"
          />
        ))}
      </div>

      <p className="mt-4 leading-relaxed text-muted-foreground">
        A complete end-to-end data analytics project using a real-world messy Philippine sales dataset.
        Raw data containing inconsistent date formats, mixed letter casing, duplicate columns, and null values
        was cleaned using Power Query. Pivot Tables were then used to analyze product profitability,
        category performance, discount impact, delivery time, and top sales agents — with KPI cards
        linked via slicer for interactive regional filtering.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "💰 Total Sales", detail: "₱1,118,705 across all regions — Laptop is the top product at ₱291,600" },
          { label: "📦 Top Category", detail: "Electronics leads with 36 units sold and ₱604,600 in profit" },
          { label: "🏷️ Discount Impact", detail: "Clothing has the highest discount (12.78%) yet lowest profit — over-discounting hurts margins" },
          { label: "🚚 Delivery", detail: "Average delivery time is 6 days across all regions" },
          { label: "👤 Top Agent", detail: "Juan Dela Cruz leads sales with ₱429,300 in total revenue" },
          { label: "💳 Payment", detail: "Cash is the most popular payment method among customers" },
        ].map((item) => (
          <div key={item.label} className="rounded-md bg-secondary p-3">
            <p className="text-sm font-medium">{item.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {["Excel", "Power Query", "Pivot Table", "Data Cleaning", "KPI Dashboard"].map((tag) => (
          <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
        ))}
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