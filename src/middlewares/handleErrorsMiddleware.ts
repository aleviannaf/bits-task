import { CelebrateError } from "celebrate";
import { Request, Response, NextFunction } from "express";

export const handleErrorsMiddleware = (
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    if(err instanceof CelebrateError){
        const errorBody = err.details.get('body')
        return response.status(400).json({
            message: errorBody?.message.replace(/"/g, '')
        })
    }

    return response.status(500).json({
        status: 'Error',
        message: `Internal server error ${err.message}`
    })
}