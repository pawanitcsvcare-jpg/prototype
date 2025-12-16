"use client"

import * as React from "react"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const activationData = [
  { date: "UNIDEMOT123", value: 150 },
  { date: "SDTPO123TEST", value: 180 },
  { date: "SILVERTL300625", value: 120 },
  { date: "TristanMobile", value: 260 },
  { date: "Infiniti", value: 290 },
  { date: "powermobile", value: 200 },
  { date: "Rivertel", value: 90 },
  { date: "AttLiveTestAbhi", value: 120 },
  { date: "AttLiveTest", value: 100 },
]

const deactivationData = [
  { date: "UNIDEMOT123", value: 100 },
  { date: "SDTPO123TEST", value: 180 },
  { date: "SILVERTL300625", value: 120 },
  { date: "TristanMobile", value: 260 },
  { date: "Infiniti", value: 290 },
  { date: "powermobile", value: 200 },
]

// Define colors for bars
const activationColors = ["#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63"]
const deactivationColors = ["#114d63", "#114d63", "#114d63", "#114d63", "#114d63", "#114d63"]

export function ChartActivationDeactivation() {
  const [selectedOption, setSelectedOption] = React.useState<"Activation" | "Deactivation">("Activation")

  const chartData = selectedOption === "Activation" ? activationData : deactivationData
  const barColors = selectedOption === "Activation" ? activationColors : deactivationColors

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="flex-1">
          <CardTitle>Activation and Deactivation Summary</CardTitle>
        </div>
        <select
          className="border rounded px-2 py-1"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value as "Activation" | "Deactivation")}
        >
          <option value="Activation">Activation</option>
          <option value="Deactivation">Deactivation</option>
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
