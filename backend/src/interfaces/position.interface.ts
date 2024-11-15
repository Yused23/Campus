import { Optional } from "sequelize";

export interface PositionAttributes {
    id: string;
    name: string;
}

export interface PositionCreationAttributes extends Optional<PositionAttributes, "id"> { }
