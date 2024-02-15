import { Router } from "express";
import { SessionController } from "../controllers/session/SessionController";
import { sessionValidationBodyMiddleware } from "../middlewares/sessionValidationBodyMiddleware";


const sessionRouter: Router = Router()

sessionRouter.post("", sessionValidationBodyMiddleware ,new SessionController().handle)

export { sessionRouter }