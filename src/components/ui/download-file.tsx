"use client"
import { Download  } from "lucide-react"

type DownloadTemplateProps = {
  fileName?: string
  filePath?: string
  title?: string
  description?: string
}

export default function DownloadTFile({
  fileName = "sample-upload.csv",
  filePath = "/templates/sample-upload.csv",
  title = "Download the sample template",
  description = "Fill in your data and upload the completed file below",
}: DownloadTemplateProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full max-w-2xl rounded-xl border border-blue-200 bg-blue-50 p-6">
      <div className="flex items-center justify-between flex-col gap-4">
        {/* LEFT CONTENT */}
        <div className="flex items-center gap-2 flex-col">
          <div className="text-3xl"><Download className="h-8 w-8 text-blue-600" /></div>

          <div className="flex items-center flex-col">
            <h3 className="mt-2 font-medium text-blue-600">
              {title}
            </h3>
            <p className="mt-1 text-xs text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* DOWNLOAD BUTTON */}
        <button
          onClick={handleDownload}
          className="mt-3 rounded-lg bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
        >
          Download
        </button>
      </div>
    </div>
  )
}
