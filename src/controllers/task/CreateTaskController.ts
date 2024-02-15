import { Request, Response } from "express";
import { CreateTaskService } from "../../services/task/create/CreateTaskService";
import { ITaskResponse } from "../../interfaces/taskInterface";

export class CreateTaskController {
    async handle(request: Request, response: Response) {
        const { title, content } = request.body;
        const { sub, email } = response.locals.decoded

        const service = new CreateTaskService()

        const result: ITaskResponse| Error = await service.execute({ title, content, email, userId: sub });

        if (result instanceof Error) {
            return response.status(500).json({
                status: 'Error',
                message: result.message
            });
        }

        return response.status(201).json(result);
    }
}