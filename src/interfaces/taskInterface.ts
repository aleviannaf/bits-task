import z from "zod";
import { taskPaginationSchema, taskSchema } from "../schemas/taskSchema";

type ITaskResponse = z.infer<typeof taskSchema>
type IListTaskResponse = z.infer<typeof taskPaginationSchema>

export { ITaskResponse, IListTaskResponse}