"use client"

import * as React from "react"
import { useState } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconDownload, IconSearch } from "@tabler/icons-react"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TotalSimChart } from "@/components/total-sim-chart"
import { AssignSimChart } from "@/components/assign-sim-chart"
import { SIMeSIMChart } from "@/components/sim-esim-chart"
import { AssignStockReportChart } from "@/components/assigned-stock-report-chart"

const chartDataMap: Record<string, any[]> = {
    AttLiveTest: [
        { status: "Used", total: 29, sim: 27, esim: 2 },
        { status: "Free", total: 51, sim: 30, esim: 21 },
        { status: "Reserved", total: 40, sim: 30, esim: 10 },
    ],
    Rivertel: [
        { status: "Used", total: 20, sim: 15, esim: 5 },
        { status: "Free", total: 10, sim: 8, esim: 2 },
        { status: "Reserved", total: 15, sim: 9, esim: 6 },
    ],
    powermobile: [
        { status: "Used", total: 35, sim: 20, esim: 1 },
        { status: "Free", total: 15, sim: 10, esim: 5 },
        { status: "Reserved", total: 8, sim: 5, esim: 3 },
    ],
}

// -------------------- PAGE --------------------
export default function InventoryReportDashboard() {
    const [service, setService] = React.useState<"sim" | "esim">("sim")
    const [selectedReport, setSelectedReport] = useState("AttLiveTest")
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />

                <div className="flex flex-1 flex-col p-6">


                    <Card className="@container/card">
                        <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 py-5 sm:flex-row pt-6">
                            <CardTitle>Complete Stock Report</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">


                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Company</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Company" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="a">ABC Company</SelectItem>
                                            <SelectItem value="b">adminQAfinal company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Vendor / MVNO</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Choose Vendor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">Vendor 1</SelectItem>
                                            <SelectItem value="v2">Vendor 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>


                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Button type="submit" className="w-full md:w-auto">
                                        Submit
                                    </Button>
                                </div>
                            </form>


                            <div className="relative w-full overflow-x-auto">
                                <div className="grid gap-6 items-end py-6 pt-0 grid-cols-12">

                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <Card className="@container/card pt-4">
                                            <CardHeader className="border-b py-0 flex items-center gap-0 !pb-4 space-y-0 sm:flex-row pt-0">
                                                <CardTitle>Total SIM Service</CardTitle>
                                            </CardHeader>
                                            <CardContent className="px-0">
                                                <TotalSimChart />
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <Card className="@container/card pt-4">
                                            <CardHeader className="border-b py-0 flex items-center gap-0 !pb-4 space-y-0 sm:flex-row pt-0">
                                                <CardTitle>Assigned SIM Status</CardTitle>
                                            </CardHeader>
                                            <CardContent className="px-0">
                                                <AssignSimChart />
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <Card className="@container/card pt-2">
                                            <CardHeader className="border-b flex flex-row items-center justify-between !pb-2">
                                                <CardTitle>SIM / eSIM Service</CardTitle>

                                                {/* Dropdown */}
                                                <Select value={service} onValueChange={(value) => setService(value as any)}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select Service" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        <SelectItem value="sim">SIM Service</SelectItem>
                                                        <SelectItem value="esim">eSIM Service</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </CardHeader>

                                            <CardContent className="px-0">
                                                <SIMeSIMChart service={service} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="col-span-12 md:col-span-6">
                                        <Card className="pt-2">
                                            <CardHeader className="border-b flex flex-row items-center justify-between !pb-2">
                                                <CardTitle>Assigned Stock Report</CardTitle>

                                                <Select value={selectedReport} onValueChange={setSelectedReport}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select Report" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        <SelectItem value="AttLiveTest">AttLiveTest</SelectItem>
                                                        <SelectItem value="Rivertel">Rivertel</SelectItem>
                                                        <SelectItem value="powermobile">powermobile</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </CardHeader>

                                            <CardContent className="px-0">
                                                <AssignStockReportChart
                                                    data={chartDataMap[selectedReport]}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>


                                </div>


                            </div>


                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
