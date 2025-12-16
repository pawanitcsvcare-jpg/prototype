"use client"

import * as React from "react"
import Link from "next/link"


import { Button } from "@/components/ui/button"
import { IconDownload } from "@tabler/icons-react"

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
]

// -------------------- PAGE --------------------
export default function TopFiveSIM() {
    return (


        <div className="">



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
                                <TableCell>
                                    {row.customerid}
                                    </TableCell>

                                {/* MSISDN LINK */}
                                <TableCell>
                                    {row.msisdn}
                                </TableCell>

                                <TableCell>
                                     <Link
                                        href={`/subscribers/${row.customerid}`}
                                        className="text-blue-500 font-medium hover:underline"
                                    >
                                    {row.sim}
                                    </Link>
                                </TableCell>
                                <TableCell>{row.accountstatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>

    )
}
