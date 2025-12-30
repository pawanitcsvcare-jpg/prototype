"use client"

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
    batchno: "",
    uploadedfilename: "76879798796768789",
    totaluploaded: 'FGFGFG879879',
    totalsuccess: '',
    totalfail: 'Assigned',
    uploadedby: "Free",
    uploadeddatetime: "Yes",
    status: 'LPA:ESIM1243546',
    qrcode : 'NA'
  },

]

// -------------------- PAGE --------------------
export default function SearchInventory() {
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
                            <CardTitle>Search Inventory</CardTitle>
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
                                            <SelectItem value="a">ABCD Companyy</SelectItem>
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

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>MSISDN</Label>
                                   <Input type="text"></Input>
                                </div>

                                 <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>SIM</Label>
                                   <Input type="text"></Input>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Assigned/UnAssigned Status</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">Assigned</SelectItem>
                                             <SelectItem value="v2">UnAssigned</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>SIM Status</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select SIM Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">Free</SelectItem>
                                             <SelectItem value="v2">Used</SelectItem>
                                             <SelectItem value="v3">Reserved</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                 <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>eSIM</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select eSIM Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">No</SelectItem>
                                             <SelectItem value="v2">Yes</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
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
                      <TableHead>MSISDN</TableHead>
                      <TableHead>SIM</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Activation Date</TableHead>
                      <TableHead>Assigned/UnAssigned</TableHead>
                      <TableHead>SIM Status</TableHead>
                      <TableHead>eSIM</TableHead>
                      <TableHead>Activation Code</TableHead>
                      <TableHead>QR Code</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.batchno}</TableCell>
                        <TableCell>{row.uploadedfilename}</TableCell>
                        <TableCell>{row.totaluploaded}</TableCell>
                        <TableCell>{row.totalsuccess}</TableCell>
                        <TableCell>{row.totalfail}</TableCell>
                        <TableCell>{row.uploadedby}</TableCell>
                        <TableCell>{row.uploadeddatetime}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.qrcode}</TableCell>

                        
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
