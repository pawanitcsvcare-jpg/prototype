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

export default function CustomerProfilePhoneConfiq() {
    return(
        <div>
       
            <Card className="pt-0">
                 <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Change SIM</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Replace the current SIM card with a new one</small>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">
                    <div>
                        <Label>MSISDN 
                            
                            </Label>

                        <Input type="text" value={8708345401} disabled></Input>
                    </div>

                    <div>
                        <Label>Current SIM
                            <RequiredMark></RequiredMark>
                        </Label>
                        <Input type="text" value={8708345401} disabled></Input>
                    </div>

                    <div>
                        <Label>New SIM
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                   SIM must be 8-25 alphanumeric characters
                                </TooltipContent>
                            </Tooltip>
                        </Label>
                         <Input type="text" ></Input>
                    </div>

                    <div>
                        <Label>ZIP Code
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  Optional: 5-digit zip code for location verification
                                </TooltipContent>
                            </Tooltip>
                        </Label>
                         <Input type="text" ></Input>
                    </div>

                     <div>
                        <Button type="submit" className="w-full md:w-auto">Change SIM</Button>
                     </div>


                    </div>

                </CardContent>

            </Card>

             <Card className="pt-0 mt-5">
                 <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Change Mobile Number</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Update the mobile number (MSISDN) for this customer account</small>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">
                    <div>
                        <Label>Current MSISDN</Label>

                        <Input type="text" value={8708345401} disabled></Input>
                    </div>

                    <div>
                        <Label>ZIP Code
                              <RequiredMark></RequiredMark>
                        </Label>
                         <Input type="text" ></Input>
                    </div>

                       <div>
                        <Label>Process Type
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Electronically: System automatically assigns new number. Non-Electronically: You specify the new number.
                                </TooltipContent>
                            </Tooltip>
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
                        <Button type="submit" className="w-full md:w-auto">Change Mobile Number</Button>
                    </div>


                    </div>

                </CardContent>

            </Card>

            <Card className="pt-0 mt-5">
                 <CardHeader className="border-b py-5 gap-0">
                    <CardTitle>Swap IMEI</CardTitle>
                    <small className="text-gray-500 text-sm pt-1">Replace the current device IMEI with a new one</small>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 items-end py-6 pt-0">
                    <div>
                        <Label>MSISDN</Label>

                        <Input type="text" value={8708345401} disabled></Input>
                    </div>

                    <div>
                        <Label>New IMEI
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                   IMEI must be 15 digits
                                </TooltipContent>
                            </Tooltip>
                              <RequiredMark></RequiredMark>
                        </Label>
                         <Input type="text" ></Input>
                    </div>

                       <div>
                        <Label>Reason Code
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                   Select the reason for swapping the IMEI
                                </TooltipContent>
                            </Tooltip>
                        </Label>
                            <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Reason Code" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="a">EBuyers remorse exchange</SelectItem>
                                <SelectItem value="b">Customer owned equipment</SelectItem>
                                <SelectItem value="b">Customer purchased equipment with no contract</SelectItem>
                                <SelectItem value="b">Customer received incorrect equipment</SelectItem>
                                <SelectItem value="b">Defective equipment</SelectItem>
                                <SelectItem value="b">Equipment parking failure(PARK_FAILURE)</SelectItem>
                                <SelectItem value="b">Insurance claim(INS_CLAIM)</SelectItem>
                                 <SelectItem value="b">iPhone purchase(IPHONE)</SelectItem>
                                 <SelectItem value="b">Other</SelectItem>

                            </SelectContent>
                        </Select>
                    </div>


                    <div>
                        <Label>ZIP Code
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 cursor-pointer text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                 Optional: 5-digit zip code for location verification
                                </TooltipContent>
                            </Tooltip>
                              <RequiredMark></RequiredMark>
                        </Label>
                         <Input type="text" ></Input>
                    </div>


                    <div>
                        <Button type="submit" className="w-full md:w-auto">Swap IMEI</Button>
                    </div>


                    </div>

                </CardContent>

            </Card>

        </div>
    )
}