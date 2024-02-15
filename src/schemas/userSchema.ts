import { z } from "zod"

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email().max(100),
    password: z.string().max(120),
})

const userRequestSchema = userSchema.omit({
    id: true
})

const userResponseSchema = userSchema.omit({
    password: true
})

export { userSchema, userRequestSchema, userResponseSchema }
