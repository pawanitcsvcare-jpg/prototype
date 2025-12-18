"use client"

import * as React from "react"

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
  { serviceType: "DYN_DOM_ROAM_VOICE", units: "MINUTES", description: "400" },
  { serviceType: "DYN_INT_VOICE", units: "MINUTES", description: "200" },
  { serviceType: "DYN_INT_ROAM_VOICE_NA", units: "MINUTES", description: "300" },
  { serviceType: "DYN_DOM_VOICE", units: "MINUTES", description: "500" },
  { serviceType: "DYN_INT_SMS", units: "SMS", description: "0" },
  { serviceType: "DYN_DOM_LOW_DATA_1", units: "MB", description: "0" },
  { serviceType: "DYN_DOM_SMS", units: "SMS", description: "0" },
]

// -------------------- PAGE --------------------
export default function BalanceDetails() {
  return (
    <div className="relative w-full overflow-auto max-h-96 border rounded-md">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Service Type</TableHead>
            <TableHead>Units Description</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                {row.serviceType}
              </TableCell>
              <TableCell>{row.units}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
