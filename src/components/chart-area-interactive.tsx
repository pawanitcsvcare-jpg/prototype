"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useIsMobile } from "@/hooks/use-mobile"

/* ---------------- DATA (FROM IMAGE) ---------------- */

const activationData = [
  { label: "Today", value: 120 },
  { label: "Yesterday", value: 90 },
  { label: "Last 7 Days", value: 60 },
  { label: "Last 30 Days", value: 86 },
  { label: "Last 12 Months", value: 52 },
]

const usageData = [
  { label: "Voice", value: 65 },
  { label: "SMS", value: 88 },
  { label: "Data", value: 120 },
  { label: "MMS", value: 40 },
]

const msisdnData = [
  { label: "Active", value: 200 },
  { label: "Deactive", value: 320 },
  { label: "Suspend", value: 120 },
]

const deactivationData = [
  { label: "Today", value: 120 },
  { label: "Yesterday", value: 90 },
  { label: "Last 7 Days", value: 60 },
  { label: "Last 30 Days", value: 86 },
  { label: "Total Deactivation", value: 552 },
]

/* ---------------- CHART CONFIG ---------------- */

const chartConfig = {
  value: {
    label: "Count",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

/* ---------------- COMPONENT ---------------- */

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [tab, setTab] = React.useState("activation")

  React.useEffect(() => {
    if (isMobile) setTab("activation")
  }, [isMobile])

  const dataMap: Record<string, any[]> = {
    activation: activationData,
    usage: usageData,
    msisdn: msisdnData,
    deactivation: deactivationData,
  }

  const chartData = dataMap[tab]

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
        <CardDescription>
          {tab === "activation" && "Activation Status Summary"}
          {tab === "usage" && "Today's Usage Summary"}
          {tab === "msisdn" && "MSISDN Snapshot"}
          {tab === "deactivation" && "Deactivation"}
        </CardDescription>

        <CardAction>
          {/* Desktop Toggle */}
          <ToggleGroup
            type="single"
            value={tab}
            onValueChange={(v) => v && setTab(v)}
            variant="outline"
            className="hidden @[767px]/card:flex"
          >
            <ToggleGroupItem value="activation">
              Activation Status
            </ToggleGroupItem>
            <ToggleGroupItem value="usage">
              Today's Usage
            </ToggleGroupItem>
            <ToggleGroupItem value="msisdn">
              MSISDN Snapshot
            </ToggleGroupItem>
             <ToggleGroupItem value="deactivation">
              Deactivation
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Mobile Select */}
          <Select value={tab} onValueChange={setTab}>
            <SelectTrigger
              className="w-44 @[767px]/card:hidden"
              size="sm"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="activation">
                Activation Status
              </SelectItem>
              <SelectItem value="usage">
                Today's Usage
              </SelectItem>
              <SelectItem value="msisdn">
                MSISDN Snapshot
              </SelectItem>
              <SelectItem value="deactivation">
                Deactivation
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="h-[260px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.9} />
                <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis
  dataKey="label"
  tickLine={false}
  axisLine={false}
  tickMargin={10}
  padding={{ left: 20, right: 20 }}
/>

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />

            <Area
              dataKey="value"
              type="monotone"
              fill="url(#fillValue)"
              stroke="var(--color-value)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
