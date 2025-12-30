"use client"

import { useRef, useState, useEffect } from "react"

type PreviewFile = {
  id: string
  file: File
  preview?: string
}

export default function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [dragOver, setDragOver] = useState(false)

  const maxSize = 5 * 1024 * 1024 // 5MB

  /* -------------------- CLEANUP OBJECT URLS -------------------- */
  useEffect(() => {
    return () => {
      files.forEach((f) => {
        if (f.preview) URL.revokeObjectURL(f.preview)
      })
    }
  }, [files])

  /* -------------------- HANDLERS -------------------- */
  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return

    const newFiles: PreviewFile[] = []

    Array.from(selectedFiles).forEach((file) => {
      if (file.size > maxSize) return

      const id = crypto.randomUUID()

      const preview = file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : undefined

      newFiles.push({ id, file, preview })
    })

    setFiles((prev) => [...prev, ...newFiles])
  }

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  /* -------------------- HELPERS -------------------- */
  const totalSize = files.reduce((acc, f) => acc + f.file.size, 0)

  const formatSize = (bytes: number) => {
    if (!bytes) return "0 KB"
    const kb = bytes / 1024
    return kb < 1024
      ? `${kb.toFixed(2)} KB`
      : `${(kb / 1024).toFixed(2)} MB`
  }

  /* -------------------- JSX -------------------- */
  return (
    <div className="w-full max-w-xl space-y-6">
      {/* HEADER */}

      {/* DROP AREA */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          handleFiles(e.dataTransfer.files)
        }}
        className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition
          ${
            dragOver
              ? "border-blue-700 bg-blue-100"
              : "border-blue-500 bg-blue-50"
          }`}
      >
        <div className="text-4xl">📁</div>
        <p className="mt-2 font-medium text-blue-600">
          Drop files here
        </p>
        <p className="text-xs text-gray-500">
         Note: Upload one file at a time. Maximum 10 MB, 5,000 rows.
        </p>

        <button
          type="button"
          className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Browse Files
        </button>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* STATS */}
      {files.length > 0 ? (
        <div className="rounded-lg bg-white p-4 shadow">
          <div className="flex gap-8">
            <div>
              <div className="text-lg font-semibold text-blue-600">
                {files.length}
              </div>
              <div className="text-xs text-gray-500">Files</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-blue-600">
                {formatSize(totalSize)}
              </div>
              <div className="text-xs text-gray-500">
                Total Size
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-sm text-gray-500">
          
        </div>
      )}

      {/* PREVIEWS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {files.map(({ id, file, preview }) => (
          <div
            key={id}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="flex h-20 items-center justify-center bg-gray-100">
              {preview ? (
                <img
                  src={preview}
                  alt={file.name}
                  className="max-h-full object-contain"
                />
              ) : (
                <span className="text-5xl">📄</span>
              )}
            </div>

            <div className="p-3">
              <p className="truncate text-sm font-medium">
                {file.name}
              </p>
              <p className="text-xs text-gray-500">
                {formatSize(file.size)}
              </p>

              <button
                onClick={() => removeFile(id)}
                className="mt-2 rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
