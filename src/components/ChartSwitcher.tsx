"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ChartActiveDeactive } from "@/components/active-deaction"
import { ChartUsage } from "@/components/usage-chart"

export function ChartSwitcher() {
  const [selectedChart, setSelectedChart] = React.useState("activity")

  return (
    <Card className="activedeclass pt-2">
      <CardHeader className="flex flex-row items-center justify-between bordernonee">
        <div>
          <CardTitle>Activity and Usage (Last 7 Days)</CardTitle>
        </div>

        {/* Dropdown */}
        <Select value={selectedChart} onValueChange={setSelectedChart}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Report" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="activity">Activity</SelectItem>
            <SelectItem value="usage">Usage</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        {selectedChart === "activity" && <ChartActiveDeactive />}
        {selectedChart === "usage" && <ChartUsage />}
      </CardContent>
    </Card>
  )
}
