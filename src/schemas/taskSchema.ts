import { z } from "zod"

const taskSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
})


const taskPaginationSchema = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    currentPage: z.number().positive(),
    totalItens: z.number(),
    data: taskSchema.array()
})

export { taskSchema, taskPaginationSchema }
