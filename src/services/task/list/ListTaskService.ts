import AppError from "../../../Error/AppError";
import {  IListTaskResponse } from "../../../interfaces/taskInterface";
import { TaskRepository, taskRepository } from "../../../repositories/taskRespository"
import { UserRepository, userRepository } from "../../../repositories/userRepository";
import { taskPaginationSchema } from "../../../schemas/taskSchema";

interface IListTaskRequest {
    email: string
    page?: string
    perPage?: string
}


export class ListTaskService {
    private repo: TaskRepository = taskRepository;
    private userRepo: UserRepository = userRepository;

    async execute(payload: IListTaskRequest): Promise<IListTaskResponse | Error> {
        const perPage = Number(payload.perPage) || 5
        const page = payload.page ? Number(payload.page) : 1

        try {

            const existingUser = await this.userRepo.findOne({ where: { email: payload.email } });

            const offset = (page - 1) * perPage;
            const limit = perPage;

            const [tasks, total] = await this.repo.findAndCount({
                where: { user: existingUser! },
                skip: offset,
                take: limit,
            });
 
            if(!tasks){
                return new AppError("Tasks not found!", 404)
            }

            const baseUrl: string = `http://localhost:3000/task`
            const prevPage: string | null = page == 1 ? null : `${baseUrl}?page=${page - 1}&perPage=${perPage}`
            const nextPage: string | null = page >= total / perPage ? null : `${baseUrl}?page=${page + 1}&perPage=${perPage}`

            const pagination: IListTaskResponse = taskPaginationSchema.parse({
                prevPage,
                nextPage,
                currentPage: page,
                totalItens: total,
                data: tasks
            })

            return pagination

        } catch (error) {
            return new AppError('Error when searching for tasks', 500)
        }
    }
}