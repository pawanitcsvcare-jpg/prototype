"use client"

import * as React from "react"
import Link from "next/link"

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
    batchno: "176544896548",
    uploadedfilename: "sim_activation_template.csv",
    totaluploaded: 1,
    totalsuccess: 1,
    totalfail: 0,
    uploadedby: "Telgoo5 (SupAdmin)",
    uploadeddatetime: "12-11-2025 05:29:25",
  },
  {
    id: 2,
    batchno: "176544863947",
    uploadedfilename: "sim_activation_template.csv",
    totaluploaded: 0,
    totalsuccess: 0,
    totalfail: 0,
    uploadedby: "Telgoo5 (SupAdmin)",
    uploadeddatetime: "12-11-2025 05:23:59",
  },
]


// -------------------- PAGE --------------------
export default function AssignVendorReport() {
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
                <CardTitle>Assign To Vendor Report</CardTitle>
            </CardHeader>

            <CardContent>
              {/* ---------------- FILTER FORM ---------------- */}
              <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">


                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                  <Label>Company</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Company" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">Company A</SelectItem>
                      <SelectItem value="b">Company B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
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

                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                  <Label>Date Range</Label>
                  <Input type="text"></Input>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                  <Label>Batch Filter</Label>
                  <div className="flex gap-4">
                    <RadioGroup defaultValue="daily" className="space-y-2">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="daily" id="daily" />
                        <Label htmlFor="daily">Batch</Label>
                      </div>
                    </RadioGroup>
                    <Input type="text"></Input>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                  <Button type="submit" className="w-full md:w-auto">
                    Submit
                  </Button>
                  <Button type="submit" variant="secondary" className="w-full md:w-auto ml-2">Clear</Button>
                </div>
              </form>

   
              {/* ---------------- RESPONSIVE TABLE ---------------- */}
              <div className="relative w-full overflow-x-auto">
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Batch Number</TableHead>
                      <TableHead>Uploaded File Name</TableHead>
                      <TableHead>Total Uploaded</TableHead>
                      <TableHead>Total Success</TableHead>
                      <TableHead>Total Failure</TableHead>
                      <TableHead>Uploaded By</TableHead>
                      <TableHead>Uploaded Datetime</TableHead>
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
