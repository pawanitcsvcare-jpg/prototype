import React from "react";
import { Smartphone } from "lucide-react";
import SubscriptionDetails from "./subscription-details";
import OfferingFeaturesCodeTab from "@/components/offering-features-tab"
import CustomerNotes from "@/components/customer-note"
import AddNotes from "./add-note";

export default function CarrierSIMDetails() {
  return (
    <div>
    <div className="w-full rounded-lg border bg-white p-4">
      <div className="w-full rounded-lg bg-blue-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Smartphone className="h-5 w-5 text-gray-700" />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900"> MSISDN </p>
              <p className="text-sm text-gray-500">206-845-3761</p>
            </div>
          </div>

          <button className="rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
            Copy
          </button>
        </div>
      </div>
 <h4 className="font-medium text-lg pt-4 mt-2">Subscription Details</h4>
      <div className="flex pt-4 gap-4">
        
        <div className="w-2/4">
            <SubscriptionDetails />
        </div>
        <div className="w-2/4">
            <OfferingFeaturesCodeTab />
        </div>


      </div>

    </div>
<div className="flex pt-4 gap-4">
  <div className="w-2/4">
       <CustomerNotes />
  </div>


    <div className="w-2/4">
      <AddNotes />
    </div>
    </div>

    </div>
  );
}
