"use client"

import * as React from "react"
import Link from "next/link"


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
    msisdn: "332-280-1461",
    created: "12-18-2025 14:19:52",
    type: "SendSMS",
    status: "SUCCESS",
    source: "API",
    detaills: "Details",
  },
    {
    srno: "2",
    msisdn: "332-280-5466",
    created: "12-19-2025 15:55:01",
    type: "SendSMS",
    status: "SUCCESS",
    source: "API",
    detaills: "Details",
  },
]

// -------------------- PAGE --------------------
export default function CustomerProfileOrder() {
  return (

        <div className="flex flex-1 flex-col p-6">


          <Card className="@container/card">
            <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 border-b py-5 sm:flex-row pt-0">
              <CardTitle>Subscriber&apos;s List</CardTitle>
            </CardHeader>

            <CardContent>

              {/* ---------------- RESPONSIVE TABLE ---------------- */}
              <div className="relative w-full overflow-x-auto">
                <Table className="min-w-[1100px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sr No</TableHead>
                      <TableHead>MSISDN</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>View Order Details</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {rows.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell>{row.srno}</TableCell>
                        <TableCell>{row.msisdn}</TableCell>
                        <TableCell>{row.created}</TableCell>

                        {/* MSISDN LINK */}
                        <TableCell>
                          <Link
                            href={`/subscribers/${row.type}`}
                            className="text-blue-500 font-medium hover:underline"
                          >
                            {row.type}
                          </Link>
                        </TableCell>

                        <TableCell>
                          {row.status}
                        </TableCell>
                        <TableCell>
                          {row.source}
                        </TableCell>
                        <TableCell>
                          {row.detaills}
                        </TableCell>
                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

  )
}
