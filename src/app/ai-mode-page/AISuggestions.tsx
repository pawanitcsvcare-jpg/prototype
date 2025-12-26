"use client"

import { Sparkles } from "lucide-react"

const suggestions = [
  "Top Five Customer Search Report",
  "Top Five MSISDNs Identified from Recent Search Activity",
  "Top Five High-Impact Errors Affecting Operational Stability",
]

export default function AISuggestions({
  onSelect,
}: {
  onSelect: (text: string) => void
}) {
  return (
    <div className="mt-6 w-full max-w-3xl space-y-3">
      {suggestions.map((text, i) => (
        <button
          key={i}
          onClick={() => onSelect(text)}
          className="flex items-center gap-3 text-left text-gray-700 hover:text-gray-900"
        >
          <Sparkles size={16} />
          <span className="text-sm">{text}</span>
        </button>
      ))}
    </div>
  )
}
