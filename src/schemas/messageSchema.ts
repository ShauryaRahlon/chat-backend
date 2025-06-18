import {z} from "zod";

export const messageSchema = z.object({
    content:z
        .string()
        .max(300,{message:"content must be no longer than 300 charactedds"})
        .min(10,{message:"content must be at least 10 characters"})
})