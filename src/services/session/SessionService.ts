import "dotenv/config";
import { compare } from "bcryptjs";
import { UserRepository, userRepository } from "../../repositories/userRepository";
import { sign } from "jsonwebtoken";
import { ISessionRequest, ISessionResponse } from "../../interfaces/sessionInterfaces";




export class SessionService {
    private userRepo: UserRepository = userRepository;
    async execute(payload: ISessionRequest): Promise<ISessionResponse | Error> {
        const existingUser = await this.userRepo.findOne({ where: { email: payload.email } });

        if (!existingUser) {
            return new Error("Email or password is incorrect!")
        }

        const samePassword: boolean = await compare(payload.password, existingUser.password)

        if (!samePassword) {
            return new Error("Email or password is incorrect")
        }

        const token: string = sign(
            { email: existingUser.email },
            process.env.SECRET_KEY!,
            { subject: existingUser.id.toString(), expiresIn: process.env.EXPIRES_IN!}
        )

        return { token }
    }
}