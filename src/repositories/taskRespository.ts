import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import Task from "../entities/taskEntity"

export type TaskRepository = Repository<Task>

export const taskRepository: TaskRepository = AppDataSource.getRepository(Task)