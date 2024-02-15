import { ITaskResponse } from "../../../interfaces/taskInterface";
import { TaskRepository, taskRepository } from "../../../repositories/taskRespository"
import { UserRepository, userRepository } from "../../../repositories/userRepository";
import { taskSchema } from "../../../schemas/taskSchema";

interface CreateTaskRequest {
    title: string
    content: string
    userId: string
    email: string
}


export class CreateTaskService {
    private _taskRepo: TaskRepository = taskRepository;
    private _userRepo: UserRepository = userRepository;

    async execute(payload: CreateTaskRequest): Promise<ITaskResponse | Error> {
        try {
            const user = await this._userRepo.findOne({ where: { email: payload.email } });
            const task = this._taskRepo.create({
                title: payload.title,
                content: payload.content,
                user: user!
            });

            await this._taskRepo.save(task);
            
            return taskSchema.parse(task);
        } catch (error) {
            return new Error('Error creating a task')
        }

    }

}