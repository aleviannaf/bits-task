import { ITaskResponse } from "../../../interfaces/taskInterface";
import { TaskRepository, taskRepository } from "../../../repositories/taskRespository"
import { UserRepository, userRepository } from "../../../repositories/userRepository";


interface IRetrieveRequest {
    taskId: number
    email: string
}

export class RetrieveTaskService {
    private repo: TaskRepository = taskRepository;
    private userRepo: UserRepository = userRepository;

    async execute(payload: IRetrieveRequest): Promise<ITaskResponse | Error> {

        const existingUser = await this.userRepo.findOne({ where: { email: payload.email } });

        const task = await this.repo.findOne({
            where: { id: payload.taskId, user: existingUser! },
        });

        if (!task) {
            return new Error("Task not found!")
        }

        return task
    }
}