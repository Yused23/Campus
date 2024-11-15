"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db/db"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send('Hello word!!');
});
app.use("/api/users", users_routes_1.default);
const main = async () => {
    try {
        db_1.default.authenticate()
            .then(() => console.log("Database authenticated"))
            .catch((err) => console.log(err));
        db_1.default.sync({ force: false })
            .then(() => console.log("Database synced"))
            .catch((err) => console.log(err));
        app.listen(PORT, () => {
            console.log(`Express app running on port: ${PORT}`);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
main();
