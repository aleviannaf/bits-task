import "express-async-errors";
import cors from "cors";
import express, {Application, json, request, response} from "express"
import { handleErrorsMiddleware } from "./middlewares/handleErrorsMiddleware"
import { routes } from "./routes"

export const app: Application = express()
app.use(json())

app.use(cors({
    origin: '*', 
    methods: 'GET,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }))



app.use(routes)

app.use(handleErrorsMiddleware)




