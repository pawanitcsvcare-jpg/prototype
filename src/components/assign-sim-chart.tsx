"use client"

import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "Used", sim: 186, esim: 80, total: 266 },
  { month: "Free", sim: 305, esim: 200, total: 505 },
  { month: "Reserved", sim: 237, esim: 120, total: 357 },
]

const chartConfig = {
  sim: {
    label: "SIM",
    color: "#4a98e3", // blue
  },
  esim: {
    label: "eSIM",
    color: "#5cb0d8", // green
  },
  total: {
    label: "Total",
    color: "#5dcdcc", // yellow
  },
} satisfies ChartConfig

export function AssignSimChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="w-full h-[280px] md:h-[300px] lg:h-[300px]"
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
          content={<ChartTooltipContent indicator="dashed" />}
        />

        {/* SIM */}
        <Bar
          dataKey="sim"
          fill={chartConfig.sim.color}
          radius={4}
          background={{ fill: "rgba(17,77,99,0.05)", radius: 8 }}
        >
          <LabelList
            dataKey="sim"
            position="top"
            className="text-xs font-semibold fill-foreground"
          />
        </Bar>

        {/* eSIM */}
        <Bar
          dataKey="esim"
          fill={chartConfig.esim.color}
          radius={4}
          background={{ fill: "rgba(17,77,99,0.08)", radius: 8 }}
        >
          <LabelList
            dataKey="esim"
            position="top"
            className="text-xs font-semibold fill-foreground"
          />
        </Bar>

        {/* Total */}
        <Bar
          dataKey="total"
          fill={chartConfig.total.color}
          radius={4}
          background={{ fill: "rgba(17,77,99,0.08)", radius: 8 }}
        >
          <LabelList
            dataKey="total"
            position="top"
            className="text-xs font-semibold fill-foreground"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
