"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Navbar } from "@/components/navbar"
import { useState } from "react"
import { X, Github, BarChart2 } from "lucide-react"

// ─── SQL PROJECTS DATA ───────────────────────────────────────────────────────

const sqlProjects = [
  {
    id: 4,
    title: "Car Rental Analysis",
    subtitle: "CTEs · Window Functions · Running Total",
    description:
      "15 SQL queries on a Philippine-based car and motorcycle rental dataset. Covers profitability ranking, most rented vehicles, color preference with percentage rate, monthly running total, and vehicle type breakdown.",
    tags: ["MySQL", "CTEs", "DENSE_RANK()", "Running Total", "Window Functions"],
    score: null,
    githubUrl: "https://github.com/chrissssy520/Car-Rental-Analysis-SQL",
    code: `-- CAR RENTAL SQL ANALYSIS by Christian Kho Aler

-- Top 10 profitable vehicle
WITH rank_car AS (
SELECT
    c.make, c.model,
    SUM(r.total_amount) as total_profit,
    DENSE_RANK() OVER(ORDER BY SUM(r.total_amount) DESC) as rnk
    FROM cars c JOIN rentals r ON r.car_id = c.car_id
    WHERE r.payment_status = "Paid"
    GROUP BY c.make, c.model
)
SELECT * FROM rank_car WHERE rnk <= 10;

-- Top 10 least profitable vehicle
WITH rank_car AS (
SELECT
    c.make, c.model,
    SUM(r.total_amount) as total_profit,
    DENSE_RANK() OVER(ORDER BY SUM(r.total_amount) ASC) as rnk
    FROM cars c JOIN rentals r ON r.car_id = c.car_id
    WHERE r.payment_status = "Paid"
    GROUP BY c.make, c.model
)
SELECT * FROM rank_car WHERE rnk <= 10;

-- Most Rented Vehicle
WITH rank_car AS (
SELECT
    c.make, c.model,
    COUNT(*) as total_rent,
    DENSE_RANK() OVER(ORDER BY COUNT(*) DESC) as rnk
    FROM cars c JOIN rentals r ON r.car_id = c.car_id
    WHERE r.payment_status = "Paid"
    GROUP BY c.make, c.model
)
SELECT * FROM rank_car WHERE rnk <= 10;

-- Vehicle type Total Rent
SELECT c.vehicle_type, COUNT(*) as total_type
    FROM cars c JOIN rentals r ON c.car_id = r.car_id
    GROUP BY c.vehicle_type;

-- Average rental days per vehicle
SELECT c.make, c.model,
    ROUND(AVG(rental_days),2) as avg_rental_days
    FROM cars c JOIN rentals r ON c.car_id = r.car_id
    GROUP BY c.make, c.model
    ORDER BY avg_rental_days DESC;

-- Customers who rent multiple times
SELECT customer_name, COUNT(*) as total_rent
    FROM rentals
    GROUP BY customer_name
    HAVING total_rent > 1
    ORDER BY total_rent DESC;

-- Color preference per model with percentage rate
SELECT c.make, c.model, c.color,
    COUNT(color) as total_colors,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM rentals r),2) as percent_rate
    FROM cars c JOIN rentals r ON c.car_id = r.car_id
    GROUP BY c.make, c.model, c.color
    ORDER BY total_colors DESC;

-- Top 3 Color preference with percentage rate
SELECT c.color, COUNT(*) as total_color,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM rentals r),2) as percentage_rate
    FROM cars c JOIN rentals r ON c.car_id = r.car_id
    GROUP BY c.color
    ORDER BY total_color DESC LIMIT 3;

-- Profit Running total per year
SELECT
    YEAR(end_date) AS year_profit,
    MONTH(end_date) AS monthly_profit,
    SUM(total_amount) AS monthly_total,
    SUM(SUM(total_amount)) OVER (
        PARTITION BY YEAR(end_date)
        ORDER BY MONTH(end_date)
    ) AS running_total
FROM rentals
WHERE payment_status = "Paid"
GROUP BY year_profit, monthly_profit
ORDER BY year_profit, monthly_profit;`,
  },
  {
    id: 5,
    title: "Grocery Sales Analysis",
    subtitle: "CTEs · RANK() · Percentage Calculations",
    description:
      "13 SQL queries on a Philippine supermarket dataset covering branch performance, product profitability, color preferences, payment method breakdown, gender analysis, and most profitable product per branch using PARTITION BY.",
    tags: ["MySQL", "CTEs", "RANK()", "PARTITION BY", "Window Functions"],
    score: null,
    githubUrl: "https://github.com/chrissssy520/Grocery-Sales-Analysis-SQL",
    code: `-- Grocery Data Analysis by Christian Kho Aler

-- Most popular branch with percentage rate
SELECT branch,
    COUNT(*) as sales_per_branch,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(),2) as percent_branch
    FROM transactions
    GROUP BY branch
    ORDER BY sales_per_branch DESC;

-- Most Used payment method with percentage rate
SELECT payment_method,
    COUNT(*) as total_payment_method,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(),2) AS percent_payment
    FROM transactions
    GROUP BY payment_method
    ORDER BY total_payment_method DESC;

-- Profitable to least products
SELECT p.product_id, p.product_name,
    SUM(total_amount) as total_profit
    FROM products p JOIN transactions t ON p.product_id = t.product_id
    GROUP BY product_id, p.product_name
    ORDER BY total_profit DESC;

-- Gender breakdown with percentage rate
SELECT gender, COUNT(*) total_gender,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(),2) as percent_gender
    FROM transactions
    GROUP BY gender
    ORDER BY total_gender DESC;

-- Monthly Running total (2023-2024)
SELECT
    YEAR(transaction_date) as year_trans,
    MONTH(transaction_date) as month_trans,
    SUM(SUM(total_amount)) OVER(
        PARTITION BY YEAR(transaction_date)
        ORDER BY MONTH(transaction_date) ASC
    ) running_total
    FROM transactions
    GROUP BY year_trans, month_trans
    ORDER BY year_trans, month_trans;

-- Most profitable product per branch
WITH rank_combo AS (
    SELECT t.branch, p.product_name,
        SUM(total_amount) as total_profit,
        RANK() OVER(PARTITION BY t.branch ORDER BY SUM(total_amount) DESC) as rnk
        FROM products p JOIN transactions t ON p.product_id = t.product_id
        GROUP BY t.branch, p.product_name
)
SELECT branch, product_name, total_profit
    FROM rank_combo WHERE rnk = 1
    ORDER BY total_profit DESC;

-- Most sold product per branch
WITH rank_combo AS (
    SELECT t.branch, p.product_name,
        SUM(quantity) as total_sales,
        RANK() OVER(PARTITION BY t.branch ORDER BY SUM(quantity) DESC) as rnk
        FROM products p JOIN transactions t ON p.product_id = t.product_id
        GROUP BY t.branch, p.product_name
)
SELECT branch, product_name, total_sales
    FROM rank_combo WHERE rnk = 1
    ORDER BY total_sales DESC;

-- Overall profit including all years
SELECT SUM(total_amount) as overall_profit FROM transactions;`,
  },
  {
    id: 6,
    title: "Data Cleaning: Messy Retail Dataset",
    subtitle: "UPDATE · CASE WHEN · Temp Tables · STR_TO_DATE",
    description:
      "A full SQL data cleaning project on a deliberately messy Philippine grocery dataset. Fixes mixed casing, wrong data types, NULL values, inconsistent gender and payment values, 4 mixed date formats, and duplicate rows using MySQL-safe temp table approach.",
    tags: ["MySQL", "Data Cleaning", "UPDATE", "CASE WHEN", "STR_TO_DATE"],
    score: null,
    githubUrl: "https://github.com/chrissssy520/Clean-Messy-data-using-SQL-",
    code: `-- DATA CLEANING PROJECT: Messy Retail Dataset
-- Author: Christian Kho Aler

-- Fix casing, spaces, and ensure price is numeric
UPDATE products
SET
    category = TRIM(LOWER(category)),
    brand = TRIM(UPPER(brand)),
    product_name = TRIM(LOWER(product_name)),
    price = CAST(price AS DECIMAL(10,2));

-- Handle missing product names
UPDATE products
SET product_name = 'unknown product'
WHERE product_name IS NULL OR product_name = '';

-- Remove Duplicate Products using Temp Table (MySQL Safe Way)
CREATE TEMPORARY TABLE keep_product_ids AS
SELECT MIN(product_id) as product_id
FROM products
GROUP BY product_name, brand, price;

DELETE FROM products
WHERE product_id NOT IN (SELECT product_id FROM keep_product_ids);
DROP TEMPORARY TABLE keep_product_ids;

-- Fix basic casing and trim spaces
UPDATE transactions
SET
    customer_name = TRIM(LOWER(customer_name)),
    customer_city = TRIM(customer_city),
    gender = TRIM(UPPER(gender)),
    payment_method = TRIM(UPPER(payment_method));

-- Standardize Gender values
UPDATE transactions
SET gender = CASE
    WHEN gender IN ('M', 'MALE', 'MAN') THEN 'Male'
    WHEN gender IN ('F', 'FEMALE', 'WOMAN', 'WOMEN') THEN 'Female'
    ELSE 'Unknown'
END;

-- Standardize Payment Method
UPDATE transactions
SET payment_method = CASE
    WHEN payment_method LIKE '%CREDIT%' THEN 'Credit Card'
    WHEN payment_method LIKE '%CASH%' THEN 'Cash'
    WHEN payment_method LIKE '%WALLET%' OR payment_method = 'GCASH' THEN 'Digital Wallet'
    ELSE payment_method
END;

-- Fix Mixed Date Formats
UPDATE transactions
SET transaction_date = CASE
    WHEN transaction_date LIKE '____/%/%' THEN STR_TO_DATE(transaction_date, '%Y/%m/%d')
    WHEN transaction_date LIKE '%/%/____' THEN STR_TO_DATE(transaction_date, '%m/%d/%Y')
    WHEN transaction_date LIKE '____-__-__' THEN STR_TO_DATE(transaction_date, '%Y-%m-%d')
    WHEN transaction_date LIKE '__-__-____' THEN STR_TO_DATE(transaction_date, '%d-%m-%Y')
    ELSE transaction_date
END;

-- Remove NULL/incomplete records
DELETE FROM transactions
WHERE quantity IS NULL OR total_amount IS NULL OR total_amount = 0;

-- Remove Duplicate Transactions using Temp Table
CREATE TEMPORARY TABLE keep_trans_ids AS
SELECT MIN(transaction_id) as transaction_id
FROM transactions
GROUP BY customer_name, product_id, transaction_date, total_amount;

DELETE FROM transactions
WHERE transaction_id NOT IN (SELECT transaction_id FROM keep_trans_ids);
DROP TEMPORARY TABLE keep_trans_ids;

-- Final Check
SELECT * FROM products LIMIT 10;
SELECT * FROM transactions LIMIT 10;`,
  },

]

