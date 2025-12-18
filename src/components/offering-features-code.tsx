"use client"

import React, { useState } from "react"

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

/* -------------------- TYPES -------------------- */

type OfferingRow = {
  id: number
  offringcode: string
  description: string
  date: string
}

/* -------------------- DATA -------------------- */

const rows: OfferingRow[] = [
  { id: 1, offringcode: "APNPREPO", description: "APN PRE PROV O SOC", date: "07-27-2025" },
  { id: 2, offringcode: "RMABRO", description: "RM OPT ABR SOC", date: "07-27-2025" },
  { id: 3, offringcode: "RMVLTEO", description: "RM OPT VOLTE SOC", date: "07-27-2025" },
  { id: 4, offringcode: "RMABRO", description: "RM OPT ABR SOC", date: "07-27-2025" },
  { id: 5, offringcode: "RMABRO", description: "RM OPT ABR SOC", date: "07-27-2025" },
  { id: 6, offringcode: "RMVLTEO", description: "RM OPT VOLTE SOC", date: "07-27-2025" },
]

/* -------------------- COMPONENT -------------------- */

export default function OfferingFeaturesCode() {
  const [open, setOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState<OfferingRow | null>(null)

  const handleRowClick = (row: OfferingRow) => {
    setSelectedRow(row)
    setOpen(true)
  }

  return (
    <>
      {/* ---------------- TABLE ---------------- */}
      <div className="relative w-full overflow-auto max-h-96 border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Offering Code</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => handleRowClick(row)}
                className={`cursor-pointer transition-colors
                  ${
                    selectedRow?.id === row.id
                      ? "bg-blue-100 ring-1 ring-blue-300"
                      : "hover:bg-muted/50"
                  }
                `}
              >
                <TableCell>{row.id}</TableCell>

                <TableCell className="font-medium text-blue-600">
                  {row.offringcode}
                </TableCell>

                <TableCell>{row.description}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ---------------- SHEET ---------------- */}
      <Sheet
        open={open}
        onOpenChange={(val) => {
          setOpen(val)
          if (!val) setSelectedRow(null)
        }}
      >
        <SheetContent
          side="right"
          className="w-[500px] max-w-none sm:max-w-none gap-0"
        >
          <SheetHeader>
            <SheetTitle>Feature Code Details</SheetTitle>
            <SheetDescription>
              Feature list mapped to selected offering code
            </SheetDescription>
          </SheetHeader>

          {selectedRow && (
            <div className="p-4 space-y-6 border-t">
              {/* -------- Summary -------- */}
              <div className="grid grid-cols-2 gap-4 text-sm rounded-lg p-4 bg-blue-100">
                <div>
                  <p className="text-muted-foreground">Offering Code</p>
                  <p className="font-semibold">{selectedRow.offringcode}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Description</p>
                  <p className="font-medium">{selectedRow.description}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Date</p>
                  <p>{selectedRow.date}</p>
                </div>
              </div>

              {/* -------- Feature Table -------- */}
              <div className="w-full border border-gray-200 rounded-xl overflow-x-auto">
                <table className="w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">S.No</th>
                      <th className="px-4 py-2 text-left">Code</th>
                      <th className="px-4 py-2 text-left">Description</th>
                      <th className="px-4 py-2 text-left">Category</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="divide-x">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">APNA02</td>
                      <td className="px-4 py-2">DATA ACCESS</td>
                      <td className="px-4 py-2">GPRS</td>
                    </tr>

                    <tr className="divide-x bg-muted/30">
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">APNA04</td>
                      <td className="px-4 py-2">BROADBAND ACCESS</td>
                      <td className="px-4 py-2">GPRS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* -------- Action -------- */}
              <Button className="w-full" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
