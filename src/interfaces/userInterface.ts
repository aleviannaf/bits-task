import z from "zod"
import { userRequestSchema, userResponseSchema, userSchema } from "../schemas/userSchema"

type IUser = z.infer<typeof userSchema>
type IUserRequest = z.infer<typeof userRequestSchema>
type IUserResponse = z.infer<typeof userResponseSchema>


export { IUser, IUserRequest, IUserResponse }