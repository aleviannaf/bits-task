import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import User from "../../entities/userEntity";
import { IUserResponse } from "../../interfaces/userInterface";

export class UserController {
    async handle(request: Request, response: Response) {
        const { name, password, email } = request.body;

        const service = new CreateUserService();

        const result: IUserResponse | Error = await service.execute({ name, email, password });

        if (result instanceof Error) {
            return response.status(409).json({
                status: 'Error',
                message: result.message
            });
        }

        return response.status(201).json(result);
    }
}