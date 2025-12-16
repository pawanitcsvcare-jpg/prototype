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
} from "@/components/ui/chart"

export const description = "A bar chart"

// -------------------- DATA --------------------
const chartData = [
  { month: "Dec-15-2025", MMS: 186, SMS: 120, DATA: 90, VOICE: 60 },
  { month: "Dec-14-2025", MMS: 305, SMS: 210, DATA: 180, VOICE: 150 },
  { month: "Dec-13-2025", MMS: 237, SMS: 160, DATA: 140, VOICE: 100 },
  { month: "Dec-12-2025", MMS: 73, SMS: 50, DATA: 40, VOICE: 30 },
  { month: "Dec-11-2025", MMS: 209, SMS: 180, DATA: 130, VOICE: 90 },
  { month: "Dec-10-2025", MMS: 214, SMS: 150, DATA: 120, VOICE: 80 },
]

// -------------------- CONFIG --------------------
const chartConfig = {
  MMS: { label: "MMS", color: "var(--chart-3)" },
  SMS: { label: "SMS", color: "var(--chart-2)" },
  DATA: { label: "DATA", color: "var(--chart-3)" },
  VOICE: { label: "VOICE", color: "var(--chart-2)" },
}

// -------------------- COMPONENT --------------------
export function ChartUsage() {
  return (
    <ChartContainer config={chartConfig} className="w-full aspect-[12/2]">
      <BarChart data={chartData} barGap={6}>

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        {/* Render 4 bars */}
        <Bar dataKey="SMS" fill="var(--chart-3)" radius={6} />
        <Bar dataKey="MMS" fill="var(--chart-2)" radius={6} />
        <Bar dataKey="DATA" fill="var(--chart-3)" radius={6} />
        <Bar dataKey="VOICE" fill="var(--chart-2)" radius={6} />
      </BarChart>
    </ChartContainer>
  )
}
