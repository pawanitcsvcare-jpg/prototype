"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, Plus, Sparkles, Trash2 } from "lucide-react"
import { Toaster, toast } from "sonner"
import AIHeader from "@/components/ai-header"
import AIFooterPage from "@/components/ai-footer-card"
import { recentSearchData, recentSearchDataColumns, } from "@/lib/recent-search-data"

export default function AIModePage() {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<typeof recentSearchData>([])
  const [chatMode, setChatMode] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  const extractNumber = (text: string) => {
    const match = text.match(/\d+/)
    return match ? parseInt(match[0]) : 5
  }

  const handleSearch = (text: string) => {
    setQuery(text)

    const lowerText = text.toLowerCase()

    // ✅ CUSTOMER → HAS DATA
    if (lowerText.includes("customer")) {
      const count = extractNumber(text)
      setResult(recentSearchData.slice(0, count))
      setChatMode(true)
      return
    }

    // ❌ MSISDN → NO DATA
    if (lowerText.includes("msisdn")) {
      toast.error("No Data Found", {
        description: "No MSISDN records are available for the selected query.",
      })
      return
    }

    // ❌ ERRORS → NO DATA
    if (lowerText.includes("error")) {
      toast.error("No Data Found", {
        description: "No high-impact error records are available at this time.",
      })
      return
    }

    // ❌ DEFAULT
    toast.info("No Data Found", {
      description: "Please try a different search query.",
    })
  }


  const clearChat = () => {
    setQuery("")
    setResult([])
    setChatMode(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (chatMode) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [chatMode, result])

  // ✅ DEFINE FIRST
  const pageHeadingMap = {
    customer: "Customer Search Result",
    sim: "SIM Search Result",
    msisdn: "MSISDN Search Result",
  }

  // ✅ THEN USE IT
  const getHeadingByQuery = (query: string) => {
    const q = query.toLowerCase()

    if (q.includes("customer")) return pageHeadingMap.customer
    if (q.includes("sim")) return pageHeadingMap.sim
    if (q.includes("msisdn")) return pageHeadingMap.msisdn

    return "Search Result"
  }
  return (
    <div className="ai-portal-background-bg" id="ai-page-root">
      <AIHeader />

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center px-4 pb-32 fix-heights overflow-auto">
        {/* DEFAULT VIEW */}
        {!chatMode && (
          <>
            <div className="mt-24 text-center">
              <h1 className="text-3xl font-semibold text-gray-900">
                Hi Johnson, what&apos;s on your mind today?
              </h1>
            </div>

            {/* INPUT */}
            <div className="mt-8 w-full max-w-3xl">
              <div className="relative rounded-2xl border bg-gray-50 px-4 py-3 shadow-sm">
                <textarea
                  rows={2}
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full resize-none bg-transparent text-sm outline-none ai-textarea-height"
                />

                <button className="absolute left-3 bottom-3 text-gray-500">
                  <Plus size={18} />
                </button>

                <button className="absolute right-3 bottom-3 text-gray-500">
                  <Mic size={18} />
                </button>
              </div>
            </div>

            {/* SUGGESTIONS */}
            <div className="mt-6 w-full max-w-3xl space-y-3">
              {[
                "Top Five Customer Search Report",
                "Top Five MSISDNs Identified from Recent Search Activity",
                "Top Five High-Impact Errors Affecting Operational Stability",
              ].map((text, i) => (
                <button
                  key={i}
                  onClick={() => handleSearch(text)}
                  className="flex items-center gap-3 text-left text-gray-700 hover:text-gray-900"
                >
                  <Sparkles size={16} />
                  <span className="text-sm">{text}</span>
                </button>
              ))}
            </div>

            <AIFooterPage />
          </>
        )}

        {/* CHAT RESULT TABLE */}
        {chatMode && result.length > 0 && (
          <div className="mt-10 w-full px-3 sm:px-4">

            <div className="mx-auto max-w-4xl overflow-x-auto chat-bg-all">

              <h3 className="mb-3 text-md font-semibold text-gray-700">
                {getHeadingByQuery(query)}
              </h3>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full border-collapse text-sm">

                  {/* TABLE HEAD */}
                  <thead className="bg-gray-50">
                    <tr>
                      {recentSearchDataColumns.map((col) => (
                        <th
                          key={col.key}
                          className="border px-3 py-2 text-left font-medium text-gray-600"
                        >
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* TABLE BODY */}
                  <tbody>
                    {result.map((row, index) => (
                      <tr key={row.srno} className="hover:bg-gray-50">
                        {recentSearchDataColumns.map((col) => (
                          <td key={col.key} className="border px-3 py-2">
                            {col.key === "srno" ? index + 1 : row[col.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <Toaster position="top-right" richColors />
      {/* FIXED INPUT */}
      {chatMode && (
        <div className="fixed bottom-0 left-0 right-0 border-t bg-white px-4 py-3">
          <div className="mx-auto flex w-full max-w-4xl items-end gap-3">

            {/* INPUT BOX */}
            <div className="relative flex-1 rounded-2xl border bg-gray-50 px-4 py-3 shadow-sm">
              <textarea
                rows={2}
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Ask anything"
                className="w-full resize-none bg-transparent text-sm outline-none ai-textarea-height"
              />
              <button className="absolute left-3 bottom-3 text-gray-500">
                <Plus size={18} />
              </button>
              <button className="absolute right-3 bottom-3 text-gray-500">
                <Mic size={18} />
              </button>
            </div>



          </div>
          {/* CLEAR CHAT – RED MARK AREA */}
          <button
            onClick={clearChat}
            className="group relative flex items-center gap-2 whitespace-nowrap rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50
    px-4 py-2 text-xsfont-medium text-red-600 shadow-sm  transition hover:from-red-100 hover:to-rose-100 hover:shadow-md active:scale-95 clear-button cursor-pointer">
            <Trash2
              size={16}
              className="transition-transform group-hover:rotate-12"
            />
            Clear Chat
          </button>
        </div>
      )}

    </div>
  )
}
