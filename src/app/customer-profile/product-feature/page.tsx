"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"

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
    { id: 1, feature: "RMVVM", description: "RMVVM", enabled: false },
    { id: 2, feature: "RMBVMR", description: "RM BASIC VOICE MAIL", enabled: false },
    { id: 3, feature: "BVMRO", description: "Basic Voice Mail", enabled: false },
    { id: 4, feature: "TGOHS", description: "TGO R HOTSPOT SOC OFF", enabled: false },
    { id: 5, feature: "TGOHSO", description: "HOTSPOT SOC ON", enabled: false },
    { id: 6, feature: "RMWIFI", description: "RM R WIFI CALLING", enabled: false },
    {
        id: 7,
        feature: "RMRZ5",
        description:
            "Domestic On Net, Standard, and Premium Domestic Roaming + all international including data only international countries.",
        enabled: false,
    },
    {
        id: 8,
        feature: "RMRZ3",
        description:
            "Domestic On Net and Standard Domestic Roaming + all (40+) voice, messaging, data International Countries",
        enabled: false,
    },
    {
        id: 9,
        feature: "RMRZ2",
        description:
            "Domestic On Net and Standard Domestic Roaming + Can/Mex",
        enabled: false,
    },
    {
        id: 10,
        feature: "RMRZ1",
        description: "Domestic On Net and Standard Domestic Roaming",
        enabled: false,
    },
]
const ToggleSwitch = ({ checked }: { checked: boolean }) => (
    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 cursor-pointer">
        <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? "translate-x-6 bg-green-500" : "translate-x-1"
                }`}
        />
    </div>
)


export default function CustomerProfileProductFeatures() {
    return (
        <div>

            <Card className="pt-0">
                <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Product/Features</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="">


                        <div className="relative w-full overflow-x-auto">
                            <Table className="">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>S.No</TableHead>
                                        <TableHead>Feature Code</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead className="text-center">Action</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell className="font-medium">{row.feature}</TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {row.description}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <ToggleSwitch checked={row.enabled} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>


                    </div>

                </CardContent>

            </Card>
        </div>
    )
}