import { z } from "zod"

export const uploadSchema = z.object({
  id: z.number(), // Sr No
  batchNumber: z.string(),
  fileName: z.string(),
  totalUploaded: z.number(),
  totalSuccess: z.number(),
  totalFailure: z.number(),
  uploadedBy: z.string(),
  uploadedDatetime: z.string(),
  status: z.object({
    newSim: z.number(),
    completed: z.number(),
    processing: z.number(),
    failed: z.number(),
  }),
})
