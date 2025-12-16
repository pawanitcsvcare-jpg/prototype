"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,

} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "Dec-15-2025", activation: 186, deactivation: 80 },
  { month: "Dec-14-2025", activation: 305, deactivation: 200 },
  { month: "Dec-13-2025", activation: 237, deactivation: 120 },
  { month: "Dec-12-2025", activation: 73, deactivation: 190 },
  { month: "Dec-11-2025", activation: 209, deactivation: 130 },
  { month: "Dec-10-2025", activation: 214, deactivation: 140 },
]

const chartConfig = {
  activation: {
    label: "Activation",
    color: "var(--chart-3)",
  },
  deactivation: {
    label: "Deactivation",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartActiveDeactive() {
  return (
    <div className="pt-0">

  <ChartContainer
    config={chartConfig}
    className="w-full aspect-[12/2]" // 👈 responsive height based on width
  >
    <BarChart data={chartData}>
    <XAxis
  dataKey="month"
  tickLine={false}
  tickMargin={10}
  axisLine={false}
  tickFormatter={(value) =>
    new Date(value).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }
/>
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent indicator="dashed" />}
      />
      <Bar dataKey="activation" fill="var(--color-activation)" radius={4} />
      <Bar dataKey="deactivation" fill="var(--color-deactivation)" radius={4} />
    </BarChart>
  </ChartContainer>

    </div>
  )
}
