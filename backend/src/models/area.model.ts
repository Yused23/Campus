import { DataTypes } from "sequelize";
import { db } from "../db/db";


export const Area = db.define(
    "area",
    {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    { timestamps: false }
)