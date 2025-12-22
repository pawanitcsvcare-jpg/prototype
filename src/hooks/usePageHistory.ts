"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type PageTab = {
  path: string
  title: string
}

const MAX_TABS = 12

export function usePageHistory() {
  const pathname = usePathname()
  const [tabs, setTabs] = useState<PageTab[]>([])

  useEffect(() => {
    const stored = sessionStorage.getItem("page-tabs")
    let parsed: PageTab[] = stored ? JSON.parse(stored) : []

    // already exists → no duplicate
    if (!parsed.find(t => t.path === pathname)) {
      const title =
        pathname
          .split("/")
          .pop()
          ?.replace(/-/g, " ")
          ?.replace(/\b\w/g, c => c.toUpperCase()) || "Page"

      parsed = [...parsed, { path: pathname, title }]

      // 🔥 keep only last 12
      if (parsed.length > MAX_TABS) {
        parsed = parsed.slice(parsed.length - MAX_TABS)
      }

      sessionStorage.setItem("page-tabs", JSON.stringify(parsed))
    }

    setTabs(parsed)
  }, [pathname])

  const clearTabs = () => {
    sessionStorage.removeItem("page-tabs")
    setTabs([])
  }

  return { tabs, clearTabs }
}
