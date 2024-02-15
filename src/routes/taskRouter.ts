import { Router } from "express";
import { CreateTaskController } from "../controllers/task/CreateTaskController";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import { createTaskValidationBodyMiddleware } from "../middlewares/createTaskvalidationBodyMiddleware";
import { ListaTaskController } from "../controllers/task/ListTaskController";
import { RetrieveTaskController } from "../controllers/task/RetrieveTaskController";
import { validatedParamsMiddleware } from "../middlewares/validatedParamsMiddleware";
import { taskValidationBodyMiddleware } from "../middlewares/taskValidationBodyMiddleware";
import { UpdateTaskController } from "../controllers/task/UpdateTaskController";
import { DeleteTaskController } from "../controllers/task/DeleteTaslController";


const taskRouter: Router = Router()

taskRouter.post(
    "",
    createTaskValidationBodyMiddleware,
    verifyTokenMiddleware,
    new CreateTaskController().handle
)

taskRouter.get(
    "",
    verifyTokenMiddleware,
    new ListaTaskController().handle
)

taskRouter.get(
    "/:id",
    validatedParamsMiddleware,
    verifyTokenMiddleware,
    new RetrieveTaskController().handle
)

taskRouter.patch(
    "/:id",
    taskValidationBodyMiddleware,
    validatedParamsMiddleware,
    verifyTokenMiddleware,
    new UpdateTaskController().handle
)

taskRouter.delete(
    "/:id",
    validatedParamsMiddleware,
    verifyTokenMiddleware,
    new DeleteTaskController().handle
)


export { taskRouter }