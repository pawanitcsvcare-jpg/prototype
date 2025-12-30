"use client"

import { Download } from "lucide-react"
import clsx from "clsx"

type DownloadButtonProps = {
  text?: string
  className?: string
  onClick?: () => void
}

export default function DownloadButton({
  text = "Download",
  className,
  onClick,
}: DownloadButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-flex mx-1 items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 transition focus:outline-none focus:ring-2 focus:ring-green-600",
        className
      )}
    >
      <Download className="h-4 w-4" />
      {text}
    </button>
  )
}
