import { Request, Response } from "express";
import { SessionService } from "../../services/session/SessionService";
import { ISessionResponse } from "../../interfaces/sessionInterfaces";

export class SessionController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const service: SessionService = new SessionService()

        const result: ISessionResponse | Error = await service.execute({ email, password })

        if (result instanceof Error) {
            return response.status(401).json({
                status: 'Error',
                message: result.message
            })
        }

        return response.status(200).json(result)
    }
}