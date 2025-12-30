import { z } from "zod"
import { uploadSchema } from "@/lib/upload-schema"

export const uploadTableData: z.infer<typeof uploadSchema>[] = [
  {
    id: 1,
    batchNumber: "16881160411",
    fileName: "Subscriber-List_2023-06-28 12 50 50.csv",
    totalUploaded: 1,
    totalSuccess: 0,
    totalFailure: 1,
    uploadedBy: "Demo_vcareDish",
    uploadedDatetime: "06-30-2023 05:07:21",
    status: {
      newSim: 0,
      completed: 0,
      processing: 0,
      failed: 0,
    },
  },
  {
    id: 2,
    batchNumber: "16881164022",
    fileName: "Subscriber-List_2023-06-28 12 50 50.csv",
    totalUploaded: 1,
    totalSuccess: 0,
    totalFailure: 1,
    uploadedBy: "Demo_vcareDish",
    uploadedDatetime: "06-30-2023 05:13:22",
    status: {
      newSim: 0,
      completed: 0,
      processing: 0,
      failed: 0,
    },
  },
]
