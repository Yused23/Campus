import { Request, Response } from "express";

import {
    // CreateAreaSchema,
    // UpdateAreaSchema,
    CreateAreaType,
    // UpdateAreaQueryType
} from "../schemas/area.schema";


export const createArea = (
    req: Request<unknown, unknown, CreateAreaType>,
    res: Response
) => {
    const { name } = req.body;

    console.log(name)

    return res.send("Creating area")
}