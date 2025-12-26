"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import { Input } from "@/components/ui/input";
import RequiredMark from "@/components/ui/required-mark";

export default function CustomerProfileNetIP() {
    return (
        <div>

            <Card className="pt-0">
                <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Net IP Management</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Check and manage Net IP account status and settings</small>
                </CardHeader>

                <CardContent>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">

                        <div>
                            <Button type="submit" className="w-full md:w-auto">Check Net IP</Button>
                        </div>



                    </div>

                </CardContent>

            </Card>
        </div>
    )
}