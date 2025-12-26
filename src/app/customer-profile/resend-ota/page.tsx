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
import { Input } from "@/components/ui/input";

export default function CustomerProfileResendOTA() {
    return (
        <div>

            <Card className="pt-0">
                <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Resend OTA Profile</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Resend OTA configuration to the device</small>
                </CardHeader>

                <CardContent>

                    <div className="col-span-6 bg-blue-100 border-l-4 shadow rounded border-blue-500 mb-4">
                        <div className="px-4 py-5 sm:p-6 flex items-start">
                            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg></div>
                            <div className="ml-3 flex flex-col">
                                <div className="leading-none font-medium text-gray-900">
                                    What is OTA?
                                </div>
                                <div className="text-gray-500 text-sm mt-2">
                                    OTA (Over-The-Air) profile contains device configuration settings. Resending the OTA profile will push the latest configuration to the device.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">

                        <div>
                            <Label>MSISDN (Phone Number)
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        This field is automatically populated from the customer record
                                    </TooltipContent>
                                </Tooltip>
                            </Label>
                            <Input type="text"></Input>
                        </div>



                        <div>
                            <Button type="submit" className="w-full md:w-auto">Resend OTA Profile</Button>
                        </div>



                    </div>

                </CardContent>

            </Card>
        </div>
    )
}