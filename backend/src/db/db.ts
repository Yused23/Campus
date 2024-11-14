import { Sequelize } from "sequelize-typescript";
import config from "./config";


const db = new Sequelize(
    {
        ...config.getDatabaseConfig(),
        dialect: "postgres",
        models: [__dirname + "/models"],
    }
);

export default db;