import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const verifyTokenMiddleware = (req: Request, response: Response, next: NextFunction) => {
    const autorization: string | undefined = req.headers.authorization

    if (!autorization) {
        return response.status(401).json({
            status: 'Error',
            message: "Missing bearer token"
        })
    }

    const token: string = autorization.split(" ")[1]

    verify(token, process.env.SECRET_KEY!, (err, decoded) => {
        if (err) {
            return response.status(401).json({
                status: 'Error',
                message: err.message
            })
        }

        response.locals = { ...response.locals, decoded }

        return next()
    })
}

