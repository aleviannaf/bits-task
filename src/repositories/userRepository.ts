import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import User from "../entities/userEntity"

export type UserRepository = Repository<User>

export const userRepository: UserRepository = AppDataSource.getRepository(User)