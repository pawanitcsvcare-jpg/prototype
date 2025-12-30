"use client"

import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartConfig = {
  total: {
    label: "Total",
    color: "#4a98e3",
  },
  sim: {
    label: "SIM",
    color: "#5cb0d8",
  },
  esim: {
    label: "eSIM",
    color: "#5dcdcc",
  },
} satisfies ChartConfig

type ChartItem = {
  status: string
  total: number
  sim: number
  esim: number
}

export function AssignStockReportChart({ data }: { data: ChartItem[] }) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[300px]">
      <BarChart data={data} barGap={8}>
        <CartesianGrid vertical={false} strokeOpacity={0.15} />

        <XAxis dataKey="status" tickLine={false} axisLine={false} />

        <ChartTooltip content={<ChartTooltipContent />} />

        <Bar dataKey="total" fill={chartConfig.total.color} radius={4}>
          <LabelList position="top" />
        </Bar>

        <Bar dataKey="sim" fill={chartConfig.sim.color} radius={4}>
          <LabelList position="top" />
        </Bar>

        <Bar dataKey="esim" fill={chartConfig.esim.color} radius={4}>
          <LabelList position="top" />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
