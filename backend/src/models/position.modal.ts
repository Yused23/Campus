import { DataTypes } from "sequelize";
import { db } from "../db/db";



export const Position = db.define("position",
    {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    { timestamps: false }
)