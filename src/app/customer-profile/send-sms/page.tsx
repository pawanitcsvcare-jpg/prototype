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
import RequiredMark from "@/components/ui/required-mark";
import { Textarea } from "@/components/ui/textarea";

export default function CustomerProfileSendSMS() {
    return (
        <div>

            <Card className="pt-0">
                <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Send SMS</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Send a text message to the selected MSISDN</small>
                </CardHeader>

                <CardContent>


                    <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">

                        <div>
                            <Label>MSISDN
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        The phone number that will receive the SMS message
                                    </TooltipContent>
                                </Tooltip>
                                <RequiredMark></RequiredMark>
                            </Label>
                            <Input type="text" value={3322801461} disabled></Input>
                        </div>

                        <div>
                            <Label>Message 
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Enter the text message to send (maximum 500 characters)
                                    </TooltipContent>
                                </Tooltip><RequiredMark></RequiredMark>
                            </Label>
                           <Textarea></Textarea>
                        </div>


                        <div>
                            <Button type="submit" className="w-full md:w-auto">Send SMS</Button>
                        </div>



                    </div>

                </CardContent>

            </Card>
        </div>
    )
}