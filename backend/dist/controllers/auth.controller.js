"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res) => {
    try {
        console.log(req.body);
        res.send("login");
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.login = login;
