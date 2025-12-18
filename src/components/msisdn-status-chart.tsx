"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  Cell,
} from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

/* -------------------- COLORS -------------------- */
const New = ["#6fc86f"]
const Active = ["#5ea8e5"]
const Reserve = ["#737bcc"]
const Rejected = ["#e97172"]
const Fail = ["#e96061"]
const Pending = ["#ecbe6b"]
const Complete = ["#5ed39d"]

/* -------------------- DATA -------------------- */
const chartData = [
  { status: "New", value: 186, color: New[0] },
  { status: "Active", value: 305, color: Active[0] },
  { status: "Reserve", value: 237, color: Reserve[0] },
  { status: "Rejected", value: 73, color: Rejected[0] },
  { status: "Fail", value: 209, color: Fail[0] },
  { status: "Pending", value: 214, color: Pending[0] },
  { status: "Complete", value: 214, color: Complete[0] },
]

/* -------------------- CHART CONFIG -------------------- */
const chartConfig = {
  value: {
    label: "Count",
  },
}

export function ChartMSISDNStatus() {
  return (
    <Card className="mb-4">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="w-full h-[280px] md:h-[328px] lg:h-[280px]"
        >
          <BarChart
            data={chartData}
            barSize={120}  
            margin={{ top: 20 }}
          >
            <CartesianGrid vertical={false} strokeOpacity={0.15} />

            <XAxis
              dataKey="status"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <Bar dataKey="value" radius={8}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}

              <LabelList
                dataKey="value"
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
