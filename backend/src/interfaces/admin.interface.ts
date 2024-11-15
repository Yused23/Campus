import { Optional } from "sequelize";

export interface AdminAttributes {
    id: string;
    UserId: string;
}


export interface AdminCreationAttributes extends Optional<AdminAttributes, "id"> { }