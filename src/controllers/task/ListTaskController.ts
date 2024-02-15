import { Request, Response } from "express";
import { ListTaskService } from "../../services/task/list/ListTaskService";
import { IListTaskResponse } from "../../interfaces/taskInterface";
import AppError from "../../Error/AppError";

export class ListaTaskController {
    async handle(request: Request, response: Response) {
        const { email } = response.locals.decoded

        const service: ListTaskService = new ListTaskService()

        const result: IListTaskResponse | Error = await service.execute({ email, ...request.query })

        if (result instanceof AppError) {
            return response.status(result.status).json({
                status: 'Error',
                message: result.message
            })
        }

        return response.status(200).json(result)
    }
}