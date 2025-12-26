"use client"

import { useState, useEffect, useRef } from "react"
import { Toaster, toast } from "sonner"
import AIHeader from "@/components/ai-header"
import AIFooterPage from "@/components/ai-footer-card"
import { recentSearchData } from "@/lib/recent-search-data"

import AIWelcome from "@/app/ai-mode-page/AIWelcome"
import AISearchBox from "@/app/ai-mode-page/AISearchBox"
import AISuggestions from "@/app/ai-mode-page/AISuggestions"
import AIResultTable from "@/app/ai-mode-page/AIResultTable"
import AIBottomInput from "@/app/ai-mode-page/AIBottomInput"
import { useRouter } from "next/navigation"

export default function AIModePage() {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<any[]>([])
  const [chatMode, setChatMode] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const extractNumber = (text: string) =>
    parseInt(text.match(/\d+/)?.[0] || "5")

 const handleSearch = (text: string) => {
  setQuery(text)
  const trimmed = text.trim()

  // 🔥 1. MSISDN → DIRECT REDIRECT
  if (isValidMSISDN(trimmed)) {
    const msisdn = trimmed.replace(/\D/g, "")
    router.push(`/customer-profile/${msisdn}`)
    return
  }

  // 🔹 2. REPORT SEARCH
  const q = trimmed.toLowerCase()

  if (q.includes("customer")) {
    setResult(recentSearchData.slice(0, extractNumber(text)))
    setChatMode(true)
    return
  }

  toast.error("No Data Found")
}


  const clearChat = () => {
    setQuery("")
    setResult([])
    setChatMode(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (chatMode) bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMode])

  const getReportUrl = () => {
    if (query.toLowerCase().includes("customer")) {
      return "/customer-profile/recent-search"
    }
    return undefined
  }

const isValidMSISDN = (value: string) => {
  const cleaned = value.replace(/\D/g, "")
  return cleaned.length >= 10 && cleaned.length <= 15
}
const router = useRouter()


  return (
    <div className="ai-portal-background-bg" id="ai-page-root">
      <AIHeader />

      <div className="flex flex-col items-center px-4 ai-middle-result-page">
        {!chatMode && (
          <>
            <AIWelcome userName="Johnson" />
            <div className="mt-8 w-full max-w-3xl">
              <AISearchBox query={query} onChange={handleSearch} />
            </div>
            <AISuggestions onSelect={handleSearch} />
            <AIFooterPage />
          </>
        )}

        {chatMode && result.length > 0 && (
          <AIResultTable
            data={result}
            heading="Customer Search Result"
            goToUrl={getReportUrl()}
          />
        )}

        <div ref={bottomRef} />
      </div>

      <Toaster position="top-right" richColors />

      {chatMode && (
        <AIBottomInput
          query={query}
          onChange={handleSearch}
          onClear={clearChat}
        />
      )}
    </div>
  )
}
