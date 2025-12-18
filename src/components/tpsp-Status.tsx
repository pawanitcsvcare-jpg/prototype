"use client"

import * as React from "react"
import Link from "next/link"

// -------------------- PAGE --------------------
export default function TPSPStatus() {
  return (



              <div className="relative w-full ">
               <div className="mt-2 space-y-4">
              <div className="flex">
                <span className="text-muted-foreground profile-label-texr">Result Code</span>
                <span className="font-semibold">1000 </span>
              </div>
              </div>
               <div className="mt-2 space-y-4">
              <div className="flex">
                <span className="text-muted-foreground profile-label-texr">Result Status</span>
                <span className="font-semibold">AGW_SERVICE_SUCCESS </span>
              </div>
              </div>
               <div className="mt-2 space-y-4">
              <div className="flex">
                <span className="text-muted-foreground profile-label-texr">Air Time Expiration</span>
                <span className="font-semibold">12-28-2025 </span>
              </div>
              </div>
               <div className="mt-2 space-y-4">
              <div className="flex">
                <span className="text-muted-foreground profile-label-texr">Monetary Balance</span>
                <span className="font-semibold">$ 50.00 </span>
              </div>
              </div>
               <div className="mt-2 space-y-4">
              <div className="flex">
                <span className="text-muted-foreground profile-label-texr">Auto Renew Status</span>
                <span className="font-semibold">On </span>
              </div>
              </div>
              <div className="mt-2 space-y-4">
              <div className="flex">
                <span className="text-muted-foreground profile-label-texr">Auto Renew Execution Date</span>
                <span className="font-semibold">12-27-2025 </span>
              </div>
              </div>
       </div>

  )
}
