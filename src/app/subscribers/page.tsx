"use client"

import * as React from "react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconDownload } from "@tabler/icons-react"

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
    srno: "1",
    acctype: "Activation",
    vendormvno: "AttLiveTest",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    imei: "354862090604286",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "REJECTED",
    action: "Reprocess",
  },
  {
    srno: "2",
    acctype: "Activation",
    vendormvno: "Rivertel",
    msisdn: "332-280-1462",
    sim: "65752802331621204501",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "ACTIVE",
    action: "Reprocess",
  },
  {
    srno: "3",
    acctype: "Activation",
    vendormvno: "AttLiveTest",
    msisdn: "332-280-1462",
    sim: "89012802331621200001",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "REJECTED",
    action: "Reprocess",
  },
  {
    srno: "4",
    acctype: "Activation",
    vendormvno: "AttLiveTest",
    msisdn: "332-280-1462",
    sim: "78012802331621275001",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "ACTIVE",
    action: "Reprocess",
  },
  {
    srno: "5",
    acctype: "Activation",
    vendormvno: "Rivertel",
    msisdn: "332-280-1462",
    sim: "89012802331621200001",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "REJECTED",
    action: "Reprocess",
  },
  {
    srno: "6",
    acctype: "Activation",
    vendormvno: "powermobile",
    msisdn: "332-280-1462",
    sim: "89012802331621200001",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "ACTIVE",
    action: "Reprocess",
  },
  {
    srno: "7",
    acctype: "Activation",
    vendormvno: "Infiniti",
    msisdn: "332-280-1462",
    sim: "89012802331621200001",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "ACTIVE",
    action: "Reprocess",
  },
  {
    srno: "8",
    acctype: "Activation",
    vendormvno: "AtpowermobiletLiveTest",
    msisdn: "332-280-1462",
    sim: "89012802331621200001",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "ACTIVE",
    action: "Reprocess",
  },
  {
    srno: "9",
    acctype: "Activation",
    vendormvno: "Rivertel",
    msisdn: "332-280-1462",
    sim: "65752802331621204501",
    imei: "35486209065464",
    zip: "10031",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "ACTIVE",
    action: "Reprocess",
  },
  {
    srno: "10",
    acctype: "Activation",
    vendormvno: "AttLiveTest",
    msisdn: "332-280-1462",
    sim: "60931802331621207801",
    imei: "354862090604287",
    zip: "10036",
    activationdate: "04-18-2025 03:22:26",
    accountstatus: "REJECTED",
    action: "Reprocess",
  },
]

// -------------------- PAGE --------------------
export default function Page() {
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
            <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 border-b py-5 sm:flex-row pt-0">
              <CardTitle>Subscriber&apos;s List</CardTitle>
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
                  <Label>Account Status</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Account Type</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prepaid">Prepaid</SelectItem>
                      <SelectItem value="postpaid">Postpaid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Button type="submit" className="w-full md:w-auto">
                    Submit
                  </Button>
                </div>
              </form>

              {/* ---------------- SEARCH + DOWNLOAD ---------------- */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mt-40">
               <div className="relative"> <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg> </div> <input type="text" id="input-group-1" className="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]" placeholder="Search" /> </div>
                <Button variant="outline" size="sm">
                  <IconDownload className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>

              {/* ---------------- RESPONSIVE TABLE ---------------- */}
              <div className="relative w-full overflow-x-auto">
                <Table className="min-w-[1100px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sr No</TableHead>
                      <TableHead>ACC Type</TableHead>
                      <TableHead>Vendor/MVNO</TableHead>
                      <TableHead>MSISDN</TableHead>
                      <TableHead>SIM</TableHead>
                      <TableHead>IMEI</TableHead>
                      <TableHead>Zip</TableHead>
                      <TableHead>Activation Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {rows.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell>{row.srno}</TableCell>
                        <TableCell>{row.acctype}</TableCell>
                        <TableCell>{row.vendormvno}</TableCell>

                        {/* MSISDN LINK */}
                        <TableCell>
                          <Link
                            href={`/subscribers/${row.msisdn}`}
                            className="text-blue-500 font-medium hover:underline"
                          >
                            {row.msisdn}
                          </Link>
                        </TableCell>

                        <TableCell>
                          {row.sim}
                        </TableCell>
                        <TableCell>
                          {row.imei}
                        </TableCell>
                        <TableCell>
                          {row.zip}
                        </TableCell>
                        <TableCell>{row.activationdate}</TableCell>
                        <TableCell>{row.accountstatus}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="secondary">
                            {row.action}
                          </Button>
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
