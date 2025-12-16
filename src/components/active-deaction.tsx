"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

// 🎨 Define colors for bars
const activation = ["#8493ff"]
const deactivation = ["#ffa565"]

const chartConfig = {
  activation: {
    label: "Activation",
    color: activation[0],
  },
  deactivation: {
    label: "Deactivation",
    color: deactivation[0],
  },
} satisfies ChartConfig

export function ChartActiveDeactive() {
  return (
    <div className="pt-0 w-full">
      <ChartContainer
        config={chartConfig}
        className="w-full h-[280px] md:h-[300px] lg:h-[300px]"
      >
        <BarChart data={chartData}>
          {/* Grid */}
          <CartesianGrid
            vertical={false}
            strokeOpacity={0.15}
          />

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
            content={<ChartTooltipContent indicator="dashed" />}
          />

          {/* Activation Bar */}
          <Bar
            dataKey="activation"
            fill={activation[0]}
            radius={4}
            background={{
              fill: "rgba(17,77,99,0.08)",
              radius: 4,
            }}
          />

          {/* Deactivation Bar */}
          <Bar
            dataKey="deactivation"
            fill={deactivation[0]}
            radius={4}
            background={{
              fill: "rgba(0,0,0,0.08)",
              radius: 4,
            }}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
