"use client";

import {
  IconCheck,
  IconDeviceMobile,
  IconLock,
  IconMapPin,
  IconCalendar,
  IconBuilding,
  IconBuildingSkyscraper,
  IconHistory,
  IconReceipt,
  IconTicket,
  IconAntenna,
  IconFileText
} from "@tabler/icons-react";

export default function SubscriptionDetails() {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-5 border-1-2">
    

      <div className="space-y-2 text-sm">
        {/* Status */}
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconCheck className="w-4 h-4" /> Status
          </span>
          <div className="text-gray-600 font-medium">Active</div>
        </div>

   
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconFileText className="w-4 h-4" /> Status Reason Code
          </span>
          <div className="text-gray-600 font-medium">CA</div>
        </div>

   
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconDeviceMobile className="w-4 h-4" /> Equipment Type
          </span>
          <div className="text-gray-600 font-medium">G</div>
        </div>


        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconAntenna className="w-4 h-4" /> Technology Type
          </span>
          <div className="text-gray-600 font-medium">GSM</div>
        </div>

      
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconDeviceMobile className="w-4 h-4" /> IMSI
          </span>
          <div className="text-gray-600 font-medium">310280127785056</div>
        </div>


        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconLock className="w-4 h-4" /> PUK1
          </span>
          <div className="text-gray-600 font-medium">16152705</div>
        </div>


        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconLock className="w-4 h-4" /> PUK2
          </span>
          <div className="text-gray-600 font-medium">14418235</div>
        </div>


        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconDeviceMobile className="w-4 h-4" /> IMEI
          </span>
          <div className="text-gray-600 font-medium">912434561243445</div>
        </div>


        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconFileText className="w-4 h-4" /> IMEI Type
          </span>
          <div className="text-gray-600 font-medium">W7</div>
        </div>

        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconDeviceMobile className="w-4 h-4" /> SIM
          </span>
          <div className="text-gray-600 font-medium">8901280233127787314</div>
        </div>


        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconBuilding className="w-4 h-4" /> Manufacturer Make
          </span>
          <div className="text-gray-600 font-medium">Unknown Manufacturer</div>
        </div>

        {/* Manufacturer Model */}
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconBuilding className="w-4 h-4" /> Manufacturer Model
          </span>
          <div className="text-gray-600 font-medium">unknown GSM</div>
        </div>

        {/* Billing Account Number */}
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconReceipt className="w-4 h-4" /> Billing Account Number
          </span>
          <div className="text-gray-600 font-medium">298136016637</div>
        </div>

        {/* Billing Market */}
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconMapPin className="w-4 h-4" /> Billing Market
          </span>
          <div className="text-gray-600 font-medium">NWS</div>
        </div>

        {/* Billing Sub Market */}
        <div className="flex items-center">
          <span className="text-gray-500 flex items-center gap-1 profile-label-texr">
            <IconMapPin className="w-4 h-4" /> Billing Sub Market
          </span>
          <div className="text-gray-600 font-medium">PNW</div>
        </div>
      </div>
    </div>
  );
}
