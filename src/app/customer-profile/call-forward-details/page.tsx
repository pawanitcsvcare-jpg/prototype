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

export default function CustomerProfileCallForwardDetails() {
    return (
        <div>

            <Card className="pt-0">
                <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Update Call Forward Details</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Configure call forwarding settings for the subscriber</small>
                </CardHeader>

                <CardContent>


                    <div className="col-span-6 bg-blue-100 border-l-4 shadow rounded border-blue-500 mb-6">
                        <div className="px-4 py-5 sm:p-6 flex items-start">
                            <div className="ml-3 flex flex-col">

                                <div className="text-gray-500 text-sm">
                                    Note: When Call Forwarding is enabled, you must provide a Forward To Subscriber Number. When disabled, the Forward To Subscriber Number field is optional and will be cleared.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">

                        <div>
                            <Label>MSISDN
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        This is the phone number for which call forwarding will be configured
                                    </TooltipContent>
                                </Tooltip>
                            </Label>
                            <Input type="text" value={3322801461} disabled></Input>
                        </div>

                        <div>
                            <Label>Call Forwarding Enabled Indicator
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Select whether call forwarding should be enabled or disabled for this subscriber
                                    </TooltipContent>
                                </Tooltip>
                                <RequiredMark></RequiredMark>
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Enabled Indicator" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="a">True - Enable Call Forwarding</SelectItem>
                                    <SelectItem value="b">False - Disable Call Forwarding</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Forward To Subscriber Number
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Enter the phone number where calls should be forwarded (required when Call Forwarding is enabled)
                                    </TooltipContent>
                                </Tooltip><RequiredMark></RequiredMark>
                            </Label>
                            <Input type="text" value={3322801461} className="disabled"></Input>
                        </div>


                        <div>
                            <Button type="submit" className="w-full md:w-auto">Update Call Forward</Button>
                        </div>



                    </div>

                </CardContent>

            </Card>
        </div>
    )
}