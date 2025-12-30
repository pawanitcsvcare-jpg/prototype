"use client"

import * as React from "react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import RequiredMark from "@/components/ui/required-mark"
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import { Input } from "@/components/ui/input"
// -------------------- PAGE --------------------
export default function AddInventory() {
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


                    <Card className="@container/card pt-6">

                        <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 py-5 sm:flex-row pt-0">
                            <CardTitle>Add Unit</CardTitle>
                        </CardHeader>

                        <CardContent>
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Unit Type

                                        <RequiredMark></RequiredMark></Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Add Inventory" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="a">Add Inventory</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Upload Type<Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Select how you want to add inventory
                                        </TooltipContent>
                                    </Tooltip><RequiredMark></RequiredMark></Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Upload Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">Single Unit</SelectItem>
                                            <SelectItem value="v2">Bulk Upload</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Company<Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Leave blank to add to master inventory
                                        </TooltipContent>
                                    </Tooltip></Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Company" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">ABC Company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                    <Label>Vendor/MVNO<Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Leave blank to add to master inventory
                                        </TooltipContent>
                                    </Tooltip></Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Vendor/MVNO" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">AVDGH546</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                            </form>

                            <div className="relative w-full overflow-x-auto">

                                <div className="mb-6">
                                    <Label>SIM Type
                                        <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                           Select "eSIM" if this is a digital SIM card that requires an activation code
                                        </TooltipContent>
                                    </Tooltip>
                                    <RequiredMark></RequiredMark>
                                    </Label>
                                    <RadioGroup defaultValue="daily" className="space-y-2">
                                        <div className="flex items-center gap-6">
                                        <div className="flex gap-2">
                                        <RadioGroupItem value="daily" id="daily" />
                                        <Label htmlFor="daily"> Physical SIM</Label>
                                        </div>
                                            <div className="flex gap-2">
                                            <RadioGroupItem value="daily2" id="daily2" />
                                        <Label htmlFor="daily2"> Physical SIM</Label>
                                        </div>
                                        </div>
                                    </RadioGroup>
                                </div>



                                <div className="w-full rounded-md border border-blue-200 bg-blue-50 mb-4">
                                    <div className="flex items-center gap-2 rounded-t-md bg-blue-100 px-4 py-2">
                                        <h3 className="text-sm font-semibold text-blue-900">
                                            SIM Information
                                        </h3>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 py-4 text-sm text-gray-700 bg-white">
                                    <div className="grid gap-4 items-end py-4 pt-0 grid-cols-12">

                                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                                <Label>SIM Number<Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                       Format: 19-20 digits, numbers only
                                                    </TooltipContent>
                                                </Tooltip><RequiredMark></RequiredMark></Label>
                                                <Input type="text"></Input>
                                            </div>
                                        
                                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                                <Label>IMSI<Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Format: Exactly 15 digits
                                                    </TooltipContent>
                                                </Tooltip><RequiredMark></RequiredMark></Label>
                                                <Input type="text"></Input>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                                 <div className="w-full rounded-md border border-blue-200 bg-blue-50 mb-4">
                                    <div className="flex items-center gap-2 rounded-t-md bg-blue-100 px-4 py-2">
                                        <h3 className="text-sm font-semibold text-blue-900">
                                           Security Codes
                                        </h3>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 py-4 text-sm text-gray-700 bg-white">
                                    <div className="grid gap-4 items-end py-4 pt-0 grid-cols-12">
                                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                                <Label>PIN1<Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Format: 4-8 digits
                                                    </TooltipContent>
                                                </Tooltip><RequiredMark></RequiredMark></Label>
                                                <Input type="text"></Input>
                                            </div>
                                
                                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                                <Label>PUK1<Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                      Format: Exactly 8 digits
                                                    </TooltipContent>
                                                </Tooltip><RequiredMark></RequiredMark></Label>
                                                <Input type="text"></Input>
                                            </div>
                                 
                                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                                <Label>PIN2<Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Format: 4-8 digits
                                                    </TooltipContent>
                                                </Tooltip><RequiredMark></RequiredMark></Label>
                                                <Input type="text"></Input>
                                            </div>
                               
                                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
                                                <Label>PUK2<Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                      Format: Exactly 8 digits
                                                    </TooltipContent>
                                                </Tooltip><RequiredMark></RequiredMark></Label>
                                                <Input type="text"></Input>
                                            </div>
                                        </div>

                                    </div>

                                

                                </div>
                                <div  className="text-right mt-4">
                                <Button type="submit">Submit SIM</Button>
                                </div>
                                </div>

                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
