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

export default function CustomerProfileSuspendedService() {
    return(
        <div>
       
            <Card className="pt-0">
                 <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Suspend Service</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Temporarily suspend service for this account. You can restore it later if needed.</small>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">
                    <div>
                        <Label>MSISDN 
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    This is the phone number that will be suspended
                                </TooltipContent>
                            </Tooltip>
                            </Label>

                        <Input type="text" value={8708345401} disabled></Input>
                    </div>

                    <div>
                        <Label>Retain Balance
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                     Choose whether to keep the account balance when suspending
                                </TooltipContent>
                            </Tooltip>
                            <RequiredMark></RequiredMark>
                        </Label>
                         <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="a">Yes - Keep the current balance</SelectItem>
                                <SelectItem value="b">No - Remove the balance</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                     <div>
                        <Button type="submit" className="w-full md:w-auto">Suspend Service</Button>
                     </div>


                    </div>

                </CardContent>

            </Card>
        </div>
    )
}