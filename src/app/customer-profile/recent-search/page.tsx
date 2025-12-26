"use client"

import * as React from "react"
import { useState } from "react"
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

// ✅ IMPORT SHARED DATA
import { recentSearchData } from "@/lib/recent-search-data"

export default function RecentSearch() {
  const [searchText, setSearchText] = useState("")
  const [filteredData, setFilteredData] = useState(recentSearchData)

  // extract number from sentence
  const extractNumber = (text: string) => {
    const match = text.match(/\d+/)
    return match ? parseInt(match[0]) : null
  }

  // handle search input
  const handleSearch = (value: string) => {
    setSearchText(value)

    const lowerText = value.toLowerCase()

    if (lowerText.includes("customer")) {
      const count = extractNumber(value) ?? 5
      setFilteredData(recentSearchData.slice(0, count))
    } else {
      setFilteredData(recentSearchData)
    }
  }

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
          <Card className="pt-0">
            <CardHeader className="border-b py-5 gap-0">
              <CardTitle>CSR Search History</CardTitle>
            </CardHeader>

            <CardContent>
              {/* SEARCH */}
              <div className="flex justify-between pb-4">
                <input
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search (ex: Top 4 customer search report)"
                  className="w-full max-w-md border px-3 py-2 rounded-md text-sm"
                />

                <Button variant="outline" size="sm">
                  <IconDownload className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>

              {/* TABLE */}
              <Table>
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
                  {filteredData.length > 0 ? (
                    filteredData.map((row) => (
                      <TableRow key={row.srno}>
                        <TableCell>{row.srno}</TableCell>
                        <TableCell>{row.customerid}</TableCell>
                        <TableCell>
                          <Link
                            href={`/customer-profile/customer-profile-details`}
                            className="text-blue-600 hover:underline"
                          >
                            {row.msisdn}
                          </Link>
                        </TableCell>
                        <TableCell>{row.sim}</TableCell>
                        <TableCell>{row.searchedBy}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        No Data Found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
