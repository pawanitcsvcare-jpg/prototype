"use client"

import * as React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/* ---------------- DATA ---------------- */

const activationData = [
  { date: "UNIDEMOT", value: 150 },
  { date: "SDTPO123TEST", value: 180 },
  { date: "SILVER", value: 120 },
  { date: "TristanMobile", value: 260 },
  { date: "Infiniti", value: 290 },
  { date: "powermobile", value: 200 },
  { date: "Rivertel", value: 90 },
  { date: "AttLiveTestAbhi", value: 120 },
  { date: "AttLiveTest", value: 100 },
]

const deactivationData = [
  { date: "UNIDEMOT", value: 100 },
  { date: "SDTPO123", value: 180 },
  { date: "SILVERT", value: 120 },
  { date: "TristanMobile", value: 260 },
  { date: "Infiniti", value: 290 },
  { date: "powermobile", value: 200 },
]

/* ---------------- COLORS ---------------- */

const activationColors = ["#8493ff"]
const deactivationColors = ["#ffa565"]

/* ---------------- COMPONENT ---------------- */

export function ChartActivationDeactivation() {
  const [selectedOption, setSelectedOption] =
    React.useState<"Activation" | "Deactivation">("Activation")

  const chartData =
    selectedOption === "Activation"
      ? activationData
      : deactivationData

  const barColors =
    selectedOption === "Activation"
      ? activationColors
      : deactivationColors

  const backgroundColor =
    selectedOption === "Activation"
      ? "rgba(17,77,99,0.08)"
      : "rgba(17,77,99,0.08)"

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row py-3 !pb-3">
        <div className="flex-1">
          <CardTitle>Activation and Deactivation Summary</CardTitle>
        </div>

        {/* Dropdown */}
        <select
          className="border rounded px-2 py-1 text-sm"
          value={selectedOption}
          onChange={(e) =>
            setSelectedOption(
              e.target.value as "Activation" | "Deactivation"
            )
          }
        >
          <option value="Activation">Activation</option>
          <option value="Deactivation">Deactivation</option>
        </select>
      </CardHeader>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barGap={6}>
            {/* Grid */}
            <CartesianGrid
              vertical={false}
              strokeOpacity={0.08}
            />

            {/* X Axis */}
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              interval={0}
              tickMargin={10}
               tick={{ fontSize: 12, fill: "#737373", }}
            />

            {/* Tooltip */}
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />

            {/* Bar with background */}
            <Bar
              dataKey="value"
              radius={6}
              background={{
                fill: backgroundColor,
                radius: 6,
              }}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={barColors[index % barColors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
