"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

// -------------------- COLORS --------------------
const MMS = ["#8493ff"]
const SMS = ["#ffa565"]
const DATA = ["#e68bfa"]
const VOICE = ["#65c6f3"]

// -------------------- CONFIG --------------------
const chartConfig = {
  MMS: { label: "MMS", color: MMS[0] },
  SMS: { label: "SMS", color: SMS[0] },
  DATA: { label: "DATA", color: DATA[0] },
  VOICE: { label: "VOICE", color: VOICE[0] },
}

// -------------------- COMPONENT --------------------
export function ChartUsage() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[280px] md:h-[300px] lg:h-[300px]">
      <BarChart data={chartData} barGap={6}>
        {/* Grid */}
        <CartesianGrid vertical={false} strokeOpacity={0.15} />

        {/* X Axis */}
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          }
        />

        {/* Tooltip */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />

        {/* Bars with background */}
        <Bar
          dataKey="SMS"
          fill={SMS[0]}
          radius={6}
          background={{ fill: "rgba(15,118,110,0.08)", radius: 6 }}
        />

        <Bar
          dataKey="MMS"
          fill={MMS[0]}
          radius={6}
          background={{ fill: "rgba(17,77,99,0.08)", radius: 6 }}
        />

        <Bar
          dataKey="DATA"
          fill={DATA[0]}
          radius={6}
          background={{ fill: "rgba(37,99,235,0.08)", radius: 6 }}
        />

        <Bar
          dataKey="VOICE"
          fill={VOICE[0]}
          radius={6}
          background={{ fill: "rgba(0,0,0,0.08)", radius: 6 }}
        />
      </BarChart>
    </ChartContainer>
  )
}
