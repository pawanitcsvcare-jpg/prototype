"use client"

import { Trash2 } from "lucide-react"
import AISearchBox from "./AISearchBox"

type Props = {
  query: string
  onChange: (v: string) => void
  onClear: () => void
}

export default function AIBottomInput({
  query,
  onChange,
  onClear,
}: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white px-4 py-3">
      <div className="mx-auto flex w-full max-w-4xl items-end gap-3">
        <div className="flex-1">
          <AISearchBox
            query={query}
            onChange={onChange}
            placeholder="Ask anything"
          />
        </div>
      </div>

      <button
        onClick={onClear}
        className="clear-button mt-3 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-100"
      >
        <Trash2 size={16} />
        Clear Chat
      </button>
    </div>
  )
}
