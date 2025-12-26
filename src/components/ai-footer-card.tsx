"use client"

import React from "react"
import { Mic, Plus, Sparkles, Send } from "lucide-react"


/* ---------------- FEATURES DATA ---------------- */

const features = [
  {
    title: "SIM Management",
    description: "Track SIM availability, assign MSISDNs, monitor usage one dashboard.",
    icon: Sparkles,
  },
  {
    title: "Plan Management",
    description: "Configure data, voice, SMS bundles, billing cycles.",
    icon: Sparkles,
  },
  {
    title: "Wholesale Operations",
    description: "Manage bulk SIM allocations, pricing tiers, commissions, invoicing.",
    icon: Sparkles,
  },
]


export default function AIFooterPage() {
  return (

    <div className="min-h-screena ai-portal-background-bg22">

      <div className="flex flex-col items-center px-4">



        {/* ---------------- FEATURES ---------------- */}
        <div className="mt-16 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-white p-6 hover:shadow-md transition"
            >
              <feature.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-3 font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ---------------- FOOTER CTA ---------------- */}
        <div className="mt-16 mb-10">
          <button className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800">
            Start Asking
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
