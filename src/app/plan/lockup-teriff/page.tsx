"use client"

import * as React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"

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


// -------------------- PAGE --------------------
export default function PlanLockupTeriff() {
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
              <CardTitle>Plan</CardTitle>
            </CardHeader>

            <CardContent>
              {/* ---------------- FILTER FORM ---------------- */}
              <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end py-6 pt-0">
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
                  <Label>Plan List</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Plan A</SelectItem>
                      <SelectItem value="inactive">Plan B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>

              <div className="relative w-full overflow-x-auto">
               
               <div className="w-full text-green-500 bg-green-500/10 rounded-lg px-4 py-3 text-md border-0 mb-4 font-bold mt-4"> Infiniti Ecstatic 5GB (IM004)    </div>
                <Table className="min-w-[1100px]">
                  <TableBody>
                      <TableRow>
                        <TableHead>Tariff Name</TableHead>
                        <TableCell>Infiniti Ecstatic 5GB </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Tariff Code</TableHead>
                        <TableCell>IM004 </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableCell>Unlimited Talk, Unlimited Text, 5GB Data </TableCell>
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
