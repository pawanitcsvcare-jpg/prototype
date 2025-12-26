"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"


import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import RequiredMark from "@/components/ui/required-mark";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

export default function CustomerProfileSwitchMVNO() {
    return (
        <div>

            <Card className="pt-0">
                <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Switch MVNO</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Switch the MVNO plan for the selected subscriber</small>
                </CardHeader>

                <CardContent>


                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">


                         <div>
                            <Label>Vendor/MVNO
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                       Select the vendor/MVNO to switch to
                                    </TooltipContent>
                                </Tooltip>
                                <RequiredMark></RequiredMark>
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Vendor/MVNO" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="a">Admin</SelectItem>
                                    <SelectItem value="b">AttLiveTestAbhi</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                         <div>
                            <Label>Select Bucket
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      Select the plan/tariff bucket to switch to
                                    </TooltipContent>
                                </Tooltip>
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Plan/Tariff" />
                                </SelectTrigger>
                                <SelectContent>
                                    
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Button type="submit" className="w-full md:w-auto">Submit</Button>
                        </div>



                    </div>

                </CardContent>

            </Card>
        </div>
    )
}