"use client"

import * as React from "react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { IconDownload } from "@tabler/icons-react"

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
    customerid: "10546",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "2",
    customerid: "10565",
    msisdn: "561-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "3",
    customerid: "10546",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "4",
    customerid: "87654",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "5",
    customerid: "10540",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "6",
    customerid: "10541",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "7",
    customerid: "10542",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "8",
    customerid: "47679",
    msisdn: "332-280-4351",
    sim: "89012802331621206999",
    accountstatus: "Supadmin",
  },
   {
    srno: "9",
    customerid: "54575",
    msisdn: "332-280-1443",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
  },
   {
    srno: "10",
    customerid: "10542",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    accountstatus: "Supadmin",
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
              <CardTitle>CSR Search History</CardTitle>
            </CardHeader>

            <CardContent>
             
 {/* ---------------- SEARCH + DOWNLOAD ---------------- */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mt-0">
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
                      <TableHead>Customer ID</TableHead>
                      <TableHead>MSISDN</TableHead>
                      <TableHead>SIM</TableHead>
                      <TableHead>Searched By</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {rows.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell>{row.srno}</TableCell>
                        <TableCell>{row.customerid}</TableCell>

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
                        <TableCell>{row.accountstatus}</TableCell>
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
