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
import RequiredMark from "@/components/ui/required-mark";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

export default function CustomerProfileStatus() {
    return(
        <div>
       
            <Card className="pt-0">
                 <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Change Status</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Modify the account status by suspending, restoring, reconnecting, or canceling the service.</small>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">
                    <div>
                        <Label>Type of Change 
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Select the type of status change you want to perform
                                </TooltipContent>
                            </Tooltip>
                            <RequiredMark></RequiredMark>
                            </Label>

                         <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="a">Suspend</SelectItem>
                                <SelectItem value="b">Cancel</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label>Process Type
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Select how the status change should be processed
                                </TooltipContent>
                            </Tooltip>
                            <RequiredMark></RequiredMark>
                        </Label>
                         <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="a">Electronically Change</SelectItem>
                                <SelectItem value="b">Non-Electronically Change</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                     <div>
                        <Button type="submit" className="w-full md:w-auto">Change Status</Button>
                     </div>


                    </div>

                </CardContent>

            </Card>
        </div>
    )
}