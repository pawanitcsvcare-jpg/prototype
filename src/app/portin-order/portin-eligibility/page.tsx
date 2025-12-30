"use client";

import * as React from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RequiredMark from "@/components/ui/required-mark";

// -------------------- PAGE --------------------
export default function PortinEligiblity() {
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
                    <Card>
                        <CardHeader className="border-b py-5">
                            <CardTitle>Check Portin Eligibility</CardTitle>
                        </CardHeader>

                        <CardContent>
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">

                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">

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
                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">

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
                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">

                                    <Label>

                                        MSISDN
                                        <Tooltip>

                                            <TooltipTrigger asChild>

                                                <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                            </TooltipTrigger>
                                            <TooltipContent>

                                                Enter 10-11 digits without dashes
                                            </TooltipContent>
                                        </Tooltip>
                                        <RequiredMark></RequiredMark>
                                    </Label>
                                    <Input type="text"></Input>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">

                                    <Label>

                                        Zip Code
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                5-6 digits
                                            </TooltipContent>
                                        </Tooltip>
                                        <RequiredMark></RequiredMark>
                                    </Label>
                                    <Input type="text"></Input>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">

                                    <Button type="submit" className="w-full md:w-auto">
                                        Check Eligibility
                                    </Button>
                                    <Button type="submit" variant="secondary" className="w-full md:w-auto ml-2">
                                        Clear
                                    </Button>
                                </div>
                            </form>


                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
