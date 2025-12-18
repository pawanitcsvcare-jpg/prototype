"use client"

import { ExternalLink } from "lucide-react"

const notes = [
  {
    title: "Offering Code RMVVM added successfully!",
    date: "07/27/2025",
  },
  {
    title: "ASYNC",
    description: "Activation ASYNC Success 89012802331277837314",
    date: "07/27/2025",
  },
  {
    title: "Api",
    description: "ActivatePlan PCTG001 Successfully",
    date: "07/27/2025",
  },
  {
    title: "ChangeAutoRenew Success",
    date: "07/27/2025",
  },
  {
    title: "QABICon",
    description: "Billing Date changed successfully!",
    date: "07/27/2025",
  }
 
]

export default function CustomerNotes() {
  return (
    <div className="w-full max-w-xl rounded-lg border bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 py-3">
        <h3 className="font-medium text-lg">
          Customer Notes
        </h3>
        <ExternalLink className="h-4 w-4 text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>

      {/* Notes List */}
      <div className="max-h-96 overflow-y-auto">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-3 border-b px-4 py-3 last:border-none hover:bg-gray-50 transition"
          >
            {/* Left Content */}
            <div>
              <p className="text-sm font-medium text-gray-800">
                {note.title}
              </p>
              {note.description && (
                <p className="mt-1 text-xs text-gray-500">
                  {note.description}
                </p>
              )}
            </div>

            {/* Date Badge */}
            <span className="whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              {note.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
