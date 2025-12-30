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
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";

import RequiredMark from "@/components/ui/required-mark";
import ActionMenu from "@/components/action-menu";

// -------------------- DATA --------------------
const rows = [
    {
        id: 1,
        msisdn: "706-216-9582",
        sim: "",
        vendor: "DEMO_TESTMVNO",
        date: "03-28-2024 15:10:15",
        action: ""

    },
    {
        id: 2,
        msisdn: "470-404-9079",
        sim: "89012802331277808828",
        vendor: "powermobile",
        date: "03-28-2024 16:29:12",
        action: ""

    },
];

// -------------------- DATA --------------------
const pending = [
    {
        id: 1,
        msisdn: "706-216-9582",
        sim: "",
        vendor: "DEMO_TESTMVNO",
        date: "03-28-2024 15:10:15",
        return: "",
        status : "",

    },
    {
        id: 2,
        msisdn: "470-404-9079",
        sim: "89012802331277808828",
        vendor: "powermobile",
        date: "03-28-2024 16:29:12",
        action: "",
         status : "",

    },
];

// -------------------- PAGE --------------------
export default function SearchPorts() {
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
                            <CardTitle>Search Ports</CardTitle>
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

                                        SIM
                                        <Tooltip>

                                            <TooltipTrigger asChild>

                                                <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                            </TooltipTrigger>
                                            <TooltipContent>

                                                (7-25 chars) Alphanumeric characters only
                                            </TooltipContent>
                                        </Tooltip>
                                        <RequiredMark></RequiredMark>
                                    </Label>
                                    <Input type="text"></Input>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">

                                    <Label>Portin Type</Label>
                                    <Select>

                                        <SelectTrigger className="w-full">

                                            <SelectValue placeholder="Create Portin" />
                                        </SelectTrigger>
                                        <SelectContent>

                                            <SelectItem value="v1">Create Portin</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">

                                    <Button type="submit" className="w-full md:w-auto">

                                        Submit
                                    </Button>
                                    <Button type="submit" variant="secondary" className="w-full md:w-auto ml-2">

                                        Clear
                                    </Button>
                                </div>
                            </form>


                            {/* ---------------- TABLE ---------------- */}
                            <div className="mb-6">
                            <CardHeader className="flex items-center gap-0 space-y-0 sm:flex-row bg-orange-100  p-4 !pb-4 rounded-lg mb-4 mt-4">
                                <CardTitle>Pending Portin</CardTitle>
                            </CardHeader>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#</TableHead>
                                            <TableHead>MSISDN</TableHead>
                                            <TableHead>	ESN/SIM</TableHead>
                                            <TableHead>Vendor</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell className="text-blue-600 cursor-pointer">
                                                    {row.msisdn}
                                                </TableCell>
                                                <TableCell>{row.sim || "-"}</TableCell>
                                                <TableCell>{row.vendor}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.action}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                </div>
                            </div>

                    <div className="pt-3 mb-6">
                            <CardHeader className="flex items-center gap-0 space-y-0 sm:flex-row bg-red-100  p-4 !pb-4 rounded-lg mb-4 mt-4">
                                <CardTitle>Cancel Portin</CardTitle>
                            </CardHeader>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#</TableHead>
                                            <TableHead>MSISDN</TableHead>
                                            <TableHead>	ESN/SIM</TableHead>
                                            <TableHead>Vendor</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Return Code</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {pending.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell className="text-blue-600 cursor-pointer">
                                                    {row.msisdn}
                                                </TableCell>
                                                <TableCell>{row.sim || "-"}</TableCell>
                                                <TableCell>{row.vendor}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.return}</TableCell>
                                                 <TableCell>{row.status}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                </div>
                            </div>

                               <div className="pt-3">
                            <CardHeader className="flex items-center gap-0 space-y-0 sm:flex-row bg-green-100  p-4 !pb-4 rounded-lg mb-4 mt-4">
                                <CardTitle>Completed Ports</CardTitle>
                            </CardHeader>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#</TableHead>
                                            <TableHead>MSISDN</TableHead>
                                            <TableHead>	ESN/SIM</TableHead>
                                            <TableHead>Vendor</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell className="text-blue-600 cursor-pointer">
                                                    {row.msisdn}
                                                </TableCell>
                                                <TableCell>{row.sim || "-"}</TableCell>
                                                <TableCell>{row.vendor}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.action}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                </div>
                            </div>



                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
