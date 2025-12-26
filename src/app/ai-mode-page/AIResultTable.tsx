"use client"

import { recentSearchDataColumns } from "@/lib/recent-search-data"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type Props = {
  data: any[]
  heading: string
  goToUrl?: string
}

export default function AIResultTable({ data, heading, goToUrl }: Props) {
  const router = useRouter()

  return (
    <div className="mt-10 w-full px-3 sm:px-4">
      <div className="mx-auto max-w-4xl chat-bg-all">
        <h3 className="mb-3 text-md font-semibold text-gray-700">
          {heading}
        </h3>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse text-sm">
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

            <tbody>
              {data.map((row, index) => (
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

        {/* ✅ GO TO PAGE BUTTON */}
        {goToUrl && (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => router.push(goToUrl)}
              className="rounded-xl"
            >Go to Page →</Button>
          </div>
        )}
      </div>
    </div>
  )
}
