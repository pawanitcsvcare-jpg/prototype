"use client"

import { Mic, Plus } from "lucide-react"

type Props = {
  query: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function AISearchBox({
  query,
  onChange,
  placeholder = "Ask anything...",
}: Props) {
  return (
    <div className="relative rounded-2xl border bg-gray-50 px-4 py-3 shadow-sm">
     <textarea
  rows={2}
  value={query}
  onChange={(e) => onChange(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onChange(query)
    }
  }}
  placeholder={placeholder}
  className="w-full resize-none bg-transparent text-sm outline-none ai-textarea-height"
/>
      <button className="absolute left-3 bottom-3 text-gray-500">
        <Plus size={18} />
      </button>
      <button className="absolute right-3 bottom-3 text-gray-500">
        <Mic size={18} />
      </button>
    </div>
  )
}
