"use client"

import { useEffect, useRef, useState } from "react"
import { MoreVertical } from "lucide-react"

type ActionItem = {
  label: string
  onClick?: () => void
  danger?: boolean
}

type ActionMenuProps = {
  items: ActionItem[]
}

export default function ActionMenu({ items }: ActionMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      {/* 3-dot button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md p-2 hover:bg-muted"
      >
        <MoreVertical className="h-5 w-5 text-muted-foreground" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="fixed right-30 z-50 mt-2 w-40 rounded-md border bg-background shadow-md">
          <ul className="py-1 text-sm">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-muted
                  ${item.danger ? "text-red-600 hover:bg-red-50" : ""}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