// ─── SQL CODE MODAL ───────────────────────────────────────────────────────────

function SqlModal({ project, onClose }: { project: typeof sqlProjects[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-xl border border-primary/30 bg-[#0d1117] shadow-2xl shadow-primary/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h3 className="font-semibold text-foreground">{project.title}</h3>
            <p className="text-xs font-mono text-primary mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="size-3.5" />
              View on GitHub
            </a>
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          <pre className="text-sm leading-relaxed font-mono text-gray-300 whitespace-pre-wrap">
            {project.code.split("\n").map((line, i) => {
              if (line.trim().startsWith("--")) {
                const isSection = line.includes("────") || line.includes("====")
                const isEmoji = /[🟢🟡🔴⭐]/.test(line)
                return (
                  <span key={i} className={`block ${isSection || isEmoji ? "text-primary/70 font-semibold mt-4" : "text-gray-500"}`}>
                    {line}
                  </span>
                )
              }
              const keywords = ["SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY", "HAVING", "JOIN", "ON", "WITH", "AS", "LIMIT", "OVER", "PARTITION BY", "RANK", "SUM", "COUNT", "AVG", "MAX", "MIN", "ROUND", "LAG", "LEAD", "DISTINCT", "AND", "OR", "NOT", "IN", "NULL", "DESC", "ASC"]
              let highlighted = line
              keywords.forEach((kw) => {
                highlighted = highlighted.replace(new RegExp(`\\b${kw}\\b`, "g"), `__KW__${kw}__/KW__`)
              })
              const parts = highlighted.split(/(__KW__|__\/KW__)/)
              let inKw = false
              return (
                <span key={i} className="block">
                  {parts.map((part, j) => {
                    if (part === "__KW__") { inKw = true; return null }
                    if (part === "__/KW__") { inKw = false; return null }
                    return inKw
                      ? <span key={j} className="text-[#00d4a8] font-semibold">{part}</span>
                      : <span key={j}>{part}</span>
                  })}
                </span>
              )
            })}
          </pre>
        </div>
      </div>
    </div>
  )
}

// ─── SQL SECTION ──────────────────────────────────────────────────────────────

function SqlSection() {
  const [activeModal, setActiveModal] = useState<typeof sqlProjects[0] | null>(null)
  const ref1 = useScrollReveal(0)
  const ref2 = useScrollReveal(150)
  const ref3 = useScrollReveal(300)
  const ref4 = useScrollReveal(450)
  const ref5 = useScrollReveal(600)
  const ref6 = useScrollReveal(750)
  const refs = [ref1, ref2, ref3, ref4, ref5, ref6]

  return (
    <div className="mb-16">
      <div className="mb-8">
        <p className="font-mono text-sm tracking-widest uppercase text-primary mb-1">SQL</p>
        <h2 className="text-2xl font-bold tracking-tight">SQL Query Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Click <span className="text-primary font-medium">View Code</span> to preview the queries directly — no download needed.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sqlProjects.map((project, i) => (
          <div
            key={project.id}
            ref={refs[i]}
            className="reveal flex flex-col rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-foreground leading-snug">{project.title}</h3>
                <p className="mt-0.5 font-mono text-xs text-primary">{project.subtitle}</p>
              </div>
              {project.score && (
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                  {project.score} ✅
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={() => setActiveModal(project)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {"</>"} View Code
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-primary px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <SqlModal project={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function DataAnalyticsPage() {
  const refHeading = useScrollReveal(0)
  const refCard1 = useScrollReveal(150)
  const refCard2 = useScrollReveal(300)
  
  // Tableau Projects
  const refCard3 = useScrollReveal(450)
  const refCard4 = useScrollReveal(600)
  const refCard5 = useScrollReveal(750)
  
  // Power BI Projects
  const refCard6 = useScrollReveal(900)
  const refCard7 = useScrollReveal(1050)
  const refCard8 = useScrollReveal(1200)
  const refCard9 = useScrollReveal(1350)

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

          {/* Page Heading */}
          <div ref={refHeading} className="reveal">
            <p className="mb-2 font-mono text-sm tracking-widest uppercase text-primary">
              Projects
            </p>
            <h1 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
              Data Analytics Projects
            </h1>
          </div>

          {/* ─── SQL SECTION — TOP ─── */}
          <SqlSection />


          {/* ─── OTHER PROJECTS ─── */}
          <div className="flex flex-col gap-8">

      {/* ─── DASHBOARDS SECTION HEADER ─── */}
          <div className="mb-8 pt-8">
            <p className="font-mono text-sm tracking-widest uppercase text-primary mb-1">
              Visualizations
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Dashboard Projects
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore interactive dashboards built with <span className="text-primary font-medium">Tableau, Power BI, and Excel</span>.
            </p>
          </div>

            {/* TABLEAU: E-Commerce Dashboard */}
            <div ref={refCard3} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/tableau1.png" alt="E-Commerce Tableau Dashboard" className="w-full rounded-lg border border-border object-cover object-top h-52 lg:h-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">E-Commerce Sales & CLV Analysis</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Tableau • Revenue • Customer Lifetime Value</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      An interactive Tableau dashboard analyzing over ₱20.15M in revenue and ₱9.8M in profit across 1,009 orders. Tracks MoM revenue trends and evaluates Average Customer Lifetime Value (CLV) broken down by Philippine regions and major sales channels, including TikTok Shop, Lazada, Shopee, and Walk-in sales.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Tableau", "Data Visualization", "E-Commerce", "KPI Tracking"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a 
                        href="https://public.tableau.com/app/profile/christian.aler3008/viz/Ecom2_17786582479070/Main" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <BarChart2 className="size-4" />
                        View on Tableau Public
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TABLEAU: Logistics Dashboard */}
            <div ref={refCard4} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/tableau2.png" alt="Logistics Tableau Dashboard" className="w-full rounded-lg border border-border object-cover object-top h-52 lg:h-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Logistics & Delivery Performance</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Tableau • Supply Chain • Delivery Metrics</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A supply chain dashboard monitoring local logistics performance. Tracks critical KPIs like a 75.51% Delivery Rate, 50% On-Time Rate, and Average Delivery Days. Features courier failure rate comparisons (Ninja Van, J&T, LBC) and shipment status distribution analysis across major hubs in Manila, Cebu, and Davao.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Tableau", "Logistics", "Supply Chain", "Performance Analysis"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a 
                        href="https://public.tableau.com/app/profile/christian.aler3008/viz/Logistic_17759426054710/Dashboard1" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <BarChart2 className="size-4" />
                        View on Tableau Public
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TABLEAU: Production Analysis Dashboard */}
            <div ref={refCard5} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/tableau3.png" alt="Production Analysis Tableau Dashboard" className="w-full rounded-lg border border-border object-cover object-top h-52 lg:h-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Manufacturing Production Analysis</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Tableau • OEE • Defect Tracking</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A manufacturing performance dashboard focusing on Overall Equipment Effectiveness (OEE) currently sitting at 74.52%. Highlights downtime rates and defect rates across various machine types (CNC Lathe, Assembly, Stamping Press), and analyzes shift performance to prioritize actions on unplanned breakdowns.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Tableau", "Manufacturing", "OEE", "Defect Analysis"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a 
                        href="https://public.tableau.com/app/profile/christian.aler3008/viz/ProductionAnalysis_17766512791150/MainDashboard" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <BarChart2 className="size-4" />
                        View on Tableau Public
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Insights (Power BI) */}
            <div ref={refCard6} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA2.JPG" alt="Customer Insights Dashboard" className="w-full rounded-lg object-cover h-52 lg:h-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Customer Insights & Behavioral Dashboard</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Retail Behavioral Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A behavioral analytics dashboard for a retail store covering payment methods, shipping types, seasonal volume, and top/worst performing products. Includes gender profitability and geographic sales breakdown by US states.</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel", "SQL"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Retail (Power BI) */}
            <div ref={refCard7} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA3.JPG" alt="Customer Retail Purchase Data" className="w-full rounded-lg object-cover h-52 lg:h-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Customer Retail Purchase Data 2023</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Retail Sales Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A retail analytics report covering ₱456K in total sales across Beauty, Clothing, and Electronics categories. Features dynamic filtering, AI-generated insights, monthly trend charts, and customer age group breakdown.</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel", "SQL"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pizzeria (Power BI) */}
            <div ref={refCard8} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA4.JPG" alt="Christian's Pizzeria Dashboard" className="w-full rounded-lg object-cover h-52 lg:h-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">{"Christian's Pizzeria Dashboard"}</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Restaurant Sales & Revenue Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A comprehensive pizzeria dashboard tracking ₱18.11M in revenue, ₱8.29M net profit, and 19.59K total orders. Includes order time volume, pizza category breakdown, revenue targets, and top-selling product analysis.</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Power BI", "Power Query", "DAX", "Excel"].map((tag) => (
                        <span key={tag} className="rounded bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare (Power BI) */}
            <div ref={refCard9} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA5.JPG" alt="Christian Med Healthcare Dashboard" className="w-full rounded-lg object-cover h-52 lg:h-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold lg:text-2xl">Christian Med Healthcare Dashboard</h3>
                    <p className="mt-1 font-mono text-sm text-primary">Hospital Revenue & Appointment Analysis</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A healthcare analytics dashboard for a multi-branch hospital tracking 1,002 appointments and ₱2.75M in revenue. Covers payment methods, doctor specializations, treatment types, and monthly revenue trends across Central, Eastside, and Westside branches.</p>
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