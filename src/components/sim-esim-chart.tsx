"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Cell, LabelList } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart"

type Props = {
  service: "sim" | "esim"
}

/* SIM Data */
const simData = [
  { month: "Stock", desktop: 223, color: "#5c5cd4" },
  { month: "Assigned", desktop: 111, color: "#59a059" },
  { month: "Not Assigned", desktop: 52, color: "#d45b5b" },
  { month: "Reserved", desktop: 61, color: "#cd9a43" },
]

/* eSIM Data */
const esimData = [
  { month: "Stock", desktop: 120, color: "#6366f1" },
  { month: "Assigned", desktop: 88, color: "#22c55e" },
  { month: "Not Assigned", desktop: 30, color: "#ef4444" },
  { month: "Reserved", desktop: 42, color: "#f59e0b" },
]

const chartConfig = {
  desktop: {
    label: "Count",
  },
} satisfies ChartConfig

export function SIMeSIMChart({ service }: Props) {
  const chartData = service === "sim" ? simData : esimData

  return (
    <ChartContainer
      config={chartConfig}
      className="w-full h-[280px] md:h-[300px]"
    >
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} strokeOpacity={0.15} />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />

        <ChartTooltip
          cursor={{ fill: "rgba(0,0,0,0.05)" }}
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null
            const data = payload[0].payload

            return (
              <div className="rounded-md border bg-white px-3 py-2 shadow-md">
                <p className="text-sm font-medium" style={{ color: data.color }}>
                  {data.month}
                </p>
                <p className="text-xs text-muted-foreground">
                  Total: <span className="font-semibold">{data.desktop}</span>
                </p>
              </div>
            )
          }}
        />

        <Bar dataKey="desktop" radius={8}>
          <LabelList
            dataKey="desktop"
            position="top"
            offset={8}
            className="text-xs font-semibold fill-foreground"
          />
          {chartData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
