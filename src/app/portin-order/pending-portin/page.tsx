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

// -------------------- TYPES --------------------
type ActionKey = "update" | "query" | "cancel";

// -------------------- ACTION MAP (FIXED) --------------------
const actionMap: Record<ActionKey, (row: any) => any> = {
  update: (row) => ({
    label: "Update",
    onClick: () => console.log("Update", row.id),
  }),
  query: (row) => ({
    label: "Query",
    onClick: () => console.log("Query", row.id),
  }),
  cancel: (row) => ({
    label: "Cancel",
    danger: true,
    onClick: () => console.log("Cancel", row.id),
  }),
};

// -------------------- DATA --------------------
const rows = [
  {
    id: 1,
    msisdn: "706-216-9582",
    sim: "",
    vendor: "DEMO_TESTMVNO",
    status: "OP-Open",
    message: "Success",
    date: "03-28-2024 15:10:15",
    actions: {
      primary: ["update"],
      secondary: ["query"],
      secondary2: ["cancel"],
    },
  },
  {
    id: 2,
    msisdn: "470-404-9079",
    sim: "89012802331277808828",
    vendor: "powermobile",
    status: "CF-Confirmed",
    message: "Subscriber not eligible",
    date: "03-28-2024 16:29:12",
    actions: {
      primary: ["query"],
      secondary2: ["cancel"], // ✅ typo fixed
    },
  },
];

// -------------------- PAGE --------------------
export default function PendingPortin() {
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
              <CardTitle>Pending Portin</CardTitle>
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
</form>;


              {/* ---------------- TABLE ---------------- */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>MSISDN</TableHead>
                      <TableHead>SIM</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Message</TableHead>
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

                        <TableCell>
                          <span
                            className={`rounded px-2 py-1 text-xs font-semibold ${
                              row.status === "OP-Open"
                                ? "bg-sky-100 text-sky-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {row.status}
                          </span>
                        </TableCell>

                        <TableCell>{row.message}</TableCell>
                        <TableCell>{row.date}</TableCell>

                        <TableCell>
                          <ActionMenu
                            items={[
                              ...(row.actions?.primary || []),
                              ...(row.actions?.secondary || []),
                              ...(row.actions?.secondary2 || []),
                            ]
                              .map(
                                (key) =>
                                  actionMap[key as ActionKey]?.(row)
                              )
                              .filter(Boolean)}
                          />
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
