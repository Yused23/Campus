import { z } from "zod";

export const CreateAreaSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }).min(3)
    })
})

export const UpdateAreaSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }).min(3)
    }),
    query: z.object({
        name: z.string(),
    }),
})


export type CreateAreaType = z.infer<typeof CreateAreaSchema>["body"];

export type UpdateAreaType = z.infer<typeof UpdateAreaSchema>["body"];

export type UpdateAreaQueryType = z.infer<typeof UpdateAreaSchema>["query"];