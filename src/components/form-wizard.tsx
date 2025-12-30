"use client"

import { useState } from "react"
import {
  Phone,
  ShieldCheck,
  ClipboardCheck,
  Send,
} from "lucide-react"

import OrderWizardFirst from "./create-new-order-components/wizard-first"
const steps = [
  {
    title: "Enter Details",
    desc: "MSISDN, Zipcode, Vendor",
    icon: Phone,
  },
  {
    title: "Validate",
    desc: "Eligibility Check",
    icon: ShieldCheck,
  },
  {
    title: "Complete",
    desc: "Fill All Fields",
    icon: ClipboardCheck,
  },
  {
    title: "Submit",
    desc: "Review & Submit",
    icon: Send,
  },
]
export default function FormWizard() {
  const [step, setStep] = useState(0)

  return (
    <div className="mx-auto">
      
      {/* 🌟 Creative Step Indicator */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
        {steps.map((item, index) => {
          const Icon = item.icon
          const isActive = step === index
          const isCompleted = step > index

          return (
            <div
              key={index}
              className={`relative flex items-start gap-4 p-5 rounded-xl border transition-all
              ${isActive && "border-blue-600 bg-blue-50 shadow-sm"}
              ${isCompleted && "border-green-500 bg-green-50"}
              ${!isActive && !isCompleted && "border-gray-200 bg-white"}
              `}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full
                ${isActive && "bg-blue-600 text-white"}
                ${isCompleted && "bg-green-600 text-white"}
                ${!isActive && !isCompleted && "bg-gray-100 text-gray-500"}
                `}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h4
                  className={`text-sm font-semibold
                  ${isActive && "text-blue-700"}
                  ${isCompleted && "text-green-700"}
                  `}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {item.desc}
                </p>
              </div>

              {/* Step Number */}
              <span className="absolute top-3 right-4 text-xs font-medium text-gray-400">
                Step {index + 1}
              </span>
            </div>
          )
        })}
      </div>

      {/* 🧩 Form Content */}
      <div className="">
        {step === 0 && <OrderWizardFirst />}

        {step === 1 && (
          <input
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Full Name"
          />
        )}

        {step === 2 && (
          <p className="text-gray-700">
            Please review your information before submitting.
          </p>
        )}
      </div>

      {/* 🔀 Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className="px-5 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-40"
        >
          Back
        </button>

        <button
          onClick={() => setStep(step + 1)}
          disabled={step === steps.length - 1}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
        >
          {step === steps.length - 1 ? "Finish" : "Continue"}
        </button>
      </div>
    </div>
  )
}
