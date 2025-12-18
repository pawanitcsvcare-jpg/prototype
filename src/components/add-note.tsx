"use client"

import { ExternalLink } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input"
import { Button } from "@/components/ui/button"


export default function AddNotes() {
  return (
    <div className="w-full max-w-xl rounded-lg border bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 py-3">
        <h3 className="font-medium text-lg">
          Add Notes
        </h3>
        <ExternalLink className="h-4 w-4 text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>

      {/* Notes List */}
      <div className="max-h-96 overflow-y-auto p-4">
             <div>
                  <Label className="mb-2 text-sm">Customer ID</Label>
                  <Input type="text" placeholder=""></Input>
            </div>

            <div className="pt-4">
                  <Label className="mb-2 text-sm">Notes</Label>
                 <Textarea />

                 <div className="pt-4 flex justify-end">
                  <Button type="submit" className="w-full md:w-auto">
                    Submit
                  </Button>
                </div>
            </div>
      </div>
    </div>
  )
}
