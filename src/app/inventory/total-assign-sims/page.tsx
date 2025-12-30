
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
import { Input } from "@/components/ui/input"


import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"


// -------------------- DATA --------------------
const rows = [
  {
    id: 1,
    vendor: "",
    activationdate: "76879798796768789",
    totaluploaded: 'FGFGFG879879',
    assigneddate: '',
    totalassigned: 'Assigned',
  },

]

// -------------------- PAGE --------------------
export default function TotalAssignedSIM() {
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
                            <CardTitle>Total Assigned SIM</CardTitle>
                        </CardHeader>

                        <CardContent>
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Company</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Search Company" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="a">ABCD Company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Vendor/MVNO</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Vendor/MVNO" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">ADGFG78</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2">
                                    <Label>From Date</Label>
                                   <Input type="text"></Input>
                                </div>

                                 <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2">
                                    <Label>To Date</Label>
                                   <Input type="text"></Input>
                                </div>

                               

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2">
                                <Button type="submit" className="w-full md:w-auto">
                                    Search
                                </Button>
                                <Button type="submit" variant="secondary" className="w-full md:w-auto ml-2">Clear</Button>
                                </div>
                            </form>

                              <div className="relative w-full overflow-x-auto mt-4">
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Vendor/MVNO</TableHead>
                      <TableHead>Activation Date</TableHead>
                      <TableHead>Assigned Date</TableHead>
                      <TableHead>Total Assigned</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.vendor}</TableCell>
                        <TableCell>{row.activationdate}</TableCell>
                        <TableCell>{row.assigneddate}</TableCell>
                        <TableCell>{row.totalassigned}</TableCell>
                      </TableRow>
                    ))}
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
