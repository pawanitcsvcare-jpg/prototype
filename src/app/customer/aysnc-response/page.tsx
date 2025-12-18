"use client"

import * as React from "react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconDownload } from "@tabler/icons-react"
import { IconSearch } from "@tabler/icons-react"


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
    vendorId: "AttLiveTestAbhi",
    msisdn: "8032370257",
    sim: "89012802332222222222",
    status: "COMPLETE",
    partnerTxnId: "ACTIVATE_SUBSCRIBER_DEV_NON_ELEC_112898",
    requestDatetime: "11-29-2024 05:09:21",
    completionDatetime: "07-15-2025 06:08:17",
    diffMins: "328378.56",
    tpspStatus: "1",
    counter: "1",
    canProcess: false,
  },
  {
    id: 2,
    vendorId: "AttLiveTestAbhi",
    msisdn: "8032370257",
    sim: "89012802331111111111",
    status: "NEW",
    partnerTxnId: "",
    requestDatetime: "11-29-2024 05:06:58",
    completionDatetime: "07-15-2025 06:07:59",
    diffMins: "328381.01",
    tpspStatus: "0",
    counter: "0",
    canProcess: true,
  },
  {
    id: 3,
    vendorId: "AttLiveTestAbhi",
    msisdn: "8032370257",
    sim: "89012802331000000000",
    status: "COMPLETE",
    partnerTxnId: "",
    requestDatetime: "11-29-2024 05:03:21",
    completionDatetime: "07-17-2025 10:21:35",
    diffMins: "331518.14",
    tpspStatus: "1",
    counter: "1",
    canProcess: false,
  },
  {
    id: 4,
    vendorId: "Rivertel",
    msisdn: "9293716391",
    sim: "89012802331277857254",
    status: "COMPLETE",
    partnerTxnId: "ACTIVATE_SUBSCRIBER_2024042415205815665789",
    requestDatetime: "04-24-2024 15:21:12",
    completionDatetime: "04-24-2024 15:22:03",
    diffMins: "0.51",
    tpspStatus: "00",
    counter: "0",
    canProcess: false,
  },
  {
    id: 5,
    vendorId: "Rivertel",
    msisdn: "9293920331",
    sim: "89012802331277857239",
    status: "NEW",
    partnerTxnId: "ACTIVATE_SUBSCRIBER_2024042415115257914720",
    requestDatetime: "04-24-2024 15:12:08",
    completionDatetime: "10-04-2024 06:05:38",
    diffMins: "234173.30",
    tpspStatus: "104",
    counter: "0",
    canProcess: true,
  },
]

// -------------------- PAGE --------------------
export default function AysncResponse() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } 
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-1 flex-col p-6">
    
          <Card className="@container/card">
            <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 border-b py-5 sm:flex-row pt-0">
              <CardTitle>Async Response List</CardTitle>
            </CardHeader>

            <CardContent>
              {/* ---------------- FILTER FORM ---------------- */}
              <form className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end py-6 pt-0">
                <div>
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

                <div>
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

                <div>
                  <Label>Async Status</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="fail">Fail</SelectItem>
                       <SelectItem value="pending">TPSP Pending</SelectItem>
                        <SelectItem value="complete">Complete</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Button type="submit" className="w-full md:w-auto">
                    Submit
                  </Button>
                   <Button type="Clear"  variant="secondary" className="w-full md:w-auto ml-2">
                    Clear
                  </Button>
                  
                </div>
              </form>

              {/* ---------------- SEARCH + DOWNLOAD ---------------- */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mt-40">
               <div className="relative"> <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"><IconSearch className="w-4 h-4 text-body" /> </div> <input type="text"placeholder="Search MSISDN / SIM"className="w-full max-w-96 h-9 rounded-md border border-gray-300 bg-white ps-9 pe-3 text-sm outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300" /> </div>
                <Button variant="outline" size="sm">
                  <IconDownload className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>

             <div className="relative w-full overflow-x-auto">
  <Table className="min-w-[1600px]">
    <TableHeader>
      <TableRow>
        <TableHead>#</TableHead>
        <TableHead>Vendor ID</TableHead>
        <TableHead>MSISDN</TableHead>
        <TableHead>SIM</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Partner Transaction ID</TableHead>
        <TableHead>Request Date Time (A)</TableHead>
        <TableHead>Completion Date Time (B)</TableHead>
        <TableHead>Diff in Mins</TableHead>
        <TableHead>TPSP Status</TableHead>
        <TableHead>Counter</TableHead>
        <TableHead>Action</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.vendorId}</TableCell>
          <TableCell>{row.msisdn}</TableCell>
          <TableCell>{row.sim}</TableCell>

          {/* STATUS BADGE */}
          <TableCell>
            <span
              className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold
                ${
                  row.status === "COMPLETE"
                    ? "bg-green-100 text-green-700"
                    : "bg-sky-100 text-sky-700"
                }`}
            >
              ● {row.status}
            </span>
          </TableCell>

          <TableCell className="max-w-[300px] truncate">
            {row.partnerTxnId || "-"}
          </TableCell>

          <TableCell>{row.requestDatetime}</TableCell>
          <TableCell>{row.completionDatetime}</TableCell>
          <TableCell>{row.diffMins}</TableCell>
          <TableCell>{row.tpspStatus}</TableCell>
          <TableCell>{row.counter}</TableCell>

          {/* ACTIONS */}
          <TableCell className="space-y-2">
            <Button size="sm" className="bg-indigo-300 mr-1 hover:bg-indigo-700">
              👁 View Response
            </Button>

            {row.canProcess && (
              <Button size="sm" className="bg-orange-300 ml1 hover:bg-orange-700">
                ▶ Process
              </Button>
            )}
          </TableCell>
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
