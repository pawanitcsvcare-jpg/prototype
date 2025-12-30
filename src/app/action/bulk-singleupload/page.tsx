

import * as React from "react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"

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

import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table"
import RequiredMark from "@/components/ui/required-mark"
import { Info } from "lucide-react"
import FileUpload from "@/components/ui/file-upload"
import DownloadTFile from "@/components/ui/download-file"


// -------------------- PAGE --------------------
export default function ActionBulkSingleUpload() {
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


                    <Card className="@container/card">
                        <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 border-b py-5 sm:flex-row ">
                            <CardTitle>Bulk/Single Upload</CardTitle>
                        </CardHeader>

                        <CardContent>
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end py-6 pt-0">
                                <div>
                                    <Label>Unit Type <RequiredMark></RequiredMark></Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="a">SIM Activation (PC119)</SelectItem>
                                            <SelectItem value="b">SIM Change (PC129)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Upload Type<RequiredMark></RequiredMark></Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="v1">Single Unit</SelectItem>
                                            <SelectItem value="v2">Bulk Upload</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Button>View Report</Button>
                                </div>
                            </form>

                            <div className="relative w-full overflow-x-auto">

                                <div className="w-full rounded-md border border-blue-200 bg-blue-50 mb-4">
                                    <div className="flex items-center gap-2 rounded-t-md bg-blue-100 px-4 py-2">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">i</span>
                                        <h3 className="text-sm font-semibold text-blue-900">
                                            How to Use
                                        </h3>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 py-4 text-sm text-gray-700 mb-4">
                                        <ol className="list-decimal space-y-1 pl-5">
                                            <li>Download the sample template below</li>
                                            <li>
                                                Fill in your data (SIM, IMEI, Zip Code, Plan Code, Billing Code,
                                                VendorId)
                                            </li>
                                            <li>Save as CSV file</li>
                                            <li>Upload your file below</li>
                                            <li>Review success/error reports</li>
                                        </ol>

                                        {/* Footer note */}
                                        <div className="mt-4 flex items-start font-medium gap-2 text-sm text-gray-600">
                                            <p>
                                                File Requirements: Maximum file size: <strong>10 MB</strong> |
                                                Maximum rows: <strong>5,000</strong> (excluding header) | Format:
                                                <strong> CSV</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full rounded-md border border-blue-200 bg-blue-50 mb-4">
                                    <div className="flex items-center gap-2 rounded-t-md bg-blue-100 px-4 py-2">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">i</span>
                                        <h3 className="text-sm font-semibold text-blue-900">
                                            CSV Format Requirements
                                        </h3>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 py-4 text-sm text-gray-700 mb-4">
                                        <div className="mb-4">
                                            <p className="pb-2 font-bold text-md">Required Header Row</p>
                                            <Table className="min-w-[1100px] bg-white">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>SIM *</TableHead>
                                                        <TableHead>IMEI</TableHead>
                                                        <TableHead>Zip Code *</TableHead>
                                                        <TableHead>Plan Code *</TableHead>
                                                        <TableHead>Billing Code</TableHead>
                                                        <TableHead>VendorId *</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>


                                                    <TableRow>
                                                        <TableCell>123456789012345</TableCell>
                                                        <TableCell>123456789012345</TableCell>
                                                        <TableCell>12345</TableCell>
                                                        <TableCell>PLAN001</TableCell>
                                                        <TableCell>BILL001</TableCell>
                                                        <TableCell>VENDOR001</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>

                                        <ol className="list-decimal space-y-1 pl-5">
                                            <li>SIM: 18-20 characters, Numeric only (e.g., 123456789012345)</li>
                                            <li>IMEI: Optional, Alphanumeric</li>
                                            <li>Zip Code: 5 digits Numeric (e.g., 12345)</li>
                                            <li>Plan Code: Valid plan code for activation</li>
                                            <li>Billing Code: Optional billing code (can be N/A or empty)</li>
                                            <li>VendorId: Vendor ID (required)</li>
                                        </ol>
                                        <div className="flex items-center gap-2 rounded-md bg-orange-300 px-4 py-2 mt-4">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">i</span>
                                            <h3 className="text-sm font-semibold text-orange-900">
                                                Note: SIM must be unique and not already uploaded for activation. Zip Code must be exactly 5 digits. Plan Code must be valid. Billing Code is optional.
                                            </h3>
                                        </div>
                                    </div>

                                </div>


                                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 pt-4 mt-4">
                                    <div>
                                        <Label>Select VendorId
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    This MVNO will be used for all records in the uploaded file
                                                </TooltipContent>
                                            </Tooltip><RequiredMark></RequiredMark>
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="a">admin (admin)</SelectItem>
                                                <SelectItem value="b">APT Limited (APL1234Test)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>



                                </form>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 pt-4">
                                    <div>
                                        <DownloadTFile />
                                    </div>
                                    <div>
                                        <FileUpload />
                                    </div>
                                   
                                </div>




                            </div>
                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
