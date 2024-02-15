import { Router, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";

const swaggerRouter: Router = Router()

swaggerRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
swaggerRouter.get('/swagger', (request: Request, response: Response)=>{
    return response.sendFile(process.cwd() + '/swagger.json')
})
swaggerRouter.get("/docs", (request: Request, response: Response)=>{
    return response.sendFile(process.cwd() + '/index.html')
})

export { swaggerRouter }