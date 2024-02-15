import { Router } from "express";
import { userRouter } from "./userRouter";
import { taskRouter } from "./taskRouter";
import { sessionRouter } from "./sessionRouter";
import { swaggerRouter } from "./swaggerRouter";

const routes: Router = Router()

routes.use(swaggerRouter)
routes.use("/user", userRouter)
routes.use("/task", taskRouter)
routes.use("/login", sessionRouter)


export { routes }