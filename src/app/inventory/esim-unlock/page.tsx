
import * as React from "react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

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
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

import { Textarea } from "@/components/ui/textarea"


// -------------------- PAGE --------------------
export default function eSIMUnlock() {
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

                        <CardHeader className="border-b py-0flex items-center gap-0 space-y-0 py-5 sm:flex-row pt-6">
                            <CardTitle>eSIM Unlock</CardTitle>
                        </CardHeader>

                        <CardContent>
                            {/* ---------------- FILTER FORM ---------------- */}
                            <form className="grid gap-4 items-end py-6 pt-0 grid-cols-12">

                                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4">
                                    <Label>Enter Comma Separated eSIM (e.g., 1234567890,9876543210)
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Maximum 100 eSIMs per request. Only numbers and commas allowed.
                                            </TooltipContent>
                                        </Tooltip>
                                    </Label>
                                    <Textarea></Textarea>
                                </div>



                                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4">
                                    <Button type="submit" className="w-full md:w-auto">
                                        Submit
                                    </Button>
                                    <Button variant="secondary">Clear</Button>
                                </div>
                            </form>

                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
