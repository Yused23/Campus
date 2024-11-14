import { Optional } from "sequelize";

import {
    Table,
    Model,
    Column,
    DataType,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';


enum Mentor {
    Starter = "starter",
    Professional = "professional",
    Expert = "expert"
}


enum UserExplorer {
    Explorer = "explorer",
    Buyer = "buyer",
}


type UserRole = Mentor | UserExplorer | "admin";


interface UserAttributes {
    id: string;
    name: string;
    last_name: string;
    identification: string;
    image: string;
    city: string;
    areaId: string;
    positionId: string;
    role: UserRole;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

@Table({
    timestamps: true,
    tableName: "users",
    modelName: "User"
})

export default class User extends Model<

    UserAttributes,
    UserCreationAttributes
> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
    })

    declare name: string;
    declare last_name: string;
    declare identification: string;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;

}



// import { db } from "../db/db";

// export const User = db.define('user', {
//     name: {
//         allowNull: false,
//         type: DataTypes.STRING,
//     },
//     lastName: {
//         allowNull: false,
//         type: DataTypes.STRING,
//     },
//     identification: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         unique: true,
//     },
//     image: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         defaultValue: "default.png",
//     },

//     city: {
//         allowNull: false,
//         type: DataTypes.STRING,
//     },

//     areaId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     positionId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     role: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         defaultValue: "collaborator",
//     },
//     status: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         defaultValue: "active",
//     },
// });
