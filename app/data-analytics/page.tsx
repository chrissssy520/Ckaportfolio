"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Navbar } from "@/components/navbar"
import { useState } from "react"
import { X, Github } from "lucide-react"

// ─── SQL PROJECTS DATA ───────────────────────────────────────────────────────

const sqlProjects = [
  {
    id: 1,
    title: "SQL Sales Data Exploration",
    subtitle: "Aggregations · Window Functions · CTEs",
    description:
      "15 SQL queries from Basic to Advanced using a 500-row sales dataset. Covers total revenue by region, top products, sales rep rankings, running totals, LAG/LEAD analysis, and more.",
    tags: ["MySQL", "Window Functions", "CTEs", "RANK()", "LAG/LEAD"],
    score: "25/25",
    githubUrl: "https://github.com/chrissssy520/sql-sales-data-exploration",
    code: `-- ============================================================
--  SQL PRACTICE PORTFOLIO
--  Dataset: orders_raw (500 rows x 16 columns)
--  Author: Christian Kho Aler
--  Topics: Aggregations, Window Functions, CTEs, Subqueries
-- ============================================================

-- 🟢 BASIC ─────────────────────────────────────────────────

-- 1. Total revenue per region (high to low)
SELECT region, SUM(revenue) AS total_revenue
FROM orders_raw
GROUP BY region
ORDER BY total_revenue DESC;

-- 2. Top 5 products by total revenue
SELECT product_name, SUM(revenue) AS total_revenue
FROM orders_raw
GROUP BY product_name
ORDER BY total_revenue DESC
LIMIT 5;

-- 3. Count of orders per payment method
SELECT payment_method, COUNT(*) AS total
FROM orders_raw
GROUP BY payment_method
ORDER BY total DESC;

-- 4. Total number of orders in the dataset
SELECT COUNT(*) AS total_orders FROM orders_raw;

-- 5. Orders with discount greater than 20%
SELECT * FROM orders_raw WHERE discount > 0.2;

-- 🟡 INTERMEDIATE ──────────────────────────────────────────

-- 6. Average discount percentage per category
SELECT category, ROUND(AVG(discount) * 100, 0) AS discount_percentage
FROM orders_raw
GROUP BY category
ORDER BY discount_percentage DESC;

-- 7. Sales rep ranking by total revenue
SELECT
    sales_rep,
    SUM(revenue) AS total_revenue,
    RANK() OVER (ORDER BY SUM(revenue) DESC) AS revenue_rank
FROM orders_raw
GROUP BY sales_rep
ORDER BY revenue_rank;

-- 8. Orders by status with percentage
SELECT
    order_status,
    COUNT(*) AS total,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) AS percentage
FROM orders_raw
GROUP BY order_status
ORDER BY total DESC;

-- 9. Category with the most profit
SELECT category, SUM(profit) AS total_profit
FROM orders_raw
GROUP BY category
ORDER BY total_profit DESC
LIMIT 1;

-- 10. Orders where revenue is above average
SELECT * FROM (
    SELECT order_id, revenue,
        ROUND(AVG(revenue) OVER(), 2) AS avg_revenue
    FROM orders_raw
) AS sub
WHERE revenue > avg_revenue;

-- 🔴 ADVANCED ──────────────────────────────────────────────

-- 11. Running total of revenue by date (cumulative)
SELECT
    order_date,
    SUM(revenue) AS daily_revenue,
    SUM(SUM(revenue)) OVER (ORDER BY order_date) AS running_total
FROM orders_raw
GROUP BY order_date
ORDER BY order_date;

-- 12. Rank products within each category by profit
WITH ranked AS (
    SELECT category, product_name, SUM(profit) AS total_profit,
        RANK() OVER (PARTITION BY category ORDER BY SUM(profit) DESC) AS profit_rank
    FROM orders_raw
    GROUP BY category, product_name
)
SELECT category, product_name, total_profit
FROM ranked WHERE profit_rank = 1
ORDER BY total_profit DESC;

-- 13. Average, fastest, slowest delivery per region
SELECT
    region,
    ROUND(AVG(DATEDIFF(delivery_date, order_date)), 0) AS avg_days,
    MIN(DATEDIFF(delivery_date, order_date)) AS fastest,
    MAX(DATEDIFF(delivery_date, order_date)) AS slowest
FROM orders_raw
WHERE order_status = 'Delivered'
GROUP BY region ORDER BY avg_days;

-- 14. Top sales rep per region by total revenue
WITH regional_sales AS (
    SELECT sales_rep, region, SUM(revenue) AS total_revenue,
        RANK() OVER (PARTITION BY region ORDER BY SUM(revenue) DESC) AS revenue_rank
    FROM orders_raw
    GROUP BY sales_rep, region
)
SELECT sales_rep, region, total_revenue
FROM regional_sales WHERE revenue_rank = 1
ORDER BY total_revenue DESC;

-- 15. Monthly revenue totals — best month ranking
WITH monthly AS (
    SELECT
        MONTH(order_date) AS month_num,
        MONTHNAME(order_date) AS month_name,
        SUM(revenue) AS total_revenue,
        RANK() OVER (ORDER BY SUM(revenue) DESC) AS revenue_rank
    FROM orders_raw
    GROUP BY month_num, month_name
)
SELECT month_name, total_revenue, revenue_rank
FROM monthly ORDER BY month_num;

-- ⭐ BONUS ─────────────────────────────────────────────────

-- Day over day revenue change (LAG)
WITH daily AS (
    SELECT order_date, SUM(revenue) AS daily_revenue
    FROM orders_raw GROUP BY order_date
)
SELECT
    order_date, daily_revenue,
    LAG(daily_revenue) OVER (ORDER BY order_date) AS yesterday_revenue,
    daily_revenue - LAG(daily_revenue) OVER (ORDER BY order_date) AS revenue_change
FROM daily ORDER BY order_date;`,
  },
  {
    id: 2,
    title: "Profit & Loss Analysis",
    subtitle: "CTEs · CASE WHEN · GROUP BY",
    description:
      "P&L statement analysis across multiple regions and financial years. Calculates Total Revenue, COGS, Gross Profit, and Net Profit using a clean CTE chain — with a Profitable/Loss status flag per region.",
    tags: ["MySQL", "CTEs", "CASE WHEN", "GROUP BY", "Aggregations"],
    score: null,
    githubUrl: "https://github.com/chrissssy520/Profit-LossSQL",
    code: `SELECT * FROM profit_loss;
-- ============================================
-- Profit & Loss Analysis by Region and Year
-- ============================================

WITH total AS (
    -- Aggregate actual figures into three P&L buckets:
    -- Revenue, Cost of Goods Sold, and Operating Expenses
    SELECT 
        Financial_year, 
        Region,
        ROUND(SUM(CASE WHEN Account_Group = "Revenue" THEN Actual ELSE 0 END), 2)             AS total_revenue,
        ROUND(SUM(CASE WHEN Account_Group = "Cost of Goods Sold" THEN Actual ELSE 0 END), 2)  AS total_cogs,
        ROUND(SUM(CASE WHEN Account_Group = "Expenses" THEN Actual ELSE 0 END), 2)            AS total_expenses
    FROM profit_loss
    GROUP BY Financial_year, Region
),

withGrossprofit AS (
    -- Gross Profit = Total Revenue - Cost of Goods Sold
    -- Measures profitability before operating expenses
    SELECT *,
        ROUND(total_revenue - total_cogs, 2) AS Gross_profit
    FROM total
),

withNetprofit AS (
    -- Net Profit = Gross Profit - Total Operating Expenses
    -- Represents the bottom line after all costs are deducted
    SELECT *,
        ROUND(Gross_profit - total_expenses, 2) AS Net_profit
    FROM withGrossprofit
)

-- Final output: Full P&L summary per Region and Financial Year
-- Status flags whether the business unit is Profitable or at a Loss
SELECT
    Region,
    Financial_year,
    total_revenue   AS Total_Revenue,
    total_cogs      AS Total_COGS,
    total_expenses  AS Total_Expenses,
    Gross_profit,
    Net_profit,
    CASE 
        WHEN Net_profit > 0 THEN "Profitable"
        ELSE "Loss" 
    END AS Status
FROM withNetprofit
ORDER BY Financial_year, Region;`,
  },
 {
    id: 3,
    title: "HR Employee Data Analysis",
    subtitle: "Window Functions · CTEs · Data Cleaning",
    description:
      "HR analytics on a 500-row employee dataset covering salary benchmarking, absence tracking, promotion rates, tenure, gender distribution, and a data quality fix using UPDATE with CASE WHEN.",
    tags: ["MySQL", "Window Functions", "CTEs", "DENSE_RANK()", "UPDATE"],
    score: null,
    githubUrl: "https://github.com/chrissssy520/HR-analysis-SQL",
    code: `-- ============================================
-- HR Employee Data Analysis
-- Author: Christian Kho Aler
-- Note: Raw dataset backed up as hr_employee_dataset_backup.csv
--       before any data modification was applied
-- ============================================

-- Largest Average Salary by Department and Position
SELECT DISTINCT department, position,
ROUND(AVG(salary)
OVER(PARTITION BY department),2) AS avg_salary
    FROM Hrdata
    ORDER BY avg_salary DESC;

-- Employees whose salary are higher than Average salary
SELECT employee_id, full_name, salary,
(SELECT ROUND(AVG(salary),2) FROM hrdata) as company_avg,
salary - (SELECT ROUND(AVG(salary),2) FROM hrdata) as salary_gap
FROM hrdata
WHERE salary > (SELECT AVG(salary) FROM hrdata)
ORDER BY salary DESC;

-- Total Number of Employee per Department
SELECT DISTINCT department,
    COUNT(*) OVER(PARTITION BY department) AS total_employee
    FROM Hrdata
    ORDER BY total_employee DESC;

-- Total Number of Employee per Position
SELECT DISTINCT position,
    COUNT(*) OVER(PARTITION BY position) AS total_employee
    FROM Hrdata
    ORDER BY total_employee DESC;

-- Rank 5 of Employees with Most Absences
WITH rank_absent AS (
SELECT DISTINCT Employee_id, Full_name, SUM(Absences) as total_absent,
        DENSE_RANK() OVER(ORDER BY SUM(Absences) DESC) AS rnk
        FROM hrdata
        GROUP BY full_name, employee_id
)
SELECT Employee_id, full_name, total_absent, rnk
    FROM rank_absent
    WHERE rnk <= 5;

-- Gender Comparison and Average Age
SELECT Gender, COUNT(*) as head_count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) AS head_percentage,
    ROUND(AVG(Age),2) as avg_age
FROM hrdata
GROUP BY gender;

-- Longest Tenured Employees
WITH rank_years as (
SELECT Employee_id, Full_name,
    MAX(years_at_Company) as max_years,
    DENSE_RANK() OVER(ORDER BY MAX(years_at_Company) DESC) as rnk
    FROM hrdata
    GROUP BY full_name, Employee_id
)
SELECT * FROM rank_years WHERE rnk = 1;

-- List of Employees with Low Satisfaction Rate
SELECT employee_id, full_name, Job_satisfaction
FROM hrdata
WHERE job_satisfaction < 3
ORDER BY job_satisfaction;

-- Fix Inconsistent Data: Job_satisfaction vs Performance_rating
SELECT employee_id, full_name, Job_satisfaction, Performance_rating,
    CASE WHEN Job_satisfaction >= 4 THEN "Outstanding"
         WHEN Job_satisfaction >= 3 THEN "Meets Expectations"
         ELSE "Disappointed" END AS suggested_rate
FROM hrdata
ORDER BY job_satisfaction;

SET SQL_SAFE_UPDATES = 0;
UPDATE hrdata
    SET Performance_rating =
        CASE WHEN Job_satisfaction >= 4 THEN "Outstanding"
             WHEN Job_satisfaction >= 3 THEN "Meets Expectations"
             ELSE "Disappointed" END;
SET SQL_SAFE_UPDATES = 1;

-- Inactive Employees (Resigned or Terminated)
SELECT * FROM hrdata
WHERE employment_status IN ("Terminated", "Resigned");

-- Employee Distribution per Region
SELECT region, COUNT(*) as total_region FROM hrdata
GROUP BY region
ORDER BY total_region DESC;

-- Employees Who Received the Most Promotions
WITH rank_promotion as (
SELECT employee_id, full_name,
    SUM(promotions) as total_promotion,
    DENSE_RANK() OVER(ORDER BY SUM(promotions) DESC) as rnk
    FROM hrdata
    GROUP BY employee_id, full_name
)
SELECT employee_id, full_name, total_promotion, rnk
FROM rank_promotion WHERE rnk = 1;

-- Promotion Rate per Department
SELECT department,
    COUNT(*) as total_employee,
    SUM(promotions) as total_promotion,
    ROUND(SUM(promotions) / COUNT(*) * 100, 2) AS promotion_rate_percentage
FROM hrdata
GROUP BY department
ORDER BY promotion_rate_percentage DESC;`,
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
  const refs = [ref1, ref2, ref3]

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

            {/* Philippine Sales Data Analysis */}
            <div ref={refCard6} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold lg:text-2xl">Philippine Sales Data Analysis</h3>

                {/* Updated: subtitle + big teal Download button on right */}
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="font-mono text-sm text-primary">Real-World Data Cleaning & Dashboard Analysis</p>
                  <a
                    href="/Sales1cka.xlsx"
                    download="Philippine_Sales_Analysis_CKA.xlsx"
                    className="shrink-0 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    ⬇ Download Project
                  </a>
                </div>

                <div className="mt-4 mb-4 grid grid-cols-3 gap-2">
                  {["Sales1.png", "Sales2.png", "Sales3.png"].map((img) => (
                    <img key={img} src={`/images/${img}`} alt={`Sales project screenshot ${img}`} className="h-44 w-full rounded-lg object-cover" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  A complete end-to-end data analytics project using a real-world messy Philippine sales dataset. Raw data containing inconsistent date formats, mixed letter casing, duplicate columns, and null values was cleaned using Power Query. Pivot Tables were then used to analyze product profitability, category performance, discount impact, delivery time, and top sales agents — with KPI cards linked via slicer for interactive regional filtering.
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

            {/* Customer Insights */}
            <div ref={refCard2} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA2.JPG" alt="Customer Insights Dashboard" className="w-full rounded-lg object-cover h-52" />
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

            {/* Customer Retail */}
            <div ref={refCard3} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA3.JPG" alt="Customer Retail Purchase Data" className="w-full rounded-lg object-cover h-52" />
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

            {/* Pizzeria */}
            <div ref={refCard4} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA4.JPG" alt="Christian's Pizzeria Dashboard" className="w-full rounded-lg object-cover h-52" />
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

            {/* Healthcare */}
            <div ref={refCard5} className="reveal overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <img src="/images/DA5.JPG" alt="Christian Med Healthcare Dashboard" className="w-full rounded-lg object-cover h-52" />
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