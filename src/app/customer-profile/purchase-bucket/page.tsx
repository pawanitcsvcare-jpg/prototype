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
import { Input } from "@/components/ui/input";

export default function CustomerProfilePurchaseBucket() {
    return(
        <div>
       
            <Card className="pt-0">
                 <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Purchase Master Bucket</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Select a plan and configure bucket purchase settings</small>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">
                   
                    <div>
                        <Label>Select Plan/Tariff
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                      Select a plan to view details and proceed with purchase
                                </TooltipContent>
                            </Tooltip>
                            <RequiredMark></RequiredMark>
                        </Label>
                         <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Plan/Tariff" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="a">AttTestLiveAbhi0101540 (AttTestLiveAbhi0101540)</SelectItem>
                                <SelectItem value="b">TestPlanwo (TPW1)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                      <div>
                        <Label>Keep Expiry Same</Label>
                         <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Plan/Tariff" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="a">YES - Keep Current Expiry</SelectItem>
                                <SelectItem value="b">NO - Set New Expiry Date</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    

                     <div>
                        <Button type="submit" className="w-full md:w-auto">Purchase Bucket</Button>
                     </div>

                    <div className="col-span-6 bg-blue-100 border-l-4 shadow rounded border-blue-500">
                        <div className="px-4 py-5 sm:p-6 flex items-start">
                            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg></div>
                            <div className="ml-3 flex flex-col">
                            <div className="leading-none font-medium text-gray-900">
                                What does this mean?
                            </div>
                            <div className="text-gray-500 text-sm mt-2">
                               YES: Maintains the current expiry date from the existing plan
                            </div>
                            <div className="text-gray-500 text-sm mt-2">
                            NO: Sets a new expiry date based on the selected plan's validity period
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>

                </CardContent>

            </Card>
        </div>
    )
}