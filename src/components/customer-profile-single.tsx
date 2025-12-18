"use client";

import Image from "next/image";
import {
  CheckCircle,
} from "lucide-react";

import { IconUser, IconBuildingSkyscraper, IconBuilding, IconFileText, IconLock, IconCheck, IconMapPin, IconDeviceMobile, IconCalendar, IconAntenna, IconHistory, IconTicket, IconReceipt } from "@tabler/icons-react";


export default function CustomerProfileSingle() {
  return (
    <div className="w-full bg-white rounded-0xl shadow-sm p-5 h-full">
      {/* Header */}
      <div className="flex justify-center items-middle">
        <div className="relative">
             <CheckCircle className="h-4 w-4 text-green-500 fill-green-500 status-icon-profile absolute right-2" />
          <div className="h-20 w-20 rounded-full user-ptofile-photo">B</div>
        </div>
      </div>

      {/* Name */}
      <div className="mt-4 justify-center items-middle">
        <div className="flex justify-center items-middle gap-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Customer ID - 832559
          </h2>
         
        </div>
        <p className="flex text-sm text-gray-500 justify-center items-middle">
          MSISDN - 206-845-3761
        </p>
      </div>

      <button className="w-full mt-4 border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
        Submit Support Inquiry
      </button>

      <div className="mt-4 space-y-2 text-sm">

        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconUser className="h4 w-4 " /> <span>Vendor ID</span>
          </span>
          <div className="text-gray-600 font-medium">QABlCon</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconBuildingSkyscraper className="h4 w-4 " /> <span>City</span>
          </span>
          <div className="text-gray-600 font-medium">Seattle</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconBuilding className="h4 w-4 " /> <span>State</span>
          </span>
          <div className="text-gray-600 font-medium">Washington</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconMapPin className="h4 w-4 " /> <span>Zip</span>
          </span>
          <div className="text-gray-600 font-medium">98104</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconDeviceMobile className="h4 w-4 " /> <span>IMEI</span>
          </span>
          <div className="text-gray-600 font-medium">912434561243445</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconCalendar className="h4 w-4 " /> <span>Bill Cycle Frequency</span>
          </span>
          <div className="text-gray-600 font-medium">Monthly</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconCalendar className="h4 w-4 " /> <span>Bill Cycle Start Day</span>
          </span>
          <div className="text-gray-600 font-medium">27</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconAntenna className="h4 w-4 " /> <span>Carrier</span>
          </span>
          <div className="text-gray-600 font-medium">ATT</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconHistory className="h4 w-4 " /> <span>Last Action</span>
          </span>
          <div className="text-gray-600 font-medium">UpdateSubscriberProfile</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconCalendar className="h4 w-4 " /> <span>Assign Date</span>
          </span>
          <div className="text-gray-600 font-medium">07-27-2025</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconTicket className="h4 w-4 " /> <span>Plan Code</span>
          </span>
          <div className="text-gray-600 font-medium">PCTG001</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconReceipt className="h4 w-4 " /> <span>Billing Code</span>
          </span>
          <div className="text-gray-600 font-medium">-</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconLock className="h4 w-4 " /> <span>Voicemail Password</span>
          </span>
          <div className="text-gray-600 font-medium">NA</div>
        </div>

      </div>

      {/* Extra Info */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-gray-900">
            Net IP Balance
          </h3>
        </div>
        
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconCheck className="h4 w-4 " /> <span>Status</span>
          </span>
          <div className="text-gray-600 font-medium">7017</div>
        </div>

         <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconFileText className="h4 w-4 " /> <span>Description</span>
          </span>
          <div className="text-gray-600 font-medium">FindAccount: No data found</div>
        </div>

      </div>
    </div>
  );
}
