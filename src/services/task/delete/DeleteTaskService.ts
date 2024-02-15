import AppError from "../../../Error/AppError";
import { TaskRepository, taskRepository } from "../../../repositories/taskRespository"
import { UserRepository, userRepository } from "../../../repositories/userRepository";


interface IDeleteRequest {
    taskId: number
    email: string
}

export class DeleteTaskService {
    private taskRepo: TaskRepository = taskRepository;
    private userRepo: UserRepository = userRepository;


async execute(payload: IDeleteRequest): Promise<void | Error> {
    try {
        const existingUser = await this.userRepo.findOne({ where: { email: payload.email } });

        if (!existingUser) {
            return new AppError("User not found!", 404);
        }

        const deleteResult = await this.taskRepo.delete({
            id: payload.taskId,
            user: existingUser,
        });

        if (deleteResult.affected === 0) {
            return new AppError("Task not found!", 404);
        }

    } catch (error) {
        return new AppError("Internal server error", 500);
    }
}

}