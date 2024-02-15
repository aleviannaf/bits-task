import AppError from "../../../Error/AppError";
import Task from "../../../entities/taskEntity";
import { TaskRepository, taskRepository } from "../../../repositories/taskRespository";
import { UserRepository, userRepository } from "../../../repositories/userRepository";

interface IUpdateTaskData{
    title?: string
    content?: string
}

interface UpdateTaskRequest {
    taskId: number
    email: string
    updateTaskData: IUpdateTaskData
}

export class UpdateTaskService {
    private taskRepo: TaskRepository = taskRepository;
    private userRepo: UserRepository = userRepository;

    async execute(payload: UpdateTaskRequest): Promise<Task | Error> {

        try {
            const existingUser = await this.userRepo.findOne({ where: { email: payload.email } });

            const existingTask = await this.taskRepo.findOne({
                where: { id: payload.taskId, user: existingUser! },
            });

            if (!existingTask) {
                return new AppError("Task not fount!", 404)
            }

            this.taskRepo.merge(existingTask, payload.updateTaskData);

            const updatedTask = await this.taskRepo.save(existingTask);

            return updatedTask
        } catch (error) {
            return new AppError("Internal server error", 500)
        }

    }
}
