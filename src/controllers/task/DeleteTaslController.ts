import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/task/delete/DeleteTaskService";
import AppError from "../../Error/AppError";


export class DeleteTaskController {
    async handle(request: Request, response: Response) {
        const taskId = Number(request.params.id)
        const { email } = response.locals.decoded

        const service: DeleteTaskService = new DeleteTaskService()

        const result: void | Error = await service.execute({taskId, email} )

        if (result instanceof AppError) {
            return response.status(result.status).json({
                status: 'Error',
                message: result.message
            })
        }

        return response.status(204).send() 
    }
}