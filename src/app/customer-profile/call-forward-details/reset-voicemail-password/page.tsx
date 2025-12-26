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

export default function CustomerProfileResetVoicemailPassword() {
    return (
        <div>

            <Card className="pt-0">
                <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Reset Voicemail Password</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Enter a new 8-digit PIN to reset the voicemail password for this number</small>
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
                                        The phone number associated with this voicemail password reset
                                    </TooltipContent>
                                </Tooltip>
                                <RequiredMark></RequiredMark>
                            </Label>
                            <Input type="text" value={3322801461} disabled></Input>
                        </div>

                        <div>
                            <Label>New PIN
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      PIN must be exactly 8 digits (numbers only)
                                    </TooltipContent>
                                </Tooltip>
                                <RequiredMark></RequiredMark>
                            </Label>
                            <Input type="text" ></Input>
                        </div>

                        <div>
                            <Button type="submit" className="w-full md:w-auto">Reset Password</Button>
                        </div>

                    </div>

                </CardContent>

            </Card>
        </div>
    )
}