import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import { userValidationBodyMiddleware } from "../middlewares/userValidationBodyMiddleware";


const userRouter: Router = Router()

userRouter.post("", userValidationBodyMiddleware ,new UserController().handle)

export { userRouter }