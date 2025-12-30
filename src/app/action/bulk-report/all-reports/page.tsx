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
    status: {
      newSim: 0,
      completed: 0,
      processing: 0,
      failed: 0,
      showReset: true,
      carrierbutton: false,
    },
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
    status: {
      newSim: 0,
      completed: 0,
      processing: 0,
      failed: 0,
      showReset: false,
      carrierbutton: true,
    },
  },
]


// -------------------- PAGE --------------------
export default function PlanChangeReport() {
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
       

            <CardContent>
              {/* ---------------- FILTER FORM ---------------- */}
              <form className="grid gap-4 items-end py-6 pt-6 grid-cols-12">

                 <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 mb-4">
                  <Label>Bulk Uploading Reports</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Bulk Uploading Reports" />
                    </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="a">SIM Activation Report</SelectItem>
                            <SelectItem value="b">Plan Change Report</SelectItem>
                            <SelectItem value="c">MSISDN Disconnect Report</SelectItem>
                            <SelectItem value="d">MSISDN Reconnect Report</SelectItem>
                            <SelectItem value="e">MSISDN Change Report</SelectItem>
                            <SelectItem value="f">SIM Change Report</SelectItem>
                            <SelectItem value="g">Restore Report</SelectItem>
                            <SelectItem value="h">Suspended Report</SelectItem>
                            <SelectItem value="i">Purchase Topup Report</SelectItem>
                            <SelectItem value="j">Suspend Service Report</SelectItem>
                            <SelectItem value="k">Restore Service Report</SelectItem>
                        </SelectContent>
                  </Select>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-8 xl:col-span-9"></div>

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

     <CardHeader className="flex items-center gap-0 space-y-0 sm:flex-row bg-gray-100  p-4 !pb-4 rounded-lg mb-4 mt-4">
              <CardTitle>SIM Activation Report</CardTitle>
            </CardHeader>
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
                      <TableHead>Status</TableHead>
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

                        {/* IMAGE-LIKE STATUS COLUMN */}
                        <TableCell className="min-w-[220px] space-y-1 text-xs leading-5">
                          <div className="flex justify-between">
                          <div className="text-blue-600 font-medium">
                            New SIM: {row.status.newSim}
                          </div>

                          <div className="text-green-600 font-medium">
                            Completed SIM: {row.status.completed}
                          </div>
                          </div>

                        <div className="flex justify-between">
                          <div className="text-orange-500 font-medium">
                            Processing SIM: {row.status.processing}
                          </div>
                          

                          <div className="text-red-600 font-medium">
                            Failed SIM: {row.status.failed}
                          </div>
                          </div>

                          {row.status.showReset && (
                            
                            <Button size="sm"
                              type="button" className="bg-red-400 ml1 hover:bg-red-700 mr-1">
                              Reset Process
                            </Button>
                          )}
                          {row.status.carrierbutton && (
                            <div>
                            <Button size="sm"
                              type="button" className="bg-orange-300 ml1 hover:bg-orange-700 mr-1">
                              Send to Carrier
                            </Button>

                             <Button
                              type="button" variant="secondary">
                              Cancel
                            </Button>
                            </div>
                          )

                          }
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
