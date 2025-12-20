"use client";

import * as React from "react";
import Link from "next/link";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { IconDownload, IconBuildingSkyscraper } from "@tabler/icons-react";

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
import CustomerProfileSingle from "../../../components/customer-profile-single";
import CustomerProfileTab from "../../../components/customer-profile-tab";

// -------------------- PAGE --------------------
export default function Page() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }as React.CSSProperties}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-1 flex-col">
          <Card className="@container/card p-0">
            <CardContent className="profilepage-bg p-0">
              <div className="flex">
                {/* Left panel */}
                <div className="w-1/4">
                  <CustomerProfileSingle />
                </div>

                {/* Profile tab */}
                <div className="w-3/4">
                <div className="relative">
                  <CustomerProfileTab />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
