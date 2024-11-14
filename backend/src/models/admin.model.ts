import { DataTypes } from "sequelize";
import { db } from "../db/db";

export const Admin = db.define(
    "admin",
    {
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 452,
        },
    }
)