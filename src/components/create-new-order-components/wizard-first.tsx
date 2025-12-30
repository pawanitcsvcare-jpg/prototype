
import * as React from "react"
import Link from "next/link"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import RequiredMark from "@/components/ui/required-mark"
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

import { Input } from "@/components/ui/input"

// -------------------- PAGE --------------------
export default function OrderWizardFirst() {
    return (


                <div className="flex flex-1 flex-col">


                    <Card className="@container/card">

                        <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 py-5 sm:flex-row pt-0">
                            <CardTitle>Enter Initial Details</CardTitle>
                        </CardHeader>

                        <CardContent>
                       
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Company</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Search Company" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="a">ABCD Company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Vendor/MVNO</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Vendor/MVNO" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">ADGFG78</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Zip Code
                                        <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                           5 digits required
                                        </TooltipContent>
                                    </Tooltip><RequiredMark></RequiredMark>
                                    </Label>
                                   <Input type="text"></Input>
                                </div>

                                 <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>MSISDN (Phone Number)
                                        <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            10 digits required
                                        </TooltipContent>
                                    </Tooltip><RequiredMark></RequiredMark>
                                    </Label>
                                   <Input type="text"></Input>
                                </div>

                            </form>

     
                        </CardContent>
                    </Card>
                </div>

    )
}
