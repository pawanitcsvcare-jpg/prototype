"use client";

import React, { useState } from "react";
import OfferingFeaturesCode from "./offering-features-code";
import TPSPStatus from "./tpsp-Status";
import BalanceDetails from "./balance-details";

export default function OfferingFeaturesCodeTab() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Offering and Feature Code Details",
      content: (
          <div className="mb-2 text-body">
            <OfferingFeaturesCode />
          </div>
      ),
    },
    {
      title: "TPSP Status",
      content: (
          <div className="mb-2 text-body">
            <TPSPStatus />
          </div>

      ),
    },
    {
      title: "Balance Details",
      content: (
          <div className="mb-2 text-body">
          <BalanceDetails />
          </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-5 border-1-2">
      <div className="space-y-2 text-sm">
        {accordionData.map((item, index) => (
          <div key={index}>
            <h2>
              <button
                type="button"
                className={`flex items-center justify-between w-full bg-gray-100 p-4 text-md-1 border font-medium text-body rounded-md hover:text-heading hover:bg-neutral-secondary-medium gap-3 ${
                  openIndex === index ? "bg-neutral-secondary-medium" : ""
                }`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div
              className={`overflow-hidden transition-all duration-300 border border-t-0 border-default rounded-b-md shadow-xs ${
                openIndex === index ? "max-h-96 p-4 md:p-5" : "max-h-0 p-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
