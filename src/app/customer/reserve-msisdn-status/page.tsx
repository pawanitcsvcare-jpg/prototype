"use client";

import * as React from "react";
import Link from "next/link";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconDownload, IconSearch } from "@tabler/icons-react";
import {DatePickerDemo} from "@/components/date-picker"
import {ChartMSISDNStatus} from "@/components/msisdn-status-chart"

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

// -------------------- DATA --------------------
const rows = [
  {
    srNo: 1,
    vendorId: "AttLiveTest",
    msisdn: "9293138853",
    zipCode: "11372",
    sim: "89012803331202876717",
    imei: "354009846963448",
    planCode: "",
    msisdnStatus: "RESERVE",
    tpspStatus: "",
    dateTimeA: "2024-05-21 13:04:35",
    dateTimeB: "",
    diffMins: "827343.58",
  },
  {
    srNo: 2,
    vendorId: "AttLiveTest",
    msisdn: "9292887379",
    zipCode: "11372",
    sim: "89012802331277857254",
    imei: "354009846963448",
    planCode: "",
    msisdnStatus: "NEW",
    tpspStatus: "",
    dateTimeA: "2024-05-21 13:04:09",
    dateTimeB: "2024-12-12 10:15:05",
    diffMins: "295030.56",
  },
  {
    srNo: 3,
    vendorId: "Rivertel",
    msisdn: "9293716391",
    zipCode: "11372",
    sim: "89012802331277857254",
    imei: "354009846963448",
    planCode: "RVTL05",
    msisdnStatus: "ACTIVE",
    tpspStatus: "COMPLETE",
    dateTimeA: "2024-04-24 15:21:03",
    dateTimeB: "",
    diffMins: "866087.30",
  },
  {
    srNo: 4,
    vendorId: "Rivertel",
    msisdn: "9293920331",
    zipCode: "11372",
    sim: "89012802331277857239",
    imei: "354009846772328",
    planCode: "RVTL01",
    msisdnStatus: "ACTIVE",
    tpspStatus: "TPSP_PENDING",
    dateTimeA: "2024-04-24 15:11:59",
    dateTimeB: "",
    diffMins: "866096.34",
  },
  {
    srNo: 5,
    vendorId: "Rivertel",
    msisdn: "9293178405",
    zipCode: "11372",
    sim: "89012802339990006729",
    imei: "357114368276562",
    planCode: "RVTL02",
    msisdnStatus: "ACTIVE",
    tpspStatus: "COMPLETE",
    dateTimeA: "2024-04-24 13:36:16",
    dateTimeB: "",
    diffMins: "866192.17",
  },
];

// -------------------- PAGE --------------------
export default function ReserveMSISDNStatus() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-1 flex-col p-6">
          <Card className="@container/card">
            <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 border-b py-5 sm:flex-row pt-0">
              <CardTitle>Reserve MSISDN Status</CardTitle>
            </CardHeader>

            <CardContent>

                <ChartMSISDNStatus />
                <br />
              {/* ---------------- FILTER FORM ---------------- */}
              <form className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end py-6 pt-0">
                <div>
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

                <div>
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

                <div>
                  <Label>SIM (ICCID)</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>From Date</Label>
                     <DatePickerDemo />
                 
                </div>
                 <div>
                  <Label>To Date</Label>
                    <DatePickerDemo />
                </div>



                <div>
                   <Button type="submit" className="w-full md:w-auto">
                    Submit
                    </Button>
                    <Button type="Clear"  variant="secondary" className="w-full md:w-auto ml-2">
                    Clear
                </Button>
                </div>
              </form>

              {/* ---------------- SEARCH + DOWNLOAD ---------------- */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mt-40">
                <div className="relative">
                  {" "}
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IconSearch className="w-4 h-4 text-body" />{" "}
                  </div>{" "}
                  <input
                    type="text"
                    placeholder="Search...."
                    className="w-full max-w-96 h-9 rounded-md border border-gray-300 bg-white ps-9 pe-3 text-sm outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                  />{" "}
                </div>
                <Button variant="outline" size="sm">
                  <IconDownload className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              {/* ---------------- RESPONSIVE TABLE ---------------- */}
              <div className="relative w-full overflow-x-auto">
                <Table className="min-w-[1600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sr No</TableHead>
                      <TableHead>Vendor ID</TableHead>
                      <TableHead>MSISDN</TableHead>
                      <TableHead>Zip Code</TableHead>
                      <TableHead>SIM</TableHead>
                      <TableHead>IMEI</TableHead>
                      <TableHead>Plan Code</TableHead>
                      <TableHead>MSISDN Status</TableHead>
                      <TableHead>TPSP Status</TableHead>
                      <TableHead>DateTime (A)</TableHead>
                      <TableHead>Completion DateTime (B)</TableHead>
                      <TableHead>Diff in mins (A-B)</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {rows.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell>{row.srNo}</TableCell>
                        <TableCell>{row.vendorId}</TableCell>

                        <TableCell>
                            {row.msisdn}
                        </TableCell>

                        <TableCell>{row.zipCode}</TableCell>
                        <TableCell>{row.sim}</TableCell>
                        <TableCell>{row.imei}</TableCell>
                        <TableCell>{row.planCode || "-"}</TableCell>

                        {/* MSISDN STATUS */}
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold
                ${
                  row.msisdnStatus === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : row.msisdnStatus === "NEW"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
                          >
                            {row.msisdnStatus}
                          </span>
                        </TableCell>

                        {/* TPSP STATUS */}
                        <TableCell>
                          {row.tpspStatus ? (
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold
                  ${
                    row.tpspStatus === "COMPLETE"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                            >
                              {row.tpspStatus}
                            </span>
                          ) : (
                            "-"
                          )}
                        </TableCell>

                        <TableCell>{row.dateTimeA}</TableCell>
                        <TableCell>{row.dateTimeB || "-"}</TableCell>
                        <TableCell>{row.diffMins}</TableCell>

                        <TableCell>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
