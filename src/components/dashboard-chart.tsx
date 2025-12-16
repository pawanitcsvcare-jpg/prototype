"use client"

import * as React from "react"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const activationData = [
  { date: "Dec-15-2025", value: 150 },
  { date: "Dec-14-2025", value: 180 },
  { date: "Dec-13-2025", value: 120 },
  { date: "Dec-12-2025", value: 260 },
  { date: "Dec-11-2025", value: 290 },
  { date: "Dec-10-2025", value: 200 },
  { date: "Dec-09-2025", value: 90 },
]

const deactivationData = [
  { date: "MMS", value: 100 },
  { date: "SMS", value: 180 },
  { date: "DATA", value: 120 },
  { date: "VOICE", value: 260 },

]

// Define colors for bars
const activationColors = ["#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63"]
const deactivationColors = ["#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63"]

export function LastSevenDays() {
  const [selectedOption, setSelectedOption] = React.useState<"Activation" | "Deactivation">("Activation")

  const chartData = selectedOption === "Activation" ? activationData : deactivationData
  const barColors = selectedOption === "Activation" ? activationColors : deactivationColors

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="flex-1">
          <CardTitle>Last 7 Days Activity and Usage Summary</CardTitle>
        </div>
        <select
          className="border rounded px-2 py-1"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value as "Activation" | "Deactivation")}
        >
          <option value="Activation">Activation and Deactivation</option>
          <option value="Deactivation">Usage</option>
        </select>
      </CardHeader>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="date" tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="value">
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
