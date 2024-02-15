import { hash } from "bcryptjs";
import User from "../../entities/userEntity";
import { userRepository } from "../../repositories/userRepository";
import { IUserRequest, IUserResponse } from "../../interfaces/userInterface";
import { userResponseSchema } from "../../schemas/userSchema";



export class CreateUserService {
    async execute(payload: IUserRequest): Promise<IUserResponse | Error> {
        const existingUser = await userRepository.findOne({ where: { email: payload.email } });

        if (existingUser) {
            return new Error("Email already exists!")
        }

        payload.password = await hash(payload.password, 10)

        const user: User = userRepository.create({
            name: payload.name,
            email: payload.email,
            password: payload.password
        })

        await userRepository.save(user)

        return  userResponseSchema.parse(user)
    }
}