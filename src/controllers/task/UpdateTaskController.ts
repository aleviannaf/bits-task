import { Request, Response } from "express";
import { UpdateTaskService } from "../../services/task/update/UpdateTaskService";
import Task from "../../entities/taskEntity";
import AppError from "../../Error/AppError";


export class UpdateTaskController {
    async handle(request: Request, response: Response) {
        const taskId = Number(request.params.id)
        const { email } = response.locals.decoded
        const updateTaskData = request.body

        const service: UpdateTaskService = new UpdateTaskService()

        const result: Task | Error = await service.execute({taskId, email, updateTaskData} )

        if (result instanceof AppError) {
            return response.status(result.status).json({
                status: 'Error',
                message: result.message
            })
        }

        if (result instanceof Error) {
            return response.status(404).json({
                status: 'Error',
                message: result.message
            })
        }

        return response.status(200).json(result) 
    }
}