
import * as React from "react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

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
import RequiredMark from "@/components/ui/required-mark"
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import DownloadButton from "@/components/ui/download-button"

import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table"
import { secondsInDay } from "date-fns/constants"


// -------------------- PAGE --------------------
export default function AssignedReassignSIM() {
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


                    <Card className="@container/card pt-6">

                        <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 py-5 sm:flex-row pt-0">
                            <CardTitle>Assign/Re-assign Sim's</CardTitle>
                        </CardHeader>

                        <CardContent>
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Unit Type<RequiredMark></RequiredMark></Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Search Unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="a">Assign To VendorId</SelectItem>
                                            <SelectItem value="b">Reassign To VendorId</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Upload Type
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Select Single Unit for one SIM or Bulk Upload for multiple SIMs
                                            </TooltipContent>
                                        </Tooltip><RequiredMark></RequiredMark>
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Upload Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">Single Unit</SelectItem>
                                            <SelectItem value="v2">Bulk Upload</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4">
                                <Button type="submit" className="w-full md:w-auto">
                                    Add Files
                                </Button>
                                <DownloadButton  text="Download CSV Template" className="mt-2" />
                                </div>
                            </form>

                              <div className="relative w-full overflow-x-auto mt-4">
                                 <p className="font-medium text-sm mb-4">Header : SIM, <span className="text-blue-500">VendorId</span></p>
                                 <Table >
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>total_sim_stock_251229565767.csv</TableCell>
                                                        <TableCell>17.94 KB</TableCell>
                                                        <TableCell>
                                                            <div>
                                                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm mx-1">Start Upload</Button>
                                                            <Button size="sm" variant="secondary" >Cancel</Button>
                                                            </div>
                                                            </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                             </div>

                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
