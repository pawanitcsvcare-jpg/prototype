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

export default function CustomerProfilePurchaseTopupBucket() {
    return(
        <div>
       
            <Card className="pt-0">
                 <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Purchase Topup Bucket</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Select a topup plan to add additional services to your account</small>
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
                                      Select a topup plan to view details and proceed with purchase
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
                        <Button type="submit" className="w-full md:w-auto">Purchase Topup Bucket</Button>
                     </div>

                    </div>

                </CardContent>

            </Card>
        </div>
    )
}