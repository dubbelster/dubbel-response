import { Response } from "express";

export default function dubbelRes(res: Response, statusCode: number, message: string) {
    res.status(statusCode);
    res.send({
        status: statusCode,
        message: message
    });
}