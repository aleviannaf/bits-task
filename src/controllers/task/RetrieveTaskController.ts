import { Request, Response } from "express";
import { RetrieveTaskService } from "../../services/task/read/RetrieveTaskService";

export class RetrieveTaskController {
    async handle(request: Request, response: Response) {
        const { email } = response.locals.decoded

        const service: RetrieveTaskService = new RetrieveTaskService()


        const result = await service.execute({ email, taskId: Number(request.params.id) })

        if (result instanceof Error) {
            return response.status(404).json({
                status: 'Error',
                message: result.message
            })
        }

        return response.status(200).json(result)
    }
}