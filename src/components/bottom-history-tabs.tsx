"use client"

import { useRouter, usePathname } from "next/navigation"
import { usePageHistory } from "@/hooks/usePageHistory"
import { cn } from "@/lib/utils"

export default function BottomHistoryTabs() {
  const router = useRouter()
  const pathname = usePathname()
  const { tabs, clearTabs } = usePageHistory()

  if (!tabs.length) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-sm bottom-history-tabs">
      <div className="flex items-center">

        {/* Tabs */}
        <div className="flex-1 flex overflow-x-auto">
          {tabs.map(tab => {
            const isActive = tab.path === pathname

            return (
              <button
                key={tab.path}
                onClick={() => router.push(tab.path)}
                className={cn(
                  "px-4 py-2 text-sm whitespace-nowrap border-r",
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-muted-foreground hover:bg-gray-50"
                )}
              >
                {tab.title}
              </button>
            )
          })}
        </div>

        {/* Clear Button */}
        <button
          onClick={clearTabs}
          className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-l whitespace-nowrap"
        >
          Clear
        </button>

      </div>
    </div>
  )
}
