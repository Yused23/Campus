"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().nonempty("Email is required").email({
            message: "Write a correct email",
        }),
        password: zod_1.z
            .string()
            .nonempty("Password is required")
            .min(6, "Password too short"),
    }),
});
