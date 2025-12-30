

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

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import DownloadButton from "@/components/ui/download-button"


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
            <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 border-b py-5 sm:flex-row">
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
                             <div className="relative"> <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"><IconSearch className="w-4 h-4 text-body" /> </div> <input type="text"placeholder="Search...."className="w-full max-w-96 h-9 rounded-md border border-gray-300 bg-white ps-9 pe-3 text-sm outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300" /> </div>
                              <DownloadButton  text="Download" className="" />
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
                        <TableCell>
                          <span
              className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold
                ${
                  row.accountstatus === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              ● {row.accountstatus}
            </span>
                          </TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-orange-300 ml1 hover:bg-orange-700">
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
