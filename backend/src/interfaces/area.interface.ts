import { Optional } from "sequelize";

export interface AreaAttributes {
    id: string;
    name: string;
}

export interface AreaCreationAttributes extends Optional<AreaAttributes, "id"> { }
